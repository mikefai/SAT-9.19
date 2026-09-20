import type { Question, OptionId } from '../../types/sat';
import { Bookmark, CheckCircle2, Circle, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  answers: Record<string, OptionId>;
  flagged: Record<string, boolean>;
}

export const Navigator: React.FC<Props> = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  onSelectIndex,
  answers,
  flagged,
}) => {
  if (!isOpen) return null;

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold tracking-tight">Question Navigator</h3>
            <p className="text-xs text-slate-400">
              Module 1 & 2 • {questions.length} High-Rigor Questions
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Legend Strip */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Answered: <b>{answeredCount}</b>
            </span>
            <span className="flex items-center gap-1.5">
              <Circle className="w-4 h-4 text-slate-400" />
              Unanswered: <b>{questions.length - answeredCount}</b>
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              Flagged: <b>{flaggedCount}</b>
            </span>
          </div>

          <span className="text-[11px] font-semibold text-slate-500">
            Click any tile to navigate directly
          </span>
        </div>

        {/* 50-Question Interactive Grid */}
        <div className="p-6 overflow-y-auto passage-scroll grid grid-cols-5 sm:grid-cols-10 gap-2.5">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const hasAnswer = !!answers[q.id];
            const isFlag = !!flagged[q.id];

            let tileClasses =
              'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50';

            if (isCurrent) {
              tileClasses = 'border-blue-600 bg-blue-600 text-white font-extrabold shadow-md ring-2 ring-blue-300';
            } else if (hasAnswer) {
              tileClasses = 'border-slate-300 bg-slate-100 text-slate-900 font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectIndex(idx);
                  onClose();
                }}
                className={`relative h-11 rounded-xl border flex flex-col items-center justify-center text-xs transition select-none ${tileClasses}`}
              >
                {/* Question Number */}
                <span className="leading-none">{idx + 1}</span>

                {/* Selected answer badge if answered */}
                {hasAnswer && !isCurrent && (
                  <span className="text-[10px] font-mono text-blue-600 font-bold mt-0.5">
                    ({answers[q.id]})
                  </span>
                )}

                {/* Flagged ribbon badge */}
                {isFlag && (
                  <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 absolute -top-1 -right-1 drop-shadow-xs" />
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
          >
            Back to Question
          </button>
        </div>
      </div>
    </div>
  );
};
