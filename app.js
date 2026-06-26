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
  { dance: "chacha", title: "Ча-ча-ча — урок 1",          teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/IMG_3898 1урок.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 2, шаги",       teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/IMG_3928 2урок.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 2, под музыку", teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/IMG_3929 2урок.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 3, шаги",       teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/IMG_3950 3урок.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 3, под музыку", teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/IMG_3953 3урок.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 4, шаги",       teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/Урок4.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 4, под музыку", teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/Урок4, под музыку.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 5, шаги",       teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/Урок5.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 5, под музыку", teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/Урок5, под музыку.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 6, шаги",      teacher: "Алекс Аткин",        video: "videos/Cha-cha-cha/Урок6 Шаги.mp4" },
  { dance: "chacha", title: "Ча-ча-ча — урок 6, под музыку", teacher: "Алекс Аткин",       video: "videos/Cha-cha-cha/Урок6.mp4" },
  { dance: "salsa",  title: "Сальса NY — видео 1",          teacher: "Гиже и София", video: "videos/SalsaNY/IMG_3656.mp4" },
  { dance: "salsa",  title: "Сальса NY — видео 2",          teacher: "Гиже и София", video: "videos/SalsaNY/IMG_3664.mp4" },
  { dance: "salsa",  title: "Сальса NY — видео 3",          teacher: "Гиже и София", video: "videos/SalsaNY/IMG_3666.mp4" },
  { dance: "salsa",  title: "Сальса NY — урок 1",           teacher: "Паз, Матан",   video: "videos/SalsaNY/Paz-Matan/IMG_3879.mp4" },
  { dance: "salsa",  title: "Сальса NY — урок 2",           teacher: "Паз, Матан",   video: "videos/SalsaNY/Paz-Matan/IMG_3880.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 2, шаги",           teacher: "Алекс Аткин", video: "videos/Pachanga/2урок, шаги.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 2, под музыку",     teacher: "Алекс Аткин", video: "videos/Pachanga/2урок, под музыку.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 4, шаги",           teacher: "Алекс Аткин", video: "videos/Pachanga/4урок, шаги.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 4, под музыку",     teacher: "Алекс Аткин", video: "videos/Pachanga/4урок, под музыку.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 4, под музыку (группа)", teacher: "Алекс Аткин", video: "videos/Pachanga/4урок, под музыку, группа1.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 5, шаги",           teacher: "Алекс Аткин", video: "videos/Pachanga/5урок, шаги.mp4" },
  { dance: "pachanga", title: "Пачанга — урок 6, шаги",           teacher: "Алекс Аткин", video: "videos/Pachanga/6урок, шаги.mp4" },
];

const danceLabel = {
  salsa:    "Сальса",
  salsa2:   "Сальса 2",
  chacha:   "Ча-ча-ча",
  pachanga: "Пачанга",
  mambo:    "Мамбо",
  boogaloo: "Бугалу",
};

function videoSrc(path) {
  return path.replace(/ /g, "%20");
}

function makeCard(lesson) {
  const article = document.createElement("article");
  article.className = "video-card";

  const video = document.createElement("video");
  video.src = videoSrc(lesson.video);
  video.controls = true;
  video.preload = "metadata";
  video.className = `video-preview ${lesson.dance}`;

  const body = document.createElement("div");
  body.className = "card-body";

  const tag = document.createElement("span");
  tag.className = "card-tag";
  tag.textContent = danceLabel[lesson.dance] || lesson.dance;

  const h3 = document.createElement("h3");
  h3.textContent = lesson.title;

  const teacher = document.createElement("p");
  teacher.className = "card-teacher";
  teacher.textContent = "Преподаватель: " + lesson.teacher;

  body.append(tag, h3, teacher);
  article.append(video, body);
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
let soundEnabled = true;
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
  const beat  = dances[activeDance].beats[index];
  playBeat(beat.type);
  paintCounts(dances[activeDance]);
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
  const dance = dances[key];
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
    const dance = dances[activeDance];
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
  });
}

const soundToggle = document.querySelector("#sound-toggle");
if (soundToggle) {
  soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggle.classList.toggle("active", soundEnabled);
    soundToggle.textContent = soundEnabled ? "звук вкл" : "звук выкл";
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

function updateClave() {
  if (!claveBeats) return;
  const cols = clavePatterns[activeClave];
  claveBeats.querySelectorAll("b").forEach((dot, i) => {
    dot.style.gridColumn = cols[i];
  });
}

danceButtons.forEach(b => b.addEventListener("click", () => setDance(b.dataset.dance)));

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
