const readings = [
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
  readerContext: 'cycle'
};
const surahCache = new Map();

const $ = (id) => document.getElementById(id);
const views = ['home','current','readings','history','progress'];
function save(){ localStorage.setItem(STORAGE.current,String(state.current)); localStorage.setItem(STORAGE.completed,JSON.stringify([...state.completed])); localStorage.setItem(STORAGE.cycle,String(state.cycle)); localStorage.setItem(STORAGE.history,JSON.stringify(state.history)); localStorage.setItem(STORAGE.cycleStarted,state.cycleStarted); localStorage.setItem('qrc_reader_scroll_v08', JSON.stringify(state.readerScroll || {})); }
function normalizeState(){
  const total = readings.length;
  state.current = Math.min(total, Math.max(1, Number(state.current) || 1));
  state.completed = new Set([...state.completed].map(Number).filter(id => id >= 1 && id <= total));
  state.history = Array.isArray(state.history) ? state.history : [];
  const recordedCompletedCycles = state.history.filter(item => item && item.type === 'completed-cycle');
  const expectedCurrentCycle = recordedCompletedCycles.length + 1;
  if (state.cycle !== expectedCurrentCycle) {
    state.cycle = expectedCurrentCycle;
  }
  if (!state.cycleStarted) state.cycleStarted = new Date().toISOString();
}
normalizeState();
save();
function currentReading(){ return readings[state.current - 1] || readings[0]; }
function isCompleted(id){ return state.completed.has(id); }
function passageTitle(reading){ return reading.passages.map(item => item.name.startsWith('Review:') ? item.name : `${item.name} ${item.start}–${item.end}`).join(' + '); }
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
function quranUrl(reading){ return `https://quran.com/${reading.quranSurah}?startingVerse=${reading.quranAyah}`; }
function metricHtml(reading){ return `<span class="metric">🕰 <span><strong>${reading.minutes}</strong><small>Rough guide</small></span></span><span class="metric">📖 <span><strong>${reading.ayat} āyāt</strong><small>Approx. length</small></span></span><span class="metric">📄 <span><strong>${reading.pages} pages</strong><small>In mushaf</small></span></span>`; }
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

