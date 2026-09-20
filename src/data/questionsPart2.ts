import type { Question } from '../types/sat';

export const questionsPart2: Question[] = [
  // -------------------------------------------------------------------
  // 4 (Cont.) CENTRAL IDEAS (Q26)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q26',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    passageTitle: 'Thomas Hardy, The Return of the Native (1878)',
    passage: `Egdon Heath remained in the raw, somber integrity of its prehistoric state—an untamable expanse of gorse and peat that absorbed human suffering without imparting a solitary whisper of comfort. Civilization was to it an evanescent shadow, a momentary irritation upon a brow that had endured glacial moraines and bronze-age axes with impassive indifference. The inhabitants might fret, aspire, and tear at the fabric of their destinies; the heath merely existed, an ancient, monolithic bystander that quietly outlasted every petty drama played out across its furrowed ridges.`,
    question: `Which choice best captures how the passage characterizes the relationship between human beings and the natural landscape?`,
    options: [
      { id: 'A', text: 'Nature responds empathetically to human grief, offering solace during moments of existential crisis.' },
      { id: 'B', text: 'Human ingenuity has gradually conquered the rugged terrain through technological advances in agriculture.' },
      { id: 'C', text: 'The natural environment operates with monumental indifference, reducing human ambitions and tribulations to trivial, fleeting moments.' },
      { id: 'D', text: 'The landscape actively conspires against its inhabitants, deliberately sabotaging their economic prospects.' },
    ],
    correctAnswer: 'C',
    trapType: 'Anthropomorphic Malevolence vs. Pure Cosmic Indifference',
    explanation: `Choice C is the best answer. Hardy depicts Egdon Heath as an "impassive," "untamable expanse" that absorbs human suffering "without imparting a solitary whisper of comfort" and treats civilization as a "momentary irritation" while outlasting "every petty drama." The relationship is one of monumental indifference, where nature dwarfs and outlasts human striving. Choice A is contradicted by "without imparting a solitary whisper of comfort." Choice B is contradicted by "untamable expanse." Choice D anthropomorphizes nature as malicious, whereas the text portrays it as indifferent, not hostile.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: Doğanın insanlara bilerek düşmanlık yaptığını (D) ya da insanlara şefkatle teselli verdiğini (A) zannetmek.
1400+ Bandı Sırrı: Thomas Hardy ve 19. yüzyıl natüralist romanlarında doğa "kötü" veya "iyi" değildir; doğa insana karşı tamamen kayıtsız ve devasadır ("monumental indifference"). İnsanların tüm acıları, hevesleri ve dramları bu kadim bozkırın karşısında geçici, ehemmiyetsiz birer gölgeden ("evanescent shadow", "petty drama") ibarettir.`,
  },

  // -------------------------------------------------------------------
  // 5. COMMAND OF EVIDENCE: TEXTUAL / HYPOTHESIS TESTING (Q27 - Q34)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q27',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Mycorrhizal Fungal Networks & Plant Communication',
    passage: `Plant ecologist Suzanne Simard hypothesized that common mycorrhizal fungal networks (CMNs) interconnecting mature Douglas firs and saplings act as an active reciprocal trading pipeline, actively shunting carbon, nitrogen, and defensive signaling molecules from canopy-dominant "mother trees" to shaded, carbon-stressed understory saplings. Skeptics contended that the detected isotope tracers did not demonstrate targeted altruistic nurturing, but rather represented uncoordinated, passive mass-diffusion along simple concentration gradients through the moist soil matrix.`,
    question: `Which finding, if true, would most directly support Simard's hypothesis while refuting the skeptics' passive-diffusion explanation?`,
    options: [
      { id: 'A', text: 'Carbon isotopes applied to a mature Douglas fir are detected in equal concentrations in both adjacent non-mycorrhizal mosses and mycorrhizal saplings.' },
      { id: 'B', text: 'Shaded saplings physically severed from fungal hyphae fail to receive carbon tracers even when adjacent soil water is saturated with dissolved labeled isotopes, whereas hyphae-linked saplings receive tracers at rates three times greater than the physical diffusion constant.' },
      { id: 'C', text: 'Mature Douglas firs lose significant foliar biomass during summer droughts regardless of whether fungal fruiting bodies are present.' },
      { id: 'D', text: 'Mycorrhizal fungi extract sugars from saplings without transferring any measurable mineral phosphorus back to the host plant.' },
    ],
    correctAnswer: 'B',
    trapType: 'General Correlation vs. Mechanism-Specific Disproof',
    explanation: `Choice B is the best answer. Simard's hypothesis requires that the transfer depends specifically on the fungal network (CMN) and exceeds passive diffusion. Choice B provides dual refutation of the skeptics: (1) saplings severed from hyphae fail to receive carbon even in saturated soil water (disproving passive soil diffusion), and (2) hyphae-linked saplings receive carbon at rates three times faster than passive diffusion allows (proving active hyphal conduit). Choice A supports the skeptics (passive diffusion to non-mycorrhizal moss). Choices C and D are irrelevant or undermine mutualism.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: İçi dolu görünen ama aslında hipotezi çürüten ya da ilgisiz genel orman verileri içeren seçeneklere (A, C, D) kanmak.
1400+ Bandı Sırrı: "Command of Evidence" sorularında şüphecilerin argümanını ("toprakta pasif difüzyon") çürütmek için, hif bağı koparılan ağacın doymuş toprakta bile izotop alamadığını ve hif bağı olanların pasif difüzyondan 3 kat hızlı aldığını gösteren B seçeneği, mekanizmayı tek seçenek olarak kanıtlar.`,
  },
  {
    id: 'sat1400-q28',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Bilingual Cognitive Advantage Hypothesis',
    passage: `Cognitive psychologist Ellen Bialystok has long argued for the existence of a "bilingual cognitive advantage," proposing that the lifelong cognitive demand of managing two competing linguistic systems and suppressing irrelevant lexical interference trains the brain's executive control center. Bialystok claims this lifelong mental gymnastics confers enhanced cognitive flexibility, inhibitory control, and conflict resolution across non-verbal spatial and mathematical tasks.`,
    question: `Which finding, if true, would most directly weaken Bialystok's claim regarding the bilingual executive advantage?`,
    options: [
      { id: 'A', text: 'Bilingual adults score higher on non-verbal Stroop interference tests than monolingual peers matched for socioeconomic status.' },
      { id: 'B', text: 'Neuroimaging reveals greater gray matter density in the anterior cingulate cortex of trilingual translators compared to monolinguals.' },
      { id: 'C', text: 'Elderly bilingual individuals exhibit delayed onset of clinical Alzheimer\'s symptoms compared to monolinguals with equivalent neuropathology.' },
      { id: 'D', text: 'In large-scale, pre-registered replications controlling strictly for parental socioeconomic status, immigrant background, and baseline education, bilingual and monolingual cohorts exhibit identical response latencies on non-verbal executive control tasks.' },
    ],
    correctAnswer: 'D',
    trapType: 'Weakening vs. Strengthening Polarization',
    explanation: `Choice D is the best answer. Bialystok's claim is that bilingualism itself trains and improves non-verbal executive control. If large-scale studies that rigorously control for confounding variables (socioeconomic status, immigrant background, education) show that bilinguals and monolinguals have "identical response latencies" (meaning no performance difference whatsoever), this directly weakens and disconfirms the existence of the purported cognitive advantage. Choices A, B, and C all strengthen Bialystok's hypothesis by showing cognitive or neural benefits.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Soru kökündeki "most directly WEAKEN" (en doğrudan zayıflatır/çürütür) ifadesini kaçırıp tezi destekleyen A, B veya C'yi işaretlemek.
1400+ Bandı Sırrı: Tezi çürütmek için "bilingual olmanın hiçbir fark yaratmadığını" göstermek gerekir. D seçeneğinde sosyoekonomik şartlar ve eğitim eşitlendiğinde iki grubun non-verbal yönetici işlevlerde tamamen özdeş (identical) tepki süreleri sergilediği bildirilerek avantaj tezi doğrudan çürütülmektedir.`,
  },
  {
    id: 'sat1400-q29',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Mesoamerican Lithic Technology & Obsidian Microwear',
    passage: `Archaeologists excavating a Classic Maya civic-ceremonial center at Copan recovered hundreds of prismatic green obsidian blades from an elite burial precinct. Traditional interpretations held that because green obsidian was an imported prestige trade good sourced from over 500 leagues away in Pachuca, these delicate blades functioned exclusively as ceremonial ritual weapons for royal sacrificial bloodletting rather than mundane utilitarian implements. Dr. Alicia Ortiz sought to challenge this prestige-ritual orthodoxy through high-magnification scanning electron microscopy.`,
    question: `Which finding from Ortiz's microwear analysis, if true, would most directly support her revisionist challenge?`,
    options: [
      { id: 'A', text: 'The blade margins exhibit micro-striations, polishes, and silica phytolith residues characteristic of intensive, repetitive cutting of fibrous domestic agave plants rather than bone or soft flesh.' },
      { id: 'B', text: 'Trace element spectrometry confirms that ninety-eight percent of the obsidian was indeed geochemically sourced from the Pachuca quarry.' },
      { id: 'C', text: 'The blades were deposited alongside polished jade beads and polychrome ceramic vessels in a royal sarcophagus.' },
      { id: 'D', text: 'Historical Spanish chronicles from the sixteenth century describe Aztec priests utilizing obsidian lancets in religious temple ceremonies.' },
    ],
    correctAnswer: 'A',
    trapType: 'Confirming Provenance vs. Proving Utilitarian Use',
    explanation: `Choice A is the best answer. Traditional orthodoxy claimed the blades were used "exclusively as ceremonial ritual weapons... rather than mundane utilitarian implements." Ortiz seeks to challenge this by showing utilitarian, domestic use. Finding striations, polish, and phytolith residues from cutting "fibrous domestic agave plants" proves that the blades were actually used for routine agricultural/domestic work, directly supporting her revisionist argument. Choice B merely confirms the trade origin (irrelevant to function). Choice C supports the elite/ritual setting. Choice D cites late Spanish accounts of ritual bloodletting, which supports the traditional view.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: B seçeneğindeki "madenin Pachuca'dan geldiğinin doğrulanması"nı veya C'deki kraliyet mezarını görünce işaretlemek.
1400+ Bandı Sırrı: Ortiz'in meydan okuduğu tez şudur: "Bu bıçaklar sadece dini ayin ve kurban içindir, asla gündelik işte kullanılmamıştır." Bu tezi çürütmek için bıçakların mikroskop altında sıradan evsel/tarımsal lif kesiminde ("cutting fibrous domestic agave plants") aşındığını gösteren mikroyıpranma analizi (A) doğrudan ve kesin kanıttır.`,
  },
  {
    id: 'sat1400-q30',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Astrophysical Progenitors of Fast Radio Bursts',
    passage: `Fast Radio Bursts (FRBs)—millisecond-duration extragalactic pulses of coherent radio emission—have perplexed astrophysicists since their discovery. Two competing progenitor models have been posited: the "cataclysmic merger" hypothesis, which attributes FRBs to the terminal coalescence of binary neutron stars (an inherently non-repeating event), and the "magnetar flare" hypothesis, which attributes bursts to relativistic Alfvén wave shocks driven by crustal fractures in isolated, highly magnetized young neutron stars (which should generate recurring bursts).`,
    question: `Which finding from deep radio telescope interferometry, if true, would most decisively support the magnetar flare hypothesis over the cataclysmic merger hypothesis?`,
    options: [
      { id: 'A', text: 'An individual FRB is detected originating from an elliptical galaxy with virtually zero ongoing star formation.' },
      { id: 'B', text: 'A single, high-energy FRB is observed accompanied by an intense burst of gravitational waves and a short gamma-ray burst.' },
      { id: 'C', text: 'A localized extragalactic source is observed emitting dozens of recurrent radio bursts exhibiting identical dispersion measures and polarimetric angles over a three-year observation baseline.' },
      { id: 'D', text: 'Radio pulses from an unlocalized FRB suffer interstellar dispersion indicative of traveling through dense cosmological plasma.' },
    ],
    correctAnswer: 'C',
    trapType: 'Cataclysmic Merger Trap (Gravitational Waves)',
    explanation: `Choice C is the best answer. The text sets up a crucial operational distinction between the two models: cataclysmic mergers are "terminal coalescence" events that are "inherently non-repeating," whereas magnetar flares occur in isolated young neutron stars that "generate recurring bursts." Finding a localized source that emits "dozens of recurrent radio bursts... over a three-year baseline" decisively rules out a one-time destructive merger and confirms a repeating progenitor like a magnetar. Choice B describes the signature of a binary merger (gravitational waves + gamma-ray burst), supporting the rival model. Choices A and D do not discriminate between repeating and non-repeating progenitors.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: B seçeneğindeki "gravitational waves" (yerçekimsel dalgalar) havalı terimine kanıp bunun birleşme (merger) modeli olduğunu fark edememek.
1400+ Bandı Sırrı: Paragraftaki anahtar mantık ipucu: "cataclysmic merger" = tek seferlik, kendini yok eden olay (non-repeating); "magnetar flare" = tekrar tekrar patlayabilen sistem (recurring bursts). C seçeneğindeki "dozens of recurrent radio bursts over a three-year baseline" (3 yıl boyunca onlarca kez tekrarlayan patlamalar) birleşme teorisini tamamen imkansız kılar ve magnetar modelini kesinleştirir.`,
  },
  {
    id: 'sat1400-q31',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Behavioral Ecology & Avian Foraging Vigilance',
    passage: `In behavioral ecology, the "dilution effect" hypothesis posits that individual animals in larger foraging groups experience reduced individual predation risk because the probability of any single member being targeted decreases proportionally with group size. Evolutionary biologist Carl Schradin tested whether this reduction in risk allows individual starlings (*Sturnus vulgaris*) in larger flocks to allocate significantly less time to scanning for raptors and substantially more time to uninterrupted ground foraging.`,
    question: `Which finding, if true, would most directly undermine the application of the dilution effect to starling foraging behavior?`,
    options: [
      { id: 'A', text: 'Starlings in flocks of forty spend twenty percent less time head-up scanning than starlings foraging in isolated pairs.' },
      { id: 'B', text: 'As starling flock size expands beyond twenty individuals, aggressive intraspecific competition for seeds forces peripheral birds to scan their neighbors twice as frequently as isolated foragers scan the sky, resulting in a net decrease in feeding time.' },
      { id: 'C', text: 'Peregrine falcons attack starling flocks containing over one hundred birds more frequently than they attack small coveys of ten birds.' },
      { id: 'D', text: 'Starlings foraging in open agricultural fields display higher average vigilance than starlings foraging in dense brush.' },
    ],
    correctAnswer: 'B',
    trapType: 'Predator Attack Frequency vs. Individual Vigilance / Feeding Trade-Off',
    explanation: `Choice B is the best answer. The dilution effect hypothesis predicts that larger flocks free up time from scanning, thereby increasing uninterrupted feeding time. Choice B demonstrates that in flocks over twenty, competition for seeds forces birds to scan neighbors constantly, causing a "net decrease in feeding time." This directly undermines the hypothesized benefit of reduced vigilance and increased feeding. Choice A directly supports the hypothesis. Choice C discusses predator encounter rates, which does not address whether individual starlings reduce their vigilance or gain feeding time. Choice D is about habitat cover, not flock size.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: C seçeneğine atlayıp şahinin büyük sürüye daha çok saldırdığını görünce hipotezin çöktüğünü sanmak (oysa seyreltme etkisi birey başına düşen riskle ilgilidir).
1400+ Bandı Sırrı: Hipotezin temel iddiası: "Büyük sürüde birey başına risk düşer, kuşlar etrafı gözetlemeyi azaltır ve YEM YEME SÜRESİ ARTAR." B seçeneğinde sürü büyüdükçe yem kavgasının kuşu daha çok tetikte tuttuğu ve net beslenme süresinin azaldığı gösterilerek hipotezin öngörüsü tam tersine çevrilmektedir.`,
  },
  {
    id: 'sat1400-q32',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Coral Symbiosis & Thermal Bleaching Resilience',
    passage: `Marine biologists studying reef degradation under thermal marine heatwaves have suggested a bioengineering intervention: inoculating juvenile staghorn corals (*Acropora cervicornis*) with heat-tolerant clade D endosymbionts (*Durusdinium trenchii*) to mitigate mass coral bleaching. Proponents argue that replacing heat-sensitive clade C algae with clade D will permanently elevate the thermal threshold of the holobiont, protecting critical barrier reefs from rising ocean temperatures.`,
    question: `Which finding, if true, would expose the most critical limitation in the proposed clade D inoculation strategy?`,
    options: [
      { id: 'A', text: 'Clade D endosymbionts survive in laboratory photobioreactors maintained at 34°C for over six weeks.' },
      { id: 'B', text: 'Wild staghorn corals naturally uptake clade D symbionts following severe summer bleaching events.' },
      { id: 'C', text: 'Clade C symbionts produce volatile organic sulfur compounds that contribute to regional cloud nucleation.' },
      { id: 'D', text: 'Corals dominated by clade D symbionts exhibit a forty-five percent reduction in calcification rates and reproductive fecundity during non-heatwave years, leaving the engineered reefs structurally vulnerable to storm surge erosion.' },
    ],
    correctAnswer: 'D',
    trapType: 'Irrelevant Environmental Trivia vs. Fundamental Trade-Off Cost',
    explanation: `Choice D is the best answer. The proponents claim that clade D inoculation will permanently protect and sustain barrier reefs. Choice D reveals a devastating trade-off: under normal (non-heatwave) conditions, clade D symbionts drastically reduce the coral's calcification (skeleton building) and reproduction by 45%, leaving the reefs fragile and unable to resist storm damage. This exposes a severe systemic limitation in the proposed remediation. Choices A and B support the feasibility of the proposal. Choice C introduces cloud nucleation, which is an external side effect that does not address the coral's structural survival.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: C seçeneğindeki "bulut oluşumu" gibi dikkat dağıtıcı bir detaya takılmak.
1400+ Bandı Sırrı: Bir mühendislik/biyoloji çözümünün "kritik zaafını/sınırını" (critical limitation) bulmak için trade-off (ödünleşim) aranmalıdır. D seçeneği, sıcaklığa dayanıklı Clade D alginin normal yıllarda mercanın kireçlenme ve iskelet yapısını %45 düşürdüğünü ve fırtınada resifi yıkılmaya terk ettiğini göstererek çözümün ölümcül kusurunu ortaya koyar.`,
  },
  {
    id: 'sat1400-q33',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Art Historiography & Renaissance Attribution',
    passage: `For over two centuries, the unsigned oil portrait *Portrait of an Unknown Noblewoman* was attributed exclusively to the Venetian master Titian. Art historian Elena Vane, however, posited that the canvas was an unacknowledged collaboration: while Titian designed the overall composition and painted the luminous facial features, the stiff, repetitive geometric embroidery on the sitter's velvet bodice was executed by his apprentice, Girolamo Dente. Vane initiated cross-sectional pigment spectrometry and infrared reflectography to evaluate her workshop collaboration hypothesis.`,
    question: `Which finding from the technical imaging and chemical analysis would most strongly support Vane's collaborative hypothesis?`,
    options: [
      { id: 'A', text: 'Infrared reflectography reveals a spontaneous, sweeping carbon underdrawing across the face executed in Titian\'s characteristic hand, overlaid on the bodice by an entirely distinct, mechanical pouncing pattern containing cheap, localized iron-gall ink absent from the head.' },
      { id: 'B', text: 'The linen canvas weave corresponds exactly to textile bolts woven in Venice between 1540 and 1550.' },
      { id: 'C', text: 'The sitter\'s pendant matches jewelry described in the personal estate inventories of the Duchess of Urbino.' },
      { id: 'D', text: 'Titian\'s signature is discovered buried beneath eighteenth-century varnish in the bottom right corner.' },
    ],
    correctAnswer: 'A',
    trapType: 'Authenticity vs. Dual-Artist Division of Labor',
    explanation: `Choice A is the best answer. Vane's hypothesis specifically claims a division of labor: Titian painted the face, while an apprentice (Dente) painted the bodice. Choice A directly substantiates this exact division by showing two completely distinct hands: Titian's characteristic freehand underdrawing in the face, contrasted with mechanical pouncing and different, cheaper ink on the bodice. Choice B only dates the canvas. Choice C only identifies the subject. Choice D would suggest Titian alone painted the work, contradicting the collaboration hypothesis.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: D seçeneğindeki "Titian'ın imzasının bulunması"na atlamak (oysa imza eserin tek bir sanatçıya ait olduğunu ima edip işbirliği tezini zayıflatabilir!).
1400+ Bandı Sırrı: Vane'in tezi bir "işbölümü" (collaboration) iddiasıdır: Yüzü Titian yaptı, elbiseyi çırağı Dente yaptı. A seçeneği tam da bunu kanıtlar: Yüzde Titian'ın serbest fırça taslağı varken, elbisede tamamen farklı mekanik bir şablon ve ucuz farklı bir mürekkep bulunmuştur.`,
  },
  {
    id: 'sat1400-q34',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Soil Biogeochemistry & Biochar Amendment',
    passage: `Agricultural scientists have promoted pyrolyzed biomass (biochar) as a dual-action intervention: applying biochar to temperate agricultural topsoil supposedly increases soil organic carbon storage while concurrently enhancing crop yields by improving cation exchange capacity. Agronomist Farida Al-Mansoor argued that this optimistic assessment overlooks soil microbial dynamics: in low-nitrogen soils, the highly porous carbon lattice of fresh biochar stimulates microbial immobilization of existing mineralized nitrate, triggering acute nitrogen starvation in young root systems.`,
    question: `Which finding, if true, would most directly support Al-Mansoor's critique?`,
    options: [
      { id: 'A', text: 'Biochar applications in tropical oxisols reduce nutrient leaching during heavy monsoon rainfall.' },
      { id: 'B', text: 'Crop yields in biochar-amended fields increase by thirty percent when supplemented with triple the standard application of synthetic nitrogen fertilizer.' },
      { id: 'C', text: 'In unfertilized temperate loam, biochar additions trigger a fourfold surge in microbial biomass accompanied by a ninety percent decline in plant-available nitrate, resulting in severe seedling chlorosis and stunted growth.' },
      { id: 'D', text: 'Biochar particles remain chemically intact in topsoil profiles for over five hundred years without degrading into carbon dioxide.' },
    ],
    correctAnswer: 'C',
    trapType: 'Fertilizer Override vs. Direct Demonstration of Nitrogen Starvation',
    explanation: `Choice C is the best answer. Al-Mansoor's critique asserts that biochar stimulates microbial immobilization of nitrate in low-nitrogen soils, causing "acute nitrogen starvation" and stunting plants. Choice C provides the exact empirical confirmation: adding biochar to unfertilized soil caused a 4-fold surge in microbes, a 90% decline in plant-available nitrate, and severe seedling chlorosis (yellowing from nitrogen starvation) and stunted growth. Choice A is positive and deals with tropical soils. Choice B relies on adding massive amounts of synthetic nitrogen to mask the effect. Choice D only addresses carbon longevity.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: B seçeneğindeki "üç kat gübre eklenince ürün arttı" sonucunu genel bir başarı sanmak (oysa bu gübre takviyesidir, biochar'ın kendisinin yarattığı açlığı maskeler).
1400+ Bandı Sırrı: Al-Mansoor'un eleştirisi tam olarak şudur: Biochar mikropları aşırı çoğaltır, mikroplar topraktaki azotu emer ve bitki azotsuzluktan aç kalır. C seçeneği, biochar eklenen gübresiz toprakta mikropların 4 kat patladığını, bitkiye yarayışlı azotun %90 düştüğünü ve fidelerin sararıp bodur kaldığını (chlorosis & stunted growth) birebir doğrulayarak eleştiriyi kesin kanıtlar.`,
  },

  // -------------------------------------------------------------------
  // 6. COMMAND OF EVIDENCE: QUANTITATIVE (DATA TABLES) (Q35 - Q40)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q35',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Photosynthetic Acclimation to Atmospheric Carbon Dioxide',
    passage: `Botanists evaluated the light-saturated net photosynthetic assimilation rate ($A_{net}$, measured in $\\mu mol\\; CO_2\\cdot m^{-2}\\cdot s^{-1}$) of four temperate deciduous tree saplings grown under either Ambient $CO_2$ ($415\\; ppm$) or Elevated $CO_2$ ($750\\; ppm$) under both Well-Watered and Moderate Drought conditions.

Photosynthetic Assimilation Rates ($A_{net}$):
• *Quercus rubra* (Red Oak): Ambient/Watered = 14.2; Elevated/Watered = 19.8; Ambient/Drought = 8.1; Elevated/Drought = 12.4
• *Acer saccharum* (Sugar Maple): Ambient/Watered = 11.0; Elevated/Watered = 13.5; Ambient/Drought = 5.2; Elevated/Drought = 6.1
• *Betula papyrifera* (Paper Birch): Ambient/Watered = 16.5; Elevated/Watered = 23.2; Ambient/Drought = 7.4; Elevated/Drought = 13.8
• *Fagus grandifolia* (American Beech): Ambient/Watered = 9.8; Elevated/Watered = 11.2; Ambient/Drought = 4.5; Elevated/Drought = 4.9

Plant physiologist Dr. Kieran Vance noted that while all four species displayed increased carbon assimilation under elevated $CO_2$ regardless of water availability, the buffering effect of elevated $CO_2$ during drought was strikingly variable among taxa.`,
    question: `Which choice most accurately uses data from the text and table to support Dr. Vance's observation regarding the drought-buffering effect of elevated $CO_2$?`,
    options: [
      { id: 'A', text: 'Under drought conditions, *Fagus grandifolia* exhibited a higher absolute increase in $A_{net}$ when elevated with $CO_2$ than did *Betula papyrifera*.' },
      { id: 'B', text: 'Under drought conditions, elevated $CO_2$ increased $A_{net}$ in *Betula papyrifera* by 6.4 units (an 86% enhancement), whereas in *Fagus grandifolia* it increased $A_{net}$ by merely 0.4 units (less than a 9% enhancement).' },
      { id: 'C', text: 'Under well-watered conditions, *Acer saccharum* achieved a higher assimilation rate than *Quercus rubra* under both ambient and elevated $CO_2$.' },
      { id: 'D', text: 'Drought stress completely eliminated the photosynthetic gains of elevated $CO_2$ across all four tested tree species.' },
    ],
    correctAnswer: 'B',
    trapType: 'Misreading Numerical Differences vs. Percent Change',
    explanation: `Choice B is the best answer. Looking at drought conditions (Ambient/Drought vs. Elevated/Drought):
- *Betula papyrifera*: from 7.4 to 13.8 = an increase of 6.4 units (13.8 - 7.4 = 6.4; 6.4 / 7.4 ≈ 86.5%).
- *Fagus grandifolia*: from 4.5 to 4.9 = an increase of only 0.4 units (0.4 / 4.5 ≈ 8.9%).
This stark contrast directly supports Vance's claim that the buffering effect of elevated $CO_2$ during drought was "strikingly variable among taxa." Choice A is factually inverted (Beech increased by 0.4, Birch by 6.4). Choice C is factually false (Red oak was 14.2/19.8, higher than Sugar maple's 11.0/13.5). Choice D is false because elevated $CO_2$ still provided gains under drought for all species.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Tablo sorularında satır/sütunları karıştırıp A'daki ters verilmiş kıyaslamaya düşmek veya D gibi abartılı ifadelere ("completely eliminated") kanmak.
1400+ Bandı Sırrı: Sayısal veriyi adım adım doğrula: Kuraklıkta (Drought):
- Betula papyrifera (Huş ağacı): 7.4'ten 13.8'e çıkmış (+6.4 artış, yaklaşık %86).
- Fagus grandifolia (Kayın): 4.5'ten 4.9'a çıkmış (+0.4 artış, %9'dan az).
Bu devasa uçurum, Vance'in "türler arasında kuraklık tamponlama etkisinin çarpıcı biçimde değişken olduğu" tespitini rakamsal olarak %100 kanıtlar.`,
  },
  {
    id: 'sat1400-q36',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Urban Heat Island Mitigation & Tree Canopy Density',
    passage: `Urban climatologists mapped surface thermal anomalies (mean land surface temperature deviation from rural baselines, $\\Delta T$ in °C) against percent tree canopy cover across six municipal planning sectors during a summer heatwave:

Municipal Sector Metrics:
• Sector A (Commercial Core): Canopy Cover = 6%; $\\Delta T$ = +6.8°C; Impervious Surface = 88%
• Sector B (Industrial Park): Canopy Cover = 4%; $\\Delta T$ = +7.4°C; Impervious Surface = 92%
• Sector C (Mid-Density Residential): Canopy Cover = 18%; $\\Delta T$ = +4.1°C; Impervious Surface = 62%
• Sector D (Historic Suburb): Canopy Cover = 38%; $\\Delta T$ = +1.2°C; Impervious Surface = 35%
• Sector E (Urban Park Periphery): Canopy Cover = 52%; $\\Delta T$ = -0.4°C; Impervious Surface = 18%
• Sector F (High-Density Residential): Canopy Cover = 12%; $\\Delta T$ = +5.3°C; Impervious Surface = 75%

The research team concluded that the relationship between canopy cover and urban thermal attenuation exhibits a non-linear threshold effect rather than a simple uniform decrease.`,
    question: `Which statement is most directly supported by the data in the sector metrics table?`,
    options: [
      { id: 'A', text: 'Increasing canopy cover from 6% to 18% (a 12-percentage-point increase) was associated with a 2.7°C reduction in thermal anomaly, while increasing canopy cover from 38% to 52% (a 14-percentage-point increase) was associated with a 1.6°C reduction.' },
      { id: 'B', text: 'Sector B had the highest percentage of tree canopy cover and the lowest surface thermal anomaly.' },
      { id: 'C', text: 'Impervious surface percentage has no measurable correlation with surface thermal anomalies across the six sectors.' },
      { id: 'D', text: 'Every 10% increase in canopy cover produces an identical 1.5°C decrease in temperature across all sectors.' },
    ],
    correctAnswer: 'A',
    trapType: 'Direct Inversion / Linear Fallacy Trap',
    explanation: `Choice A is the best answer. Let's calculate from the table:
- Moving from Sector A (6% canopy, +6.8°C) to Sector C (18% canopy, +4.1°C): canopy increases by 12 points, and $\\Delta T$ drops by 2.7°C (6.8 - 4.1 = 2.7°C).
- Moving from Sector D (38% canopy, +1.2°C) to Sector E (52% canopy, -0.4°C): canopy increases by 14 points, and $\\Delta T$ drops by 1.6°C (1.2 - (-0.4) = 1.6°C).
This statement is completely accurate and reflects the non-linear returns on canopy cover. Choice B is factually inverted (Sector B had the lowest canopy and highest anomaly). Choice C is contradicted by the strong alignment between impervious surfaces and high anomalies. Choice D claims a linear decrease, which contradicts the non-linear data.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: D seçeneğindeki "her %10 artış 1.5 derece düşürür" gibi ezbere doğrusal (linear) bir iddiaya atlamak.
1400+ Bandı Sırrı: Tablodan basit çıkarma işlemi yapalım:
- Sektör A'dan (6%) Sektör C'ye (18%) çıkarken: 12 puanlık ağaç artışı sıcaklık farkını 6.8'den 4.1'e düşürmüş (2.7°C düşüş).
- Sektör D'den (38%) Sektör E'ye (52%) çıkarken: 14 puanlık ağaç artışı sıcaklık farkını 1.2'den -0.4'e düşürmüş (1.6°C düşüş).
A seçeneğindeki sayılar tablodaki verilerle %100 kusursuz örtüşür.`,
  },
  {
    id: 'sat1400-q37',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Soil Enzymatic Kinetics Under Conservation Tillage',
    passage: `Soil agronomists measured the activity of two hydrolytic enzymes—$\beta$-glucosidase (carbon cycling, in $nmol\\cdot g^{-1}\\cdot h^{-1}$) and phosphomonoesterase (phosphorus mineralization, in $nmol\\cdot g^{-1}\\cdot h^{-1}$)—at two soil depth intervals ($0-5\\; cm$ and $10-20\\; cm$) under Conventional Tillage (CT) versus No-Till (NT) management after 15 consecutive cultivation years:

Enzymatic Activity Survey:
• $\beta$-Glucosidase ($0-5\\; cm$): CT = 142; NT = 385
• $\beta$-Glucosidase ($10-20\\; cm$): CT = 118; NT = 105
• Phosphomonoesterase ($0-5\\; cm$): CT = 210; NT = 490
• Phosphomonoesterase ($10-20\\; cm$): CT = 175; NT = 162

Agronomist Dr. Samuel Oduro contended that while No-Till substantially stimulates microbial biochemical catalysis in the immediate surface stratum, this enhancement is heavily stratified and does not penetrate into deeper rooting zones.`,
    question: `Which choice most effectively uses data from the table to substantiate Dr. Oduro's claim regarding vertical stratification?`,
    options: [
      { id: 'A', text: 'Under Conventional Tillage, enzyme activity at $10-20\\; cm$ was higher than at $0-5\\; cm$ for both measured enzymes.' },
      { id: 'B', text: 'At $0-5\\; cm$, Conventional Tillage yielded higher $\beta$-glucosidase activity than did No-Till management.' },
      { id: 'C', text: 'No-Till management resulted in higher enzyme activities than Conventional Tillage across both depth horizons for both enzymes.' },
      { id: 'D', text: 'Under No-Till, surface ($0-5\\; cm$) activities for $\beta$-glucosidase and phosphomonoesterase were over 2.7 times and 2.3 times their respective CT levels, but at $10-20\\; cm$, NT activities fell slightly below CT levels for both enzymes.' },
    ],
    correctAnswer: 'D',
    trapType: 'Depth Generalization Error vs. Precise Horizon Contrast',
    explanation: `Choice D is the best answer. Dr. Oduro's claim has two parts: (1) No-Till greatly stimulates enzyme activity at the surface (0-5 cm), but (2) this effect is stratified and does not extend deeper (10-20 cm).
Let's check the numbers in Choice D:
- Surface (0-5 cm):
  - $\beta$-glucosidase: NT (385) / CT (142) = 2.71 times higher.
  - Phosphomonoesterase: NT (490) / CT (210) = 2.33 times higher.
- Deeper (10-20 cm):
  - $\beta$-glucosidase: NT (105) is lower than CT (118).
  - Phosphomonoesterase: NT (162) is lower than CT (175).
Choice D precisely quantifies both aspects of Oduro's claim. Choice A is false for CT (142 > 118, 210 > 175). Choice B is false (142 < 385). Choice C is false because NT was lower than CT at 10-20 cm.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: No-Till'in her derinlikte üstün olduğunu iddia eden C seçeneğine atlamak.
1400+ Bandı Sırrı: Oduro'nun tezi dikey katmanlaşmadır (vertical stratification): "Yüzeyde (0-5 cm) No-Till eziyor ama derinde (10-20 cm) geleneksel sürümün gerisine düşüyor."
Rakamları kontrol edelim:
- Yüzeyde (0-5 cm): 385/142 = 2.7 kat; 490/210 = 2.3 kat No-Till önde.
- Derinde (10-20 cm): 105 < 118 ve 162 < 175, No-Till gelenekselin gerisinde!
D seçeneği bu zıtlığı matematiksel olarak kusursuz ifade eder.`,
  },
  {
    id: 'sat1400-q38',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Cognitive Aging & Multimodal Lexical Retrieval',
    passage: `Cognitive scientists measured word-retrieval response latencies (reaction times in milliseconds, $ms$) and error rates (%) in young adults (ages 18–25) and older adults (ages 68–78) during picture-naming tasks under three sensory cueing conditions: Visual Only (unimodal), Auditory Cue Only (unimodal), and Congruent Audio-Visual (multimodal):

Lexical Retrieval Latencies:
• Young Adults: Visual Only = 620 ms (Error: 4.2%); Auditory Only = 685 ms (Error: 5.1%); Congruent Audio-Visual = 540 ms (Error: 2.1%)
• Older Adults: Visual Only = 840 ms (Error: 11.4%); Auditory Only = 910 ms (Error: 12.8%); Congruent Audio-Visual = 650 ms (Error: 4.8%)

The investigators hypothesized that while sensory degradation in aging slows baseline lexical access across all sensory channels, multimodal sensory integration provides a disproportionately greater facilitative speed advantage to older adults than to younger cohorts.`,
    question: `Which calculation from the experimental table most directly supports the hypothesis of a disproportionate multimodal advantage in older adults?`,
    options: [
      { id: 'A', text: 'Older adults had higher error rates than young adults in every tested sensory condition.' },
      { id: 'B', text: 'Young adults achieved their fastest reaction times in the Auditory Only condition rather than the Visual Only condition.' },
      { id: 'C', text: 'The multimodal condition reduced response latency by 190 ms (a 22.6% reduction from Visual Only) in older adults, compared to an 80 ms reduction (a 12.9% reduction from Visual Only) in young adults.' },
      { id: 'D', text: 'Both age groups exhibited an identical 50 ms facilitation when visual cues were supplemented with auditory cues.' },
    ],
    correctAnswer: 'C',
    trapType: 'Baseline Deficit vs. Relative Facilitation Benefit',
    explanation: `Choice C is the best answer. The hypothesis is that multimodal cueing provides a "disproportionately greater facilitative speed advantage to older adults."
Let's calculate the speedup from Visual Only to Multimodal:
- Older Adults: 840 ms - 650 ms = 190 ms reduction (190 / 840 ≈ 22.6%).
- Young Adults: 620 ms - 540 ms = 80 ms reduction (80 / 620 ≈ 12.9%).
Older adults gained a 190 ms speed benefit (22.6%), compared to only 80 ms (12.9%) in younger adults. This directly proves the disproportionate facilitative advantage. Choice A mentions baseline error rates, which shows older adults are slower but does not show multimodal facilitation. Choice B is factually false (540 ms was fastest). Choice D is mathematically false.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: Yaşlıların her koşulda daha çok hata yaptığını söyleyen A seçeneğini doğru sanmak (oysa bu genel bir gerilemedir, multimodal avantajı kanıtlamaz).
1400+ Bandı Sırrı: Hipotez: "İki duyunun aynı anda verilmesi (Audio-Visual) yaşlılara gençlere kıyasla ÇOK DAHA BÜYÜK bir hız avantajı sağlar."
Hesaplama:
- Yaşlılar: 840 ms'den 650 ms'ye inmiş -> 190 ms hızlanma (%22.6 kazanç).
- Gençler: 620 ms'den 540 ms'ye inmiş -> sadece 80 ms hızlanma (%12.9 kazanç).
C seçeneği bu farkı tam olarak ortaya koyar.`,
  },
  {
    id: 'sat1400-q39',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Hard',
    passageTitle: 'Conservation Biology & Reintroduction Survival Rates',
    passage: `Wildlife biologists monitored the one-year post-release survival rates (%) of captive-bred swift foxes (*Vulpes velox*) reintroduced into shortgrass prairies across three distinct age cohorts (Juveniles: 4–6 months; Subadults: 10–12 months; Adults: 2+ years) subjected to either Standard Enclosure Rearing or Pre-Release Behavioral Enrichment (predator-avoidance and live-prey training):

Reintroduction Survival Rates (% surviving at 12 months):
• Juveniles (4–6 months): Standard = 18%; Enriched = 46%
• Subadults (10–12 months): Standard = 32%; Enriched = 68%
• Adults (2+ years): Standard = 41%; Enriched = 52%

Lead biologist Dr. Maya Lin asserted that while behavioral enrichment significantly improved survival across all ages, the developmental window of subadulthood represents the optimal life stage for maximizing reintroduction efficacy.`,
    question: `Which choice most accurately utilizes the data from the table to corroborate Dr. Lin's conclusion?`,
    options: [
      { id: 'A', text: 'Juvenile foxes reared under standard conditions had higher survival rates than adult foxes under enriched conditions.' },
      { id: 'B', text: 'Subadults exhibited the highest absolute survival rate under enriched conditions (68%) and experienced the largest absolute gain from behavioral training (+36 percentage points), exceeding the gains observed in juveniles (+28 points) and adults (+11 points).' },
      { id: 'C', text: 'Adult foxes showed no statistically discernible improvement in survival when subjected to behavioral enrichment.' },
      { id: 'D', text: 'Standard enclosure rearing produced higher survival rates than behavioral enrichment for every age cohort.' },
    ],
    correctAnswer: 'B',
    trapType: 'Absolute Value vs. Net Differential Gain',
    explanation: `Choice B is the best answer. Dr. Lin claims that subadulthood represents the optimal life stage for maximizing reintroduction efficacy.
Let's check the data for subadults:
- Enriched survival: 68% (the highest of all cohorts).
- Net gain from enrichment: 68% - 32% = +36 percentage points.
Compare this to:
- Juveniles: 46% - 18% = +28 percentage points.
- Adults: 52% - 41% = +11 percentage points.
Subadults both achieved the highest absolute survival (68%) and gained the most from training (+36 points), fully corroborating Dr. Lin's claim. Choice A is false (18% < 52%). Choice C is false (adults improved from 41% to 52%). Choice D is completely inverted.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Sadece en yaşlı grubun en dayanıklı olacağını varsayıp yetişkinleri (Adults) seçmek.
1400+ Bandı Sırrı: Dr. Lin'in tezi: "Subadult (10-12 aylık genç erişkin) evresi reintroduction için en optimal dönemdir."
Veri kanıtı:
- En yüksek nihai hayatta kalma: %68 (diğerleri %46 ve %52).
- Eğitimin kattığı net kazanç: 68 - 32 = +36 puan (yavrular +28, yetişkinler sadece +11 kazanabilmiş).
B seçeneği hem tepe değeri hem de en büyük kazancı vererek iddiayı tam destekler.`,
  },
  {
    id: 'sat1400-q40',
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Roadside Vegetation Barriers & Particulate Deposition',
    passage: `Environmental engineers evaluated the airborne particulate matter capture efficiency of four evergreen hedgerow species planted along an eight-lane metropolitan motorway. Deposition velocity ($V_d$, in $cm\\cdot s^{-1}$) was quantified separately for fine inhalable particles ($PM_{2.5}$) and coarse thoracic particles ($PM_{10}$):

Particulate Deposition Velocities ($V_d$):
• *Taxus baccata* (English Yew): $PM_{2.5}$ = 1.84; $PM_{10}$ = 4.92; Leaf Area Density ($m^2/m^3$) = 8.4; Foliar Micro-roughness = High
• *Prunus laurocerasus* (Cherry Laurel): $PM_{2.5}$ = 0.52; $PM_{10}$ = 1.68; Leaf Area Density ($m^2/m^3$) = 3.2; Foliar Micro-roughness = Low
• *Ligustrum ovalifolium* (Privet): $PM_{2.5}$ = 0.98; $PM_{10}$ = 2.74; Leaf Area Density ($m^2/m^3$) = 5.1; Foliar Micro-roughness = Moderate
• *Cupressocyparis leylandii* (Leyland Cypress): $PM_{2.5}$ = 1.76; $PM_{10}$ = 4.65; Leaf Area Density ($m^2/m^3$) = 7.9; Foliar Micro-roughness = High

The researchers concluded that high leaf area density combined with micro-rough needle architecture enables certain evergreen conifer taxa to capture fine particles at more than three times the rate of broadleaved smooth-leafed alternatives.`,
    question: `Which comparison from the table most directly supports the researchers' conclusion regarding the three-fold capture rate disparity?`,
    options: [
      { id: 'A', text: '*Prunus laurocerasus* demonstrated higher deposition velocities for both $PM_{2.5}$ and $PM_{10}$ than did *Ligustrum ovalifolium*.' },
      { id: 'B', text: '*Cupressocyparis leylandii* captured $PM_{10}$ particles at a slower deposition velocity than *Ligustrum ovalifolium*.' },
      { id: 'C', text: '*Taxus baccata* and *Cupressocyparis leylandii* exhibited identical leaf area densities despite having different leaf surface roughness.' },
      { id: 'D', text: '*Taxus baccata*, with its high needle micro-roughness and leaf area density of 8.4, achieved a $PM_{2.5}$ deposition velocity of 1.84 $cm\\cdot s^{-1}$, which is over 3.5 times greater than the 0.52 $cm\\cdot s^{-1}$ observed for smooth-leafed *Prunus laurocerasus*.' },
    ],
    correctAnswer: 'D',
    trapType: 'Wrong Species Comparison vs. Three-Fold Quantitative Proof',
    explanation: `Choice D is the best answer. The conclusion specifically states that high leaf area density and needle micro-roughness allow certain evergreen conifers to capture fine particles ($PM_{2.5}$) at "more than three times the rate" of broadleaved smooth-leafed alternatives.
Comparing *Taxus baccata* (high roughness, LAD 8.4) to *Prunus laurocerasus* (smooth/low roughness, LAD 3.2):
- *Taxus baccata* $PM_{2.5}$ = 1.84 $cm/s$.
- *Prunus laurocerasus* $PM_{2.5}$ = 0.52 $cm/s$.
- 1.84 / 0.52 = 3.54 times greater (more than 3.5 times).
Choice D provides the exact quantitative and architectural comparison asserted in the text. Choice A is factually false (0.52 < 0.98, 1.68 < 2.74). Choice B is factually false (4.65 > 2.74). Choice C is false (8.4 != 7.9).`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Tabloya bakarken $PM_{2.5}$ ile $PM_{10}$ sütunlarını birbirine karıştırmak.
1400+ Bandı Sırrı: Paragrafın iddiası: İğne yapraklı pürüzlü türler, geniş düz yapraklı türlere göre ince partikülü ($PM_{2.5}$) "3 kattan fazla" yakalamaktadır.
Matematiksel kontrol:
- Taxus baccata (pürüzlü iğne yaprak): $PM_{2.5}$ = 1.84
- Prunus laurocerasus (düz parlak yaprak): $PM_{2.5}$ = 0.52
- 1.84 / 0.52 = 3.54 kat!
D seçeneği metindeki "more than three times" iddiasını doğrudan ispatlayan tek seçenektir.`,
  },

  // -------------------------------------------------------------------
  // 7. INFERENCES / LOGICAL COMPLETION (Q41 - Q46)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q41',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Evolutionary Game Theory & Generous Tit-for-Tat',
    passage: `In classical iterated Prisoner's Dilemma simulations, the strict "Tit-for-Tat" strategy—which begins with cooperation and subsequently replicates the opponent's previous move—is famously effective at sustaining mutual reciprocity. However, evolutionary theorist Martin Nowak demonstrated that in noisy real-world environments where communicative errors or misperceptions occur, strict Tit-for-Tat inevitably deteriorates into an unremitting spiral of mutual retaliation: if Player A accidentally defects due to environmental noise, Player B retaliates, which prompts Player A to retaliate, trapping both in perpetual defection. To avert this deadlock, Nowak introduced "Generous Tit-for-Tat," a strategy that responds to an opponent's defection by cooperating with a calculated probability ($p > 0$). By occasionally forgiving an unprovoked defection, Generous Tit-for-Tat _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'breaks the self-perpetuating cycle of reciprocal retaliation, enabling the population to restore mutually beneficial cooperation despite occasional communicative errors.' },
      { id: 'B', text: 'ensures that ruthless defectors can exploit generous agents until the entire cooperative subpopulation becomes extinct.' },
      { id: 'C', text: 'guarantees that communicative errors are eliminated entirely from the physical transmission channel.' },
      { id: 'D', text: 'forces all participants in the simulation to abandon probabilistic decision-making in favor of unconditional defection.' },
    ],
    correctAnswer: 'A',
    trapType: 'Pessimistic Collapse vs. Intended Theoretical Resolution',
    explanation: `Choice A is the best answer. The passage establishes a problem with strict Tit-for-Tat: accidental defection triggers an "unremitting spiral of mutual retaliation" that traps players in perpetual defection. Nowak introduced "Generous Tit-for-Tat" explicitly "To avert this deadlock" by occasionally forgiving defections with probability $p$. Therefore, the logical completion must explain how this forgiveness achieves the goal: it breaks the self-perpetuating cycle of retaliation and restores cooperation despite noise. Choice B describes the failure of cooperation, which contradicts the stated purpose ("To avert this deadlock"). Choice C is impossible (forgiveness cannot eliminate physical environmental noise). Choice D is the opposite of the strategy's mechanism.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: B seçeneğindeki "bencil oyuncular cömertleri sömürüp yok eder" gibi karamsar bir senaryoya kapılmak.
1400+ Bandı Sırrı: "Logical Completion" sorularında cümlenin başındaki bağlaç ve amaç ifadesi esastır: "To avert this deadlock, Nowak introduced Generous Tit-for-Tat..." (Bu kilitlenmeyi önlemek amacıyla Nowak cömert stratejiyi geliştirdi). Bu strateji defeksiyonu affederek ne yapar? Karşılıklı intikam döngüsünü kırar ve sisteme yeniden işbirliğini geri getirir (A seçeneği).`,
  },
  {
    id: 'sat1400-q42',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    passageTitle: 'Neurobiology of the Placebo Response',
    passage: `While early medical researchers dismissed the placebo effect as mere psychological delusion or biased self-reporting, functional neuroimaging has revealed that expectations of analgesia trigger genuine physiological cascades. When patients receive an inert saline injection believed to be a potent opioid analgesic, positron emission tomography (PET) scans detect a dramatic surge in endogenous endorphin binding in the anterior cingulate cortex and periaqueductal gray. Furthermore, when researchers secretly administer naloxone—a pharmacological opioid antagonist that competitively binds to and blocks opioid receptors—the patient's placebo pain relief is instantly eradicated. This experimental reversibility with naloxone indicates that _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'naloxone is an effective analgesic that can replace prescription opioids in clinical settings.' },
      { id: 'B', text: 'psychological belief alone is sufficient to eliminate chronic pain without activating any neurochemical pathways.' },
      { id: 'C', text: 'placebo analgesia relies on the physical activation of endogenous opioid neurotransmitter systems rather than purely non-physiological subjective reporting.' },
      { id: 'D', text: 'saline injections contain active chemical compounds that mimic synthetic narcotics.' },
    ],
    correctAnswer: 'C',
    trapType: 'Saline Magic Compound vs. Neurochemical Pathway Confirmation',
    explanation: `Choice C is the best answer. The text explains that placebo belief causes endorphin binding, and administering naloxone (an opioid receptor blocker) completely eradicates the placebo relief. If blocking opioid receptors eliminates the placebo effect, then the placebo effect must physically depend on the activation of those opioid systems. This proves that placebo analgesia is a genuine physiological process mediated by neurochemistry rather than just subjective self-delusion. Choice A contradicts the text (naloxone blocks opioids; it is an antagonist, not an analgesic). Choice B contradicts the finding that neurochemical pathways are required. Choice D is absurd (saline is inert salt water).`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: Tuzlu suyun (saline) kimyasal bir uyuşturucu olduğunu sanmak (D) veya naloksonun ağrı kesici olduğunu zannetmek (A).
1400+ Bandı Sırrı: Paragraftaki mantık zincirini takip edin:
1. Plasebo verildiğinde beyinde endorfin (doğal opioid) artışı görülüyor.
2. Opioid reseptörlerini tıkayan "naloxone" ilacı gizlice verildiğinde plasebo ağrı kesici etkisi ANINDA YOK OLUYOR.
Çıkarım (Inference): Demek ki plasebo etkisi sadece psikolojik bir yanılsama değil, beyindeki fiziksel opioid reseptör sisteminin aktif çalışmasına muhtaçtır (C seçeneği).`,
  },
  {
    id: 'sat1400-q43',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Historical Linguistics & Indo-European Origins',
    passage: `Historical linguists reconstructing Proto-Indo-European (PIE) utilize comparative lexical analysis to identify cognate terms shared across daughter language branches from Celtic to Sanskrit. A robust, shared ancestral lexicon exists for equestrian terms (horse, wheel, axle, yoke) and pastoral livestock (wool, fleece, butter), whereas cognate terms for Mediterranean maritime navigation, subtropical flora, and dense agrarian horticulture are conspicuously absent or represent later localized substrate borrowings. Because ancestral vocabularies reliably mirror the physical ecological habitat and economic technological repertoire of their speech communities, historical linguists infer that _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'Proto-Indo-European speakers originated in an insular maritime archipelago in the eastern Mediterranean Sea.' },
      { id: 'B', text: 'the PIE homeland was situated in an inland pastoral grassland ecosystem familiar with wheeled transport, rather than a coastal or tropical agricultural environment.' },
      { id: 'C', text: 'early Indo-European societies completely lacked domestic animals and relied exclusively on foraging.' },
      { id: 'D', text: 'Sanskrit and Celtic developed their equestrian terminologies independently through modern trade contacts.' },
    ],
    correctAnswer: 'B',
    trapType: 'Maritime Archipelago vs. Steppe Grassland Inference',
    explanation: `Choice B is the best answer. The premises are: (1) PIE has shared words for horses, wheels, axles, yokes, wool, and pastoral livestock; (2) PIE lacks native words for maritime navigation, subtropical flora, and dense horticulture; (3) ancestral vocabularies reflect the physical habitat and economy of the speakers. Therefore, the logical conclusion is that the homeland was an inland pastoral grassland where wheeled transport and livestock were central, not a coastal or tropical agricultural environment. Choice A is the direct opposite (maritime/Mediterranean is ruled out). Choice C is contradicted by livestock words. Choice D contradicts the claim that these are shared ancestral cognates.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Metinde Akdeniz lafını görünce A seçeneğine atlamak (oysa metin Akdeniz denizcilik kelimelerinin OLMADIĞINI söylüyor!).
1400+ Bandı Sırrı: Tümdengelim:
- Var olan kelimeler: At, tekerlek, dingil, boyunduruk, yün, tereyağı (bozkır ve otlak yaşamı).
- Olmayan kelimeler: Denizcilik, gemi, astropikal bitkiler, tarım.
- Kural: Dil o toplumun coğrafyasını yansıtır.
Sonuç: Hint-Avrupa anayurdu deniz kenarı veya astropikal bölge değil; tekerlekli arabaların ve hayvancılığın olduğu bir iç kara bozkırıdır (B seçeneği).`,
  },
  {
    id: 'sat1400-q44',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    passageTitle: 'Network Externalities & Technological Lock-In',
    passage: `In digital platform economics, "network externalities" arise when the utility that an individual consumer derives from a service increases as the total number of other participating users expands. When a dominant messaging protocol achieves a tipping point in market penetration, users face immense "switching costs" to migrate to rival platforms: even if an alternative platform offers demonstrably superior encryption, superior interface design, and zero advertising, an individual user who migrates unilaterally suffers immediate social isolation because their contacts remain on the legacy network. Consequently, in markets characterized by strong network externalities, _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'inferior platforms are immediately liquidated by consumers who migrate to whichever product has the lowest advertising.' },
      { id: 'B', text: 'consumer utility is determined solely by encryption protocols rather than the total size of the network.' },
      { id: 'C', text: 'social isolation is completely eliminated because users routinely maintain active accounts across dozens of duplicate networks.' },
      { id: 'D', text: 'a technologically suboptimal legacy platform can maintain enduring monopoly dominance simply because coordinating a collective consumer migration is extraordinarily difficult.' },
    ],
    correctAnswer: 'D',
    trapType: 'Rational Consumer Migration Fallacy',
    explanation: `Choice D is the best answer. The passage outlines how network externalities and high switching costs trap users: even if a rival platform is demonstrably superior, an individual cannot move alone without suffering social isolation ("their contacts remain on the legacy network"). Therefore, the logical consequence is that an entrenched, technologically inferior legacy platform can persist in its dominant position because coordinating a mass, simultaneous migration of users is nearly impossible (technological lock-in). Choice A contradicts the passage (users cannot easily migrate). Choice B contradicts network externalities. Choice C is an unsupported exaggeration.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: Tüketicilerin daha iyi şifreleme görünce anında yeni uygulamaya geçeceğini (A) zannetmek.
1400+ Bandı Sırrı: İktisattaki "ağ dışsallığı" (network externalities) ve "teknolojik kilitlenme" (lock-in) mantığı: Bir platform (örneğin WhatsApp) teknolojik olarak rakiplerinden daha zayıf olsa bile, herkes orada olduğu için tek başınıza ayrılamazsınız (yoksa izole olursunuz). Tüm toplumu aynı anda yeni bir uygulamaya geçirmek olağanüstü zor olduğundan, eski ve yetersiz sistem tekelini sürdürür (D seçeneği).`,
  },
  {
    id: 'sat1400-q45',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Extreme / 1400+',
    passageTitle: 'Glacial Hydrology & Basal Sliding Dynamics',
    passage: `During the Arctic summer melt season, surface supraglacial lakes drain rapidly through vertical fractures (moulins) to the bedrock beneath the Greenland Ice Sheet. Early glaciological models assumed that this massive seasonal injection of subglacial meltwater would continuously accelerate ice sheet sliding toward the sea by lubricating the bedrock interface. However, continuous GPS monitoring revealed a counterintuitive seasonal deceleration: after an initial transient surge in velocity in early June, ice flow rates dropped dramatically in late July and August, even as meltwater volumes peaked. Glaciologists now understand that while early meltwater enters an inefficient, distributed network of linked cavities—generating high subglacial basal water pressure that lifts the ice off bedrock—the continued high-volume flux late in the summer carves out large, efficient subglacial channels (R-channels) that drain water rapidly to the ice margin. This channelization rapidly dissipates basal water pressure, which suggests that _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'sustained increases in summer meltwater volume do not automatically produce indefinite increases in basal sliding speeds over the course of a melt season.' },
      { id: 'B', text: 'the Greenland Ice Sheet will completely stop moving toward the ocean if global atmospheric temperatures rise.' },
      { id: 'C', text: 'supraglacial lakes drain through moulins only during the coldest weeks of the Arctic winter.' },
      { id: 'D', text: 'subglacial basal water pressure increases monotonically with the volume of water transported through R-channels.' },
    ],
    correctAnswer: 'A',
    trapType: 'Catastrophic Cessation / Monotonic Fallacy Trap',
    explanation: `Choice A is the best answer. The text explains that early models assumed more meltwater = more sliding speed. However, late-summer GPS data showed sliding decelerated as large R-channels formed and dissipated basal water pressure. This counterintuitive finding proves that simply increasing meltwater volume does not automatically or indefinitely increase ice sliding speed, because the hydrological drainage system adapts by building efficient channels that drop pressure. Choice B is an extreme unscientific exaggeration. Choice C contradicts the passage (summer melt season). Choice D contradicts the text (R-channels dissipate pressure, so pressure does not increase).`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: Buzulun eriyince tamamen duracağını (B) iddia eden aşırı seçeneklere kaymak.
1400+ Bandı Sırrı: Paragraftaki paradoksun sonucunu bağla:
Eski teori: Ne kadar çok eriyen su = o kadar hızlı buzul kayması.
Yeni keşif: Yaz ortasında dev erime kanalları (R-channels) oluşup suyu hızla tahliye edince taban basıncı düşüyor ve buzul yavaşlıyor!
Çıkarım: Yaz erime suyunun artması, otomatik olarak buzul kayma hızını sürekli artırmaz (A seçeneği).`,
  },
  {
    id: 'sat1400-q46',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    passageTitle: 'Chronobiology & Circadian Desynchronization',
    passage: `In mammalian chronobiology, the master circadian pacemaker residing in the suprachiasmatic nucleus (SCN) of the hypothalamus coordinates molecular clock machinery across peripheral metabolic organs (liver, pancreas, adipose tissue) via autonomic neural innervation and rhythmic hormonal secretions. While the central SCN clock is synchronized almost exclusively by retinal photon absorption (light cues), peripheral clocks in hepatocytes are predominantly entrained by nutrient ingestion cycles. When nocturnal rodents are restricted to feeding exclusively during daylight hours—their biological rest phase—the liver's metabolic transcriptome shifts by twelve hours to synchronize with digestion, while the SCN clock remains unshifted and synchronized to the environmental light-dark cycle. This divergence between central and peripheral circadian clocks implies that _______`,
    question: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'the suprachiasmatic nucleus relies entirely on nutrient ingestion to regulate melatonin secretion.' },
      { id: 'B', text: 'mammalian metabolic organs lack autonomous genetic clocks and depend entirely on real-time commands from the retina.' },
      { id: 'C', text: 'irregular feeding schedules can decouple metabolic tissue clocks from the master neurological clock, creating internal physiological desynchronization.' },
      { id: 'D', text: 'nocturnal rodents immediately perish when their food intake is restricted to daylight hours.' },
    ],
    correctAnswer: 'C',
    trapType: 'Lethal Exaggeration / Inverted Pacemaker Dependency',
    explanation: `Choice C is the best answer. The passage establishes that the central SCN clock is set by light, whereas peripheral organ clocks (like the liver) are set by eating. When feeding is restricted to the rest phase, the liver shifts by 12 hours while the SCN stays locked to light, creating a stark "divergence between central and peripheral circadian clocks." The logical implication is that eating at irregular biological times decouples peripheral metabolic organs from the master brain pacemaker, causing internal physiological desynchronization. Choice A is contradicted by the text (SCN is set by light). Choice B contradicts the text (peripheral organs shifted their own clocks). Choice D is an extreme, unscientific exaggeration.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: Hayvanların gündüz yemek yiyince hemen öldüğünü (D) sanmak veya retinanın karaciğeri yönettiğini (B) düşünmek.
1400+ Bandı Sırrı: Mantık köprüsü:
- Beyindeki ana saat (SCN) IŞIKLA ayarlanır.
- Karaciğer ve iç organlardaki saatler YEMEKLE ayarlanır.
- Gece hayvanına gündüz yemek yedirilince karaciğer 12 saat kayarken beyin eski yerinde kalıyor (divergence).
Çıkarım: Düzensiz veya biyolojik saate aykırı beslenme, vücudun iç organ saatlerini beyindeki ana saatten koparır ve içsel desenkronizasyona (fizyolojik uyumsuzluğa) yol açar (C seçeneği).`,
  },

  // -------------------------------------------------------------------
  // 8. RHETORICAL SYNTHESIS (RESEARCH NOTES) (Q47 - Q50)
  // -------------------------------------------------------------------
  {
    id: 'sat1400-q47',
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    passageTitle: 'Early Sociological Surveys of Urban Migration',
    passage: `While researching early twentieth-century American sociological surveys, a student took the following notes:
• W.E.B. Du Bois conducted the pioneering urban survey *The Philadelphia Negro* in 1899.
• Du Bois utilized exhaustive door-to-door ethnographic interviews and mapped spatial house-to-house demographic data across the Seventh Ward.
• He documented that racial discrimination in industrial hiring restricted African American migrants to precarious, low-wage service occupations.
• Sociologists Robert E. Park and Ernest Burgess conducted the Chicago School urban ecology survey in 1925.
• Park and Burgess utilized aggregate municipal census statistics and abstract concentric zonal modeling.
• They also concluded that newly arrived migrant communities were structurally channeled into marginalized, lower-income peripheral employment sectors.`,
    question: `The student wants to contrast the research methodologies of the two sociological studies while emphasizing their shared empirical conclusion regarding migrant employment. Which choice best accomplishes this goal?`,
    options: [
      { id: 'A', text: 'Both Du Bois\'s 1899 study of Philadelphia and Park and Burgess\'s 1925 survey of Chicago demonstrated that racial discrimination was the sole factor determining employment.' },
      { id: 'B', text: 'Du Bois\'s *The Philadelphia Negro* was published in 1899, whereas Park and Burgess\'s Chicago School survey was published twenty-six years later in 1925.' },
      { id: 'C', text: 'Employing door-to-door ethnographic interviews, Du Bois mapped demographic patterns across Philadelphia\'s Seventh Ward to understand urban migration.' },
      { id: 'D', text: 'While Du Bois gathered granular door-to-door ethnographic interviews and Park and Burgess analyzed aggregate census statistics and zonal models, both studies converged on the conclusion that urban migrants were structurally constrained to precarious, low-income employment.' },
    ],
    correctAnswer: 'D',
    trapType: 'Single-Constraint Satisfaction Trap',
    explanation: `Choice D is the best answer. The prompt requires the student to satisfy two specific constraints: (1) contrast the research methodologies of the two studies (Du Bois: granular door-to-door ethnographic interviews; Park & Burgess: aggregate census data and concentric zonal modeling), and (2) emphasize their shared empirical conclusion regarding migrant employment (both found migrants structurally confined to precarious, low-income jobs). Choice D seamlessly fulfills both criteria in a single sentence. Choice A fails to contrast their methodologies. Choice B only contrasts publication dates. Choice C completely omits Park and Burgess.`,
    turkishExplanation: `Doğru Cevap: D.
1100-1200 Bandı Tuzağı: A seçeneğine atlayıp sadece ortak sonucu görmek (ama metodoloji farkını kaçırmak) ya da C seçeneğine atlayıp sadece Du Bois'yı görmek.
1400+ Bandı Sırrı: "Rhetorical Synthesis" sorularında soru kökündeki ÇİFT HEDEFE (dual goal) dikkat:
Hedef 1: Metodoloji farkını vurgula (Du Bois: kapı kapı etnografik mülakat vs. Park/Burgess: genel nüfus sayımı ve bölge modelleri).
Hedef 2: Ortak istihdam sonucunu belirt (her ikisi de göçmenlerin düşük gelirli güvencesiz işlere sıkıştığını buldu).
D seçeneği bu iki hedefi de kusursuz birleştiren TEK seçenektir.`,
  },
  {
    id: 'sat1400-q48',
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    passageTitle: 'Historical Metallurgy & Iron Smelting',
    passage: `While researching historical iron smelting, a student took the following notes:
• Bloomery smelting was developed around 1200 BCE in the Near East and dominated Eurasian metallurgy until the late medieval period.
• In a bloomery furnace, iron ore is heated below its melting point (1,200°C), producing a spongy solid mass of iron and slag known as a "bloom."
• Bloomery iron has a very low carbon content (less than 0.1%), yielding ductile, malleable wrought iron that must be hand-hammered to expel impurities.
• Blast furnace smelting was pioneered in China during the Han dynasty and adopted in Europe by the 14th century.
• In a blast furnace, temperatures exceed the melting point of iron (1,538°C), liquefying the metal completely.
• Blast furnace iron absorbs significant carbon from the fuel (3% to 4.5%), creating brittle cast iron that can be poured into molds but cannot be forged.`,
    question: `The student wants to introduce both smelting technologies to an audience unfamiliar with metallurgy while highlighting the primary chemical difference in their resulting iron products. Which choice best accomplishes this goal?`,
    options: [
      { id: 'A', text: 'Pioneered during the Han dynasty in China, the blast furnace liquifies iron by exceeding temperatures of 1,538°C.' },
      { id: 'B', text: 'Traditional iron production utilized either low-temperature bloomery furnaces, which yield malleable wrought iron containing less than 0.1% carbon, or high-temperature blast furnaces, which produce brittle cast iron with a much higher carbon content of 3% to 4.5%.' },
      { id: 'C', text: 'Bloomery furnaces operated below 1,200°C to create a spongy solid mass called a bloom, which blacksmiths subsequently hammered by hand.' },
      { id: 'D', text: 'Although both bloomery and blast furnace technologies revolutionized ancient civilizations, blast furnaces were adopted in Europe only during the fourteenth century.' },
    ],
    correctAnswer: 'B',
    trapType: 'Missing One Technology / Omitting the Chemical Contrast',
    explanation: `Choice B is the best answer. The prompt demands: (1) introduce both technologies to a general audience (bloomery and blast furnace), and (2) highlight the primary chemical difference in their products (bloomery: low carbon, less than 0.1%, malleable wrought iron; blast furnace: high carbon, 3% to 4.5%, brittle cast iron). Choice B clearly introduces both furnace types and contrasts their carbon percentages and resulting mechanical properties. Choice A only discusses blast furnaces. Choice C only discusses bloomeries. Choice D mentions historical timing without highlighting the chemical difference in carbon content.`,
    turkishExplanation: `Doğru Cevap: B.
1100-1200 Bandı Tuzağı: Sadece fırın sıcaklıklarını anlatan (A veya C) ya da tarihi tarihleri veren (D) seçeneği işaretlemek.
1400+ Bandı Sırrı: Hedefleri kontrol et:
Hedef 1: Her iki teknolojiyi de tanıt (bloomery ve blast furnace).
Hedef 2: Ürünlerin temel KİMYASAL FARKINI vurgula (karbon oranı farkı: bloomery < %0.1 karbonlu işlenebilir demir vs. blast furnace %3-4.5 karbonlu dökme demir).
B seçeneği iki fırını ve aralarındaki karbon farkını eksiksiz açıklar.`,
  },
  {
    id: 'sat1400-q49',
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    passageTitle: 'Biomimetic Aerodynamics & Dragonfly Wing Venation',
    passage: `While researching biomimetic micro-aerial vehicles (MAVs), a student took the following notes:
• Engineers designing miniature flapping-wing drones struggle with aerodynamic turbulence and catastrophic structural fatigue caused by rapid wing oscillation.
• Traditional rigid carbon-fiber drone wings frequently fracture along stress concentration points during sudden wind gusts.
• Dragonfly wings (*Odonata*) do not fracture despite flapping at high frequencies while enduring extreme aerodynamic vortex shedding.
• Biological morphological scans show that dragonfly wings are crisscrossed by a complex hierarchical network of flexible, chitinous veins interconnected by resilient cross-veins.
• This venation pattern incorporates tiny flexible joints composed of the rubber-like protein resilin.
• Resilin joints allow the wing to deform passively under heavy air resistance, absorbing turbulence and preventing mechanical stress cracks.`,
    question: `The student wants to present the engineering problem and explain how studying dragonfly wing morphology provided a solution. Which choice best accomplishes this goal?`,
    options: [
      { id: 'A', text: 'To solve the problem of miniature drone wings fracturing under aerodynamic turbulence, engineers examined dragonfly wings, discovering that flexible resilin protein joints in their vein networks absorb stress by passively deforming under heavy wind gusts.' },
      { id: 'B', text: 'Dragonfly wings flap at remarkably high frequencies without fracturing because their chitinous veins are interconnected by a hierarchical network of cross-veins.' },
      { id: 'C', text: 'Miniature flapping-wing drones suffer from catastrophic structural fatigue when their rigid carbon-fiber wings encounter unexpected wind shear during flight.' },
      { id: 'D', text: 'Resilin is a biological, rubber-like protein that can be synthesized in laboratories to replace rigid carbon fiber in traditional aeronautical applications.' },
    ],
    correctAnswer: 'A',
    trapType: 'Problem-Only vs. Solution-Only Partial Fulfillment',
    explanation: `Choice A is the best answer. The prompt requires the student to (1) present the engineering problem (drone wings fracturing under turbulence and fatigue) and (2) explain how dragonfly wing morphology solved it (flexible resilin joints in vein networks deform passively under wind gusts to absorb stress). Choice A connects the problem directly to the biological solution in a coherent, grammatically sound sentence. Choice B presents only the biological mechanism without the engineering problem. Choice C presents only the engineering problem without the solution. Choice D is an unsupported statement about synthesizing resilin.`,
    turkishExplanation: `Doğru Cevap: A.
1100-1200 Bandı Tuzağı: Sadece problemi anlatan C'ye ya da sadece yusufçuğu anlatan B'ye düşmek.
1400+ Bandı Sırrı: Hedef: "Mühendislik problemini sun VE yusufçuk morfolojisinin buna nasıl çözüm getirdiğini açıkla."
Problem: Minyatür drone kanatlarının rüzgar türbülansında kırılması.
Çözüm: Yusufçuğun damarlarındaki esnek resilin protein eklemlerinin pasif esneyerek stresi emmesi.
A seçeneği problem ve çözümü kusursuz bir nedensellik bağıyla bağlar.`,
  },
  {
    id: 'sat1400-q50',
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    passageTitle: 'Early African American Poetics: Wheatley & Dunbar',
    passage: `While researching African American literary history, a student took the following notes:
• Phillis Wheatley published *Poems on Various Subjects, Religious and Moral* in 1773 as an enslaved woman in colonial Boston.
• Wheatley adhered strictly to neoclassical heroic couplets (iambic pentameter rhymed AA BB), the formal poetic standard of Alexander Pope.
• She subtly embedded abolitionist arguments within neoclassical religious allegories to navigate eighteenth-century censorship.
• Paul Laurence Dunbar published *Oak and Ivy* in 1892 and *Majors and Minors* in 1895.
• Dunbar famously bifurcated his poetic output between formal, standard English lyric verses and phonetic African American vernacular dialect poems.
• His dialect poems captured the authentic cadence, folk humor, and emotional resilience of post-Reconstruction Black life while subverting minstrel stereotypes.`,
    question: `The student wants to contrast how Wheatley and Dunbar strategically employed poetic forms to convey Black experiences under historical constraints. Which choice best accomplishes this goal?`,
    options: [
      { id: 'A', text: 'Phillis Wheatley published *Poems on Various Subjects* in 1773, while Paul Laurence Dunbar published *Oak and Ivy* over a century later in 1892.' },
      { id: 'B', text: 'Both Phillis Wheatley and Paul Laurence Dunbar were celebrated African American poets whose works confronted racial prejudice in the United States.' },
      { id: 'C', text: 'While Wheatley conformed to strict neoclassical heroic couplets to embed subversive abolitionist critique within religious allegories, Dunbar bifurcated his poetry between standard English lyrics and authentic Black vernacular dialect to subvert racial stereotypes.' },
      { id: 'D', text: 'Dunbar\'s dialect poetry captured folk humor and emotional resilience by utilizing phonetic spellings of African American vernacular speech.' },
    ],
    correctAnswer: 'C',
    trapType: 'Broad Similarity vs. Specific Strategic Contrast',
    explanation: `Choice C is the best answer. The prompt requires the student to contrast how both poets strategically employed poetic forms to convey Black experiences under historical constraints. Choice C directly contrasts Wheatley's strategy (conforming to strict neoclassical heroic couplets to mask abolitionist critique under religious allegory) with Dunbar's strategy (bifurcating between standard English lyrics and vernacular dialect to subvert minstrel stereotypes). Choice A only contrasts dates. Choice B is a vague statement of similarity that fails to contrast forms. Choice D only discusses Dunbar.`,
    turkishExplanation: `Doğru Cevap: C.
1100-1200 Bandı Tuzağı: B seçeneğindeki "ikisi de ırkçılıkla mücadele eden büyük şairlerdir" gibi aşırı genel ve yüzeysel bir özete aldanmak.
1400+ Bandı Sırrı: Hedef: İki yazarın tarihsel baskılar altında KULLANDIKLARI ŞİİR BİÇİMLERİNİ (poetic forms) ve stratejilerini KIYASLA:
- Wheatley: Neoklasik katı beyitleri (heroic couplets) dini alegorilerle sansürü aşmak için kullandı.
- Dunbar: Şiirlerini standart İngilizce ve otantik siyah halk ağzı (vernacular dialect) olarak ikiye ayırıp kalıpları yıktı.
C seçeneği bu biçimsel strateji kıyasını tam isabetle verir.`,
  },
];
