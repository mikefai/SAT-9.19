import { useState } from 'react';
import type { Question, OptionId } from '../../types/sat';
import { Bookmark, Strikethrough, Check } from 'lucide-react';

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer?: OptionId;
  onSelectAnswer: (optionId: OptionId) => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  eliminatedOptions: OptionId[];
  onToggleEliminate: (optionId: OptionId) => void;
}

export const QuestionPane: React.FC<Props> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  isFlagged,
  onToggleFlag,
  eliminatedOptions,
  onToggleEliminate,
}) => {
  const [isEliminationMode, setIsEliminationMode] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Question Header & Utility Bar */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-slate-900 text-white font-bold tracking-tight">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span
            className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
              question.difficulty === 'Extreme / 1400+'
                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Flag + Strikethrough Mode Controls */}
        <div className="flex items-center gap-2">
          {/* Option Elimination Mode Toggle */}
          <button
            onClick={() => setIsEliminationMode(!isEliminationMode)}
            title="Toggle Option Elimination Strikethrough Mode"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-semibold transition ${
              isEliminationMode
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Strikethrough className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Eliminate</span>
          </button>

          {/* Mark for Review Button */}
          <button
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-semibold transition ${
              isFlagged
                ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Mark for Review'}</span>
          </button>
        </div>
      </div>

      {/* Question Prompt and Multiple Choices */}
      <div className="flex-1 p-6 sm:p-8 overflow-y-auto passage-scroll space-y-6">
        {/* Question Stem */}
        <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {question.question}
        </p>

        {isEliminationMode && (
          <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center justify-between">
            <span>
              <b>Elimination Mode Active:</b> Click the slash on any choice to cross it out.
            </span>
            <button
              onClick={() => setIsEliminationMode(false)}
              className="text-rose-900 font-bold underline ml-2"
            >
              Done
            </button>
          </div>
        )}

        {/* 4 Choices */}
        <div className="space-y-3 pt-1">
          {question.options.map((opt) => {
            const isSelected = selectedAnswer === opt.id;
            const isEliminated = eliminatedOptions.includes(opt.id);

            let btnClasses =
              'border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-300';

            if (isSelected) {
              btnClasses = 'border-blue-600 bg-blue-50/80 text-blue-950 ring-2 ring-blue-600/30 font-medium';
            } else if (isEliminated) {
              btnClasses = 'border-slate-200 bg-slate-100 text-slate-400 struck-through-option opacity-60';
            }

            return (
              <div key={opt.id} className="relative group">
                <button
                  type="button"
                  onClick={() => onSelectAnswer(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition flex items-start gap-3 shadow-xs ${btnClasses}`}
                >
                  {/* Letter badge */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isEliminated
                        ? 'bg-slate-200 text-slate-400 line-through'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? <Check className="w-4 h-4 text-white" /> : opt.id}
                  </span>

                  {/* Option Text */}
                  <span className={`flex-1 leading-relaxed ${isEliminated ? 'line-through decoration-rose-500 decoration-2' : ''}`}>
                    {opt.text}
                  </span>
                </button>

                {/* Strikethrough icon button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleEliminate(opt.id);
                  }}
                  title={isEliminated ? 'Restore option' : 'Cross out option'}
                  className={`absolute right-3 top-3.5 p-1 rounded-md transition ${
                    isEliminated
                      ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                      : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Strikethrough className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
