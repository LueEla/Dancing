const dances = {
  salsa: {
    title: "Salsa on 1",
    step: "Базовый шаг",
    description: "Вперёд левой на 1, перенос веса на 2, назад в центр на 3. Пауза на 4. Зеркально назад правой на 5-6-7.",
    beats: [
      { count: "1", action: "шаг вперёд левой", foot: "L", type: "accent" },
      { count: "2", action: "перенос веса на правую", foot: "R", type: "step" },
      { count: "3", action: "возврат в центр левой", foot: "L", type: "step" },
      { count: "4", action: "пауза — вес на левой", foot: null, type: "pause" },
      { count: "5", action: "шаг назад правой", foot: "R", type: "accent" },
      { count: "6", action: "перенос веса на левую", foot: "L", type: "step" },
      { count: "7", action: "возврат в центр правой", foot: "R", type: "step" },
      { count: "8", action: "пауза — вес на правой", foot: null, type: "pause" },
    ],
    mistakes: [
      "Не прыгать на паузе 4 и 8",
      "Вес должен быть полностью перенесён на рабочую ногу",
      "Шаги маленькие — не тянуть ногу далеко",
    ],
    drills: [
      "Считать вслух, стоя на месте",
      "Отмечать паузы хлопком",
      "Идти только 1–3, остановиться на 4",
    ],
    left:  { left: "43%", top: "36%", rotate: "-8deg" },
    right: { left: "57%", top: "64%", rotate: "8deg" },
  },
  chacha: {
    title: "Cha-cha-cha",
    step: "Chasse rhythm",
    description: "После 2-3 появляется тройной шаг: 4-и-1. Важно не ускоряться всем телом, а дробить вес через стопы.",
    beats: [
      { count: "1", action: "шаг вперёд левой", foot: "L", type: "accent" },
      { count: "2", action: "перенос веса на правую", foot: "R", type: "step" },
      { count: "3", action: "возврат левой на место", foot: "L", type: "step" },
      { count: "4", action: "шаг правой в сторону — начало чассе", foot: "R", type: "sync" },
      { count: "и", action: "приставить левую к правой", foot: "L", type: "sync" },
      { count: "1", action: "шаг правой в сторону — конец чассе", foot: "R", type: "accent" },
      { count: "2", action: "перенос веса на левую", foot: "L", type: "step" },
      { count: "3", action: "возврат правой на место", foot: "R", type: "step" },
    ],
    mistakes: [
      "Не торопить «и» в чассе — он короткий, но чёткий",
      "Не поднимать пятки на шагах чассе",
      "Колени мягкие, не деревянные",
    ],
    drills: [
      "Тренировать только 4-и-1 на месте",
      "Считать «ча-ча-ча» на шагах чассе",
      "Двигать только стопами, без корпуса",
    ],
    left:  { left: "38%", top: "50%", rotate: "-18deg" },
    right: { left: "58%", top: "50%", rotate: "18deg" },
  },
  pachanga: {
    title: "Pachanga",
    step: "Bounce и шаг",
    description: "Пружина идёт через колени и корпус. Шаг остаётся маленьким, а ощущение ритма становится упругим и слегка диагональным.",
    beats: [
      { count: "1", action: "шаг левой с пружиной вниз", foot: "L", type: "accent" },
      { count: "2", action: "подъём — распрямление коленей", foot: null, type: "sync" },
      { count: "3", action: "шаг правой", foot: "R", type: "step" },
      { count: "4", action: "пружина — акцент вниз", foot: null, type: "sync" },
      { count: "5", action: "шаг левой с пружиной вниз", foot: "L", type: "accent" },
      { count: "6", action: "подъём — распрямление коленей", foot: null, type: "sync" },
      { count: "7", action: "шаг правой", foot: "R", type: "step" },
      { count: "8", action: "пружина — акцент вниз", foot: null, type: "sync" },
    ],
    mistakes: [
      "Не маршировать — пружина, не топот",
      "Не задирать колени вверх",
      "Диагональное направление, не только вверх-вниз",
    ],
    drills: [
      "Двигать только коленями без шагов",
      "Почувствовать пружину на каждом чётном счёте",
      "Добавить шаги только после чистой пружины",
    ],
    left:  { left: "40%", top: "45%", rotate: "-25deg" },
    right: { left: "60%", top: "55%", rotate: "25deg" },
  },
  mambo: {
    title: "Mambo on 2",
    step: "Break on 2",
    description: "Подготовка на 1, брейк на 2, возврат на 3. В танце ощущается задержка, потому что главный акцент приходит не сразу.",
    beats: [
      { count: "1", action: "подготовка — лёгкий перенос веса", foot: "L", type: "step" },
      { count: "2", action: "брейк вперёд левой — главный акцент", foot: "L", type: "accent" },
      { count: "3", action: "возврат правой в центр", foot: "R", type: "step" },
      { count: "4", action: "пауза", foot: null, type: "pause" },
      { count: "5", action: "подготовка — лёгкий перенос веса", foot: "R", type: "step" },
      { count: "6", action: "брейк назад правой — главный акцент", foot: "R", type: "accent" },
      { count: "7", action: "возврат левой в центр", foot: "L", type: "step" },
      { count: "8", action: "пауза", foot: null, type: "pause" },
    ],
    mistakes: [
      "Не делать брейк на 1 — это мамбо, а не сальса",
      "Не спешить: задержка на 1 — это часть стиля",
      "Почувствовать, как музыка «тянет» на 2",
    ],
    drills: [
      "Слушать музыку и отмечать 2 хлопком",
      "Ходить только на 2–3, пропуская 1",
      "Сравнить ощущение брейка на 1 и на 2",
    ],
    left:  { left: "45%", top: "34%", rotate: "-6deg" },
    right: { left: "55%", top: "66%", rotate: "6deg" },
  },
  salsa2: {
    title: "Salsa on 2",
    step: "NY стиль, брейк на 2",
    description: "Шаг на 1, брейк на 2. Главное ощущение — пауза после 1 «притягивает» движение на 2. Музыка ведёт, а не ты. Уточнить нюансы с преподавателем.",
    beats: [
      { count: "1", action: "шаг левой вперёд", foot: "L", type: "step" },
      { count: "2", action: "брейк — перенос веса назад на правую", foot: "R", type: "accent" },
      { count: "3", action: "шаг левой на месте", foot: "L", type: "step" },
      { count: "4", action: "пауза", foot: null, type: "pause" },
      { count: "5", action: "шаг правой назад", foot: "R", type: "step" },
      { count: "6", action: "брейк — перенос веса вперёд на левую", foot: "L", type: "accent" },
      { count: "7", action: "шаг правой на месте", foot: "R", type: "step" },
      { count: "8", action: "пауза", foot: null, type: "pause" },
    ],
    mistakes: [
      "Не путать с сальсой на 1 — акцент другой",
      "Не спешить: задержка на 1 — это часть стиля",
      "Музыка «тянет» на 2, не надо торопить движение",
    ],
    drills: [
      "Хлопать только на 2 и 6, стоя под музыку",
      "Сначала освоить подготовку на 1 без брейка",
      "Сравнить ощущение с сальсой на 1 под одну песню",
    ],
    left:  { left: "42%", top: "40%", rotate: "-4deg" },
    right: { left: "58%", top: "60%", rotate: "4deg" },
  },
  boogaloo: {
    title: "Boogaloo",
    step: "Groove и акцент",
    description: "Бугалу больше держится на груве: шаги могут быть простыми, но корпус, плечи и задержки создают фанковую пластику.",
    beats: [
      { count: "1", action: "акцент корпусом — плечо вперёд", foot: "L", type: "accent" },
      { count: "и", action: "синкопа — оттяжка корпуса", foot: null, type: "sync" },
      { count: "2", action: "шаг с роллом бёдер", foot: "R", type: "step" },
      { count: "3", action: "акцент — противоположное плечо", foot: "L", type: "accent" },
      { count: "и", action: "синкопа", foot: null, type: "sync" },
      { count: "4", action: "шаг с роллом", foot: "R", type: "step" },
      { count: "5", action: "грув-акцент", foot: "L", type: "accent" },
      { count: "6", action: "шаг с расслаблением", foot: "R", type: "step" },
    ],
    mistakes: [
      "Не напрягать плечи — грув идёт из расслабления",
      "Не делать одинаковые акценты — чередовать стороны",
      "Слушать бас, а не только ритм",
    ],
    drills: [
      "Стоя на месте, двигать только плечами",
      "Добавить бёдра к плечам",
      "Шаги добавить в последнюю очередь",
    ],
    left:  { left: "42%", top: "58%", rotate: "14deg" },
    right: { left: "61%", top: "44%", rotate: "-14deg" },
  },
};

