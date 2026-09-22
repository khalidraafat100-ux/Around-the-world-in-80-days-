export interface Chapter {
  id: number;
  titleEn: string;
  titleAr: string;
  pages: string;
  pagesEn: string;
  summaryAr: string;
  summaryEn: string;
  keyEvents: string[];
  keyEventsEn: string[];
  locations: string[];
  locationsEn: string[];
  transport: string[];
  transportEn: string[];
  famousQuotes: { speaker: string; text: string }[];
  famousQuotesEn: { speaker: string; text: string }[];
}

export interface Character {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  traits: string[];
  traitsEn: string[];
  descriptionAr: string;
  descriptionEn: string;
  avatarIcon: string;
}

export interface RouteStop {
  id: number;
  locationAr: string;
  locationEn: string;
  country: string;
  countryEn: string;
  arrivalDate: string;
  arrivalDateEn: string;
  transportMode: string;
  transportModeEn: string;
  transportIcon: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ActivityItem {
  chapterId: number;
  exerciseTitle: string;
  exerciseTitleEn: string;
  type: 'true_false' | 'matching' | 'fill_blanks' | 'qa';
  questions: {
    q: string;
    qEn: string;
    answer: string;
    answerEn: string;
    explanation?: string;
  }[];
}

export const BOOK_METADATA = {
  titleAr: "حول العالم في ثمانين يوماً",
  titleEn: "Around the World in Eighty Days",
  author: "جول فيرن (Jules Verne)",
  authorEn: "Jules Verne",
  adaptation: "بيل بولر (Bill Bowler) - رسوم: مارك درايزي (Mark Draisey)",
  adaptationEn: "Adapted by Bill Bowler; Illustrated by Mark Draisey",
  series: "سلسلة Family and Friends 5 (Oxford University Press)",
  seriesEn: "Oxford University Press (Family and Friends Readers 5)",
  yearOfStory: "1872",
  coreTheme: "الإصرار، الدقة في إدارة الوقت، التضحية والشرف، وتأثير فارق التوقيت وخطوط الطول عند الدوران شرقاً حول الأرض.",
  coreThemeEn: "Determination, strict punctuality, personal sacrifice, and the geographic effect of crossing time zones eastward across the International Date Line.",
  betAmount: "20,000 جنيه إسترليني (تعادل ثروة طائلة في ذلك العصر)",
  betAmountEn: "20,000 Pounds Sterling (a substantial fortune in 1872)",
  duration: "80 يوماً (من 2 أكتوبر 1872 حتى 21 ديسمبر 1872 الساعة 8:45 مساءً)",
  durationEn: "80 Days (from October 2, 1872 until December 21, 1872 at 8:45 in the evening)",
};

export const STORY_OVERVIEW = {
  hook: "تبدأ الرواية برهان جريء في نادي الإصلاح بلندن عام 1872 بين النبيل الإنجليزي الغامض والدقيق للغاية 'فيلياس فوج' وأصدقائه على قطع العالم في 80 يوماً فقط.",
  hookEn: "In London during the autumn of 1872, an enigmatic English gentleman named Phileas Fogg accepts a twenty-thousand-pound wager at the Reform Club, betting his fellow members that he can circumnavigate the globe in eighty days or fewer.",
  
  synopsis: `السيد فيلياس فوج رجل إنجليزي ثري ومنظم لدرجة الهوس بالوقت والدقائق. بعد طرد خادمه السابق لتأخره في ضبط حرارة ماء الاستحمام، يعين الفرنسي خفيف الظل 'جان باسبارتو'. في اليوم نفسه، يقرأ في الصحيفة عن سرقة 50,000 جنيه من بنك إنجلترا وإمكانية السفر حول العالم في 80 يوماً بفضل خطوط السكك الحديدية والسفن البخارية الجديدة. يدخل في رهان بقيمة 20,000 جنيه مع أعضاء ناديه على إتمام الرحلة في الموعد.

ينطلق فوج وباسبارتو في رحلة ملحمية تخترق فرنسا، إيطاليا، مصر (قناة السويس)، الهند، هونغ كونغ، اليابان، أمريكا، والعودة لبريطانيا. لكن المحقق 'فيكس' من شرطة سكوتلاند يارد يظن خطأً أن فوج هو اللص النبيل الهارب، ويلاحقه حول الكوكب في محاولة لتعطيله والقبض عليه.

خلال الرحلة يتعرض الأبطال لمخاطر جمة: إنقاذ الأميرة الهندية 'عودة' من الموت حرقاً، السفر على ظهر الفيل 'كيوني' والزلاجة الشراعية، هجوم قبائل السيو على القطار الأمريكي، وحرق أخشاب سفينتهم في المحيط الأطلسي لعدم نفاد الوقود. عند وصولهم لليفربول يلقي فيكس القبض على فوج ظلماً، قبل أن يتبين براءته، ويظن فوج أنه خسر الرهان بتأخر 5 دقائق، ليكتشف بفضل دورانه شرقاً حول الأرض أنه كسب يوماً كاملاً، فيفوز بالرهان ويتزوج الأميرة عودة.`,
  
  synopsisEn: `Phileas Fogg is an eccentric and wealthy gentleman who lives in London under a rigid, mathematically scheduled daily routine. After dismissing his former valet over an imperceptible temperature discrepancy in shaving water, he hires Jean Passepartout, an agile and honest Frenchman seeking peaceful employment.

Later that afternoon at the Reform Club, conversation turns to the recent theft of fifty thousand pounds from the Bank of England and a newspaper article demonstrating that modern railways and steamships now make traveling around the globe in eighty days practically achievable. Challenged by his companions, Mr. Fogg wagers twenty thousand pounds—half his fortune—pledging to return to the club room by Saturday, December 21, 1872, at quarter to nine in the evening.

Mr. Fogg and Passepartout immediately leave London, carrying twenty thousand pounds in banknotes for traveling expenses. Meanwhile, Detective Fix of Scotland Yard notices Mr. Fogg at Suez in Egypt. Convinced that Fogg matches the bank robber's profile, Fix tails them across the globe, repeatedly attempting to arrest Fogg on British-controlled territory.

Their voyage becomes a series of extraordinary perils:
• In India, they purchase an elephant named Kiouni to cross an unfinished railway gap and heroically rescue a young princess, Mrs. Aouda, from a funeral sacrifice.
• In Hong Kong, Fix drugs Passepartout to separate master and valet, forcing Fogg to hire an open pilot vessel to Shanghai amidst heavy storms.
• In Japan, Fogg and Mrs. Aouda reunite with Passepartout inside an acrobat troupe in Yokohama.
• Across North America, they endure an election riot, bridge collapses, a combat assault by Sioux warriors, and a wind-driven ice sledge journey over snowy prairies.
• Crossing the Atlantic Ocean on the commercial vessel Henrietta, Fogg buys the ship's wooden decks and furniture to burn as boiler fuel when coal runs short.

Upon reaching Liverpool, Detective Fix arrests Fogg under a delayed warrant, detaining him until the real bank robber, James Strand, is discovered. Believing he arrived in London five minutes past the deadline and is now financially ruined, Fogg returns home with noble resignation. When Mrs. Aouda offers her hand in marriage, Passepartout rushes to notify the parish clergyman and discovers that by traveling continuously eastward toward the rising sun, they gained an entire twenty-four-hour day. Rushing into the Reform Club at eight forty-four, Mr. Fogg wins the bet with seconds to spare, earning both honor and true love.`,

  moral: `أهم الدروس المستفادة:
1. الشجاعة والإنسانية تفوق المكاسب المادية: ضحى فوج بوقته وثروته لإنقاذ الأميرة عودة وخادمه باسبارتو.
2. الثبات وحل المشكلات بهدوء: لم يستسلم فوج أمام أي عائق، بل وجد حلولاً مبتكرة (ركوب الفيل، استئجار زلاجة بأشرعة، شراء السفينة وحرق أخشابها).
3. العلم والجغرافيا: ظاهرة فارق التوقيت وكسب يوم كامل بفضل السفر باتجاه الشرق.`,

  moralEn: `Core Themes and Takeaways:
1. Integrity and Compassion Over Material Wealth: Phileas Fogg repeatedly risks his deadline and spends thousands of pounds to save Mrs. Aouda from execution and liberate Passepartout from captivity.
2. Calm Resourcefulness in the Face of Adversity: Mr. Fogg never panics. When trains end or ships leave, he finds innovative solutions, including buying an elephant, navigating storms in an open boat, riding a wind-powered ice sledge, and purchasing ship timbers to burn for steam fuel.
3. Science, Geography, and Navigation: Traveling eastward across time zones shortens each day by four minutes for every degree of longitude, accumulating twenty-four full hours over three hundred sixty degrees.`,
};

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    titleEn: "Chapter 1: Mr Fogg Leaves London",
    titleAr: "الفصل الأول: السيد فوج يغادر لندن",
    pages: "الصفحات 4 - 8",
    pagesEn: "Pages 4 through 8",
    summaryAr: `يعيش السيد فيلياس فوج في لندن حياة هادئة شديدة الدقة. يطرد خادمه جيمس فوستر لأن ماء الحمام لم يكن بالحرارة المطلوبة، ويوظف الشاب الفرنسي 'باسبارتو' الباحث عن وظيفة مستقرة.
في فترة ما بعد الظهر بنادي النبلاء، يناقش فوج أصدقاءه خبر سرقة 50,000 جنيه إسترليني من بنك إنجلترا بواسطة لص نبيل المظهر، وتناقشوا حول مقال في صحيفة التايمز يذكر إمكانية الدوران حول العالم في 80 يوماً. يتحدى صديقه المهندس ستيوارت قائلاً إنه مستحيل عملياً بسبب الحوادث والطقس، فيراهنه فوج بـ 20,000 جنيه على إنجازها والعودة للنادي بحلول 21 ديسمبر الساعة 8:45 مساءً.
يغادر فوج وباسبارتو لندن ليلاً حاملين حقيبة سفر صغيرة و20,000 جنيه نقداً. في السويس بمصر، يكون المحقق 'فيكس' من سكوتلاند يارد في انتظاره بعد أن شك في تطابق أوصاف فوج مع اللص الهارب.`,
    summaryEn: `Phileas Fogg resides at number seven Savile Row in London, adhering to an unyielding, methodical daily timetable. After discharging his previous servant for bringing wash water that was eighty-four degrees Fahrenheit instead of eighty-six, he employs Jean Passepartout, a quick-witted Frenchman eager for a tranquil position.

During the afternoon at the Reform Club, members debate two major news items: the theft of fifty thousand pounds from the Bank of England by a well-dressed gentleman, and a published estimate calculating that the world can now be circled in eighty days. When Andrew Stuart argues that bad weather and unforeseen accidents make the timeline impossible, Fogg accepts the challenge, wagering twenty thousand pounds that he will complete the journey and return to the club room by Saturday, December 21, at quarter to nine in the evening.

Fogg and Passepartout pack a compact carpetbag containing twenty thousand pounds in cash and catch the evening train to Dover. Across the Mediterranean Sea at Suez in Egypt, Detective Fix awaits their arrival, convinced that Fogg is the fugitive bank robber seeking escape.`,
    keyEvents: [
      "تعيين باسبارتو بعد طرد الخادم السابق بسبب ماء الحمام",
      "قراءة خبر سرقة بنك إنجلترا في صحيفة التايمز",
      "عقد الرهان الكبير بقيمة 20,000 جنيه إسترليني مع ستيوارت ورالف",
      "الانطلاق السريع بالقطار إلى دوفر ثم فرنسا وإيطاليا",
      "وصول السويس في مصر وتربص المحقق فيكس"
    ],
    keyEventsEn: [
      "Passepartout is hired after the former valet is dismissed over minor water temperature",
      "Discussion of the fifty-thousand-pound Bank of England robbery at the Reform Club",
      "The twenty-thousand-pound wager is finalized between Phileas Fogg and Andrew Stuart",
      "Fogg and Passepartout depart London on the night train to Dover with a carpetbag of banknotes",
      "Detective Fix monitors their arrival at Suez and prepares an international arrest request"
    ],
    locations: ["لندن (بريطانيا)", "دوفر", "باريس (فرنسا)", "إيطاليا", "بورسعيد وقناة السويس (مصر)"],
    locationsEn: ["London (England)", "Dover", "Paris (France)", "Italy", "Port Said and the Suez Canal (Egypt)"],
    transport: ["قطار", "سفينة عبر بحر المانش", "السفينة البخارية 'منغوليا'"],
    transportEn: ["Express Railway Train", "English Channel Ferry", "Steamship Mongolia"],
    famousQuotes: [
      { speaker: "فيلياس فوج", text: "يمكن إنجازها إذا كنت حريصاً على الوقت، وسأثبت لكم ذلك!" },
      { speaker: "باسبارتو", text: "سيد فوج رجل هادئ للغاية.. أظنني سأكون سعيداً جداً بالعمل هنا." }
    ],
    famousQuotesEn: [
      { speaker: "Phileas Fogg", text: "A well-used minimum suffices for everything. I will bet twenty thousand pounds against anyone that I will make the tour of the world in eighty days or less." },
      { speaker: "Jean Passepartout", text: "Mr Fogg is such a quiet, orderly gentleman. I believe I have finally found a peaceful home." }
    ]
  },
  {
    id: 2,
    titleEn: "Chapter 2: From Egypt to India",
    titleAr: "الفصل الثاني: من مصر إلى الهند",
    pages: "الصفحات 11 - 16",
    pagesEn: "Pages 11 through 16",
    summaryAr: `يتعرف المحقق فيكس على باسبارتو في السويس ويدله على متجر لشراء ملابس للسيد فوج، ثم يرسل برقية عاجلة لسكوتلاند يارد لطلب إذن القبض في الهند. يركب فيكس نفس السفينة 'منغوليا' المتجهة إلى بومباي عبر البحر الأحمر وعدن.
يصل فوج وباسبارتو إلى بومباي قبل الموعد بيومين. أثناء تجوله، يدخل باسبارتو معبد تلة ماليبار بحذائه دون علم بقواعد الهندوس، فيغضب الكهنة وينتزعون حذاءه ويهرب مذعوراً. يلاحظ فيكس ذلك لاستغلاله ضدهما قانونياً.
يستقلان القطار نحو كلكتا، لكن السكة الحديدية تنقطع فجأة عند قرية خولبي لأن 80 كم لم تكتمل بعد! يشتري فوج فيلاً يدعى 'كيوني' بمبلغ ضخم (2,000 جنيه) ويستأجر دليلاً هندياً.
أثناء عبور الأدغال قرب قرية بيلاجي، يكتشفون موكب جنازة لأمير عجوز يُراد حرق زوجته الشابة الجميلة (الأميرة عودة) حية معه وفق عادة قديمة. يقرر فوج إنقاذها بنبل، وفي الفجر يتسلل باسبارتو متنكراً في ملابس الأمير الميت فوق المحرقة، فينهض ويحمل الأميرة عودة ويهربون جميعاً على الفيل وسط صدمة وغضب الكهنة.`,
    summaryEn: `At Suez, Detective Fix approaches Passepartout under the guise of an informative companion, pointing him toward local outfitters to purchase warm clothing. Convinced of Fogg's guilt, Fix wires London demanding an immediate warrant for Bombay, then boards the steamship Mongolia alongside them.

The vessel arrives in Bombay two days ahead of schedule. While sightseeing near Malabar Hill, Passepartout inadvertently enters a sacred Hindu temple wearing his shoes. Outraged priests rip off his shoes, causing him to flee barefoot through the streets. Detective Fix observes the dispute, recognizing a useful legal pretext to hinder Fogg.

Boarding the Great Indian Peninsula Railway toward Calcutta, the travelers discover that eighty kilometers of track between Kholby and Allahabad remain unbuilt. Undaunted, Fogg purchases an intelligent elephant named Kiouni for two thousand pounds and employs a young Parsi guide.

While passing through dense jungle near the village of Pillaji, they encounter a ceremonial procession where a young noblewoman, Mrs. Aouda, is being led to be burned alive beside her deceased husband. Fogg resolves to intervene. At dawn, Passepartout bravely slips onto the funeral pyre in place of the dead prince, rises like an apparition before the terrified crowd, scoops up the drugged woman, and carries her to safety atop the elephant.`,
    keyEvents: [
      "برقية فيكس الشهيرة من مكتب بريد السويس",
      "حادثة باسبارتو في معبد تلة ماليبار وفقدان حذائه",
      "انقطاع سكة الحديد في خولبي وشراء الفيل 'كيوني' بـ 2000 جنيه",
      "اكتشاف محرقة التضحية بالأميرة الشابة عودة",
      "الإنقاذ البطولي الذكي للأميرة على يد باسبارتو وفوج"
    ],
    keyEventsEn: [
      "Detective Fix sends his urgent telegraph from Suez requesting an Indian warrant",
      "Passepartout enters the Malabar Hill temple wearing shoes and escapes barefoot",
      "Railway ends abruptly at Kholby; Fogg purchases Kiouni the elephant for two thousand pounds",
      "The party discovers the ritual procession intending to execute Mrs. Aouda",
      "Passepartout takes the dead prince's place on the pyre and executes a daring rescue"
    ],
    locations: ["السويس (مصر)", "عدن (اليمن)", "بومباي (الهند)", "قرية خولبي", "قرية بيلاجي"],
    locationsEn: ["Suez (Egypt)", "Aden (Yemen)", "Bombay (India)", "Kholby Village", "Pillaji Village"],
    transport: ["السفينة 'منغوليا'", "قطار الهند", "الفيل 'كيوني'"],
    transportEn: ["Steamship Mongolia", "Indian Railway Train", "Kiouni the Elephant"],
    famousQuotes: [
      { speaker: "برقية فيكس", text: "اللص النبيل متجه إلى الهند. أرسلوا لي الأوراق للقبض عليه هناك." },
      { speaker: "فيلياس فوج", text: "يجب علينا إنقاذ تلك السيدة المسكينة!" }
    ],
    famousQuotesEn: [
      { speaker: "Detective Fix", text: "I have my eye on the Bank robber. Send an arrest warrant to Bombay immediately without delay." },
      { speaker: "Phileas Fogg", text: "We have twelve hours to spare. I can dedicate them to saving this unfortunate woman." }
    ]
  },
  {
    id: 3,
    titleEn: "Chapter 3: Through India to Hong Kong",
    titleAr: "الفصل الثالث: عبر الهند إلى هونغ كونغ",
    pages: "الصفحات 19 - 24",
    pagesEn: "Pages 19 through 24",
    summaryAr: `يصل الأبطال محطة قطار الله آباد، ويكافئ فوج الدليل الهندي بإعطائه الفيل كيوني ومكافأة مالية، ويشتري ملابس أوروبية للأميرة عودة. تخبرهم عودة بأن لديها قريباً في هونغ كونغ فيدعوها فوج لمرافقتهما.
عند وصولهم كلكتا في 25 أكتوبر، توقفهم الشرطة وتقتادهم للمحاكمة بسبب كسر باسبارتو القانون بدخول المعبد بحذائه (بتحريض وتدبير من فيكس الذي جلب الكهنة). يحكم القاضي بالسجن أو كفالة باهظة، فيدفع فوج فوراً 2,000 جنيه بكل أريحية لتفادي تعطيل رحلتهما!
يصعدون إلى سفينة 'رانغون' نحو هونغ كونغ. يتبعهم فيكس ويرسل برقية جديدة. عند الوصول لهونغ كونغ في 6 نوفمبر، تكتشف عودة أن قريبها انتقل إلى هولندا، فيطمئنها فوج بأنها ستسافر معهما إلى لندن ثم هولندا.
يحجز باسبارتو تذاكر على سفينة 'كارناتيك' إلى يوكوهاما باليابان، ويعلم في مكتب التذاكر أن موعد الإبحار قد تم تقديمه لنفس المساء. يقابله فيكس ويكشف له هويته كمحقق طالباً مساعدته في القبض على سيده، لكن باسبارتو يرفض خيانة فوج بشدة. فيقوم فيكس باصطحابه إلى مقهى وإبقائه هناك حتى يستغرق في النوم ليعجز عن إبلاغ سيده بموعد السفينة الجديد!`,
    summaryEn: `Reaching Allahabad, Mr. Fogg generously gifts the elephant Kiouni to their faithful guide and buys European travel garments for Mrs. Aouda. Learning that she has a wealthy merchant relative in Hong Kong, Fogg offers to escort her there under his protection.

Upon reaching Calcutta on October 25, colonial police arrest Fogg and Passepartout. Detective Fix, having arrived earlier, organized three Malabar priests to press charges over the desecration of their temple. Rather than submitting to eight days of imprisonment, Fogg immediately deposits two thousand pounds in bail money, reclaiming Passepartout and hurrying straight onto the outbound steamship Rangoon.

On November 6, the ship berths in Hong Kong. Inquiry reveals that Mrs. Aouda's relative has permanently relocated to the Netherlands; Fogg willingly invites her to accompany them to Europe.

When Passepartout visits the maritime booking office, he learns that the Japanese steamer Carnatic has finished repairs early and will sail that very evening instead of the following morning. Before Passepartout can notify his master, Detective Fix intercepts him in a waterfront tavern. Fix reveals his true identity and offers Passepartout part of the reward money to assist in detaining Fogg. When Passepartout fiercely defends his master's honor, Fix drugs his tobacco pipe, leaving him unconscious in the den so that Fogg will miss the vessel.`,
    keyEvents: [
      "مكافأة الدليل الهندي وإهداؤه الفيل كيوني",
      "محاكمة كلكتا ودفع فوج غرامة 2,000 جنيه للخروج الفوري",
      "السفر بسفينة 'رانغون' إلى هونغ كونغ",
      "اكتشاف سفر قريب عودة إلى هولندا وعزم فوج على اصطحابها",
      "مكيدة فيكس لتخدير باسبارتو في مقهى هونغ كونغ لمنع فوج من ركوب السفينة"
    ],
    keyEventsEn: [
      "Fogg presents Kiouni the elephant as a gift to their loyal Indian guide",
      "Calcutta courtroom trial: Fogg posts two thousand pounds bail without hesitation",
      "Voyage aboard the Rangoon across the South China Sea toward Hong Kong",
      "Discovery that Mrs. Aouda's cousin has moved to Europe, prompting Fogg to sponsor her journey",
      "Fix drugs Passepartout in a waterfront tavern to prevent him from alerting Fogg about the Carnatic"
    ],
    locations: ["الله آباد (الهند)", "كلكتا", "خليج البنغال", "بحر الصين الجنوبي", "هونغ كونغ"],
    locationsEn: ["Allahabad (India)", "Calcutta", "Bay of Bengal", "South China Sea", "Hong Kong"],
    transport: ["قطار", "سفينة 'رانغون'"],
    transportEn: ["East Indian Railway Train", "Steamship Rangoon"],
    famousQuotes: [
      { speaker: "باسبارتو للمحقق فيكس", text: "سيدي رجل صالح وكريم، وأنت مخطئ تماماً!" },
      { speaker: "السيدة عودة", text: "أشكرك على إنقاذ حياتي يا سيد فوج." }
    ],
    famousQuotesEn: [
      { speaker: "Jean Passepartout", text: "My master is the kindest, most honorable gentleman living, and you are thoroughly mistaken in your suspicions." },
      { speaker: "Mrs Aouda", text: "You have delivered me from a dreadful fate, Mr Fogg. I shall never forget your chivalry." }
    ]
  },
  {
    id: 4,
    titleEn: "Chapter 4: From Hong Kong to Japan",
    titleAr: "الفصل الرابع: من هونغ كونغ إلى اليابان",
    pages: "الصفحات 27 - 32",
    pagesEn: "Pages 27 through 32",
    summaryAr: `يستيقظ باسبارتو متأخراً في مقهى هونغ كونغ ويركض بمفرده إلى الميناء ليصعد إلى السفينة 'كارناتيك' معتقداً أن سيده على متنها. في الصباح يكتشف فوج والأميرة عودة رحيل السفينة وغياب باسبارتو.
يبحث فوج في الميناء ويقنع القبطان جون بانسبي صاحب القارب الصغير 'تانكادير' بنقلهم إلى شنغهاي مقابل 100 جنيه يومياً ومكافأة 200 جنيه للوصول في الموعد للحاق بالسفينة الأمريكية الكبيرة 'جنرال غرانت' المغادرة إلى أمريكا. يرافقهما فيكس متظاهراً بالصداقة.
رغم العواصف البحرية الشديدة، يصلون شنغهاي في اللحظة التي تخرج فيها 'جنرال غرانت' من الميناء، فيعطي القبطان إشارة استغاثة ويتوقف الباخرة ليصعد الجميع.
في هذه الأثناء، يصل باسبارتو إلى يوكوهاما مفلساً، ويضطر للعمل كلاعب أكروبات في سيرك 'باتولكار'. عند وصول فوج وعودة إلى يوكوهاما في 14 نوفمبر، يبحثان عنه ويزوران السيرك صدفة، فيلمح باسبارتو سيده ويصرخ تاركاً الهرم البشري ليسقط جميع البهلوانات! يدفع فوج تعويضاً لمدير السيرك، ويلتئم شملهم مجدداً ويبحرون جميعاً إلى سان فرانسيسكو عبر المحيط الهادئ، بينما يتلقى فيكس أخيراً أمر القبض لكنه لا يستطيع تنفيذه خارج أراضي بريطانيا!`,
    summaryEn: `Passepartout awakens in a daze, stumbles down to the harbor, and manages to board the Carnatic just as she departs for Yokohama, wrongly assuming Fogg and Mrs. Aouda are already seated on board. The next morning, Fogg discovers that his servant has vanished and the steamer has sailed.

Remaining composed, Fogg locates Captain John Bunsby, skipper of a small twenty-ton pilot boat named Tankadere. For one hundred pounds per day and a two-hundred-pound completion bonus, Bunsby agrees to brave open waters and transport them five hundred miles north to Shanghai to intercept the American liner General Grant. Detective Fix joins them under the guise of an stranded passenger.

Surviving a violent typhoon that threatens to capsize their vessel, they enter Shanghai harbor just as the General Grant is steaming out to sea. Captain Bunsby hoists a distress flag and fires his signal cannon; the American liner slows down, allowing Fogg, Mrs. Aouda, and Fix to climb aboard.

In Yokohama, Passepartout arrives penniless and wandering without food. In desperation, he joins Batulcar's theatrical acrobat company, donning oversized artificial wings to participate in a human pyramid called the Long Noses. On November 14, Fogg and Mrs. Aouda attend the performance while awaiting their connecting vessel. Catching sight of Fogg in the audience, Passepartout cries aloud and rushes from the formation, sending the acrobats tumbling to the floor. Fogg reimburses the outraged manager, embraces his loyal servant, and boards the trans-Pacific steamer toward North America.`,
    keyEvents: [
      "صعود باسبارتو وحيداً على سفينة كارناتيك لليابان",
      "مغامرة الإبحار بالقارب الصغير 'تانكادير' وسط العواصف إلى شنغهاي",
      "إشارة القبطان بانسبي للحاق بسفينة جنرال غرانت في البحر",
      "عمل باسبارتو كبهلوان في سيرك باتولكار بيوكوهاما لإنقاذ نفسه من الجوع",
      "اللقاء الكوميدي والمؤثر في السيرك وسداد فوج للتعويضات"
    ],
    keyEventsEn: [
      "Passepartout boards the Carnatic alone in a disoriented state",
      "Fogg charts Captain Bunsby's small pilot vessel Tankadere to challenge a typhoon",
      "A signal flare and cannon salute catch the American steamer General Grant at Shanghai",
      "Passepartout performs in Batulcar's acrobatic troupe in Yokohama to earn food",
      "Emotional reunion during the human pyramid performance; Fogg pays damages and departs"
    ],
    locations: ["هونغ كونغ", "شنغهاي (الصين)", "يوكوهاما (اليابان)", "المحيط الهادئ"],
    locationsEn: ["Hong Kong", "Shanghai (China)", "Yokohama (Japan)", "Pacific Ocean"],
    transport: ["القارب الصغير 'تانكادير'", "السفينة البخارية 'جنرال غرانت'"],
    transportEn: ["Pilot Boat Tankadere", "Pacific Mail Steamer General Grant"],
    famousQuotes: [
      { speaker: "فوج للقبطان بانسبي", text: "سأدفع لك 100 جنيه يومياً و200 إضافية إن وصلنا قبل مغادرة السفينة." },
      { speaker: "باسبارتو في السيرك", text: "سيدي فوج! ها أنا هنا!" }
    ],
    famousQuotesEn: [
      { speaker: "Phileas Fogg", text: "Captain, I offer you one hundred pounds per day, with an additional two-hundred-pound reward if we reach Shanghai before the American packet sails." },
      { speaker: "Jean Passepartout", text: "Master! It is my master! Here I am!" }
    ]
  },
  {
    id: 5,
    titleEn: "Chapter 5: The Journey Across America",
    titleAr: "الفصل الخامس: الرحلة عبر أمريكا",
    pages: "الصفحات 35 - 40",
    pagesEn: "Pages 35 through 40",
    summaryAr: `على متن 'جنرال غرانت'، يلتقي باسبارتو بفيكس ويشبعه ضرباً، لكن فيكس يوضح أنه بما أن أمر القبض لا يسري في أمريكا، فإنه الآن في مصلحته مساعدة فوج على الوصول سريعاً لبريطانيا ليعتقله هناك! فيتفقان على الهدنة.
يصلون سان فرانسيسكو في 3 ديسمبر، وأثناء تجولهم يشهدون شجاراً انتخابياً عنيفاً بين أنصار كامرفيلد ومانديبوي لمنصب القاضي، ويتلقى فيكس لكمة كانت موجهة لفوج دفاعاً عنه.
يستقلون قطار نيويورك عابرين القارة الأمريكية. في الطريق يعبر القطار جسراً متهالكاً بسرعة فائقة وينهار الجسر خلفهم فوراً في النهر.
ثم تهاجم قبيلة 'السيو' الهندية القطار بالبنادق والخيول. يقاتل باسبارتو بشجاعة مفرطة لكن المقاتلين يأسروه ويأخذونه بعيداً. يرفض فوج التخلي عن خادمه، وينطلق بصحبة جنود أمريكيين من معسكر بلدة كيرني وينجح في تحريره وإعادته سالماً.
لكن القطار كان قد غادر، وتتساقط الثلوج الكثيفة لتحبسهم. يقترح رجل مسن استخدام 'زلاجة ذات أشرعة' تجري على الجليد بفعل الرياح. ينطلقون بسرعة هائلة عبر البراري الثلجية حتى يصلون إلى أوماها، ومنها بالقطار السريع إلى نيويورك.
يصلون نيويورك في 11 ديسمبر، لكنهم يتأخرون 45 دقيقة كاملة، وتكون سفينتهم 'تشاينا' قد أبحرت إلى ليفربول بدونهم!`,
    summaryEn: `Aboard the General Grant, Passepartout confronts Detective Fix and delivers a sound thrashing. Realizing his British arrest warrant has no validity on American soil, Fix negotiates a truce: he will do everything in his power to hasten Fogg's safe arrival in England so that he can arrest him immediately on British territory.

They reach San Francisco on December 3. During an afternoon walk, they get caught in an election brawl between opposing factions, where Fix steps in front of a heavy punch directed at Fogg.

Boarding the Pacific Railroad toward New York, the travelers cross the North American continent. At Medicine Bow, the train driver accelerates to maximum speed to leap over a damaged suspension bridge, which crashes into the ravine directly behind their caboose.

Near Fort Kearney, a war party of two hundred Sioux warriors assaults the moving train. While bravely disconnecting the locomotive engine from the passenger carriages to prevent a catastrophe, Passepartout is taken prisoner. Refusing to abandon his servant, Fogg volunteers alongside thirty soldiers to venture into the wilderness, successfully liberating Passepartout at sunrise.

Because the train continued on and heavy snow blankets the plains, an ingenious American named Mudge constructs a wind-propelled sailing sledge. Skating across frozen snowdrifts at forty miles an hour, they reach Omaha, board an express train, and arrive in New York on December 11—only to discover that the Liverpool packet China had sailed forty-five minutes earlier.`,
    keyEvents: [
      "اتفاق الهدنة الغريب بين باسبارتو والمحقق فيكس",
      "الشجار الانتخابي في شوارع سان فرانسيسكو ولكمة فيكس",
      "القفز فوق الجسر المتهالك بالقطار قبل انهياره",
      "هجوم السيو، أسر باسبارتو، وإنقاذ فوج البطولي له بصحبة الجنود",
      "ركوب الزلاجة الشراعية على الثلوج وصولاً إلى أوماها ثم نيويورك وفوات السفينة"
    ],
    keyEventsEn: [
      "Truce struck between Passepartout and Detective Fix to accelerate progress toward British territory",
      "San Francisco municipal election riot: Fix absorbs a punch intended for Fogg",
      "The locomotive crosses a crumbling suspension bridge at full speed before it collapses",
      "Sioux attack on the train; Fogg leads a rescue squad to liberate captured Passepartout",
      "Wind-powered ice sledge carries the party across winter prairies to Omaha, but the China is missed"
    ],
    locations: ["سان فرانسيسكو", "بلدة كيرني", "أوماها", "نيويورك (الولايات المتحدة)"],
    locationsEn: ["San Francisco", "Fort Kearney", "Omaha", "New York (United States)"],
    transport: ["قطار المحيط الهادئ العابر للقارات", "زلاجة بأشرعة (Sledge with sails)", "قطار سريع"],
    transportEn: ["Transcontinental Railway Express", "Wind-Powered Ice Sledge", "Eastern Express Train"],
    famousQuotes: [
      { speaker: "فيكس لباسبارتو", text: "الآن لن أعطله.. سأساعده ليصل أسرع، وعندما نصل إنجلترا سأقبض عليه!" },
      { speaker: "باسبارتو", text: "أنا آسف يا سيدي فوج، لقد جعلتك تتأخر مجدداً بسبب اختطافي!" }
    ],
    famousQuotesEn: [
      { speaker: "Detective Fix", text: "My interest is now completely aligned with yours. I want Mr Fogg in England without a single minute wasted." },
      { speaker: "Jean Passepartout", text: "Master, forgive me! My capture has cost you your precious train and your fortune." }
    ]
  },
  {
    id: 6,
    titleEn: "Chapter 6: Across the Atlantic to England",
    titleAr: "الفصل السادس: عبر الأطلسي إلى إنجلترا",
    pages: "الصفحات 43 - 51",
    pagesEn: "Pages 43 through 51",
    summaryAr: `في ميناء نيويورك، يجد فوج السفينة التجارية 'هنرييتا' بقيادة القبطان الصارم أندرو سبيدي المتجهة لفرنسا، ويرفض القبطان التوجه لليفربول. يدفع له فوج 8,000 جنيه (2,000 لكل راكب) لركوبها.
في عرض البحر، يستميل فوج البحارة بالمال، ويحبسون القبطان سبيدي في قمرته ويحولون وجهة السفينة مباشرة نحو ليفربول!
بعد أربعة أيام ينفد الفحم، فيطلق فوج سراح سبيدي ويشتري منه كل الهيكل والأجزاء الخشبية للسفينة بـ 30,000 جنيه ليحرقوها كوقود للمراجل! يوافق سبيدي بسرور للمبلغ الضخم.
تصل السفينة المجردة من الخشب إلى كوينزتاون غرب أيرلندا. يستقلون القطار لدبلن ثم سفينة سريعة إلى ليفربول، ليصلوا السبت 21 ديسمبر الساعة 11:40 صباحاً (تبقى 6 ساعات عن موعد النادي بلندن).
في تلك اللحظة الحاسمة، يتقدم المحقق فيكس ويقبض على فيلياس فوج ويضعه في السجن!
في الساعة 2:30 ظهراً، يعود فيكس معتذراً بحسرة: لقد تم القبض على اللص الحقيقي (جيمس ستراند) قبل ثلاثة أيام!
يخرج فوج غاضباً ويلكم فيكس، ثم يستأجر قطاراً خاصاً سريعاً نحو لندن، لكنه يصل محطة لندن الساعة 8:50 مساءً.. متأخراً بخمس دقائق كاملة عن موعد الرهان (8:45)!
يعود فوج لمنزله بائساً معتقداً أنه خسر كل أمواله. في مساء اليوم التالي يطلب التحدث مع عودة معتذراً لفقره، لكن عودة تطلب منه الزواج بحب وامتنان، فيوافق ويفرح باسبارتو الذي يسرع لترتيب موعد الزفاف مع الكاهن يوم الاثنين 23 ديسمبر.
وهناك يتفاجأ باسبارتو بأن الغد ليس الاثنين، بل هو الأحد، وأن اليوم السبت 21 ديسمبر! لقد كسبوا يوماً كاملاً برحلتهم شرقاً حول محيط الكرة الأرضية!
يصرخ باسبارتو لفوج: 'اليوم السبت! لا يزال هناك وقت!' يركب فوج عربة خيل مسرعة ويصل قاعة نادي الإصلاح في الدقيقة 8:44 مساءً قبل ثوانٍ من انتهاء الوقت، معلناً فوزه بالـ 20,000 جنيه وسط دهشة الجميع!
وفي صباح الاثنين يتزوج فوج من السيدة عودة، ويعود باسبارتو لحياته الهادئة في لندن شاكراً ربه على عدم السفر ثانية.`,
    summaryEn: `At the port of New York, Fogg finds the trading cargo ship Henrietta, commanded by Captain Andrew Speedy, who flatly refuses to sail to Liverpool. Fogg offers two thousand dollars per passenger to carry them toward Bordeaux, France.

Once at sea, Fogg bribes the crew, confines Captain Speedy to his quarters, and alters their course directly toward Liverpool. When fuel supplies run out midway across the Atlantic, Fogg releases the captain and purchases all wooden superstructures, furniture, and decking for thirty thousand dollars to feed the boilers.

The stripped ship arrives at Queenstown in southern Ireland. Taking an express mail train to Dublin and a fast steamer to Liverpool, Fogg lands on British soil on Saturday, December 21, at twenty minutes before noon—leaving ample time to reach London before eight forty-five.

At that exact moment, Detective Fix steps forward, places his hand on Fogg's shoulder, and arrests him under the Scotland Yard warrant. Fogg is locked in a customs cell until half-past two, when Fix returns trembling with apologies: the authentic robber, James Strand, was captured three days earlier.

Released at once, Fogg knocks Fix to the ground and charters a private train to London. Because of rail delays, he pulls into the London terminus at ten minutes to nine—five minutes past the deadline. Believing his fortune is gone and the wager lost, Fogg shuts himself in his residence.

The following evening, Fogg apologizes to Mrs. Aouda for exposing her to poverty. Overcome with affection and admiration, Mrs. Aouda asks him to marry her. Deeply moved, Fogg accepts and sends Passepartout to reserve the parish clergyman for Monday morning.

At the reverend's house, Passepartout is astounded to learn that tomorrow is not Monday, but Sunday—meaning today is Saturday, December 21! By constantly traveling eastward toward the sun, they had shortened each day and gained twenty-four full hours without realizing it.

Passepartout sprints home, shouting the news. Fogg hails a horse carriage and arrives in the salon of the Reform Club at eight forty-four, announcing his return seconds before the clock strikes. Having preserved his honor and won the wager, Fogg marries Mrs. Aouda on Monday morning, while Passepartout happily retires to a tranquil life.`,
    keyEvents: [
      "استئجار سفينة 'هنرييتا' وحبس القبطان سبيدي وتحويل وجهتها",
      "شراء أخشاب السفينة بـ 30,000 جنيه وحرقها للوصول في الموعد",
      "الوصول لليفربول واعتقال فيكس لفوج في اللحظة الحرجة",
      "ظهور براءة فوج بعد اكتشاف القبض على اللص الحقيقي جيمس ستراند",
      "الوصول للندن متأخراً بـ 5 دقائق وظن الخسارة التامة",
      "عرض الأميرة عودة الزواج من فوج في لحظة فقره وتواضعه",
      "اكتشاف سر اليوم الإضافي بفضل الدوران شرقاً حول الأرض وفوز فوج بالرهان!"
    ],
    keyEventsEn: [
      "Chartering the Henrietta; the crew locks Captain Speedy away to divert toward Liverpool",
      "Purchasing thirty thousand dollars worth of ship timber to burn for engine fuel",
      "Arrival at Liverpool, followed by Detective Fix's catastrophic wrongful arrest",
      "Discovery that the real bank thief, James Strand, was already jailed in London",
      "Late arrival at London terminal seemingly forfeits the twenty-thousand-pound wager",
      "Mrs. Aouda proposes marriage to Fogg during his quiet moment of apparent ruin",
      "Passepartout uncovers the time zone gain; Fogg enters the Reform Club to claim victory"
    ],
    locations: ["نيويورك", "المحيط الأطلسي", "كوينزتاون (أيرلندا)", "دبلن", "ليفربول", "لندن (نادي الإصلاح)"],
    locationsEn: ["New York", "Atlantic Ocean", "Queenstown (Ireland)", "Dublin", "Liverpool", "London (Reform Club)"],
    transport: ["سفينة 'هنرييتا'", "قطار أيرلندا", "سفينة ليفربول", "قطار خاص إلى لندن", "عربة خيول مسرعة"],
    transportEn: ["Steamer Henrietta", "Irish Mail Train", "Irish Sea Packet", "Chartered Special Train", "Hansom Cab"],
    famousQuotes: [
      { speaker: "السيدة عودة", text: "هل تتزوجني يا سيد فوج؟" },
      { speaker: "باسبارتو يصرخ", text: "سيدي فوج، اليوم ليس الأحد.. اليوم هو السبت 21 ديسمبر! لقد كسبنا يوماً كاملاً!" },
      { speaker: "فيلياس فوج", text: "ها أنا ذا يا سادة، لقد فزت بالرهان وطفت العالم في ثمانين يوماً!" }
    ],
    famousQuotesEn: [
      { speaker: "Mrs Aouda", text: "Mr Fogg, will you accept me for your wife?" },
      { speaker: "Jean Passepartout", text: "Master! It is not Sunday! It is Saturday! We have gained a whole day by traveling eastward!" },
      { speaker: "Phileas Fogg", text: "Here I am, gentlemen! I have returned on time." }
    ]
  }
];

