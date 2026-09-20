import type { ExamSessionState } from '../types/sat';

const STORAGE_KEY = 'sat_1400_elite_session_v1';

export const initialExamState: ExamSessionState = {
  currentQuestionIndex: 0,
  answers: {},
  flagged: {},
  eliminations: {},
  highlights: {},
  timeRemaining: 70 * 60, // 70 minutes (approx 1.4 min per question for 50 questions)
  isCompleted: false,
  fontSize: 'normal',
  isTimerPaused: false,
  isTimerHidden: false,
};

export function loadExamState(): ExamSessionState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...initialExamState,
        ...parsed,
      };
    }
  } catch (e) {
    console.error('Failed to load exam state from storage:', e);
  }
  return initialExamState;
}

export function saveExamState(state: ExamSessionState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save exam state to storage:', e);
  }
}

export function clearExamState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear exam state:', e);
  }
}
