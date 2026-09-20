import { useState, useEffect } from 'react';
import type { Question, OptionId } from '../../types/sat';
import { Award, XCircle, RotateCcw, ChevronDown, BookOpen, Clock, Target, Sparkles, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  questions: Question[];
  answers: Record<string, OptionId>;
  flagged: Record<string, boolean>;
  timeRemaining: number;
  onRetake: () => void;
}

export const ScoreReport: React.FC<Props> = ({
  questions,
  answers,
  flagged,
  timeRemaining,
  onRetake,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(questions[0]?.id || null);

  const totalQuestions = questions.length;
  const correctCount = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Scaled Score Calculation (200 - 800 scale for Reading & Writing)
  // 43+ out of 50 reaches 700+ (equating to 1400+ on composite 1600 scale)
  const calculateScaledScore = (correct: number) => {
    if (correct >= 48) return 780 + Math.round(((correct - 48) / 2) * 20);
    if (correct >= 43) return 700 + Math.round(((correct - 43) / 5) * 70);
    if (correct >= 37) return 630 + Math.round(((correct - 37) / 6) * 60);
    if (correct >= 30) return 550 + Math.round(((correct - 30) / 7) * 70);
    if (correct >= 20) return 450 + Math.round(((correct - 20) / 10) * 90);
    return Math.max(200, Math.round(200 + (correct / 20) * 240));
  };

  const estimatedScaled = calculateScaledScore(correctCount);
  const is1400Reached = estimatedScaled >= 700;

  // Trigger celebratory confetti if 1400+ target achieved
  useEffect(() => {
    if (is1400Reached) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.error('Confetti error', e);
      }
    }
  }, [is1400Reached]);

  // Domain breakdown calculation
  const domainStats: Record<string, { total: number; correct: number }> = {};
  questions.forEach((q) => {
    if (!domainStats[q.domain]) {
      domainStats[q.domain] = { total: 0, correct: 0 };
    }
    domainStats[q.domain].total += 1;
    if (answers[q.id] === q.correctAnswer) {
      domainStats[q.domain].correct += 1;
    }
  });

  const filteredQuestions = questions.filter((q) => {
    if (filter === 'incorrect') return answers[q.id] !== q.correctAnswer;
    if (filter === 'flagged') return !!flagged[q.id];
    return true;
  });

  const timeUsedSeconds = 70 * 60 - timeRemaining;
  const timeUsedMinutes = Math.floor(timeUsedSeconds / 60);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8 animate-fade-in">
      {/* Hero Performance Card */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Digital SAT 1400+ Diagnostic Evaluation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {is1400Reached ? '🎉 1400+ Target Reached!' : 'Diagnostic Performance Report'}
            </h1>

            <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
              {is1400Reached
                ? 'Tebrikler! Soru çözüm hızınız ve çeldirici eleme stratejiniz sizi 700+ Reading & Writing (1400+ Genel SAT) bandına taşıdı.'
                : '1100 bandından 1400+ hedefine ulaşmak için aşağıdaki soru analizlerini ve çeldirici tuzaklarını mutlaka inceleyin.'}
            </p>
          </div>

          {/* Scaled Score & Accuracy Badges */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-center bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/15 shadow-inner">
              <span className="text-[11px] uppercase tracking-wider text-blue-200 font-bold block">
                Estimated RW Score
              </span>
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                {estimatedScaled}
              </span>
              <span className="text-xs text-slate-300 block mt-0.5">/ 800 scale</span>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/15 shadow-inner">
              <span className="text-[11px] uppercase tracking-wider text-emerald-200 font-bold block">
                Raw Accuracy
              </span>
              <span className="text-4xl sm:text-5xl font-black text-emerald-300 font-mono">
                {correctCount}
              </span>
              <span className="text-xs text-slate-300 block mt-0.5">/ {totalQuestions} ({percentage}%)</span>
            </div>
          </div>
        </div>

        {/* Quick Diagnostics Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              Süre: <b>{timeUsedMinutes} dakika</b>
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-400" />
              Soru Başına Ortalama: <b>~{(timeUsedSeconds / totalQuestions / 60).toFixed(1)} dk/soru</b>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition text-xs border border-slate-700 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF</span>
            </button>

            <button
              onClick={onRetake}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition text-xs shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sınavı Tekrar Çöz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Domain Mastery Breakdown */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>College Board Alan Başarı Analizi (Domain Mastery)</span>
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline">1400+ için her alanda %80+ hedeflenmelidir</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(domainStats).map(([domain, stat]) => {
            const domainPercent = Math.round((stat.correct / stat.total) * 100);
            const isGood = domainPercent >= 80;

            return (
              <div key={domain} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 truncate" title={domain}>
                    {domain}
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {stat.correct}/{stat.total} ({domainPercent}%)
                  </span>
                </div>

                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isGood ? 'bg-emerald-500' : domainPercent >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${domainPercent}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500">
                  {isGood
                    ? '✓ Güçlü Alan: Bu alanda 1400+ bandı soru standardını yakaladınız.'
                    : '⚠ Geliştirilmeli: Modül 2 çeldirici tuzaklarına dikkat edilmeli.'}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question-by-Question Deep Review */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Soru Bazlı Detaylı Analiz & 1400+ Çeldirici İncelemesi</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Her sorunun altında College Board resmi mantığı ve Türk öğrencilerin en sık düştüğü tuzaklar açıklanmıştır.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümü ({questions.length})
            </button>
            <button
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                filter === 'incorrect' ? 'bg-white text-rose-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-500" />
              Yanlışlar ({totalQuestions - correctCount})
            </button>
            <button
              onClick={() => setFilter('flagged')}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === 'flagged' ? 'bg-white text-amber-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              İşaretliler ({Object.values(flagged).filter(Boolean).length})
            </button>
          </div>
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((item) => item.id === q.id);
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition"
              >
                {/* Accordion Item Header */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="p-5 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-slate-50/70 transition"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : userAnswer
                          ? 'bg-rose-100 text-rose-800 border border-rose-300'
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}
                    >
                      {isCorrect ? '✓' : userAnswer ? '✗' : '-'}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">
                          Question {originalIndex + 1}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-600 font-medium">
                          {q.domain} - {q.skill}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span>
                          Cevabınız: <b>{userAnswer || 'Boş'}</b>
                        </span>
                        <span>•</span>
                        <span>
                          Doğru Cevap: <b className="text-emerald-700">({q.correctAnswer})</b>
                        </span>
                        {q.trapType && (
                          <>
                            <span>•</span>
                            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.2 rounded border border-amber-200">
                              Tuzak: {q.trapType}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    className={`p-2 rounded-full text-slate-400 hover:text-slate-600 transition-transform ${
                      isExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                {/* Accordion Expanded Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 animate-fade-in bg-slate-50/30 text-sm">
                    {/* Passage Box */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Passage Stimulus:
                      </div>
                      <p className="font-serif text-slate-800 text-sm leading-relaxed whitespace-pre-line">
                        {q.passage}
                      </p>
                    </div>

                    {/* Question Prompt */}
                    <p className="font-bold text-slate-900">{q.question}</p>

                    {/* 4 Choices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt) => {
                        const isThisCorrect = opt.id === q.correctAnswer;
                        const isUserChoice = opt.id === userAnswer;

                        let optStyle = 'border-slate-200 bg-white text-slate-700';
                        if (isThisCorrect) {
                          optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500';
                        } else if (isUserChoice) {
                          optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-medium';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 ${optStyle}`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                isThisCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : isUserChoice
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {opt.id}
                            </span>
                            <span className="flex-1 leading-snug">{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* English Explanation */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wider block">
                        Official College Board Rationale:
                      </span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>

                    {/* Turkish 1400+ Master Breakdown */}
                    <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 space-y-2 text-xs text-emerald-950">
                      <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-emerald-900">
                        <span>🇹🇷</span>
                        <span>1400+ Bandı Soru Analizi & Çeldirici Tuzağı</span>
                      </span>
                      <div className="leading-relaxed whitespace-pre-line space-y-2">
                        {q.turkishExplanation}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