const lessons = [
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "",
    title: "Ча-ча-ча — урок 1",              titleEn: "Cha-cha-cha — Lesson 1",              titleHe: "צ'ה-צ'ה-צ'ה — שיעור 1" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "",
    title: "Ча-ча-ча — урок 2, шаги",        titleEn: "Cha-cha-cha — Lesson 2, Steps",        titleHe: "צ'ה-צ'ה-צ'ה — שיעור 2, צעדים" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "",
    title: "Ча-ча-ча — урок 2, под музыку",  titleEn: "Cha-cha-cha — Lesson 2, With Music",   titleHe: "צ'ה-צ'ה-צ'ה — שיעור 2, עם מוסיקה" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "",
    title: "Ча-ча-ча — урок 3, шаги",        titleEn: "Cha-cha-cha — Lesson 3, Steps",        titleHe: "צ'ה-צ'ה-צ'ה — שיעור 3, צעדים" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "",
    title: "Ча-ча-ча — урок 3, под музыку",  titleEn: "Cha-cha-cha — Lesson 3, With Music",   titleHe: "צ'ה-צ'ה-צ'ה — שיעור 3, עם מוסיקה" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "", video: "videos/Cha-cha-cha/Урок4.mp4",
    title: "Ча-ча-ча — урок 4, шаги",        titleEn: "Cha-cha-cha — Lesson 4, Steps",        titleHe: "צ'ה-צ'ה-צ'ה — שיעור 4, צעדים" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "", video: "videos/Cha-cha-cha/Урок4, под музыку.mp4",
    title: "Ча-ча-ча — урок 4, под музыку",  titleEn: "Cha-cha-cha — Lesson 4, With Music",   titleHe: "צ'ה-צ'ה-צ'ה — שיעור 4, עם מוסיקה" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "", video: "videos/Cha-cha-cha/Урок5.mp4",
    title: "Ча-ча-ча — урок 5, шаги",        titleEn: "Cha-cha-cha — Lesson 5, Steps",        titleHe: "צ'ה-צ'ה-צ'ה — שיעור 5, צעדים" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "", video: "videos/Cha-cha-cha/Урок5, под музыку.mp4",
    title: "Ча-ча-ча — урок 5, под музыку",  titleEn: "Cha-cha-cha — Lesson 5, With Music",   titleHe: "צ'ה-צ'ה-צ'ה — שיעור 5, עם מוסיקה" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "VUr2icXwUr0",
    title: "Ча-ча-ча — урок 6, шаги",        titleEn: "Cha-cha-cha — Lesson 6, Steps",        titleHe: "צ'ה-צ'ה-צ'ה — שיעור 6, צעדים" },
  { dance: "chacha",   teacher: "Алекс Аткин",   youtube: "", video: "videos/Cha-cha-cha/Урок6.mp4",
    title: "Ча-ча-ча — урок 6, под музыку",  titleEn: "Cha-cha-cha — Lesson 6, With Music",   titleHe: "צ'ה-צ'ה-צ'ה — שיעור 6, עם מוסיקה" },
  { dance: "salsa",    teacher: "Гиже и София",   youtube: "",
    title: "Сальса NY — видео 1",            titleEn: "Salsa NY — Video 1",                   titleHe: "סלסה NY — סרטון 1" },
  { dance: "salsa",    teacher: "Гиже и София",   youtube: "",
    title: "Сальса NY — видео 2",            titleEn: "Salsa NY — Video 2",                   titleHe: "סלסה NY — סרטון 2" },
  { dance: "salsa",    teacher: "Гиже и София",   youtube: "",
    title: "Сальса NY — видео 3",            titleEn: "Salsa NY — Video 3",                   titleHe: "סלסה NY — סרטון 3" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/2урок, шаги.mp4",
    title: "Пачанга — урок 2, шаги",         titleEn: "Pachanga — Lesson 2, Steps",            titleHe: "פאצ'אנגה — שיעור 2, צעדים" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/2урок, под музыку.mp4",
    title: "Пачанга — урок 2, под музыку",   titleEn: "Pachanga — Lesson 2, With Music",       titleHe: "פאצ'אנגה — שיעור 2, עם מוסיקה" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/4урок, шаги.mp4",
    title: "Пачанга — урок 4, шаги",         titleEn: "Pachanga — Lesson 4, Steps",            titleHe: "פאצ'אנגה — שיעור 4, צעדים" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/4урок, под музыку.mp4",
    title: "Пачанга — урок 4, под музыку",   titleEn: "Pachanga — Lesson 4, With Music",       titleHe: "פאצ'אנגה — שיעור 4, עם מוסיקה" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/4урок, под музыку, группа1.mp4",
    title: "Пачанга — урок 4, под музыку (группа)", titleEn: "Pachanga — Lesson 4, With Music (Group)", titleHe: "פאצ'אנגה — שיעור 4, עם מוסיקה (קבוצה)" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/5урок, шаги.mp4",
    title: "Пачанга — урок 5, шаги",         titleEn: "Pachanga — Lesson 5, Steps",            titleHe: "פאצ'אנגה — שיעור 5, צעדים" },
  { dance: "pachanga", teacher: "Алекс Аткин",   youtube: "", video: "videos/Pachanga/6урок, шаги.mp4",
    title: "Пачанга — урок 6, шаги",         titleEn: "Pachanga — Lesson 6, Steps",            titleHe: "פאצ'אנגה — שיעור 6, צעדים" },
];

