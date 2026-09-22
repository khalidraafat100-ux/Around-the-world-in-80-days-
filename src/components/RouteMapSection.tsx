import { ROUTE_STOPS } from '../data/storyData';
import { Train, Ship, Footprints, Anchor, Wind, ShieldAlert, CheckCircle, Navigation } from 'lucide-react';

interface RouteMapSectionProps {
  language?: 'ar' | 'en';
}

export function RouteMapSection({ language = 'ar' }: RouteMapSectionProps) {
  const isEn = language === 'en';

  const getTransportIcon = (iconName: string) => {
    switch (iconName) {
      case 'Train':
        return <Train className="w-4 h-4 text-amber-700" />;
      case 'Ship':
        return <Ship className="w-4 h-4 text-blue-700" />;
      case 'Footprints':
        return <Footprints className="w-4 h-4 text-orange-700" />;
      case 'Anchor':
        return <Anchor className="w-4 h-4 text-teal-700" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-sky-700" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-rose-700" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4 text-emerald-700" />;
      default:
        return <Navigation className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-amber-900/5 border border-amber-900/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-amber-950">
            {isEn
              ? 'Around the World Itinerary (Eleven Principal Stops)'
              : 'مسار الرحلة حول العالم (11 محطة رئيسية)'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            {isEn
              ? 'Follow the exact eastbound route taken by Phileas Fogg and Jean Passepartout departing from and returning to London in eighty days.'
              : 'تتبع خط سير فيلياس فوج وباسبارتو شرقاً من لندن وعودتهم إليها خلال 80 يوماً'}
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-stone-600 font-medium bg-white px-3 py-1.5 rounded-xl border border-stone-200">
          <span>{isEn ? 'Direction: Eastward ➡️' : 'الاتجاه: الشرق ➡️'}</span>
          <span>•</span>
          <span>{isEn ? 'Accumulated Gain: +24 Hours' : 'فارق التوقيت: +24 ساعة'}</span>
        </div>
      </div>

      <div className={`relative ${isEn ? 'border-l-2 border-amber-200 ml-4 sm:ml-6' : 'border-r-2 border-amber-200 mr-4 sm:mr-6'} space-y-8 pb-4`}>
        {ROUTE_STOPS.map((stop) => (
          <div key={stop.id} className={`relative ${isEn ? 'pl-6 sm:pl-8' : 'pr-6 sm:pr-8'}`}>
            {/* Timeline Bullet */}
            <div
              className={`absolute ${
                isEn ? '-left-[9px]' : '-right-[9px]'
              } top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-xs`}
            />

            <div className="bg-white rounded-xl border border-stone-200/80 p-4 sm:p-5 shadow-xs hover:border-amber-300 transition-all space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 text-xs font-bold flex items-center justify-center">
                    {stop.id}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900">
                      {isEn ? stop.locationEn : stop.locationAr}
                    </h4>
                    <span className="text-2xs sm:text-xs text-stone-400 font-mono">
                      {isEn ? stop.countryEn : stop.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-amber-50 text-amber-800 border border-amber-200/70 px-2.5 py-0.5 rounded-full font-medium">
                    {isEn ? stop.arrivalDateEn : stop.arrivalDate}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isEn ? stop.descriptionEn : stop.descriptionAr}
              </p>

              <div className="flex items-center gap-2 pt-1 text-2xs sm:text-xs text-stone-500">
                <div className="p-1 rounded-md bg-stone-50 border border-stone-200">
                  {getTransportIcon(stop.transportIcon)}
                </div>
                <span>
                  {isEn ? 'Primary Transportation: ' : 'وسيلة النقل: '}
                  <strong className="text-stone-700">
                    {isEn ? stop.transportModeEn : stop.transportMode}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
