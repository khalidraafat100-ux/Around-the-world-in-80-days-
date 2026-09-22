import ch1Image from '../assets/images/fogg_reform_wager_1790077474691.jpg';
import ch2Image from '../assets/images/steamer_suez_egypt_1790077494857.jpg';
import ch3Image from '../assets/images/elephant_kiouni_jungle_1790077507606.jpg';
import ch4Image from '../assets/images/tankadere_storm_1790077522026.jpg';
import ch5Image from '../assets/images/ice_sledge_america_1790077537729.jpg';
import ch6Image from '../assets/images/henrietta_steamer_1790077555059.jpg';

export interface ChapterIllustration {
  src: string;
  plateNumber: string;
  plateNumberAr: string;
  sceneTitleEn: string;
  sceneTitleAr: string;
  captionEn: string;
  captionAr: string;
  altEn: string;
  altAr: string;
}

export interface StoryChapterText {
  id: number;
  chapterNumber: number;
  titleEn: string;
  titleAr: string;
  settingEn: string;
  settingAr: string;
  datesEn: string;
  datesAr: string;
  illustration: ChapterIllustration;
  fullStoryParagraphsEn: string[];
  fullStoryParagraphsAr: string[];
  highlightQuoteEn: { quote: string; speaker: string };
  highlightQuoteAr: { quote: string; speaker: string };
  dramaticMomentsEn: string[];
  dramaticMomentsAr: string[];
}