const danceLabel = {
  salsa:    "Сальса",
  salsa2:   "Сальса 2",
  chacha:   "Ча-ча-ча",
  pachanga: "Пачанга",
  mambo:    "Мамбо",
  boogaloo: "Бугалу",
};

// ─── Internationalisation ──────────────────────────────────────────────────

let currentLang = "ru";

const UI = {
  he: {
    "nav.learn": "לימוד", "nav.archive": "ארכיון",
    "eyebrow.mode": "מצב", "eyebrow.scheme": "תרשים", "eyebrow.musicex": "דוגמת מוסיקה",
    "eyebrow.tempo": "קצב", "eyebrow.mistakes": "טעויות נפוצות", "eyebrow.drills": "תרגילים",
    "eyebrow.rhythm": "ריתמוס", "eyebrow.music": "מוסיקה", "eyebrow.archive": "ארכיון",
    "eyebrow.featured": "סרטון מסכם",
    "rhythm.title": "ספירה ואקצנטים",
    "music.title": "שכבות המוסיקה בסלסה",
    "library.title": "סרטוני שיעורים",
    "legend.step": "צעד", "legend.pause": "הפסקה", "legend.accent": "אקצנט", "legend.sync": "סינקופה",
    "track.clave": "קלאבה", "track.conga": "קונגה", "track.pachanga": "פאצ'אנגה",
    "track.body": "גוף", "track.maracas": "מרקאס",
    "track.clave.desc": "בסיס הקצב, קובע את הדפוס", "track.conga.desc": "מסמנת פעימות חזקות",
    "track.pachanga.desc": "מבטאי «וְ» — קפיצה", "track.body.desc": "תנועת הגוף והירכיים", "track.maracas.desc": "פעימה קבועה בכל הדופק",
    "clave.23": "קלאבה 2-3", "clave.32": "קלאבה 3-2",
    "map.play": "▶ להאזין", "map.stop": "◼ עצור",
    "sound.on": "קול פועל", "sound.off": "קול כבוי",
    "yt.placeholder": "הכנס קישור YouTube",
    "yt.input.placeholder": "https://youtube.com/watch?v=...",
    "filter.all": "הכל", "filter.salsa": "סלסה", "filter.chacha": "צ'ה-צ'ה-צ'ה", "filter.pachanga": "פאצ'אנגה",
    "featured.title": "צ'ה-צ'ה-צ'ה — שיעור 4",
    "featured.desc": "דוגמה לאיך נראה חומר השיעור בכללותו — צעדים, ריתמוס וחיבור למוסיקה.",
    "featured.teacher": "מורה: אלכס אטקין",
    "dance.salsa": "סלסה", "dance.salsa2": "סלסה 2", "dance.chacha": "צ'ה-צ'ה-צ'ה",
    "dance.pachanga": "פאצ'אנגה", "dance.mambo": "מאמבו", "dance.boogaloo": "בוגאלו",
    "card.teacher": "מורה:",
  },
  en: {
    "nav.learn": "Learn", "nav.archive": "Archive",
    "eyebrow.mode": "MODE", "eyebrow.scheme": "SCHEME", "eyebrow.musicex": "MUSIC EXAMPLE",
    "eyebrow.tempo": "TEMPO", "eyebrow.mistakes": "COMMON MISTAKES", "eyebrow.drills": "DRILLS",
    "eyebrow.rhythm": "RHYTHM", "eyebrow.music": "MUSIC", "eyebrow.archive": "ARCHIVE",
    "eyebrow.featured": "LESSON RECAP",
    "rhythm.title": "Count & Accents",
    "music.title": "Music Layers in Salsa",
    "library.title": "Lesson Videos",
    "legend.step": "step", "legend.pause": "pause", "legend.accent": "accent", "legend.sync": "syncopation",
    "track.clave": "Clave", "track.conga": "Conga", "track.pachanga": "Pachanga",
    "track.body": "Body", "track.maracas": "Maracas",
    "track.clave.desc": "rhythmic foundation, sets the pattern", "track.conga.desc": "marks the strong beats",
    "track.pachanga.desc": "& accents — bounce", "track.body.desc": "body and hip movement", "track.maracas.desc": "steady pulse on every beat",
    "clave.23": "Clave 2-3", "clave.32": "Clave 3-2",
    "map.play": "▶ listen", "map.stop": "◼ stop",
    "sound.on": "sound on", "sound.off": "sound off",
    "yt.placeholder": "paste YouTube link below",
    "yt.input.placeholder": "https://youtube.com/watch?v=...",
    "filter.all": "All", "filter.salsa": "Salsa", "filter.chacha": "Cha-cha-cha", "filter.pachanga": "Pachanga",
    "featured.title": "Cha-cha-cha — Lesson 4",
    "featured.desc": "An example of how the lesson material looks as a whole — steps, rhythm and connection to music.",
    "featured.teacher": "Teacher: Alex Atkin",
    "dance.salsa": "Salsa", "dance.salsa2": "Salsa 2", "dance.chacha": "Cha-cha-cha",
    "dance.pachanga": "Pachanga", "dance.mambo": "Mambo", "dance.boogaloo": "Boogaloo",
    "card.teacher": "Teacher:",
  },
  ru: {
    "nav.learn": "Учёба", "nav.archive": "Архив",
    "eyebrow.mode": "режим", "eyebrow.scheme": "схема", "eyebrow.musicex": "пример музыки",
    "eyebrow.tempo": "темп", "eyebrow.mistakes": "типичные ошибки", "eyebrow.drills": "упражнения",
    "eyebrow.rhythm": "ритм", "eyebrow.music": "музыка", "eyebrow.archive": "архив",
    "eyebrow.featured": "итоговое видео",
    "rhythm.title": "Счёт и акценты",
    "music.title": "Где искать слои в сальсе",
    "library.title": "Видео с уроков",
    "legend.step": "шаг", "legend.pause": "пауза", "legend.accent": "акцент", "legend.sync": "синкопа",
    "track.clave": "Клаве", "track.conga": "Конга", "track.pachanga": "Пачанга",
    "track.body": "Тело", "track.maracas": "Маракас",
    "track.clave.desc": "основа ритма, задаёт паттерн", "track.conga.desc": "маркирует сильные доли",
    "track.pachanga.desc": "акценты на «и» — подскок", "track.body.desc": "движение корпуса и бёдер", "track.maracas.desc": "ровный пульс на каждой доле",
    "clave.23": "Клаве 2-3", "clave.32": "Клаве 3-2",
    "map.play": "▶ слушать", "map.stop": "◼ стоп",
    "sound.on": "звук вкл", "sound.off": "звук выкл",
    "yt.placeholder": "вставь ссылку YouTube ниже",
    "yt.input.placeholder": "https://youtube.com/watch?v=...",
    "filter.all": "Все", "filter.salsa": "Сальса", "filter.chacha": "Ча-ча-ча", "filter.pachanga": "Пачанга",
    "featured.title": "Ча-ча-ча — урок 4",
    "featured.desc": "Пример того, как выглядит материал урока в целом — шаги, ритм и соединение под музыку.",
    "featured.teacher": "Преподаватель: Алекс Аткин",
    "dance.salsa": "Сальса", "dance.salsa2": "Сальса 2", "dance.chacha": "Ча-ча-ча",
    "dance.pachanga": "Пачанга", "dance.mambo": "Мамбо", "dance.boogaloo": "Бугалу",
    "card.teacher": "Преподаватель:",
  },
};

