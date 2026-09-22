import { useState } from 'react';
import { BOOK_ACTIVITIES_SOLUTIONS } from '../data/storyData';
import { HelpCircle, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

interface ActivitiesSectionProps {
  language?: 'ar' | 'en';
}

export function ActivitiesSection({ language = 'ar' }: ActivitiesSectionProps) {
  const isEn = language === 'en';
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (key: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const revealAll = () => {
    const all: Record<string, boolean> = {};
    BOOK_ACTIVITIES_SOLUTIONS.forEach((item, cIdx) => {
      item.questions.forEach((_, qIdx) => {
        all[`${cIdx}-${qIdx}`] = true;
      });
    });
    setRevealedAnswers(all);
  };

  const hideAll = () => {
    setRevealedAnswers({});
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <span>
              {isEn
                ? 'Curriculum Workbook Activities & Comprehensive Solutions'
                : 'حل أنشطة وتمارين الكتاب المدرسي (Family and Friends 5)'}
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {isEn
              ? 'Model answers and clear explanations for all chapter activities in Family and Friends Readers 5.'
              : 'إجابات نموذجية وشرح للتمارين الواردة في صفحات الأنشطة (Activities) بعد كل فصل'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={revealAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isEn ? 'Reveal All Answers' : 'إظهار كل الإجابات'}</span>
          </button>
          <button
            type="button"
            onClick={hideAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>{isEn ? 'Hide Answers' : 'إخفاء الإجابات'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {BOOK_ACTIVITIES_SOLUTIONS.map((item, cIdx) => (
          <div
            key={item.chapterId}
            className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h4 className="font-bold text-base text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">
                  {item.chapterId}
                </span>
                <span>{isEn ? item.exerciseTitleEn : item.exerciseTitle}</span>
              </h4>
              <span className="text-xs text-stone-400 font-mono">
                {isEn ? `Chapter ${item.chapterId}` : `الفصل ${item.chapterId}`}
              </span>
            </div>

            <div className="space-y-3">
              {item.questions.map((q, qIdx) => {
                const key = `${cIdx}-${qIdx}`;
                const isRevealed = !!revealedAnswers[key];

                return (
                  <div
                    key={qIdx}
                    className="p-4 rounded-xl border border-stone-100 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs sm:text-sm font-medium text-stone-800 flex-1 leading-relaxed">
                        <span className="text-amber-800 font-bold ml-1">{qIdx + 1}.</span>
                        {isEn ? q.qEn : q.q}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleAnswer(key)}
                        className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors flex items-center gap-1 shrink-0 ${
                          isRevealed
                            ? 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                            : 'bg-amber-600 text-white hover:bg-amber-700 shadow-2xs'
                        }`}
                      >
                        {isRevealed ? (
                          <>
                            <EyeOff className="w-3 h-3" />
                            <span>{isEn ? 'Hide' : 'إخفاء'}</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3" />
                            <span>{isEn ? 'Show Solution' : 'الحل'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="mt-2 pt-2 border-t border-stone-200/70 flex items-start gap-2 text-xs sm:text-sm text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold">
                            {isEn ? 'Answer: ' : 'الإجابة: '}
                          </strong>
                          <span>{isEn ? q.answerEn : q.answer}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
