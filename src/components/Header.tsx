import { Globe, BookOpen, Volume2, VolumeX, Download, FileSpreadsheet } from 'lucide-react';

interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  onOpenSheetsModal: () => void;
  language: 'ar' | 'en';
  onToggleLanguage: () => void;
}

export function Header({
  isPlayingAudio,
  onToggleAudio,
  onOpenSheetsModal,
  language,
  onToggleLanguage,
}: HeaderProps) {
  const isEn = language === 'en';

  return (
    <header className="bg-white border-b border-amber-100/80 sticky top-0 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300/40 flex items-center justify-center text-amber-700 shadow-inner">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                {isEn ? 'Around the World in Eighty Days' : 'حول العالم في ثمانين يوماً'}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium border border-amber-200">
                {isEn ? 'Complete Study Guide' : 'تلخيص شامل'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
              <span>{isEn ? 'Novel by Jules Verne' : 'رواية جول فيرن'}</span>
              <span>•</span>
              <span>
                {isEn
                  ? 'Oxford University Press (Family and Friends Readers 5)'
                  : 'سلسلة Family and Friends 5 (Oxford)'}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors shadow-2xs"
            title={isEn ? 'تبديل للغة العربية' : 'Switch to English'}
          >
            <Globe className="w-4 h-4 text-amber-700" />
            <span>{isEn ? 'العربية' : 'English Summary'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleAudio}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              isPlayingAudio
                ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
            title={
              isPlayingAudio
                ? isEn
                  ? 'Stop spoken audio'
                  : 'إيقاف القراءة الصوتية'
                : isEn
                ? 'Listen to narration'
                : 'استماع للملخص صوتياً'
            }
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
            <span>
              {isPlayingAudio
                ? isEn
                  ? 'Stop Audio'
                  : 'إيقاف الصوت'
                : isEn
                ? 'Read Aloud'
                : 'استماع صوتي'}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenSheetsModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors shadow-xs"
            title="Google Sheets"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Google Sheets</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            title={isEn ? 'Print or Save as PDF' : 'طباعة أو حفظ كـ PDF'}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{isEn ? 'Print / PDF' : 'طباعة / PDF'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