const danceI18n = {
  salsa: {
    en: {
      title: "Salsa on 1", step: "Basic Step",
      description: "Step forward on left on 1, weight transfer on 2, return to center on 3. Pause on 4. Mirror back on right for 5-6-7.",
      beatActions: [
        "step forward on left", "weight transfer to right", "return to center on left",
        "pause — weight on left", "step back on right", "weight transfer to left",
        "return to center on right", "pause — weight on right",
      ],
      mistakes: ["Don't bounce on pauses 4 and 8", "Weight must fully shift to the working foot", "Keep steps small — don't reach far"],
      drills: ["Count aloud while standing still", "Clap on the pauses", "Walk only 1–3, stop on 4"],
    },
    he: {
      title: "סלסה על 1", step: "צעד בסיסי",
      description: "צעד קדימה ברגל שמאל על 1, העברת משקל על 2, חזרה למרכז על 3. הפסקה על 4. מראה אחורה ברגל ימין על 5-6-7.",
      beatActions: [
        "צעד קדימה ברגל שמאל", "העברת משקל לרגל ימין", "חזרה למרכז ברגל שמאל",
        "הפסקה — משקל על שמאל", "צעד אחורה ברגל ימין", "העברת משקל לרגל שמאל",
        "חזרה למרכז ברגל ימין", "הפסקה — משקל על ימין",
      ],
      mistakes: ["לא לקפוץ בהפסקות 4 ו-8", "המשקל חייב לעבור לגמרי לרגל העובדת", "הצעדים קטנים — לא לגרור את הרגל"],
      drills: ["לספור בקול רם בעמידה במקום", "לסמן הפסקות עם מחיאת כפיים", "ללכת רק 1–3, לעצור על 4"],
    },
  },
  chacha: {
    en: {
      title: "Cha-cha-cha", step: "Chassé Rhythm",
      description: "After beats 2–3, a triple step appears: 4-and-1. The key is not to rush the whole body but to break the weight through the feet.",
      beatActions: [
        "step forward on left", "weight transfer to right", "return left to place",
        "step right to side — start of chassé", "close left next to right",
        "step right to side — end of chassé", "weight transfer to left", "return right to place",
      ],
      mistakes: ["Don't rush the 'and' in chassé — short but crisp", "Don't lift heels on chassé steps", "Keep knees soft, not stiff"],
      drills: ["Practice just 4-and-1 in place", "Count 'cha-cha-cha' on the chassé steps", "Move only the feet, no body"],
    },
    he: {
      title: "צ'ה-צ'ה-צ'ה", step: "ריתמוס צ'אסה",
      description: "אחרי הפעימות 2–3 מופיע שלושה-צעד: 4-ו-1. המפתח הוא לא להאיץ את כל הגוף אלא לפרק את המשקל דרך כפות הרגליים.",
      beatActions: [
        "צעד קדימה ברגל שמאל", "העברת משקל לרגל ימין", "חזרה ברגל שמאל למקום",
        "צעד ימינה — תחילת הצ'אסה", "צרף רגל שמאל לרגל ימין",
        "צעד ימינה — סוף הצ'אסה", "העברת משקל לרגל שמאל", "חזרה ברגל ימין למקום",
      ],
      mistakes: ["לא לזרז את ה'ו' בצ'אסה — קצר אבל ברור", "לא להרים עקבים בצעדי הצ'אסה", "הברכיים רכות, לא קשיחות"],
      drills: ["לתרגל רק 4-ו-1 במקום", "לספור 'צ'ה-צ'ה-צ'ה' בצעדי הצ'אסה", "להזיז רק את כפות הרגליים, בלי גוף"],
    },
  },
  pachanga: {
    en: {
      title: "Pachanga", step: "Bounce & Step",
      description: "The spring comes from the knees and body. Steps stay small while the rhythmic feeling becomes elastic and slightly diagonal.",
      beatActions: [
        "step left with knee spring down", "lift — straighten the knees",
        "step on right", "spring — accent down",
        "step left with knee spring down", "lift — straighten the knees",
        "step on right", "spring — accent down",
      ],
      mistakes: ["Don't march — it's a spring, not a stomp", "Don't lift the knees up high", "Diagonal direction, not only up and down"],
      drills: ["Move only the knees without stepping", "Feel the spring on every even beat", "Add steps only after a clean spring"],
    },
    he: {
      title: "פאצ'אנגה", step: "קפיץ וצעד",
      description: "הקפיץ מגיע מהברכיים והגוף. הצעדים נשארים קטנים בעוד תחושת הריתמוס הופכת גמישה ומעט אלכסונית.",
      beatActions: [
        "צעד שמאל עם קפיץ ברך למטה", "הרמה — יישור הברכיים",
        "צעד ברגל ימין", "קפיץ — אקצנט למטה",
        "צעד שמאל עם קפיץ ברך למטה", "הרמה — יישור הברכיים",
        "צעד ברגל ימין", "קפיץ — אקצנט למטה",
      ],
      mistakes: ["לא לצעוד בכבדות — זה קפיץ, לא רמיסה", "לא להרים את הברכיים למעלה", "כיוון אלכסוני, לא רק למעלה-למטה"],
      drills: ["להזיז רק את הברכיים בלי צעדים", "להרגיש את הקפיץ בכל פעימה זוגית", "להוסיף צעדים רק אחרי קפיץ נקי"],
    },
  },
  mambo: {
    en: {
      title: "Mambo on 2", step: "Break on 2",
      description: "Preparation on 1, break on 2, return on 3. The dance has a delayed feeling because the main accent arrives late.",
      beatActions: [
        "preparation — slight weight shift", "break forward on left — main accent",
        "return right to center", "pause",
        "preparation — slight weight shift", "break back on right — main accent",
        "return left to center", "pause",
      ],
      mistakes: ["Don't break on 1 — this is mambo, not salsa", "Don't rush: the delay on 1 is part of the style", "Feel how the music 'pulls' on 2"],
      drills: ["Listen to music and mark beat 2 with a clap", "Walk only on 2–3, skipping 1", "Compare the feeling of breaking on 1 vs 2"],
    },
    he: {
      title: "מאמבו על 2", step: "ברייק על 2",
      description: "הכנה על 1, ברייק על 2, חזרה על 3. לריקוד יש תחושת עיכוב כי האקצנט הראשי מגיע באיחור.",
      beatActions: [
        "הכנה — העברת משקל קלה", "ברייק קדימה ברגל שמאל — האקצנט הראשי",
        "חזרה ברגל ימין למרכז", "הפסקה",
        "הכנה — העברת משקל קלה", "ברייק אחורה ברגל ימין — האקצנט הראשי",
        "חזרה ברגל שמאל למרכז", "הפסקה",
      ],
      mistakes: ["לא לעשות ברייק על 1 — זה מאמבו, לא סלסה", "לא לזרז: העיכוב על 1 הוא חלק מהסגנון", "להרגיש איך המוסיקה 'מושכת' על 2"],
      drills: ["להאזין למוסיקה ולסמן את 2 במחיאת כף", "ללכת רק על 2–3, לדלג על 1", "להשוות את התחושה של ברייק על 1 מול 2"],
    },
  },
  salsa2: {
    en: {
      title: "Salsa on 2", step: "NY Style, break on 2",
      description: "Step on 1, break on 2. The key feeling — the pause after 1 'pulls' the movement to 2. The music leads, not you. Clarify nuances with your teacher.",
      beatActions: [
        "step left forward", "break — weight transfer back to right",
        "step left in place", "pause",
        "step right back", "break — weight transfer forward to left",
        "step right in place", "pause",
      ],
      mistakes: ["Don't confuse with salsa on 1 — the accent is different", "Don't rush: the delay on 1 is part of the style", "The music 'pulls' on 2, don't anticipate"],
      drills: ["Clap only on 2 and 6 while listening to music", "First master the preparation on 1 without the break", "Compare the feeling with salsa on 1 to the same song"],
    },
    he: {
      title: "סלסה על 2", step: "סגנון NY, ברייק על 2",
      description: "צעד על 1, ברייק על 2. התחושה המרכזית — ההפסקה אחרי 1 'מושכת' את התנועה ל-2. המוסיקה מובילה, לא אתה. לברר פרטים עם המורה.",
      beatActions: [
        "צעד שמאל קדימה", "ברייק — העברת משקל אחורה לרגל ימין",
        "צעד שמאל במקום", "הפסקה",
        "צעד ימין אחורה", "ברייק — העברת משקל קדימה לרגל שמאל",
        "צעד ימין במקום", "הפסקה",
      ],
      mistakes: ["לא לבלבל עם סלסה על 1 — האקצנט שונה", "לא לזרז: העיכוב על 1 הוא חלק מהסגנון", "המוסיקה 'מושכת' על 2, אל תקדים"],
      drills: ["למחוא כפיים רק על 2 ו-6 בזמן האזנה", "קודם לשלוט בהכנה על 1 בלי ברייק", "להשוות את התחושה עם סלסה על 1 לאותה שיר"],
    },
  },
  boogaloo: {
    en: {
      title: "Boogaloo", step: "Groove & Accent",
      description: "Boogaloo lives in the groove: steps can be simple, but the body, shoulders, and holds create the funky feel.",
      beatActions: [
        "body accent — shoulder forward", "syncopation — body pull-back",
        "step with hip roll", "accent — opposite shoulder",
        "syncopation", "step with roll",
        "groove accent", "step with release",
      ],
      mistakes: ["Don't tense the shoulders — groove comes from relaxation", "Don't repeat the same accent — alternate sides", "Listen to the bass, not just the rhythm"],
      drills: ["Standing still, move only the shoulders", "Add hips to the shoulders", "Add steps last"],
    },
    he: {
      title: "בוגאלו", step: "גרוב ואקצנט",
      description: "הבוגאלו חי בגרוב: הצעדים יכולים להיות פשוטים, אך הגוף, הכתפיים וההפסקות יוצרים את תחושת הפאנק.",
      beatActions: [
        "אקצנט גוף — כתף קדימה", "סינקופה — משיכת הגוף אחורה",
        "צעד עם גלגול ירכיים", "אקצנט — כתף הפוכה",
        "סינקופה", "צעד עם גלגול",
        "אקצנט גרוב", "צעד עם שחרור",
      ],
      mistakes: ["לא למתוח את הכתפיים — הגרוב מגיע מרפיון", "לא לחזור על אותו אקצנט — לסירוגין", "להאזין לבס, לא רק לריתמוס"],
      drills: ["בעמידה במקום, להזיז רק את הכתפיים", "להוסיף ירכיים לכתפיים", "להוסיף צעדים בסוף"],
    },
  },
};

