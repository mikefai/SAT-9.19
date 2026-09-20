import { useEffect } from 'react';
import { Clock, Eye, EyeOff, Pause, Play } from 'lucide-react';

interface Props {
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  onTimeUp: () => void;
}

export const Timer: React.FC<Props> = ({
  timeRemaining,
  setTimeRemaining,
  isPaused,
  setIsPaused,
  isHidden,
  setIsHidden,
  onTimeUp,
}) => {
  useEffect(() => {
    if (isPaused || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeRemaining, setTimeRemaining, onTimeUp]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining > 0 && timeRemaining <= 5 * 60; // 5 min warning

  return (
    <div className="flex items-center gap-2 bg-slate-800 text-white px-3 py-1.5 rounded-xl border border-slate-700 text-xs shadow-inner">
      <Clock className={`w-3.5 h-3.5 ${isLowTime ? 'text-rose-400 animate-pulse' : 'text-slate-400'}`} />

      {!isHidden ? (
        <span
          className={`font-mono font-bold tracking-wider ${
            isLowTime ? 'text-rose-400 font-extrabold animate-pulse' : 'text-slate-100'
          }`}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      ) : (
        <span className="font-mono text-slate-400 italic">--:--</span>
      )}

      <div className="flex items-center gap-1 border-l border-slate-700 pl-2 ml-1">
        <button
          onClick={() => setIsHidden(!isHidden)}
          title={isHidden ? 'Show Timer' : 'Hide Timer'}
          className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition"
        >
          {isHidden ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          title={isPaused ? 'Resume Timer' : 'Pause Timer'}
          className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
