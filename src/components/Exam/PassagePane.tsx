import { useState, useRef } from 'react';
import type { Question, Highlight } from '../../types/sat';
import { Highlighter, Type, Trash2, BookOpen } from 'lucide-react';

interface Props {
  question: Question;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highlights: Highlight[];
  onAddHighlight: (highlight: Highlight) => void;
  onClearHighlights: () => void;
}

export const PassagePane: React.FC<Props> = ({
  question,
  fontSize,
  setFontSize,
  highlights,
  onAddHighlight,
  onClearHighlights,
}) => {
  const [activeColor, setActiveColor] = useState<'yellow' | 'pink' | 'blue'>('yellow');
  const passageRef = useRef<HTMLDivElement>(null);

  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-relaxed',
  };

  const handleSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !passageRef.current) return;

    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length < 2) return;

    // Verify selection is within passage container
    if (passageRef.current.contains(selection.anchorNode)) {
      const newHighlight: Highlight = {
        id: `hl-${Date.now()}`,
        questionId: question.id,
        text: selectedText,
        color: activeColor,
      };
      onAddHighlight(newHighlight);
      selection.removeAllRanges();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Passage Header / Tools Strip */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
            <BookOpen className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="font-bold text-slate-800 block">Reading Stimulus</span>
            <span className="text-[10px] text-slate-500 font-medium">
              {question.domain} • {question.skill}
            </span>
          </div>
        </div>

        {/* Toolbar: Font Size + Highlighter */}
        <div className="flex items-center gap-3">
          {/* Font Size Selector */}
          <div className="flex items-center bg-white rounded-lg border border-slate-200 p-0.5 shadow-xs">
            <span className="px-1.5 text-slate-400">
              <Type className="w-3 h-3" />
            </span>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                fontSize === 'normal' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                fontSize === 'large' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                fontSize === 'xlarge' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A++
            </button>
          </div>

          {/* Color Highlighters */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
            <Highlighter className="w-3.5 h-3.5 text-slate-400 ml-1" />
            <button
              onClick={() => setActiveColor('yellow')}
              title="Yellow Highlighter"
              className={`w-4 h-4 rounded-full bg-yellow-300 border transition ${
                activeColor === 'yellow' ? 'ring-2 ring-yellow-500 scale-110 border-yellow-600' : 'border-yellow-400 opacity-70'
              }`}
            />
            <button
              onClick={() => setActiveColor('pink')}
              title="Pink Highlighter"
              className={`w-4 h-4 rounded-full bg-pink-300 border transition ${
                activeColor === 'pink' ? 'ring-2 ring-pink-500 scale-110 border-pink-600' : 'border-pink-400 opacity-70'
              }`}
            />
            <button
              onClick={() => setActiveColor('blue')}
              title="Blue Highlighter"
              className={`w-4 h-4 rounded-full bg-sky-300 border transition ${
                activeColor === 'blue' ? 'ring-2 ring-sky-500 scale-110 border-sky-600' : 'border-sky-400 opacity-70'
              }`}
            />
            {highlights.length > 0 && (
              <button
                onClick={onClearHighlights}
                title="Clear Highlights"
                className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-rose-500 transition ml-1"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Passage Content Box */}
      <div
        ref={passageRef}
        onMouseUp={handleSelection}
        className="flex-1 p-6 sm:p-8 overflow-y-auto passage-scroll space-y-4"
      >
        {question.passageTitle && (
          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider pb-1 border-b border-slate-100">
            {question.passageTitle}
          </h4>
        )}

        <div
          className={`font-serif text-slate-800 tracking-normal selection:bg-amber-200 whitespace-pre-line ${fontClasses[fontSize]}`}
        >
          {question.passage}
        </div>

        {/* Highlights Drawer Preview if active */}
        {highlights.length > 0 && (
          <div className="pt-4 mt-6 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-700 block">Your Highlights:</span>
            <div className="flex flex-wrap gap-1.5">
              {highlights.map((hl) => (
                <span
                  key={hl.id}
                  className={`px-2 py-0.5 rounded text-[11px] font-serif ${
                    hl.color === 'yellow'
                      ? 'bg-yellow-100 text-yellow-900 border border-yellow-300'
                      : hl.color === 'pink'
                      ? 'bg-pink-100 text-pink-900 border border-pink-300'
                      : 'bg-sky-100 text-sky-900 border border-sky-300'
                  }`}
                >
                  "{hl.text.slice(0, 32)}..."
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
