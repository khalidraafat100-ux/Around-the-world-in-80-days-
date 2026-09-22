import { useState, useEffect } from 'react';
import { COMPLETE_NOVEL_STORY, StoryChapterText } from '../data/fullStoryData';
import { useAudio } from '../context/AudioContext';
import {
  BookOpen,
  Calendar,
  MapPin,
  Quote,
  Sparkles,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  List,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Bookmark,
  BookmarkCheck,
  Play,
  Pause,
  RotateCcw,
  Type,
  Gauge,
  Clock,
  SlidersHorizontal,
  Download,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';
import { StoryIllustrationCard } from './StoryIllustrationCard';

interface FullStorySectionProps {
  language?: 'ar' | 'en';
}

type FontStyleType = 'serif' | 'sans' | 'mono';

export function FullStorySection({
  language = 'ar',
}: FullStorySectionProps) {
  const isEn = language === 'en';
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'continuous'>('single');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  // --- Advanced Mechanical Reading Controls ---
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<FontStyleType>('serif');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);
  const [scrollSpeed, setScrollSpeed] = useState<number>(1.5);
  const [bookmarkedChapterId, setBookmarkedChapterId] = useState<number | null>(() => {
    const saved = localStorage.getItem('around_the_world_bookmark');
    return saved ? parseInt(saved, 10) : null;
  });
  const [showControls, setShowControls] = useState<boolean>(false);
  const [showIllustrations, setShowIllustrations] = useState<boolean>(true);

  // Auto-scroll loop
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    if (isAutoScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy({
          top: scrollSpeed * 2,
          behavior: 'smooth',
        });
      }, 50);
    }
    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling, scrollSpeed]);

  const handleBookmark = (chapterId: number) => {
    if (bookmarkedChapterId === chapterId) {
      setBookmarkedChapterId(null);
      localStorage.removeItem('around_the_world_bookmark');
    } else {
      setBookmarkedChapterId(chapterId);
      localStorage.setItem('around_the_world_bookmark', chapterId.toString());
    }
  };

  const currentChapter =
    COMPLETE_NOVEL_STORY.find((c) => c.id === selectedChapterId) || COMPLETE_NOVEL_STORY[0];

  const handleCopyChapter = (chapter: StoryChapterText) => {
    const text = isEn
      ? `${chapter.titleEn}\n\nSetting: ${chapter.settingEn}\nDates: ${chapter.datesEn}\n\n${chapter.fullStoryParagraphsEn.join('\n\n')}`
      : `${chapter.titleAr}\n\nالمكان: ${chapter.settingAr}\nالتاريخ: ${chapter.datesAr}\n\n${chapter.fullStoryParagraphsAr.join('\n\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(chapter.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const {
    isPlaying: isAudioPlaying,
    isPaused: isAudioPaused,
    currentTrack: activeAudioTrack,
    currentParagraphIndex: activeParagraphIndex,
    startReadingTrack,
    togglePlayPause,
    jumpToParagraph,
  } = useAudio();

  const handleToggleSpeakChapter = (chapter: StoryChapterText, startParagraphIndex: number = 0) => {
    if (activeAudioTrack?.id === chapter.id) {
      togglePlayPause();
    } else {
      const paragraphs = isEn ? chapter.fullStoryParagraphsEn : chapter.fullStoryParagraphsAr;
      const title = isEn ? chapter.titleEn : chapter.titleAr;
      startReadingTrack(
        {
          id: chapter.id,
          title,
          lang: isEn ? 'en' : 'ar',
          paragraphs,
        },
        startParagraphIndex
      );
    }
  };

  const getFullNovelText = () => {
    const separator = '='.repeat(60);
    return COMPLETE_NOVEL_STORY.map((c) => {
      const title = isEn ? c.titleEn : c.titleAr;
      const setting = isEn ? `Setting: ${c.settingEn}` : `المكان: ${c.settingAr}`;
      const dates = isEn ? `Dates: ${c.datesEn}` : `التاريخ: ${c.datesAr}`;
      const paragraphs = isEn
        ? c.fullStoryParagraphsEn.join('\n\n')
        : c.fullStoryParagraphsAr.join('\n\n');
      const quote = isEn
        ? `"${c.highlightQuoteEn.quote}" — ${c.highlightQuoteEn.speaker}`
        : `"${c.highlightQuoteAr.quote}" — ${c.highlightQuoteAr.speaker}`;
      return `${title}\n${setting}\n${dates}\n\n${paragraphs}\n\n${isEn ? 'Highlight Quote' : 'اقتباس مميز'}:\n${quote}\n\n${separator}`;
    }).join('\n\n');
  };

  const handleCopyAll = () => {
    const fullText = getFullNovelText();
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleDownloadText = () => {
    const fullText = getFullNovelText();
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isEn
      ? 'Around_the_World_in_Eighty_Days_Complete_Novel.txt'
      : 'رواية_حول_العالم_في_ثمانين_يوما_القصة_الكاملة.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Quick mechanical search chips
  const quickSearchKeywords = isEn
    ? ['Locomotive', 'Henrietta', 'Boiler', 'Fix', 'Aouda', 'Kiouni', 'Sledge', 'Reform Club']
    : ['قاطرة', 'هنرييتا', 'مرجل', 'فيكس', 'عودة', 'كيوني', 'زلاجة', 'نادي الإصلاح'];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white rounded-2xl p-6 sm:p-7 shadow-md relative overflow-hidden border border-amber-900/30">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isEn ? 'Unabridged Novel Narrative' : 'النص الكامل للرواية'}
              </span>
              <span className="bg-stone-800 text-stone-300 text-xs px-2.5 py-1 rounded-full font-mono">
                {isEn ? '6 Chapters • Complete Text' : '6 فصول كاملة بالتفصيل'}
              </span>
              {bookmarkedChapterId && (
                <span className="bg-amber-600/30 text-amber-200 border border-amber-500/40 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <BookmarkCheck className="w-3 h-3 text-amber-400" />
                  {isEn ? `Saved: Ch. ${bookmarkedChapterId}` : `محفوظ: ف ${bookmarkedChapterId}`}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-amber-50 tracking-tight">
              {isEn
                ? 'Around the World in Eighty Days — The Complete Story'
                : 'رواية حول العالم في ثمانين يوماً — القصة الكاملة'}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {isEn
                ? 'Read the complete literary journey of Phileas Fogg, Jean Passepartout, and Aouda, complete with dialogue, historical contexts, and thrilling mechanical turning points.'
                : 'اقرأ القصة الكاملة والمفصلة لمغامرة فيلياس فوج وباسبارتو والأميرة عودة بأسلوب سردي ممتع ومشوّق يغطي كافة التفاصيل والمحطات الهندسية والميكانيكية للرواية العالمية.'}
            </p>
          </div>

          {/* Top Actions Bar */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {/* Copy Full Story */}
            <button
              type="button"
              onClick={handleCopyAll}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all bg-stone-800/80 text-stone-200 border border-stone-700 hover:text-white hover:bg-stone-700"
              title={isEn ? 'Copy entire novel text without loss' : 'نسخ نص الرواية بالكامل بدون نقصان'}
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copiedAll ? (isEn ? 'Novel Copied!' : 'تم نسخ الرواية!') : (isEn ? 'Copy Full Story' : 'نسخ القصة كاملة')}</span>
            </button>

            {/* Download Full Story as TXT */}
            <button
              type="button"
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all bg-stone-800/80 text-stone-200 border border-stone-700 hover:text-white hover:bg-stone-700"
              title={isEn ? 'Download complete novel as text file' : 'تحميل الرواية الكاملة كملف نصي'}
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'Download .TXT' : 'تحميل القصة'}</span>
            </button>

            {/* Listen to Active Chapter */}
            <button
              type="button"
              onClick={() => handleToggleSpeakChapter(currentChapter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                activeAudioTrack?.id === currentChapter.id && isAudioPlaying && !isAudioPaused
                  ? 'bg-amber-600 text-white border-amber-500 ring-2 ring-amber-400'
                  : activeAudioTrack?.id === currentChapter.id && isAudioPaused
                  ? 'bg-amber-800 text-amber-100 border-amber-600'
                  : 'bg-stone-800/80 text-stone-200 border-stone-700 hover:text-white hover:bg-stone-700'
              }`}
              title={isEn ? 'Listen to chapter narration' : 'استماع صوتي للفصل'}
            >
              {activeAudioTrack?.id === currentChapter.id && isAudioPlaying && !isAudioPaused ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current text-white" />
                  <span>{isEn ? 'Pause Narration' : 'إيقاف مؤقت'}</span>
                </>
              ) : activeAudioTrack?.id === currentChapter.id && isAudioPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current text-amber-300" />
                  <span>{isEn ? 'Resume' : 'استئناف'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEn ? 'Listen' : 'استماع'}</span>
                </>
              )}
            </button>

            {/* Toggle Story Illustrations */}
            <button
              type="button"
              onClick={() => setShowIllustrations(!showIllustrations)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                showIllustrations
                  ? 'bg-amber-700/90 text-amber-100 border-amber-500 ring-1 ring-amber-400/50'
                  : 'bg-stone-800/80 text-stone-400 border-stone-700 hover:text-white'
              }`}
              title={isEn ? 'Toggle story illustrations' : 'تبديل عرض الرسوم التوضيحية'}
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>{showIllustrations ? (isEn ? 'Plates: ON' : 'اللوحات: مفعّلة') : (isEn ? 'Plates: OFF' : 'اللوحات: معطلة')}</span>
            </button>

            {/* Toggle Advanced Controls */}
            <button
              type="button"
              onClick={() => setShowControls(!showControls)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                showControls
                  ? 'bg-amber-500 text-stone-900 border-amber-400'
                  : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{isEn ? 'Mechanical Controls' : 'التحكم الميكانيكي'}</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-lg border border-stone-700">
              <button
                type="button"
                onClick={() => setViewMode('single')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'single'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>{isEn ? 'Chapter' : 'فصل'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('continuous')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'continuous'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <List className="w-3 h-3" />
                <span>{isEn ? 'Continuous' : 'متصل'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Mechanical Reading Control Panel (Expandable) */}
      {showControls && (
        <div className="bg-stone-900 text-white rounded-2xl p-4 sm:p-5 border border-amber-900/40 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              {isEn ? 'Mechanical Reading Apparatus' : 'أدوات الضبط والمحاكاة الميكانيكية للقراءة'}
            </span>

            {/* Auto Scroll Gear Controls */}
            <div className="flex items-center gap-2">
              <span className="text-2xs text-stone-400 hidden sm:inline">
                {isEn ? 'Hands-Free Auto-Scroll:' : 'التمرير الميكانيكي التلقائي:'}
              </span>
              <button
                type="button"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isAutoScrolling
                    ? 'bg-amber-500 text-stone-950 animate-pulse'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {isAutoScrolling ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isAutoScrolling ? (isEn ? 'Pause Scroll' : 'إيقاف') : (isEn ? 'Auto-Scroll' : 'تمرير تلقائي')}</span>
              </button>

              {/* Speed Gears */}
              <div className="flex items-center gap-1 bg-stone-800 p-0.5 rounded-lg text-2xs font-mono">
                {[1, 1.5, 2, 3].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => setScrollSpeed(spd)}
                    className={`px-2 py-0.5 rounded ${
                      scrollSpeed === spd ? 'bg-amber-600 text-white font-bold' : 'text-stone-400'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Typography Scale Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-stone-300">
                <span className="flex items-center gap-1">
                  <Type className="w-3.5 h-3.5 text-amber-400" />
                  {isEn ? 'Font Zoom Gauge:' : 'مقياس حجم الخط:'}
                </span>
                <span className="font-mono text-amber-300">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="14"
                max="24"
                step="1"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-stone-700 rounded-lg"
              />
              <div className="flex justify-between text-3xs text-stone-500 font-mono">
                <span>14px</span>
                <span>18px</span>
                <span>24px</span>
              </div>
            </div>

            {/* Typeface Selector */}
            <div className="space-y-1.5">
              <span className="text-stone-300 block">
                {isEn ? 'Escapement Typeface:' : 'نوع الخط الهندسي:'}
              </span>
              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  onClick={() => setFontFamily('serif')}
                  className={`py-1 px-2 rounded-lg text-2xs font-serif text-center transition-all ${
                    fontFamily === 'serif'
                      ? 'bg-amber-600 text-white font-bold'
                      : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  {isEn ? 'Classic Serif' : 'كلاسيكي تقليدي'}
                </button>
                <button
                  type="button"
                  onClick={() => setFontFamily('sans')}
                  className={`py-1 px-2 rounded-lg text-2xs font-sans text-center transition-all ${
                    fontFamily === 'sans'
                      ? 'bg-amber-600 text-white font-bold'
                      : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  {isEn ? 'Modern Sans' : 'عصري نقي'}
                </button>
                <button
                  type="button"
                  onClick={() => setFontFamily('mono')}
                  className={`py-1 px-2 rounded-lg text-2xs font-mono text-center transition-all ${
                    fontFamily === 'mono'
                      ? 'bg-amber-600 text-white font-bold'
                      : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  {isEn ? 'Technical Mono' : 'ميكانيكي تقني'}
                </button>
              </div>
            </div>

            {/* Story Illustrations Toggle */}
            <div className="space-y-1.5">
              <span className="text-stone-300 block">
                {isEn ? 'Illustrated Plates (Folio):' : 'الرسوم واللوحات التوضيحية:'}
              </span>
              <button
                type="button"
                onClick={() => setShowIllustrations(!showIllustrations)}
                className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  showIllustrations
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>
                  {showIllustrations
                    ? (isEn ? 'Engravings Displayed' : 'اللوحات معروضة')
                    : (isEn ? 'Pure Text Only' : 'النص فقط')}
                </span>
              </button>
            </div>

            {/* Bookmark Indicator */}
            <div className="space-y-1.5">
              <span className="text-stone-300 block">
                {isEn ? 'Horological Bookmark:' : 'علامة الحفظ المرجعية:'}
              </span>
              <button
                type="button"
                onClick={() => handleBookmark(selectedChapterId)}
                className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  bookmarkedChapterId === selectedChapterId
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                }`}
              >
                {bookmarkedChapterId === selectedChapterId ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Chapter Bookmarked' : 'الفصل محفوظ'}</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Bookmark This Chapter' : 'حفظ موضع هذا الفصل'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Story Search Transceiver */}
      <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 px-2">
          <Search className="w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isEn
                ? 'Search novel events, machines, or characters (e.g. locomotive, Henrietta, Fix)...'
                : 'ابحث في أحداث الرواية أو الآلات أو الشخصيات (مثل: قاطرة، هنرييتا، فيكس)...'
            }
            className="w-full text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden bg-transparent"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-2xs text-stone-400 hover:text-stone-700 px-2"
            >
              {isEn ? 'Clear' : 'مسح'}
            </button>
          )}
        </div>

        {/* Quick Keyword Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-stone-100">
          <span className="text-3xs text-stone-400 uppercase font-mono shrink-0">
            {isEn ? 'Quick Filter:' : 'كلمات مفتاحية:'}
          </span>
          {quickSearchKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setSearchQuery(kw)}
              className="text-2xs px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-900 transition-colors whitespace-nowrap"
            >
              {kw}
            </button>
          ))}
        </div>
      </div>

      {/* Chapter Selection Bar */}
      <div className="bg-white p-2 rounded-2xl border border-stone-200/80 shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-thin">
        {COMPLETE_NOVEL_STORY.map((chapter) => {
          const isSelected = selectedChapterId === chapter.id;
          const isBookmarked = bookmarkedChapterId === chapter.id;
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => {
                setSelectedChapterId(chapter.id);
                if (viewMode === 'continuous') {
                  const el = document.getElementById(`chapter-card-${chapter.id}`);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200/70'
              }`}
            >
              <img
                src={chapter.illustration.src}
                alt=""
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded-md object-cover border border-stone-300/60 shrink-0"
              />
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isSelected ? 'bg-amber-700 text-amber-100' : 'bg-stone-200 text-stone-600'
                }`}
              >
                {chapter.id}
              </span>
              <span>
                {isEn
                  ? chapter.titleEn.split(':')[1]?.trim().slice(0, 24) + '...'
                  : chapter.titleAr.split(':')[1]?.trim().slice(0, 24) + '...'}
              </span>
              {isBookmarked && (
                <BookmarkCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Narrative Presentation */}
      {viewMode === 'single' ? (
        <SingleChapterCard
          chapter={currentChapter}
          isEn={isEn}
          fontSize={fontSize}
          fontFamily={fontFamily}
          searchQuery={searchQuery}
          showIllustrations={showIllustrations}
          onCopy={() => handleCopyChapter(currentChapter)}
          isCopied={copiedId === currentChapter.id}
          onBookmark={() => handleBookmark(currentChapter.id)}
          isBookmarked={bookmarkedChapterId === currentChapter.id}
          onNext={() => setSelectedChapterId((prev) => Math.min(6, prev + 1))}
          onPrev={() => setSelectedChapterId((prev) => Math.max(1, prev - 1))}
          hasPrev={selectedChapterId > 1}
          hasNext={selectedChapterId < 6}
        />
      ) : (
        <div className="space-y-8">
          <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-800 text-amber-50 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">
                  {isEn ? 'Continuous Novel Reader (All 6 Chapters)' : 'وضع قراءة الرواية المتصل (كامل الفصول الستة)'}
                </h4>
                <p className="text-xs text-amber-800/80">
                  {isEn
                    ? 'Unabridged literary narrative presented seamlessly from London to Yokohama and back to the Reform Club.'
                    : 'النص السردي الكامل بدون انقطاع، من انطلاق لندن حتى العودة لنادي الإصلاح.'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1.5 rounded-xl border border-amber-200 shrink-0">
              <span>{isEn ? '6 Chapters • Complete Text & Folio Plates' : '6 فصول كاملة مع اللوحات التوضيحية'}</span>
            </div>
          </div>

          {COMPLETE_NOVEL_STORY.map((chapter) => (
            <div key={chapter.id} id={`chapter-card-${chapter.id}`}>
              <SingleChapterCard
                chapter={chapter}
                isEn={isEn}
                fontSize={fontSize}
                fontFamily={fontFamily}
                searchQuery={searchQuery}
                showIllustrations={showIllustrations}
                onCopy={() => handleCopyChapter(chapter)}
                isCopied={copiedId === chapter.id}
                onBookmark={() => handleBookmark(chapter.id)}
                isBookmarked={bookmarkedChapterId === chapter.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface SingleChapterCardProps {
  chapter: StoryChapterText;
  isEn: boolean;
  fontSize: number;
  fontFamily: FontStyleType;
  searchQuery: string;
  showIllustrations: boolean;
  onCopy: () => void;
  isCopied: boolean;
  onBookmark: () => void;
  isBookmarked: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

function SingleChapterCard({
  chapter,
  isEn,
  fontSize,
  fontFamily,
  searchQuery,
  showIllustrations,
  onCopy,
  isCopied,
  onBookmark,
  isBookmarked,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: SingleChapterCardProps) {
  const {
    isPlaying,
    isPaused,
    currentTrack,
    currentParagraphIndex,
    startReadingTrack,
    togglePlayPause,
    jumpToParagraph,
  } = useAudio();

  const rawParagraphs = isEn ? chapter.fullStoryParagraphsEn : chapter.fullStoryParagraphsAr;
  const quote = isEn ? chapter.highlightQuoteEn : chapter.highlightQuoteAr;
  const moments = isEn ? chapter.dramaticMomentsEn : chapter.dramaticMomentsAr;

  // Approximate words and estimated mechanical reading time
  const totalWords = rawParagraphs.reduce((acc, p) => acc + p.split(/\s+/).length, 0);
  const readingMinutes = Math.max(1, Math.ceil(totalWords / 200));

  const isThisChapterTrack = currentTrack?.id === chapter.id;
  const isThisChapterSpeaking = isThisChapterTrack && isPlaying && !isPaused;
  const isThisChapterPaused = isThisChapterTrack && isPaused;

  const handleToggleNarration = () => {
    if (isThisChapterTrack) {
      togglePlayPause();
    } else {
      const paragraphs = isEn ? chapter.fullStoryParagraphsEn : chapter.fullStoryParagraphsAr;
      const title = isEn ? chapter.titleEn : chapter.titleAr;
      startReadingTrack(
        {
          id: chapter.id,
          title,
          lang: isEn ? 'en' : 'ar',
          paragraphs,
        },
        0
      );
    }
  };

  const handleReadFromParagraph = (idx: number) => {
    if (isThisChapterTrack) {
      jumpToParagraph(idx);
    } else {
      const paragraphs = isEn ? chapter.fullStoryParagraphsEn : chapter.fullStoryParagraphsAr;
      const title = isEn ? chapter.titleEn : chapter.titleAr;
      startReadingTrack(
        {
          id: chapter.id,
          title,
          lang: isEn ? 'en' : 'ar',
          paragraphs,
        },
        idx
      );
    }
  };

  // Font family class helper
  const fontClass = {
    serif: 'font-serif',
    sans: 'font-sans',
    mono: 'font-mono text-sm leading-relaxed',
  }[fontFamily];

  // Helper to highlight search query within text
  const renderHighlightedText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-amber-300 text-stone-950 font-bold px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <article className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 md:p-10 shadow-xs space-y-6">
      {/* Chapter Top Metadata */}
      <div className="border-b border-stone-100 pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-sm border border-amber-200">
              {chapter.id}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/70">
              {isEn ? `Chapter ${chapter.id} of 6` : `الفصل ${chapter.id} من 6`}
            </span>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              <span>{readingMinutes} {isEn ? 'min read' : 'دقيقة قراءة'}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Interactive Audio Narration Button */}
            <button
              type="button"
              onClick={handleToggleNarration}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isThisChapterSpeaking
                  ? 'bg-amber-700 text-white border-amber-600 shadow-sm ring-2 ring-amber-300'
                  : isThisChapterPaused
                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                  : 'border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-amber-900'
              }`}
              title={
                isThisChapterSpeaking
                  ? (isEn ? 'Pause reading chapter' : 'إيقاف مؤقت لقراءة الفصل')
                  : isThisChapterPaused
                  ? (isEn ? 'Resume reading chapter' : 'متابعة قراءة الفصل')
                  : (isEn ? 'Listen to chapter narration' : 'استمع لقراءة الفصل كاملاً')
              }
            >
              {isThisChapterSpeaking ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{isEn ? 'Pause' : 'إيقاف'}</span>
                  <span className="inline-flex items-center gap-0.5 ms-0.5">
                    <span className="w-1 h-2.5 bg-amber-300 rounded-full animate-pulse" />
                    <span className="w-1 h-3.5 bg-amber-200 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-amber-400 rounded-full animate-pulse delay-150" />
                  </span>
                </>
              ) : isThisChapterPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current text-amber-800" />
                  <span>{isEn ? 'Resume' : 'استئناف'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>{isEn ? 'Read Aloud' : 'استماع صوتي'}</span>
                </>
              )}
            </button>

            {/* Bookmark button */}
            <button
              type="button"
              onClick={onBookmark}
              className={`p-2 rounded-xl border transition-colors ${
                isBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
              title={isEn ? 'Bookmark chapter' : 'حفظ موضع القراءة'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-700" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Copy button */}
            <button
              type="button"
              onClick={onCopy}
              className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
              title={isEn ? 'Copy chapter text' : 'نسخ نص الفصل'}
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            {onPrev && onNext && (
              <div className="flex items-center gap-1 border-s border-stone-200 ps-2">
                <button
                  type="button"
                  disabled={!hasPrev}
                  onClick={onPrev}
                  className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title={isEn ? 'Previous Chapter' : 'الفصل السابق'}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={!hasNext}
                  onClick={onNext}
                  className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title={isEn ? 'Next Chapter' : 'الفصل التالي'}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 leading-tight">
          {renderHighlightedText(isEn ? chapter.titleEn : chapter.titleAr)}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-500 pt-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{isEn ? chapter.settingEn : chapter.settingAr}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{isEn ? chapter.datesEn : chapter.datesAr}</span>
          </div>
        </div>
      </div>

      {/* Chapter Illustrated Folio Plate from the Novel Text */}
      {showIllustrations && chapter.illustration && (
        <StoryIllustrationCard
          illustration={chapter.illustration}
          isEn={isEn}
          chapterNumber={chapter.id}
        />
      )}

      {/* Full Prose Narrative Paragraphs with interactive audio synchronization */}
      <div
        className={`space-y-4 text-stone-800 leading-relaxed tracking-normal ${fontClass}`}
        style={{ fontSize: `${fontSize}px`, lineHeight: fontSize > 18 ? '2.1' : '1.9' }}
      >
        {rawParagraphs.map((p, idx) => {
          const isThisParagraphSpeaking =
            isThisChapterTrack && isPlaying && !isPaused && currentParagraphIndex === idx;
          const isThisParagraphPaused =
            isThisChapterTrack && isPaused && currentParagraphIndex === idx;

          return (
            <div
              key={idx}
              id={`story-paragraph-${chapter.id}-${idx}`}
              className={`group relative rounded-xl transition-all duration-300 p-3.5 ${
                isThisParagraphSpeaking
                  ? 'bg-amber-50/95 border-s-4 border-amber-600 ring-1 ring-amber-400/40 shadow-xs'
                  : isThisParagraphPaused
                  ? 'bg-stone-100/90 border-s-4 border-amber-400 ring-1 ring-stone-300'
                  : 'hover:bg-amber-50/20'
              }`}
            >
              {/* Active Audio State Header */}
              {isThisParagraphSpeaking && (
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-200/60 text-xs font-mono font-bold text-amber-900">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                    <span>{isEn ? 'Now Reading...' : 'جارٍ القراءة الصوتية...'}</span>
                    <span className="inline-flex items-center gap-0.5 ms-1">
                      <span className="w-1 h-3 bg-amber-600 rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-amber-500 rounded-full animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-amber-700 rounded-full animate-pulse delay-150" />
                    </span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xs px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 font-sans">
                      {isEn
                        ? `Paragraph ${idx + 1} of ${rawParagraphs.length}`
                        : `الفقرة ${idx + 1} من ${rawParagraphs.length}`}
                    </span>
                    <button
                      type="button"
                      onClick={() => togglePlayPause()}
                      className="text-3xs px-2 py-0.5 rounded bg-amber-900 text-amber-50 hover:bg-amber-800 font-sans font-semibold transition-colors"
                    >
                      {isEn ? 'Pause' : 'إيقاف'}
                    </button>
                  </div>
                </div>
              )}

              {isThisParagraphPaused && (
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200 text-xs font-mono font-bold text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <Pause className="w-3 h-3 text-stone-500" />
                    <span>{isEn ? 'Playback Paused' : 'القراءة متوقفة مؤقتاً'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => togglePlayPause()}
                    className="text-3xs px-2 py-0.5 rounded bg-amber-700 text-white hover:bg-amber-800 font-sans font-semibold transition-colors flex items-center gap-1"
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>{isEn ? 'Resume' : 'استئناف'}</span>
                  </button>
                </div>
              )}

              {/* Paragraph Text */}
              <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-amber-900">
                {renderHighlightedText(p)}
              </p>

              {/* Hover Trigger: "Read from here" */}
              <div className="flex items-center justify-end gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => handleReadFromParagraph(idx)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-2xs font-semibold bg-white hover:bg-amber-100 text-stone-700 hover:text-amber-950 border border-stone-200 shadow-2xs transition-colors"
                  title={isEn ? 'Listen starting from this paragraph' : 'استمع صوتياً بدءاً من هذه الفقرة'}
                >
                  <Play className="w-2.5 h-2.5 fill-amber-700 text-amber-700" />
                  <span>{isEn ? 'Read from here' : 'استمع من هذه الفقرة'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prominent Quote Callout */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Quote className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <p className="text-sm sm:text-base font-medium italic text-amber-950">
            "{quote.quote}"
          </p>
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">
            — {quote.speaker}
          </p>
        </div>
      </div>

      {/* Dramatic Highlights */}
      <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{isEn ? 'Pivotal Plot Turning Points' : 'محطات فارقة في أحداث هذا الفصل'}</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {moments.map((moment, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-xl border border-stone-200/60 text-xs sm:text-sm text-stone-700 flex items-start gap-2 shadow-2xs"
            >
              <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{renderHighlightedText(moment)}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
