const completeQuranReadings = [
  r(1,[p('Al-Fatihah',1,7),p('Al-Baqarah',1,39)],'The Beginning of Guidance','Opening, guidance, the three groups of people, and the story of Adam.',1,1,9),
  r(2,[p('Al-Baqarah',40,123)],'Lessons from Bani Israel','Reminders, covenants, tests, and lessons from the Children of Israel.',2,40,12),
  r(3,[p('Al-Baqarah',124,167)],'The Legacy of Ibrahim','Ibrahim, the Ka‘bah, the qiblah, and the identity of the Muslim ummah.',2,124,8),
  r(4,[p('Al-Baqarah',168,242)],'Building the Muslim Community','Food, fasting, Hajj, family law, and community obligations.',2,168,14),
  r(5,[p('Al-Baqarah',243,286)],'Trust, Charity, and Submission','Spending, faith, debt, and the closing du‘a of Al-Baqarah.',2,243,8),
  r(6,[p('Aal ‘Imran',1,63)],'The Family of ‘Imran','Tawhid, revelation, and the stories of Maryam and ‘Isa.',3,1,11),
  r(7,[p('Aal ‘Imran',64,120)],'Holding Fast to the Truth','People of the Book, obedience, and warnings against division.',3,64,10),
  r(8,[p('Aal ‘Imran',121,200)],'Trials and Steadfastness','Uhud, patience, sacrifice, and the closing reminders.',3,121,13),
  r(9,[p('An-Nisa',1,43)],'Rights and Responsibilities','Family rights, inheritance, women, orphans, and prayer.',4,1,10),
  r(10,[p('An-Nisa',44,104)],'Justice and Obedience','Judgment, hypocrisy, obedience to Allah and His Messenger, and struggle.',4,44,12),
  r(11,[p('An-Nisa',105,176)],'Upholding Justice','Justice, repentance, People of the Book, and final inheritance rulings.',4,105,12),
  r(12,[p('Al-Ma’idah',1,50)],'Covenants and Law','Contracts, lawful food, purification, justice, and judgment.',5,1,11),
  r(13,[p('Al-Ma’idah',51,120)],'Loyalty, Truth, and Accountability','Alliance, belief, previous nations, and the table spread.',5,51,11),
  r(14,[p('Al-An‘am',1,73)],'Signs of Tawhid','Allah’s signs, rejection, and Ibrahim’s reasoning against shirk.',6,1,11),
  r(15,[p('Al-An‘am',74,110)],'Ibrahim and Prophetic Guidance','Ibrahim, the prophets, revelation, and stubborn rejection.',6,74,7),
  r(16,[p('Al-An‘am',111,165)],'The Straight Path','Lawful and unlawful, false religion, and the closing command to follow guidance.',6,111,10),
  r(17,[p('Al-A‘raf',1,58)],'Creation, Adam, and Warning','The beginning, Adam and Iblis, and signs of mercy and warning.',7,1,10),
  r(18,[p('Al-A‘raf',59,137)],'Prophets and Their Peoples','Nuh, Hud, Salih, Lut, Shu‘ayb, and the rise of Musa.',7,59,13),
  r(19,[p('Al-A‘raf',138,206)],'Musa, Covenant, and Worship','Bani Israel, the covenant, the Final Messenger, and remembrance.',7,138,11),
  r(20,[p('Al-Anfal',1,75)],'Battle, Trust, and Brotherhood','Badr, obedience, reliance upon Allah, and brotherhood.',8,1,10),
  r(21,[p('At-Tawbah',1,37)],'Disavowal and Sacred Limits','Treaties, repentance, sacred months, and sincerity.',9,1,8),
  r(22,[p('At-Tawbah',38,72)],'Striving and Hypocrisy','Reluctance, excuses, sacrifice, and qualities of believers.',9,38,8),
  r(23,[p('At-Tawbah',73,129)],'Repentance and Completion','Hypocrisy exposed, repentance accepted, and reliance upon Allah.',9,73,9),
  r(24,[p('Yunus',1,109)],'Truth of Revelation','Tawhid, revelation, signs, and the stories of Nuh and Musa.',10,1,11),
  r(25,[p('Hud',1,60)],'Steadfastness and Earlier Nations','Warnings, Nuh, Hud, and the command to remain firm.',11,1,10),
  r(26,[p('Hud',61,123)],'Prophets, Patience, and Trust','Salih, Ibrahim, Lut, Shu‘ayb, Musa, and reliance upon Allah.',11,61,10),
  r(27,[p('Yusuf',1,111)],'The Story of Yusuf','A complete story of trial, patience, chastity, and Allah’s perfect plan.',12,1,12),
  r(28,[p('Ar-Ra‘d',1,43)],'Truth, Signs, and Hearts','Signs in creation, the Qur’an, and hearts finding rest in remembrance.',13,1,7),
  r(29,[p('Ibrahim',1,52)],'Gratitude and Warning','Musa, Ibrahim’s du‘a, gratitude, and the fate of the wrongdoers.',14,1,7),
  r(30,[p('Al-Hijr',1,99)],'Protection of Revelation','The preserved Qur’an, earlier nations, and worship until certainty comes.',15,1,6),
  r(31,[p('An-Nahl',1,83)],'Blessings and Tawhid','Allah’s blessings, signs, revelation, and gratitude.',16,1,11),
  r(32,[p('An-Nahl',84,128)],'Gratitude and Patience','Resurrection, justice, lawful provision, da‘wah, and patience.',16,84,7),
  r(33,[p('Al-Isra',1,52)],'Night Journey and Guidance','The night journey, Bani Israel, Qur’anic guidance, and accountability.',17,1,8),
  r(34,[p('Al-Isra',53,111)],'The Qur’an and Human Nature','Moral commands, revelation, arrogance, and praising Allah.',17,53,8),
  r(35,[p('Al-Kahf',1,59)],'Trials of Faith and Wealth','The companions of the cave and the two gardens.',18,1,8),
  r(36,[p('Al-Kahf',60,110)],'Knowledge, Power, and Sincerity','Musa and Al-Khidr, Dhul-Qarnayn, and sincere worship.',18,60,7),
  r(37,[p('Maryam',1,98)],'Mercy and Prophethood','Zakariyya, Maryam, ‘Isa, Ibrahim, and the prophets.',19,1,7),
  r(38,[p('Ta-Ha',1,82)],'Musa and Pharaoh','Revelation to Musa, the confrontation with Pharaoh, and deliverance.',20,1,9),
  r(39,[p('Ta-Ha',83,135)],'The Calf and the Reminder','The trial of Bani Israel, Adam, and patience upon revelation.',20,83,6),
  r(40,[p('Al-Anbiya',1,112)],'The Prophets','Warnings, the prophets, and Allah’s mercy to the worlds.',21,1,10),
  r(41,[p('Al-Hajj',1,78)],'Worship and Sacrifice','Resurrection, pilgrimage, sacrifice, struggle, and submission.',22,1,10),
  r(42,[p('Al-Mu’minun',1,118)],'Successful Believers','Qualities of believers, creation, earlier nations, and accountability.',23,1,8),
  r(43,[p('An-Nur',1,64)],'Light, Modesty, and Community','Family protection, modesty, social manners, and Allah’s light.',24,1,9),
  r(44,[p('Al-Furqan',1,77)],'The Criterion','Rejection, signs, humility, and the servants of the Most Merciful.',25,1,7),
  r(45,[p('Ash-Shu‘ara',1,104)],'Prophets and Rejection I','Musa and Ibrahim, with lessons in da‘wah and rejection.',26,1,7),
  r(46,[p('Ash-Shu‘ara',105,227)],'Prophets and Rejection II','Nuh, Hud, Salih, Lut, Shu‘ayb, and the Qur’an’s truth.',26,105,8),
  r(47,[p('An-Naml',1,93)],'Wisdom and Dominion','Musa, Sulayman, the Queen of Saba, signs, and gratitude.',27,1,9),
  r(48,[p('Al-Qasas',1,50)],'Musa’s Early Life','Musa’s upbringing, exile, return, and the truth of revelation.',28,1,8),
  r(49,[p('Al-Qasas',51,88)],'Guidance and Qarun','Guidance, worldly deception, Qarun, and the Hereafter.',28,51,6),
  r(50,[p('Al-‘Ankabut',1,69)],'Trials of Faith','Testing, previous nations, migration, and striving for Allah.',29,1,7),
  r(51,[p('Ar-Rum',1,60)],'Signs and Certainty','Allah’s signs in history, creation, marriage, and resurrection.',30,1,6),
  r(52,[p('Luqman',1,34)],'Wisdom and Gratitude','Luqman’s advice, gratitude, tawhid, and the unseen.',31,1,4),
  r(53,[p('As-Sajdah',1,30)],'Revelation and Return','Creation, resurrection, and the contrast between believers and sinners.',32,1,3),
  r(54,[p('Al-Ahzab',1,40)],'Obedience and the Confederates','Family rulings, adoption, and the Battle of the Confederates.',33,1,8),
  r(55,[p('Al-Ahzab',41,73)],'Remembrance and Responsibility','Dhikr, the Prophet’s household, modesty, and the trust.',33,41,5),
  r(56,[p('Saba',1,54)],'Gratitude and Accountability','Dawud, Sulayman, Saba, worldly pride, and the Hereafter.',34,1,6),
  r(57,[p('Fatir',1,45)],'Creator and Sustainer','Allah’s creation, dependence, knowledge, and warning.',35,1,5),
  r(58,[p('Ya-Sin',1,83)],'The Heart of Reminder','Messengers, signs, resurrection, and Allah’s command.',36,1,6),
  r(59,[p('As-Saffat',1,98)],'Ranks, Resurrection, and Ibrahim','The angels, resurrection, and Ibrahim’s trial.',37,1,6),
  r(60,[p('As-Saffat',99,182)],'Prophets and Praise','Ishaq, Musa, Ilyas, Lut, Yunus, and praise of Allah.',37,99,5),
  r(61,[p('Sad',1,88)],'Power, Patience, and Repentance','Dawud, Sulayman, Ayyub, and the command to remember.',38,1,6),
  r(62,[p('Az-Zumar',1,31)],'Sincere Worship','Ikhlas, the Qur’an, and the contrast between guidance and loss.',39,1,5),
  r(63,[p('Az-Zumar',32,75)],'Hope, Repentance, and Judgment','Repentance, reliance, the blowing of the trumpet, and final judgment.',39,32,6),
  r(64,[p('Ghafir',1,50)],'Forgiveness and Warning','The angels’ du‘a, Pharaoh’s people, and the believer from Pharaoh’s family.',40,1,7),
  r(65,[p('Ghafir',51,85)],'Victory and Consequence','Allah supports His messengers and shows the fate of denial.',40,51,4),
  r(66,[p('Fussilat',1,54)],'The Qur’an Made Clear','Revelation, creation, steadfastness, and signs on the horizons.',41,1,6),
  r(67,[p('Ash-Shura',1,53)],'Revelation and Consultation','Unity of revelation, forgiveness, consultation, and guidance.',42,1,6),
  r(68,[p('Az-Zukhruf',1,89)],'Adornments and True Honor','Worldly adornment, Ibrahim, Musa, ‘Isa, and the Hereafter.',43,1,7),
  r(69,[p('Ad-Dukhan',1,59)],'Clear Warning','The clear Book, Pharaoh’s people, and the final gathering.',44,1,3),
  r(70,[p('Al-Jathiyah',1,37)],'Kneeling Before Judgment','Signs, desires, arrogance, and the nations kneeling.',45,1,4),
  r(71,[p('Al-Ahqaf',1,35)],'Revelation and Response','Truth of the Qur’an, parents, the jinn, and patience.',46,1,5),
  r(72,[p('Muhammad',1,38)],'Struggle and Sincerity','Belief, hypocrisy, obedience, and spending in Allah’s cause.',47,1,4),
  r(73,[p('Al-Fath',1,29)],'Clear Victory','The treaty, tranquility, allegiance, and the Prophet’s companions.',48,1,4),
  r(74,[p('Al-Hujurat',1,18)],'Manners and Brotherhood','Etiquette with the Prophet, verification, brotherhood, and true faith.',49,1,3),
  r(75,[p('Qaf',1,45)],'Nearness and Resurrection','Creation, death, the record, and the final reminder.',50,1,3),
  r(76,[p('Adh-Dhariyat',1,60)],'Scattered Winds and Certainty','Oaths, provision, Ibrahim’s guests, and the purpose of creation.',51,1,3),
  r(77,[p('At-Tur',1,49)],'The Mount and the Hereafter','Warnings, Paradise, denial, and patience.',52,1,3),
  r(78,[p('An-Najm',1,62)],'Revelation and Accountability','The Prophet’s truthfulness, false worship, and prostration.',53,1,3),
  r(79,[p('Al-Qamar',1,55)],'Repeated Warnings','The split moon and repeated lessons from destroyed nations.',54,1,3),
  r(80,[p('Ar-Rahman',1,78)],'Favors of the Most Merciful','Repeated reminders of Allah’s favors and accountability.',55,1,3),
  r(81,[p('Al-Waqi‘ah',1,96)],'The Inevitable Event','The three groups, creation, provision, and certainty.',56,1,3),
  r(82,[p('Al-Hadid',1,29)],'Faith, Spending, and Light','Allah’s greatness, spending, light, and the reality of worldly life.',57,1,4),
  r(83,[p('Al-Mujadilah',1,22)],'Private Speech and Loyalty','Family rulings, gatherings, secret counsel, and loyalty to faith.',58,1,3),
  r(84,[p('Al-Hashr',1,24)],'Exile and Allah’s Names','Banu Nadir, hearts, the believers’ du‘a, and Allah’s beautiful names.',59,1,3),
  r(85,[p('Al-Mumtahanah',1,13)],'Loyalty and Testing','Relationships, migration, loyalty, and tested believers.',60,1,2),
  r(86,[p('As-Saff',1,14)],'Rows in Allah’s Cause','Sincerity, support of Allah’s religion, and the helpers of Allah.',61,1,2),
  r(87,[p('Al-Jumu‘ah',1,11)],'Friday and Purification','The mission of the Messenger and the call to Friday prayer.',62,1,2),
  r(88,[p('Al-Munafiqun',1,11)],'Hypocrisy Exposed','Hypocritical speech, arrogance, and remembrance before death.',63,1,2),
  r(89,[p('At-Taghabun',1,18)],'Loss and Gain','Faith, family tests, spending, and ultimate success.',64,1,2),
  r(90,[p('At-Talaq',1,12)],'Divorce and Reliance','Divorce rulings, taqwa, reliance, and Allah’s command.',65,1,2),
  r(91,[p('At-Tahrim',1,12)],'Households and Repentance','Family correction, repentance, and examples of believing women.',66,1,2),
  r(92,[p('Al-Mulk',1,30)],'Dominion and Reflection','Allah’s dominion, creation, accountability, and warning.',67,1,2),
  r(93,[p('Al-Qalam',1,52)],'Character and Trial','The Prophet’s character, the owners of the garden, and patience.',68,1,2),
  r(94,[p('Al-Haqqah',1,52)],'The Reality','The unavoidable event, destroyed nations, and the truth of revelation.',69,1,2),
  r(95,[p('Al-Ma‘arij',1,44)],'Ascending Ways','Impatience, prayer, the Hereafter, and denial.',70,1,2),
  r(96,[p('Nuh',1,28)],'The Call of Nuh','Nuh’s da‘wah, patience, and du‘a.',71,1,2),
  r(97,[p('Al-Jinn',1,28)],'The Jinn and Revelation','The jinn hearing the Qur’an and the unseen belonging to Allah.',72,1,2),
  r(98,[p('Al-Muzzammil',1,20)],'Night Prayer and Recitation','Standing at night, measured recitation, and mercy.',73,1,2),
  r(99,[p('Al-Muddaththir',1,56)],'Rise and Warn','Warning, purification, Hellfire, and reminder.',74,1,2),
  r(100,[p('Al-Qiyamah',1,40)],'The Resurrection','The self-reproaching soul, resurrection, and accountability.',75,1,2),
  r(101,[p('Al-Insan',1,31)],'Human Creation and Reward','Human origin, gratitude, patience, and Paradise.',76,1,2),
  r(102,[p('Al-Mursalat',1,50)],'Woe That Day','Oaths, resurrection, and repeated warning.',77,1,2),
  r(103,[p('An-Naba',1,40)],'The Great News','Resurrection, creation, and the final gathering.',78,1,2),
  r(104,[p('An-Nazi‘at',1,46)],'The Pulling Angels','The final return, Musa and Pharaoh, and the Hour.',79,1,2),
  r(105,[p('‘Abasa',1,42),p('At-Takwir',1,29)],'Reminder and Upheaval','The value of sincere seeking and the signs of the Last Day.',80,1,2),
  r(106,[p('Al-Infitar',1,19),p('Al-Mutaffifin',1,36)],'Records and Justice','The records of deeds, honesty, and the reward of the righteous.',82,1,2),
  r(107,[p('Al-Inshiqaq',1,25),p('Al-Buruj',1,22)],'Meeting Your Lord','The return to Allah and steadfastness under trial.',84,1,2),
  r(108,[p('At-Tariq',1,17),p('Al-A‘la',1,19)],'Creation and Reminder','Human origin, the Qur’an, and the successful one who purifies himself.',86,1,1),
  r(109,[p('Al-Ghashiyah',1,26),p('Al-Fajr',1,30)],'Faces and the Reassured Soul','The Hereafter, past nations, and the soul at peace.',88,1,2),
  r(110,[p('Al-Balad',1,20),p('Ash-Shams',1,15)],'The Steep Path and the Soul','The difficult path, mercy, and purification of the soul.',90,1,1),
  r(111,[p('Al-Layl',1,21),p('Ad-Duha',1,11),p('Ash-Sharh',1,8)],'Giving, Comfort, and Ease','Generosity, Allah’s care, and ease after difficulty.',92,1,1),
  r(112,[p('At-Tin',1,8),p('Al-‘Alaq',1,19)],'Human Nobility and Revelation','Human creation, accountability, and the first revelation.',95,1,1),
  r(113,[p('Al-Qadr',1,5),p('Al-Bayyinah',1,8)],'Night of Decree and Clear Proof','Revelation, clarity, and sincere worship.',97,1,1),
  r(114,[p('Az-Zalzalah',1,8),p('Al-‘Adiyat',1,11)],'Earth’s Report and Human Ingratitude','Deeds brought forth and the intensity of worldly attachment.',99,1,1),
  r(115,[p('Al-Qari‘ah',1,11),p('At-Takathur',1,8)],'Scales and Rivalry','The scales of deeds and the distraction of increase.',101,1,1),
  r(116,[p('Al-‘Asr',1,3),p('Al-Humazah',1,9),p('Al-Fil',1,5)],'Loss, Slander, and Protection','The path out of loss, warning against mockery, and Allah’s protection.',103,1,1),
  r(117,[p('Quraysh',1,4),p('Al-Ma‘un',1,7),p('Al-Kawthar',1,3)],'Gratitude and Worship','Security, small acts of mercy, prayer, and sacrifice.',106,1,1),
  r(118,[p('Al-Kafirun',1,6),p('An-Nasr',1,3)],'Sincerity and Victory','Clear separation from false worship and seeking forgiveness at victory.',109,1,1),
  r(119,[p('Al-Masad',1,5),p('Al-Ikhlas',1,4)],'Warning and Pure Tawhid','The end of opposition and the perfection of Allah’s oneness.',111,1,1),
  r(120,[p('Al-Falaq',1,5),p('An-Nas',1,6)],'Seeking Refuge','Seeking protection with Allah from external and internal harms.',113,1,1)
];

