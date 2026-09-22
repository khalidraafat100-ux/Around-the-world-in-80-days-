import { useState, useEffect } from 'react';
import {
  MECHANICAL_APPARATUSES,
  MechanicalApparatus,
} from '../data/mechanicalData';
import {
  Cog,
  Gauge,
  Zap,
  Flame,
  Clock,
  Compass,
  Wind,
  Train,
  Ship,
  Sparkles,
  Layers,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Info,
} from 'lucide-react';

interface MechanicalSectionProps {
  language?: 'ar' | 'en';
}

export function MechanicalSection({ language = 'ar' }: MechanicalSectionProps) {
  const isEn = language === 'en';

  // --- Chronometer Simulator State ---
  const [longitude, setLongitude] = useState<number>(0);
  const [isSimulatingTrip, setIsSimulatingTrip] = useState<boolean>(false);
  const [selectedApparatusId, setSelectedApparatusId] = useState<string>('steam_locomotive');

  // Interactive Route Simulator State
  const [simDistance, setSimDistance] = useState<number>(500);
  const [simVehicle, setSimVehicle] = useState<'train' | 'ship' | 'sledge' | 'elephant'>('train');

  // Longitude to hours calculation (360 deg = 24 hrs = 4 min/deg)
  const minutesGained = longitude * 4;
  const hoursGained = (minutesGained / 60).toFixed(1);
  const solarDaysObserved = (80 + minutesGained / 1440).toFixed(2);

  // Auto-play eastward voyage simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulatingTrip) {
      timer = setInterval(() => {
        setLongitude((prev) => {
          if (prev >= 360) {
            setIsSimulatingTrip(false);
            return 360;
          }
          return prev + 15; // 15 degrees = 1 hour shift
        });
      }, 400);
    }
    return () => clearInterval(timer);
  }, [isSimulatingTrip]);

  const selectedApparatus =
    MECHANICAL_APPARATUSES.find((a) => a.id === selectedApparatusId) || MECHANICAL_APPARATUSES[0];

  // Calculations for custom vehicle propulsion simulator
  const vehicleStats = {
    train: {
      speedMph: 55,
      fuelRate: '0.12 tons of coal per mile',
      fuelRateAr: '0.12 طن فحم لكل ميل',
      efficiencyEn: 'High-pressure steam locomotive',
      efficiencyAr: 'قاطرة بخارية عالية الضغط',
    },
    ship: {
      speedMph: 15,
      fuelRate: '0.25 tons of coal / 0.4 cords wood per mile',
      fuelRateAr: '0.25 طن فحم / 0.4 كومة خشب للميل',
      efficiencyEn: 'Marine compound screw engine',
      efficiencyAr: 'محرك بحري لولبي مركب',
    },
    sledge: {
      speedMph: 40,
      fuelRate: '0.00 tons (100% wind powered)',
      fuelRateAr: '0.00 طن (طاقة رياح طبيعية 100%)',
      efficiencyEn: 'Aerodynamic low-friction steel runners',
      efficiencyAr: 'زلاجات فولاذية منخفضة الاحتكاك',
    },
    elephant: {
      speedMph: 6,
      fuelRate: '150 lbs sugar cane & vegetation per day',
      fuelRateAr: '150 رطل قصب سكر ونباتات يومياً',
      efficiencyEn: 'Biological animal power (Kiouni)',
      efficiencyAr: 'قوة حيوية بيولوجية (الفيل كيوني)',
    },
  }[simVehicle];

  const travelHours = (simDistance / vehicleStats.speedMph).toFixed(1);
  const travelDays = (Number(travelHours) / 24).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-amber-800/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs px-3 py-1 rounded-full font-medium">
              <Cog className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{isEn ? 'Victorian Engineering & Technology' : 'الهندسة الميكانيكية والابتكارات الفيكتورية'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-50 tracking-tight">
              {isEn
                ? 'The Industrial & Mechanical Marvels of 1872'
                : 'محركات الثورة الصناعية والآلات الميكانيكية لعام 1872'}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {isEn
                ? 'Jules Verne celebrated the pinnacle of 19th-century mechanical science: transcontinental locomotives, compound marine steam engines, wind-powered ice-sloops, and the astronomical gear-math of the International Date Line.'
                : 'احتفى جول فيرن بقمة منجزات العصر الفيكتوري: قاطرات البخار الجبارة، البواخر ذات الدفع اللولبي، الزلاجات الهوائية الشراعية، والحسابات الميكانيكية والفلكية لخطوط الطول التي صنعت النصر المعجزة.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 bg-stone-900/90 p-3 rounded-2xl border border-amber-900/50">
            <div className="text-center px-3 py-1">
              <span className="block text-2xl font-black text-amber-400">80</span>
              <span className="text-3xs sm:text-2xs text-stone-400 uppercase tracking-wider">
                {isEn ? 'Days Allowed' : 'أيام الرهان'}
              </span>
            </div>
            <div className="w-px h-8 bg-stone-700 hidden sm:block" />
            <div className="text-center px-3 py-1">
              <span className="block text-2xl font-black text-amber-300">360°</span>
              <span className="text-3xs sm:text-2xs text-stone-400 uppercase tracking-wider">
                {isEn ? 'Eastward Longitude' : 'دوران شرقاً'}
              </span>
            </div>
            <div className="w-px h-8 bg-stone-700 hidden sm:block" />
            <div className="text-center px-3 py-1">
              <span className="block text-2xl font-black text-emerald-400">+24h</span>
              <span className="text-3xs sm:text-2xs text-stone-400 uppercase tracking-wider">
                {isEn ? 'Mechanical Day Gained' : 'يوم كامل مكتسب'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Module 1: The Mechanical Chronometer & International Date Line Simulator */}
      <section className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold">
                <Clock className="w-4 h-4" />
              </span>
              <h3 className="text-lg sm:text-xl font-black text-stone-900">
                {isEn
                  ? 'Interactive Horological & Date Line Gear Simulator'
                  : 'محاكي التروس الفلكية وساعة الجيب الميكانيكية لخطوط الطول'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500">
              {isEn
                ? 'See the exact physics that won the 20,000-pound wager: 360 degrees × 4 minutes/degree = 24 hours gained!'
                : 'اكتشف الفيزياء الميكانيكية التي حسمت رهان الـ 20,000 جنيه: 360 درجة طول × 4 دقائق لكل درجة = ربح 24 ساعة!'}
            </p>
          </div>

          {/* Simulation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (longitude >= 360) setLongitude(0);
                setIsSimulatingTrip(!isSimulatingTrip);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-xs ${
                isSimulatingTrip
                  ? 'bg-amber-700 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isSimulatingTrip ? 'animate-spin' : ''}`} />
              <span>
                {isSimulatingTrip
                  ? isEn
                    ? 'Simulating Circumnavigation...'
                    : 'جارِ المحاكاة شرقاً...'
                  : isEn
                  ? 'Simulate Eastward Voyage'
                  : 'بدء محاكاة الدوران شرقاً'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsSimulatingTrip(false);
                setLongitude(0);
              }}
              className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
              title={isEn ? 'Reset Longitude' : 'إعادة ضبط'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Gauges and Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Mechanical Gear Dial Graphic */}
          <div className="bg-stone-900 rounded-2xl p-6 text-white text-center flex flex-col items-center justify-center relative overflow-hidden border border-amber-900/40">
            <div className="relative w-44 h-44 flex items-center justify-center my-2">
              {/* Outer Gear */}
              <div
                className="absolute inset-0 border-4 border-dashed border-amber-500/40 rounded-full transition-transform duration-500"
                style={{ transform: `rotate(${longitude}deg)` }}
              />
              {/* Inner Gear */}
              <div
                className="absolute inset-3 border-2 border-stone-700 rounded-full flex items-center justify-center"
              >
                <div
                  className="w-1 h-16 bg-amber-400 origin-bottom rounded-full transition-transform duration-500"
                  style={{
                    transform: `rotate(${(longitude / 360) * 360}deg)`,
                    transformOrigin: '50% 100%',
                  }}
                />
              </div>
              {/* Center Pivot */}
              <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-amber-200 flex items-center justify-center shadow-lg z-10">
                <Compass className="w-4 h-4 text-amber-100" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-3xl font-black text-amber-400 font-mono">
                {longitude}° {isEn ? 'East' : 'شرقاً'}
              </span>
              <p className="text-3xs uppercase tracking-wider text-stone-400">
                {isEn ? 'Current Longitude Shift' : 'زاوية الانحراف لخطوط الطول'}
              </p>
            </div>
          </div>

          {/* Interactive Slider and Key Formula */}
          <div className="lg:col-span-2 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold text-stone-700">
                <span>{isEn ? 'London Meridian (0°)' : 'خط غرينتش لندن (0°)'}</span>
                <span className="text-amber-800">
                  {isEn ? 'Full Circumnavigation (360°)' : 'دورة أرضية كاملة (360°)'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="5"
                value={longitude}
                onChange={(e) => {
                  setIsSimulatingTrip(false);
                  setLongitude(Number(e.target.value));
                }}
                className="w-full accent-amber-600 cursor-pointer h-2.5 bg-stone-200 rounded-lg"
              />
              <div className="flex justify-between text-2xs text-stone-400 font-mono">
                <span>0° (London)</span>
                <span>90° (Calcutta)</span>
                <span>180° (Date Line)</span>
                <span>270° (New York)</span>
                <span>360° (London Won!)</span>
              </div>
            </div>

            {/* Readout Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-amber-50/80 p-3 sm:p-4 rounded-xl border border-amber-200/80 text-center">
                <span className="block text-lg sm:text-2xl font-black text-amber-900 font-mono">
                  +{minutesGained}
                </span>
                <span className="text-3xs sm:text-2xs font-bold text-amber-700 uppercase">
                  {isEn ? 'Minutes Advanced' : 'دقائق مكتسبة'}
                </span>
              </div>

              <div className="bg-amber-50/80 p-3 sm:p-4 rounded-xl border border-amber-200/80 text-center">
                <span className="block text-lg sm:text-2xl font-black text-amber-900 font-mono">
                  +{hoursGained}h
                </span>
                <span className="text-3xs sm:text-2xs font-bold text-amber-700 uppercase">
                  {isEn ? 'Hours Shifted' : 'ساعات مستفادة'}
                </span>
              </div>

              <div className="bg-emerald-50 p-3 sm:p-4 rounded-xl border border-emerald-200 text-center">
                <span className="block text-lg sm:text-2xl font-black text-emerald-900 font-mono">
                  {solarDaysObserved}
                </span>
                <span className="text-3xs sm:text-2xs font-bold text-emerald-700 uppercase">
                  {isEn ? 'Sunrises Counted' : 'مرات شروق الشمس'}
                </span>
              </div>
            </div>

            {/* Mechanical Insight Note */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-700">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {isEn
                  ? 'Verne\'s Master Stroke: Because Fogg traveled toward the rising sun, each calendar day was shortened by 4 minutes per degree. Crossing all 360 degrees meant seeing the sun rise 81 times during what was only 80 calendar days back in England!'
                  : 'عبقرية جول فيرن: بالسير شرقاً باتجاه شروق الشمس، قَصُر كل يوم بمقدار 4 دقائق لكل خط طول. وعند إكمال 360 درجة، شهد فوج شروق الشمس 81 مرة بينما مرت في لندن 80 يوماً فقط!'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: The 6 Mechanical Marvels Breakdown */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-amber-800" />
              <span>{isEn ? 'The Six Mechanical Apparatuses' : 'الآلات والمحركات الست الكبرى في الرواية'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {isEn
                ? 'Examine the technical specifications, propulsion dynamics, and physics of each Victorian machine.'
                : 'استكشف المواصفات الفنية، أنظمة الدفع، والقواعد العلمية لكل آلة استعان بها فوج في رحلته.'}
            </p>
          </div>
        </div>

        {/* Machine Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {MECHANICAL_APPARATUSES.map((app) => {
            const isSelected = selectedApparatusId === app.id;
            return (
              <button
                key={app.id}
                type="button"
                onClick={() => setSelectedApparatusId(app.id)}
                className={`p-3 rounded-2xl border text-start transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {app.featuredInChapter}
                  </span>
                  <Cog className={`w-3.5 h-3.5 ${isSelected ? 'animate-spin' : 'opacity-40'}`} />
                </div>
                <div>
                  <span className="block text-2xs font-mono uppercase opacity-75">
                    {isEn ? `Chapter ${app.featuredInChapter}` : `فصل ${app.featuredInChapter}`}
                  </span>
                  <span className="text-xs font-bold line-clamp-2 leading-snug">
                    {isEn ? app.nameEn.split('—')[0].trim() : app.nameAr.split('—')[0].trim()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Machine Detail Card */}
        <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200/70">
                  {isEn ? selectedApparatus.categoryEn : selectedApparatus.categoryAr}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {isEn
                    ? `Featured in Chapter ${selectedApparatus.featuredInChapter}`
                    : `ظهرت في الفصل ${selectedApparatus.featuredInChapter}`}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-stone-900">
                {isEn ? selectedApparatus.nameEn : selectedApparatus.nameAr}
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl text-stone-700 self-start md:self-auto">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>{isEn ? selectedApparatus.specs.powerEn : selectedApparatus.specs.powerAr}</span>
            </div>
          </div>

          {/* Technical Specs 4-Box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <span className="text-3xs uppercase font-bold text-stone-400 flex items-center gap-1">
                <Gauge className="w-3 h-3 text-amber-600" />
                {isEn ? 'Max Velocity' : 'السرعة الميكانيكية'}
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-800">
                {isEn ? selectedApparatus.specs.speedEn : selectedApparatus.specs.speedAr}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <span className="text-3xs uppercase font-bold text-stone-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-600" />
                {isEn ? 'Propulsion Engine' : 'نظام الدفع'}
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-800">
                {isEn ? selectedApparatus.specs.propulsionEn : selectedApparatus.specs.propulsionAr}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <span className="text-3xs uppercase font-bold text-stone-400 flex items-center gap-1">
                <Flame className="w-3 h-3 text-rose-600" />
                {isEn ? 'Combustion / Fuel' : 'الوقود والمصدر الحراري'}
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-800">
                {isEn ? selectedApparatus.specs.fuelEn : selectedApparatus.specs.fuelAr}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <span className="text-3xs uppercase font-bold text-stone-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-indigo-600" />
                {isEn ? 'Horsepower / Work' : 'القدرة الحصانية'}
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-800">
                {isEn ? selectedApparatus.specs.powerEn : selectedApparatus.specs.powerAr}
              </p>
            </div>
          </div>

          {/* Narrative Engineering Summary & Physics Principle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-700" />
                <span>{isEn ? 'Historical & Engineering Role' : 'الدور الهندسي في الرواية'}</span>
              </h5>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {isEn
                  ? selectedApparatus.engineeringSummaryEn
                  : selectedApparatus.engineeringSummaryAr}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>{isEn ? 'Scientific & Physics Principle' : 'القاعدة الفيزيائية والعلمية'}</span>
              </h5>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
                {isEn
                  ? selectedApparatus.scientificPrincipleEn
                  : selectedApparatus.scientificPrincipleAr}
              </p>
            </div>
          </div>

          {/* Engineering Schematics Details */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
            <h5 className="text-2xs font-bold uppercase tracking-wider text-stone-400">
              {isEn ? 'Mechanical Components & Structural Details' : 'المكونات الميكانيكية والعناصر الهيكلية'}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(isEn
                ? selectedApparatus.diagramDetailsEn
                : selectedApparatus.diagramDetailsAr
              ).map((detail, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2.5 rounded-xl border border-stone-200/60 text-xs text-stone-700 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Novel Quote */}
          <blockquote className="italic text-xs sm:text-sm text-stone-600 border-s-4 border-amber-600 ps-4 py-1">
            "{isEn ? selectedApparatus.novelQuoteEn : selectedApparatus.novelQuoteAr}"
          </blockquote>
        </div>
      </section>

      {/* Module 3: Speed, Distance & Fuel Consumption Simulator */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-stone-900">
              {isEn
                ? 'Interactive Propulsion & Fuel Consumption Calculator'
                : 'حاسبة الدفع الميكانيكي واستهلاك الوقود لرحلات فيرن'}
            </h3>
            <p className="text-xs text-stone-500">
              {isEn
                ? 'Test different Victorian modes of transport, calculate transit times, and examine fuel burn rates.'
                : 'اختبر وسائل النقل الفيكتورية المختلفة واحسب زمن الرحلات ومعدل استهلاك الفحم والأخشاب.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Controls */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700">
                {isEn ? 'Select Mechanical Transport Mode:' : 'اختر وسيلة النقل الميكانيكية:'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSimVehicle('train')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                    simVehicle === 'train'
                      ? 'bg-amber-800 text-white border-amber-900'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <Train className="w-4 h-4" />
                  <span>{isEn ? '4-4-0 Steam Train (55 mph)' : 'قطار البخار (55 ميل/س)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSimVehicle('ship')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                    simVehicle === 'ship'
                      ? 'bg-amber-800 text-white border-amber-900'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <Ship className="w-4 h-4" />
                  <span>{isEn ? 'Steamship Screw (15 mph)' : 'الباخرة اللولبية (15 ميل/س)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSimVehicle('sledge')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                    simVehicle === 'sledge'
                      ? 'bg-amber-800 text-white border-amber-900'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <Wind className="w-4 h-4" />
                  <span>{isEn ? 'Wind Ice-Sledge (40 mph)' : 'الزلاجة الشراعية (40 ميل/س)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSimVehicle('elephant')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                    simVehicle === 'elephant'
                      ? 'bg-amber-800 text-white border-amber-900'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>{isEn ? 'Kiouni Elephant (6 mph)' : 'الفيل كيوني (6 ميل/س)'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-stone-700">
                <span>{isEn ? 'Distance:' : 'المسافة المقطوعة:'}</span>
                <span className="text-amber-800 font-mono">{simDistance} {isEn ? 'miles' : 'ميلاً'}</span>
              </div>
              <input
                type="range"
                min="50"
                max="3500"
                step="50"
                value={simDistance}
                onChange={(e) => setSimDistance(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />
              <div className="flex justify-between text-3xs text-stone-400">
                <span>50 mi (Fort Kearney)</span>
                <span>800 mi (Shanghai)</span>
                <span>3,100 mi (Atlantic)</span>
              </div>
            </div>
          </div>

          {/* Real-time Outputs */}
          <div className="bg-stone-900 rounded-2xl p-6 text-white space-y-4 border border-stone-800">
            <span className="text-3xs uppercase font-bold text-amber-400 tracking-wider">
              {isEn ? 'Calculated Mechanical Parameters' : 'النتائج الميكانيكية المحسوبة'}
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-3xs text-stone-400 uppercase block">
                  {isEn ? 'Estimated Transit' : 'الوقت التقديري'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
                  {travelHours}h
                </span>
                <span className="text-2xs text-stone-400 block">({travelDays} {isEn ? 'days' : 'أيام'})</span>
              </div>

              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-3xs text-stone-400 uppercase block">
                  {isEn ? 'Cruising Velocity' : 'السرعة القياسية'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono">
                  {vehicleStats.speedMph} <span className="text-xs">{isEn ? 'mph' : 'ميل/س'}</span>
                </span>
              </div>
            </div>

            <div className="p-3 bg-stone-800/50 rounded-xl border border-stone-700/70 space-y-1 text-xs">
              <span className="text-stone-400 block text-3xs uppercase font-bold">
                {isEn ? 'Fuel / Energy Dynamics:' : 'ديناميكية الوقود واستهلاك الطاقة:'}
              </span>
              <p className="text-amber-200 font-medium">
                {isEn ? vehicleStats.fuelRate : vehicleStats.fuelRateAr}
              </p>
              <p className="text-stone-400 text-2xs">
                {isEn ? vehicleStats.efficiencyEn : vehicleStats.efficiencyAr}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
