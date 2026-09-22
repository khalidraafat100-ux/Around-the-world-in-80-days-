import { useState, useId } from 'react';
import { useAudio } from '../context/AudioContext';
import {
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  Gauge,
  ChevronDown,
  ChevronUp,
  Radio,
  Eye,
  Settings2,
} from 'lucide-react';

interface AudioPlayerDockProps {
  language: 'ar' | 'en';
}

export function AudioPlayerDock({ language }: AudioPlayerDockProps) {
  const {
    isPlaying,
    isPaused,
    currentTrack,
    currentParagraphIndex,
    playbackRate,
    availableVoices,
    selectedVoice,
    autoScroll,
    togglePlayPause,
    stopAudio,
    skipNextParagraph,
    skipPrevParagraph,
    jumpToParagraph,
    setRate,
    setVoice,
    setAutoScroll,
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const voiceSelectId = useId();

  // Only render if a track is active (playing, paused, or loaded)
  if (!currentTrack || (!isPlaying && !isPaused)) {
    return null;
  }

  const isEn = language === 'en';
  const totalParagraphs = currentTrack.paragraphs.length;
  const progressPercent = totalParagraphs > 0 ? ((currentParagraphIndex + 1) / totalParagraphs) * 100 : 0;

  // Filter voices matching current track language
  const trackLangPrefix = currentTrack.lang === 'ar' ? 'ar' : 'en';
  const filteredVoices = availableVoices.filter((v) =>
    v.lang.toLowerCase().startsWith(trackLangPrefix)
  );

  return (
    <aside
      aria-label={isEn ? 'Interactive Narration Player' : 'مشغل القراءة الصوتية التفاعلي'}
      className="fixed bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-auto sm:right-6 sm:max-w-2xl sm:w-full z-50 transition-all duration-300 pointer-events-auto"
    >
      <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 text-stone-100 rounded-2xl border border-amber-600/40 shadow-2xl backdrop-blur-md overflow-hidden ring-1 ring-amber-500/20">
        {/* Top Mini Progress Line (Clickable across paragraphs) */}
        <div
          className="h-1.5 w-full bg-stone-800 cursor-pointer flex"
          title={isEn ? 'Click any segment to jump paragraph' : 'انقر على أي مقطع للانتقال لتلك الفقرة'}
        >
          {Array.from({ length: totalParagraphs }).map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => jumpToParagraph(idx)}
              className={`h-full flex-1 transition-all border-r border-stone-900/60 ${
                idx < currentParagraphIndex
                  ? 'bg-amber-600'
                  : idx === currentParagraphIndex
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-stone-800 hover:bg-stone-700'
              }`}
            />
          ))}
        </div>

        {/* Main Dock Header Bar */}
        <div className="p-3 sm:p-4 flex items-center justify-between gap-3">
          {/* Left: Track Information & Frequency Waveform */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Animated Equalizer Waveform */}
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center gap-0.5 shrink-0 px-2">
              <div
                className={`w-1 bg-amber-400 rounded-full transition-all duration-150 ${
                  isPlaying && !isPaused ? 'h-5 animate-pulse' : 'h-1.5'
                }`}
              />
              <div
                className={`w-1 bg-amber-500 rounded-full transition-all duration-200 delay-75 ${
                  isPlaying && !isPaused ? 'h-7 animate-pulse' : 'h-3'
                }`}
              />
              <div
                className={`w-1 bg-amber-300 rounded-full transition-all duration-150 delay-150 ${
                  isPlaying && !isPaused ? 'h-4 animate-pulse' : 'h-2'
                }`}
              />
              <div
                className={`w-1 bg-amber-500 rounded-full transition-all duration-200 delay-100 ${
                  isPlaying && !isPaused ? 'h-6 animate-pulse' : 'h-1.5'
                }`}
              />
            </div>

            {/* Title & Status */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-3xs uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-600/30 flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
                  <span>
                    {isPaused
                      ? isEn
                        ? 'Paused'
                        : 'موقوف مؤقتاً'
                      : isEn
                      ? 'Live Narration'
                      : 'قراءة صوتية حية'}
                  </span>
                </span>
                <span className="text-2xs font-mono text-stone-400">
                  {isEn
                    ? `Par. ${currentParagraphIndex + 1} / ${totalParagraphs}`
                    : `فقرة ${currentParagraphIndex + 1} من ${totalParagraphs}`}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-amber-100 truncate mt-0.5">
                {currentTrack.title}
              </h4>
            </div>
          </div>

          {/* Center/Right: Interactive Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Previous Paragraph */}
            <button
              type="button"
              onClick={skipPrevParagraph}
              disabled={currentParagraphIndex === 0}
              className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed text-stone-300 hover:text-white transition-colors border border-stone-700"
              title={isEn ? 'Previous paragraph' : 'الفقرة السابقة'}
            >
              <SkipBack className="w-4 h-4" />
            </button>

            {/* Main Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlayPause}
              className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold flex items-center gap-1.5 transition-transform active:scale-95 shadow-md"
              title={isPaused ? (isEn ? 'Resume' : 'استئناف') : (isEn ? 'Pause' : 'إيقاف مؤقت')}
            >
              {isPaused ? <Play className="w-4 h-4 fill-stone-950" /> : <Pause className="w-4 h-4 fill-stone-950" />}
              <span className="hidden sm:inline text-xs font-bold">
                {isPaused ? (isEn ? 'Resume' : 'متابعة') : (isEn ? 'Pause' : 'إيقاف')}
              </span>
            </button>

            {/* Next Paragraph */}
            <button
              type="button"
              onClick={skipNextParagraph}
              disabled={currentParagraphIndex >= totalParagraphs - 1}
              className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed text-stone-300 hover:text-white transition-colors border border-stone-700"
              title={isEn ? 'Next paragraph' : 'الفقرة التالية'}
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Stop Audio */}
            <button
              type="button"
              onClick={stopAudio}
              className="p-2 rounded-xl bg-stone-800/80 hover:bg-rose-900/40 text-stone-300 hover:text-rose-300 transition-colors border border-stone-700"
              title={isEn ? 'Stop reading' : 'إنهاء القراءة'}
            >
              <Square className="w-4 h-4 fill-current" />
            </button>

            {/* Settings Toggle */}
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-xl border transition-colors ${
                showSettings
                  ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:text-white'
              }`}
              title={isEn ? 'Speech rate & Voice settings' : 'إعدادات السرعة والصوت'}
            >
              <Settings2 className="w-4 h-4" />
            </button>

            {/* Minimize Toggle */}
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 rounded-xl bg-stone-800/60 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
              title={isMinimized ? (isEn ? 'Expand' : 'توسيع') : (isEn ? 'Collapse' : 'تصغير')}
            >
              {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Horological Audio Settings & Voice Selector */}
        {showSettings && !isMinimized && (
          <div className="p-3 sm:p-4 bg-stone-950/90 border-t border-amber-900/40 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Playback Rate Gears */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isEn ? 'Narration Speed:' : 'سرعة الإلقاء:'}</span>
                  </span>
                  <span className="font-mono text-amber-400">{playbackRate}x</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {[0.75, 1.0, 1.25, 1.5].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setRate(rate)}
                      className={`py-1 rounded-md text-center font-mono text-2xs transition-all ${
                        playbackRate === rate
                          ? 'bg-amber-600 text-white font-bold'
                          : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Narrator Voice Picker */}
              <div className="space-y-1.5">
                <label htmlFor={voiceSelectId} className="flex items-center gap-1 text-stone-300">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEn ? 'Narrator Voice:' : 'صوت الراوي:'}</span>
                </label>
                <select
                  id={voiceSelectId}
                  value={selectedVoice?.name || ''}
                  onChange={(e) => {
                    const voice = availableVoices.find((v) => v.name === e.target.value) || null;
                    setVoice(voice);
                  }}
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-2 py-1 text-2xs text-stone-200 focus:outline-hidden focus:border-amber-500"
                >
                  <option value="">
                    {isEn ? '— Default Natural Voice —' : '— الصوت الطبيعي الافتراضي —'}
                  </option>
                  {(filteredVoices.length > 0 ? filteredVoices : availableVoices).map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name.length > 28 ? v.name.slice(0, 28) + '...' : v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>

              {/* Auto-Follow / Auto-Scroll Option */}
              <div className="space-y-1.5">
                <span className="text-stone-300 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEn ? 'Viewport Tracking:' : 'تتبع موضع القراءة:'}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setAutoScroll(!autoScroll)}
                  className={`w-full py-1 px-2.5 rounded-lg border text-2xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    autoScroll
                      ? 'bg-amber-900/50 border-amber-500 text-amber-200'
                      : 'bg-stone-800 border-stone-700 text-stone-400'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${autoScroll ? 'bg-amber-400' : 'bg-stone-500'}`} />
                  <span>
                    {autoScroll
                      ? isEn
                        ? 'Auto-Follow Paragraph (ON)'
                        : 'متابعة وتمرير الشاشة (مفعّل)'
                      : isEn
                      ? 'Auto-Follow (OFF)'
                      : 'تتبع الشاشة (معطل)'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
