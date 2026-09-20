import { useState } from 'react';
import { AlertTriangle, ShieldCheck, ChevronDown, Sparkles, BookOpen, Target } from 'lucide-react';

interface TrapItem {
  id: string;
  name: string;
  turkishName: string;
  dangerLevel: 'Critical (1100 Killer)' | 'High' | 'Master Tier (1400+)';
  description: string;
  turkishDescription: string;
  examplePassage: string;
  trapOption: string;
  whyItFails: string;
  correctOption: string;
  whyItSucceeds: string;
  ruleOfThumb: string;
}

const TRAPS_DATA: TrapItem[] = [
  {
    id: 'trap-1',
    name: 'The Literal Vocabulary Mirage',
    turkishName: 'Günlük Anlam Serabı (İkincil Akademik Anlam Tuzağı)',
    dangerLevel: 'Critical (1100 Killer)',
    description:
      'College Board selects polysemous words whose everyday conversational meaning is well known, while the academic or contextual definition is far more precise and restrictive.',
    turkishDescription:
      '1100 bandındaki öğrenci kelimeyi görünce aklına gelen ilk sokak İngilizcesi anlamını işaretler. 1400+ öğrencisi ise kelimenin akademik bağlamdaki ikincil anlamını (qualify = sınırlandırmak, temper = hafifletmek, plastic = esnek, compromise = zayıflatmak) arar.',
    examplePassage:
      'The committee sought to qualify the chairman\'s ambitious assertions regarding revenue growth...',
    trapOption: 'certify the chairman as competent to speak on finance',
    whyItFails:
      'Relying on the everyday meaning of "qualify" (meeting requirements or getting certified) completely ignores the textual conflict.',
    correctOption: 'limit or moderate the scope of the chairman\'s assertions',
    whyItSucceeds:
      'In scholarly prose, to qualify a claim means to add nuances, conditions, or restrictions to prevent it from being overly broad.',
    ruleOfThumb:
      'Eğer bir kelime sorusunda en yaygın anlam şıklarda varsa, %90 ihtimalle o bir çeldiricidir! Cümlenin zıtlık veya paralellik bağlacına bakın.',
  },
  {
    id: 'trap-2',
    name: 'The Half-Right, Half-Wrong Trap',
    turkishName: 'Yarı Doğru Yarı Yanlış Cımbızlama Tuzağı',
    dangerLevel: 'Critical (1100 Killer)',
    description:
      'The first half of the answer choice accurately repeats words directly from the text, but the second half introduces an unmentioned causal claim or an unsupported extreme conclusion.',
    turkishDescription:
      'Seçeneğin ilk 6-7 kelimesi metindeki kelimelerle birebir aynıdır; acele eden öğrenci ilk kısmı okuyup hemen işaretler. Oysa seçeneğin sonundaki 3 kelime metinde hiç geçmeyen hayali bir neden-sonuç bağı kurmaktadır.',
    examplePassage:
      'Dr. Ortiz found agave phytoliths on obsidian blades, indicating agricultural processing...',
    trapOption: 'Obsidian blades from Copan were made of green stone from Pachuca and therefore were manufactured exclusively by Aztec priests.',
    whyItFails:
      'The green Pachuca obsidian is true, but "exclusively by Aztec priests" is completely unmentioned and unwarranted.',
    correctOption: 'The presence of plant phytoliths demonstrates utilitarian domestic use rather than solely ceremonial function.',
    whyItSucceeds:
      'Every single word in the choice is backed by textual proof without adding unwarranted external assumptions.',
    ruleOfThumb:
      'Bir şıkkın %90\'ı doğru olsa bile %10\'u metinde yoksa o şık %100 YANLIŞTIR! Şıkkın her kelimesini sonuna kadar okuyun.',
  },
  {
    id: 'trap-3',
    name: 'The Paired Passage Mirror Fallacy',
    turkishName: 'Çift Metin Kutup Yanılsaması (Siyah-Beyaz Zıtlık Tuzağı)',
    dangerLevel: 'Master Tier (1400+)',
    description:
      'Assuming that Text 2 must completely and furiously contradict Text 1, rather than subtly qualifying its scope, questioning a hidden premise, or addressing an unmodeled variable.',
    turkishDescription:
      '1100 bandı öğrenci Text 2\'nin Text 1\'e tamamen düşman olduğunu sanır ("Text 1 tamamen yanlıştır, sahtedir"). Oysa 1400+ seviyesinde Text 2, Text 1\'in bulgularını kabul eder ama açıklamanın yetersiz olduğunu veya başka bir faktörün (Younger Dryas iklimi gibi) atlandığını söyler.',
    examplePassage:
      'Text 1: Phosphine on Venus proves microbial life.\nText 2: Volcanic sulfur catalysis also generates phosphine.',
    trapOption: 'Text 2 conclusively disproves that Venus has an atmosphere.',
    whyItFails:
      'Too extreme and misidentifies the nature of the critique.',
    correctOption: 'Text 2 demonstrates that abiotic geochemical pathways can account for phosphine, rendering biological interpretations non-essential.',
    whyItSucceeds:
      'It targets the specific explanatory sufficiency of Text 1 rather than creating an exaggerated cartoon fight.',
    ruleOfThumb:
      'Text 2 nadiren "Text 1 yalan söylüyor" der; genellikle "Text 1 şu değişkeni hesaba katmadığı için vardığı kesin sonuç erken bir genellemedir" der.',
  },
  {
    id: 'trap-4',
    name: 'The Post-Hoc Causal Leap',
    turkishName: 'Zamansal Çakışmayı Neden-Sonuç Sanma Tuzağı',
    dangerLevel: 'High',
    description:
      'Confusing chronological correlation (two events occurring in the same era) with direct, unmitigated causation.',
    turkishDescription:
      'İki olay aynı anda oldu diye birinin diğerine sebep olduğunu varsaymak. (Örn: Clovis avcılarının gelişi ile mamutların yok oluşunun aynı zamana denk gelmesi tek başına insanların mamutları yok ettiğini ispatlamaz).',
    examplePassage:
      'Sedimentary cores show megafauna vanished during the Younger Dryas cold event, concurrently with Clovis expansion...',
    trapOption: 'Clovis hunters deliberately engineered cold climates to freeze megafauna.',
    whyItFails:
      'Fabricates a causal link between two concurrent events.',
    correctOption: 'The concurrent climate shock reduced vegetation, suggesting extinction was driven by environmental crisis rather than human spears alone.',
    whyItSucceeds:
      'Accurately respects the multi-variable complexity of ecological systems.',
    ruleOfThumb:
      'SAT fen ve tarih metinlerinde korelasyon (correlation) asla nedensellik (causation) değildir! Bağımsız bir çevresel değişken olup olmadığını kontrol edin.',
  },
  {
    id: 'trap-5',
    name: 'The Quantitative Rate vs. Difference Confusion',
    turkishName: 'Yüzde Oran ile Yüzde Puan Farkı Tuzağı (Tablo Okuma)',
    dangerLevel: 'Master Tier (1400+)',
    description:
      'Confusing absolute differences with relative percentage changes, or conflating horizontal row trends with vertical column groupings.',
    turkishDescription:
      'Grafik ve tablolarda 7.4\'ten 13.8\'e çıkış +6.4 puanlık bir fark iken, yüzdesel olarak %86\'lık bir artıştır. Çeldiriciler genellikle satır ve sütunların yerini değiştirir ya da mutlak artışla oransal artışı birbirine karıştırır.',
    examplePassage:
      'Betula increased from 7.4 to 13.8 under drought with CO2, while Fagus increased from 4.5 to 4.9...',
    trapOption: 'Fagus experienced a greater percentage increase than Betula.',
    whyItFails:
      'Direct factual and mathematical inversion of the table.',
    correctOption: 'Betula gained 6.4 units (an 86% enhancement) compared to Fagus\'s 0.4 units (<9% enhancement).',
    whyItSucceeds:
      'Mathematically precise, citing exact values from the table.',
    ruleOfThumb:
      'Tablo sorularında metindeki iddiayı okumadan şıklara atlamayın! Şıkta geçen her sayıyı parmağınızla tablodaki hücreden tek tek kontrol edin.',
  },
  {
    id: 'trap-6',
    name: 'The Synthesis Partial-Fulfillment Trap',
    turkishName: 'Araştırma Notlarında Tek Hedefi Karşılama Tuzağı',
    dangerLevel: 'High',
    description:
      'In Rhetorical Synthesis (bullet notes), selecting a choice that accomplishes only one of the two constraints specified in the prompt.',
    turkishDescription:
      'Soru kökü sizden "hem metodoloji farkını vurgulamanızı hem de ortak istihdam sonucunu belirtmenizi" ister. Çeldirici seçenek ise sadece metodolojiyi ya da sadece sonucu söyler. İkisi birden yoksa o şık elenir!',
    examplePassage:
      'Goal: Contrast methodologies while emphasizing a shared conclusion regarding urban migrant employment.',
    trapOption: 'Du Bois collected door-to-door interviews in Philadelphia, whereas Park and Burgess studied Chicago.',
    whyItFails:
      'Only fulfills the contrast condition, completely ignoring the shared conclusion condition.',
    correctOption: 'While Du Bois gathered door-to-door interviews and Park and Burgess analyzed aggregate census statistics, both concluded migrants were channeled into low-income jobs.',
    whyItSucceeds:
      'Fulfills 100% of both constraints in a single grammatically cohesive sentence.',
    ruleOfThumb:
      'Soru kökündeki hedefi iki parçaya bölün (Hedef A + Hedef B). Şıkları okurken formülünüz şu olsun: Sadece A = YANLIŞ, Sadece B = YANLIŞ, A + B = DOĞRU!',
  },
];

