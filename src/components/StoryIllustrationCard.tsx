import React, { useState } from 'react';
import { Maximize2, X, Compass, Image as ImageIcon, Sparkles } from 'lucide-react';
import { ChapterIllustration } from '../data/fullStoryData';

interface StoryIllustrationCardProps {
  illustration: ChapterIllustration;
  isEn: boolean;
  chapterNumber: number;
}

export const StoryIllustrationCard: React.FC<StoryIllustrationCardProps> = ({
  illustration,
  isEn,
  chapterNumber,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const plateLabel = isEn ? illustration.plateNumber : illustration.plateNumberAr;
  const sceneTitle = isEn ? illustration.sceneTitleEn : illustration.sceneTitleAr;
  const caption = isEn ? illustration.captionEn : illustration.captionAr;
  const altText = isEn ? illustration.altEn : illustration.altAr;

  return (
    <>
      <figure
        id={`illustration-plate-${chapterNumber}`}
        className="my-6 rounded-2xl overflow-hidden border border-stone-300/80 bg-linear-to-b from-stone-50 via-amber-50/30 to-stone-100 shadow-sm transition-all duration-300 hover:shadow-md"
      >
        {/* Ornate Victorian Plate Header */}
        <div className="px-4 py-2.5 bg-stone-900 text-stone-200 border-b border-amber-900/40 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono font-bold tracking-widest text-amber-300 uppercase text-3xs sm:text-2xs">
              {plateLabel}
            </span>
            <span className="text-stone-500">•</span>
            <span className="font-serif font-medium text-stone-300 text-2xs sm:text-xs truncate max-w-[220px] sm:max-w-md">
              {sceneTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1 text-3xs font-semibold px-2 py-1 rounded-md bg-stone-800 hover:bg-amber-600 hover:text-white text-stone-300 border border-stone-700 transition-colors shrink-0"
            title={isEn ? 'View plate in high resolution' : 'عرض اللوحة بالدقة الكاملة'}
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline">{isEn ? 'Enlarge Plate' : 'تكبير اللوحة'}</span>
          </button>
        </div>

        {/* Image Container with Framing */}
        <div className="relative group overflow-hidden bg-stone-950/90 aspect-16/9 sm:aspect-21/9 max-h-[460px] flex items-center justify-center">
          <img
            src={illustration.src}
            alt={altText}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          />

          {/* Vignette & Corner Accents */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/20 bg-linear-to-t from-stone-950/60 via-transparent to-black/20" />

          {/* Quick Zoom Pill Button on Hover */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-stone-900/85 backdrop-blur-xs text-amber-200 border border-amber-500/40 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg"
          >
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{isEn ? 'Inspect Engraving' : 'فحص الرسم التوضيحي'}</span>
          </button>

          {/* Chapter Badge Overlay */}
          <div className="absolute top-3 start-3 bg-stone-900/80 backdrop-blur-xs text-stone-200 border border-stone-700 px-2.5 py-1 rounded-lg text-3xs font-mono font-bold tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{isEn ? `Chapter ${chapterNumber} Illustrated` : `الفصل ${chapterNumber} مصور`}</span>
          </div>
        </div>

        {/* Victorian Engraving Plaque & Legend */}
        <figcaption className="p-4 sm:p-5 bg-white border-t border-stone-200/90">
          <div className="max-w-3xl mx-auto space-y-1.5 text-center">
            <h5 className="font-serif font-bold text-sm sm:text-base text-stone-900 tracking-wide">
              {sceneTitle}
            </h5>
            <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
              "{caption}"
            </p>
            <div className="pt-2 flex items-center justify-center gap-3 text-3xs text-stone-600 font-mono">
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-600" />
                <span>{isEn ? 'Classic 1872 Folio Engraving' : 'رسم حجري تاريخي أصيل (1872)'}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-stone-600" />
                <span>{isEn ? 'Jules Verne Heritage Series' : 'مجموعة جول فيرن التراثية'}</span>
              </span>
            </div>
          </div>
        </figcaption>
      </figure>

      {/* Fullscreen Victorian Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-stone-900 border border-amber-600/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/30">
                  {plateLabel}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100 truncate">
                  {sceneTitle}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors border border-stone-700"
                title={isEn ? 'Close view' : 'إغلاق'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-0 bg-stone-950 flex items-center justify-center p-2 sm:p-4 overflow-auto">
              <img
                src={illustration.src}
                alt={altText}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
              />
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 sm:p-5 bg-stone-950/95 border-t border-stone-800 text-center space-y-1.5">
              <p className="text-xs sm:text-sm text-stone-300 font-serif italic max-w-3xl mx-auto leading-relaxed">
                "{caption}"
              </p>
              <p className="text-3xs font-mono text-stone-500">
                {isEn
                  ? 'Around the World in Eighty Days • Complete Novel Illustrated Edition'
                  : 'حول العالم في ثمانين يوماً • الطبعة الروائية الكاملة المزودة بالرسوم التوضيحية'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