function t(key) {
  return UI[currentLang]?.[key] ?? UI.ru[key] ?? key;
}

function getDanceLang(key) {
  const base = dances[key];
  if (currentLang === "ru") return base;
  const over = danceI18n[key]?.[currentLang];
  if (!over) return base;
  return {
    ...base,
    title:       over.title       ?? base.title,
    step:        over.step        ?? base.step,
    description: over.description ?? base.description,
    beats: base.beats.map((b, i) => ({ ...b, action: over.beatActions?.[i] ?? b.action })),
    mistakes: over.mistakes ?? base.mistakes,
    drills:   over.drills   ?? base.drills,
  };
}

function danceDisplayName(dance) {
  return t("dance." + dance) || danceLabel[dance] || dance;
}

const teacherI18n = {
  "Алекс Аткин": { en: "Alex Atkin",    he: "אלכס אטקין" },
  "Гиже и София": { en: "Gizhe & Sofia", he: "גיז'ה וסופיה" },
  "Паз, Матан":  { en: "Paz, Matan",    he: "פז, מתן" },
};

function teacherName(raw) {
  if (currentLang === "ru") return raw;
  return teacherI18n[raw]?.[currentLang] ?? raw;
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir  = currentLang === "he" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll("[data-lang]").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });
  const soundBtn = document.querySelector("#sound-toggle");
  if (soundBtn) soundBtn.textContent = soundEnabled ? t("sound.on") : t("sound.off");
  const mapBtn = document.getElementById("map-play-btn");
  if (mapBtn && !mapPlaying) mapBtn.textContent = t("map.play");
  const activeFilter = document.querySelector("[data-filter].active");
  setDance(activeDance);
  renderLibrary(activeFilter?.dataset.filter || null);
}

