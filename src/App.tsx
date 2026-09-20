import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExamView } from './components/Exam/ExamView';
import { ScoreReport } from './components/Results/ScoreReport';
import { TrapsGuide } from './components/Study/TrapsGuide';
import { sat1400Questions } from './data/sat1400Questions';
import {
  loadExamState,
  saveExamState,
  clearExamState,
  initialExamState,
} from './utils/storage';

export function App() {
  const [activeTab, setActiveTab] = useState<'exam' | 'traps'>('exam');
  const [examState, setExamState] = useState(loadExamState);

  // Sync to localStorage
  useEffect(() => {
    saveExamState(examState);
  }, [examState]);

  // Compute live score stats
  const correctCount = sat1400Questions.filter(
    (q) => examState.answers[q.id] === q.correctAnswer
  ).length;

  const calculateScaledScore = (correct: number) => {
    if (correct >= 48) return 780 + Math.round(((correct - 48) / 2) * 20);
    if (correct >= 43) return 700 + Math.round(((correct - 43) / 5) * 70);
    if (correct >= 37) return 630 + Math.round(((correct - 37) / 6) * 60);
    if (correct >= 30) return 550 + Math.round(((correct - 30) / 7) * 70);
    if (correct >= 20) return 450 + Math.round(((correct - 20) / 10) * 90);
    return Math.max(200, Math.round(200 + (correct / 20) * 240));
  };

  const scoreInfo = {
    correct: correctCount,
    total: sat1400Questions.length,
    scaled: calculateScaledScore(correctCount),
  };

  const handleResetExam = () => {
    if (window.confirm('Reset all 50 questions progress and highlights? This cannot be undone.')) {
      clearExamState();
      setExamState(initialExamState);
    }
  };

  const handleCompleteExam = () => {
    setExamState((prev) => ({
      ...prev,
      isCompleted: true,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeExam = () => {
    setExamState((prev) => ({
      ...prev,
      currentQuestionIndex: 0,
      answers: {},
      flagged: {},
      eliminations: {},
      highlights: {},
      timeRemaining: 70 * 60,
      isCompleted: false,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      {/* Top Application Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isExamCompleted={examState.isCompleted}
        scoreInfo={scoreInfo}
        timeRemaining={examState.timeRemaining}
        setTimeRemaining={(update) =>
          setExamState((prev) => ({
            ...prev,
            timeRemaining: typeof update === 'function' ? update(prev.timeRemaining) : update,
          }))
        }
        isTimerPaused={examState.isTimerPaused}
        setIsTimerPaused={(update) =>
          setExamState((prev) => ({
            ...prev,
            isTimerPaused: typeof update === 'function' ? update(prev.isTimerPaused) : update,
          }))
        }
        isTimerHidden={examState.isTimerHidden}
        setIsTimerHidden={(update) =>
          setExamState((prev) => ({
            ...prev,
            isTimerHidden: typeof update === 'function' ? update(prev.isTimerHidden) : update,
          }))
        }
        onResetExam={handleResetExam}
      />

      {/* Main View Body */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'exam' && !examState.isCompleted && (
          <ExamView
            questions={sat1400Questions}
            state={examState}
            setState={setExamState}
            onCompleteExam={handleCompleteExam}
          />
        )}

        {activeTab === 'exam' && examState.isCompleted && (
          <ScoreReport
            questions={sat1400Questions}
            answers={examState.answers}
            flagged={examState.flagged}
            timeRemaining={examState.timeRemaining}
            onRetake={handleRetakeExam}
          />
        )}

        {activeTab === 'traps' && <TrapsGuide />}
      </main>
    </div>
  );
}

export default App;
