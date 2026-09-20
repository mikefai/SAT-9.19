export type OptionId = 'A' | 'B' | 'C' | 'D';

export type QuestionDomain =
  | 'Craft and Structure'
  | 'Information and Ideas'
  | 'Standard English Conventions'
  | 'Expression of Ideas';

export type DifficultyLevel = 'Medium-Hard' | 'Hard' | 'Extreme / 1400+';

export interface QuestionOption {
  id: OptionId;
  text: string;
}

export interface Question {
  id: string;
  domain: QuestionDomain;
  skill: string;
  difficulty: DifficultyLevel;
  passageTitle?: string;
  passage: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: OptionId;
  explanation: string;
  turkishExplanation: string;
  trapType: string;
}

export interface Highlight {
  id: string;
  questionId: string;
  text: string;
  color: 'yellow' | 'pink' | 'blue';
  rangeInfo?: {
    start: number;
    end: number;
  };
}

export interface ExamSessionState {
  currentQuestionIndex: number;
  answers: Record<string, OptionId>;
  flagged: Record<string, boolean>;
  eliminations: Record<string, OptionId[]>;
  highlights: Record<string, Highlight[]>;
  timeRemaining: number; // in seconds (e.g. 70 mins = 4200)
  isCompleted: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  isTimerPaused: boolean;
  isTimerHidden: boolean;
}