export const CHARACTERS: Character[] = [
  {
    id: "fogg",
    nameAr: "فيلياس فوج (Phileas Fogg)",
    nameEn: "Phileas Fogg",
    roleAr: "البطل والنبيل الإنجليزي الهادئ",
    roleEn: "Protagonist and wealthy English gentleman",
    traits: ["دقيق جداً في الوقت", "هادئ الأعصاب", "كريم وشهم", "شجاع وصادق"],
    traitsEn: ["Exact and punctual", "Unflappable composure", "Deeply generous", "Honorable and resolute"],
    descriptionAr: "رجل إنجليزي نبيل ووسيم يعيش في حدائق برلينغتون بلندن. غني جداً، يعيش بانتظام حسابي صارم. قبل التحدي بقطع العالم في 80 يوماً وضحى بجزء كبير من ثروته لحماية الآخرين.",
    descriptionEn: "A reserved, mathematical bachelor residing in Savile Row, London. He measures every activity down to the exact second. Driven by principles of integrity and quiet confidence, he risks his entire fortune to keep his word while demonstrating profound personal courage.",
    avatarIcon: "UserCheck"
  },
  {
    id: "passepartout",
    nameAr: "جان باسبارتو (Jean Passepartout)",
    nameEn: "Jean Passepartout",
    roleAr: "خادم فوج الفرنسي المخلص وخفيف الظل",
    roleEn: "Fogg's loyal and resourceful French valet",
    traits: ["شديد الوفاء", "مغامر ورياضي بهلواني", "عفوي وشجاع", "ذكي وحركي"],
    traitsEn: ["Devoted fidelity", "Acrobatic agility", "Good-natured humor", "Brave and quick-thinking"],
    descriptionAr: "شاب فرنسي جاء لإنجلترا بحثاً عن وظيفة هادئة، لكنه وجد نفسه في مغامرة عالمية مذهلة. أنقذ الأميرة عودة من المحرقة بشجاعة، وعمل بهلوانياً باليابان، واكتشف خطأ التقويم وأنقذ الرهان في اللحظة الأخيرة.",
    descriptionEn: "A talented former circus gymnast, firefighter, and singer who joined Mr. Fogg's household hoping for an uneventful daily routine. Instead, he heroically rescues Mrs. Aouda, survives Indian capture in America, and ultimately deduces the calendar gain that clinches the wager.",
    avatarIcon: "Smile"
  },
  {
    id: "fix",
    nameAr: "المحقق فيكس (Detective Fix)",
    nameEn: "Detective Fix",
    roleAr: "محقق سكوتلاند يارد العنيد والمخطئ",
    roleEn: "Scotland Yard investigator pursuing Fogg",
    traits: ["شديد الشك", "مثابر وعنيد", "متقلب الموقف", "يسعى لمكافأة القبض"],
    traitsEn: ["Suspicious mind", "Tenacious investigator", "Self-interested", "Duty-bound"],
    descriptionAr: "محقق شرطة مكلف بالقبض على سارق بنك إنجلترا. ظن أن فوج هو اللص بسبب تطابق الملامح ومبلغ المال الضخم. لاحقه عبر القارات وتسبب في العديد من العراقيل حتى اكتشف براءة فوج في النهاية.",
    descriptionEn: "An ambitious detective stationed at Suez who mistakes Fogg for the gentleman who robbed fifty thousand pounds from the Bank of England. Fix tracks Fogg across continents, engineering roadblocks before learning with remorse that the real culprit was arrested days earlier.",
    avatarIcon: "Search"
  },
  {
    id: "aouda",
    nameAr: "الأميرة عودة (Mrs Aouda)",
    nameEn: "Mrs Aouda",
    roleAr: "الأميرة الهندية النبيلة والوفية",
    roleEn: "Educated Indian noblewoman",
    traits: ["رقيقة وأنيقة", "تتحدث الإنجليزية بطلاقة", "ممتنة ووفية", "شجاعة"],
    traitsEn: ["Gentle and refined", "Fluent English speaker", "Deeply grateful", "Steadfast courage"],
    descriptionAr: "أميرة شابة جميلة توفي زوجها الأمير وأراد الكهنة حرقها حية معه في الهند. أنقذها فوج وباسبارتو ورافقتهم حتى نهاية الرحلة، وتزوجت فيلياس فوج بعد إعلان فوزه بالرهان.",
    descriptionEn: "A European-educated Indian princess whose father was an English merchant in Bombay. Rescued from forced cremation by Fogg and Passepartout, she joins the expedition, proves courageous during danger, and marries Mr. Fogg in London.",
    avatarIcon: "Heart"
  },
  {
    id: "stuart",
    nameAr: "المهندس ستيوارت (Mr Stuart)",
    nameEn: "Andrew Stuart",
    roleAr: "صديق فوج وصاحب الرهان",
    roleEn: "Civil engineer and Reform Club companion",
    traits: ["مهندس واقعي", "منافس نزيه"],
    traitsEn: ["Pragmatic thinker", "Fair-minded opponent"],
    descriptionAr: "صديق فوج في نادي الإصلاح بلندن، جادل بأن الحوادث والطقس تمنع الدوران حول العالم في 80 يوماً ودفع 20,000 جنيه رهان لفوج.",
    descriptionEn: "A partner at the Reform Club whist table who contended that unforeseen storms and railway delays made circling the planet in eighty days an impractical fantasy, initiating the twenty-thousand-pound wager.",
    avatarIcon: "Award"
  },
  {
    id: "speedy",
    nameAr: "القبطان أندرو سبيدي (Captain Speedy)",
    nameEn: "Captain Andrew Speedy",
    roleAr: "قبطان سفينة هنرييتا الصارم",
    roleEn: "Gruff captain of the commercial steamer Henrietta",
    traits: ["محب للمال", "عنيد", "عملي"],
    traitsEn: ["Hard-nosed merchant", "Stubborn character", "Pragmatic attitude"],
    descriptionAr: "قبطان سفينة الشحن التجارية التي أخذت فوج من نيويورك. رفض تغيير وجهته نحو إنجلترا، فاحتجزه الطاقم، وباع أخشاب سفينته لفوج بـ 30,000 جنيه لتُحرق وقوداً.",
    descriptionEn: "A crusty American merchant mariner from Cardiff who refuses to detour to Liverpool. After being temporarily confined in his cabin, he accepts sixty thousand dollars to sell his ship's wooden superstructures to be burned for engine fuel.",
    avatarIcon: "Ship"
  }
];