const juzAmmaSurahs = [
  ['An-Naba',78,1,40,'The Great News','Resurrection, creation, and the final gathering.',2],
  ['An-Nazi‘at',79,1,46,'The Pulling Angels','The final return, Musa and Pharaoh, and the Hour.',2],
  ['‘Abasa',80,1,42,'The Reminder','The value of sincere seeking and the reminder for whoever wills.',2],
  ['At-Takwir',81,1,29,'The Overthrowing','Signs of the Last Day and the truth of revelation.',1],
  ['Al-Infitar',82,1,19,'The Splitting Open','The records of deeds and accountability before the Most Generous.',1],
  ['Al-Mutaffifin',83,1,36,'Justice in Measures','Honesty, records, and the reward of the righteous.',2],
  ['Al-Inshiqaq',84,1,25,'The Splitting Asunder','The return to Allah and receiving the record.',1],
  ['Al-Buruj',85,1,22,'The Great Stars','Steadfastness under trial and the preserved Qur’an.',1],
  ['At-Tariq',86,1,17,'The Night-Comer','Human origin and the decisive word of the Qur’an.',1],
  ['Al-A‘la',87,1,19,'The Most High','Glorifying Allah and the successful one who purifies himself.',1],
  ['Al-Ghashiyah',88,1,26,'The Overwhelming','Faces of the Hereafter and reflection on creation.',1],
  ['Al-Fajr',89,1,30,'The Dawn','Past nations and the reassured soul.',1],
  ['Al-Balad',90,1,20,'The City','The steep path, mercy, and true success.',1],
  ['Ash-Shams',91,1,15,'The Sun','Purification of the soul and the fate of Thamud.',1],
  ['Al-Layl',92,1,21,'The Night','Giving, withholding, and the path to ease.',1],
  ['Ad-Duha',93,1,11,'The Morning Brightness','Allah’s care, comfort, and gratitude.',1],
  ['Ash-Sharh',94,1,8,'Relief','Ease after difficulty and turning to Allah.',1],
  ['At-Tin',95,1,8,'The Fig','Human nobility and accountability.',1],
  ['Al-‘Alaq',96,1,19,'The Clinging Clot','The first revelation and warning against arrogance.',1],
  ['Al-Qadr',97,1,5,'The Night of Decree','The blessed night of revelation.',1],
  ['Al-Bayyinah',98,1,8,'The Clear Proof','Clear evidence and sincere worship.',1],
  ['Az-Zalzalah',99,1,8,'The Earthquake','The earth’s report and every deed brought forth.',1],
  ['Al-‘Adiyat',100,1,11,'The Chargers','Human ingratitude and what hearts conceal.',1],
  ['Al-Qari‘ah',101,1,11,'The Striking Hour','The scales of deeds and final outcomes.',1],
  ['At-Takathur',102,1,8,'Rivalry in Increase','The distraction of worldly increase.',1],
  ['Al-‘Asr',103,1,3,'Time','The path out of loss.',1],
  ['Al-Humazah',104,1,9,'The Slanderer','Warning against mockery and hoarding wealth.',1],
  ['Al-Fil',105,1,5,'The Elephant','Allah’s protection of the Sacred House.',1],
  ['Quraysh',106,1,4,'Quraysh','Security, provision, and worship of the Lord of the House.',1],
  ['Al-Ma‘un',107,1,7,'Small Kindnesses','Prayer, sincerity, and mercy in small deeds.',1],
  ['Al-Kawthar',108,1,3,'Abundance','Prayer, sacrifice, and Allah’s gift.',1],
  ['Al-Kafirun',109,1,6,'The Disbelievers','Clear separation from false worship.',1],
  ['An-Nasr',110,1,3,'Victory','Praise and seeking forgiveness at victory.',1],
  ['Al-Masad',111,1,5,'The Palm Fiber','The end of opposition to the truth.',1],
  ['Al-Ikhlas',112,1,4,'Pure Tawhid','The perfection of Allah’s oneness.',1],
  ['Al-Falaq',113,1,5,'Daybreak','Seeking refuge from external harms.',1],
  ['An-Nas',114,1,6,'Mankind','Seeking refuge from internal whispers.',1]
].map((item, index) => r(index + 1, [p(item[0], item[2], item[3])], item[4], item[5], item[1], item[2], item[6]));

function pageReading(id, pageStart, pageEnd) {
  return {
    id,
    pageStart,
    pageEnd,
    passages: [p(`Pages ${pageStart}–${pageEnd}`, pageStart, pageEnd)],
    theme: `Pages ${pageStart}–${pageEnd}`,
    description: `A steady two-page reading from the mushaf: pages ${pageStart}–${pageEnd}.`,
    quranSurah: 1,
    quranAyah: 1,
    pages: 2,
    ayat: 0,
    minutes: 'Roughly 5–10 min'
  };
}

const twoPagesDailyReadings = Array.from({ length: 302 }, (_, index) => {
  const pageStart = index * 2 + 1;
  const pageEnd = Math.min(604, pageStart + 1);
  return pageReading(index + 1, pageStart, pageEnd);
});

const SCHEDULES = {
  juzAmma: {
    id: 'juzAmma',
    name: 'Juz Amma',
    shortName: 'Juz Amma',
    countLabel: '37 Surahs',
    unitSingular: 'surah',
    unitPlural: 'surahs',
    currentLabel: 'Current Surah',
    itemLabel: 'Surah',
    browseTitle: 'Browse Juz Amma',
    items: juzAmmaSurahs,
    accent: 'purple',
    icon: '📘',
    description: 'All 37 surahs from Juz Amma.'
  },
  twoPages: {
    id: 'twoPages',
    name: 'Two Pages a Day',
    shortName: 'Two Pages a Day',
    countLabel: '604 Pages • 302 Readings',
    unitSingular: 'reading',
    unitPlural: 'readings',
    currentLabel: 'Current Reading',
    itemLabel: 'Reading',
    browseTitle: 'Browse Two Pages a Day',
    items: twoPagesDailyReadings,
    accent: 'gold',
    icon: '📄',
    description: "Complete the Qur’an in 302 days."
  },
  complete: {
    id: 'complete',
    name: '120 Day Plan',
    shortName: '120 Day Plan',
    countLabel: '120 Readings',
    unitSingular: 'reading',
    unitPlural: 'readings',
    currentLabel: 'Current Reading',
    itemLabel: 'Reading',
    browseTitle: 'Browse 120 Day Plan',
    items: completeQuranReadings,
    accent: 'green',
    icon: '📖',
    description: "Complete the Qur’an in about 4 months."
  }
};
let activePlanId = localStorage.getItem('qrc_active_plan_v09') || 'complete';
let readings = SCHEDULES[activePlanId]?.items || completeQuranReadings;
let historyViewPlanId = activePlanId;

