import { CHARACTERS } from '../data/storyData';
import { UserCheck, Smile, Search, Heart, Award, Ship } from 'lucide-react';

interface CharactersSectionProps {
  language?: 'ar' | 'en';
}

export function CharactersSection({ language = 'ar' }: CharactersSectionProps) {
  const isEn = language === 'en';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-amber-700" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-emerald-700" />;
      case 'Search':
        return <Search className="w-5 h-5 text-blue-700" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-700" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-700" />;
      case 'Ship':
        return <Ship className="w-5 h-5 text-cyan-700" />;
      default:
        return <UserCheck className="w-5 h-5 text-stone-700" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-stone-900">
          {isEn ? 'Primary Characters in the Novel' : 'شخصيات الرواية الرئيسية'}
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {isEn
            ? 'Discover the principal figures, their personal motivations, and their roles in the voyage.'
            : 'تعرف على أبطال المغامرة وأدوارهم المحورية في القصة'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CHARACTERS.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  {getIcon(char.avatarIcon)}
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium">
                  {isEn ? char.roleEn : char.roleAr}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900">
                  {isEn ? char.nameEn : char.nameAr}
                </h4>
                <div className="text-xs font-mono text-stone-400">
                  {isEn ? char.nameAr : char.nameEn}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isEn ? char.descriptionEn : char.descriptionAr}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
              {(isEn ? char.traitsEn : char.traits).map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-amber-50/70 border border-amber-200/60 text-amber-900 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