function renderCurrent(){
  if (state.completionAck) {
    renderCompletionAck();
    return;
  }
  const reading=currentReading();
  $('readingCard').classList.remove('hidden','is-exiting');
  $('aboutReadingPanel').classList.remove('hidden');
  $('completionCard').classList.add('hidden');
  $('readingTitle').textContent=`Reading ${reading.id} of ${readings.length}`;
  $('passageList').innerHTML=reading.passages.map(item=>`<div class="passage"><h3>${item.name}</h3>${item.name.startsWith('Review:')?'':`<p>${item.start} – ${item.end}</p>`}</div>`).join('');
  $('readingTheme').textContent=reading.theme; $('readingDescription').innerHTML=addSalawat(reading.description); $('currentMetrics').innerHTML=metricHtml(reading); $('quranLink').href=quranUrl(reading);
  $('completeBtn').innerHTML=`<span id="completeBox">${isCompleted(reading.id)?'☑':'☐'}</span> ${isCompleted(reading.id)?'Completed':'Mark Complete'}`;
}
function renderCompletionAck(){
  const done = readings[(state.completionAck.completedId || 1) - 1] || readings[0];
  const next = readings[(state.current || 1) - 1] || readings[readings.length - 1];
  $('readingCard').classList.add('hidden');
  $('aboutReadingPanel').classList.add('hidden');
  $('completionCard').classList.remove('hidden');
  $('readingTitle').textContent = `Reading ${next.id} of ${readings.length}`;
  $('completedSummary').innerHTML = `Reading <strong>${done.id}</strong>, <strong>${passageTitle(done)}</strong>, has been marked complete.`;
  $('nextPreview').innerHTML = `<h3>Reading ${next.id}</h3><p class="subtle">${passageTitle(next)}</p><p class="theme">${next.theme}</p><div class="metrics centered-metrics">${metricHtml(next)}</div>`;
  $('beginNextBtn').textContent = done.id === readings.length ? 'Start New Cycle' : (next.id === done.id ? 'Return to Reading' : `Begin Reading ${next.id}`);
}
function renderHome(){
  const reading=currentReading(); const pct=Math.round((state.completed.size/readings.length)*100);
  $('homeReadingTitle').textContent=`Reading ${reading.id} of ${readings.length}`; $('homePassageTitle').textContent=passageTitle(reading); $('homeMetrics').innerHTML=metricHtml(reading); $('heroBar').style.width=`${pct}%`;
  renderJump();
}
function updateProgress(){
  const done=state.completed.size,total=readings.length,pct=Math.round((done/total)*100),degrees=pct*3.6;
  ['sidePercent','bigPercent'].forEach(id=>$(id).textContent=`${pct}%`); $('progressText').textContent=`${done} of ${total} readings completed`; $('bigProgressText').textContent=`${done} of ${total} readings completed`; ['sideRing','bigRing'].forEach(id=>$(id).style.background=`conic-gradient(var(--green) ${degrees}deg, #e4e3df ${degrees}deg)`);
  $('completedStat').textContent=done; $('remainingStat').textContent=total-done; $('currentStat').textContent=state.current; $('cycleStat').textContent=state.cycle; $('sideCompleted').textContent=done; $('sideRemaining').textContent=total-done; $('cycleTitle').textContent=`Cycle ${state.cycle}`; $('cycleDetails').textContent=`Reading ${state.current} of ${total}`;
  const next=readings[Math.min(total-1,state.current)]; $('nextBadge').textContent=next.id; $('upNextTitle').textContent=passageTitle(next); $('upNextTheme').textContent=next.theme;
}
function renderReadings(){
  const rows=readings.filter(r=> state.filter==='completed'?isCompleted(r.id):state.filter==='remaining'?!isCompleted(r.id):true);
  $('allReadings').innerHTML=rows.map(r=>`<div class="reading-row ${isCompleted(r.id)?'completed':''}" data-id="${r.id}">
    <label class="reading-check-wrap" title="Mark this reading complete or incomplete">
      <input class="reading-check-input" type="checkbox" data-id="${r.id}" ${isCompleted(r.id)?'checked':''} />
      <span class="custom-check">${isCompleted(r.id)?'✓':'○'}</span>
    </label>
    <button class="reading-row-main" data-id="${r.id}">
      <span class="reading-num">${r.id}</span>
      <span><strong>${passageTitle(r)}</strong><small>${r.theme} • ${r.minutes} • ${r.ayat} āyāt</small></span>
    </button>
  </div>`).join('');
  document.querySelectorAll('.reading-row-main').forEach(row=>row.addEventListener('click',()=>{state.current=Number(row.dataset.id);save();showView('current');renderAll();}));
  document.querySelectorAll('.reading-check-input').forEach(box=>box.addEventListener('change',()=>toggleReadingComplete(Number(box.dataset.id), box.checked)));
}
function toggleReadingComplete(id, checked){
  if(checked){ state.completed.add(id); state.history.push({type:'manual-check',cycle:state.cycle,reading:id,date:new Date().toISOString()}); }
  else { state.completed.delete(id); state.history.push({type:'manual-uncheck',cycle:state.cycle,reading:id,date:new Date().toISOString()}); }
  state.completionAck=null;
  save(); renderAll();
}
function matchReading(reading,q){
  if(!q) return true; const s=q.toLowerCase().trim();
  if(/^\d+$/.test(s)) return reading.id===Number(s);
  const plus=s.match(/^(\d+)\+$/); if(plus) return reading.id>=Number(plus[1]);
  const range=s.match(/^(\d+)\s*-\s*(\d+)$/); if(range) return reading.id>=Number(range[1]) && reading.id<=Number(range[2]);
  return `${reading.id} ${passageTitle(reading)} ${reading.theme} ${reading.description}`.toLowerCase().includes(s);
}
function renderJump(){
  const rows=readings.filter(r=>matchReading(r,state.query));
  if(!rows.find(r=>r.id===state.selectedJump)) state.selectedJump=(rows[0]||readings[0]).id;
  const resultLabel = state.query.trim() ? `${rows.length} matching reading${rows.length===1?'':'s'}` : `All ${readings.length} readings`;
  $('jumpResults').innerHTML = rows.length
    ? `<p class="results-label">${resultLabel}</p>` + rows.map(r=>`<button class="jump-row ${r.id===state.selectedJump?'active':''}" data-id="${r.id}"><span class="num">${r.id}</span><span><strong>${passageTitle(r)}</strong><small>${r.theme}</small></span><span>${r.minutes}</span></button>`).join('')
    : `<p class="subtle">No readings matched your search.</p>`;
  document.querySelectorAll('.jump-row').forEach(btn=>btn.addEventListener('click',()=>{state.selectedJump=Number(btn.dataset.id);renderJump();}));
  renderJumpPreview();
}
function renderJumpPreview(){
  const r=readings[state.selectedJump-1] || readings[0];
  $('jumpPreview').innerHTML=`<p class="eyebrow">Reading ${r.id}</p><h3>${passageTitle(r)}</h3><p class="subtle">${r.theme}</p><div class="metrics">${metricHtml(r)}</div><button class="primary-btn" id="setStartBtn">Set as Current Reading</button><button class="soft-btn preview-read-btn" id="previewReadBtn">Read in App</button><a class="soft-link-btn" href="${quranUrl(r)}" target="_blank" rel="noopener">Open casually on Quran.com</a>`;
  $('setStartBtn').addEventListener('click',()=>setStartingReading(r.id));
  $('previewReadBtn').addEventListener('click',()=>openReader(r.id,{casual:true}));
}
function setStartingReading(id){
  state.current=id;
  state.completionAck=null;
  state.history.push({type:'set-current-reading',cycle:state.cycle,reading:id,date:new Date().toISOString()});
  save(); renderAll(); showView('current');
}
function startNewCycle({recordCompleted=false}={}){
  const allDone = state.completed.size >= readings.length;
  if(recordCompleted || allDone){
    const completedAt = new Date().toISOString();
    const alreadyRecorded = state.history.some(item=>item.type==='completed-cycle' && item.cycle===state.cycle);
    if(!alreadyRecorded){
      state.history.push({type:'completed-cycle',cycle:state.cycle,startedAt:state.cycleStarted,completedAt,duration:durationDays(state.cycleStarted,completedAt)});
    }
    state.cycle += 1;
    state.current=1;
    state.completed.clear();
    state.completionAck=null;
    state.cycleStarted=new Date().toISOString();
    save(); renderAll(); showView('home');
    return;
  }

  if(!confirm('Restart this current cycle from Reading 1? This clears only this app’s completion checks and does not create a completed cycle in History.')) return;
  state.current=1;
  state.completed.clear();
  state.completionAck=null;
  state.cycleStarted=new Date().toISOString();
  state.history.push({type:'restart-current-cycle',cycle:state.cycle,date:new Date().toISOString()});
  save(); renderAll(); showView('home');
}
function showView(name){ if(name !== 'current') state.completionAck=null; views.forEach(v=>$(`${v}View`).classList.toggle('hidden',v!==name)); document.querySelectorAll('[data-view]').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===name)); renderCurrent(); }
function renderHistory(){
  const current=currentReading();
  const completedCount=state.completed.size;
  $('historyCurrentCycle').innerHTML = `
    <div class="history-current-main">
      <strong>Cycle ${state.cycle}</strong>
      <span>Started ${formatDate(state.cycleStarted)}</span>
    </div>
    <dl class="history-details">
      <div><dt>Current Reading</dt><dd>Reading ${state.current} of ${readings.length}</dd></div>
      <div><dt>Current Passage</dt><dd>${passageTitle(current)}</dd></div>
      <div><dt>Read in This Cycle</dt><dd>${completedCount} reading${completedCount===1?'':'s'}</dd></div>
    </dl>
    <div class="history-actions centered-actions">
      <button class="primary-btn" data-history-action="resume">Continue Reading</button>
      <button class="ghost-outline" data-history-action="choose">Choose Starting Reading</button>
    </div>`;

  const cycles=completedCycles();
  $('historyTotal').textContent=cycles.length;
  if(!cycles.length){
    $('completedCyclesHistory').innerHTML = `
      <div class="empty-history">
        <div class="empty-icon">📖</div>
        <h3>No completed reading cycles yet.</h3>
        <p>Your completed reading cycles will appear here after you finish your first cycle.</p>
        <div class="history-actions centered-actions">
          <button class="primary-btn" data-history-action="resume">Continue Reading</button>
          <button class="ghost-outline" data-history-action="choose">Choose Starting Reading</button>
        </div>
      </div>`;
  } else {
    $('completedCyclesHistory').innerHTML = `
      <div class="history-table-wrap">
        <table class="history-table">
          <thead><tr><th>Cycle</th><th>Started</th><th>Completed</th><th>Duration</th></tr></thead>
          <tbody>${cycles.map(c=>`<tr><td>Cycle ${c.cycle}</td><td>${formatDate(c.startedAt)}</td><td>${formatDate(c.completedAt)}</td><td>${c.duration || durationDays(c.startedAt,c.completedAt)}</td></tr>`).join('')}</tbody>
        </table>
      </div>`;
  }
  document.querySelectorAll('[data-history-action="resume"]').forEach(btn=>btn.addEventListener('click',()=>openReader()));
  document.querySelectorAll('[data-history-action="choose"]').forEach(btn=>btn.addEventListener('click',()=>showView('home')));
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
function passageSurahNumber(reading, passageIndex){ return reading.quranSurah + passageIndex; }
async function loadReadingText(reading){
  const groups=[];
  for(const [idx,passage] of reading.passages.entries()){
    if(passage.name.startsWith('Review:')) continue;
    const surahNumber=passageSurahNumber(reading,idx);
    const ayahs=await fetchSurahText(surahNumber);
    groups.push({
      title:`${passage.name} ${passage.start}–${passage.end}`,
      surahName: passage.name,
      surahNumber,
      ayahs:ayahs.filter(a=>a.numberInSurah>=passage.start && a.numberInSurah<=passage.end)
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
function renderReaderShell(){
  const reading=readerReading();
  $('readerModalTitle').textContent=`Reading ${reading.id} of ${readings.length}`;
  $('readerSubtitle').textContent=`${passageTitle(reading)} • ${reading.minutes} • ${reading.ayat} āyāt`; 
  $('readerPositionPill').textContent=`Reading ${reading.id} of ${readings.length}`;
  $('readerQuranLink').href=quranUrl(reading);
  const prevReading = readings[reading.id - 2];
  const nextReading = readings[reading.id];
  $('readerPrevBtn').disabled = reading.id <= 1;
  $('readerNextBtn').disabled = reading.id >= readings.length;
  if ($('readerPrevLabel')) $('readerPrevLabel').textContent = prevReading ? passageTitle(prevReading) : 'Beginning of cycle';
  if ($('readerNextLabel')) $('readerNextLabel').textContent = nextReading ? passageTitle(nextReading) : 'End of cycle';
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
      <h3>${group.title}</h3>
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
async function openReader(readingId=state.current,{casual=false}={}){
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
    const savedTop = Number((state.readerScroll || {})[reading.id] || 0);
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
  if(reading && state.readerScroll) state.readerScroll[reading.id] = $('readerBody').scrollTop || 0;
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
  $('resumeReadingText').textContent=`Your saved place is ${positionLabel} in Reading ${reading.id}.`;
  card.classList.remove('hidden');
}
function clearReaderProgressFor(readingId){
  if(state.readerScroll) delete state.readerScroll[readingId];
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
  const id=state.current;
  const wasCompleted=isCompleted(id);
  if(wasCompleted){
    state.completed.delete(id);
    state.completionAck=null;
  } else {
    state.completed.add(id);
    state.history.push({type:'marked-complete',cycle:state.cycle,reading:id,date:new Date().toISOString()});
    state.current = id < readings.length ? id + 1 : id;
    state.completionAck={completedId:id};
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
  state.current=ack.completedId;
  state.completionAck=null;
  state.history.push({type:'undo-complete',cycle:state.cycle,reading:ack.completedId,date:new Date().toISOString()});
  haptic(15);
  save(); renderAll(); showView('current');
}
function haptic(ms=12){ if(navigator.vibrate) navigator.vibrate(ms); }

function renderStartCycleCard(){
  const allDone = state.completed.size >= readings.length;
  const card = document.querySelector('.start-cycle-card');
  if(!card) return;
  const eyebrow = card.querySelector('.eyebrow');
  const strong = card.querySelector('strong');
  const text = card.querySelector('p:not(.eyebrow)');
  const btn = $('startNewCycleBtn');
  if(allDone){
    eyebrow.textContent = 'Start New Cycle';
    strong.textContent = 'Begin a fresh journey from Reading 1.';
    text.textContent = 'Your completed cycle will be recorded in History, then a new cycle will begin.';
    btn.textContent = 'Start New Cycle';
  } else {
    eyebrow.textContent = 'Restart Current Cycle';
    strong.textContent = 'Start this cycle over from Reading 1.';
    text.textContent = 'This clears only this app’s completion checks. It will not create a completed cycle or increase the cycle number.';
    btn.textContent = 'Restart Current Cycle';
  }
}
function renderAll(){ renderCurrent(); renderHome(); renderReadings(); renderHistory(); updateProgress(); renderStartCycleCard(); }

$('completeBtn').addEventListener('click',markCurrentComplete);
$('beginNextBtn').addEventListener('click',()=>{ if(state.completionAck && state.completionAck.completedId===readings.length){ startNewCycle({recordCompleted:true}); return; } state.completionAck=null; save(); renderAll(); });
$('undoCompleteBtn').addEventListener('click',undoLastCompletion);
$('prevBtn').addEventListener('click',()=>{state.completionAck=null;state.current=Math.max(1,state.current-1);save();renderAll();}); $('nextBtn').addEventListener('click',()=>{state.completionAck=null;state.current=Math.min(readings.length,state.current+1);save();renderAll();}); $('upNextBtn').addEventListener('click',()=>{state.completionAck=null;state.current=Math.min(readings.length,state.current+1);save();renderAll();showView('current');});
$('startNewCycleBtn').addEventListener('click',()=>startNewCycle());
$('jumpSearch').addEventListener('input',e=>{state.query=e.target.value;renderJump();}); $('browseAllBtn').addEventListener('click',()=>{state.query='';$('jumpSearch').value='';renderJump();}); document.querySelectorAll('[data-query]').forEach(btn=>btn.addEventListener('click',()=>{state.query=btn.dataset.query;$('jumpSearch').value=state.query;renderJump();}));
document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view))); document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{state.filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(p=>p.classList.toggle('active',p.dataset.filter===state.filter));renderReadings();}));

$('homeReaderBtn').addEventListener('click',openReader);
$('openReaderBtn').addEventListener('click',openReader);
$('readerCompleteBtn').addEventListener('click',markCurrentComplete);
$('closeReaderModal').addEventListener('click',closeReader);
$('readerExitBottomBtn').addEventListener('click',closeReader);
$('readerPrevBtn').addEventListener('click',()=>navigateReader(-1));
$('readerNextBtn').addEventListener('click',()=>navigateReader(1));
$('readerBookmarkBtn').addEventListener('click',()=>{haptic(10); alert('Bookmark support can be added in a future version. Your reading place is already saved automatically.');});
$('readerNotesBtn').addEventListener('click',()=>{haptic(10); alert('Notes can be added in a future version, in shā Allah.');});
$('readerBody').addEventListener('scroll',()=>{ updateReaderProgress(); clearTimeout(window.__qrcScrollTimer); window.__qrcScrollTimer=setTimeout(saveReaderScroll,150); });
$('resumeReadingBtn').addEventListener('click',()=>{
  const reading=readerReading();
  const savedTop=Number((state.readerScroll || {})[reading.id] || 0);
  hideResumePrompt();
  $('readerBody').scrollTo({top:savedTop, behavior:'smooth'});
  haptic(10);
});
$('startReadingOverBtn').addEventListener('click',()=>{
  const reading=readerReading();
  clearReaderProgressFor(reading.id);
  hideResumePrompt();
  $('readerBody').scrollTo({top:0, behavior:'smooth'});
  updateReaderProgress();
  haptic(10);
});
$('modeBothBtn').addEventListener('click',()=>{state.readerMode='both'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('modeArabicBtn').addEventListener('click',()=>{state.readerMode='arabic'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('fontDownBtn').addEventListener('click',()=>{state.readerFont=Math.max(.78,Number((state.readerFont-.08).toFixed(2))); localStorage.setItem('qrc_reader_font_v07',state.readerFont); updateReaderModeButtons();});
$('fontUpBtn').addEventListener('click',()=>{state.readerFont=Math.min(1.45,Number((state.readerFont+.08).toFixed(2))); localStorage.setItem('qrc_reader_font_v07',state.readerFont); updateReaderModeButtons();});
$('readerAppearanceBtn').addEventListener('click',()=>{$('readerAppearancePanel').classList.remove('hidden'); updateReaderModeButtons(); haptic(8);});
$('closeReaderAppearance').addEventListener('click',()=>{$('readerAppearancePanel').classList.add('hidden');});
document.querySelectorAll('[data-arabic-size]').forEach(btn=>btn.addEventListener('click',()=>{state.arabicSize=btn.dataset.arabicSize; saveReaderPreference('qrc_reader_arabic_size_v082',state.arabicSize);}));
document.querySelectorAll('[data-english-size]').forEach(btn=>btn.addEventListener('click',()=>{state.englishSize=btn.dataset.englishSize; saveReaderPreference('qrc_reader_english_size_v082',state.englishSize);}));
document.querySelectorAll('[data-reader-width]').forEach(btn=>btn.addEventListener('click',()=>{state.readerWidth=btn.dataset.readerWidth; saveReaderPreference('qrc_reader_width_v082',state.readerWidth);}));
document.querySelectorAll('[data-reader-theme]').forEach(btn=>btn.addEventListener('click',()=>{state.readerTheme=btn.dataset.readerTheme; saveReaderPreference('qrc_reader_theme_v082',state.readerTheme);}));
$('showEnglishToggle').addEventListener('change',e=>{state.readerMode=e.target.checked?'both':'arabic'; localStorage.setItem('qrc_reader_mode_v07',state.readerMode); updateReaderModeButtons();});
$('resetReaderAppearance').addEventListener('click',()=>{
  state.readerMode='both'; state.readerFont=.9; state.arabicSize='small'; state.englishSize='small'; state.readerWidth='standard'; state.readerTheme='green';
  localStorage.setItem('qrc_reader_mode_v07',state.readerMode);
  localStorage.setItem('qrc_reader_font_v07',state.readerFont);
  localStorage.setItem('qrc_reader_arabic_size_v082',state.arabicSize);
  localStorage.setItem('qrc_reader_english_size_v082',state.englishSize);
  localStorage.setItem('qrc_reader_width_v082',state.readerWidth);
  localStorage.setItem('qrc_reader_theme_v082',state.readerTheme);
  updateReaderModeButtons(); haptic(10);
});

function openAbout(){ $('aboutModal').classList.remove('hidden'); } function closeAbout(){ $('aboutModal').classList.add('hidden'); }
document.querySelectorAll('[data-modal="aboutSchedule"]').forEach(btn=>btn.addEventListener('click',openAbout)); $('closeAboutModal').addEventListener('click',closeAbout); $('gotItAbout').addEventListener('click',closeAbout); $('aboutModal').addEventListener('click',e=>{if(e.target.id==='aboutModal') closeAbout();}); document.addEventListener('keydown',e=>{if(e.key==='Escape') { closeAbout(); $('readerAppearancePanel')?.classList.add('hidden'); closeReader(); }});
renderAll();