function videoSrc(path) {
  return path.replace(/ /g, "%20");
}

function makeCard(lesson) {
  const article = document.createElement("article");
  article.className = "video-card";

  let media;
  if (lesson.youtube) {
    media = document.createElement("iframe");
    media.src = `https://www.youtube.com/embed/${lesson.youtube}?rel=0`;
    media.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    media.setAttribute("frameborder", "0");
    media.allowFullscreen = true;
    media.className = `video-preview ${lesson.dance}`;
  } else if (lesson.video) {
    media = document.createElement("video");
    media.src = lesson.video.split("/").map(encodeURIComponent).join("/");
    media.controls = true;
    media.className = `video-preview ${lesson.dance}`;
  } else {
    media = document.createElement("div");
    media.className = `video-preview ${lesson.dance} card-no-video`;
    media.textContent = "—";
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const tag = document.createElement("span");
  tag.className = "card-tag";
  tag.textContent = danceDisplayName(lesson.dance);

  const h3 = document.createElement("h3");
  h3.textContent = currentLang === "he" ? (lesson.titleHe || lesson.title)
                 : currentLang === "en" ? (lesson.titleEn || lesson.title)
                 : lesson.title;

  const teacher = document.createElement("p");
  teacher.className = "card-teacher";
  teacher.textContent = t("card.teacher") + " " + teacherName(lesson.teacher);

  body.append(tag, h3, teacher);
  article.append(media, body);
  return article;
}

function renderLibrary(filterDance) {
  const grid = document.querySelector(".video-grid");
  if (!grid) return;

  const visible = filterDance
    ? lessons.filter(l => l.dance === filterDance)
    : lessons;

  grid.innerHTML = "";
  visible.forEach(lesson => grid.append(makeCard(lesson)));
}

const videoIds = {};

function extractYtId(raw) {
  raw = raw.trim();
  const m = raw.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(raw)) return raw;
  return null;
}