export const ROUTE_STOPS: RouteStop[] = [
  {
    id: 1,
    locationAr: "لندن، بريطانيا",
    locationEn: "London, England",
    country: "المملكة المتحدة",
    countryEn: "United Kingdom",
    arrivalDate: "2 أكتوبر 1872",
    arrivalDateEn: "October 2, 1872",
    transportMode: "قطار وسفينة",
    transportModeEn: "Express Train and Packet Steamer",
    transportIcon: "Train",
    descriptionAr: "بداية الرهان والانطلاق في تمام الساعة 8:45 مساءً نحو دوفر ثم فرنسا.",
    descriptionEn: "Departure from the Reform Club at 8:45 in the evening, boarding the night express to Dover and crossing the English Channel."
  },
  {
    id: 2,
    locationAr: "السويس وبورسعيد، مصر",
    locationEn: "Suez and Port Said, Egypt",
    country: "مصر",
    countryEn: "Egypt",
    arrivalDate: "9 أكتوبر 1872",
    arrivalDateEn: "October 9, 1872",
    transportMode: "السفينة البخارية منغوليا",
    transportModeEn: "Peninsular and Oriental Steamer Mongolia",
    transportIcon: "Ship",
    descriptionAr: "العبور عبر قناة السويس، والمحقق فيكس يبدأ مراقبة فوج ويطلب إذن الاعتقال.",
    descriptionEn: "Transit through the Suez Canal; Detective Fix notices Fogg and sends a priority telegraph requesting an arrest warrant."
  },
  {
    id: 3,
    locationAr: "بومباي، الهند",
    locationEn: "Bombay, India",
    country: "الهند",
    countryEn: "India",
    arrivalDate: "20 أكتوبر 1872 (مبكرين بيومين)",
    arrivalDateEn: "October 20, 1872 (Two Days Ahead)",
    transportMode: "سفينة منغوليا ثم الفيل كيوني",
    transportModeEn: "Steamship Mongolia and Kiouni the Elephant",
    transportIcon: "Footprints",
    descriptionAr: "حادثة معبد تلة ماليبار، انقطاع السكة في خولبي، وركوب الفيل كيوني وإنقاذ عودة في بيلاجي.",
    descriptionEn: "Malabar Hill temple incident; railway stops at Kholby; purchase of Kiouni the elephant and heroic rescue of Mrs. Aouda at Pillaji."
  },
  {
    id: 4,
    locationAr: "كلكتا، الهند",
    locationEn: "Calcutta, India",
    country: "الهند",
    countryEn: "India",
    arrivalDate: "25 أكتوبر 1872",
    arrivalDateEn: "October 25, 1872",
    transportMode: "قطار هندي",
    transportModeEn: "East Indian Railway Train",
    transportIcon: "Train",
    descriptionAr: "المحاكمة وسداد فوج كفالة 2000 جنيه، ثم ركوب سفينة رانغون نحو الصين.",
    descriptionEn: "Court trial orchestrated by Fix; Fogg posts two thousand pounds bail without delay and embarks on the steamship Rangoon."
  },
  {
    id: 5,
    locationAr: "هونغ كونغ",
    locationEn: "Hong Kong",
    country: "هونغ كونغ",
    countryEn: "Hong Kong",
    arrivalDate: "6 نوفمبر 1872",
    arrivalDateEn: "November 6, 1872",
    transportMode: "سفينة رانغون ثم قارب تانكادير",
    transportModeEn: "Steamship Rangoon and Pilot Boat Tankadere",
    transportIcon: "Anchor",
    descriptionAr: "تنويم باسبارتو في المقهى، واستئجار قارب تانكادير للإبحار وسط العواصف إلى شنغهاي.",
    descriptionEn: "Passepartout is drugged in a tavern by Fix; Fogg hires the pilot vessel Tankadere to challenge a storm toward Shanghai."
  },
  {
    id: 6,
    locationAr: "يوكوهاما، اليابان",
    locationEn: "Yokohama, Japan",
    country: "اليابان",
    countryEn: "Japan",
    arrivalDate: "13 - 14 نوفمبر 1872",
    arrivalDateEn: "November 13 to 14, 1872",
    transportMode: "سفينة جنرال غرانت",
    transportModeEn: "Pacific Mail Steamer General Grant",
    transportIcon: "Ship",
    descriptionAr: "العثور على باسبارتو في سيرك باتولكار البهلواني، والانطلاق عبر المحيط الهادئ.",
    descriptionEn: "Fogg discovers Passepartout performing in Batulcar's acrobatic troupe; company sails across the Pacific Ocean."
  },
  {
    id: 7,
    locationAr: "سان فرانسيسكو، أمريكا",
    locationEn: "San Francisco, USA",
    country: "الولايات المتحدة",
    countryEn: "United States of America",
    arrivalDate: "3 ديسمبر 1872",
    arrivalDateEn: "December 3, 1872",
    transportMode: "سفينة جنرال غرانت",
    transportModeEn: "Pacific Mail Steamer General Grant",
    transportIcon: "Ship",
    descriptionAr: "شجار الانتخابات، والتحالف المؤقت مع فيكس للوصول إلى نيويورك.",
    descriptionEn: "Encounter with election day crowds; Detective Fix agrees to assist Fogg's speed toward British jurisdiction."
  },
  {
    id: 8,
    locationAr: "كيرني وأوماها",
    locationEn: "Fort Kearney and Omaha",
    country: "الولايات المتحدة",
    countryEn: "United States of America",
    arrivalDate: "ديسمبر 1872",
    arrivalDateEn: "December 8, 1872",
    transportMode: "قطار ثم زلاجة شراعية",
    transportModeEn: "Transcontinental Train and Wind-Powered Ice Sledge",
    transportIcon: "Wind",
    descriptionAr: "هجوم قبيلة السيو، تحرير باسبارتو، وركوب الزلاجة الشراعية المبتكرة عبر الجليد.",
    descriptionEn: "Sioux assault on the train; Fogg leads a military detachment to liberate Passepartout; winter ice sledge voyage to Omaha."
  },
  {
    id: 9,
    locationAr: "نيويورك، أمريكا",
    locationEn: "New York, USA",
    country: "الولايات المتحدة",
    countryEn: "United States of America",
    arrivalDate: "11 ديسمبر 1872",
    arrivalDateEn: "December 11, 1872",
    transportMode: "قطار سريع",
    transportModeEn: "Eastern Express Railway",
    transportIcon: "Train",
    descriptionAr: "الوصول متأخرين 45 دقيقة، واستئجار سفينة هنرييتا الصعبة مع القبطان سبيدي.",
    descriptionEn: "Arrival forty-five minutes past the departure of the China; charter of the commercial steamer Henrietta under Captain Speedy."
  },
  {
    id: 10,
    locationAr: "ليفربول، بريطانيا",
    locationEn: "Liverpool, England",
    country: "المملكة المتحدة",
    countryEn: "United Kingdom",
    arrivalDate: "21 ديسمبر 1872 (11:40 صباحاً)",
    arrivalDateEn: "December 21, 1872 (11:40 in the Morning)",
    transportMode: "سفينة هنرييتا ثم قطار أيرلندا وسفينة",
    transportModeEn: "Steamer Henrietta, Irish Express Train, and Fast Packet",
    transportIcon: "ShieldAlert",
    descriptionAr: "فيكس يقبض على فوج ظلماً، ثم تتضح البراءة بعد ساعتين.",
    descriptionEn: "Detective Fix executes the delayed arrest warrant; the mistake is cleared when the true thief is discovered."
  },
  {
    id: 11,
    locationAr: "لندن (نادي الإصلاح)",
    locationEn: "London (The Reform Club)",
    country: "المملكة المتحدة",
    countryEn: "United Kingdom",
    arrivalDate: "21 ديسمبر 1872 (8:44 مساءً)",
    arrivalDateEn: "December 21, 1872 (8:44 in the Evening)",
    transportMode: "قطار خاص وعربة خيل",
    transportModeEn: "Special Chartered Locomotive and Hansom Cab",
    transportIcon: "CheckCircle",
    descriptionAr: "اكتشاف فارق التوقيت وكسب يوم كامل، والفوز بالرهان قبل دقيقة واحدة!",
    descriptionEn: "Discovery that traveling eastward gained twenty-four hours; Fogg enters the Reform Club salon to win the wager."
  }
];

