import { BookOpen, Calendar, Clock, Coins, Compass, Sparkles, Trophy, Volume2, Pause, Play } from 'lucide-react';
import { BOOK_METADATA, STORY_OVERVIEW } from '../data/storyData';
import { useAudio } from '../context/AudioContext';

interface OverviewSectionProps {
  language?: 'ar' | 'en';
}

export function OverviewSection({ language = 'ar' }: OverviewSectionProps) {
  const isEn = language === 'en';
  const { isPlaying, isPaused, currentTrack, currentParagraphIndex, startReadingTrack, togglePlayPause, jumpToParagraph } = useAudio();

  const isThisSynopsisActive = currentTrack?.id === 'overview-synopsis';
  const isThisSynopsisSpeaking = isThisSynopsisActive && isPlaying && !isPaused;
  const isThisSynopsisPaused = isThisSynopsisActive && isPaused;

  const synopsisParagraphs = (isEn ? STORY_OVERVIEW.synopsisEn : STORY_OVERVIEW.synopsis)
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  const handleToggleSynopsisAudio = () => {
    if (isThisSynopsisActive) {
      togglePlayPause();
    } else {
      startReadingTrack({
        id: 'overview-synopsis',
        title: isEn ? 'Comprehensive Novel Synopsis' : 'ملخص الرواية الشامل',
        lang: isEn ? 'en' : 'ar',
        paragraphs: synopsisParagraphs,
      });
    }
  };

  return (
    <section className="space-y-6">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isEn ? 'Comprehensive Novel Overview' : 'ملخص شامل للرواية'}
            </span>
            <span className="bg-stone-800/80 text-stone-300 text-xs px-3 py-1 rounded-full font-medium">
              {isEn ? 'Year 1872' : '1872 م'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-50 tracking-tight leading-snug">
            {isEn
              ? 'Around the World in Eighty Days — Detailed Summary'
              : 'ملخص رواية حول العالم في ثمانين يوماً'}
          </h2>

          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-4xl">
            {isEn ? STORY_OVERVIEW.hookEn : STORY_OVERVIEW.hook}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs mb-1">
                <Coins className="w-3.5 h-3.5" />
                <span>{isEn ? 'The Wager' : 'قيمة الرهان'}</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-white">
                {isEn ? '20,000 Pounds' : '20,000 £'}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{isEn ? 'Time Limit' : 'المدة المحددة'}</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-white">
                {isEn ? '80 Days' : '80 يوماً'}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{isEn ? 'Start Date' : 'تاريخ البداية'}</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-white">
                {isEn ? 'Oct 2, 1872' : '2 أكتوبر 1872'}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs mb-1">
                <Trophy className="w-3.5 h-3.5" />
                <span>{isEn ? 'Target Return' : 'موعد العودة'}</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-white">
                {isEn ? 'Dec 21, 1872' : '21 ديسمبر 1872'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Synopsis & Morals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-lg">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <h3>{isEn ? 'Story Narrative and Complete Synopsis' : 'القصة باختصار (الملخص العام)'}</h3>
            </div>
            <button
              type="button"
              onClick={handleToggleSynopsisAudio}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isThisSynopsisSpeaking
                  ? 'bg-amber-700 text-white border-amber-600 shadow-sm ring-2 ring-amber-300'
                  : isThisSynopsisPaused
                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                  : 'border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-amber-900'
              }`}
            >
              {isThisSynopsisSpeaking ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{isEn ? 'Pause Synopsis' : 'إيقاف مؤقت'}</span>
                  <span className="inline-flex items-center gap-0.5 ms-0.5">
                    <span className="w-1 h-2 bg-amber-300 rounded-full animate-pulse" />
                    <span className="w-1 h-3 bg-amber-200 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-1.5 bg-amber-400 rounded-full animate-pulse delay-150" />
                  </span>
                </>
              ) : isThisSynopsisPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current text-amber-800" />
                  <span>{isEn ? 'Resume' : 'استئناف'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>{isEn ? 'Listen to Synopsis' : 'استمع للملخص'}</span>
                </>
              )}
            </button>
          </div>

          <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            {synopsisParagraphs.map((p, idx) => {
              const isSpeaking = isThisSynopsisActive && isPlaying && !isPaused && currentParagraphIndex === idx;
              const isPausedState = isThisSynopsisActive && isPaused && currentParagraphIndex === idx;

              return (
                <div
                  key={idx}
                  id={`story-paragraph-overview-synopsis-${idx}`}
                  className={`group relative rounded-xl transition-all duration-300 p-3.5 ${
                    isSpeaking
                      ? 'bg-amber-50/95 border-s-4 border-amber-600 ring-1 ring-amber-400/40 shadow-xs'
                      : isPausedState
                      ? 'bg-stone-100/90 border-s-4 border-amber-400 ring-1 ring-stone-300'
                      : 'hover:bg-amber-50/20'
                  }`}
                >
                  {isSpeaking && (
                    <div className="flex items-center gap-1.5 pb-2 text-xs font-mono font-bold text-amber-900">
                      <Volume2 className="w-3 h-3 text-amber-700 animate-pulse" />
                      <span>{isEn ? `Reading section ${idx + 1} of ${synopsisParagraphs.length}...` : `قراءة المقطع ${idx + 1} من ${synopsisParagraphs.length}...`}</span>
                    </div>
                  )}

                  <p>{p}</p>

                  <div className="flex items-center justify-end pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => {
                        if (isThisSynopsisActive) {
                          jumpToParagraph(idx);
                        } else {
                          startReadingTrack(
                            {
                              id: 'overview-synopsis',
                              title: isEn ? 'Comprehensive Novel Synopsis' : 'ملخص الرواية الشامل',
                              lang: isEn ? 'en' : 'ar',
                              paragraphs: synopsisParagraphs,
                            },
                            idx
                          );
                        }
                      }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-2xs font-semibold bg-white hover:bg-amber-100 text-stone-700 hover:text-amber-950 border border-stone-200 shadow-2xs transition-colors"
                      title={isEn ? 'Read from here' : 'استمع من هنا'}
                    >
                      <Play className="w-2.5 h-2.5 fill-amber-700 text-amber-700" />
                      <span>{isEn ? 'Read from here' : 'استمع من هنا'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <Compass className="w-5 h-5 text-amber-700" />
              <h4>{isEn ? 'Core Themes and Lessons' : 'المغزى والدروس المستفادة'}</h4>
            </div>
            <div className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
              {isEn ? STORY_OVERVIEW.moralEn : STORY_OVERVIEW.moral}
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {isEn ? 'Textbook Reference Information' : 'بيانات النسخة المدرسية'}
            </div>
            <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
              <li className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-400">{isEn ? 'Original Author:' : 'المؤلف الأصلي:'}</span>
                <span className="font-medium text-stone-800">
                  {isEn ? BOOK_METADATA.authorEn : BOOK_METADATA.author}
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-400">{isEn ? 'Text Adaptation:' : 'إعداد النص:'}</span>
                <span className="font-medium text-stone-800">
                  {isEn ? BOOK_METADATA.adaptationEn : BOOK_METADATA.adaptation}
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-400">{isEn ? 'Curriculum Level:' : 'المستوى:'}</span>
                <span className="font-medium text-stone-800">
                  {isEn ? BOOK_METADATA.seriesEn : BOOK_METADATA.series}
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-400">{isEn ? 'Target Journey Time:' : 'مدة الرحلة:'}</span>
                <span className="font-medium text-stone-800">
                  {isEn ? BOOK_METADATA.durationEn : BOOK_METADATA.duration}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
