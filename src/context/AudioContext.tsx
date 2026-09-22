import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export interface AudioTrackInfo {
  id?: string | number;
  title: string;
  lang: 'ar' | 'en';
  paragraphs: string[];
}

export interface AudioContextType {
  isPlaying: boolean;
  isPaused: boolean;
  currentTrack: AudioTrackInfo | null;
  currentParagraphIndex: number;
  playbackRate: number;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  autoScroll: boolean;
  startReadingTrack: (track: AudioTrackInfo, startParagraphIndex?: number) => void;
  togglePlayPause: () => void;
  stopAudio: () => void;
  skipNextParagraph: () => void;
  skipPrevParagraph: () => void;
  jumpToParagraph: (index: number) => void;
  setRate: (rate: number) => void;
  setVoice: (voice: SpeechSynthesisVoice | null) => void;
  setAutoScroll: (enabled: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<AudioTrackInfo | null>(null);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  // Ref to hold the active utterance to prevent garbage collection in Chrome
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const currentTrackRef = useRef<AudioTrackInfo | null>(null);
  const paragraphIndexRef = useRef<number>(0);
  const playbackRateRef = useRef<number>(1.0);
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const autoScrollRef = useRef<boolean>(true);

  // Sync refs
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    paragraphIndexRef.current = currentParagraphIndex;
  }, [currentParagraphIndex]);

  useEffect(() => {
    playbackRateRef.current = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    selectedVoiceRef.current = selectedVoice;
  }, [selectedVoice]);

  useEffect(() => {
    autoScrollRef.current = autoScroll;
  }, [autoScroll]);

  // Load available voices
  useEffect(() => {
    const updateVoices = () => {
      if (!('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    updateVoices();
    if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  // Pick best default voice when track changes language
  const getBestVoiceForLang = useCallback(
    (lang: 'ar' | 'en', voicesList: SpeechSynthesisVoice[]) => {
      if (selectedVoiceRef.current) {
        // If selected voice matches the requested language, keep it
        const prefix = lang === 'ar' ? 'ar' : 'en';
        if (selectedVoiceRef.current.lang.toLowerCase().startsWith(prefix)) {
          return selectedVoiceRef.current;
        }
      }

      const prefix = lang === 'ar' ? 'ar' : 'en';
      const matchingVoices = voicesList.filter((v) =>
        v.lang.toLowerCase().startsWith(prefix)
      );

      if (matchingVoices.length === 0) return null;

      // Prefer natural, Google, or Siri voices if available
      const naturalVoice = matchingVoices.find(
        (v) =>
          v.name.toLowerCase().includes('natural') ||
          v.name.toLowerCase().includes('google') ||
          v.name.toLowerCase().includes('premium') ||
          v.name.toLowerCase().includes('enhanced')
      );
      return naturalVoice || matchingVoices[0];
    },
    []
  );

  // Function to speak a specific paragraph index
  const speakParagraph = useCallback((track: AudioTrackInfo, index: number) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    if (!track.paragraphs || index >= track.paragraphs.length || index < 0) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraphIndex(0);
      return;
    }

    setCurrentParagraphIndex(index);
    paragraphIndexRef.current = index;
    setIsPlaying(true);
    setIsPaused(false);

    const textToSpeak = track.paragraphs[index].trim();
    if (!textToSpeak) {
      // Skip empty paragraph
      if (index + 1 < track.paragraphs.length) {
        speakParagraph(track, index + 1);
      } else {
        setIsPlaying(false);
      }
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    activeUtteranceRef.current = utterance;

    // Set language and voice
    utterance.lang = track.lang === 'ar' ? 'ar-SA' : 'en-US';
    const voiceToUse =
      selectedVoiceRef.current &&
      selectedVoiceRef.current.lang.toLowerCase().startsWith(track.lang === 'ar' ? 'ar' : 'en')
        ? selectedVoiceRef.current
        : getBestVoiceForLang(track.lang, window.speechSynthesis.getVoices());

    if (voiceToUse) {
      utterance.voice = voiceToUse;
    }

    utterance.rate = playbackRateRef.current;
    utterance.pitch = 1.0;

    // Auto-scroll to element if enabled
    if (autoScrollRef.current) {
      setTimeout(() => {
        const targetId = `story-paragraph-${track.id || 'default'}-${index}`;
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }

    utterance.onend = () => {
      // Advance to next paragraph if still playing
      if (isPlayingRef.current) {
        const nextIdx = index + 1;
        if (nextIdx < track.paragraphs.length) {
          speakParagraph(track, nextIdx);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
        }
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis utterance error:', e);
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    // Avoid Chrome GC bug by speaking immediately
    window.speechSynthesis.speak(utterance);
  }, [getBestVoiceForLang]);

  // Start reading a track
  const startReadingTrack = useCallback(
    (track: AudioTrackInfo, startParagraphIndex: number = 0) => {
      if (!('speechSynthesis' in window)) {
        alert(
          track.lang === 'en'
            ? 'Speech synthesis is not supported on this browser'
            : 'القارئ الصوتي غير مدعوم في هذا المتصفح'
        );
        return;
      }

      setCurrentTrack(track);
      currentTrackRef.current = track;
      speakParagraph(track, startParagraphIndex);
    },
    [speakParagraph]
  );

  // Toggle play / pause
  const togglePlayPause = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

    if (!isPlaying) {
      if (currentTrack) {
        speakParagraph(currentTrack, currentParagraphIndex);
      }
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isPlaying, isPaused, currentTrack, currentParagraphIndex, speakParagraph]);

  // Stop audio completely
  const stopAudio = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  // Skip to next paragraph
  const skipNextParagraph = useCallback(() => {
    if (!currentTrack) return;
    const nextIdx = currentParagraphIndex + 1;
    if (nextIdx < currentTrack.paragraphs.length) {
      speakParagraph(currentTrack, nextIdx);
    } else {
      stopAudio();
    }
  }, [currentTrack, currentParagraphIndex, speakParagraph, stopAudio]);

  // Skip to previous paragraph
  const skipPrevParagraph = useCallback(() => {
    if (!currentTrack) return;
    const prevIdx = Math.max(0, currentParagraphIndex - 1);
    speakParagraph(currentTrack, prevIdx);
  }, [currentTrack, currentParagraphIndex, speakParagraph]);

  // Jump to specific paragraph
  const jumpToParagraph = useCallback(
    (index: number) => {
      if (!currentTrack) return;
      speakParagraph(currentTrack, index);
    },
    [currentTrack, speakParagraph]
  );

  // Change playback rate smoothly
  const setRate = useCallback(
    (newRate: number) => {
      setPlaybackRate(newRate);
      playbackRateRef.current = newRate;
      if (isPlaying && currentTrack && !isPaused) {
        // Re-speak current paragraph with the new rate
        speakParagraph(currentTrack, currentParagraphIndex);
      }
    },
    [isPlaying, currentTrack, isPaused, currentParagraphIndex, speakParagraph]
  );

  // Change voice
  const setVoice = useCallback(
    (newVoice: SpeechSynthesisVoice | null) => {
      setSelectedVoice(newVoice);
      selectedVoiceRef.current = newVoice;
      if (isPlaying && currentTrack && !isPaused) {
        speakParagraph(currentTrack, currentParagraphIndex);
      }
    },
    [isPlaying, currentTrack, isPaused, currentParagraphIndex, speakParagraph]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isPaused,
        currentTrack,
        currentParagraphIndex,
        playbackRate,
        availableVoices,
        selectedVoice,
        autoScroll,
        startReadingTrack,
        togglePlayPause,
        stopAudio,
        skipNextParagraph,
        skipPrevParagraph,
        jumpToParagraph,
        setRate,
        setVoice,
        setAutoScroll,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
