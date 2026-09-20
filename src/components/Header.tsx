import { GraduationCap, BookOpen, RotateCcw } from 'lucide-react';
import { Timer } from './Exam/Timer';

interface Props {
  activeTab: 'exam' | 'traps';
  setActiveTab: (tab: 'exam' | 'traps') => void;
  isExamCompleted: boolean;
  scoreInfo: { correct: number; total: number; scaled: number } | null;
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
  isTimerPaused: boolean;
  setIsTimerPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerHidden: boolean;
  setIsTimerHidden: React.Dispatch<React.SetStateAction<boolean>>;
  onResetExam: () => void;
}

export const Header: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  isExamCompleted,
  scoreInfo,
  timeRemaining,
  setTimeRemaining,
  isTimerPaused,
  setIsTimerPaused,
  isTimerHidden,
  setIsTimerHidden,
  onResetExam,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center font-black text-white text-base shadow-inner border border-blue-400/30">
              1400+
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                  SAT Reading Elite
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  1100 → 1400+
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  🇹🇷 Türkçe Çözümlü
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Hard Module-2 Mastery • Authentic Bluebook Interface
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('exam')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'exam'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>50-Q Exam</span>
              {isExamCompleted && scoreInfo && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-900 ml-1">
                  {scoreInfo.scaled} / 800
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('traps')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'traps'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>1400+ Traps Guide</span>
            </button>
          </nav>

          {/* Right Action Utilities: Timer & Reset */}
          <div className="flex items-center gap-2 sm:gap-3">
            {activeTab === 'exam' && !isExamCompleted && (
              <Timer
                timeRemaining={timeRemaining}
                setTimeRemaining={setTimeRemaining}
                isPaused={isTimerPaused}
                setIsPaused={setIsTimerPaused}
                isHidden={isTimerHidden}
                setIsHidden={setIsTimerHidden}
                onTimeUp={() => {}}
              />
            )}

            <button
              onClick={onResetExam}
              title="Reset Test Progress"
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
