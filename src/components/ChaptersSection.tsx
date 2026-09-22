import { useState } from 'react';
import { Chapter, CHAPTERS } from '../data/storyData';
import { BookMarked, MapPin, Navigation, Quote, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface ChaptersSectionProps {
  language?: 'ar' | 'en';
}

export function ChaptersSection({ language = 'ar' }: ChaptersSectionProps) {
  const isEn = language === 'en';
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const currentChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];

  return (
    <div className="space-y-6">
      {/* Chapter navigation tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {CHAPTERS.map((ch) => {
          const isActive = ch.id === selectedChapterId;
          const displayTitle = isEn
            ? ch.titleEn.replace(/^Chapter \d+:\s*/, '')
            : ch.titleAr.split(':')[1] || ch.titleAr;

          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => setSelectedChapterId(ch.id)}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {ch.id}
              </span>
              <span>{displayTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Chapter Content Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-5">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              {isEn ? currentChapter.pagesEn : currentChapter.pages}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              {isEn ? currentChapter.titleEn : currentChapter.titleAr}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-mono mt-0.5">
              {isEn ? currentChapter.titleAr : currentChapter.titleEn}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={selectedChapterId === 1}
              onClick={() => setSelectedChapterId((prev) => Math.max(1, prev - 1))}
              className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title={isEn ? 'Previous Chapter' : 'الفصل السابق'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-xs text-stone-400 font-medium px-2">
              {isEn
                ? `${selectedChapterId} of ${CHAPTERS.length}`
                : `${selectedChapterId} من ${CHAPTERS.length}`}
            </span>
            <button
              type="button"
              disabled={selectedChapterId === CHAPTERS.length}
              onClick={() => setSelectedChapterId((prev) => Math.min(CHAPTERS.length, prev + 1))}
              className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title={isEn ? 'Next Chapter' : 'الفصل التالي'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Detailed Chapter Summary Text */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-amber-600" />
            <span>{isEn ? 'Chapter Narrative Summary' : 'ملخص أحداث الفصل'}</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-stone-50/60 p-4 sm:p-5 rounded-xl border border-stone-100">
            {isEn ? currentChapter.summaryEn : currentChapter.summaryAr}
          </p>
        </div>

        {/* Key Events */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{isEn ? 'Milestones and Key Plot Events' : 'أبرز الأحداث والمحطات الفارقة'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(isEn ? currentChapter.keyEventsEn : currentChapter.keyEvents).map((evt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200/70 text-xs sm:text-sm text-stone-700 shadow-2xs"
              >
                <span className="w-5 h-5 shrink-0 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <span>{evt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata grid: Locations, Transport, Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Locations */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{isEn ? 'Geographic Locations' : 'المواقع والبلدان'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(isEn ? currentChapter.locationsEn : currentChapter.locations).map((loc, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white px-2.5 py-1 rounded-md text-stone-600 border border-stone-200 font-medium"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
              <Navigation className="w-3.5 h-3.5 text-blue-500" />
              <span>{isEn ? 'Transportation Methods' : 'وسائل النقل المستخدمة'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(isEn ? currentChapter.transportEn : currentChapter.transport).map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white px-2.5 py-1 rounded-md text-stone-600 border border-stone-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quotes */}
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
              <Quote className="w-3.5 h-3.5 text-amber-700" />
              <span>{isEn ? 'Notable Excerpt' : 'اقتباس شهير من الفصل'}</span>
            </div>
            <div className="space-y-1.5">
              {(isEn ? currentChapter.famousQuotesEn : currentChapter.famousQuotes).map((q, idx) => (
                <div key={idx} className="text-xs text-stone-700 italic">
                  <span className="font-bold not-italic text-amber-800">{q.speaker}: </span>
                  "{q.text}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