export const TrapsGuide: React.FC = () => {
  const [expandedTrap, setExpandedTrap] = useState<string | null>('trap-1');

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The 1400+ Score Leap Blueprint</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Module-2 Hard Trap Analysis & Elimination Handbook
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          1100 bandındaki öğrencilerin en sık takıldığı ve College Board'un 1400+ adaylarını filtrelemek için kullandığı 6 ölümcül sınav tuzağı, Türkçe çözüm stratejileri ve kaçış kuralları.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
          <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            İkincil Akademik Kelimeler
          </span>
          <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            Çift Metin Kutuplaşması
          </span>
          <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            Yarı Doğru Yarı Yanlış Şıklar
          </span>
        </div>
      </div>

      {/* Traps Accordion Cards */}
      <div className="space-y-4">
        {TRAPS_DATA.map((trap, index) => {
          const isExpanded = expandedTrap === trap.id;

          return (
            <div
              key={trap.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition"
            >
              {/* Header */}
              <div
                onClick={() => setExpandedTrap(isExpanded ? null : trap.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-slate-50/70 transition"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-900 text-white">
                      Trap #{index + 1}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                        trap.dangerLevel.includes('Critical')
                          ? 'bg-rose-100 text-rose-800 border-rose-200'
                          : 'bg-amber-100 text-amber-800 border-amber-200'
                      }`}
                    >
                      {trap.dangerLevel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {trap.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    🇹🇷 {trap.turkishName}
                  </p>
                </div>

                <button
                  className={`p-2 rounded-full text-slate-400 hover:text-slate-600 transition-transform ${
                    isExpanded ? 'rotate-180 text-blue-600' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 animate-fade-in bg-slate-50/30 text-xs sm:text-sm">
                  {/* Descriptions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                      <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">
                        College Board Design Mechanism:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-xs">
                        {trap.description}
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1.5">
                      <span className="font-bold text-emerald-900 text-xs uppercase tracking-wider block flex items-center gap-1">
                        <span>🇹🇷</span>
                        <span>1100 vs. 1400+ Fark Analizi:</span>
                      </span>
                      <p className="text-emerald-950 leading-relaxed text-xs">
                        {trap.turkishDescription}
                      </p>
                    </div>
                  </div>

                  {/* Concrete Right vs Wrong Example */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-4">
                    <span className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Gerçek Sınav Örnek Vakası (Case Study):</span>
                    </span>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-serif italic text-slate-800">
                      "{trap.examplePassage}"
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Trap Option */}
                      <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-rose-800 font-bold">
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          <span>TUZAK ŞIK (Çeldirici):</span>
                        </div>
                        <p className="font-medium text-rose-950">"{trap.trapOption}"</p>
                        <p className="text-rose-900 text-[11px] pt-1 border-t border-rose-200">
                          <b>Neden Elenir:</b> {trap.whyItFails}
                        </p>
                      </div>

                      {/* Correct Option */}
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>DOĞRU ŞIK (1400+ Tercihi):</span>
                        </div>
                        <p className="font-medium text-emerald-950">"{trap.correctOption}"</p>
                        <p className="text-emerald-900 text-[11px] pt-1 border-t border-emerald-200">
                          <b>Neden Kazanır:</b> {trap.whyItSucceeds}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Golden Rule of Thumb */}
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-3 text-xs text-amber-950">
                    <span className="p-1 rounded-lg bg-amber-200 text-amber-900 shrink-0 font-bold">
                      KURAL
                    </span>
                    <div>
                      <span className="font-bold text-amber-900 block mb-0.5">
                        1400+ Altın Kaçış Kuralı:
                      </span>
                      <p className="leading-relaxed">{trap.ruleOfThumb}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
