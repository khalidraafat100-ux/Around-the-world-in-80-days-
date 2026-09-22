export interface MechanicalApparatus {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  featuredInChapter: number;
  specs: {
    speedEn: string;
    speedAr: string;
    propulsionEn: string;
    propulsionAr: string;
    fuelEn: string;
    fuelAr: string;
    powerEn: string;
    powerAr: string;
  };
  engineeringSummaryEn: string;
  engineeringSummaryAr: string;
  scientificPrincipleEn: string;
  scientificPrincipleAr: string;
  novelQuoteEn: string;
  novelQuoteAr: string;
  diagramDetailsEn: string[];
  diagramDetailsAr: string[];
}

export const MECHANICAL_APPARATUSES: MechanicalApparatus[] = [
  {
    id: 'steam_locomotive',
    nameEn: '4-4-0 "American" Class Steam Locomotive',
    nameAr: 'قاطرة البخار الأمريكية طراز 4-4-0 العابرة للقارات',
    categoryEn: 'Railroad Engineering',
    categoryAr: 'هندسة السكك الحديدية البخارية',
    featuredInChapter: 5,
    specs: {
      speedEn: '40–60 mph (100 mph during Medicine Bow bridge leap)',
      speedAr: '40–60 ميل/ساعة (100 ميل/ساعة أثناء قفز جسر ميديسن بو)',
      propulsionEn: 'High-pressure fire-tube steam boiler driving double side-pistons',
      propulsionAr: 'مرجل بخاري ناري عالي الضغط يدفع مكبسين جانبيين',
      fuelEn: 'Bituminous coal & dry wood logs',
      fuelAr: 'فحم حجري بيتوميني وأخشاب جافة',
      powerEn: 'approx. 650–800 Indicated Horsepower (IHP)',
      powerAr: 'حوالي 650–800 حصان بخاري',
    },
    engineeringSummaryEn:
      'The backbone of the First Transcontinental Railroad across America (3,700 miles). Engineered to tackle steep Rocky Mountain grades and sub-zero blizzards. When the decrepit Medicine Bow suspension bridge threatened collapse, the engineer calculated that accelerating to maximum velocity (100 mph) would allow momentum to carry the train across before structural harmonics sheared the beams.',
    engineeringSummaryAr:
      'العمود الفقري لأول خط سكة حديد عابر للقارة الأمريكية (3,700 ميل). صُممت لتسلق مرتفعات جبال روكي ومقاومة عواصف البراري الثلجية. عندما هدد جسر ميديسن بو المعلق بالسقوط، أطلق السائق القاطرة بأقصى سرعة (100 ميل/ساعة) لتستغل عزم القصور الذاتي وتعبر الوادي في ثوانٍ معدودة قبل انهيار العوارض الخشبية في الهاوية.',
    scientificPrincipleEn:
      'Momentum and Structural Resonance: By exceeding the vibrational collapse frequency of the compromised bridge, the dynamic load duration was reduced below the failure threshold of the steel cables.',
    scientificPrincipleAr:
      'عزم القصور الذاتي والتردد الرنيني: تقليل زمن التأثير الحركي للقطار إلى ما دون عتبة انهيار الكابلات، مما سمح بالعبور قبل انهيار الجسر.',
    novelQuoteEn:
      'The train seemed to have no weight. It shot across like a projectile, and as it reached the opposite bank, the bridge crashed headlong into the torrent below!',
    novelQuoteAr:
      'بدا وكأن القطار فقد وزنه تماماً. انطلق كالقذيفة نحو الضفة الأخرى، وما إن حطت عجلاته حتى هوى الجسر بكامله في الوادي السحيق!',
    diagramDetailsEn: [
      'Heavy iron cowcatcher to clear buffalo herds and snow drifts',
      'Pneumatic braking and emergency manual uncoupling linkage beneath carriages',
      'Twin four-wheel leading bogie and four massive coupled driving wheels',
    ],
    diagramDetailsAr: [
      'مصد حديدي أمامي ضخم لإزاحة قطعان البيسون وركام الجليد',
      'نظام فرامل ميكانيكي وحلقات فصل يدوية طارئة أسفل العربات',
      'عجلات قيادة مقترنة ضخمة لتوليد قوة جر هائلة في المرتفعات',
    ],
  },
  {
    id: 'henrietta_steamer',
    nameEn: 'SS Henrietta — Wood-Combustion Iron Screw Steamer',
    nameAr: 'باخرة هنرييتا الحديدية ذات الدفع اللولبي والحرق الحراري',
    categoryEn: 'Marine Propulsion & Thermal Conversion',
    categoryAr: 'الدفع البحري والتحويل الحراري',
    featuredInChapter: 6,
    specs: {
      speedEn: '11–13 knots (forced-draft ocean sprint)',
      speedAr: '11–13 عقدة بحرية (سرعة قصوى بالسحب القسري)',
      propulsionEn: 'Vertical compound inverted steam engine turning a bronze screw',
      propulsionAr: 'محرك بخاري مركب يدير مروحة لولبية برونزية',
      fuelEn: 'Anthracite coal converted to ship timbers, decks, and masts',
      fuelAr: 'فحم أنثراسيت، ثم أخشاب وصواري وأسطح السفينة',
      powerEn: 'approx. 850 Horsepower',
      powerAr: 'نحو 850 حصان بحري',
    },
    engineeringSummaryEn:
      'A 1,600-ton ocean trading vessel with an iron hull and extensive timber superstructure. Facing empty coal bunkers in mid-Atlantic winter gales, Phileas Fogg purchased the vessel and ordered its masts, bulkheads, cabins, and teak decking hacked down with axes to feed the furnace boilers, maintaining maximum steam pressure all the way to Queenstown.',
    engineeringSummaryAr:
      'سفينة تجارية عابرة للمحيطات تزن 1,600 طن بهيكل حديدي صلب وبنية خشبية. عند نفاد الفحم الحجري في قلب المحيط الأطلسي، اشترى فوج السفينة بستين ألف دولار وأمر الطاقم بقطع الصواري وهدم الأجنحة والأسطح الخشبية وتغذية المراجل بها للحفاظ على ضغط البخار حتى بلوغ شواطئ بريطانيا.',
    scientificPrincipleEn:
      'Calorific Thermal Conversion: Seasoned teak, oak, and pine wood provide approximately 16–18 MJ/kg of thermal combustion energy, sufficient to sustain boiler pressure at 60 psi despite higher volume consumption than coal.',
    scientificPrincipleAr:
      'القيمة الحرارية للاحتراق: خشب الصنوبر والبلوط يوفر طاقة حرارية بنحو 17 ميغاجول/كغ، ما كفى لتوليد ضغط بخار 60 رطل/بوصة مربعة لتعويض نفاد الفحم الحجري.',
    novelQuoteEn:
      'The woodwork was burned: bunks, cabins, decks, and even parts of the hull lining went into the furnaces. The Henrietta was literally consuming herself to make port!',
    novelQuoteAr:
      'أُحرقت الأخشاب بأكملها: الأسِرّة، الغرف، الأسطح، وحتى بطانة الهيكل. كانت سفينة هنرييتا تلتهم نفسها حرفياً لتصل إلى الميناء!',
    diagramDetailsEn: [
      'Heavy iron hull impervious to furnace heat and sea storms',
      'Scotch marine multi-tubular firebox with forced air intake',
      'Bronze four-bladed screw propeller submerged below the waterline',
    ],
    diagramDetailsAr: [
      'هيكل حديدي مقاوم للحرارة والأمواج الأطلسية العاتية',
      'مرجل أنبوبي بحري مزود بنظام سحب هوائي لزيادة حرارة اللهب',
      'مروحة دفع لولبية رباعية الشفرات من البرونز أسفل خط الماء',
    ],
  },
  {
    id: 'ice_sledge',
    nameEn: 'Mudge\'s Wind-Propelled Ice Sledge (Aero-Sloop)',
    nameAr: 'زلاجة مودج الثلجية الشراعية (المركبة الهوائية للجليد)',
    categoryEn: 'Aerodynamic Winter Mechanics',
    categoryAr: 'ميكانيكا الانزلاق الهوائي الشتوي',
    featuredInChapter: 5,
    specs: {
      speedEn: '35–45 mph over frozen prairie snow',
      speedAr: '35–45 ميل/ساعة فوق ثلوج السهول المتجمدة',
      propulsionEn: 'Aerodynamic wind thrust via schooner rig and lateen mainsail',
      propulsionAr: 'دفع هوائي طبيعي بأشرعة مثلثة وسارية شكونر',
      fuelEn: 'Zero fuel — 100% kinetic energy from freezing prairie gales',
      fuelAr: 'صفر وقود — طاقة حركية طبيعية 100% من عواصف الرياح القارسة',
      powerEn: 'Kinetic wind force equivalent to 40 horses on flat snow',
      powerAr: 'قوة دفع رياح تعادل 40 حصاناً على الثلج المستوي',
    },
    engineeringSummaryEn:
      'When the train was lost at Fort Kearney, Phileas Fogg chartered this mechanical ice sledge built by American inventor Mudge. Fitted with five polished steel runners and a high wooden mast carrying broad canvas sails, it skimmed over the frozen Nebraska plains to Omaha at breakneck speeds, overcoming a 20-hour handicap.',
    engineeringSummaryAr:
      'عندما فاتهم القطار في حصن كيرني، استأجر فوج هذه الزلاجة الشراعية التي ابتكرها المهندس الأمريكي مودج. مزودة بخمس زلاجات فولاذية مصقولة وسارية شراع ضخمة، مكنتهم من الانزلاق الخارق فوق سهول نبراسكا المتجمدة إلى أوماها، معوضين تأخيراً قاتلاً بلغ 20 ساعة.',
    scientificPrincipleEn:
      'Low-Friction Tribology & Aerodynamic Lift: Polished steel runners generate microscopic friction-melted water layers on snow, lowering dynamic friction to below μ = 0.03, allowing gale winds to propel the light chassis beyond 40 mph.',
    scientificPrincipleAr:
      'معامل الاحتكاك الشديد الانخفاض: الزلاجات الفولاذية المصقولة تولد طبقة مائية مجهرية بالضغط تخفض الاحتكاك مع الثلج، مما سمح لرياح العاصفة بدفع المركبة بسرعة 40 ميلاً في الساعة.',
    novelQuoteEn:
      'The sledge skimmed over the vast white steppe like a giant aquatic bird. The icy wind howled through the rigging as Omaha appeared upon the horizon.',
    novelQuoteAr:
      'انزلقت الزلاجة فوق السهول البيضاء كالطائر المائي العملاق، وعوت الرياح الجليدية في أشرعتها بينما لاحت مدينة أوماها في الأفق!',
    diagramDetailsEn: [
      'Reinforced pine plank chassis with curved steel blade runners',
      'Pivot tiller helm controlling rear directional ski for steering',
      'Heavy canvas mainsail and staysail rigged on a stout spruce mast',
    ],
    diagramDetailsAr: [
      'هيكل خفيف من خشب الصنوبر المقوى يرتكز على صفائح فولاذية مقوسة',
      'ذراع توجيه خلفي يتحكم في زلاجة التوجيه لمناورة المنعطفات',
      'أشرعة كتانية عريضة مثبتة على سارية متينة لاقتناص الرياح الخلفية والجانبية',
    ],
  },
  {
    id: 'mongolia_steamer',
    nameEn: 'P&O SS Mongolia — Compound Steam Ocean Liner',
    nameAr: 'باخرة منغوليا البحرية ذات المحرك البخاري المتعدد التمدد',
    categoryEn: 'Maritime Steam Engineering',
    categoryAr: 'الهندسة البحرية البخارية',
    featuredInChapter: 2,
    specs: {
      speedEn: '13.5 knots regular / 15 knots forced steaming',
      speedAr: '13.5 عقدة عادية / 15 عقدة بالدفع الأقصى',
      propulsionEn: 'Direct-acting compound steam engine with surface condensation',
      propulsionAr: 'محرك بخاري مركب مع مكثف سطحي لمياه البحر',
      fuelEn: 'Steam coal loaded at Suez and Aden coaling stations',
      fuelAr: 'فحم بخاري يتم شحنه في محطات السويس وعدن',
      powerEn: '1,000 Nominal Horsepower',
      powerAr: '1,000 حصان بخاري اسمي',
    },
    engineeringSummaryEn:
      'The prestigious 2,800-ton flagship of the Peninsular & Oriental Line. Fitted with cutting-edge marine boilers and an iron screw, she sliced across the Mediterranean, negotiated the newly opened Suez Canal, and crossed the treacherous Indian Ocean to Bombay two full days ahead of schedule.',
    engineeringSummaryAr:
      'الباخرة العملاقة لأسطول P&O بحمولة 2,800 طن. مزودة بأحدث المراجل البخارية ومروحة دفع لولبية حديدية، شقت البحر الأبيض المتوسط وعبرت قناة السويس حديثة الافتتاح والمحيط الهندي وصولاً إلى بومباي متقدمة بيومين كاملين عن الجدول الزمني.',
    scientificPrincipleEn:
      'Compound Steam Expansion: Utilizing high-pressure steam sequentially across high and low-pressure cylinders increased thermodynamic efficiency by 30%, conserving coal on long trans-oceanic legs.',
    scientificPrincipleAr:
      'تمدد البخار المركب: تدوير البخار عالي الضغط عبر أسطوانتين متتاليتين زاد الكفاءة الحرارية بنسبة 30% ووفر كميات ضخمة من الفحم في رحلات المحيط الطويلة.',
    novelQuoteEn:
      'The Mongolia ploughed the waters of the Indian Ocean, her powerful screw churning the sea into a boiling froth, carrying Mr. Fogg forward with clockwork regularity.',
    novelQuoteAr:
      'شقت منغوليا مياه المحيط الهندي، وكانت مروحتها الجبارة تحيل الماء إلى رغوة بيضاء دافعة فوج بدقة وانتظام عقارب الساعة.',
    diagramDetailsEn: [
      'Twin high-pressure Scotch boilers with double furnaces',
      'Teak promenade decks and iron watertight bulkheads',
      'Auxiliary brig-rigged sails for fuel saving in favorable trade winds',
    ],
    diagramDetailsAr: [
      'مرجلان بخاريان متعددا الأنابيب بأفران مزدوجة',
      'قواطع حديدية مانعة لتسرب المياه مقسمة لهيكل الباخرة',
      'أشرعة مساعدة على صواري الباخرة لتوفير الفحم عند هبوب الرياح المواتية',
    ],
  },
  {
    id: 'global_telegraph',
    nameEn: 'Transcontinental & Submarine Electric Telegraph Network',
    nameAr: 'شبكة التلغراف الكهربائية القارية والكابلات البحرية',
    categoryEn: 'Telecommunications & Morse Electromagnetism',
    categoryAr: 'الاتصالات السلكية والكهرومغناطيسية',
    featuredInChapter: 2,
    specs: {
      speedEn: 'Instantaneous (speed of electric impulse ~186,000 miles/sec)',
      speedAr: 'لحظية (سرعة النبضة الكهربائية ~186,000 ميل/ثانية)',
      propulsionEn: 'Daniell galvanic chemical batteries & copper-core cables',
      propulsionAr: 'بطاريات دانييل الكهروكيميائية وكابلات النحاس المعزول',
      fuelEn: 'Chemical zinc & copper sulfate galvanic electrolyte',
      fuelAr: 'زنك كيميائي ومحلول كبريتات النحاس المنشط',
      powerEn: 'Low-voltage DC electric current with galvanometer needles',
      powerAr: 'تيار كهربائي مستمر منخفض الجهد بمؤشرات جلفانومترية',
    },
    engineeringSummaryEn:
      'The invisible nervous system of the British Empire. Undersea copper telegraph cables laid along the seabed of the Mediterranean, Red Sea, and Atlantic allowed Detective Fix to transmit encrypted Morse warrants between London, Suez, and Bombay in seconds, racing ahead of Fogg\'s steamers.',
    engineeringSummaryAr:
      'الجهاز العصبي غير المرئي للإمبراطورية البريطانية. كابلات التلغراف البحرية المعزولة بصمغ الغوتا-بيركا في قاع البحر المتوسط والأحمر والأطلسي مكنت المحقق فيكس من إرسال برقيات الاعتقال المشفرة بين لندن والسويس وبومباي في ثوانٍ، متفوقة على سرعة أسرع البواخر.',
    scientificPrincipleEn:
      'Electromagnetic Signal Propagation: Electric currents passing through submerged copper conductors induce magnetic deflections at remote receivers according to Morse code dot-dash sequences.',
    scientificPrincipleAr:
      'انتشار الإشارات الكهرومغناطيسية: مرور النبضات الكهربائية عبر الموصلات النحاسية يحرك إبر الجلفانومتر لتسجيل شيفرة مورس اللحظية.',
    novelQuoteEn:
      'While Mr. Fogg was sailing across the waves, the electric wire whispered his name beneath the seabed, sending words swifter than the lightning itself.',
    novelQuoteAr:
      'بينما كان فيلياس فوج يمخر عباب الأمواج، همست الأسلاك الكهربائية باسمه في قاع البحار ناقلة الكلمات بسرعة تفوق البرق الخاطف!',
    diagramDetailsEn: [
      'Gutta-percha waterproof insulated copper submarine cable core',
      'Morse key transmitter and brass paper-tape punch register',
      'Reflecting mirror galvanometer for weak transatlantic currents',
    ],
    diagramDetailsAr: [
      'كابل بحري نحاسي معزول بمادة الغوتا-بيركا المضادة للماء والضغط',
      'مفتاح مورس النحاسي وشريط ورقي مثقوب لتسجيل النبضات',
      'جلفانومتر ذو مرآة عاكسة لرصد أضعف الإشارات العابرة للمحيط',
    ],
  },
  {
    id: 'marine_chronometer',
    nameEn: 'Precision Marine Chronometer & Astronomical Escapement',
    nameAr: 'الكرونومتر البحري الدقيق وساعة الجيب الميكانيكية ذات الميزان',
    categoryEn: 'Horology & Celestial Mechanics',
    categoryAr: 'علم قياس الوقت والميكانيكا الفلكية',
    featuredInChapter: 6,
    specs: {
      speedEn: 'Exact 86,400 seconds per solar day (deviation < 0.2 sec/day)',
      speedAr: '86,400 ثانية بالضبط في اليوم الشمسي (خطأ < 0.2 ثانية/يوم)',
      propulsionEn: 'Steel mainspring with fusée cone tension compensator',
      propulsionAr: 'نابض فولاذي حلزوني مزود بمخروط حلزوني لتعديل الشد',
      fuelEn: 'Manual key winding every 24 hours',
      fuelAr: 'تعبئة يدوية بالمفتاح كل 24 ساعة',
      powerEn: 'Mechanical spring torque with jeweled lever escapement',
      powerAr: 'عزم ميكانيكي مع ميزان رافعة مرصع بالأحجار الكريمة',
    },
    engineeringSummaryEn:
      'Phileas Fogg\'s pocket watch and Passepartout\'s heirloom timepiece tracked Greenwich Mean Time (GMT). By traveling east toward the rising sun, the travelers shortened their days by 4 minutes per 1° longitude. Crossing all 360 meridians mechanically generated an unnoticed 24-hour bonus that transformed catastrophic defeat into victory!',
    engineeringSummaryAr:
      'ساعة جيب فيلياس فوج وساعة باسبارتو العائلية ضبطتا على توقيت غرينتش. وبالسفر شرقاً باتجاه شروق الشمس، كانت أيامهما تقصر بمعدل 4 دقائق لكل درجة طول. واجتياز 360 خط طول أفرز ميكانيكياً ربح 24 ساعة كاملة حسمت الرهان في اللحظة الأخيرة!',
    scientificPrincipleEn:
      'Geodetic Longitude Time Shift: 360 degrees of terrestrial circumference divided by 24 hours equals 15 degrees per hour, or exactly 4 minutes per degree. An eastward circumnavigator sees the sun rise 360 times while a stationary Londoner sees only 359.',
    scientificPrincipleAr:
      'الإزاحة الزمنية لخطوط الطول: دوران الأرض بمقدار 360 درجة خلال 24 ساعة يعني 15 درجة لكل ساعة (أو 4 دقائق لكل درجة طول). المسافر شرقاً يشهد شروق الشمس 360 مرة بينما الشاهد في لندن يشهد 359 شروقاً فقط!',
    novelQuoteEn:
      'Passepartout had stubbornly refused to adjust his watch to local times, keeping it on London time. Unknowingly, that mechanical stubbornness proved the key to their temporal triumph!',
    novelQuoteAr:
      'رفض باسبارتو بعناد تعديل ساعته على التوقيت المحلي وأبقاها على توقيت لندن. وبلا دراية منه، كان هذا العناد الميكانيكي هو مفتاح نصرهما الزمني الخالد!',
    diagramDetailsEn: [
      'Bi-metallic temperature-compensated balance wheel',
      'Fusée chain compensating for spring power decline',
      '360-degree meridian solar day calculator interface',
    ],
    diagramDetailsAr: [
      'عجلة ميزان ثنائية المعدن تعوض التمدد والانكماش بالحرارة',
      'سلسلة حلزونية مخروطية لضمان ثبات عزم النابض طوال اليوم',
      'قرص حركي فلكي لحساب فارق خطوط الطول بالنسبة لغرينتش',
    ],
  },
];
