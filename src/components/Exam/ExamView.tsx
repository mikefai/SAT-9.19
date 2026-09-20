import { useState, useEffect, useCallback } from 'react';
import type { Question, OptionId, ExamSessionState, Highlight } from '../../types/sat';
import { PassagePane } from './PassagePane';
import { QuestionPane } from './QuestionPane';
import { Navigator } from './Navigator';
import { ChevronLeft, ChevronRight, Grid, Send, AlertCircle } from 'lucide-react';

interface Props {
  questions: Question[];
  state: ExamSessionState;
  setState: React.Dispatch<React.SetStateAction<ExamSessionState>>;
  onCompleteExam: () => void;
}

export const ExamView: React.FC<Props> = ({
  questions,
  state,
  setState,
  onCompleteExam,
}) => {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);

  const currentQ = questions[state.currentQuestionIndex] || questions[0];
  const totalQuestions = questions.length;

  const handleSelectAnswer = useCallback((optionId: OptionId) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQ.id]: optionId,
      },
    }));
  }, [currentQ.id, setState]);

  const handleToggleFlag = useCallback(() => {
    setState((prev) => ({
      ...prev,
      flagged: {
        ...prev.flagged,
        [currentQ.id]: !prev.flagged[currentQ.id],
      },
    }));
  }, [currentQ.id, setState]);

  const handleToggleEliminate = useCallback((optionId: OptionId) => {
    setState((prev) => {
      const currentElims = prev.eliminations[currentQ.id] || [];
      const isAlready = currentElims.includes(optionId);
      const newElims = isAlready
        ? currentElims.filter((id) => id !== optionId)
        : [...currentElims, optionId];

      const newAnswers = { ...prev.answers };
      if (!isAlready && newAnswers[currentQ.id] === optionId) {
        delete newAnswers[currentQ.id];
      }

      return {
        ...prev,
        eliminations: {
          ...prev.eliminations,
          [currentQ.id]: newElims,
        },
        answers: newAnswers,
      };
    });
  }, [currentQ.id, setState]);

  const handleAddHighlight = useCallback((highlight: Highlight) => {
    setState((prev) => ({
      ...prev,
      highlights: {
        ...prev.highlights,
        [currentQ.id]: [...(prev.highlights[currentQ.id] || []), highlight],
      },
    }));
  }, [currentQ.id, setState]);

  const handleClearHighlights = useCallback(() => {
    setState((prev) => ({
      ...prev,
      highlights: {
        ...prev.highlights,
        [currentQ.id]: [],
      },
    }));
  }, [currentQ.id, setState]);

  const handleNext = useCallback(() => {
    if (state.currentQuestionIndex < totalQuestions - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  }, [state.currentQuestionIndex, totalQuestions, setState]);

  const handlePrevious = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  }, [state.currentQuestionIndex, setState]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') {
        e.preventDefault();
        handleSelectAnswer('A');
      } else if (key === 'B' || key === '2') {
        e.preventDefault();
        handleSelectAnswer('B');
      } else if (key === 'C' || key === '3') {
        e.preventDefault();
        handleSelectAnswer('C');
      } else if (key === 'D' || key === '4') {
        e.preventDefault();
        handleSelectAnswer('D');
      } else if (key === 'F') {
        e.preventDefault();
        handleToggleFlag();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectAnswer, handleToggleFlag, handleNext, handlePrevious]);

  const answeredCount = Object.keys(state.answers).length;
  const unansweredCount = totalQuestions - answeredCount;

  const handleSubmitClick = () => {
    if (unansweredCount > 0) {
      setShowSubmitWarning(true);
    } else {
      onCompleteExam();
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-4">
      {/* Authentic Split-Screen Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 min-h-[560px]">
        {/* Left: Passage Pane */}
        <PassagePane
          question={currentQ}
          fontSize={state.fontSize}
          setFontSize={(size) => setState((prev) => ({ ...prev, fontSize: size }))}
          highlights={state.highlights[currentQ.id] || []}
          onAddHighlight={handleAddHighlight}
          onClearHighlights={handleClearHighlights}
        />

        {/* Right: Question & Choices Pane */}
        <QuestionPane
          question={currentQ}
          questionIndex={state.currentQuestionIndex}
          totalQuestions={totalQuestions}
          selectedAnswer={state.answers[currentQ.id]}
          onSelectAnswer={handleSelectAnswer}
          isFlagged={!!state.flagged[currentQ.id]}
          onToggleFlag={handleToggleFlag}
          eliminatedOptions={state.eliminations[currentQ.id] || []}
          onToggleEliminate={handleToggleEliminate}
        />
      </div>

      {/* Bottom Action / Navigation Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Question Navigator Toggle */}
        <button
          onClick={() => setIsNavigatorOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold transition shadow-xs"
        >
          <Grid className="w-4 h-4 text-blue-600" />
          <span>Question {state.currentQuestionIndex + 1} of {totalQuestions}</span>
        </button>

        {/* Center: Back & Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={state.currentQuestionIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold transition ${
              state.currentQuestionIndex === 0
                ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            disabled={state.currentQuestionIndex === totalQuestions - 1}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-white transition ${
              state.currentQuestionIndex === totalQuestions - 1
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-sm'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Submit Exam Button */}
        <button
          onClick={handleSubmitClick}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition shadow-sm"
        >
          <Send className="w-3.5 h-3.5 text-blue-400" />
          <span>Submit Exam ({answeredCount}/{totalQuestions})</span>
        </button>
      </div>

      {/* 50-Question Navigator Modal */}
      <Navigator
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        questions={questions}
        currentIndex={state.currentQuestionIndex}
        onSelectIndex={(idx) => setState((prev) => ({ ...prev, currentQuestionIndex: idx }))}
        answers={state.answers}
        flagged={state.flagged}
      />

      {/* Submit Warning Modal if Unanswered */}
      {showSubmitWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center gap-3 text-amber-600">
              <div className="p-3 bg-amber-100 rounded-2xl">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Unanswered Questions</h3>
                <p className="text-xs text-slate-500">You still have questions left</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              You have answered <b>{answeredCount}</b> of <b>{totalQuestions}</b> questions. There are still{' '}
              <b className="text-amber-600">{unansweredCount}</b> unanswered questions. On the Digital SAT, there is no guessing penalty!
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitWarning(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
              >
                Return to Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitWarning(false);
                  onCompleteExam();
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm"
              >
                Submit Anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