export const BOOK_ACTIVITIES_SOLUTIONS: ActivityItem[] = [
  {
    chapterId: 1,
    exerciseTitle: "حل تمارين الفصل الأول (Mr Fogg Leaves London - صفحة 8)",
    exerciseTitleEn: "Chapter 1 Exercise Solutions (Page 8 - True or False)",
    type: "true_false",
    questions: [
      {
        q: "Phileas Fogg has got children. (هل لدى فوج أطفال؟)",
        qEn: "Statement 1: Phileas Fogg has got children.",
        answer: "False (خطأ) - ليس لديه زوجة أو أطفال.",
        answerEn: "False. Phileas Fogg has neither a wife nor children."
      },
      {
        q: "John Foster stopped working for Fogg. (هل توقف جيمس فوستر عن العمل؟)",
        qEn: "Statement 2: James Foster stopped working for Phileas Fogg.",
        answer: "True (صحيح) - طرده فوج لأن ماء الحمام لم يكن دافئاً بما يكفي.",
        answerEn: "True. Mr. Fogg dismissed James Foster because the shaving water was not heated to eighty-six degrees."
      },
      {
        q: "Passepartout wants a quiet job. (هل أراد باسبارتو عملاً هادئاً؟)",
        qEn: "Statement 3: Jean Passepartout wants a quiet job.",
        answer: "True (صحيح) - كان يبحث عن وظيفة هادئة مع رجل إنجليزي هادئ.",
        answerEn: "True. Passepartout sought a peaceful, predictable master after years of turbulent jobs in France."
      },
      {
        q: "Fogg wants to go around the world in eighty days.",
        qEn: "Statement 4: Fogg wants to go around the world in eighty days.",
        answer: "True (صحيح) - دخل الرهان بـ 20,000 جنيه لإثبات ذلك.",
        answerEn: "True. He wagers twenty thousand pounds that he can achieve the feat."
      },
      {
        q: "Fogg and Passepartout left London on 21st December.",
        qEn: "Statement 5: Fogg and Passepartout left London on the twenty-first of December.",
        answer: "False (خطأ) - غادرا في 2 أكتوبر وراهنا على العودة في 21 ديسمبر.",
        answerEn: "False. They left London on October 2, 1872, promising to return on December 21."
      },
      {
        q: "Fix is in Egypt when Fogg arrives there.",
        qEn: "Statement 6: Detective Fix is in Egypt when Fogg arrives there.",
        answer: "True (صحيح) - كان فيكس ينتظره في السويس بمصر.",
        answerEn: "True. Detective Fix waits at Suez to intercept the suspect."
      }
    ]
  },
  {
    chapterId: 2,
    exerciseTitle: "حل تمارين الفصل الثاني (From Egypt to India - صفحة 16 و 17)",
    exerciseTitleEn: "Chapter 2 Exercise Solutions (Pages 16 and 17 - Comprehension)",
    type: "qa",
    questions: [
      {
        q: "ما اسم السفينة التي أبحرت من إيطاليا إلى الهند؟",
        qEn: "Question 1: What was the name of the steamship sailing between Italy and India?",
        answer: "The Mongolia (منغوليا)",
        answerEn: "The Mongolia."
      },
      {
        q: "ما الملابس التي اشتراها باسبارتو في السويس؟",
        qEn: "Question 2: What items of clothing did Passepartout purchase at Suez?",
        answer: "Shirts and shoes (قمصان وأحذية)",
        answerEn: "Shirts and warm shoes."
      },
      {
        q: "لماذا لم يكمل القطار من بومباي إلى كلكتا؟",
        qEn: "Question 3: Why could the train not travel continuously from Bombay to Calcutta?",
        answer: "Because the railway wasn't finished (لأن السكة لم تكن مكتملة - متبقي 80 كم)",
        answerEn: "Because eighty kilometers of railway track between Kholby and Allahabad were not completed."
      },
      {
        q: "ما اسم الفيل الذي اشتراه فوج؟",
        qEn: "Question 4: What was the name of the elephant purchased by Mr. Fogg?",
        answer: "Kiouni (كيوني - اشتراه بـ 2,000 جنيه)",
        answerEn: "Kiouni, purchased for two thousand pounds."
      },
      {
        q: "من التي أنقذها فوج وباسبارتو في بيلاجي؟",
        qEn: "Question 5: Whom did Mr. Fogg and Passepartout rescue in Pillaji?",
        answer: "An Indian princess (الأميرة الهندية عودة)",
        answerEn: "A young Indian princess named Mrs. Aouda."
      }
    ]
  },
  {
    chapterId: 3,
    exerciseTitle: "حل تمارين الفصل الثالث (Through India to Hong Kong - صفحة 24)",
    exerciseTitleEn: "Chapter 3 Exercise Solutions (Page 24 - Comprehension)",
    type: "qa",
    questions: [
      {
        q: "ماذا أهدى فوج للأميرة عودة؟",
        qEn: "Question 1: What did Mr. Fogg buy for Mrs. Aouda in Allahabad?",
        answer: "Some clothes (فستان كاروهات ومعطف أوروبي)",
        answerEn: "A traveling dress and warm European clothes."
      },
      {
        q: "من استقبلهم في محطة قطار كلكتا؟",
        qEn: "Question 2: Who met the party at the Calcutta railway terminal?",
        answer: "An Indian policeman (شرطي هندي اعتقلهم للمحاكمة)",
        answerEn: "A police officer who escorted them to the magistrate's courtroom."
      },
      {
        q: "كم دفع فوج للقاضي كي لا يذهبوا للسجن؟",
        qEn: "Question 3: How much bail did Mr. Fogg pay the magistrate to avoid imprisonment?",
        answer: "£2,000 (ألفي جنيه إسترليني)",
        answerEn: "Two thousand pounds sterling."
      },
      {
        q: "من لم يُرد لفوج أن يلحق بسفينة كارناتيك؟",
        qEn: "Question 4: Who deliberately attempted to prevent Fogg from boarding the Carnatic?",
        answer: "Detective Fix (المحقق فيكس - قام بتنويم باسبارتو في المقهى)",
        answerEn: "Detective Fix, who drugged Passepartout's pipe in a harbor tavern."
      }
    ]
  },
  {
    chapterId: 4,
    exerciseTitle: "حل تمارين الفصل الرابع (From Hong Kong to Japan - صفحة 32 و 33)",
    exerciseTitleEn: "Chapter 4 Exercise Solutions (Pages 32 and 33 - Comprehension)",
    type: "qa",
    questions: [
      {
        q: "كيف سافر فوج وعودة وفيكس من هونغ كونغ لشنغهاي؟",
        qEn: "Question 1: How did Fogg, Mrs. Aouda, and Fix reach Shanghai from Hong Kong?",
        answer: "In a small boat called the Tankadere (في قارب صغير يدعى تانكادير مع القبطان بانسبي)",
        answerEn: "Aboard Captain John Bunsby's twenty-ton pilot vessel, the Tankadere."
      },
      {
        q: "ما هي الوظيفة التي وجدها باسبارتو في يوكوهاما باليابان؟",
        qEn: "Question 2: What employment did Passepartout take in Yokohama, Japan?",
        answer: "Acrobat at Batulcar's circus (بهلوان/لاعب أكروبات في سيرك باتولكار)",
        answerEn: "An acrobat performing in Batulcar's theater company."
      },
      {
        q: "ماذا حدث للهرم البشري في السيرك عند رؤية فوج؟",
        qEn: "Question 3: What happened to the human pyramid formation when Passepartout recognized Fogg?",
        answer: "All the acrobats fell down and were hurt (سقط البهلوانات وتأذوا ودفع فوج تعويضاً)",
        answerEn: "The acrobats collapsed onto the stage, and Mr. Fogg paid damages to the manager."
      }
    ]
  },
  {
    chapterId: 5,
    exerciseTitle: "حل تمارين الفصل الخامس (The journey across America - صفحة 40 و 41)",
    exerciseTitleEn: "Chapter 5 Exercise Solutions (Pages 40 and 41 - Comprehension)",
    type: "qa",
    questions: [
      {
        q: "أين يريد فيكس أن يقبض على فوج رسمياً؟",
        qEn: "Question 1: Where does Detective Fix intend to arrest Mr. Fogg formally?",
        answer: "In England (في إنجلترا، لأن أمر التوقيف لا يسري في أمريكا)",
        answerEn: "On British soil in England, where his warrant is legally enforceable."
      },
      {
        q: "من هاجم القطار واختطف باسبارتو؟",
        qEn: "Question 2: Who attacked the railway train and captured Passepartout?",
        answer: "The Sioux Indians (قبيلة السيو الهندية)",
        answerEn: "A war party of Sioux warriors."
      },
      {
        q: "كيف سافروا بسرعة فوق الثلوج من كيرني إلى أوماها؟",
        qEn: "Question 3: How did they travel rapidly over frozen snowdrifts between Fort Kearney and Omaha?",
        answer: "By sledge with sails (بواسطة زلاجة ذات أشرعة على الجليد)",
        answerEn: "By a wind-powered sledge equipped with broad canvas sails."
      },
      {
        q: "لماذا لم يلحقوا بسفينة 'تشاينا' في نيويورك؟",
        qEn: "Question 4: Why did they miss the departure of the steamer China in New York?",
        answer: "They were 45 minutes late (وصلوا متأخرين بـ 45 دقيقة)",
        answerEn: "They arrived forty-five minutes past the scheduled departure."
      }
    ]
  },
  {
    chapterId: 6,
    exerciseTitle: "حل تمارين الفصل السادس (Across the Atlantic to England - صفحة 51)",
    exerciseTitleEn: "Chapter 6 Exercise Solutions (Page 51 - Comprehension)",
    type: "qa",
    questions: [
      {
        q: "لماذا حبس البحارة القبطان سبيدي في قمرته؟",
        qEn: "Question 1: Why did the sailors confine Captain Andrew Speedy to his cabin?",
        answer: "Because he refused to go to Liverpool (لأنه رفض الذهاب إلى ليفربول ورشاهم فوج بالمال)",
        answerEn: "Because he refused to steer for Liverpool, leading Fogg to bribe the crew to redirect the vessel."
      },
      {
        q: "ماذا حرقوا عندما نفد الفحم من السفينة هنرييتا؟",
        qEn: "Question 2: What was burned when coal supplies were exhausted on the Henrietta?",
        answer: "The wooden boards, tables, and doors (الألواح الخشبية والطاولات والأبواب واشتراها فوج بـ 30,000 جنيه)",
        answerEn: "The wooden decks, companionways, doors, and bulkheads purchased from Captain Speedy for thirty thousand dollars."
      },
      {
        q: "من هو اللص الحقيقي لبنك إنجلترا؟",
        qEn: "Question 3: Who was the actual Bank of England robber?",
        answer: "James Strand (جيمس ستراند، وتم القبض عليه قبل 3 أيام)",
        answerEn: "James Strand, who had been apprehended in London three days earlier."
      },
      {
        q: "كيف كسب فوج الرهان رغم تأخره الظاهري؟",
        qEn: "Question 4: How did Mr. Fogg win the wager despite seeming five minutes late?",
        answer: "Because travelling east gained him an extra day (لأن السفر شرقاً أكسبه يوماً إضافياً 24 ساعة، وكان اليوم السبت وليس الأحد)",
        answerEn: "Traveling eastward across three hundred sixty degrees gained twenty-four hours, making the arrival date Saturday instead of Sunday."
      }
    ]
  }
];
