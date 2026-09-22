import { useState } from 'react';
import { Header } from './components/Header';
import { FullStorySection } from './components/FullStorySection';
import { OverviewSection } from './components/OverviewSection';
import { ChaptersSection } from './components/ChaptersSection';
import { CharactersSection } from './components/CharactersSection';
import { RouteMapSection } from './components/RouteMapSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { MechanicalSection } from './components/MechanicalSection';
import { SheetsExportModal } from './components/SheetsExportModal';
import { AudioPlayerDock } from './components/AudioPlayerDock';
import { AudioProvider, useAudio } from './context/AudioContext';
import { Users, MapPin, CheckSquare, Sparkles, ScrollText, Cog } from 'lucide-react';
import { STORY_OVERVIEW } from './data/storyData';

function AppContent() {
  const [activeTab, setActiveTab] = useState<'full_story' | 'overview' | 'chapters' | 'characters' | 'route' | 'activities' | 'mechanical'>('full_story');
  const [language, setLanguage] = useState<'ar' | 'en'>('en'); // Default to English
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState(false);

  const { isPlaying, isPaused, togglePlayPause, startReadingTrack, stopAudio } = useAudio();
  const isEn = language === 'en';

  const handleToggleLanguage = () => {
    stopAudio();
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  // Fluid speech synthesis narration triggered from header
  const handleToggleAudio = () => {
    if (isPlaying || isPaused) {
      togglePlayPause();
    } else {
      const title = isEn ? 'Overview of Around the World in Eighty Days' : 'ملخص رواية حول العالم في ثمانين يوماً';
      const rawText = isEn
        ? `${STORY_OVERVIEW.hookEn}\n\n${STORY_OVERVIEW.synopsisEn}`
        : `${STORY_OVERVIEW.hook}\n\n${STORY_OVERVIEW.synopsis}`;
      const paragraphs = rawText.split('\n\n').map((p) => p.trim()).filter(Boolean);

      startReadingTrack({
        id: 'overview-narration',
        title,
        lang: isEn ? 'en' : 'ar',
        paragraphs,
      });
    }
  };

  return (
    <div
      dir={isEn ? 'ltr' : 'rtl'}
      className="min-h-screen bg-[#faf8f5] text-stone-800 flex flex-col selection:bg-amber-200 pb-28"
    >
      {/* Top Header */}
      <Header
        isPlayingAudio={isPlaying && !isPaused}
        onToggleAudio={handleToggleAudio}
        onOpenSheetsModal={() => setIsSheetsModalOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white p-1.5 sm:p-2 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between gap-2 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('full_story')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'full_story'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <ScrollText className="w-4 h-4" />
              <span>{isEn ? 'The Complete Story' : 'القصة كاملة'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isEn ? 'General Overview' : 'الملخص العام'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('chapters')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'chapters'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{isEn ? 'Chapters Summary' : 'ملخص الفصول'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('characters')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'characters'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{isEn ? 'Characters' : 'الشخصيات'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('route')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'route'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{isEn ? 'Route & Itinerary' : 'خط السير والمحطات'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('activities')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'activities'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>{isEn ? 'Exercises & Answers' : 'حل الأنشطة والتمارين'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mechanical')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'mechanical'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Cog className={`w-4 h-4 ${activeTab === 'mechanical' ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
              <span>{isEn ? 'Mechanical Inventions' : 'المحركات والآلات الميكانيكية'}</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-xl">
            {isEn ? 'Language: English' : 'اللغة: العربية'}
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'full_story' && (
          <FullStorySection language={language} />
        )}
        {activeTab === 'overview' && <OverviewSection language={language} />}
        {activeTab === 'chapters' && <ChaptersSection language={language} />}
        {activeTab === 'characters' && <CharactersSection language={language} />}
        {activeTab === 'route' && <RouteMapSection language={language} />}
        {activeTab === 'activities' && <ActivitiesSection language={language} />}
        {activeTab === 'mechanical' && <MechanicalSection language={language} />}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-stone-200/80 py-6 text-center text-xs text-stone-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            {isEn ? (
              <>
                Study Companion for <strong>Around the World in Eighty Days</strong> by Jules Verne
              </>
            ) : (
              <>
                تطبيق تلخيص كتاب <strong>"حول العالم في ثمانين يوماً" (Around the World in Eighty Days)</strong>
              </>
            )}
          </p>
          <p className="text-stone-400">
            {isEn
              ? 'Adapted for learners following the Oxford Family and Friends 5 curriculum'
              : 'مبني للدارسين والطلاب وفق منهاج Family and Friends 5 - دار نشر جامعة أكسفورد'}
          </p>
        </div>
      </footer>

      {/* Google Sheets Modal */}
      <SheetsExportModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
      />

      {/* Floating Victorian Horological Interactive Audio Dock */}
      <AudioPlayerDock language={language} />
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}