function updateYouTube(key) {
  const placeholder = document.querySelector("#yt-placeholder");
  const iframe      = document.querySelector("#yt-player");
  const urlInput    = document.querySelector("#yt-url");
  if (!placeholder || !iframe) return;

  const id = videoIds[key] || null;
  if (id) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    placeholder.style.display = "none";
    iframe.style.display      = "block";
  } else {
    iframe.src                = "";
    iframe.style.display      = "none";
    placeholder.style.display = "flex";
  }
  if (urlInput) urlInput.value = id ? `https://youtu.be/${id}` : "";
}

const titleEl      = document.querySelector("#dance-title");
const stepName     = document.querySelector("#step-name");
const stepDesc     = document.querySelector("#step-description");
const beatAction   = document.querySelector("#beat-action");
const noteMistakes = document.querySelector("#note-mistakes");
const noteDrills   = document.querySelector("#note-drills");
const countGrid    = document.querySelector("#count-grid");
const timeline     = document.querySelector("#timeline");
const leftFoot     = document.querySelector("#left-foot");
const rightFoot    = document.querySelector("#right-foot");
const tempoSlider  = document.querySelector("#tempo-slider");
const tempoLabel   = document.querySelector("#tempo-label");
const claveBeats   = document.querySelector(".clave");
const danceButtons = document.querySelectorAll("[data-dance]");

let activeDance  = "salsa";
let activeIndex  = 0;
let isPaused     = false;
let bpm          = 71;
let intervalId   = null;
let resumeTimer  = null;
let soundEnabled = false;
let audioCtx     = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playBeat(type) {
  if (!soundEnabled || type === "pause") return;
  const ctx = getAudioCtx();

  const duration = 0.07;
  const buf  = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 8);
  }

  const source = ctx.createBufferSource();
  source.buffer = buf;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";

  const gain = ctx.createGain();

  if (type === "accent") {
    filter.frequency.value = 1400;
    filter.Q.value = 0.9;
    gain.gain.value = 1.0;
  } else if (type === "sync") {
    filter.frequency.value = 950;
    filter.Q.value = 0.6;
    gain.gain.value = 0.55;
  } else {
    filter.frequency.value = 650;
    filter.Q.value = 0.5;
    gain.gain.value = 0.38;
  }

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
}

const clavePatterns = {
  "2-3": [1, 3, 5, 7, 8],
  "3-2": [1, 2, 4, 6, 8],
};
let activeClave = "2-3";

function paintCounts(dance) {
  countGrid.innerHTML = "";
  timeline.innerHTML  = "";

  dance.beats.forEach((beat, index) => {
    const isActive = index === activeIndex;

    const cell = document.createElement("div");
    cell.className = `count ${beat.type}${isActive ? " active" : ""}`;
    cell.textContent = beat.count;
    cell.setAttribute("role", "button");
    cell.setAttribute("tabindex", "0");
    cell.addEventListener("click", () => selectBeat(index));
    cell.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectBeat(index); }
    });
    countGrid.append(cell);

    const beatEl = document.createElement("div");
    beatEl.className = `beat ${beat.type}${isActive ? " active" : ""}`;
    beatEl.textContent = beat.count;
    timeline.append(beatEl);
  });

  const current = dance.beats[activeIndex];
  if (beatAction) beatAction.textContent = current.action || "";
  leftFoot.classList.toggle("active-foot",  current.foot === "L");
  rightFoot.classList.toggle("active-foot", current.foot === "R");
}

function selectBeat(index) {
  activeIndex = index;
  isPaused    = true;
  const dance = getDanceLang(activeDance);
  const beat  = dance.beats[index];
  playBeat(beat.type);
  paintCounts(dance);
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(() => { isPaused = false; }, 3000);
}

function moveFoot(el, pos) {
  el.style.left   = pos.left;
  el.style.top    = pos.top;
  el.style.rotate = pos.rotate;
}

function updateNotes(dance) {
  if (noteMistakes) noteMistakes.innerHTML = dance.mistakes.map(m => `<li>${m}</li>`).join("");
  if (noteDrills)   noteDrills.innerHTML   = dance.drills.map(d => `<li>${d}</li>`).join("");
}

function setDance(key) {
  activeDance = key;
  activeIndex = 0;
  isPaused    = false;
  const dance = getDanceLang(key);
  titleEl.textContent  = dance.title;
  stepName.textContent = dance.step;
  stepDesc.textContent = dance.description;
  moveFoot(leftFoot,  dance.left);
  moveFoot(rightFoot, dance.right);
  paintCounts(dance);
  updateNotes(dance);
  updateYouTube(key);
  danceButtons.forEach(b => b.classList.toggle("active", b.dataset.dance === key));
}

function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (isPaused) return;
    const dance = getDanceLang(activeDance);
    activeIndex = (activeIndex + 1) % dance.beats.length;
    playBeat(dance.beats[activeIndex].type);
    paintCounts(dance);
  }, Math.round(60000 / bpm));
}

