import type { Question } from '../types/sat';

export const questionsPart1: Question[] = [
  // -------------------------------------------------------------
  // 1. WORDS IN CONTEXT (ADVANCED / SECONDARY MEANINGS) (Q1 - Q8)
  // -------------------------------------------------------------
  {
    id: 'sat1400-q1',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Evolutionary Epistemology',
    passage: `Although early sociobiologists asserted that human behavioral patterns were almost exclusively determined by genetic predispositions, contemporary researchers have sought to _______ such claims, demonstrating that cultural transmission and epigenetic plasticity exert an equally profound influence on cognitive development.`,
    question: `As used in the text, what does the word "qualify" most nearly mean?`,
    options: [
      { id: 'A', text: 'fulfill the technical prerequisites for' },
      { id: 'B', text: 'limit or moderate the scope of' },
      { id: 'C', text: 'certify as formally competent' },
      { id: 'D', text: 'repudiate entirely as fraudulent' },
    ],
    correctAnswer: 'B',
    trapType: 'Literal/Everyday Meaning Trap',
    explanation: `Choice B is the best answer. In academic discourse, to "qualify" a claim means to limit, moderate, or make it less absolute. The passage contrasts the early sociobiologists' view ("almost exclusively determined by genetic predispositions") with modern findings showing that culture and epigenetics also play an "equally profound influence." Thus, modern researchers do not completely dismiss the genetic claim (which eliminates Choice D), but rather moderate its sweeping exclusivity. Choices A and C rely on the colloquial definition of "qualifying for an exam or position," which is irrelevant in this context.`,
    turkishExplanation: `Doğru Cevap: B (limit or moderate the scope of).
1100-1200 Bandı Tuzağı: "Qualify" kelimesini günlük dildeki "şartları sağlamak, hak kazanmak" (A ve C) anlamıyla karıştırmak.
1400+ Bandı Sırrı: SAT Reading'de "qualify" kelimesi %90 ihtimalle "bir iddiayı yumuşatmak, sınırlandırmak, istisna ekleyerek mutlaklığını azaltmak" (to limit, moderate) anlamına gelir. Metinde genetik determinizmin tamamen reddedilmediği (D elenir), ancak kültürel faktörlerin de eklenerek iddianın kapsamının sınırlandırıldığı vurgulanmaktadır.`,
  },
  {
    id: 'sat1400-q2',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Macroeconomic Policy & Inflationary Pressures',
    passage: `During the post-war reconstruction boom, fiscal authorities attempted to _______ the aggressive momentum of capital accumulation by instituting graduated luxury excises, fearing that unconstrained speculative demand would precipitate hyperinflation.`,
    question: `As used in the text, which choice best substitutes for "temper"?`,
    options: [
      { id: 'A', text: 'provoke' },
      { id: 'B', text: 'crystallize' },
      { id: 'C', text: 'mitigate' },
      { id: 'D', text: 'harden' },
    ],
    correctAnswer: 'C',
    trapType: 'Metallurgical / Emotional Secondary Meaning',
    explanation: `Choice C is the best answer. In this context, to "temper" means to soften, moderate, or restrain something excessive. The authorities instituted luxury excises because they feared hyperinflation from "aggressive momentum" and "unconstrained speculative demand." Therefore, their goal was to curb or mitigate that momentum. Choice A is the direct antonym. Choice D refers to tempering steel (making it hard), which is a distractor based on an unrelated metallurgical definition. Choice B means to make clear or definite, which does not fit the context of restraining inflation.`,
    turkishExplanation: `Doğru Cevap: C (mitigate - hafifletmek, dizginlemek).
1100-1200 Bandı Tuzağı: "Temper" kelimesini ya "öfke/asabiyet" ya da çeliğe su verip sertleştirmek ("harden", D seçeneği) zannetmek.
1400+ Bandı Sırrı: SAT'de "temper" fiil olarak kullanıldığında "bir şeyin şiddetini azaltmak, ılımlaştırmak, dizginlemek" (soften, moderate, dilute, mitigate) demektir. Cümlede hükümetin enflasyonu önlemek için aşırı sermaye hareketini dizginlemeye çalıştığı açıktır.`,
  },
  {
    id: 'sat1400-q3',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Materials Science & Nanotube Architecture',
    passage: `While carbon-nanotube composite matrices exhibit exceptional tensile resilience under uniform stress, microscopic imperfections introduced during chemical vapor deposition can severely _______ the structural cohesion of the lattice when subjected to cyclic shear forces.`,
    question: `Which choice completes the text with the most logical and precise word?`,
    options: [
      { id: 'A', text: 'compromise' },
      { id: 'B', text: 'reconcile' },
      { id: 'C', text: 'negotiate' },
      { id: 'D', text: 'authenticate' },
    ],
    correctAnswer: 'A',
    trapType: 'Diplomatic Settlement Distractor',
    explanation: `Choice A is the best answer. In formal and technical contexts, "compromise" means to undermine, weaken, or expose to risk or damage. The sentence sets up a contrast with "While... composite matrices exhibit exceptional tensile resilience," noting that microscopic flaws "severely [weaken/endanger]" the material's cohesion under shear forces. Choices B and C rely on the conversational meaning of "compromise" as settling a dispute by mutual concession, which makes no sense when applied to carbon nanotube lattices. Choice D is positively valenced and contradicts the negative impact described.`,
    turkishExplanation: `Doğru Cevap: A (compromise - tehlikeye atmak, zayıflatmak, bozmak).
1100-1200 Bandı Tuzağı: "Compromise" kelimesini sadece "uzlaşmak, anlaşmaya varmak" sanıp cümlenin fiziksel bir bağlamda geçtiğini fark edememek (B ve C seçenekleri bu tuzağa çeker).
1400+ Bandı Sırrı: SAT bilim ve tıp metinlerinde "compromise" (örneğin "compromised immune system" veya "compromised structural integrity") "zarar vermek, savunmasız bırakmak, direncini düşürmek" anlamında College Board'un en sık sorduğu tuzak kelimelerdendir.`,
  },
  {
    id: 'sat1400-q4',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Neurobiology of Cellular Senescence',
    passage: `Targeted pharmacological inhibition of histone deacetylase enzymes has shown promising therapeutic efficacy in preclinical models: by stabilizing chromatin architecture, the treatment managed to _______ the progressive cascade of neurodegenerative pathology in transgenic mice.`,
    question: `As used in the text, what does the word "arrest" most nearly mean?`,
    options: [
      { id: 'A', text: 'apprehend' },
      { id: 'B', text: 'captivate' },
      { id: 'C', text: 'indict' },
      { id: 'D', text: 'halt' },
    ],
    correctAnswer: 'D',
    trapType: 'Criminal Law Colloquialism Trap',
    explanation: `Choice D is the best answer. To "arrest" a process in biological and scientific contexts means to stop, halt, or bring it to a standstill (as in "cardiac arrest"). The text explains that the pharmacological treatment showed "therapeutic efficacy" because it was able to halt or stop the "progressive cascade of neurodegenerative pathology." Choices A and C rely on the legal definition of arresting a suspect, which is completely out of place in neurology. Choice B refers to arresting someone's attention (fascinating them), which is irrelevant here.`,
    turkishExplanation: `Doğru Cevap: D (halt - durdurmak, ket vurmak).
1100-1200 Bandı Tuzağı: "Arrest" görünce aklına polisin tutuklaması (A ve C) gelen öğrenci elenir.
1400+ Bandı Sırrı: Tıp ve fen metinlerinde "arrest" bir hastalığın, kanamanın veya biyolojik sürecin ilerlemesini durdurmak (halt, check, stop) demektir (örneğin cardiac arrest: kalbin durması). Tedavinin olumlu sonucu patolojiyi durdurmasıdır.`,
  },
  {
    id: 'sat1400-q5',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Developmental Biology & Morphogenesis',
    passage: `Rather than functioning as immutable blueprints, the developmental pathways of larval amphibians remain remarkably _______; when exposed to cues of ephemeral pond desiccation, individuals accelerate metamorphism at the expense of terminal body size.`,
    question: `Which choice completes the text with the most logical and precise word?`,
    options: [
      { id: 'A', text: 'plastic' },
      { id: 'B', text: 'synthetic' },
      { id: 'C', text: 'pedestrian' },
      { id: 'D', text: 'monolithic' },
    ],
    correctAnswer: 'A',
    trapType: 'Petrochemical / Material Meaning Trap',
    explanation: `Choice A is the best answer. In biology, "plastic" means adaptable, flexible, or capable of being molded or altered in response to environmental conditions (phenotypic plasticity). The sentence explicitly contrasts this trait with "immutable blueprints" (unchangeable paths) by showing that the larvae adapt their rate of metamorphosis when ponds dry up. Choice B refers to artificial or man-made polymers, which misinterprets "plastic" literally. Choice D means rigid or uniform, which is the exact opposite of what the context demands. Choice C means dull or commonplace.`,
    turkishExplanation: `Doğru Cevap: A (plastic - esnek, çevreye göre şekillenebilen, değişken).
1100-1200 Bandı Tuzağı: "Plastic" kelimesini petrokimyasal sentetik madde (B) zannetmek.
1400+ Bandı Sırrı: Biyoloji ve psikolojide "plastic" (örneğin neuroplasticity, phenotypic plasticity) "sabit olmayan, çevresel uyarılara göre değişip adapte olabilen" (malleable, adaptable) anlamına gelir. Metindeki "Rather than immutable blueprints" (değişmez planlar olmak yerine) zıtlığı doğrudan A seçeneğini gerektirir.`,
  },
  {
    id: 'sat1400-q6',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Agrarian Ecology in Arid Ecosystems',
    passage: `In the subterranean cistern networks of the Nabataean kingdom, hydrologists have uncovered an intricate gravitational aqueduct system designed to _______ seasonal flash-flood torrents, storing negligible runoff across multiple arid years with minimal evaporative loss.`,
    question: `Which choice completes the text with the most logical and precise word?`,
    options: [
      { id: 'A', text: 'squander' },
      { id: 'B', text: 'repudiate' },
      { id: 'C', text: 'husband' },
      { id: 'D', text: 'expend' },
    ],
    correctAnswer: 'C',
    trapType: 'Marital Noun vs. Conservation Verb Trap',
    explanation: `Choice C is the best answer. As an archaic and academic verb, to "husband" means to manage, conserve, or use resources prudently and economically (from which we get "husbandry"). The context specifies that the ancient Nabataeans designed cisterns to capture flash floods and carefully store sparse water with "minimal evaporative loss." Choices A and D are antonyms meaning to waste or use up resources. Choice B means to reject or renounce, which does not fit the physical collection and storage of water.`,
    turkishExplanation: `Doğru Cevap: C (husband - idareli kullanmak, tasarruf etmek, korumak).
1100-1200 Bandı Tuzağı: "Husband" kelimesini sadece "koca/eş" isim anlamıyla bilmek ve fiil kökenli "animal husbandry / resource husbanding" kullanımını tanımamak.
1400+ Bandı Sırrı: College Board, İngilizcede isim olarak çok iyi bilinen kelimelerin az bilinen akademik fiil hallerini sormayı çok sever (table = ertelemek, husband = tutumlu kullanmak, harbor = içinde barındırmak). Su kaynaklarının dikkatle saklanıp ziyan edilmemesi "husband" fiilidir.`,
  },
  {
    id: 'sat1400-q7',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Artistic Modernism & Visual Aesthetics',
    passage: `While early art critics dismissed Paul Cezanne's late still-life canvases as _______ compositions plagued by uninspired arrangements of domestic fruit, subsequent avant-garde painters recognized that his planar distortions quietly inaugurated a revolutionary spatial geometry.`,
    question: `Which choice completes the text with the most logical and precise word?`,
    options: [
      { id: 'A', text: 'transcendent' },
      { id: 'B', text: 'luminescent' },
      { id: 'C', text: 'subversive' },
      { id: 'D', text: 'pedestrian' },
    ],
    correctAnswer: 'D',
    trapType: 'Walking Person / Traffic Meaning Trap',
    explanation: `Choice D is the best answer. In literary and art criticism, "pedestrian" means ordinary, dull, uninspired, or lacking imaginative distinction. The context pairs the word with "plagued by uninspired arrangements of domestic fruit" and contrasts it with the subsequent recognition of a "revolutionary spatial geometry." Choices A and B convey high praise, contradicting the negative critique of early observers. Choice C means rebellious or revolutionary, which contradicts the early dismissal of the work as banal.`,
    turkishExplanation: `Doğru Cevap: D (pedestrian - sıradan, yavan, alelade, yaratıcılıktan uzak).
1100-1200 Bandı Tuzağı: "Pedestrian" kelimesini sadece "yaya" (yürüyen insan) sanmak.
1400+ Bandı Sırrı: SAT eleştiri metinlerinde "pedestrian" sıfatı "vasat, vizyonsuz, basmakalıp" (mundane, dull, uninspired) demektir. Cümledeki "uninspired arrangements" ifadesi doğrudan "pedestrian" kelimesini tanımlamaktadır.`,
  },
  {
    id: 'sat1400-q8',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passageTitle: 'Historiography of Enlightenment Jurisprudence',
    passage: `Because the magistrate held unyielding convictions regarding institutional orthodoxy, he refused to _______ even the most modest deviations from codified procedural statutes, summarily dismissing petitions that lacked precise juristic formatting.`,
    question: `As used in the text, what does the word "countenance" most nearly mean?`,
    options: [
      { id: 'A', text: 'resemble' },
      { id: 'B', text: 'tolerate' },
      { id: 'C', text: 'scrutinize' },
      { id: 'D', text: 'fabricate' },
    ],
    correctAnswer: 'B',
    trapType: 'Facial Expression Literal Trap',
    explanation: `Choice B is the best answer. To "countenance" as a verb means to permit, tolerate, condone, or approve of something. The magistrate was unyielding and "summarily dismissing petitions," meaning he refused to tolerate or accept even the smallest procedural deviations. Choice A means to look like. Choice C means to examine closely, which does not fit "refused to countenance deviations" followed by immediate dismissals. Choice D means to invent or lie.`,
    turkishExplanation: `Doğru Cevap: B (tolerate - hoşgörmek, izin vermek, onaylamak).
1100-1200 Bandı Tuzağı: "Countenance" kelimesini sadece "yüz ifadesi, sima" isim anlamıyla bilmek.
1400+ Bandı Sırrı: Fiil olarak "to countenance", bir duruma müsamaha göstermek veya göz yummak (tolerate, approve, permit) demektir. Hakim katı olduğu için en ufak kural ihlaline bile "müsamaha göstermeyi reddetmiştir" (refused to tolerate).`,
  },

  // -------------------------------------------------------------------
  // 2. TEXT STRUCTURE AND RHETORICAL FUNCTION (Q9 - Q14)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q9',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Forest Succession & Ecological Disturbance',
    passage: `Ecologist Monica Turner's long-term research on post-wildfire recovery in Yellowstone National Park challenged the orthodox view that catastrophic burns inevitably reset ecosystems to an impoverished ecological baseline. Turner demonstrated that high-intensity fires create a complex mosaic of burn severities that actually enhances biodiversity by generating disparate microclimates. <ins>To be sure, localized patches where root systems were completely incinerated exhibited delayed sapling recruitment for several seasons.</ins> Nevertheless, this localized delay did not undermine the broader landscape-level resilience, as seeds dispersed from adjacent moderately scorched boundaries rapidly reestablished vegetative equilibrium.`,
    question: `Which choice best states the function of the underlined sentence in the overall argument of the text?`,
    options: [
      { id: 'A', text: 'It concedes a specific potential drawback to clarify that it does not compromise the broader theoretical conclusion.' },
      { id: 'B', text: 'It presents empirical data that directly refutes the claims of orthodox ecologists cited earlier.' },
      { id: 'C', text: 'It introduces a methodological flaw in Turner\'s sampling technique that future studies must rectify.' },
      { id: 'D', text: 'It questions whether high-intensity fires can ever produce beneficial microclimates in subalpine forests.' },
    ],
    correctAnswer: 'A',
    trapType: 'Total Contradiction vs. Concession Distractor',
    explanation: `Choice A is the best answer. The underlined sentence begins with the classic rhetorical concession transition "To be sure," acknowledging an instance where severe burning delayed sapling regrowth. However, the author immediately follows this with "Nevertheless," explaining that this localized setback did not undermine landscape-level resilience. Thus, the sentence functions as a concession that narrows and clarifies the primary claim without overturning it. Choice B is incorrect because the sentence concedes an adverse effect rather than refuting orthodox views. Choice C is incorrect because no flaw in Turner's methodology is introduced. Choice D is incorrect because the text affirms, rather than questions, Turner's findings.`,
    turkishExplanation: `Doğru Cevap: A (It concedes a specific potential drawback...).
1100-1200 Bandı Tuzağı: "To be sure..." ile başlayan cümleyi ana fikre zıt sanıp yazarın önceki tezini çürüttüğünü (B veya D) zannetmek.
1400+ Bandı Sırrı: Akademik İngilizcede "To be sure..., Nevertheless..." yapısı bir 'concession' (ödün/kabul) yapısıdır. Yazar: "Evet, bazı lokal alanlarda gecikme yaşandı, kabul ediyorum (concession); FAKAT bu durum genel ekosistem direncini bozmadı" diyerek tezini daha da sağlamlaştırmaktadır.`,
  },
  {
    id: 'sat1400-q10',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Philosophy of Science & Quantum Indeterminacy',
    passage: `In classical mechanics, physical models are fundamentally deterministic: if an observer knows the precise position and momentum of every particle at a given instant, the future state of the entire system can theoretically be computed with absolute certainty. <ins>However, in quantum electrodynamics, physical states are described not by fixed trajectories, but by probabilistic wave functions whose deterministic evolution governs only the distribution of measurement outcomes rather than the specific outcome itself.</ins> Consequently, the transition to subatomic physics does not dispense with mathematical lawfulness; rather, it fundamentally redefines the nature of predictability from tangible certitude to statistical distribution.`,
    question: `Which choice best describes the relationship between the underlined sentence and the sentence that follows it?`,
    options: [
      { id: 'A', text: 'The underlined sentence offers an empirical anomaly, and the following sentence reveals that the anomaly is merely an experimental artifact.' },
      { id: 'B', text: 'The underlined sentence proposes a controversial hypothesis, and the following sentence provides mathematical proof supporting it.' },
      { id: 'C', text: 'The underlined sentence illustrates a historical error, and the following sentence explains why classical physicists rejected it.' },
      { id: 'D', text: 'The underlined sentence establishes a shift in theoretical paradigm, and the following sentence clarifies the conceptual philosophical implication of that shift.' },
    ],
    correctAnswer: 'D',
    trapType: 'Overly Empirical / Misstated Relationship',
    explanation: `Choice D is the best answer. The underlined sentence articulates a theoretical departure from classical mechanics to quantum electrodynamics (shifting from fixed trajectories to probabilistic wave functions). The subsequent sentence ("Consequently, the transition... does not dispense with mathematical lawfulness; rather, it fundamentally redefines...") explains the overarching conceptual and philosophical ramification of that shift. Choice A is incorrect because quantum wave mechanics is not characterized as an "empirical anomaly" or "experimental artifact." Choice B is incorrect because no mathematical proof is provided. Choice C is incorrect because classical physics is presented as a paradigm, not an error that was rejected.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Metindeki teknik kuantum terimlerine takılıp "anomali" veya "matematiksel ispat" gibi metinde yer almayan iddiaları seçmek (A veya B).
1400+ Bandı Sırrı: 1400+ seviyesindeki soru, cümleler arasındaki 'retorik köprü'yü test eder. Çizili cümle klasik fizikten kuantum fiziğine olan "paradigma değişimini" (shift in theoretical paradigm) kurar; ardından gelen "Consequently..." cümlesi ise bunun felsefi sonucunu ("it fundamentally redefines predictability") açıklar.`,
  },
  {
    id: 'sat1400-q11',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Architectural Functionalism & Brutalism',
    passage: `Post-war Brutalist architecture, characterized by raw poured concrete and exposed structural armatures, emerged as a socialist-inflected rebellion against bourgeois decorative ornamentation. Architects like Alison and Peter Smithson argued that bare materials honored honest municipal utility. Yet within three decades, the public increasingly associated these monolithic civic complexes with bureaucratic indifference and aesthetic blight. Architectural historian Adrian Forty contends that this divergence arose because Brutalism's creators conflated an ethical commitment to material honesty with an assumption that the public would inherently find civic benevolence in unadorned surfaces.`,
    question: `Which choice best outlines the overall structure of the passage?`,
    options: [
      { id: 'A', text: 'It details an engineering innovation, explains its commercial adoption, and contrasts its environmental costs with traditional masonry.' },
      { id: 'B', text: 'It introduces an architectural movement and its ideological rationale, describes a subsequent shift in public sentiment, and provides a scholar\'s diagnosis for that disparity.' },
      { id: 'C', text: 'It defends a maligned architectural style against contemporary detractors by showing that early criticisms were ideologically biased.' },
      { id: 'D', text: 'It surveys conflicting interpretations of Brutalism among post-war critics and synthesizes them into a unified aesthetic theory.' },
    ],
    correctAnswer: 'B',
    trapType: 'Premature Defense vs. Objective Structural Outline',
    explanation: `Choice B is the best answer. The passage moves chronologically and analytically: (1) introduces Brutalism and its core rationale (rebellion against ornamentation, honoring honest municipal utility); (2) charts the historical reaction ("Yet within three decades, the public increasingly associated..."); and (3) presents Adrian Forty's diagnosis of why this divergence occurred (architects conflated ethical material honesty with perceived public benevolence). Choice A is incorrect because Brutalism is framed as an ideological aesthetic movement, not a commercial engineering adoption. Choice C is incorrect because the passage does not defend the style. Choice D is incorrect because the passage presents public backlash and a single historian's diagnosis, not a synthesis of conflicting critics.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Yazarın bir mimariyi savunduğunu (C) veya sadece teknik maliyetleri anlattığını (A) sanmak.
1400+ Bandı Sırrı: Paragrafın 3 temel omurgası vardır: 1) Akımın doğuşu ve ideolojik sebebi (Brutalist architecture... socialist rebellion), 2) Halkın zamanla soğuması (Yet within three decades...), 3) Bir tarihçinin bu kopukluğu teşhisi (Adrian Forty contends...). B seçeneği bu üç aşamayı birebir eksiksiz özetler.`,
  },
  {
    id: 'sat1400-q12',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Cognitive Linguistics & Spatial Metaphor',
    passage: `In their seminal conceptual metaphor framework, George Lakoff and Mark Johnson posited that abstract reasoning is systematically scaffolded by sensorimotor experiences, such that time is universally conceptualized along a horizontal spatial axis. <ins>Admittedly, earlier cross-linguistic surveys supporting this hypothesis relied disproportionately on Indo-European idioms, raising reasonable skepticism that the purported universality was an artifact of linguistic sampling bias.</ins> However, recent experimental studies assessing the Aymara language of the Andean highlands—where speakers gesture toward the space behind them when referencing the future—demonstrate that while the specific spatial orientation may vary, the cognitive reliance on a spatial domain to structure temporal abstractions remains impervious to cultural divergence.`,
    question: `Which choice best states the primary rhetorical function of the underlined sentence?`,
    options: [
      { id: 'A', text: 'It refutes Lakoff and Johnson\'s foundational assertion by proving that time cannot be mapped onto space.' },
      { id: 'B', text: 'It introduces an anthropological counterexample to illustrate that non-Western cultures reject spatial reasoning.' },
      { id: 'C', text: 'It acknowledges a legitimate methodological criticism of earlier research to contextualize the significance of subsequent cross-cultural findings.' },
      { id: 'D', text: 'It suggests that linguistic sampling bias has made it impossible to derive universal cognitive principles.' },
    ],
    correctAnswer: 'C',
    trapType: 'Absolute Rejection Distractor',
    explanation: `Choice C is the best answer. The underlined sentence begins with "Admittedly," acknowledging a valid methodological concern (that earlier surveys relied too heavily on Indo-European languages, prompting skepticism of universality). The passage then pivots with "However," using the non-Indo-European Aymara study to show that although the direction varies (future is behind), spatial scaffolding itself is indeed universal. Therefore, the underlined sentence acknowledges a legitimate methodological critique to heighten the significance of the newer evidence. Choice A is too extreme (the theory is not refuted; it is refined). Choice B is incorrect because the Aymara do use spatial reasoning. Choice D is incorrect because the text shows that universal principles can be derived when non-Indo-European languages are studied.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: "Admittedly..." ile başlayan cümlenin eski araştırmayı tamamen çürüttüğünü (A veya D) düşünmek.
1400+ Bandı Sırrı: "Admittedly" kelimesi akademik metinlerde bir eleştiriyi kabul edip ("haklı bir yöntem zaafı vardı"), hemen ardından gelen "However..." ile bu eleştirinin yeni çalışmalarla nasıl aşıldığını göstermek için kullanılır. Metin teoriyi çöpe atmaz; yöntem eleştirisini kabul edip yeni bulguların önemini artırır.`,
  },
  {
    id: 'sat1400-q13',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Atmospheric Chemistry & Volcanic Forcing',
    passage: `Paleoclimatologists investigating the "Year Without a Summer" in 1816 have traditionally attributed the catastrophic global temperature anomalies solely to the stratospheric sulfate aerosol veil ejected by Mount Tambora. While Tambora's sulfur payload was undeniably monumental, recent high-resolution ice-core glaciochemical analyses demonstrate that tropical insolation had already begun decaying in 1812 following an undocumented low-latitude eruption. By failing to account for this antecedent cooling phase, classical volcanic forcing models overestimated Tambora's singular climatic efficacy by nearly twenty-five percent.`,
    question: `Which choice best describes the author's primary purpose in the text?`,
    options: [
      { id: 'A', text: 'To revise the conventional historical attribution of a climatic event by incorporating evidence of an earlier contributory factor.' },
      { id: 'B', text: 'To dismiss the claim that Mount Tambora had any measurable impact on nineteenth-century global cooling.' },
      { id: 'C', text: 'To argue that ice-core glaciochemistry is an unreliable proxy for reconstructing atmospheric sulfur concentrations.' },
      { id: 'D', text: 'To propose that volcanic forcing models be abandoned in favor of solar irradiance cycles.' },
    ],
    correctAnswer: 'A',
    trapType: 'Extreme Dismissal Trap',
    explanation: `Choice A is the best answer. The author notes that traditional models attributed the 1816 anomalies "solely" to Mount Tambora, acknowledges that Tambora's payload was "undeniably monumental," but introduces new ice-core evidence of an earlier 1812 eruption that caused an "antecedent cooling phase." Consequently, traditional models overestimated Tambora's singular role. The author is therefore revising the traditional attribution by including an earlier factor. Choice B is incorrect because the author explicitly affirms that Tambora was monumental. Choices C and D contradict the passage, which relies on ice-core data and refines, rather than abandons, volcanic forcing models.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: "Tambora'nın etkisi abartıldı" cümlesini görüp Tambora'nın hiç etkisi olmadığını iddia eden B seçeneğine kaymak.
1400+ Bandı Sırrı: College Board, nüanslı bilimsel revizyonları çok sever. Yazar Tambora'yı inkar etmez ("undeniably monumental"), sadece öncesinde 1812'de gerçekleşen başka bir patlamanın da varlığını ekleyerek ("incorporating an earlier contributory factor") eski tek faktörlü modeli revize eder.`,
  },
  {
    id: 'sat1400-q14',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passageTitle: 'Behavioral Economics & Choice Overload',
    passage: `Standard rational-choice economic theory posits that expanding consumer options strictly monotonically increases consumer welfare: having more choices can never make an optimizing agent worse off, as redundant alternatives can simply be ignored. Why, then, when artisanal food markets expand their tasting displays from six jams to twenty-four, do aggregate consumer purchase rates plummet from thirty percent to barely three percent? Psychologists Sheena Iyengar and Mark Lepper argue that beyond a modest threshold, the cognitive friction required to adjudicate marginal distinctions between options induces decision paralysis, replacing the anticipation of utility with the fear of post-choice regret.`,
    question: `Which choice best explains the function of the question in the second sentence?`,
    options: [
      { id: 'A', text: 'It questions the statistical validity of the jam market experiment conducted by Iyengar and Lepper.' },
      { id: 'B', text: 'It implies that rational-choice economic theory has successfully anticipated consumer decision paralysis.' },
      { id: 'C', text: 'It introduces an empirical paradox that exposes an explanatory inadequacy in classical economic theory.' },
      { id: 'D', text: 'It suggests that consumers behave irrationally only when confronted with trivial household purchases.' },
    ],
    correctAnswer: 'C',
    trapType: 'Trivializing the Finding / Misinterpreting Rhetorical Question',
    explanation: `Choice C is the best answer. The first sentence establishes classical theory (more choices always equal or increase welfare). The second sentence poses a rhetorical question highlighting real-world data (expanding jams from 6 to 24 causes purchases to drop from 30% to 3%), which directly conflicts with classical predictions. The remainder of the text explains this cognitive paradox using Iyengar and Lepper's decision paralysis theory. Thus, the question highlights an empirical paradox that challenges classical theory. Choice A is incorrect because the author accepts, rather than questions, the validity of the study. Choice B contradicts the text (classical theory did not anticipate this). Choice D is incorrect because the phenomenon is presented as a general psychological principle, not restricted to trivial items.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: "Jam" (reçel) kelimesini görünce sorunun sadece önemsiz ev alışverişleriyle sınırlı olduğunu (D) veya deneyin geçersizliğini sorguladığını (A) düşünmek.
1400+ Bandı Sırrı: Retorik sorular SAT'de bir "paradoks" veya "teori-gerçeklik çatışması" (empirical paradox) ortaya koymak için kullanılır. Klasik iktisat "daha çok seçenek daima iyidir" derken, soru "Öyleyse neden 24 reçel sunulunca satışlar %3'e düştü?" diyerek klasik teorinin yetersizliğini (explanatory inadequacy) gözler önüne serer.`,
  },

  // -------------------------------------------------------------------
  // 3. CROSS-TEXT CONNECTIONS (PAIRED PASSAGES) (Q15 - Q20)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q15',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Linguistic Relativity & Color Perception',
    passage: `Text 1
Proponents of strong linguistic determinism, such as Benjamin Lee Whorf, argued that an individual's native language erects an inescapable cognitive filter that dictates how sensory reality is categorized. When languages lack lexical distinctions between green and blue—treating both as shades of a single "grue" continuum—their speakers, Whorf maintained, perceive a fundamentally homogeneous chromatic realm, genuinely incapable of segregating hue boundaries recognized by speakers of languages with discrete terminologies.

Text 2
While psycholinguistic tests confirm that language facilitates rapid color sorting, neuroimaging demonstrates that category boundaries do not originate in speech. Cross-cultural fMRI scans of infants who have not yet acquired color vocabulary reveal robust, localized neural categorization in the pre-linguistic visual cortex: the infant brain exhibits automatic pupillary and occipital responses at 480 and 520 nanometers, the exact optical transitions between blue and green. Lexical acquisition merely sharpens the speed of conscious retrieval; it does not construct the sensory boundaries.`,
    question: `Based on the texts, how would the author of Text 2 most likely respond to the claim made by Whorf in Text 1 regarding speakers of "grue" languages?`,
    options: [
      { id: 'A', text: 'By acknowledging that adult speakers of grue languages lose the neurological capacity to perceive distinct wavelengths.' },
      { id: 'B', text: 'By arguing that while linguistic labels assist conscious processing, the underlying neurological distinction between hues remains biologically intact.' },
      { id: 'C', text: 'By agreeing that pre-linguistic infants perceive color continuously until vocabulary imposes arbitrary borders.' },
      { id: 'D', text: 'By asserting that optical transitions at 480 nanometers are entirely dependent on cultural transmission.' },
    ],
    correctAnswer: 'B',
    trapType: 'Black-and-White Opposition vs. Nuanced Neurological Qualification',
    explanation: `Choice B is the best answer. In Text 1, Whorf claims that lacking distinct words makes speakers "genuinely incapable of segregating hue boundaries." In Text 2, the author argues that while vocabulary helps speed up conscious sorting ("merely sharpens the speed of conscious retrieval"), pre-linguistic infant neuroimaging proves that the brain automatically recognizes these optical transitions independently of language ("category boundaries do not originate in speech"). Thus, Text 2's author would argue that sensory distinctions remain biologically intact despite the vocabulary. Choice A contradicts Text 2. Choice C is the direct opposite of Text 2's evidence about infants. Choice D contradicts Text 2's assertion that optical transitions are biological, not cultural.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: İki metin arasındaki ilişkiyi ya "tamamen katılıyor" ya da "yetişkinler nörolojik yeteneğini kaybeder" (A) gibi aşırı uçlara çekmek.
1400+ Bandı Sırrı: Çift metin (Paired Passages) sorularında 1400+ bandı nüansı yakalar: Text 2, Text 1'in "dil olmadan renk algılanamaz" iddiasını çürütürken dilin bilinçli hıza etkisini kabul eder ("merely sharpens the speed"), ancak biyolojik beyin altyapısının dilden bağımsız olarak renk sınırlarını zaten tanıdığını ("underlying neurological distinction remains intact") savunur.`,
  },
  {
    id: 'sat1400-q16',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Behavioral Finance & Market Efficiency',
    passage: `Text 1
The Efficient Market Hypothesis (EMH) asserts that financial asset prices reflect all available information instantaneously. Eugene Fama argued that because market participants act as competitive, rational utility-maximizers, arbitrageurs immediately eliminate mispricings. Any prolonged deviation from fundamental value is impossible, as collective computational rationality prevents systematic anomalies from persisting.

Text 2
Behavioral economists have documented that financial markets are repeatedly distorted by asymmetric loss aversion. Experimental trials demonstrate that investors feel the psychological pain of a capital loss twice as acutely as the pleasure of an equivalent gain. Consequently, when volatility spikes, fund managers routinely engage in panic liquidation—selling fundamentally sound assets at steep discounts—while holding onto deteriorating positions to postpone recognizing a psychological loss. These systemic cognitive biases generate persistent pricing bubbles and crashes that rational arbitrage fails to correct.`,
    question: `Which choice best describes how the author of Text 2 views the "arbitrageurs" described in Text 1?`,
    options: [
      { id: 'A', text: 'As corrupt actors whose collusive behavior intentionally destabilizes price discovery.' },
      { id: 'B', text: 'As entirely imaginary figures whose mathematical formulas have never been utilized in real markets.' },
      { id: 'C', text: 'As market forces that succeed in maintaining equilibrium during ordinary periods but fail during hyperinflation.' },
      { id: 'D', text: 'As theoretical entities whose capacity to eliminate mispricings is systematically impeded by pervasive cognitive biases.' },
    ],
    correctAnswer: 'D',
    trapType: 'Overly Cynical / Moralizing Distractor',
    explanation: `Choice D is the best answer. Text 1 presents arbitrageurs as agents whose "computational rationality" eliminates mispricings and maintains efficiency. Text 2 counters this by arguing that psychological factors like loss aversion cause investors to panic sell and hold losing assets, creating "systemic cognitive biases... that rational arbitrage fails to correct." Thus, Text 2 views arbitrageurs as unable to prevent persistent mispricings due to pervasive cognitive biases. Choice A moralizes them as corrupt, which is unsupported. Choice B is too extreme ("entirely imaginary"). Choice C brings in "hyperinflation," which is not mentioned in either text.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Text 2'nin eleştirisini ahlaki bir suçlama ("corrupt actors", A) veya hiperenflasyon gibi metinde olmayan kavramlar (C) ile karıştırmak.
1400+ Bandı Sırrı: Text 1'deki arbitrajcılar fiyat anomalilerini anında silen rasyonel aktörlerdir. Text 2 ise insanların kayıptan kaçınma (loss aversion) psikolojisi yüzünden panik yapıp mantıksız davrandığını ve rasyonel arbitrajın bu bilişsel önyargıları düzeltmekte yetersiz kaldığını ("systematically impeded by pervasive cognitive biases") belirtir.`,
  },
  {
    id: 'sat1400-q17',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Pleistocene Megafauna Extinction Debates',
    passage: `Text 1
For decades, the overkill hypothesis championed by Paul Martin posited that the arrival of Clovis hunters in North America approximately 13,000 years ago triggered a blitzkrieg of hunting that extinguished thirty-five genera of Pleistocene megafauna. Martin pointed to the synchronized chronological overlap between fluted projectile points and mammoth kill sites as definitive proof of anthropogenic causation.

Text 2
While Clovis hunting undeniably claimed megafaunal lives, attributing continental extinctions solely to human spears commits a post hoc fallacy. Recent sedimentary pollen profiles and sedimentological cores reveal that the Younger Dryas abrupt cooling event induced widespread biome fragmentation: spruce forests abruptly collapsed into arid steppe-tundra across North America, precipitously diminishing the carrying capacity for mega-herbivores. Without the destabilizing shock of rapid habitat destruction, hunting alone could not have decimated populations distributed across thousands of contiguous leagues.`,
    question: `Based on the texts, what would the author of Text 2 most likely say about the "chronological overlap" emphasized in Text 1?`,
    options: [
      { id: 'A', text: 'It reflects a coincidental concurrence between human arrival and an independent environmental catastrophe rather than solitary causation.' },
      { id: 'B', text: 'It is based on fabricated radiocarbon dates that have been conclusively discredited by ice-core stratigraphy.' },
      { id: 'C', text: 'It proves that Clovis hunters deliberately destroyed mega-herbivore habitats using controlled grass fires.' },
      { id: 'D', text: 'It demonstrates that megafaunal extinctions were completed centuries before Clovis hunters entered the continent.' },
    ],
    correctAnswer: 'A',
    trapType: 'Fabrication / Total Reversal Trap',
    explanation: `Choice A is the best answer. Text 1 uses the chronological overlap between Clovis fluted points and mammoth remains to claim definitive proof that humans caused the extinction. Text 2 responds that attributing extinctions solely to hunting is a "post hoc fallacy" because the Younger Dryas climate event occurred at the same time, causing catastrophic habitat collapse. Therefore, Text 2 views the chronological overlap as a coincidence of human arrival coinciding with an independent environmental shock, rather than solitary human causation. Choice B is incorrect because Text 2 does not claim the radiocarbon dates were fabricated. Choice C introduces "controlled grass fires," which are unmentioned. Choice D contradicts Text 2's acknowledgment that Clovis hunting did occur.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: Text 2'nin Martin'in verilerini "sahte/uydurma" (fabricated, B) ilan ettiğini sanmak.
1400+ Bandı Sırrı: Text 2 Martin'in tarihlerine sahte demez; sadece Martin'in "aynı anda oldu, o halde sebebi budur" şeklindeki mantık hatasını (post hoc fallacy) eleştirir. Çünkü tam o dönemde Younger Dryas iklim krizi de yaşanmıştır. Dolayısıyla bu zamansal çakışma tek başına insan avcılığını değil, bağımsız bir çevre felaketiyle eşzamanlılığı (coincidental concurrence) yansıtır.`,
  },
  {
    id: 'sat1400-q18',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Literary Modernism & Postcolonial Criticism',
    passage: `Text 1
In his landmark 1923 review of James Joyce's Ulysses, T.S. Eliot hailed the novel's "mythical method"—the deliberate manipulation of parallel motifs from Homeric epic—as an aesthetic triumph that brought order and vitality to the "immense panorama of futility and anarchy which is contemporary history." Eliot asserted that Joyce's strict structural scaffolding transcended provincial politics to attain universal human resonance.

Text 2
Later postcolonial critics, such as Seamus Deane, argued that celebrating Ulysses solely for universal aesthetic transcendence sanitizes the novel's biting political critique. By reading Joyce primarily through Eliot's formalist lens, critics systematically depoliticized the text, obscuring how Joyce's stylistic parodies specifically targeted the twin oppressors of early twentieth-century Ireland: British imperial hegemony and the Roman Catholic Church. Formalist universalism effectively erased the novel's subversive colonial reality.`,
    question: `Which choice best states the primary point of disagreement between the author of Text 1 and the author of Text 2?`,
    options: [
      { id: 'A', text: 'Whether James Joyce drew thematic parallels to Homer\'s Odyssey in Ulysses.' },
      { id: 'B', text: 'Whether British imperial hegemony was a legitimate target of satire in modern literature.' },
      { id: 'C', text: 'Whether the formal structure of Ulysses should be interpreted as an apolitical, universal myth or as an instrument of specific anti-colonial critique.' },
      { id: 'D', text: 'Whether modern novels are aesthetically superior to ancient Greek epics.' },
    ],
    correctAnswer: 'C',
    trapType: 'Narrow Factual Detail vs. Core Theoretical Conflict',
    explanation: `Choice C is the best answer. Text 1 (Eliot) views Joyce's mythical method as an aesthetic triumph that "transcended provincial politics to attain universal human resonance." Text 2 (Deane) explicitly criticizes this view, arguing that viewing the novel through Eliot's universalist lens depoliticizes it and obscures Joyce's pointed anti-colonial and anti-clerical critique of Irish oppression. Thus, the fundamental disagreement is whether Ulysses represents apolitical universal myth or an instrument of anti-colonial critique. Choice A is incorrect because both agree Joyce used Homeric parallels. Choice B is incorrect because Eliot does not discuss British imperialism. Choice D is irrelevant.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: İki metnin Homeros'a atıf yapılıp yapılmadığını (A) tartıştığını sanmak.
1400+ Bandı Sırrı: Text 1 (T.S. Eliot) Ulysses'i "tüm siyasetin üstünde, evrensel insani bir mit" (universal human resonance) olarak okur. Text 2 (Deane) ise Eliot'ın bu yaklaşımının romanın İrlanda'daki İngiliz sömürgeciliğine karşı başkaldırısını sansürlediğini ("erased subversive colonial reality") söyler. Temel zıtlık: Evrensel/apolitik estetik mi yoksa sömürgecilik karşıtı siyasi bir silah mı?`,
  },
  {
    id: 'sat1400-q19',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Exoplanetary Biosignatures & Atmospheric Chemistry',
    passage: `Text 1
When astronomers detected spectral signatures of phosphine ($PH_3$) in the temperate cloud decks of Venus, astrobiologists initially heralded the discovery as potential evidence of extraterrestrial microbial metabolism. On Earth, phosphine is generated exclusively by anaerobic microorganisms or industrial synthesis; thermodynamic calculations suggested that abiotic geochemical pathways on a rocky planet could not produce phosphine in abundances exceeding parts-per-billion.

Text 2
Subsequent photochemical simulations have undermined the necessity of biological interpretations for planetary phosphine. Planetary scientist Victoria Meadows demonstrated that deep mantle volcanism, driven by unmodeled basaltic magma dynamics, could vent phosphorus trioxide into the lower atmosphere, where high-temperature catalytic reactions with sulfuric acid rapidly synthesize phosphine abiotically. The presence of phosphine alone, therefore, cannot serve as a diagnostic biosignature in the absence of corroborated disequilibrium gases.`,
    question: `Based on Text 2, how would Victoria Meadows most likely interpret the "thermodynamic calculations" cited in Text 1?`,
    options: [
      { id: 'A', text: 'As definitive proof that Venusian clouds support anaerobic bacterial colonies.' },
      { id: 'B', text: 'As incomplete models that failed to account for specific high-temperature volcanic and catalytic reactions.' },
      { id: 'C', text: 'As fraudulent calculations intentionally designed to secure telescope observation time.' },
      { id: 'D', text: 'As accurate representations of Earth\'s atmosphere that can be applied unconditionally to all terrestrial planets.' },
    ],
    correctAnswer: 'B',
    trapType: 'Ad Hominem / Complete Confirmation Trap',
    explanation: `Choice B is the best answer. Text 1 cites thermodynamic calculations showing that abiotic pathways could not produce phosphine in high abundances. In Text 2, Meadows demonstrates that "deep mantle volcanism, driven by unmodeled basaltic magma dynamics" and high-temperature catalytic reactions can indeed produce phosphine abiotically. Therefore, Meadows would view the earlier thermodynamic calculations as incomplete because they failed to incorporate these specific unmodeled geological and chemical mechanisms. Choice A contradicts Text 2. Choice C is an unsupported personal attack. Choice D contradicts Text 2's emphasis on Venus-specific magma dynamics.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Text 2'deki bilim insanının Text 1'dekileri sahtekarlıkla suçladığını (C) ya da tam tersine biyolojik yaşamı doğruladığını (A) sanmak.
1400+ Bandı Sırrı: Text 1 "termik hesaplamalara göre cansız doğa bu kadar fosfin üretemez" der. Text 2'deki Meadows ise önceki modellerin hesaba katmadığı derin manto volkanizması ve sülfürik asit katalizini ("unmodeled basaltic magma dynamics") göstererek eski hesapların eksik (incomplete) olduğunu kanıtlar.`,
  },
  {
    id: 'sat1400-q20',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Algorithmic Curation & Information Ecosystems',
    passage: `Text 1
Pundits celebrating algorithmic content recommendation engines assert that personalization democratizes information consumption. By tracking granular user interactions, collaborative filtering systems expose readers to niche cultural artifacts and cross-disciplinary perspectives they would never encounter under the monopolistic gatekeeping of traditional editorial boards, fostering an unprecedented era of intellectual serendipity.

Text 2
While personalization algorithms promise serendipity, longitudinal audits of recommendation mechanics tell a different story. In order to maximize session duration and ad impressions, these systems optimize for user engagement—which computational psychologists have demonstrated correlates most strongly with moral outrage and confirmation bias. Instead of expanding intellectual horizons, the feedback loops funnel users into self-reinforcing epistemic silos, progressively narrowing the diversity of viewpoints presented to the consumer.`,
    question: `Which choice best describes how the author of Text 2 characterizes the "intellectual serendipity" envisioned in Text 1?`,
    options: [
      { id: 'A', text: 'As a tangible benefit that outweighs the minor civic inconvenience of online echo chambers.' },
      { id: 'B', text: 'As an inevitable byproduct of consumer demand for sensationalist news reporting.' },
      { id: 'C', text: 'As a phenomenon that occurs frequently in digital publishing but has ceased in print media.' },
      { id: 'D', text: 'As an idealized promise that is systematically contradicted by engagement-maximizing algorithms.' },
    ],
    correctAnswer: 'D',
    trapType: 'Net-Benefit Misconception vs. Systematic Contradiction',
    explanation: `Choice D is the best answer. Text 1 claims that algorithms create an "unprecedented era of intellectual serendipity." Text 2 directly counters this: "While personalization algorithms promise serendipity, longitudinal audits... tell a different story," explaining that algorithms actually optimize for engagement and outrage, creating "self-reinforcing epistemic silos" and "narrowing the diversity of viewpoints." Thus, Text 2 views serendipity as an idealized promise that is systematically contradicted by the actual engagement-driven reality. Choice A is the opposite of Text 2's negative stance. Choice B misidentifies the cause. Choice C is not discussed.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Metin 2'nin algoritmalara olumlu yaklaştığını ve faydalarının zararından çok olduğunu (A) sanmak.
1400+ Bandı Sırrı: Text 1'in övdüğü "intellectual serendipity" (entelektüel zenginlik/tesadüfi keşif), Text 2 tarafından "aslında etkileşim ve öfke avcılığı yapan algoritmaların çürüttüğü hayali bir vaat" (an idealized promise contradicted by engagement-maximizing algorithms) olarak yerle bir edilmektedir.`,
  },

  // -------------------------------------------------------------------
  // 4. CENTRAL IDEAS & DENSE 19TH-CENTURY LITERATURE (Q21 - Q26)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q21',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'Edith Wharton, The House of Mirth (1905)',
    passage: `Lily Bart was thoroughly aware that the high polish of the society in which she moved was maintained only by the exclusion of anything resembling genuine individual impulse. To preserve her precarious standing in that glittering circle, she had perpetually to calculate the market value of her gestures, subordinating every spontaneous inclination to the inexorable demands of a decorative career. Even her fastidiousness, which she had once prized as the hallmark of an uncorrupted spirit, now seemed to her merely an exquisite disability—a luxury that prevented her from seizing the vulgar opportunities by which less scrupulous competitors consolidated their fortunes.`,
    question: `Which choice best summarizes the central dilemma facing Lily Bart in the passage?`,
    options: [
      { id: 'A', text: 'Her refined aesthetic and moral sensitivity hinders her from taking the pragmatic, unsavory actions necessary to secure her social survival.' },
      { id: 'B', text: 'Her disdain for high society inspires her to abandon her elite lifestyle and pursue artistic fulfillment.' },
      { id: 'C', text: 'Her lack of social pedigree prevents her wealthy acquaintances from acknowledging her intellectual talents.' },
      { id: 'D', text: 'Her uncalculated, impulsive behavior has permanently alienated her wealthiest patrons.' },
    ],
    correctAnswer: 'A',
    trapType: 'Romantic Resolution / External Rejection Distractor',
    explanation: `Choice A is the best answer. The text describes Lily's recognition that remaining in high society requires suppressing spontaneous impulse and calculating every gesture. Crucially, her "fastidiousness" (moral/aesthetic refinement), which she used to value, is now an "exquisite disability" because it prevents her from seizing the "vulgar opportunities" that less scrupulous people use to get ahead. Thus, her refinement hinders her from securing her survival in a ruthless social market. Choice B is incorrect because she does not abandon society. Choice C is incorrect because lack of intellectual recognition is not the focus. Choice D is incorrect because she has calculated her gestures rather than acting impulsively.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: Lily'nin sosyeteyi terk edip sanata yöneldiğini (B) veya dikkatsizce davrandığını (D) zannetmek.
1400+ Bandı Sırrı: 19. yüzyıl klasik edebiyatında (Wharton, Austen, James) kahramanın iç çatışması çok derindir. Metindeki "exquisite disability" (zarif/kusursuz sakatlık) tezatı anahtardır: Lily Bart'ın ahlaki titizliği (fastidiousness), entrikacı rakipleri gibi çirkin fırsatları ("vulgar opportunities") yakalamasına engel olmakta ve hayatta kalmasını zorlaştırmaktadır.`,
  },
  {
    id: 'sat1400-q22',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'Frederick Douglass, "What to the Slave Is the Fourth of July?" (1852)',
    passage: `What, to the American slave, is your 4th of July? I answer; a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless; your denunciations of tyrants, brass-fronted impudence; your shouts of liberty and equality, hollow mockery; your prayers and hymns, your sermons and thanksgivings, with all your religious parade and solemnity, are, to Him, mere bombast, fraud, deception, impiety, and hypocrisy—a thin veil to cover up crimes which would disgrace a nation of savages.`,
    question: `Which choice best describes the central rhetorical thrust of Douglass's address?`,
    options: [
      { id: 'A', text: 'A technical legal argument proving that the Declaration of Independence violates constitutional precedent.' },
      { id: 'B', text: 'A plea to establish an alternative holiday that commemorates the achievements of enslaved abolitionists.' },
      { id: 'C', text: 'A searing indictment that exposes the profound moral contradiction between American democratic rhetoric and the reality of chattel slavery.' },
      { id: 'D', text: 'A moderate proposal encouraging northern churches to integrate their religious ceremonies.' },
    ],
    correctAnswer: 'C',
    trapType: 'Moderate/Procedural Toning Down Trap',
    explanation: `Choice C is the best answer. Douglass utilizes intense antithesis and blistering rhetoric ("sham," "unholy license," "swelling vanity," "hollow mockery," "bombast, fraud, deception, impiety, and hypocrisy") to expose the stark contradiction between America's celebrated ideals of liberty/equality and the grotesque ongoing reality of human enslavement. Choice A is incorrect because Douglass is making a moral and humanitarian indictment, not a technical legal pleading. Choices B and D drastically understate and distort Douglass's radical critique into polite reformism.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: Douglass'ın bu ünlü konuşmasını hafifletip "yeni bir tatil önerisi" (B) ya da "teknik anayasa maddesi tartışması" (A) sanmak.
1400+ Bandı Sırrı: Metindeki kelime yığınına dikkat edin: "sham", "hollow mockery", "hypocrisy", "thin veil to cover up crimes". Douglass, Amerikan bağımsızlık kutlamalarının köleler açısından ne denli derin bir ikiyüzlülük ve ahlaki çelişki (moral contradiction) barındırdığını tüm çıplaklığıyla haykırmaktadır.`,
  },
  {
    id: 'sat1400-q23',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'Virginia Woolf, To the Lighthouse (1927)',
    passage: `What is the meaning of life? That was all—a simple question; one that tended to close in on one with years. The great revelation had never come. The great revelation perhaps never did come. Instead there were little daily miracles, illuminations, matches struck unexpectedly in the dark; here was one. Mrs. Ramsay making of the moment something permanent (as in another sphere Lily herself tried to make of the moment something permanent)—this was of the nature of a revelation. In the midst of chaos there was shape; this eternal passing and flowing was struck into stability.`,
    question: `Which choice best captures the central philosophical insight expressed in the passage?`,
    options: [
      { id: 'A', text: 'Life\'s ultimate purpose can be deduced only through formal philosophical and scientific inquiry.' },
      { id: 'B', text: 'Transcendence is achieved not through an all-encompassing epiphany, but through fleeting instances of human connection and artistic order.' },
      { id: 'C', text: 'Human existence is an unmitigated succession of chaos that resists any temporary imposition of form.' },
      { id: 'D', text: 'The pursuit of artistic permanency is an illusion that distracts individuals from spiritual salvation.' },
    ],
    correctAnswer: 'B',
    trapType: 'Nihilistic Misreading vs. Epiphanic Nuance',
    explanation: `Choice B is the best answer. Woolf's narrator reflects that the "great revelation had never come... perhaps never did come." Instead, meaningful illumination comes through "little daily miracles... matches struck unexpectedly in the dark," such as Mrs. Ramsay bringing stability to chaos in the present moment. This asserts that meaning is found in transient moments of connection and form rather than a singular grand revelation. Choice A contradicts the text. Choice C is contradicted by "In the midst of chaos there was shape." Choice D is contradicted by the positive view of making the moment permanent.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Woolf'un "büyük bir aydınlanma asla gelmedi" sözünü okuyup her şeyin anlamsız bir kaos olduğunu (C) sanmak.
1400+ Bandı Sırrı: Woolf metninde modernizmin en büyük temasını işler: Hayatın anlamı devasa bir vahiyde ("great revelation") değil, karanlıkta çakılan küçük kibrit çöplerinde ("matches struck in the dark"), yani anlık insan ilişkilerinde ve kaosun içinde geçici de olsa bir düzen/biçim yakalamakta ("in the midst of chaos there was shape") yatar.`,
  },
  {
    id: 'sat1400-q24',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'Herman Melville, "Bartleby, the Scrivener" (1853)',
    passage: `I would have given him a generous sum if he would have voluntarily gone; but to have him forcibly cast out by the police—my heart revolted at the thought. And yet, to permit him to remain forever encamped in my office, doing nothing, eating nothing but ginger-nuts, defying every principle of commercial utility upon which my profession reposed, was utterly unendurable. What was he? A human derelict, an eccentric solitary, or an embodiment of passive resistance against which all the customary mechanisms of bourgeois coercion shattered in helpless exasperation?`,
    question: `Which choice best describes the narrator's conflicted attitude toward Bartleby?`,
    options: [
      { id: 'A', text: 'He despises Bartleby\'s physical appearance but respects his prodigious speed at legal transcription.' },
      { id: 'B', text: 'He fears that Bartleby is secretly plotting to steal the financial assets of the law practice.' },
      { id: 'C', text: 'He views Bartleby as a close intellectual peer whose advice he routinely seeks in legal arbitrations.' },
      { id: 'D', text: 'He is paralyzed between institutional exasperation at Bartleby\'s noncompliance and a moral aversion to treating him with cruelty.' },
    ],
    correctAnswer: 'D',
    trapType: 'Conspiracy / False Professional Respect Distractor',
    explanation: `Choice D is the best answer. The narrator's internal tension is explicit: on one hand, Bartleby's passive refusal to work defies "every principle of commercial utility" and is "utterly unendurable"; on the other hand, the narrator's "heart revolted at the thought" of having him forcibly cast out by police. Thus, the narrator is caught between professional exasperation and humanitarian pity/reluctance to be cruel. Choice A is incorrect because Bartleby is doing no transcription. Choice B is an invented conspiracy theory. Choice C contradicts the passage (Bartleby does not give legal advice).`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Bartleby'nin şirketi soymaya çalıştığını (B) veya anlatıcının danışmanı olduğunu (C) iddia eden seçeneklere takılmak.
1400+ Bandı Sırrı: Melville'in Katip Bartleby hikayesinde anlatıcı avukatın en büyük dramı iki kutup arasında sıkışmasıdır: Bir yanda ofis kurallarını ve ticari faydayı hiçe sayan bir katip ("defying every principle of commercial utility"), diğer yanda ise polise atıp acımasızca sokağa fırlatmaya elvermeyen vicdanı ("my heart revolted at the thought"). D seçeneği bu felç edici ikilemi kusursuz yansıtır.`,
  },
  {
    id: 'sat1400-q25',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'W.E.B. Du Bois, The Souls of Black Folk (1903)',
    passage: `It is a peculiar sensation, this double-consciousness, this sense of always looking at one's self through the eyes of others, of measuring one's soul by the tape of a world that looks on in amused contempt and pity. One ever feels his two-ness—an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder. The history of the American Negro is the history of this strife—this longing to attain self-conscious manhood, to merge his double self into a better and truer self.`,
    question: `According to the passage, the primary psychological burden of "double-consciousness" stems from:`,
    options: [
      { id: 'A', text: 'the perpetual necessity of viewing one\'s identity through the degrading lens of a hostile external society.' },
      { id: 'B', text: 'an insurmountable genetic incompatibility between African traditions and modern civilization.' },
      { id: 'C', text: 'the refusal of intellectuals to engage in constructive political dialogue with civic leaders.' },
      { id: 'D', text: 'an inability to master the economic skills required for competitive industrial employment.' },
    ],
    correctAnswer: 'A',
    trapType: 'Genetic / Economic Reductionist Trap',
    explanation: `Choice A is the best answer. Du Bois defines "double-consciousness" explicitly as "this sense of always looking at one's self through the eyes of others, of measuring one's soul by the tape of a world that looks on in amused contempt and pity." Thus, the psychological anguish arises directly from being forced to perceive oneself through the derogatory framework of an oppressive external society while striving to reconcile dual identities. Choice B contradicts Du Bois's sociological framework by introducing racist genetic fallacies. Choices C and D introduce irrelevant political and economic claims not found in the text.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: Metni biyolojik/genetik bir uyumsuzluk (B) veya basit bir ekonomik meslek bulamama sorunu (D) olarak basitleştirmek.
1400+ Bandı Sırrı: Du Bois'nın meşhur "çift bilinç" (double-consciousness) kuramı tamamen psikososyaldir. Bireyin kendi değerini, kendisine küçümseme ve acımayla bakan düşman bir toplumun gözlükleriyle ölçmek zorunda kalması ("looking at one's self through the eyes of others in amused contempt") A seçeneğinde tam olarak ifade edilmiştir.`,
  },
];