export const COMPLETE_NOVEL_STORY: StoryChapterText[] = [
  {
    id: 1,
    chapterNumber: 1,
    titleEn: 'Chapter 1: The Clockwork Gentleman and the Twenty Thousand Pound Wager',
    titleAr: 'الفصل الأول: الرجل المنظم كالروبوت ورهان العشرين ألف جنيه',
    settingEn: 'London, England — No. 7 Savile Row, Burlington Gardens, and The Reform Club, Pall Mall',
    settingAr: 'لندن، إنجلترا — 7 شارع سافيل رو، بيرلينغتون غاردنز، ونادي الإصلاح، بال مال',
    datesEn: 'Wednesday, October 2, 1872',
    datesAr: 'الأربعاء، 2 أكتوبر 1872',
    illustration: {
      src: ch1Image,
      plateNumber: 'Plate I',
      plateNumberAr: 'لوحة ١',
      sceneTitleEn: 'The Reform Club Wager and Whist Table',
      sceneTitleAr: 'رهان نادي الإصلاح وطاولة الورق في لندن',
      captionEn: 'Phileas Fogg calmly accepts the twenty-thousand-pound wager at the Reform Club on Pall Mall to circumnavigate the globe in eighty days.',
      captionAr: 'فيلياس فوج يقبل بهدوء جليدي رهان العشرين ألف جنيه إسترليني في صالون نادي الإصلاح بلندن للطواف حول الأرض في ثمانين يوماً.',
      altEn: 'Phileas Fogg and English gentlemen at the Reform Club discussing the eighty-day world wager',
      altAr: 'فيلياس فوج ورفاقه في نادي الإصلاح بلندن أثناء إبرام رهان العشرين ألف جنيه'
    },
    fullStoryParagraphsEn: [
      `In the year 1872, the handsome mansion at No. 7 Savile Row, Burlington Gardens—once the residence of the famous English playwright Sheridan—was inhabited by Mr. Phileas Fogg. He was one of the most enigmatic, singular, and mathematically precise figures in London high society. Tall, handsome, with an open noble countenance, he was a man who spoke very little, never seemed in a hurry, and moved through daily life with the flawless, calm predictability of an astronomical clock. No one knew where his immense fortune had originated; all that was known was that he lived comfortably, paid his bills instantly in crisp banknotes, and gave generously to charity without seeking public applause.`,
      `His domestic life was an embodiment of strict geometry and horological precision. His home was his sanctuary, governed by an exact schedule from which he never deviated by a single second. On the morning of October 2nd, Mr. Fogg dismissed his valet, James Forster, because the poor lad had committed the unpardonable offense of bringing shaving water heated to eighty-four degrees Fahrenheit instead of eighty-six. Promptly at twenty-nine minutes past eleven, a newly engaged French servant named Jean Passepartout knocked on the door. Passepartout—a muscular, good-hearted Parisian of thirty who had previously worked as a circus acrobat, a gymnastics instructor, and a Paris fireman—was eager for tranquil, predictable service under an English gentleman famed for never leaving his house. Fogg inspected him closely, verified his credentials, and said evenly: 'From this moment, twenty-nine minutes past eleven, Wednesday, October 2nd, 1872, you are in my service.'`,
      `Leaving Passepartout to inspect the timetable pinned in his pantry—which listed every duty from morning tea to evening slippers down to the minute—Fogg walked with measured paces to the Reform Club on Pall Mall. He took precisely five hundred and seventy-five steps with his right foot and five hundred and seventy-six with his left. There, he took his customary lunch in the grand dining room, read The Times and The Daily Telegraph, and at six o'clock joined his usual whist circle: Andrew Stuart, John Sullivan, Samuel Fallentin, Thomas Flanagan, and Gauthier Ralph, a director of the Bank of England.`,
      `The sole topic of conversation across London that afternoon was the audacious robbery of fifty-five thousand pounds in banknotes taken directly from the chief cashier's desk at the Bank of England three days prior. Scotland Yard had dispatched detectives to every major seaport, but the thief remained at large. 'The thief will easily slip away,' remarked Andrew Stuart as the cards were dealt. 'The world is so enormous.'`,
      `'It was once,' Phileas Fogg replied serenely, 'but the world has grown smaller since steamships and railways span continents. Today, a man can travel around the globe in eighty days.'`,
      `The whist partners scoffed at what they considered a preposterous theoretical fantasy. The Daily Telegraph had printed an itinerary based on recent transport links: London to Suez via Mont Cenis railway and steamers (7 days); Suez to Bombay (13 days); Bombay to Calcutta by the newly reported Great Indian Peninsula line (3 days); Calcutta to Hong Kong (13 days); Hong Kong to Yokohama (6 days); Yokohama to San Francisco (22 days); San Francisco to New York by the Transcontinental Railroad (7 days); and New York to London (9 days)—totaling exactly eighty days. But Stuart protested vigorously that seasonal monsoons, train derailments, shipwrecks, and hostile Native American tribes would shatter such a paper calculation.`,
      `'An unforeseen obstacle does not exist for the prepared mind,' said Fogg calmly. 'I will do it myself.'`,
      `'That is impossible! Twenty thousand pounds says you cannot!' challenged Stuart with heated defiance.`,
      `'I accept,' said Fogg without a tremor in his voice. 'I possess twenty thousand pounds on deposit at Baring Brothers. I will stake it as my wager. Gentlemen, a train leaves Charing Cross for Dover tonight at eight forty-five. I will take it. I shall return to this exact room in the Reform Club on Saturday, December 21st, 1872, at quarter to nine in the evening. If I am not here, the twenty thousand pounds belongs to you.' A formal memorandum was drawn up and signed by the six gentlemen on the spot.`,
      `Returning home at eight o'clock, Fogg stunned Passepartout by announcing: 'Pack a small carpetbag with two shirts and three pairs of socks for each of us. We depart for Dover and the world in ten minutes.' In his haste, Passepartout left the gas burner on in his bedroom—a small detail that Fogg noted would be deducted from his salary upon their return. Into a stout leather bag, Fogg packed twenty thousand pounds in Bank of England banknotes to defray traveling costs. At Charing Cross station, surrounded by an astonished crowd and his whist companions, Fogg and Passepartout boarded the night boat train, embarking on a race that captured the imagination of the entire civilized world.`
    ],
    fullStoryParagraphsAr: [
      `في خريف عام 1872، كان المنزل الأنيق ذو الرقم 7 في شارع سافيل رو بقلب لندن مسكناً للسيد فيلياس فوج، أحد أكثر الشخصيات غموضاً ووقاراً ودقة حسابية في المجتمع الإنجليزي. كان فوج رجلاً وسيماً في نحو الأربعين من عمره، ذا ملامح نبيلة وهدوء جليدي لا يتزعزع؛ لا يتحدث إلا نادراً، ولا يتعجل خطاه قط، ويعيش حياته اليومية بميزان دقيق يشبه حركة رقاص الساعة الفلكية. لم يكن أحد يعرف مصدر ثروته الطائلة، لكن الجميع كان يعلم أنه يعيش في رغد كريم، ويسدد التزاماته فوراً بأوراق النقد الجديدة، ويتبرع للمحتاجين في صمت وتواضع.`,
      `كان منزله معبداً للانتظام الهندسي الصارم، تسير فيه الحياة وفق جدول زمني بالثواني. وفي صباح الثاني من أكتوبر، قام السيد فوج بطرد خادمه الشاب جيمس فورستر لأن حرارة ماء الحلاقة كانت 84 درجة فهرنهايت بدلاً من 86 درجة المطلوبة! وفي تمام الساعة 11:29 صباحاً، دخل الخادم الجديد الفرنسي 'جان باسبارتو'. كان باسبارتو شاباً باريسياً طيب القلب وقوي البنية في الثلاثين من عمره، عمل سابقاً لاعب سيرك ومروض خيول وإطفائياً في باريس، وجاء إلى إنجلترا بحثاً عن خدمة هادئة تحت إمرة رجل إنجليزي لا يغادر منزله أبداً. تفحصه فوج وقال بهدوء: 'من هذه اللحظة، الحادية عشرة وتسع وعشرون دقيقة، الأربعاء 2 أكتوبر 1872، أنت في خدمتي'.`,
      `ترك فوج خادمه ليتفقد جدول المهام المعلق في مخزن المؤن، وتوجه بخطوات محسوبة (575 خطوة بالقدم اليمنى و576 باليسرى) نحو نادي الإصلاح الراقي في شارع بال مال. تناول غداءه المعتاد وقرأ صحيفتي التايمز والديلي تلغراف، وعند السادسة مساءً جلس مع رفاقه الأثرياء للعب الورق: أندرو ستيوارت، جون سوليفان، صامويل فالنتين، توماس فلاناغان، وجوثييه رالف عضو مجلس إدارة بنك إنجلترا.`,
      `كان حديث الساعة في لندن ذلك اليوم هو السرقة الكبرى لـ 55 ألف جنيه إسترليني من خزينة بنك إنجلترا، وكانت الشرطة تطارد رجلاً أنيقاً شوهد يغادر قاعة الصرافين. قال ستيوارت وهو يوزع الورق: 'سيفلت اللص بالتأكيد، فالعالم واسع جداً'. فرد فيلياس فوج بهدوء تام: 'كان العالم واسعاً في الماضي، أما اليوم فقد تقلص بفضل البواخر والسكك الحديدية؛ وبات بمقدور أي إنسان أن يدور حول الأرض في ثمانين يوماً فقط'.`,
      `سخر رفاقه معتبرين ذلك وهماً نظرياً، رغم أن صحيفة الديلي تلغراف نشرت جدولاً مفصلاً: من لندن إلى السويس (7 أيام)، السويس إلى بومباي (13 يوماً)، بومباي إلى كلكتا (3 أيام)، كلكتا إلى هونغ كونغ (13 يوماً)، هونغ كونغ إلى يوكوهاما (6 أيام)، يوكوهاما إلى سان فرانسيسكو (22 يوماً)، سان فرانسيسكو إلى نيويورك (7 أيام)، ونيويورك إلى لندن (9 أيام)، بإجمالي ثمانين يوماً. اعترض ستيوارت مؤكداً أن الرياح الموسمية وغرق السفن وانهيار الجسور وغارات الهنود الحمر كفيلة بتدمير أي جدول.`,
      `أجاب فوج ببرود: 'الظروف غير المتوقعة غير موجودة لمن يحسن التخطيط، وأنا مستعد للقيام بهذه الرحلة بنفسي لإثبات ذلك'. صاح ستيوارت متحدياً: 'أراهنك بعشرين ألف جنيه أنك لن تستطيع!'. قال فوج بثقة مطلقة: 'قبلت الرهان. لدي عشرون ألف جنيه في بنك بارينغز، سأضعها رهاناً. سأسافر في قطار الليلة إلى دوفر في الساعة 8:45 مساءً، وسأعود إلى هذه الصالة ذاتها يوم السبت 21 ديسمبر 1872 في تمام الساعة 8:45 مساءً. وإن لم أكن هنا، فالمال لكم'.`,
      `عاد فوج مسرعاً إلى منزله في الثامنة مساءً، وصدم باسبارتو بقوله: 'جهّز حقيبة صغيرة بقميصين وثلاثة أزواج من الجوارب لكل منا، سننطلق حول العالم بعد عشر دقائق!'. ومن شدة المفاجأة، نسي باسبارتو موقد الغاز مشتعلاً في غرفته! وضع فوج عشرين ألف جنيه نقداً في حقيبة جلدية لتغطية مصاريف الرحلة، وفي محطة تشارينغ كروس، وسط ذهول رفاقه والجموع المحتشدة، صعد فوج وباسبارتو إلى قطار الليل، لتبدأ أعظم مغامرة طواف في تاريخ الأدب العالمي.`
    ],
    highlightQuoteEn: {
      speaker: 'Phileas Fogg',
      quote: 'A true Englishman doesn\'t joke when he is talking about so serious a thing as a wager. I will bet twenty thousand pounds that I will make the tour of the world in eighty days or less.'
    },
    highlightQuoteAr: {
      speaker: 'فيلياس فوج',
      quote: 'الإنجليزي الحقيقي لا يمزح حين يتعلق الأمر بالرهان. أراهن بعشرين ألف جنيه أنني سأدور حول العالم في ثمانين يوماً أو أقل.'
    },
    dramaticMomentsEn: [
      'The strict firing of the valet James Forster over a two-degree water discrepancy',
      'The Bank of England theft debate leading to the spontaneous twenty thousand pound wager',
      'The departure from Charing Cross station with a carpetbag containing a fortune in banknotes'
    ],
    dramaticMomentsAr: [
      'طرد الخادم جيمس فورستر بسبب فارق درجتين في حرارة ماء الحلاقة',
      'نقاش سرقة بنك إنجلترا الذي تحول إلى رهان تاريخي بقيمة 20,000 جنيه إسترليني',
      'الانطلاق بالحقيبة الممتلئة بالأموال من محطة تشارينغ كروس تحت دقات عقارب الساعة'
    ]
  },
  {
    id: 2,
    chapterNumber: 2,
    titleEn: 'Chapter 2: The Steamer Mongolia, Suez, and the Shadow of Detective Fix',
    titleAr: 'الفصل الثاني: الباخرة منغوليا، قناة السويس، ومطاردة المحقق فيكس',
    settingEn: 'The Mediterranean, Suez Canal (Egypt), Red Sea, Aden, and the Indian Ocean',
    settingAr: 'البحر المتوسط، قناة السويس (مصر)، البحر الأحمر، عدن، والمحيط الهندي',
    datesEn: 'October 5 – October 20, 1872',
    datesAr: '5 أكتوبر – 20 أكتوبر 1872',
    illustration: {
      src: ch2Image,
      plateNumber: 'Plate II',
      plateNumberAr: 'لوحة ٢',
      sceneTitleEn: 'The Steamer Mongolia in the Suez Canal',
      sceneTitleAr: 'الباخرة منغوليا في قناة السويس ومراقبة فيكس',
      captionEn: 'The iron steamship Mongolia transit through the Suez Canal in Egypt, while Scotland Yard Detective Fix watches closely from the quayside.',
      captionAr: 'الباخرة الحديدية منغوليا تعبر قناة السويس المصرية متجهة إلى بومباي، بينما يترصد المحقق فيكس من رصيف الميناء للاشتباه بفوج.',
      altEn: 'The steamship Mongolia steaming through the Suez Canal with Detective Fix watching on the shore',
      altAr: 'الباخرة منغوليا في مياه قناة السويس والمحقق فيكس يترصد على الشاطئ'
    },
    fullStoryParagraphsEn: [
      `Leaving London on the night of October 2nd, Phileas Fogg and Passepartout crossed the English Channel to Calais, traversed France by rail, and plunged through the newly excavated Mont Cenis tunnel beneath the Alps. On Saturday, October 5th, precisely on schedule, they reached the Italian port of Brindisi and boarded the Peninsular and Oriental Company's iron screw steamship Mongolia, bound for Bombay via the Suez Canal.`,
      `On Wednesday, October 9th, the Mongolia entered the roadstead of Suez in Egypt to replenish its coal bunkers. Pacing nervously along the quayside under the scorching sun was Mr. Fix, one of Scotland Yard's keenest detectives. He had been dispatched to the Mediterranean to intercept the Bank of England thief. Scotland Yard's telegraph described the suspect: a polished, aristocratic gentleman of solitary demeanor, traveling first class, who distributed lavish sums of gold and banknotes without counting the change.`,
      `When Phileas Fogg stepped ashore with his British passport in hand, inquiring calmly for the British consulate to have his arrival stamped as legal proof of his journey, Detective Fix was struck as if by lightning. The physical description was a mirror image of Fogg! Fix hurried to the consul, insisting that this passenger was the daring bank robber fleeing English justice. The consul, however, inspected the passport, noted it was completely authentic, and declared that an English citizen traveling with valid papers could not be refused his visa.`,
      `Fix then encountered Passepartout wandering the dusty streets of Suez. The gregarious Parisian, delighted to find someone who spoke French, readily answered Fix's probing questions. Passepartout naively revealed that his eccentric master was carrying thousands of pounds in brand new banknotes in a carpetbag, racing around the globe against time, and pausing nowhere for sightseeing. Furthermore, when Fix remarked that Passepartout's pocket watch was slow by two hours, the Frenchman indignantly refused to adjust it: 'This watch has been in my family since my great-grandfather! It keeps the exact time of London, and I will never touch the hands!' (Fix smiled, knowing the watch was merely retaining Greenwich time while they had traveled two time zones eastward).`,
      `'He is my thief without a shadow of a doubt!' muttered Fix. Realizing that once the Mongolia docked at Bombay it would still be upon British colonial territory where an English warrant was valid, Fix dispatched a secret, urgent telegraph to London: 'To the Commissioner of Police, Scotland Yard: I have tracked the Bank of England robber, Phileas Fogg. Send a warrant of arrest immediately to Bombay.'`,
      `Fix promptly secured a ticket and boarded the Mongolia as a passenger. Through the tempestuous waters of the Red Sea, passing the arid rocks of Bab-el-Mandeb, and coaling at the fortified port of Aden, Fix cultivated a warm friendship with Passepartout, hoping for head-winds and machinery breakdowns that would delay the ship. But Captain Phillips pushed the Mongolia's compound engines to their limits. With schooner sails unfurled and screws churning the Indian Ocean, the Mongolia docked at Bombay on Sunday, October 20th, at half-past four in the afternoon—two full days ahead of Fogg's official schedule!`
    ],
    fullStoryParagraphsAr: [
      `غادر فيلياس فوج وباسبارتو لندن ليلة 2 أكتوبر، وعبرا القنال الإنجليزي إلى كاليه بفرنسا، ثم استقلا القطار السريع مخترقين جبال الألب عبر نفق مونت سينيس المفتوح حديثاً. وفي مساء السبت 5 أكتوبر، وصلا بدقة متناهية إلى ميناء برينديزي في جنوب إيطاليا، وصعدا على متن الباخرة الحديدية 'منغوليا' التابعة لشركة الهند الشرقية البريطانية والمتجهة إلى بومباي عبر قناة السويس المصرية.`,
      `في يوم الأربعاء 9 أكتوبر، رست الباخرة في ميناء السويس المصري للتزود بالفحم الحجري. على الرصيف الحار، كان يقف رجل عصبي المزاج يتفحص المسافرين بعينين كعيني الصقر؛ إنه المحقق 'فيكس' من شرطة سكوتلاند يارد البريطانية. كانت برقيات الشرطة تصف السارق بأنه رجل نبيل وأنيق ومفرط في الثراء، يسافر بمفرده وينفق الجنيهات والذهب بسخاء دون اكتراث.`,
      `حين نزل فوج إلى الميناء متجهاً للقنصلية البريطانية لختم جواز سفره وإثبات تاريخ وصوله رسمياً، تجمد فيكس في مكانه؛ فقد كانت أوصاف اللص تنطبق على فوج كفلقة قمر! حاول فيكس تحريض القنصل على رفض ختم الجواز، لكن القنصل أجاب بأن أوراق فوج سليمة وقانونية تماماً، ولا يملك أي حق قانوني لتعطيل مواطن إنجليزي محترم.`,
      `التقى فيكس بعد ذلك بالخادم باسبارتو في شوارع السويس واستدرجه في أطراف الحديث. وببراءة تامة وعفوية مطلقة، كشف باسبارتو كل شيء: أن سيده يحمل حقيبة جلدية تغص بحزم الجنيهات الإسترلينية الجديدة، وأنهما في سباق محموم حول الكوكب بأسره دون توقف لزيارة المعالم! وحين لاحظ فيكس أن ساعة باسبارتو متأخرة ساعتين عن توقيت السويس، رفض باسبارتو بعناد تعديلها قائلاً: 'هذه ساعة جدي، وهي مضبوطة على توقيت لندن، ولن أغير عقاربها أبداً!' (ابتسم فيكس ساخراً، لعلمه أن الساعة ببساطة تحتفظ بتوقيت غرينتش بينما تحركوا شرقاً عبر خطوط الطول).`,
      `أيقن فيكس أن فوج هو اللص لا محالة، وأن الرهان مجرد غطاء ذكي للهروب بأموال البنك. ولأن الهند أرض بريطانية تخضع للقانون الإنجليزي، أرسل فيكس برقية عاجلة مشفرة إلى لندن: 'إلى مدير شرطة سكوتلاند يارد: عثرت على سارق بنك إنجلترا، فيلياس فوج. أرسلوا أمر القبض فوراً إلى بومباي'.`,
      `اشترى فيكس تذكرة وصعد على متن 'منغوليا' مرافقاً للمسافرين. ورغم أمواج البحر الأحمر العاتية وحرارة مضيق باب المندب، شقت الباخرة طريقها بقوة وتوقفت للتزود بالفحم في عدن، ثم اندفعت عبر المحيط الهندي لتصل إلى ميناء بومباي في 20 أكتوبر، متقدمة بيومين كاملين عن موعد الرهان، بينما كان فيكس يترقب وصول أمر الاعتقال على أحر من الجمر.`
    ],
    highlightQuoteEn: {
      speaker: 'Detective Fix',
      quote: 'I have my man! He travels under the guise of an eccentric tourist, but he shall not escape Her Majesty\'s warrant!'
    },
    highlightQuoteAr: {
      speaker: 'المحقق فيكس',
      quote: 'لقد وقع اللص في قبضتي! يتنكر تحت ستار سائح غريب الأطوار، لكنه لن يفلت من قبضة العدالة!'
    },
    dramaticMomentsEn: [
      'Detective Fix matching Phileas Fogg\'s appearance to the Bank of England thief at Suez',
      'Passepartout naively revealing the carpetbag fortune and his refusal to adjust his London watch',
      'The dispatch of the arrest telegram to London and the advance arrival in Bombay two days ahead of schedule'
    ],
    dramaticMomentsAr: [
      'مطابقة المحقق فيكس لمواصفات فيلياس فوج مع مواصفات سارق بنك إنجلترا في السويس',
      'اعتراف باسبارتو العفوي بوجود ثروة في حقيبة سيده ورفضه تعديل ساعته اللندنية',
      'إرسال برقية الاعتقال المشفرة إلى سكوتلاند يارد والوصول إلى بومباي متقدمين بيومين كاملين'
    ]
  },
  {
    id: 3,
    chapterNumber: 3,
    titleEn: 'Chapter 3: The Wild Heart of India, the Elephant Kiouni, and the Suttee Rescue',
    titleAr: 'الفصل الثالث: قلب الهند المجهول، الفيل كيوني، وإنقاذ الأميرة عودة',
    settingEn: 'India — Bombay, Malabar Hill, the jungles of Bundelkhand, Allahabad, and Calcutta',
    settingAr: 'الهند — بومباي، تلة مالابار، أدغال بوندلكاند، الله آباد، وكلكتا',
    datesEn: 'October 20 – October 25, 1872',
    datesAr: '20 أكتوبر – 25 أكتوبر 1872',
    illustration: {
      src: ch3Image,
      plateNumber: 'Plate III',
      plateNumberAr: 'لوحة ٣',
      sceneTitleEn: 'Trekking on Kiouni and the Suttee Rescue in Bundelkhand',
      sceneTitleAr: 'الفيل كيوني ومغامرة إنقاذ الأميرة عودة في أدغال الهند',
      captionEn: 'Phileas Fogg, Sir Francis Cromarty, and Passepartout navigating the wild jungles of India atop the elephant Kiouni before rescuing Princess Aouda.',
      captionAr: 'فيلياس فوج والسير كرومارتي وباسبارتو يجوبون أحراش الهند الموحشة على ظهر الفيل كيوني لإنقاذ الأميرة عودة من المحرقة.',
      altEn: 'Phileas Fogg and his companions riding the elephant Kiouni through the dense Indian jungle',
      altAr: 'فيلياس فوج ورفاقه على ظهر الفيل كيوني وسط أدغال الهند الكثيفة'
    },
    fullStoryParagraphsEn: [
      `Upon disembarking at Bombay on October 20th, Fix rushed frantically to the police department, only to discover to his bitter dismay that the arrest warrant had not arrived from London. Meanwhile, Passepartout, tasked with purchasing European goods for their journey across India, innocently wandered into the sacred pagoda of Malabar Hill. Unaware of Hindu religious laws, he entered the shrine wearing his shoes. Three enraged Brahmin priests leaped upon him, ripped the shoes from his feet, and tore his clothing. Passepartout, utilizing his old circus gymnastics and fists, knocked them aside and fled down the hill, arriving breathless at the railway station.`,
      `At eight in the evening, Fogg, Passepartout, and a fellow traveler, Brigadier-General Sir Francis Cromarty, boarded the Great Indian Peninsula Railway train bound across the subcontinent for Calcutta. Sir Francis, a seasoned colonial officer, warned Fogg that the mysterious subcontinent had many surprises in store.`,
      `On the morning of October 22nd, near the jungle outpost of Kholby, the train screeched to a halt. The conductor strolled along the carriages announcing with complete indifference: 'Passengers will get out here. The railway is not finished. There is a fifty-mile gap between here and Allahabad, where the track begins again!' The passengers were furious; London newspapers had falsely claimed the line was complete. Sir Francis Cromarty lamented that this delay would cost Fogg his fortune. But Fogg checked his pocket watch calmly: 'I have gained two days upon the steamer; I have foreseen that obstacles might occur.'`,
      `All available horses and ox-carts in Kholby were quickly hired by panicked travelers. Undaunted, Fogg searched the village until he found an Indian who owned a magnificent, intelligent, half-domesticated elephant named Kiouni. When the owner adamantly refused to rent the beast, Fogg offered to buy it outright. He steadily raised his bids: one thousand pounds, fifteen hundred, and finally two thousand pounds in crisp banknotes—a colossal sum that could buy an entire estate in India. The owner, dazzled by the fortune, surrendered Kiouni. Fogg then hired a brave young Parsi guide named Ali to pilot the elephant through the untamed jungles of Bundelkhand.`,
      `Perched in howdahs upon Kiouni's broad back, Fogg, Cromarty, and Passepartout cut through impenetrable thickets of bamboo and teak. On the second evening, Ali suddenly halted Kiouni and commanded absolute silence. Through the dense foliage, they heard the eerie thrum of tom-toms and discordant chanting. It was a funeral procession of armed guards and fanatic Brahmin priests escorting the corpse of the old Rajah of Bundelkhand. Bound and drudged along behind the bier was his young, exquisite widow, Princess Aouda. She was the daughter of a wealthy merchant from Bombay who had been forcibly married to the elderly tyrant. Drugged with opium and incense, she was doomed to the barbaric rite of 'Suttee'—to be burned alive upon her husband's funeral pyre at sunrise.`,
      `'We must save this woman,' Phileas Fogg stated simply. Sir Francis Cromarty warned that detection meant instant butchery, but Fogg and Passepartout were unshakeable. Under cover of pitch darkness, they crept toward the pagoda where Aouda lay guarded, but the sentinels were vigilant. Dawn broke over the jungle; Aouda was dragged out and laid upon the dry timbers beside her dead husband. The torches were applied; roaring flames began to consume the pyre.`,
      `Suddenly, a petrifying cry tore through the morning mist! The dead rajah rose upright from the roaring flames! Tall, spectral, and menacing, he pushed through the smoke, gathered the unconscious princess into his arms, and strode down through the terrified crowd! Priests and guards threw themselves face-down upon the earth, shrieking in supernatural terror. 'To the elephant! Quick!' whispered the ghost in French. It was Jean Passepartout! The courageous valet had crawled beneath the pyre in the blinding smoke, shoved the corpse aside, and taken its place! Fogg and Cromarty hauled Aouda and Passepartout onto Kiouni, and the beast dashed through the forest as furious arrows whizzed harmlessly past.`,
      `They reached Allahabad safely. Fogg rewarded the brave Parsi guide with his wages and presented him with the two-thousand-pound elephant Kiouni as a gift of gratitude. Taking the express train down the Ganges valley, they arrived at Calcutta on the morning of October 25th, exactly on the scheduled hour to catch the steamer for Hong Kong, with the rescued Princess Aouda safe under their gentlemanly protection.`
    ],
    fullStoryParagraphsAr: [
      `عند النزول في ميناء بومباي في 20 أكتوبر، ركض المحقق فيكس إلى مديرية الشرطة على أمل العثور على أمر الاعتقال، لكن خيبته كانت قاسية؛ فالأمر لم يصل بعد من لندن! في تلك الأثناء، خرج باسبارتو لشراء بعض الحاجيات وتجول في تلة مالابار، فدخل معبداً هندوسياً دون أن يخلع حذاءه جهلاً منه بالطقوس الدينية. هاجمه ثلاثة من الكهنة المتعصبين ومزقوا ملابسه ونزعوا حذاءه، فما كان من باسبارتو إلا أن وجه إليهم لكمات بهلوانية قوية ولاذ بالفرار حافي القدمين إلى المحطة!`,
      `في الثامنة مساءً، استقل فوج وباسبارتو ومعهما الضابط البريطاني السير فرانسيس كرومارتي قطار السكك الحديدية الهندية المتجه عبر شبه الجزيرة نحو كلكتا. وفي صباح 22 أكتوبر، وبشكل مفاجئ وسط أحراش قرية 'خولبي' النائية، توقف القطار تماماً وصاح المحصل: 'على جميع الركاب النزول، السكة الحديدية غير مكتملة هنا! هناك فجوة تمتد لخمسين ميلاً تفصلنا عن محطة الله آباد حيث يبدأ الخط مجدداً!'. أصيب الركاب بالذهول والغضب، فالصحف اللندنية كانت قد أعلنت زوراً اكتمال الخط كاملاً. نظر السير كرومارتي إلى فوج محذراً إياه من ضياع رهانه، لكن فوج نظر إلى ساعته بهدوء جليدي قائلاً: 'لقد ادخرت يومين إضافيين في البحر، وكنت أعلم أن العقبات ستظهر حتماً'.`,
      `كانت جميع العربات والخيول قد استؤجرت من قبل المسافرين المذعورين. بحث فوج حتى عثر على قروي هندي يملك فيلاً ضخماً وقوياً يدعى 'كيوني'. رفض الرجل تأجيره بأي ثمن، فما كان من فوج إلا أن عرض شراءه نقداً، وظل يرفع السعر من ألف جنيه إلى ألف وخمسمائة حتى وصل إلى ألفي جنيه إسترليني (وهو مبلغ خيالي كان يكفي لشراء قصر في ذلك الزمان)! استسلم القروي وباع الفيل، واستأجر فوج دليلاً بارسياً شجاعاً يدعى علي ليقودهم عبر أدغال منطقة بوندلكاند الموحشة.`,
      `امتطى الثلاثة هودج الفيل كيوني مخترقين غابات الخيزران الكثيفة. وفي مساء اليوم الثاني، أوقف الدليل الفيل فجأة وأشار إليهم بالصمت والاختباء. مر بالقرب منهم موكب ديني مخيف من الكهنة المتعصبين يقرعون الطبول ويحملون المشاعل. كان الموكب يحمل جثمان مهراجا هندي متوفى، ويقتاد خلفه شابة حسناء فائقة الجمال تدعى 'الأميرة عودة'. كانت عودة ابنة تاجر ثري من بومباي نالت تعليماً إنجليزياً راقياً، لكنها زُوجت قسراً للمهراجا العجوز، وكان الكهنة يسوقونها بعد تخديرها بالأفيون لتُحرق حية مع جثمان زوجها في طقس 'السوتي' الهمجي عند شروق الشمس.`,
      `قال فيلياس فوج بنبل وشجاعة نادرة: 'لدينا بضع ساعات قبل شروق الشمس.. يجب أن ننقذ هذه المرأة البريئة'. كان الموت هو المصير المحتوم لأي أجنبي يقترب، وحين بزغ الفجر وأُشعلت النيران في المحرقة، تصاعد الدخان والتهمت ألسنة اللهب جسد المهراجا. وفجأة، حدث ما شل قلوب الجميع رعباً! نهض جثمان المهراجا الميت من بين النيران، وحمل الأميرة بين ذراعيه وتقدم نحو الجموع بهيبة خارقة! خر الكهنة والحراس على وجوههم في التراب ظناً منهم أن شبح المهراجا قد عاد للحياة!`,
      `صاح الشبح بصوت فرنسي مألوف: 'اركضوا إلى الفيل!'. لقد كان هذا الشبح هو الشجاع 'جان باسبارتو'، الذي تسلل بين الدخان بمهارة لاعب السيرك القديمة، ودفع الجثة جانباً وحل محلها ليحمل الأميرة عودة! امتطى الجميع ظهر الفيل كيوني الذي انطلق كالسهم في الغابة قبل أن يدرك الكهنة الخدعة. وصلوا إلى الله آباد بسلام، وهناك أهدى فوج الفيل كيوني للدليل البارسي مكافأة له على شجاعته، وركبوا القطار إلى كلكتا برفقة الأميرة عودة، واصلين في الموعد المحدد تماماً في 25 أكتوبر!`
    ],
    highlightQuoteEn: {
      speaker: 'Phileas Fogg',
      quote: 'I have yet twelve hours to spare. I can devote them to saving this unfortunate woman.'
    },
    highlightQuoteAr: {
      speaker: 'فيلياس فوج',
      quote: 'ما زال لدي اثنتا عشرة ساعة إضافية، ويمكنني تخصيصها لإنقاذ هذه المرأة المسكينة من براثن الموت.'
    },
    dramaticMomentsEn: [
      'The train abruptly halting in the dense Indian jungle and buying Kiouni for two thousand pounds',
      'Discovering the horrific Suttee sacrifice procession in the dead of night',
      'Passepartout boldly taking the place of the dead rajah on the blazing pyre to rescue Princess Aouda'
    ],
    dramaticMomentsAr: [
      'توقف القطار المفاجئ في الغابة الهندية وشراء الفيل كيوني بمبلغ خرافي قدره 2,000 جنيه',
      'اكتشاف موكب التضحية بالبشر وطقس حرق الأرامل ليلاً في أدغال بوندلكاند',
      'تسلل باسبارتو وتقمصه لشخصية الميت من بين النيران لإنقاذ الأميرة عودة'
    ]
  },
  {
    id: 4,
    chapterNumber: 4,
    titleEn: 'Chapter 4: The Hong Kong Opium Den Trap and the Storm-Tossed Pilot Boat',
    titleAr: 'الفصل الرابع: فخ وكر الأفيون في هونغ كونغ وقارب العاصفة إلى شنغهاي',
    settingEn: 'Calcutta, Straits of Malacca, Singapore, Hong Kong, and the South China Sea',
    settingAr: 'كلكتا، مضيق ملقا، سنغافورة، هونغ كونغ، وبحر الصين الجنوبي',
    datesEn: 'October 25 – November 11, 1872',
    datesAr: '25 أكتوبر – 11 نوفمبر 1872',
    illustration: {
      src: ch4Image,
      plateNumber: 'Plate IV',
      plateNumberAr: 'لوحة ٤',
      sceneTitleEn: 'The Pilot Schooner Tankadere in the Typhoon',
      sceneTitleAr: 'قارب التانكادير يصارع أمواج الإعصار في بحر الصين',
      captionEn: 'The 20-ton pilot schooner Tankadere braving monstrous typhoon waves in the South China Sea, firing its signal cannon to flag the American liner General Grant.',
      captionAr: 'القارب الشراعي تانكادير يصارع الأمواج العاتية لإعصار بحر الصين الجنوبي ويطلق قذيفة الإشارة للحاق بالباخرة الأمريكية المتجهة لسان فرانسيسكو.',
      altEn: 'The schooner Tankadere pitching violently in a stormy sea firing a signal cannon',
      altAr: 'قارب التانكادير الشراعي يصارع عاصفة بحر الصين ويطلق قذيفة الاستغاثة'
    },
    fullStoryParagraphsEn: [
      `Stepping off the train at Calcutta on October 25th, Fogg and Passepartout were immediately arrested by a police constable and hauled before Justice Obadiah. It was a cunning legal trap orchestrated by Detective Fix, who had arrived on an earlier mail packet. Fix had brought the three priests from the Malabar Hill pagoda to sue Passepartout for temple desecration. The magistrate sentenced Passepartout to fifteen days' imprisonment and a heavy fine. But Fogg remained utterly unruffled: 'I offer bail.' He paid two thousand pounds cash on the spot. Fix watched in speechless fury as Fogg, Passepartout, and Aouda walked directly onto the steamer Rangoon, bound for Singapore and Hong Kong.`,
      `Fix boarded the Rangoon as well. As they sailed down the Straits of Malacca, Passepartout began to wonder why this peculiar Englishman was always traveling on their exact route. He concluded, in his comic innocence, that Fix was a spy sent by the members of the Reform Club to verify that Fogg was indeed circumnavigating the globe! The voyage was beset by heavy monsoon squalls, causing the Rangoon to arrive in Victoria Harbour, Hong Kong, on November 5th—twenty-four hours behind schedule.`,
      `Hong Kong was the final British colonial outpost on Fogg's itinerary. If Fogg slipped out of Hong Kong aboard a ship bound for Japan or the United States, Fix's British warrant would become a worthless piece of paper. To add to their complications, Fogg discovered that Princess Aouda's wealthy merchant cousin, Jeejeeh, whom she had hoped to join, had moved to Europe; Fogg gallantly offered to take her with them to England under his gentlemanly protection.`,
      `The passenger steamer Carnatic, which was scheduled to carry them to Yokohama, had undergone boiler repairs and was announced to sail at eight o'clock that evening, November 6th. Passepartout was sent into the bustling town to book their berths. On the street, Detective Fix intercepted him and invited him into a tavern on Victoria Peak to share a friendly drink.`,
      `Inside a dim, smoke-filled opium den, Fix desperately decided to lay all his cards on the table. 'I am not a friend,' Fix whispered. 'I am Inspector Fix of Scotland Yard, and your master, Phileas Fogg, is the daring robber who stole fifty-five thousand pounds from the Bank of England! Help me detain him here until my warrant arrives, and I will give you five hundred pounds of the reward!'`,
      `Passepartout was furious. He slammed his fist upon the table, declaring that his master was the most honorable gentleman in the British Empire. Seeing that Passepartout could neither be bribed nor frightened, Fix waited until the waiter brought an opium pipe, handed it to the unsuspecting Frenchman, and watched him inhale the potent fumes. Drugged into deep unconsciousness, Passepartout collapsed upon a wooden bench. Fix walked out into the night, confident that Fogg would miss the Carnatic's early departure.`,
      `The next morning, November 6th, Fogg and Aouda arrived at the harbor, only to find the Carnatic gone and Passepartout nowhere to be found. Anyone else would have despaired, but Fogg remained steadfast. He searched every quay and offered enormous sums to find any vessel willing to brave the ocean. He met Captain John Bunsby, master of a small 20-ton pilot schooner named the Tankadere No. 43. Bunsby explained that Yokohama was sixteen hundred miles away—too far for the tiny craft—but suggested sailing eight hundred miles north to Shanghai, where the American mail liner General Grant was scheduled to depart for San Francisco on November 11th.`,
      `Fogg hired the Tankadere for one hundred pounds, with a bonus of two hundred if they caught the liner. A ferocious typhoon battered the tiny schooner across the South China Sea, tossing gigantic waves over the deck. Yet John Bunsby proved himself a master mariner. On the afternoon of November 11th, at the entrance of Shanghai harbor, they saw the black smoke of the General Grant weighing anchor! Fogg ordered the Tankadere's small signal cannon fired and hoisted the distress flag. The American captain saw the signal, held his vessel in the channel, and took Fogg, Aouda, and Fix (whom Fogg had generously invited aboard the Tankadere) safely into the Pacific voyage.`
    ],
    fullStoryParagraphsAr: [
      `بمجرد نزولهم من القطار في كلكتا صباح 25 أكتوبر، فوجئ فوج وباسبارتو بالشرطة تقتادهما إلى المحكمة! كان ذلك فخاً قضائياً ماكراً دبّره المحقق فيكس، حيث أحضر كهنة معبد بومباي لرفع دعوى ضد باسبارتو لدخوله المعبد بحذائه. حكم القاضي بسجن باسبارتو 15 يوماً مع غرامة باهظة، لكن فيلياس فوج دفع كفالة فورية قدرها ألفا جنيه إسترليني نقداً دون تردد، واصطحب خادمه والأميرة عودة وصعدوا جميعاً على متن باخرة 'رانغون' المتجهة إلى سنغافورة وهونغ كونغ.`,
      `صعد فيكس وراءهم وهو في قمة الغيظ. وخلال عبور مضيق ملقا، بدأ باسبارتو يتساءل عن سر تواجد هذا الرجل الإنجليزي الغريب على نفس سفنهم، فاستنتج ببراءة أن فيكس ليس سوى عميل سري أرسله أعضاء نادي الإصلاح للتجسس على سيده والتأكد من إتمامه الدورة حول الأرض! واجهت الباخرة رياحاً موسمية عاتية أخرتها يوماً كاملاً، لتصل إلى ميناء هونغ كونغ في 5 نوفمبر.`,
      `كانت هونغ كونغ هي الملاذ الأخير لفيكس؛ فهي آخر أرض خاضعة للسيادة البريطانية في مسار الرحلة، وإذا غادرها فوج نحو اليابان أو أمريكا، فلن يكون لأمر الاعتقال أي قيمة قانونية! في الوقت نفسه، علم فوج أن قريب الأميرة عودة قد هاجر إلى هولندا، فعرض عليها بنبل وشهامة مرافقتها إلى إنجلترا تحت رعايته.`,
      `علم باسبارتو أن الباخرة 'كارناتيك' المتجهة إلى يوكوهاما في اليابان قد أنهت صيانة مراجلها وقدمت موعد إبحارها إلى مساء ذلك اليوم في الثامنة بدلاً من الصباح التالي، وكان في طريقه لإبلاغ سيده وحجز المقاعد. لكن المحقق فيكس اعترضه واستدرجه إلى حانة وكر للأفيون في تلة فيكتوريا. وهناك قرر فيكس كشف أوراقه قائلاً: 'أنا محقق من سكوتلاند يارد، وسيدك فيلياس فوج هو اللص الذي سرق بنك إنجلترا! ساعدني في تعطيله هنا حتى يصل أمر القبض وسأقاسمك المكافأة!'.`,
      `ثار باسبارتو في وجه فيكس مدافعاً عن شرف سيده ونزاهته ورفض خيانته قطعاً. وحين رأى فيكس صلابة باسبارتو، دس له الأفيون المخدر في غليونه حتى غاب تماماً عن الوعي وتركه ممدداً في الوكر، ليفوت إبلاغ سيده بموعد إبحار السفينة.`,
      `في صباح اليوم التالي، وصل فوج والأميرة عودة إلى الميناء ليجدا أن باخرة 'كارناتيك' قد أبحرت، وأن باسبارتو قد اختفى في ظروف غامضة! لم يفقد فوج هدوءه، بل بحث في كل الأرصفة حتى عثر على قارب شراعي صغير يدعى 'تانكادير 43' بحمولته 20 طناً يقوده بحار شجاع يدعى جون بونزبي. أوضح بونزبي أن يوكوهاما بعيدة جداً، لكنه اقترح الإبحار 800 ميل شمالاً نحو ميناء شنغهاي للحاق بالباخرة الأمريكية 'جنرال غرانت' المتجهة إلى سان فرانسيسكو.`,
      `استأجر فوج القارب بمئة جنيه مع مكافأة مئتي جنيه إن وصلوا في الموعد. ضرب إعصار مدمر القارب الصغير في بحر الصين وكادت الأمواج العاتية تبتلعه. لكن شجاعة البحارة أوصلتهم إلى مدخل ميناء شنغهاي في 11 نوفمبر تماماً مع بدء تحرك الباخرة الأمريكية الضخمة! أمر فوج بإطلاق مدفع الإشارة ورفع راية الاستغاثة، فرأت الباخرة الأمريكية الإشارة وتوقفت لتصطحب فوج وعودة وفيكس (الذي كان فوج قد دعاه بنبل للصعود معهم) لعبور المحيط الهادئ.`
    ],
    highlightQuoteEn: {
      speaker: 'Jean Passepartout',
      quote: 'Betray my master? Never! He is the most generous and honorable gentleman on earth!'
    },
    highlightQuoteAr: {
      speaker: 'جان باسبارتو',
      quote: 'أخون سيدي؟ مستحيل! إنه أنبل وأكرم رجل على وجه هذه الأرض!'
    },
    dramaticMomentsEn: [
      'Paying two thousand pounds in cash bail at Calcutta to defeat Detective Fix\'s court trap',
      'The dramatic confession and drugging of Passepartout in the Hong Kong opium den',
      'Braving a monstrous South China Sea typhoon aboard the twenty-ton schooner Tankadere to catch the General Grant'
    ],
    dramaticMomentsAr: [
      'دفع كفالة ألفي جنيه نقداً في محكمة كلكتا لإحباط فخ المحقق فيكس القانوني',
      'اعتراف فيكس وتخدير باسبارتو في وكر الأفيون بهونغ كونغ لمنعه من إبلاغ سيده',
      'مواجهة إعصار بحر الصين المدمر على متن قارب التانكادير الشراعي للحاق بالباخرة الأمريكية'
    ]
  },
  {
    id: 5,
    chapterNumber: 5,
    titleEn: 'Chapter 5: Reunion in Yokohama and the Epic Transcontinental Dash Across America',
    titleAr: 'الفصل الخامس: اللقاء في يوكوهاما والسباق الملحمي عبر قارة أمريكا',
    settingEn: 'Yokohama (Japan), Pacific Ocean, San Francisco, Rocky Mountains, Fort Kearney, and Omaha',
    settingAr: 'يوكوهاما (اليابان)، المحيط الهادئ، سان فرانسيسكو، جبال روكي، حصن كيرني، وأوماها',
    datesEn: 'November 13 – December 11, 1872',
    datesAr: '13 نوفمبر – 11 ديسمبر 1872',
    illustration: {
      src: ch5Image,
      plateNumber: 'Plate V',
      plateNumberAr: 'لوحة ٥',
      sceneTitleEn: 'Wind-Powered Ice Sledge Across the American Prairie',
      sceneTitleAr: 'الزلاجة الشراعية تسابق الريح فوق سهول أمريكا الثلجية',
      captionEn: 'Racing at forty miles an hour across the frozen plains of Nebraska aboard an ice sledge rigged with sails to reach Omaha after the Sioux ambush.',
      captionAr: 'الانطلاق الملحمي بزلاجة ثلجية شراعية بسرعة 40 ميلاً في الساعة عبر براري نبراسكا المتجمدة لبلوغ أوماها وتعويض الوقت بعد هجوم السيو.',
      altEn: 'The wind-powered ice sledge speeding across frozen snowy plains with billowing sails',
      altAr: 'الزلاجة الثلجية ذات الأشرعة تندفع بسرعة فائقة فوق جليد السهول الأمريكية'
    },
    fullStoryParagraphsEn: [
      `Meanwhile, Jean Passepartout had awakened from his drugged stupor in Hong Kong just in time to stagger blindly down the quayside and collapse onto the Carnatic as its gangplank was lifted. He arrived in Yokohama, Japan, on November 13th without a single penny, food, or luggage. Wandering the port in despair, the clever Frenchman noticed a flamboyant poster for an acrobatic circus troupe directed by an eccentric American named William Batulcar: 'The Long Noses of the God Tingou'—acrobats who balanced upon towering human pyramids while wearing enormous bamboo noses. Desperate for food and a passage to America, Passepartout was hired immediately.`,
      `The following afternoon, Phileas Fogg and Princess Aouda, having just landed in Yokohama aboard the General Grant and combing the city for their lost servant, attended the circus performance. In the middle of the act, Passepartout was positioned at the very base of a precarious human pyramid. Suddenly glancing into the gallery, he spotted his beloved master! 'My master! My master!' he yelled, springing forward. The entire human pyramid collapsed in an avalanche of flailing limbs, tinsel, and broken bamboo noses! Fogg compensated Batulcar handsomely with banknotes, and the overjoyed trio reunited aboard the General Grant to cross the Pacific Ocean.`,
      `During the crossing, Passepartout encountered Fix on deck and gave the detective a thunderous thrashing. Fix dusted himself off and proposed an unexpected alliance: since they were now entering American territory where British warrants had no power, both men had the same objective—to get Fogg back to British soil as quickly as possible. Passepartout cautiously agreed not to reveal Fix's identity to Fogg for the time being.`,
      `They landed in San Francisco on December 3rd. There, Fogg was caught in a violent political riot on Montgomery Street between supporters of rival candidates Camerfield and Mandiboy. A towering, bellicose American named Colonel Stamp Proctor insulted Fogg and attempted to strike him, but Fix threw himself forward and intercepted the blow. Fogg coldly promised Proctor that they would settle the duel when they crossed paths again.`,
      `At six that evening, Fogg, Aouda, Passepartout, and Fix boarded the newly completed First Transcontinental Railroad train bound across America for New York—a journey of three thousand seven hundred miles through snow-capped mountains and untamed prairies. Near Medicine Bow, Wyoming, an immense herd of twelve thousand bison blocked the tracks for three whole hours. Later, the train halted before a rickety, vibrating suspension bridge over the Medicine Bow canyon. The engineer announced that the bridge would crumble under ordinary passage, but if the locomotive accelerated to one hundred miles an hour, its kinetic momentum might carry it across before the timbers gave way. The passengers voted to risk it; the train rocketed forward like an artillery projectile, clearing the gorge in a flash just as the bridge collapsed into the abyss behind them!`,
      `Near Fort Kearney, Nebraska, Colonel Stamp Proctor reappeared. Fogg and Proctor agreed to duel with revolvers in the rear passenger car. But just as the duel was about to commence, the train was ambushed by over two hundred Sioux warriors on horseback! Rifles shattered the windows, and raiders boarded the moving carriages. The passengers returned fire with revolvers, but the locomotive was speeding past Fort Kearney station; if the train did not halt, the military garrison could not save them. In an act of supreme courage, Passepartout crawled beneath the moving carriages, unhooked the safety chains, and decoupled the raging locomotive from the coaches! The carriages rolled smoothly to a halt before Fort Kearney, and the soldiers charged out and drove off the attackers.`,
      `However, when the passengers regrouped, Passepartout and two travelers were missing, captured by the retreating Sioux. Without a second's hesitation, Phileas Fogg declared: 'I will go. My servant saved us all; I will save him or die in the attempt.' Disregarding the wager and his fortune, Fogg marched into the howling blizzard with thirty volunteer soldiers from the fort.`,
      `Dawn broke in agonizing silence. Just as hope was fading, Fogg returned triumphant with Passepartout and the freed prisoners! But the cost was severe: the scheduled train had left, and Fogg was now twenty hours behind his required timetable. Refusing to yield, Fogg hired an American named Mudge, who owned an ice-sledge equipped with a mast, sails, and steel runners. Propelled by freezing gale-force winds at forty miles an hour across the frozen Nebraska plains, the sledge carried them safely to Omaha. Rapid trains sped them through Chicago to New York—only to arrive at the Hudson River pier at 11:15 PM on December 11th, learning that the ocean mail steamer China, bound for Liverpool, had sailed forty-five minutes earlier!`
    ],
    fullStoryParagraphsAr: [
      `في تلك الأثناء، كان جان باسبارتو قد أفاق من غيبوبة الأفيون في هونغ كونغ وترنح ليركب سفينة 'كارناتيك' في آخر لحظة قبل إقلاعها، ليصل إلى يوكوهاما في اليابان وحيداً ومفلساً وجائعاً تماماً. جاع باسبارتو في شوارع المدينة حتى رأى إعلاناً لفرقة سيرك استعراضية يديرها رجل يدعى ويليام باتولكار، وتعرف بفرقة 'الأنوف الطويلة للإله تينغو' التي تؤدي أهرامات بشرية بهلوانية. اضطر باسبارتو للعمل معهم كبهلوان للحصول على الطعام وثمن تذكرة السفر إلى أمريكا.`,
      `في اليوم التالي، وصل فوج والأميرة عودة على متن باخرة 'جنرال غرانت' وراحا يفتشان في كل مكان عن خادمهما الوفي، فدخلا خيمة السيرك. وفي منتصف العرض، وبينما كان باسبارتو يقف في قاعدة هرم بشري يرتدي أنفاً خشبياً ضخماً، لمح سيده بين الحضور، فصرخ بفرح هستيري: 'سيدي! سيدي العزيز!'. وقفز من مكانه، فانهار الهرم البشري بأكمله في مشهد فوضوي مضحك! عوّض فوج صاحب السيرك بحفنة سخية من الجنيهات، واجتمع شمل الثلاثة وصعدوا على متن الباخرة مبحرين عبر المحيط الهادئ إلى سان فرانسيسكو.`,
      `على متن السفينة، التقى باسبارتو بالمحقق فيكس وانهال عليه باللكمات، فما كان من فيكس إلا أن عرض هدنة: فبما أنهما على أرض أمريكية لا سلطة فيها للشرطة البريطانية، فإن مصلحتهما مشتركة في وصول فوج سريعاً إلى إنجلترا ليتمكن فيكس من اعتقاله قانونياً! وافق باسبارتو بحذر على عدم كشف هوية فيكس لسيده مؤقتاً.`,
      `وصلوا إلى سان فرانسيسكو في 3 ديسمبر، وهناك صادفوا شجاراً انتخابياً عنيفاً في شارع مونتغمري، واصطدم رجل أمريكي متغطرس يدعى الكولونيل بروكتر بفوج وحاول ضربه، فتلقى فيكس الضربة بدلاً منه، ووعد فوج بروكتر بتصفية الحساب في مبارزة قادمة. استقل الأبطال قطار السكك الحديدية العابر للقارة الأمريكية قاصدين نيويورك في رحلة تمتد لـ 3,700 ميل عبر سهول وجبال أمريكا الجليدية.`,
      `خلال الرحلة، عطلهم قطيع هائل من ثيران البيسون يضم أكثر من اثني عشر ألف رأس قطع السكة لثلاث ساعات. ثم واجهوا جسراً خشبياً معلقاً متهالكاً يوشك على الانهيار فوق وادٍ سحيق في وايومنغ، فما كان من السائق إلا أن أطلق القطار بأقصى سرعة جنونية (مئة ميل في الساعة) ليعبر كالقذيفة فوق الجسر الذي هوى في الهاوية فور مرورهم!`,
      `وعند حصن كيرني بنبراسكا، التقى فوج بالكولونيل بروكتر واتفقا على المبارزة بالمسدسات داخل العربة الأخيرة. ولكن قبل إطلاق الرصاص، هاجمت عصابة من مئتي مقاتل من قبائل السيو الهندية القطار بالبنادق واقتحموا العربات. كانت الكارثة تكمن في أن القطار سيتجاوز الحصن بسرعة البرق ولن يتمكن الجنود من نجدتهم، فتطوع باسبارتو وزحف تحت عجلات القطار المتحرك بشجاعة خارقة وفصل القاطرة عن العربات، لتتوقف العربات أمام الحصن ويهرب المهاجمون. لكن عند تفقد الركاب، تبيّن أن باسبارتو واثنين آخرين قد وقعوا أسرى في قبضة المهاجمين!`,
      `دون أي تردد، أعلن فيلياس فوج أنه سينقذ خادمه مهما كلفه الثمن، حتى لو خسر ثروته ورهانه: 'سأذهب للبحث عن باسبارتو؛ لقد أنقذ أرواحنا جميعاً ومن واجبي أن أنقذه أو أموت دونه'. خرج فوج برفقة ثلاثين جندياً متطوعاً وسط عواصف الثلج القارسة، وعاد في الصباح الباكر محرراً باسبارتو وسط هتافات الفرح! لكن الثمن كان فادحاً: لقد فاتهم القطار وتأخروا عشرين ساعة كاملة عن الموعد!`,
      `استأجر فوج زلاجة ثلجية شراعية صممها رجل يدعى مودج، تسير بأشرعة فوق الجليد بسرعة أربعين ميلاً في الساعة، وحملتهم كالريح عبر البراري المتجمدة من حصن كيرني إلى أوماها. ومن هناك ركبوا القطارات السريعة إلى شيكاغو ثم نيويورك، ليصلوا إلى رصيف الميناء في الساعة 11:15 ليلاً ويكتشفوا الصدمة المروعة: لقد أبحرت باخرة البريد 'تشاينا' المتجهة إلى ليفربول قبل 45 دقيقة فقط من وصولهم!`
    ],
    highlightQuoteEn: {
      speaker: 'Phileas Fogg',
      quote: 'What is my wager compared to the life of a loyal man? I will save Passepartout, even if it costs me my fortune.'
    },
    highlightQuoteAr: {
      speaker: 'فيلياس فوج',
      quote: 'ما قيمة الرهان والمال أمام حياة رجل مخلص؟ سأنقذ باسبارتو حتى لو كلفني ذلك كل ثروتي!'
    },
    dramaticMomentsEn: [
      'The collapse of the Long Noses human pyramid in the Yokohama circus upon spotting Fogg',
      'The locomotive leaping the crumbling Medicine Bow suspension bridge at one hundred miles an hour',
      'Passepartout decoupling the speeding train during the Sioux ambush and Fogg leading the blizzard rescue'
    ],
    dramaticMomentsAr: [
      'انهيار الهرم البشري البهلواني في سيرك يوكوهاما عند رؤية باسبارتو لسيده',
      'قفز القطار بالسرعة القصوى فوق الجسر الخشبي المتداعي في جبال وايومنغ',
      'زحف باسبارتو تحت القطار لفك العربات أثناء هجوم السيو، وإنقاذ فوج له في الثلج'
    ]
  },
  {
    id: 6,
    chapterNumber: 6,
    titleEn: 'Chapter 6: Burning the Henrietta, the Tragic Arrest, and the Miraculous Victory',
    titleAr: 'الفصل السادس: حرق أخشاب هنرييتا، الاعتقال المؤلم، والنصر المعجزة',
    settingEn: 'The Atlantic Ocean, Queenstown (Cobh, Ireland), Liverpool, and London (The Reform Club)',
    settingAr: 'المحيط الأطلسي، كوينزتاون (أيرلندا)، ليفربول، ولندن (نادي الإصلاح)',
    datesEn: 'December 12 – Saturday, December 21, 1872',
    datesAr: '12 ديسمبر – السبت، 21 ديسمبر 1872',
    illustration: {
      src: ch6Image,
      plateNumber: 'Plate VI',
      plateNumberAr: 'لوحة ٦',
      sceneTitleEn: 'Burning the Henrietta and the Return to Savile Row',
      sceneTitleAr: 'حرق أخشاب الباخرة هنرييتا والعودة الحاسمة لنادي الإصلاح',
      captionEn: 'The steamship Henrietta plowing through the Atlantic gale as its wooden masts and decks are fed to the ship furnaces to reach Britain in time.',
      captionAr: 'الباخرة هنرييتا تشق أمواج الأطلسي الهادرة بينما تُحرق صواريها وأخشابها في الأفران للحاق بالموعد النهائي وتحقيق الفوز التاريخي بالرهان.',
      altEn: 'The steamship Henrietta with smoking funnels plowing through stormy Atlantic waves',
      altAr: 'الباخرة هنرييتا تبحر بأقصى سرعة وسط أمواج المحيط الأطلسي'
    },
    fullStoryParagraphsEn: [
      `Fogg stood upon the cold, deserted pier in New York on December 12th. The last regular passenger vessel that could reach England before December 21st had sailed. He surveyed the Hudson River docks until he spotted an iron screw cargo vessel named the Henrietta, commanded by a gruff, stubborn old mariner named Captain Andrew Speedy. Speedy stated firmly that he carried no passengers and was sailing for Bordeaux, France—categorically refusing to go to Liverpool for any price.`,
      `Fogg offered Speedy two thousand dollars per passenger to take them to Bordeaux. The captain's greed capitulated. Once at sea the next morning, Fogg produced a thick roll of banknotes and bribed the crew, who locked the furious Captain Speedy securely in his cabin. Fogg, possessing extensive maritime knowledge, assumed the helm, ordering full steam ahead directly toward Liverpool across the winter Atlantic!`,
      `By December 18th, with howling gales threatening the ship, the engineer brought dire news: the coal bunkers were virtually empty; only a single day's supply remained, and they were still hundreds of miles from the British coast. Fogg unlocked Captain Speedy's cabin and brought the cursing captain on deck. With icy calm, Fogg said: 'Captain Speedy, I wish to purchase your ship.'`,
      `'Never! You pirate!' roared Speedy.`,
      `'I offer you sixty thousand dollars in cash for the vessel, and I will return the iron hull to you when we arrive.' Speedy was stunned into silence; the ship was worth barely forty thousand! The bargain was struck. Fogg immediately ordered the crew to axe down the wooden masts, rip up the decks, chop up the cabins, bunks, and wooden bulkheads, and cast them into the blazing boilers. The Henrietta groaned through the waves, fed by its own wooden heart, until it reached Queenstown (now Cobh) on the south coast of Ireland at one o'clock in the morning on December 20th.`,
      `Fogg, Aouda, Passepartout, and Fix took the express mail train to Dublin and chartered a high-speed ferry to Liverpool, arriving on the quayside at eleven forty in the morning on Saturday, December 21st. London was only six hours away by express train! Fogg had until 8:45 PM—nine full hours to cover six hours of distance. The bet was as good as won!`,
      `Suddenly, Detective Fix stepped forward, laid his heavy hand on Fogg's shoulder, and proclaimed loudly: 'Phileas Fogg, in the Queen\'s name, I arrest you as the thief of the Bank of England!'`,
      `The catastrophe fell like a thunderbolt! Stripped of his freedom, Fogg was thrown into a cold cell in the Liverpool Custom House. Passepartout wept bitterly, cursing himself for not having warned his master about Fix's identity in Hong Kong. Aouda sat in grief. Inside the dark cell, Fogg sat motionless, staring at his pocket watch as the minutes—and his fortune—ticked away. One o'clock... two o'clock... at thirty-three minutes past two, the door flew open!`,
      `Fix rushed in, disheveled, bleeding, and panting in horror: 'Sir... forgive me! A dreadful mistake... the real thief, a man named James Strand, was arrested three days ago at Brighton! You are free!'`,
      `For the first and only time in his life, Phileas Fogg lost his cool. Stepping forward with the precision of a master boxer, he drove both fists into the detective's jaw, knocking Fix flat onto the stone floor! Fogg rushed to the railway station and chartered a special express train to London. But fog and traffic delayed them. When they pulled into the London terminus, the clocks read ten minutes to nine—five minutes past the deadline of 8:45 PM! Phileas Fogg believed he was utterly ruined.`,
      `On Sunday, in his quiet house on Savile Row, Fogg met with Aouda. He apologized that he could no longer offer her a life of wealth, having lost his fortune on the wager. Aouda looked into his eyes with deep affection and said: 'Mr. Fogg, will you accept me as your wife?' Fogg, overwhelmed with emotion, clasped her hand and called for Passepartout to run to the Reverend Samuel Wilson to arrange the marriage for the following day, Monday.`,
      `Passepartout sprinted to the vicarage. Three minutes later, he burst back into Fogg's study like a hurricane, his eyes bulging: 'Master! Master! It is not Monday tomorrow! Today is not Sunday! Today is Saturday, December 21st!'`,
      `'Saturday? Impossible!' exclaimed Fogg.`,
      `'Yes! Yes!' yelled Passepartout. 'You have made a mistake of one whole day! Because we traveled constantly eastward toward the rising sun, our days became four minutes shorter for every degree of longitude we crossed! There are three hundred and sixty degrees around the Earth—three hundred and sixty times four minutes equals twenty-four hours! We gained an entire day without realizing it!'`,
      `Passepartout seized Fogg by the collar, hauled him into a waiting cab, and they raced through London streets. Meanwhile, at the Reform Club, the clock in the salon ticked: 8:42... 8:43... 8:44... The partners counted down the seconds: forty seconds... fifty seconds... At the fifty-ninth second, the salon doors swung wide open, and Phileas Fogg stepped calmly across the threshold, announcing: 'Here I am, gentlemen!'`,
      `Phileas Fogg had won his twenty thousand pounds. After deducting the nineteen thousand pounds spent on transport, bribes, and burning the Henrietta, a modest profit of one thousand pounds remained, which Fogg divided between the faithful Passepartout and Detective Fix—minus the cost of the gas burner left burning in Savile Row for eighty days! But as Jules Verne concludes, Phileas Fogg had won something infinitely greater than twenty thousand pounds: he had gained a charming, devoted wife who made him the happiest of men!`
    ],
    fullStoryParagraphsAr: [
      `وقف فيلياس فوج على رصيف ميناء نيويورك المتجمد صباح 12 ديسمبر، ليشهد خلو الميناء من أي باخرة ركاب تبحر إلى إنجلترا قبل موعد الرهان. مسح الأرصفة بعينيه حتى وجد سفينة تجارية بخارية تدعى 'هنرييتا' يقودها قبطان فظ عنيد يدعى آندرو سبيدي. رفض سبيدي نقله إلى ليفربول بأي ثمن مؤكداً أنه متجه إلى بوردو الفرنسية. عرض عليه فوج ألفي دولار عن كل راكب لقبولهم إلى بوردو، فقبل القبطان طمعاً في المال.`,
      `في صباح اليوم التالي في عرض البحر، أغرى فوج طاقم السفينة بالمال وحبس القبطان سبيدي في قمرته وتولى قيادة السفينة بنفسه موجهاً إياها بأقصى طاقة نحو ليفربول عبر المحيط الأطلسي العاصف! وفي 18 ديسمبر، وسط أمواج المحيط الهادرة، أعلن المهندس الكارثة: لقد نفد الفحم الحجري ولم يبقَ وقود سوى ليوم واحد، والمسافة المتبقية شاسعة!`,
      `أخرج فوج القبطان سبيدي وعرض عليه شراء السفينة بالكامل نقداً بستين ألف دولار (وهي لا تساوي أربعين ألفاً) مع إعادة هيكلها الحديدي له بعد الوصول. وافق سبيدي مذهولاً، وأمر فوج الطاقم بقطع الصواري وهدم الحجرات وتكسير الأسطح الخشبية وإلقائها في أفران المحركات لتغذية النيران! شقت السفينة عباب البحر بوقود من خشبها حتى بلغت شاطئ أيرلندا في كوينزتاون، ومنها ركبوا قطار البريد وسفينة ليفربول السريعة، ليصلوا إلى رصيف ليفربول في تمام الساعة 11:40 صباح السبت 21 ديسمبر! كانت لندن على بعد ست ساعات فقط بالقطار، ولديهم تسع ساعات كاملة حتى موعد 8:45 مساءً! لقد فاز بالرهان عملياً!`,
      `وفجأة، تقدم المحقق فيكس، ووضع يده الثقيلة على كتف فوج صائحاً: 'فيلياس فوج.. باسم الملكة، ألقي القبض عليك بتهمة سرقة بنك إنجلترا!'. سقط النبأ كالصاعقة؛ وأُلقي فوج في زنزانة مظلمة في مركز الجمارك! بكى باسبارتو ندماً لأنه لم يخبر سيده عن فيكس في هونغ كونغ، وجلست عودة تبكي. بينما جلس فوج في زنزانته متجمداً ينظر إلى ساعته، بينما تمر الدقائق القاتلة: الواحدة.. الثانية.. وعند الساعة 2:33 بعد الظهر، فُتح باب الزنزانة بعنف!`,
      `دخل فيكس وهو يلهث والدماء تنزف من وجهه: 'سيدي.. سامحني! لقد ألقي القبض على اللص الحقيقي المدعو جيمس ستراند في برايتون قبل ثلاثة أيام! أنت حر!'. ولأول وآخر مرة في حياته، فقد فيلياس فوج هدوءه، ووجّه لكمتين صاعقتين كالملاكمين المحترفين أطاحتا بالمحقق أرضاً! استأجر فوج قطاراً خاصاً إلى لندن، لكن الضباب وتأخر السكة جعله يصل المحطة في الساعة 8:50 مساءً.. أي بعد فوات الموعد بخمس دقائق! اعتقد فوج أنه خسر كل شيء وأصبح فقيراً معدماً.`,
      `في يوم الأحد بمنزله في سافيل رو، التقى فوج بالأميرة عودة واعتذر لها لأنه أصبح عاجزاً عن توفير الحياة الكريمة لها بعد خسارة ثروته، لكن عودة فاجأته قائلة بحب صادق: 'سيد فوج.. هل تقبل بي زوجة لك؟'. غمرت السعادة قلب فوج وطلب من باسبارتو الركض إلى القس صامويل ويلسون لتحديد موعد الزواج يوم الاثنين.`,
      `ركض باسبارتو إلى الكنيسة، وبعد ثلاث دقائق عاد كالإعصار صارخاً وجاحظ العينين: 'سيدي! سيدي! غداً ليس الاثنين! اليوم ليس الأحد! اليوم هو السبت 21 ديسمبر!'. قال فوج مذهولاً: 'السبت؟ مستحيل!'. صرخ باسبارتو: 'نعم! لقد أخطأت الحساب بيوم كامل! لأننا كنا نسافر شرقاً نحو الشمس المشرقة، كانت أيامنا تقصر أربع دقائق مع كل خط طول! و360 خط طول × 4 دقائق = 24 ساعة كاملة! لقد كسبنا يوماً كاملاً دون أن ندري!'.`,
      `أمسك باسبارتو بسيده ودفعه إلى العربة مسرعين في شوارع لندن. وفي نادي الإصلاح، كانت عقارب الساعة في الصالون تشير إلى: 8:44 مساءً.. 40 ثانية.. 50 ثانية.. وفي الثانية التاسعة والخمسين، انفتح الباب فجأة ودخل فيلياس فوج بهدوء ناطقاً بعبارته الشهيرة: 'ها أنا ذا يا سادة!'. فاز فيلياس فوج برهان العشرين ألف جنيه، وبعد خصم 19,000 جنيه نفقات الرحلة، تبقى ألف جنيه قاسمها بين باسبارتو وفيكس (بعد خصم فاتورة الغاز المشتعل لثمانين يوماً!). لكنه كما قال جول فيرن، كسب ما هو أثمن من كل كنوز الأرض: زوجة وفية جعلته أسعد الرجال!`
    ],
    highlightQuoteEn: {
      speaker: 'Phileas Fogg',
      quote: 'Here I am, gentlemen!'
    },
    highlightQuoteAr: {
      speaker: 'فيلياس فوج',
      quote: 'ها أنا ذا يا سادة!'
    },
    dramaticMomentsEn: [
      'Burning the wooden decks and masts of the Henrietta across the Atlantic Ocean',
      'The tragic wrongful arrest by Detective Fix at Liverpool docks with victory only hours away',
      'The revelation of gaining twenty-four hours by traveling eastward and bursting into the Reform Club at 8:44:59 PM'
    ],
    dramaticMomentsAr: [
      'حرق صواري وأسطح سفينة هنرييتا الخشبية في المحيط الأطلسي لمواصلة الإبحار',
      'الاعتقال الظالم المؤلم لفيلياس فوج في ليفربول وهو على بُعد ساعات من الفوز',
      'اكتشاف معجزة كسب 24 ساعة بسبب الدوران شرقاً، واقتحام نادي الإصلاح في الثانية 59'
    ]
  }
];