function setEcgTempo(bpm) {
  document.documentElement.style.setProperty('--beat-dur', `${(60 / bpm).toFixed(3)}s`);
}

if (tempoSlider) {
  tempoSlider.addEventListener("input", () => {
    bpm = Number(tempoSlider.value);
    if (tempoLabel) tempoLabel.textContent = bpm + " BPM";
    startInterval();
    setEcgTempo(bpm);
    if (mapPlaying) { clearInterval(mapInterval); mapInterval = setInterval(tickMap, Math.round(60000 / bpm)); }
  });
}

const soundToggle = document.querySelector("#sound-toggle");
if (soundToggle) {
  soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggle.classList.toggle("active", soundEnabled);
    soundToggle.textContent = soundEnabled ? t("sound.on") : t("sound.off");
  });
}

document.querySelectorAll("[data-clave]").forEach(btn => {
  btn.addEventListener("click", () => {
    activeClave = btn.dataset.clave;
    document.querySelectorAll("[data-clave]").forEach(b =>
      b.classList.toggle("active", b.dataset.clave === activeClave)
    );
    updateClave();
  });
});

const mapPatterns = {
  conga:    [2, 4, 6, 8],
  pachanga: [1, 2, 3, 5, 6, 7],
  body:     [1, 3, 5, 7],
  maracas:  [1, 2, 3, 4, 5, 6, 7, 8],
};

const mapSelectors = {
  conga:    ".beats.conga",
  pachanga: ".beats.pachanga-line",
  body:     ".beats.body-line",
  maracas:  ".beats.maraca-line",
};

function updateClave() {
  if (!claveBeats) return;
  const cols = clavePatterns[activeClave];
  claveBeats.querySelectorAll("b").forEach((dot, i) => {
    dot.style.gridColumn = cols[i];
  });
  Object.entries(mapPatterns).forEach(([name, positions]) => {
    const el = document.querySelector(mapSelectors[name]);
    if (!el) return;
    el.querySelectorAll("b").forEach((dot, i) => {
      if (positions[i]) dot.style.gridColumn = positions[i];
    });
  });
}

function playMapSound(instrument) {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;

  if (instrument === "maracas") {
    const len = Math.floor(ctx.sampleRate * 0.09);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "highpass"; f.frequency.value = 6500;
    const g = ctx.createGain(); g.gain.value = 0.45;
    src.connect(f); f.connect(g); g.connect(ctx.destination); src.start();

  } else if (instrument === "clave") {
    const len = Math.floor(ctx.sampleRate * 0.07);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 12);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 2300; f.Q.value = 10;
    const g = ctx.createGain(); g.gain.value = 1.0;
    src.connect(f); f.connect(g); g.connect(ctx.destination); src.start();

  } else if (instrument === "conga") {
    const osc = ctx.createOscillator();
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.65, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.18);

  } else if (instrument === "pachanga") {
    const len = Math.floor(ctx.sampleRate * 0.08);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 7);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 950; f.Q.value = 3;
    const g = ctx.createGain(); g.gain.value = 0.5;
    src.connect(f); f.connect(g); g.connect(ctx.destination); src.start();

  } else if (instrument === "body") {
    const osc = ctx.createOscillator();
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.14);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.5, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.18);
  }
}

let mapBeat     = 0;
let mapInterval = null;
let mapPlaying  = false;

function tickMap() {
  document.documentElement.style.setProperty("--map-beat", mapBeat);
  const col = mapBeat + 1;
  if (clavePatterns[activeClave].includes(col)) playMapSound("clave");
  Object.entries(mapPatterns).forEach(([name, cols]) => {
    if (cols.includes(col)) playMapSound(name);
  });
  mapBeat = (mapBeat + 1) % 8;
}

function startMapPlay() {
  mapPlaying = true;
  mapBeat = 0;
  const playhead = document.getElementById("map-playhead");
  const btn = document.getElementById("map-play-btn");
  if (playhead) playhead.classList.add("active");
  if (btn) { btn.textContent = t("map.stop"); btn.classList.add("playing"); }
  mapInterval = setInterval(tickMap, Math.round(60000 / bpm));
}

function stopMapPlay() {
  mapPlaying = false;
  clearInterval(mapInterval);
  const playhead = document.getElementById("map-playhead");
  const btn = document.getElementById("map-play-btn");
  if (playhead) playhead.classList.remove("active");
  if (btn) { btn.textContent = t("map.play"); btn.classList.remove("playing"); }
}

danceButtons.forEach(b => b.addEventListener("click", () => setDance(b.dataset.dance)));

const mapPlayBtn = document.getElementById("map-play-btn");
if (mapPlayBtn) {
  mapPlayBtn.addEventListener("click", () => {
    mapPlaying ? stopMapPlay() : startMapPlay();
  });
}

const ytUrlInput = document.querySelector("#yt-url");
const ytClear    = document.querySelector("#yt-clear");

if (ytUrlInput) {
  ytUrlInput.addEventListener("input", () => {
    const id = extractYtId(ytUrlInput.value);
    if (id) {
      videoIds[activeDance] = id;
      updateYouTube(activeDance);
    }
  });
}

if (ytClear) {
  ytClear.addEventListener("click", () => {
    delete videoIds[activeDance];
    updateYouTube(activeDance);
  });
}

startInterval();
setDance(activeDance);
updateClave();
setEcgTempo(bpm);

document.querySelectorAll(".nav-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".nav-tab").forEach(b =>
      b.classList.toggle("active", b.dataset.tab === tab)
    );
    document.querySelectorAll(".tab-pane").forEach(p =>
      p.classList.toggle("active", p.id === `tab-${tab}`)
    );
  });
});

renderLibrary();

document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderLibrary(btn.dataset.filter || null);
  });
});

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    applyLang();
  });
});