function p(name, start, end) { return { name, start, end }; }
function r(id, passages, theme, description, quranSurah, quranAyah, pages) {
  return { id, passages, theme, description, quranSurah, quranAyah, pages, ayat: passages.reduce((sum, x) => sum + (x.name.startsWith('Review:') ? 0 : x.end - x.start + 1), 0), minutes: estimateMinutes(pages) };
}
function estimateMinutes(pages) {
  // v0.8: deliberately shown as a rough range rather than a precise promise.
  const low = Math.max(5, Math.round((pages * 2.0) / 5) * 5);
  const high = Math.max(low + 5, Math.round((pages * 3.2) / 5) * 5);
  return `Roughly ${low}–${high} min`;
}

const STORAGE = { current:'qrc_current_v05', completed:'qrc_completed_v05', cycle:'qrc_cycle_v05', history:'qrc_history_v05', cycleStarted:'qrc_cycle_started_v05' };
const legacyCurrent = Number(localStorage.getItem('qrc_current_v03') || localStorage.getItem('qrc_current_v02') || localStorage.getItem('qrc_current') || 1);
const legacyCompleted = localStorage.getItem('qrc_completed_v04') || localStorage.getItem('qrc_completed_v03') || '[]';
const state = {
  current: Number(localStorage.getItem(STORAGE.current) || localStorage.getItem('qrc_current_v04') || legacyCurrent || 1),
  completed: new Set(JSON.parse(localStorage.getItem(STORAGE.completed) || legacyCompleted)),
  cycle: Number(localStorage.getItem(STORAGE.cycle) || localStorage.getItem('qrc_cycle_v04') || localStorage.getItem('qrc_cycle_v03') || localStorage.getItem('qrc_cycle_v02') || 1),
  history: JSON.parse(localStorage.getItem(STORAGE.history) || localStorage.getItem('qrc_history_v04') || localStorage.getItem('qrc_history_v03') || '[]'),
  cycleStarted: localStorage.getItem(STORAGE.cycleStarted) || new Date().toISOString(),
  filter: 'all',
  selectedJump: 1,
  query: '',
  completionAck: null,
  readerMode: localStorage.getItem('qrc_reader_mode_v07') || 'both',
  readerFont: Number(localStorage.getItem('qrc_reader_font_v07') || .9),
  arabicSize: localStorage.getItem('qrc_reader_arabic_size_v082') || 'small',
  englishSize: localStorage.getItem('qrc_reader_english_size_v082') || 'small',
  readerWidth: localStorage.getItem('qrc_reader_width_v082') || 'standard',
  readerTheme: localStorage.getItem('qrc_reader_theme_v082') || 'green',
  readerScroll: JSON.parse(localStorage.getItem('qrc_reader_scroll_v08') || '{}'),
  readerReadingId: null,
  readerContext: 'cycle',
  previewReadingId: null
};
const surahCache = new Map();

const $ = (id) => document.getElementById(id);
const views = ['home','current','readings','history','backup'];
const PLAN_PROGRESS_KEY = 'qrc_plan_progress_v09';

function activeSchedule(){ return SCHEDULES[activePlanId] || SCHEDULES.complete; }
function allSchedules(){ return Object.values(SCHEDULES); }
function defaultPlanProgress(planId){ return { current: 1, completed: [], cycle: 1, history: [], cycleStarted: new Date().toISOString() }; }
function safeParsePlanProgress(){
  try { return JSON.parse(localStorage.getItem(PLAN_PROGRESS_KEY) || '{}') || {}; }
  catch { return {}; }
}
let planProgress = safeParsePlanProgress();
if(!planProgress.complete){
  planProgress.complete = {
    current: state.current,
    completed: [...state.completed],
    cycle: state.cycle,
    history: dedupeCompletedCycles(state.history, activePlanId),
    cycleStarted: state.cycleStarted
  };
}
function storeActiveProgress(){
  planProgress[activePlanId] = {
    current: state.current,
    completed: [...state.completed],
    cycle: state.cycle,
    history: dedupeCompletedCycles(state.history, activePlanId),
    cycleStarted: state.cycleStarted
  };
}
function loadPlanIntoState(planId){
  activePlanId = SCHEDULES[planId] ? planId : 'complete';
  readings = activeSchedule().items;
  const stored = planProgress[activePlanId] || defaultPlanProgress(activePlanId);
  state.current = Number(stored.current || 1);
  state.completed = new Set(Array.isArray(stored.completed) ? stored.completed.map(Number) : []);
  state.cycle = Number(stored.cycle || 1);
  state.history = Array.isArray(stored.history) ? stored.history : [];
  state.cycleStarted = stored.cycleStarted || new Date().toISOString();
}
function save(){
  storeActiveProgress();
  localStorage.setItem('qrc_active_plan_v09', activePlanId);
  localStorage.setItem(PLAN_PROGRESS_KEY, JSON.stringify(planProgress));
  if(activePlanId === 'complete'){
    localStorage.setItem(STORAGE.current,String(state.current));
    localStorage.setItem(STORAGE.completed,JSON.stringify([...state.completed]));
    localStorage.setItem(STORAGE.cycle,String(state.cycle));
    localStorage.setItem(STORAGE.history,JSON.stringify(state.history));
    localStorage.setItem(STORAGE.cycleStarted,state.cycleStarted);
  }
  localStorage.setItem('qrc_reader_scroll_v08', JSON.stringify(state.readerScroll || {}));
}

function dedupeCompletedCycles(history, fallbackPlanId = activePlanId){
  const seen = new Set();
  return (history || []).filter(item => {
    if(!item || item.type !== 'completed-cycle') return true;
    const plan = item.plan || fallbackPlanId || activePlanId;
    const completedDay = item.completedAt ? new Date(item.completedAt).toDateString() : '';
    // v0.10.5: completion history is an achievement record, not a render-time calculation.
    // If a previous bug recorded the same plan more than once on the same day, keep only one.
    const key = [plan, completedDay].join('|');
    if(seen.has(key)) return false;
    seen.add(key);
    item.plan = plan;
    return true;
  });
}
function cleanAllCompletedCycleHistory(){
  Object.keys(planProgress || {}).forEach(planId => {
    const stored = planProgress[planId];
    if(stored && Array.isArray(stored.history)){
      stored.history = dedupeCompletedCycles(stored.history, planId);
    }
  });
  state.history = dedupeCompletedCycles(state.history, activePlanId);
}
function normalizeState(){
  const total = readings.length;
  state.current = Math.min(total, Math.max(1, Number(state.current) || 1));
  state.completed = new Set([...state.completed].map(Number).filter(id => id >= 1 && id <= total));
  state.history = dedupeCompletedCycles(Array.isArray(state.history) ? state.history : [], activePlanId);
  state.cycle = Math.max(1, Number(state.cycle) || 1);
  if (!state.cycleStarted) state.cycleStarted = new Date().toISOString();
}
loadPlanIntoState(activePlanId);
normalizeState();
cleanAllCompletedCycleHistory();
save();
function currentReading(){ return readings[state.current - 1] || readings[0]; }
function currentInfoReading(){ return readings[(state.previewReadingId || state.current) - 1] || currentReading(); }
function isPreviewingDifferentReading(){ return Boolean(state.previewReadingId && state.previewReadingId !== state.current); }
function isCompleted(id){ return state.completed.has(id); }
function completedCycleAlreadyRecorded(){
  return state.history.some(item => item && item.type === 'completed-cycle' && item.cycle === state.cycle && item.plan === activePlanId);
}
function ensureActivePlanCompletionRecorded(){
  if(state.completed.size < readings.length || completedCycleAlreadyRecorded()) return false;
  const completedAt = new Date().toISOString();
  state.history.push({
    type: 'completed-cycle',
    cycle: state.cycle,
    plan: activePlanId,
    startedAt: state.cycleStarted,
    completedAt,
    duration: durationDays(state.cycleStarted, completedAt)
  });
  return true;
}
function recordCompletedCycleIfNeeded(){
  return ensureActivePlanCompletionRecorded();
}
function ensureStoredPlanCompletionRecorded(planId){
  const schedule = SCHEDULES[planId];
  if(!schedule) return false;
  if(planId === activePlanId) return ensureActivePlanCompletionRecorded();
  const stored = planProgress[planId] || defaultPlanProgress(planId);
  const completed = Array.isArray(stored.completed) ? stored.completed.map(Number) : [];
  if(completed.length < schedule.items.length) return false;
  const history = Array.isArray(stored.history) ? stored.history : [];
  const cycle = Number(stored.cycle || 1);
  const already = history.some(item => item && item.type === 'completed-cycle' && item.cycle === cycle && item.plan === planId);
  if(already) return false;
  const completedAt = new Date().toISOString();
  history.push({
    type: 'completed-cycle',
    cycle,
    plan: planId,
    startedAt: stored.cycleStarted || completedAt,
    completedAt,
    duration: durationDays(stored.cycleStarted || completedAt, completedAt)
  });
  planProgress[planId] = { ...stored, completed, history, cycle, cycleStarted: stored.cycleStarted || completedAt };
  localStorage.setItem(PLAN_PROGRESS_KEY, JSON.stringify(planProgress));
  return true;
}
function removeRecordedCompletionForCurrentCycle(){
  state.history = (state.history || []).filter(item => !(item && item.type === 'completed-cycle' && item.cycle === state.cycle && item.plan === activePlanId));
}
function planProgressSummary(planId){
  const schedule = SCHEDULES[planId] || SCHEDULES.complete;
  const stored = planId === activePlanId ? { current: state.current, completed: [...state.completed] } : (planProgress[planId] || defaultPlanProgress(planId));
  const completed = Array.isArray(stored.completed) ? stored.completed.length : 0;
  const current = Math.min(schedule.items.length, Math.max(1, Number(stored.current || 1)));
  const currentItem = schedule.items[current - 1] || schedule.items[0];
  const status = completed ? `${completed} of ${schedule.items.length} completed` : 'Not started';
  const last = completed || current > 1 ? `${schedule.itemLabel} ${schedule.id === 'juzAmma' ? currentItem.quranSurah : current}: ${passageTitleNumbered(currentItem)}` : 'Not started';
  return { schedule, completed, total: schedule.items.length, current, currentItem, status, last };
}
function progressForPlan(planId){
  const schedule = SCHEDULES[planId] || SCHEDULES.complete;
  const stored = planId === activePlanId
    ? { current: state.current, completed: [...state.completed], cycle: state.cycle, history: state.history, cycleStarted: state.cycleStarted }
    : (planProgress[planId] || defaultPlanProgress(planId));
  const current = Math.min(schedule.items.length, Math.max(1, Number(stored.current || 1)));
  return {
    schedule,
    current,
    completed: new Set(Array.isArray(stored.completed) ? stored.completed.map(Number) : []),
    cycle: Number(stored.cycle || 1),
    history: Array.isArray(stored.history) ? stored.history : [],
    cycleStarted: stored.cycleStarted || new Date().toISOString(),
    currentItem: schedule.items[current - 1] || schedule.items[0]
  };
}
function completedCyclesForPlan(planId){
  return progressForPlan(planId).history
    .filter(item => item && item.type === 'completed-cycle')
    .sort((a,b) => new Date(b.completedAt) - new Date(a.completedAt));
}
function switchPlan(planId){
  if(!SCHEDULES[planId] || planId === activePlanId) { closePlanModal(); return; }
  storeActiveProgress();
  loadPlanIntoState(planId);
  historyViewPlanId = activePlanId;
  state.selectedJump = 1;
  state.query = '';
  state.filter = 'all';
  state.completionAck = null;
  normalizeState();
  save();
  closePlanModal();
  renderAll();
  showView('home');
}
function formatSurahNumber(number){
  return `(${String(number).padStart(3,'0')})`;
}
function escapeHtml(text=''){
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function surahTitleHtml(surahNumber, name, range=''){
  const title = `${formatSurahNumber(surahNumber)} ${name}${range ? ` ${range}` : ''}`;
  return `<span class="surah-title">${escapeHtml(title)}</span>`;
}
function passageSurahNumber(reading, passageIndex){ return reading.quranSurah + passageIndex; }
function isPageReading(reading){ return reading && Number.isFinite(reading.pageStart) && Number.isFinite(reading.pageEnd); }
function pageRangeText(reading){ return `Pages ${reading.pageStart}–${reading.pageEnd}`; }
function passageTitle(reading, { withSurahNumbers = false, joiner = ' + ' } = {}){
  if(isPageReading(reading)) return pageRangeText(reading);
  return reading.passages.map((item, idx) => {
    if(item.name.startsWith('Review:')) return item.name;
    const prefix = withSurahNumbers ? `${formatSurahNumber(passageSurahNumber(reading, idx))} ` : '';
    return `${prefix}${item.name} ${item.start}–${item.end}`;
  }).join(joiner);
}
function passageTitleNumbered(reading){
  return passageTitle(reading, { withSurahNumbers: true, joiner: ' & ' });
}
function addSalawat(text='') {
  // Keep the reading summaries respectful without changing Qur'an translation text.
  return String(text)
    .replace(/\bMessenger of Allah\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`)
    .replace(/\bFinal Messenger\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`)
    .replace(/\bProphet Muhammad\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`)
    .replace(/\bMuhammad\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`)
    .replace(/\bthe Prophet\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`)
    .replace(/\bthe Messenger\b(?!\s*ﷺ)/gi, match => `${match} ﷺ`);
}
function quranUrl(reading){ return isPageReading(reading) ? `https://quran.com/page/${reading.pageStart}` : `https://quran.com/${reading.quranSurah}?startingVerse=${reading.quranAyah}`; }
function metricHtml(reading){ if(isPageReading(reading)) return `<span class="metric">📄 <span><strong>${reading.pages} pages</strong><small>In mushaf</small></span></span>`; return `<span class="metric">📖 <span><strong>${reading.ayat} āyāt</strong><small>Approx. length</small></span></span><span class="metric">📄 <span><strong>${reading.pages} pages</strong><small>In mushaf</small></span></span>`; }
function formatDate(iso){
  if(!iso) return 'Not recorded';
  return new Date(iso).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
}
function durationDays(startIso,endIso){
  if(!startIso || !endIso) return '—';
  const start=new Date(startIso), end=new Date(endIso);
  const days=Math.max(1,Math.ceil((end-start)/(1000*60*60*24)));
  return `${days} day${days===1?'':'s'}`;
}
function completedCycles(){
  return state.history.filter(item=>item.type==='completed-cycle').sort((a,b)=>new Date(b.completedAt)-new Date(a.completedAt));
}

function recentReadingStreak(){
  const dates = new Set(
    (state.history || [])
      .filter(item => item && ['marked-complete','manual-check'].includes(item.type) && item.date)
      .map(item => new Date(item.date).toDateString())
  );
  let streak = 0;
  const cursor = new Date();
  while(dates.has(cursor.toDateString())){
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
function renderStreak(){
  const streak = recentReadingStreak();
  if($('streakCount')) $('streakCount').textContent = streak;
  if($('streakMessage')) $('streakMessage').textContent = streak ? 'Keep it up!' : 'Complete a reading to begin.';
  const dots = $('streakDots');
  if(!dots) return;
  const dayLetters = ['S','M','T','W','T','F','S'];
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());
  const readDates = new Set((state.history || []).filter(item => item && ['marked-complete','manual-check'].includes(item.type) && item.date).map(item => new Date(item.date).toDateString()));
  dots.innerHTML = dayLetters.map((letter, idx) => {
    const d = new Date(start);
    d.setDate(start.getDate() + idx);
    const done = readDates.has(d.toDateString());
    return `<span class="streak-dot ${done?'done':''}"><b>${done?'✓':'○'}</b><small>${letter}</small></span>`;
  }).join('');
}
function renderUpcoming(){
  const schedule = activeSchedule();
  const wrap = $('upcomingList');
  if(!wrap) return;
  const upcoming = readings.slice(state.current, Math.min(readings.length, state.current + 3));
  if(!upcoming.length){
    wrap.innerHTML = `<p class="subtle">You are at the end of this plan.</p>`;
    return;
  }
  wrap.innerHTML = upcoming.map(r => {
    const number = schedule.id === 'juzAmma' ? r.quranSurah : r.id;
    const title = isPageReading(r) ? `Reading ${r.id}` : (schedule.id === 'complete' ? `Reading ${r.id}` : r.passages[0].name);
    const detail = isPageReading(r) ? pageRangeText(r) : (schedule.id === 'complete' ? passageTitleNumbered(r) : `${r.passages[0].start}–${r.passages[0].end}`);
    const range = isPageReading(r) ? `P. ${r.pageStart}` : (schedule.id === 'complete' ? '›' : `${r.passages[0].start}–${r.passages[0].end}`);
    return `<button class="upcoming-row" type="button" data-upcoming-id="${r.id}">
      <span class="upcoming-number">${number}</span>
      <span><strong>${title}</strong><small>${detail}</small></span>
      <span class="upcoming-range">${range}</span>
    </button>`;
  }).join('');
  wrap.querySelectorAll('[data-upcoming-id]').forEach(btn=>btn.addEventListener('click',()=>{
    viewReadingInfo(Number(btn.dataset.upcomingId));
  }));
}
function renderHistoryPlanTabs(){
  const wrap = $('historyPlanTabs');
  if(!wrap) return;
  if(!SCHEDULES[historyViewPlanId]) historyViewPlanId = activePlanId;
  wrap.innerHTML = allSchedules().map(schedule => {
    const summary = planProgressSummary(schedule.id);
    const isActive = schedule.id === historyViewPlanId;
    return `<button class="history-plan-tab ${isActive?'active':''} plan-${schedule.accent}" data-history-plan="${schedule.id}" type="button">
      <span>${schedule.icon}</span>
      <strong>${schedule.name}</strong>
      <small>${summary.completed} / ${summary.total} ${schedule.unitPlural}</small>
    </button>`;
  }).join('');
  wrap.querySelectorAll('[data-history-plan]').forEach(btn => btn.addEventListener('click', () => {
    historyViewPlanId = btn.dataset.historyPlan;
    renderHistory();
  }));
  const note = $('historyPlanNote');
  const viewed = SCHEDULES[historyViewPlanId] || activeSchedule();
  if(note) {
    note.textContent = historyViewPlanId === activePlanId
      ? `${viewed.name} history is shown. Other plans keep their own separate history and progress.`
      : `Viewing ${viewed.name} history. Your current active plan is still ${activeSchedule().name}.`;
  }
}

function itemHeading(reading){
  const schedule = activeSchedule();
  if(isPageReading(reading)) return pageRangeText(reading);
  return schedule.id === 'complete' ? `Reading ${reading.id} of ${readings.length}` : `${formatSurahNumber(reading.quranSurah)} ${reading.passages[0].name}`;
}
function itemSmallLabel(reading){
  const schedule = activeSchedule();
  if(isPageReading(reading)) return `Reading ${reading.id}`;
  return schedule.id === 'complete' ? `Reading ${reading.id}` : `Surah ${reading.quranSurah}`;
}
function currentPlanPositionText(reading = currentReading()){
  const schedule = activeSchedule();
  if(isPageReading(reading)) return `Reading ${state.current} of ${readings.length} • ${pageRangeText(reading)}`;
  if(schedule.id === 'complete') return `Reading ${state.current} of ${readings.length}`;
  return `Surah ${reading.quranSurah} • ${state.completed.size} of ${readings.length} ${schedule.unitPlural} completed`;
}
function currentPlanProgressLabel(){
  const schedule = activeSchedule();
  return `${state.completed.size} of ${readings.length} ${schedule.unitPlural} completed`;
}
function renderCurrent(){
  if (state.completionAck) {
    renderCompletionAck();
    return;
  }
  const schedule = activeSchedule();
  const reading=currentInfoReading();
  $('readingCard').classList.remove('hidden','is-exiting');
  $('aboutReadingPanel').classList.remove('hidden');
  $('completionCard').classList.add('hidden');
  $('readingTitle').textContent = isPageReading(reading) ? `${schedule.name} • Reading ${reading.id} of ${readings.length}` : (schedule.id === 'complete' ? `Reading ${reading.id} of ${readings.length}` : `${schedule.name} • ${formatSurahNumber(reading.quranSurah)} ${reading.passages[0].name}`);
  $('passageList').innerHTML = isPageReading(reading) ? `<div class="passage page-passage"><h3>${pageRangeText(reading)}</h3><p>Reading ${reading.id} of ${readings.length}</p></div>` : reading.passages.map((item, idx)=>`<div class="passage"><h3>${item.name.startsWith('Review:') ? escapeHtml(item.name) : surahTitleHtml(passageSurahNumber(reading, idx), item.name)}</h3>${item.name.startsWith('Review:')?'':`<p>${item.start} – ${item.end}</p>`}</div>`).join('');
  $('readingTheme').textContent=reading.theme; $('readingDescription').innerHTML=addSalawat(reading.description); $('currentMetrics').innerHTML=metricHtml(reading); $('quranLink').href=quranUrl(reading);
  $('completeBtn').innerHTML=`<span id="completeBox">${isCompleted(reading.id)?'☑':'☐'}</span> ${isCompleted(reading.id)?'Completed':'Mark Complete'}`;
  const setBtn = $('setCurrentReadingBtn');
  if(setBtn){
    setBtn.classList.toggle('hidden', !isPreviewingDifferentReading());
    setBtn.textContent = `📍 Set as Current ${schedule.itemLabel}`;
  }
}
function renderCompletionAck(){
  const schedule = activeSchedule();
  const done = readings[(state.completionAck.completedId || 1) - 1] || readings[0];
  const next = readings[(state.current || 1) - 1] || readings[readings.length - 1];
  $('readingCard').classList.add('hidden');
  $('aboutReadingPanel').classList.add('hidden');
  $('completionCard').classList.remove('hidden');
  $('readingTitle').textContent = isPageReading(next) ? `${schedule.name} • Reading ${next.id} of ${readings.length}` : (schedule.id === 'complete' ? `Reading ${next.id} of ${readings.length}` : `${schedule.name} • ${formatSurahNumber(next.quranSurah)} ${next.passages[0].name}`);
  $('completedSummary').innerHTML = `${schedule.itemLabel} <strong>${schedule.id === 'complete' ? done.id : done.quranSurah}</strong>, <strong>${passageTitleNumbered(done)}</strong>, has been marked complete.`;
  $('nextPreview').innerHTML = `<h3>${isPageReading(next) ? pageRangeText(next) : (schedule.id === 'complete' ? `Reading ${next.id}` : `${formatSurahNumber(next.quranSurah)} ${next.passages[0].name}`)}</h3><p class="subtle">${isPageReading(next) ? `Reading ${next.id} of ${readings.length}` : passageTitleNumbered(next)}</p><p class="theme">${next.theme}</p><div class="metrics centered-metrics">${metricHtml(next)}</div>`;
  $('beginNextBtn').textContent = done.id === readings.length ? `Start ${schedule.name} Again` : (next.id === done.id ? 'Return to Reading' : `Begin ${schedule.itemLabel} ${schedule.id === 'complete' ? next.id : next.quranSurah}`);
}
function planDetailItems(schedule){
  if(schedule.id === 'twoPages') return [{icon:'clipboard-list', value:'604', label:'Pages'}, {icon:'book-open', value:'302', label:'Readings'}, {icon:'chart', value:'302', label:'Days'}];
  if(schedule.id === 'complete') return [{icon:'clipboard-list', value:'604', label:'Pages'}, {icon:'book-open', value:'120', label:'Readings'}, {icon:'chart', value:'120', label:'Days'}];
  return [{icon:'book-open', value:'37', label:'Surahs'}, {icon:'library', value:'1', label:'Juz'}, {icon:'check-circle', value:'37', label:'Readings'}];
}
function renderPlanSelector(){
  const schedule = activeSchedule();
  const card = $('currentPlanCard');
  const icon = $('currentPlanIcon');
  const name = $('currentPlanName');
  const desc = $('currentPlanDescription');
  const details = $('currentPlanDetails');
  const count = $('currentPlanCount');
  const btn = $('currentPlanBtn');
  if(card) card.className = `current-plan-display plan-${schedule.accent}`;
  if(icon) icon.textContent = schedule.icon;
  if(name) name.textContent = schedule.name;
  if(desc) desc.textContent = schedule.description;
  if(details) details.innerHTML = planDetailItems(schedule).map(item => `<span><img src="assets/icons/${item.icon}.svg" alt="" aria-hidden="true"><strong>${item.value}</strong><small>${item.label}</small></span>`).join('');
  if(count) count.textContent = schedule.countLabel;
  if(btn) btn.className = `switch-plan-btn plan-${schedule.accent}`;
  const note = $('planReassurance');
  if(note) note.textContent = 'Each plan keeps its own progress, so you can switch anytime without losing your place.';
}
function hasAnySavedProgress(){
  const plans = { ...(planProgress || {}) };
  plans[activePlanId] = {
    current: state.current,
    completed: [...state.completed],
    history: state.history,
    cycle: state.cycle
  };
  return Object.values(plans).some(progress => {
    if(!progress) return false;
    const completed = Array.isArray(progress.completed) ? progress.completed.length : 0;
    const history = Array.isArray(progress.history) ? progress.history.length : 0;
    return Number(progress.current || 1) > 1 || completed > 0 || history > 0 || Number(progress.cycle || 1) > 1;
  });
}
function renderWelcome(){
  const heading = $('welcomeHeading');
  if(heading) heading.textContent = hasAnySavedProgress() ? 'Welcome Back!' : 'Welcome!';
}
function progressEncouragement(pct){
  if(pct <= 0) return 'Begin when you are ready.';
  if(pct < 25) return 'A steady start — keep going.';
  if(pct < 50) return 'You’re building consistency.';
  if(pct < 75) return 'Halfway or more — beautiful progress.';
  if(pct < 100) return 'Almost there — may Allah make it easy.';
  return 'Plan complete — alḥamdulillāh! You can start a new cycle when ready.';
}
function renderHome(){
  renderWelcome();
  const schedule = activeSchedule();
  const reading=currentReading(); const pct=Math.round((state.completed.size/readings.length)*100);
  const degrees = pct * 3.6;
  renderPlanSelector();
  $('homeReadingTitle').textContent = isPageReading(reading) ? pageRangeText(reading) : (schedule.id === 'complete' ? `Reading ${reading.id}` : `${formatSurahNumber(reading.quranSurah)} ${reading.passages[0].name}`);
  $('homePassageTitle').textContent = isPageReading(reading) ? `Reading ${reading.id} of ${readings.length}` : passageTitleNumbered(reading);
  const homeTheme = $('homeReadingTheme'); if(homeTheme) homeTheme.textContent = reading.theme;
  const homeEyebrow = $('homeCurrentEyebrow'); if(homeEyebrow) homeEyebrow.textContent = schedule.currentLabel;
  const homeQuranLink = $('homeQuranLink'); if(homeQuranLink) homeQuranLink.href = quranUrl(reading);
  const homeRing = $('homeRing'); if(homeRing) homeRing.style.background=`conic-gradient(var(--green) ${degrees}deg, #e4e3df ${degrees}deg)`;
  const homePercent = $('homePercent'); if(homePercent) homePercent.textContent = `${pct}%`;
  const homeProgressText = $('homeProgressText'); if(homeProgressText) homeProgressText.textContent = currentPlanProgressLabel();
  const homeMiniBar = $('homeMiniBar'); if(homeMiniBar) homeMiniBar.style.width = `${pct}%`;
  const homeEnc = $('homeProgressEncouragement'); if(homeEnc) homeEnc.textContent = progressEncouragement(pct);
  const homeStartCycleBtn = $('homeStartNewCycleBtn'); if(homeStartCycleBtn) homeStartCycleBtn.classList.toggle('hidden', pct < 100);
  const label = document.querySelector('.jump-card .eyebrow');
  if(label) label.textContent = schedule.id === 'complete' ? 'Browse or start from another reading' : 'Browse or start from another surah';
  const input = $('jumpSearch');
  if(input) input.placeholder = schedule.id === 'complete' ? 'Search by reading number, surah name, theme, or range...' : 'Search by surah number, surah name, or theme...';
  if($('homeMetrics')) $('homeMetrics').innerHTML=metricHtml(reading);
  if($('heroBar')) $('heroBar').style.width=`${pct}%`;
  renderStreak();
  renderUpcoming();
  renderJump();
}
function updateProgress(){
  const schedule = activeSchedule();
  const done=state.completed.size,total=readings.length,pct=Math.round((done/total)*100),degrees=pct*3.6;
  ['sidePercent','bigPercent'].forEach(id=>{ if($(id)) $(id).textContent=`${pct}%`; });
  if($('progressText')) $('progressText').textContent=currentPlanProgressLabel();
  if($('bigProgressText')) $('bigProgressText').textContent=currentPlanProgressLabel();
  ['sideRing','bigRing'].forEach(id=>{ if($(id)) $(id).style.background=`conic-gradient(var(--green) ${degrees}deg, #e4e3df ${degrees}deg)`; });
  if($('completedStat')) $('completedStat').textContent=done;
  if($('remainingStat')) $('remainingStat').textContent=total-done;
  if($('currentStat')) $('currentStat').textContent = schedule.id === 'juzAmma' ? currentReading().quranSurah : state.current;
  if($('cycleStat')) $('cycleStat').textContent=state.cycle;
  if($('sideCompleted')) $('sideCompleted').textContent=done;
  if($('sideRemaining')) $('sideRemaining').textContent=total-done;
  const cycleEyebrow = $('cyclePanelEyebrow'); if(cycleEyebrow) cycleEyebrow.textContent = 'Current Plan';
  if($('cycleTitle')) $('cycleTitle').textContent=schedule.name;
  if($('cycleDetails')) $('cycleDetails').textContent=currentPlanPositionText();
  const next=readings[Math.min(total-1,state.current)];
  if($('nextBadge')) $('nextBadge').textContent = schedule.id === 'juzAmma' ? next.quranSurah : next.id;
  if($('upNextTitle')) $('upNextTitle').textContent = isPageReading(next) ? pageRangeText(next) : passageTitleNumbered(next);
  if($('upNextTheme')) $('upNextTheme').textContent=next.theme;
  renderPlanProgressRows();
}
function renderPlanProgressRows(){
  const wrap = $('planProgressRows');
  if(!wrap) return;
  const schedule = activeSchedule();
  const done = state.completed.size;
  const total = readings.length;
  const pct = Math.round((done / total) * 100);
  const unitLabel = schedule.unitPlural.charAt(0).toUpperCase() + schedule.unitPlural.slice(1);
  wrap.innerHTML = `
    <div class="plan-progress-summary">
      <strong class="plan-progress-name">${schedule.name}</strong>
      <span class="plan-progress-count-label">${schedule.countLabel}</span>
      <div class="plan-progress-bar" aria-label="${pct}% complete"><span style="width:${pct}%"></span></div>
      <div class="plan-progress-ratio"><strong>${done} / ${total}</strong> <span>${unitLabel} Completed</span></div>
      <strong class="plan-progress-percent">${pct}%</strong>
    </div>`;
}
function readingNumberBadge(reading){
  const schedule = activeSchedule();
  const n = schedule.id === 'juzAmma' ? reading.quranSurah : reading.id;
  return `<span class="reading-num"><small>${schedule.itemLabel}</small><strong>${n}</strong></span>`;
}
function readingRowMeta(reading){
  return isPageReading(reading) ? '' : `${reading.theme} • ${reading.ayat} āyāt`;
}
function readingRowSmallHtml(reading){
  const meta = readingRowMeta(reading);
  return meta ? `<small>${meta}</small>` : '';
}
function renderReadings(){
  const schedule = activeSchedule();
  const eyebrow = document.querySelector('#readingsView .section-heading .eyebrow');
  if(eyebrow) eyebrow.textContent = 'Full Schedule';
  const heading = document.querySelector('#readingsView .section-heading h2');
  if(heading) heading.textContent = schedule.name;
  const rows=readings.filter(r=> state.filter==='completed'?isCompleted(r.id):state.filter==='remaining'?!isCompleted(r.id):true);
  $('allReadings').innerHTML=rows.map(r=>`<div class="reading-row ${isCompleted(r.id)?'completed':''}" data-id="${r.id}">
    <label class="reading-check-wrap" title="Mark this ${schedule.unitSingular} complete or incomplete">
      <input class="reading-check-input" type="checkbox" data-id="${r.id}" ${isCompleted(r.id)?'checked':''} />
      <span class="custom-check">${isCompleted(r.id)?'✓':'○'}</span>
    </label>
    <button class="reading-row-main" data-id="${r.id}">
      ${readingNumberBadge(r)}
      <span><strong>${passageTitleNumbered(r)}</strong>${r.id===state.current?'<small class="current-marker">📍 Current Reading</small>':''}${readingRowSmallHtml(r)}</span>
    </button>
  </div>`).join('');
  document.querySelectorAll('.reading-row-main').forEach(row=>row.addEventListener('click',()=>{state.current=Number(row.dataset.id);save();showView('current');renderAll();}));
  document.querySelectorAll('.reading-check-input').forEach(box=>box.addEventListener('change',()=>toggleReadingComplete(Number(box.dataset.id), box.checked)));
}
function toggleReadingComplete(id, checked){
  const schedule = activeSchedule();
  if(checked){
    state.completed.add(id);
    state.history.push({type:'manual-check',cycle:state.cycle,plan:activePlanId,reading:id,date:new Date().toISOString()});
    recordCompletedCycleIfNeeded();
  } else {
    state.completed.delete(id);
    removeRecordedCompletionForCurrentCycle();
    state.history.push({type:'manual-uncheck',cycle:state.cycle,plan:activePlanId,reading:id,date:new Date().toISOString()});
  }
  state.completionAck=null;
  save(); renderAll();
}
function matchReading(reading,q){
  if(!q) return true; const s=q.toLowerCase().trim();
  if(/^\d+$/.test(s)) {
    const n=Number(s);
    // v0.12.2: In Two Pages a Day, numeric search means mushaf page number, not reading number.
    // Example: searching 255 returns the reading that contains page 255, not Reading 255.
    if(isPageReading(reading)) return n>=reading.pageStart && n<=reading.pageEnd;
    return activeSchedule().id === 'complete' ? reading.id===n : reading.quranSurah===n;
  }
  const plus=s.match(/^(\d+)\+$/); if(plus) return isPageReading(reading) ? reading.pageEnd>=Number(plus[1]) : reading.id>=Number(plus[1]);
  const range=s.match(/^(\d+)\s*-\s*(\d+)$/);
  if(range) {
    const a=Number(range[1]), b=Number(range[2]);
    if(isPageReading(reading)) return reading.pageStart<=b && reading.pageEnd>=a;
    return reading.id>=a && reading.id<=b;
  }
  return `${isPageReading(reading) ? `${reading.pageStart} ${reading.pageEnd}` : reading.id} ${reading.quranSurah} ${passageTitle(reading)} ${passageTitleNumbered(reading)} ${reading.theme} ${reading.description}`.toLowerCase().includes(s);
}
function renderJump(){
  if(!$('jumpResults') || !$('jumpPreview')) return;
  const schedule = activeSchedule();
  const rows=readings.filter(r=>matchReading(r,state.query));
  if(!rows.find(r=>r.id===state.selectedJump)) state.selectedJump=(rows[0]||readings[0]).id;
  const resultLabel = state.query.trim() ? `${rows.length} matching ${rows.length===1?schedule.unitSingular:schedule.unitPlural}` : `All ${readings.length} ${schedule.unitPlural}`;
  $('jumpResults').innerHTML = rows.length
    ? `<p class="results-label">${resultLabel}</p>` + rows.map(r=>`<button class="jump-row ${r.id===state.selectedJump?'active':''}" data-id="${r.id}"><span class="num"><small>${schedule.itemLabel}</small><strong>${schedule.id === 'juzAmma' ? r.quranSurah : r.id}</strong></span><span><strong>${passageTitleNumbered(r)}</strong><small>${r.theme}</small></span></button>`).join('')
    : `<p class="subtle">No ${schedule.unitPlural} matched your search.</p>`;
  document.querySelectorAll('.jump-row').forEach(btn=>btn.addEventListener('click',()=>{state.selectedJump=Number(btn.dataset.id);renderJump();}));
  renderJumpPreview();
}
function renderJumpPreview(){
  const schedule = activeSchedule();
  const r=readings[state.selectedJump-1] || readings[0];
  $('jumpPreview').innerHTML=`<p class="eyebrow">${schedule.itemLabel} ${schedule.id === 'juzAmma' ? r.quranSurah : r.id}</p><h3>${passageTitleNumbered(r)}</h3><p class="subtle">${r.theme}</p><div class="metrics">${metricHtml(r)}</div><button class="primary-btn" id="setStartBtn">Set as Current ${schedule.itemLabel}</button><button class="soft-btn preview-read-btn" id="previewReadBtn">Read in App</button><a class="soft-link-btn" href="${quranUrl(r)}" target="_blank" rel="noopener">Open casually on Quran.com</a>`;
  $('setStartBtn').addEventListener('click',()=>setStartingReading(r.id));
  $('previewReadBtn').addEventListener('click',()=>openReader(r.id,{casual:true}));
}
function viewReadingInfo(id){
  state.previewReadingId = Math.min(readings.length, Math.max(1, Number(id) || 1));
  state.completionAck = null;
  renderAll();
  showView('current');
}
function setStartingReading(id){
  state.current=id;
  state.previewReadingId=null;
  state.completionAck=null;
  state.history.push({type:'set-current-reading',cycle:state.cycle,plan:activePlanId,reading:id,date:new Date().toISOString()});
  save(); renderAll(); showView('current');
}
function startNewCycle({recordCompleted=false}={}){
  const schedule = activeSchedule();
  const allDone = state.completed.size >= readings.length;
  if(recordCompleted || allDone){
    recordCompletedCycleIfNeeded();
    state.cycle += 1;
    state.current=1;
    state.completed.clear();
    state.completionAck=null;
    state.cycleStarted=new Date().toISOString();
    save(); renderAll(); showView('home');
    return;
  }

  if(!confirm(`Restart ${schedule.name} from the beginning? This clears only this plan’s completion checks.`)) return;
  state.current=1;
  state.completed.clear();
  state.completionAck=null;
  state.cycleStarted=new Date().toISOString();
  state.history.push({type:'restart-current-cycle',cycle:state.cycle,plan:activePlanId,date:new Date().toISOString()});
  save(); renderAll(); showView('home');
}
function showView(name){ if(name !== 'current') { state.completionAck=null; state.previewReadingId=null; } views.forEach(v=>$(`${v}View`).classList.toggle('hidden',v!==name)); document.querySelectorAll('[data-view]').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===name)); renderCurrent(); }
function renderCompletedCyclesSection(schedule){
  const progress = progressForPlan(schedule.id);
  const cycles = (progress.history || [])
    .filter(item=>item && item.type==='completed-cycle')
    .sort((a,b)=>new Date(b.completedAt)-new Date(a.completedAt));
  const countText = cycles.length === 1 ? 'Completed 1 time' : cycles.length ? `Completed ${cycles.length} times` : 'Not completed yet';
  const body = cycles.length ? `
    <div class="history-table-wrap">
      <table class="history-table completed-plan-table">
        <thead><tr><th>Date</th><th>Duration</th><th>Action</th></tr></thead>
        <tbody>${cycles.map(c=>`<tr><td>${formatDate(c.completedAt)}</td><td>${c.duration || durationDays(c.startedAt,c.completedAt)}</td><td><button class="history-delete-cycle" data-delete-cycle="${c.cycle}" data-delete-plan="${schedule.id}" data-delete-completed-at="${c.completedAt || ''}" type="button">Delete</button></td></tr>`).join('')}</tbody>
      </table>
    </div>` : `
    <div class="empty-history compact-empty-history">
      <div class="empty-icon">${schedule.icon}</div>
      <h3>Not completed yet.</h3>
      <p>Complete your first ${schedule.name} cycle to see it recorded here.</p>
    </div>`;
  return `
    <section class="history-card completed-plan-card plan-${schedule.accent}">
      <div class="completed-plan-head">
        <div class="completed-plan-title">
          <span class="plan-icon" aria-hidden="true">${schedule.icon}</span>
          <div><p class="eyebrow">${schedule.name}</p><h3>${schedule.countLabel}</h3></div>
        </div>
        <span class="history-count-label">${countText}</span>
      </div>
      ${body}
    </section>`;
}
function renderHistory(){
  const wrap = $('completedCyclesByPlan');
  if(!wrap) return;
  wrap.innerHTML = Object.values(SCHEDULES).map(schedule => renderCompletedCyclesSection(schedule)).join('');
  wrap.querySelectorAll('[data-delete-cycle]').forEach(btn => btn.addEventListener('click', () => {
    deleteCompletedCycle(btn.dataset.deletePlan, Number(btn.dataset.deleteCycle), btn.dataset.deleteCompletedAt);
  }));
}
function deleteCompletedCycle(planId, cycle, completedAt){
  const schedule = SCHEDULES[planId] || activeSchedule();
  const confirmed = confirm(`Delete this completed ${schedule.name} cycle record?\n\nThis only removes the history entry. It will not change your current reading progress.`);
  if(!confirmed) return;
  const matchesRecord = item => item && item.type === 'completed-cycle' && Number(item.cycle) === Number(cycle) && (item.completedAt || '') === (completedAt || '') && (item.plan || planId) === planId;
  if(planId === activePlanId){
    state.history = (state.history || []).filter(item => !matchesRecord(item));
  } else {
    const stored = planProgress[planId] || defaultPlanProgress(planId);
    stored.history = (stored.history || []).filter(item => !matchesRecord(item));
    planProgress[planId] = stored;
  }
  save();
  renderAll();
  haptic(15);
}

async function fetchSurahText(surahNumber){
  if(surahCache.has(surahNumber)) return surahCache.get(surahNumber);
  const url=`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.hilali`;
  const res=await fetch(url);
  if(!res.ok) throw new Error('Unable to load Qur’an text.');
  const json=await res.json();
  if(!json || json.code !== 200 || !Array.isArray(json.data) || json.data.length < 2) throw new Error('Unexpected Qur’an text response for Uthmani / Hilali-Khan text.');
  const arabic=json.data[0].ayahs || [];
  const english=json.data[1].ayahs || [];
  const combined=arabic.map((a,idx)=>({
    numberInSurah:a.numberInSurah,
    arabic:a.text,
    english:(english[idx] && english[idx].text) || ''
  }));
  surahCache.set(surahNumber,combined);
  return combined;
}

async function fetchPageText(pageNumber){
  const key = `page:${pageNumber}`;
  if(surahCache.has(key)) return surahCache.get(key);

  // v0.12.1 hotfix: the page endpoint is more reliable when each edition is
  // requested separately. The previous combined /editions/ URL could fail and
  // leave Two Pages a Day unable to load in Reading Mode.
  const fetchEdition = async (edition) => {
    const url = `https://api.alquran.cloud/v1/page/${pageNumber}/${edition}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('Unable to load Qur’an page text.');
    const json = await res.json();
    if(!json || json.code !== 200 || !json.data || !Array.isArray(json.data.ayahs)){
      throw new Error('Unexpected Qur’an page response.');
    }
    return json.data.ayahs || [];
  };

  const [arabic, english] = await Promise.all([
    fetchEdition('quran-uthmani'),
    fetchEdition('en.hilali')
  ]);

  const englishByAyah = new Map(english.map(a => [a.number, a.text]));
  const combined = arabic.map((a,idx)=>({
    numberInSurah:a.numberInSurah,
    surahNumber:a.surah?.number,
    surahName:a.surah?.englishName || a.surah?.name || `Surah ${a.surah?.number || ''}`,
    arabic:a.text,
    english: englishByAyah.get(a.number) || (english[idx] && english[idx].text) || ''
  }));
  surahCache.set(key,combined);
  return combined;
}

const READER_BISMILLAH_ARABIC = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
const LEADING_BISMILLAH_PATTERNS = [
  /^\s*بِسْمِ\s+[ٱا]للَّهِ\s+[ٱا]لرَّحْمَ[ٰـ]?نِ\s+[ٱا]لرَّحِيمِ\s*/u,
  /^\s*بسم\s+الله\s+الرحمن\s+الرحيم\s*/u
];
function stripLeadingBismillah(text=''){
  for(const pattern of LEADING_BISMILLAH_PATTERNS){
    if(pattern.test(text)){
      return { text: text.replace(pattern, '').trim(), stripped: true };
    }
  }
  return { text, stripped: false };
}
function shouldShowReaderBismillah(surahNumber, passage){
  // Tawbah does not begin with the basmalah. Al-Fatihah's basmalah is treated as āyah 1.
  return passage.start === 1 && surahNumber !== 1 && surahNumber !== 9;
}

async function loadReadingText(reading){
  if(isPageReading(reading)){
    const ayahs = [];
    for(let page = reading.pageStart; page <= reading.pageEnd; page++){
      ayahs.push(...await fetchPageText(page));
    }
    const groupsBySurah = [];
    ayahs.forEach(ayah => {
      let group = groupsBySurah[groupsBySurah.length - 1];
      if(!group || group.surahNumber !== ayah.surahNumber){
        group = { title: `${formatSurahNumber(ayah.surahNumber)} ${ayah.surahName}`, surahName: ayah.surahName, surahNumber: ayah.surahNumber, start: ayah.numberInSurah, end: ayah.numberInSurah, bismillah: '', ayahs: [] };
        groupsBySurah.push(group);
      }
      group.end = ayah.numberInSurah;
      let arabicText = ayah.arabic;
      if(ayah.numberInSurah === 1 && ayah.surahNumber !== 1 && ayah.surahNumber !== 9){
        const cleaned = stripLeadingBismillah(arabicText);
        if(cleaned.stripped){ group.bismillah = READER_BISMILLAH_ARABIC; arabicText = cleaned.text; }
      }
      group.ayahs.push({...ayah, arabic: arabicText});
    });
    return groupsBySurah;
  }
  const groups=[];
  for(const [idx,passage] of reading.passages.entries()){
    if(passage.name.startsWith('Review:')) continue;
    const surahNumber=passageSurahNumber(reading,idx);
    const ayahs=await fetchSurahText(surahNumber);
    let passageAyahs=ayahs.filter(a=>a.numberInSurah>=passage.start && a.numberInSurah<=passage.end);
    const showBismillah = shouldShowReaderBismillah(surahNumber, passage);
    if(showBismillah && passageAyahs[0]){
      const cleaned = stripLeadingBismillah(passageAyahs[0].arabic);
      passageAyahs = [{...passageAyahs[0], arabic: cleaned.text}, ...passageAyahs.slice(1)];
    }
    groups.push({
      title:`${formatSurahNumber(surahNumber)} ${passage.name} ${passage.start}–${passage.end}`,
      surahName: passage.name,
      surahNumber,
      start: passage.start,
      end: passage.end,
      bismillah: showBismillah ? READER_BISMILLAH_ARABIC : '',
      ayahs: passageAyahs
    });
  }
  return groups;
}
function updateReaderModeButtons(){
  $('modeBothBtn').classList.toggle('active',state.readerMode==='both');
  $('modeArabicBtn').classList.toggle('active',state.readerMode==='arabic');
  $('readerBody').classList.toggle('arabic-only',state.readerMode==='arabic');
  $('readerBody').classList.toggle('reader-wide', state.readerWidth==='wide');
  $('readerBody').style.setProperty('--reader-scale', String(state.readerFont));
  $('readerBody').style.setProperty('--arabic-scale', state.arabicSize==='large' ? '1.18' : state.arabicSize==='medium' ? '1.05' : '.9');
  $('readerBody').style.setProperty('--english-scale', state.englishSize==='large' ? '1.18' : state.englishSize==='medium' ? '1.05' : '.92');
  document.querySelectorAll('[data-arabic-size]').forEach(btn=>{
    const on=btn.dataset.arabicSize===state.arabicSize;
    btn.classList.toggle('active', on);
    btn.textContent=(on?'✓ ':'') + btn.dataset.arabicSize[0].toUpperCase()+btn.dataset.arabicSize.slice(1);
  });
  document.querySelectorAll('[data-english-size]').forEach(btn=>{
    const on=btn.dataset.englishSize===state.englishSize;
    btn.classList.toggle('active', on);
    btn.textContent=(on?'✓ ':'') + btn.dataset.englishSize[0].toUpperCase()+btn.dataset.englishSize.slice(1);
  });
  document.querySelectorAll('[data-reader-width]').forEach(btn=>btn.classList.toggle('active', btn.dataset.readerWidth===state.readerWidth));
  document.querySelectorAll('[data-reader-theme]').forEach(btn=>{
    const on = btn.dataset.readerTheme===state.readerTheme;
    btn.classList.toggle('active', on);
    btn.textContent = on ? '✓' : '';
  });
  const readerModal = $('readerModal');
  if(readerModal){
    readerModal.classList.remove('reader-theme-green','reader-theme-cream','reader-theme-dark');
    readerModal.classList.add(`reader-theme-${state.readerTheme || 'green'}`);
  }
  const showToggle=$('showEnglishToggle');
  if(showToggle) showToggle.checked = state.readerMode !== 'arabic';
}
function saveReaderPreference(key,value){
  localStorage.setItem(key,value);
  updateReaderModeButtons();
  haptic(8);
}
function readerReading(){ return readings[(state.readerReadingId || state.current) - 1] || currentReading(); }
function readerScrollKey(reading){ return `${activePlanId}:${reading.id}`; }
function renderReaderShell(){
  const schedule = activeSchedule();
  const reading=readerReading();
  const label = isPageReading(reading) ? pageRangeText(reading) : (schedule.id === 'complete' ? `Reading ${reading.id} of ${readings.length}` : `${formatSurahNumber(reading.quranSurah)} ${reading.passages[0].name}`);
  $('readerModalTitle').textContent=label;
  $('readerSubtitle').textContent = isPageReading(reading) ? `Reading ${reading.id} of ${readings.length}` : `${passageTitleNumbered(reading)} • ${reading.ayat} āyāt`; 
  $('readerPositionPill').textContent = isPageReading(reading) ? `${schedule.name} • Reading ${reading.id}` : (schedule.id === 'complete' ? `Reading ${reading.id} of ${readings.length}` : `${schedule.name} • Surah ${reading.quranSurah}`);
  $('readerQuranLink').href=quranUrl(reading);
  const prevReading = readings[reading.id - 2];
  const nextReading = readings[reading.id];
  $('readerPrevBtn').disabled = reading.id <= 1;
  $('readerNextBtn').disabled = reading.id >= readings.length;
  if ($('readerPrevLabel')) $('readerPrevLabel').textContent = prevReading ? passageTitleNumbered(prevReading) : 'Beginning of cycle';
  if ($('readerNextLabel')) $('readerNextLabel').textContent = nextReading ? passageTitleNumbered(nextReading) : 'End of cycle';
  const isCycleReader = state.readerContext === 'cycle' && reading.id === state.current;
  $('readerCompleteBtn').classList.toggle('hidden', !isCycleReader);
  $('readerCompleteBtn').innerHTML=`<span>${isCompleted(reading.id)?'☑':'☐'}</span> ${isCompleted(reading.id)?'Marked Complete':'Mark Complete'}`;
  updateReaderModeButtons();
  updateReaderProgress();
}
function renderReaderError(reading,error){
  $('readerBody').innerHTML=`<div class="reader-error"><h3>Reader text could not load.</h3><p>This usually means the browser could not reach the Qur’an text source. You can still continue using the schedule and open this passage on Quran.com. The intended English translation for this app is Muhsin Khan & Hilali.</p><p class="subtle">${error.message || error}</p><a class="primary-btn" href="${quranUrl(reading)}" target="_blank" rel="noopener">Open on Quran.com</a></div>`;
}
function renderReaderGroups(groups){
  if(!groups.length){ $('readerBody').innerHTML='<div class="reader-error"><p>No verse text is available for this reading yet.</p></div>'; return; }
  $('readerBody').innerHTML=groups.map(group=>`
    <section class="reader-surah">
      <h3>${surahTitleHtml(group.surahNumber, group.surahName || group.title, group.start && group.end ? `${group.start}–${group.end}` : '')}</h3>
      ${group.bismillah ? `<p class="reader-bismillah" dir="rtl" lang="ar">${group.bismillah}</p>` : ''}
      ${group.ayahs.map(ayah=>`
        <article class="ayah-card" data-surah-name="${group.surahName || group.title}" data-surah-number="${group.surahNumber}" data-ayah="${ayah.numberInSurah}">
          <div class="ayah-top"><span class="ayah-number">${ayah.numberInSurah}</span></div>
          <p class="arabic-ayah" dir="rtl" lang="ar">${ayah.arabic}</p>
          <p class="english-ayah">${ayah.english}</p>
        </article>`).join('')}
    </section>`).join('');
  updateReaderModeButtons();
  updateReaderProgress();
}
async function openReader(readingId=(state.previewReadingId || state.current),{casual=false}={}){
  state.readerReadingId=readingId;
  state.readerContext=casual ? 'casual' : 'cycle';
  const reading=readerReading();
  state.completionAck=null;
  if(!casual) showView('current');
  $('readerModal').classList.remove('hidden');
  document.body.classList.add('reading-mode-open');
  renderReaderShell();
  $('readerBody').innerHTML='<div class="reader-loading">Loading Qur’an text…</div>';
  try{
    const groups=await loadReadingText(reading);
    renderReaderGroups(groups);
    const savedTop = Number((state.readerScroll || {})[readerScrollKey(reading)] || 0);
    requestAnimationFrame(()=>{
      if(savedTop > 40){
        $('readerBody').scrollTop = 0;
        updateReaderProgress();
        showResumePrompt(reading, savedTop);
      } else {
        hideResumePrompt();
        $('readerBody').scrollTop = savedTop;
        updateReaderProgress();
      }
    });
  }catch(error){
    renderReaderError(reading,error);
  }
}
function saveReaderScroll(){
  const reading=readerReading();
  if(reading && state.readerScroll) state.readerScroll[readerScrollKey(reading)] = $('readerBody').scrollTop || 0;
  save();
}
function getReaderPositionAt(scrollTop){
  const body=$('readerBody');
  const cards=[...body.querySelectorAll('.ayah-card')];
  if(!cards.length) return null;
  const target = scrollTop + Math.min(120, body.clientHeight * 0.18);
  let chosen = cards[0];
  for(const card of cards){
    if(card.offsetTop <= target) chosen = card;
    else break;
  }
  return {
    surahName: chosen.dataset.surahName || 'Current Surah',
    surahNumber: Number(chosen.dataset.surahNumber || 0),
    ayah: Number(chosen.dataset.ayah || 0),
    element: chosen
  };
}
function formatReaderPosition(pos){
  if(!pos || !pos.ayah) return 'Beginning';
  return `${pos.surahName} • Āyah ${pos.ayah}`;
}
function updateReaderProgress(){
  const body=$('readerBody');
  const max=Math.max(1, body.scrollHeight - body.clientHeight);
  const pct=Math.max(0, Math.min(100, Math.round((body.scrollTop / max) * 100)));
  if($('readerProgressBar')) $('readerProgressBar').style.width=pct + '%';
  if($('readerProgressText')) $('readerProgressText').textContent=formatReaderPosition(getReaderPositionAt(body.scrollTop));
}
function softlyHighlightReaderPosition(scrollTop){
  const pos=getReaderPositionAt(scrollTop);
  if(!pos || !pos.element) return;
  pos.element.classList.add('resume-highlight');
  setTimeout(()=>pos.element.classList.remove('resume-highlight'), 1400);
}
function hideResumePrompt(){
  const card=$('resumeReadingCard');
  if(card) card.classList.add('hidden');
}
function showResumePrompt(reading, savedTop){
  const card=$('resumeReadingCard');
  if(!card) return;
  const positionLabel = formatReaderPosition(getReaderPositionAt(savedTop));
  $('resumeReadingText').textContent=`Your saved place is ${positionLabel} in ${activeSchedule().itemLabel} ${activeSchedule().id === 'juzAmma' ? reading.quranSurah : reading.id}.`;
  card.classList.remove('hidden');
}
function clearReaderProgressFor(readingId){
  if(state.readerScroll) delete state.readerScroll[`${activePlanId}:${readingId}`];
  save();
}
async function navigateReader(delta){
  hideResumePrompt();
  const active=readerReading();
  const nextId=Math.max(1, Math.min(readings.length, active.id + delta));
  if(nextId === active.id) return;
  saveReaderScroll();
  haptic(10);
  if(state.readerContext === 'cycle'){
    state.current = nextId;
  }
  state.readerReadingId = nextId;
  state.completionAck=null;
  save();
  renderAll();
  await openReader(nextId,{casual:state.readerContext==='casual'});
}
function closeReader(){ hideResumePrompt(); saveReaderScroll(); $('readerModal').classList.add('hidden'); document.body.classList.remove('reading-mode-open'); state.readerReadingId=null; state.readerContext='cycle'; }
function markCurrentComplete(){
  haptic(20);
  const infoReading = currentInfoReading();
  const reader = state.readerReadingId ? readerReading() : null;
  const isCasualReader = state.readerContext === 'casual';
  const id = reader ? reader.id : infoReading.id;
  const wasCompleted=isCompleted(id);
  if(wasCompleted){
    state.completed.delete(id);
    if(id === state.current) removeRecordedCompletionForCurrentCycle();
    state.completionAck=null;
  } else {
    state.completed.add(id);
    state.history.push({type:'marked-complete',cycle:state.cycle,plan:activePlanId,reading:id,date:new Date().toISOString()});
    recordCompletedCycleIfNeeded();
    if(!isCasualReader && id === state.current){
      state.current = id < readings.length ? id + 1 : id;
      state.previewReadingId = null;
      state.completionAck={completedId:id};
    } else {
      state.completionAck=null;
    }
  }
  save();
  closeReader();
  renderAll();
  showView('current');
}
function undoLastCompletion(){
  const ack=state.completionAck;
  if(!ack || !ack.completedId) return;
  state.completed.delete(ack.completedId);
  removeRecordedCompletionForCurrentCycle();
  state.current=ack.completedId;
  state.completionAck=null;
  state.history.push({type:'undo-complete',cycle:state.cycle,plan:activePlanId,reading:ack.completedId,date:new Date().toISOString()});
  haptic(15);
  save(); renderAll(); showView('current');
}
function haptic(ms=12){ if(navigator.vibrate) navigator.vibrate(ms); }




function currentPlanHasResettableProgress(){
  return state.current > 1 || state.completed.size > 0 || Object.keys(state.readerScroll || {}).some(key => key.startsWith(`${activePlanId}:`));
}
function resetButtonLabel(schedule = activeSchedule()){
  return 'Reset This Plan';
}
function renderResetControls(){
  const schedule = activeSchedule();
  const label = resetButtonLabel(schedule);
  ['homeResetPlanBtn','resetPlanProgressBtn'].forEach(id => {
    const btn = $(id);
    if(!btn) return;
    btn.textContent = label;
    btn.title = `Clear progress for ${schedule.name} only`;
    btn.disabled = false;
  });
}
function resetPlanProgress(planId){
  const targetPlanId = SCHEDULES[planId] ? planId : activePlanId;
  const schedule = SCHEDULES[targetPlanId] || activeSchedule();
  if(!confirm(`Start ${schedule.name} over?\n\nThis will reset progress for this plan, move its current reading back to the beginning, and keep History unchanged.`)) return;

  if(targetPlanId === activePlanId){
    state.current = 1;
    state.completed.clear();
    state.completionAck = null;
    state.cycleStarted = new Date().toISOString();
    state.history.push({type:'restart-current-cycle',cycle:state.cycle,plan:activePlanId,date:new Date().toISOString()});
  } else {
    const stored = planProgress[targetPlanId] || defaultPlanProgress(targetPlanId);
    planProgress[targetPlanId] = {
      ...stored,
      current: 1,
      completed: [],
      cycleStarted: new Date().toISOString(),
      history: Array.isArray(stored.history) ? stored.history : []
    };
    planProgress[targetPlanId].history.push({type:'restart-current-cycle',cycle:Number(stored.cycle || 1),plan:targetPlanId,date:new Date().toISOString()});
  }

  save();
  renderAll();
  renderPlanModal();
  if(targetPlanId === activePlanId) showView('home');
}

function resetCurrentPlanProgress(){
  const schedule = activeSchedule();
  const confirmed = confirm(`Start this plan over?\n\nThis will:\n• Reset your progress for ${schedule.name}.\n• Move your current reading back to the beginning.\n• Keep your History unchanged.`);
  if(!confirmed) return;
  state.current = 1;
  state.completed.clear();
  state.completionAck = null;
  state.previewReadingId = null;
  state.cycleStarted = new Date().toISOString();
  if(state.readerScroll){
    readings.forEach(reading => { delete state.readerScroll[readerScrollKey(reading)]; });
  }
  save();
  renderAll();
  renderBrowseScheduleModal();
  haptic(15);
}

function openBrowseModal(){ renderBrowseScheduleModal(); $('browseScheduleModal')?.classList.remove('hidden'); }
function closeBrowseModal(){ $('browseScheduleModal')?.classList.add('hidden'); }
function renderBrowseScheduleModal(){
  const schedule = activeSchedule();
  const q = ($('browseScheduleSearch')?.value || '').trim();
  const rows = readings.filter(r => matchReading(r, q));
  if($('browseScheduleTitle')) $('browseScheduleTitle').textContent = schedule.name;
  if($('browseScheduleEyebrow')) $('browseScheduleEyebrow').textContent = 'My Schedule';
  if($('browseScheduleNote')) $('browseScheduleNote').textContent = 'Your reading plan at a glance.';
  const list = $('browseScheduleList');
  if(!list) return;
  list.innerHTML = rows.length ? rows.map(r => `<div class="browse-schedule-row ${r.id===state.current?'active':''} ${isCompleted(r.id)?'completed':''}" data-id="${r.id}">
    <span class="reading-num"><small>${schedule.itemLabel}</small><strong>${schedule.id === 'juzAmma' ? r.quranSurah : r.id}</strong></span>
    <button class="browse-row-main" data-preview-reading="${r.id}" type="button"><strong>${passageTitleNumbered(r)}</strong>${readingRowSmallHtml(r)}</button>
    ${r.id===state.current ? '<span class="browse-row-current current-badge" aria-label="Current reading">📍 Current</span>' : `<button class="browse-row-current set-current-pill" data-set-current-reading="${r.id}" type="button" title="Set as current ${schedule.unitSingular}" aria-label="Set ${schedule.itemLabel} ${schedule.id === 'juzAmma' ? r.quranSurah : r.id} as current ${schedule.unitSingular}">Set as Current</button>`}
    <button class="browse-row-check" type="button" aria-pressed="${isCompleted(r.id) ? 'true' : 'false'}" title="Mark this ${schedule.unitSingular} complete or incomplete">${isCompleted(r.id) ? '✓' : '○'}</button>
  </div>`).join('') : `<p class="subtle">No ${schedule.unitPlural} matched your search.</p>`;
  list.querySelectorAll('[data-preview-reading]').forEach(btn => btn.addEventListener('click', () => { viewReadingInfo(Number(btn.dataset.previewReading)); closeBrowseModal(); }));
  list.querySelectorAll('[data-set-current-reading]').forEach(btn => btn.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    setStartingReading(Number(btn.dataset.setCurrentReading));
    closeBrowseModal();
  }));
  list.querySelectorAll('.browse-row-check').forEach(check => {
    const toggleFromBrowse = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const row = check.closest('.browse-schedule-row');
      if(!row) return;
      const id = Number(row.dataset.id);
      toggleReadingComplete(id, !isCompleted(id));
      renderBrowseScheduleModal();
    };
    check.addEventListener('click', toggleFromBrowse);
  });
}

function openPlanModal(){
  renderPlanModal();
  $('planModal')?.classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(btn=>btn.classList.remove('active'));
  document.querySelectorAll('[data-action="openPlans"]').forEach(btn=>btn.classList.add('active'));
}
function closePlanModal(){
  $('planModal')?.classList.add('hidden');
  const visible = views.find(v => !$(`${v}View`).classList.contains('hidden')) || 'home';
  document.querySelectorAll('[data-view]').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===visible));
  document.querySelectorAll('[data-action="openPlans"]').forEach(btn=>btn.classList.remove('active'));
}
function renderPlanModal(){
  const wrap = $('planOptions');
  if(!wrap) return;
  wrap.innerHTML = allSchedules().map(schedule => {
    const summary = planProgressSummary(schedule.id);
    const isActive = schedule.id === activePlanId;
    const pct = summary.total ? Math.round((summary.completed / summary.total) * 100) : 0;
    return `<article class="plan-option ${isActive?'active':''} plan-${schedule.accent}">
      <span class="plan-option-icon" aria-hidden="true">${schedule.icon}</span>
      <span class="plan-option-main">
        <strong>${schedule.name}</strong>
        <small>${schedule.countLabel}</small>
        <span class="plan-option-desc">${schedule.description}</span>
        <span class="plan-mini-progress"><span style="width:${pct}%"></span></span>
        <em>${summary.status}</em>
        <span class="plan-last-read">Last read: ${summary.last}</span>
        <span class="plan-card-actions">
          <button class="plan-switch-btn" data-plan-id="${schedule.id}" type="button" ${isActive?'disabled':''}>${isActive?'Current Plan':'Switch to This Plan'}</button>
          <button class="plan-restart-btn" data-reset-plan-id="${schedule.id}" type="button">Start This Plan Over</button>
        </span>
      </span>
      <span class="plan-check" aria-hidden="true">${isActive?'✓':'○'}</span>
    </article>`;
  }).join('');
  wrap.querySelectorAll('[data-plan-id]').forEach(btn => btn.addEventListener('click', () => switchPlan(btn.dataset.planId)));
  wrap.querySelectorAll('[data-reset-plan-id]').forEach(btn => btn.addEventListener('click', () => resetPlanProgress(btn.dataset.resetPlanId)));
}

function renderStartCycleCard(){
  const schedule = activeSchedule();
  const allDone = state.completed.size >= readings.length;
  const card = document.querySelector('.start-cycle-card');
  if(!card) return;
  const eyebrow = card.querySelector('.eyebrow');
  const strong = card.querySelector('strong');
  const text = card.querySelector('p:not(.eyebrow)');
  const btn = $('startNewCycleBtn');
  if(allDone){
    eyebrow.textContent = `Start ${schedule.name} Again`;
    strong.textContent = `Begin this plan again from the first ${schedule.unitSingular}.`;
    text.textContent = 'Your completed cycle will be recorded in History, then a fresh cycle will begin.';
    btn.textContent = `Start ${schedule.name} Again`;
  } else {
    eyebrow.textContent = `Restart ${schedule.name}`;
    strong.textContent = `Start this plan over from the beginning.`;
    text.textContent = 'This clears only this plan’s completion checks. Progress in other plans will not be affected.';
    btn.textContent = `Restart ${schedule.name}`;
  }
}

function qrcStorageSnapshot(){
  const data = {};
  for(let i = 0; i < localStorage.length; i += 1){
    const key = localStorage.key(i);
    if(key && key.startsWith('qrc_')) data[key] = localStorage.getItem(key);
  }
  return {
    app: 'quran-reading-companion',
    version: '0.15.2',
    exportedAt: new Date().toISOString(),
    localStorage: data
  };
}
function formatBackupDate(iso){
  if(!iso) return 'Never';
  try { return new Date(iso).toLocaleString(undefined, { month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit' }); }
  catch { return 'Unknown'; }
}
function renderBackupPage(){
  const last = localStorage.getItem('qrc_last_backup_v0152');
  if($('lastBackupText')) $('lastBackupText').textContent = `Last backup: ${formatBackupDate(last)}`;
}
function downloadBackup(){
  const snapshot = qrcStorageSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
  const stamp = new Date().toISOString().slice(0,10);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quran-reading-companion-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  localStorage.setItem('qrc_last_backup_v0152', new Date().toISOString());
  renderBackupPage();
}
function restoreBackupFile(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || '{}'));
      const data = parsed.localStorage || parsed;
      if(!data || typeof data !== 'object') throw new Error('Invalid backup file.');
      Object.keys(data).forEach(key => {
        if(key.startsWith('qrc_')) localStorage.setItem(key, String(data[key]));
      });
      if($('restoreStatusText')) $('restoreStatusText').textContent = 'Backup restored. Reloading…';
      setTimeout(() => window.location.reload(), 650);
    } catch (error) {
      if($('restoreStatusText')) $('restoreStatusText').textContent = 'That backup file could not be restored.';
    }
  };
  reader.readAsText(file);
}
function renderBackupTip(){
  const tip = $('backupTip');
  if(!tip) return;
  const dismissed = localStorage.getItem('qrc_backup_tip_dismissed_v0152') === 'true';
  const hasProgress = hasAnySavedProgress();
  tip.classList.toggle('hidden', dismissed || hasProgress);
}

function renderAll(){ renderCurrent(); renderHome(); renderReadings(); renderHistory(); renderBackupPage(); renderBackupTip(); updateProgress(); renderStartCycleCard(); renderPlanSelector(); renderResetControls(); }

$('completeBtn')?.addEventListener('click',markCurrentComplete);
$('beginNextBtn')?.addEventListener('click',()=>{ if(state.completionAck && state.completionAck.completedId===readings.length){ startNewCycle({recordCompleted:true}); return; } state.completionAck=null; save(); renderAll(); });
$('undoCompleteBtn')?.addEventListener('click',undoLastCompletion);
$('prevBtn')?.addEventListener('click',()=>{state.completionAck=null;state.previewReadingId=Math.max(1,(state.previewReadingId || state.current)-1);renderAll();}); $('nextBtn')?.addEventListener('click',()=>{state.completionAck=null;state.previewReadingId=Math.min(readings.length,(state.previewReadingId || state.current)+1);renderAll();}); $('upNextBtn')?.addEventListener('click',()=>{viewReadingInfo(Math.min(readings.length,state.current+1));});
$('startNewCycleBtn')?.addEventListener('click',()=>startNewCycle());
$('currentPlanBtn')?.addEventListener('click',openPlanModal);
$('closePlanModal')?.addEventListener('click',closePlanModal);
$('cancelPlanModal')?.addEventListener('click',closePlanModal);
$('planModal')?.addEventListener('click',e=>{ if(e.target.id === 'planModal') closePlanModal(); });
$('closeBrowseScheduleModal')?.addEventListener('click',closeBrowseModal);
$('browseScheduleModal')?.addEventListener('click',e=>{ if(e.target.id === 'browseScheduleModal') closeBrowseModal(); });
$('browseScheduleSearch')?.addEventListener('input',renderBrowseScheduleModal);
$('resetPlanProgressBtn')?.addEventListener('click',resetCurrentPlanProgress);
$('homeResetPlanBtn')?.addEventListener('click',resetCurrentPlanProgress);
$('downloadBackupBtn')?.addEventListener('click',downloadBackup);
$('restoreBackupInput')?.addEventListener('change',e=>restoreBackupFile(e.target.files && e.target.files[0]));
$('dismissBackupTip')?.addEventListener('click',()=>{ localStorage.setItem('qrc_backup_tip_dismissed_v0152','true'); renderBackupTip(); });
$('homeStartNewCycleBtn')?.addEventListener('click',()=>startNewCycle({recordCompleted:true}));
if($('jumpSearch')) $('jumpSearch').addEventListener('input',e=>{state.query=e.target.value;renderJump();}); if($('browseAllBtn')) $('browseAllBtn').addEventListener('click',()=>{state.query='';$('jumpSearch').value='';renderJump();}); if($('homeBrowseScheduleBtn')) $('homeBrowseScheduleBtn').addEventListener('click',openBrowseModal); document.querySelectorAll('[data-query]').forEach(btn=>btn.addEventListener('click',()=>{state.query=btn.dataset.query;if($('jumpSearch')) $('jumpSearch').value=state.query;renderJump();}));
document.querySelectorAll('[data-action="openPlans"]').forEach(btn=>btn.addEventListener('click', (event)=>{ event.preventDefault(); openPlanModal(); }));
document.addEventListener('click', (event)=>{
  const planButton = event.target.closest('[data-action="openPlans"]');
  if(!planButton) return;
  event.preventDefault();
  openPlanModal();
});
document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{ if(btn.dataset.view==='readings'){ openBrowseModal(); return; } showView(btn.dataset.view); })); document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{state.filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(p=>p.classList.toggle('active',p.dataset.filter===state.filter));renderReadings();}));

$('homeReaderBtn')?.addEventListener('click',()=>openReader(state.current,{casual:false}));
$('openReaderBtn')?.addEventListener('click',()=>openReader(state.previewReadingId || state.current,{casual:isPreviewingDifferentReading()}));
$('setCurrentReadingBtn')?.addEventListener('click',()=>{ if(state.previewReadingId) setStartingReading(state.previewReadingId); renderAll(); showView('current'); });
$('readerCompleteBtn')?.addEventListener('click',markCurrentComplete);
$('closeReaderModal')?.addEventListener('click',closeReader);
$('readerExitBottomBtn')?.addEventListener('click',closeReader);
$('readerPrevBtn')?.addEventListener('click',()=>navigateReader(-1));
$('readerNextBtn')?.addEventListener('click',()=>navigateReader(1));
$('readerBookmarkBtn')?.addEventListener('click',()=>{haptic(10); alert('Bookmark support can be added in a future version. Your reading place is already saved automatically.');});
$('readerNotesBtn')?.addEventListener('click',()=>{haptic(10); alert('Notes can be added in a future version, in shā Allah.');});
$('readerBody')?.addEventListener('scroll',()=>{ updateReaderProgress(); clearTimeout(window.__qrcScrollTimer); window.__qrcScrollTimer=setTimeout(saveReaderScroll,150); });
$('resumeReadingBtn')?.addEventListener('click',()=>{
  const reading=readerReading();
  const savedTop=Number((state.readerScroll || {})[readerScrollKey(reading)] || 0);
  hideResumePrompt();
  $('readerBody').scrollTo({top:savedTop, behavior:'smooth'});
  haptic(10);
});
$('startReadingOverBtn')?.addEventListener('click',()=>{
  const reading=readerReading();
  clearReaderProgressFor(reading.id);
  hideResumePrompt();
  $('readerBody').scrollTo({top:0, behavior:'smooth'});
  updateReaderProgress();
  haptic(10);
});
$('modeBothBtn')?.addEventListener('click',()=>{state.readerMode='both'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('modeArabicBtn')?.addEventListener('click',()=>{state.readerMode='arabic'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('fontDownBtn')?.addEventListener('click',()=>{state.readerFont=Math.max(.78,Number((state.readerFont-.08).toFixed(2))); localStorage.setItem('qrc_reader_font_v07',state.readerFont); updateReaderModeButtons();});
$('fontUpBtn')?.addEventListener('click',()=>{state.readerFont=Math.min(1.45,Number((state.readerFont+.08).toFixed(2))); localStorage.setItem('qrc_reader_font_v07',state.readerFont); updateReaderModeButtons();});
$('readerAppearanceBtn')?.addEventListener('click',()=>{$('readerAppearancePanel').classList.remove('hidden'); updateReaderModeButtons(); haptic(8);});
$('closeReaderAppearance')?.addEventListener('click',()=>{$('readerAppearancePanel').classList.add('hidden');});
document.querySelectorAll('[data-arabic-size]').forEach(btn=>btn.addEventListener('click',()=>{state.arabicSize=btn.dataset.arabicSize; saveReaderPreference('qrc_reader_arabic_size_v082',state.arabicSize);}));
document.querySelectorAll('[data-english-size]').forEach(btn=>btn.addEventListener('click',()=>{state.englishSize=btn.dataset.englishSize; saveReaderPreference('qrc_reader_english_size_v082',state.englishSize);}));
document.querySelectorAll('[data-reader-width]').forEach(btn=>btn.addEventListener('click',()=>{state.readerWidth=btn.dataset.readerWidth; saveReaderPreference('qrc_reader_width_v082',state.readerWidth);}));
document.querySelectorAll('[data-reader-theme]').forEach(btn=>btn.addEventListener('click',()=>{state.readerTheme=btn.dataset.readerTheme; saveReaderPreference('qrc_reader_theme_v082',state.readerTheme);}));
$('showEnglishToggle')?.addEventListener('change',e=>{state.readerMode=e.target.checked?'both':'arabic'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('resetReaderAppearance')?.addEventListener('click',()=>{
  state.readerMode='both'; state.readerFont=.9; state.arabicSize='small'; state.englishSize='small'; state.readerWidth='standard'; state.readerTheme='green';
  localStorage.setItem('qrc_reader_mode_v07',state.readerMode);
  localStorage.setItem('qrc_reader_font_v07',state.readerFont);
  localStorage.setItem('qrc_reader_arabic_size_v082',state.arabicSize);
  localStorage.setItem('qrc_reader_english_size_v082',state.englishSize);
  localStorage.setItem('qrc_reader_width_v082',state.readerWidth);
  localStorage.setItem('qrc_reader_theme_v082',state.readerTheme);
  updateReaderModeButtons(); haptic(10);
});

function closeMobileMenu(){
  const panel = $('mobileMenuPanel');
  const backdrop = $('mobileMenuBackdrop');
  const toggle = $('mobileMenuToggle');
  if(panel) panel.classList.add('hidden');
  if(backdrop) backdrop.classList.add('hidden');
  if(toggle) toggle.setAttribute('aria-expanded','false');
  document.body.classList.remove('mobile-menu-open');
}
function openMobileMenu(){
  const panel = $('mobileMenuPanel');
  const backdrop = $('mobileMenuBackdrop');
  const toggle = $('mobileMenuToggle');
  if(panel) panel.classList.remove('hidden');
  if(backdrop) backdrop.classList.remove('hidden');
  if(toggle) toggle.setAttribute('aria-expanded','true');
  document.body.classList.add('mobile-menu-open');
}
$('mobileMenuToggle')?.addEventListener('click', openMobileMenu);
$('mobileMenuClose')?.addEventListener('click', closeMobileMenu);
$('mobileMenuBackdrop')?.addEventListener('click', closeMobileMenu);
document.querySelectorAll('#mobileMenuPanel .nav-item').forEach(btn=>btn.addEventListener('click', closeMobileMenu));

function openAbout(){ $('aboutModal').classList.remove('hidden'); } function closeAbout(){ $('aboutModal').classList.add('hidden'); }
document.querySelectorAll('[data-modal="aboutSchedule"]').forEach(btn=>btn.addEventListener('click',openAbout)); $('closeAboutModal')?.addEventListener('click',closeAbout); $('gotItAbout')?.addEventListener('click',closeAbout); $('aboutModal')?.addEventListener('click',e=>{if(e.target.id==='aboutModal') closeAbout();}); document.addEventListener('keydown',e=>{if(e.key==='Escape') { closeAbout(); closePlanModal(); closeBrowseModal(); closeMobileMenu(); $('readerAppearancePanel')?.classList.add('hidden'); closeReader(); }});
renderAll();
