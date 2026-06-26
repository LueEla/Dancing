# Salsa Hub: project brief for Claude Code

## Role

You are helping build Salsa Hub, a personal dance-learning web project in Russian. Treat it as a growing educational dance notebook, not as a generic landing page.

The user wants a beautiful, practical, animated learning hub for summaries from dance lessons: salsa, cha-cha-cha, pachanga, mambo, boogaloo, and related Latin social dance theory.

The project should eventually combine:

- final recap videos from lessons;
- step diagrams;
- rhythm/count explanations;
- music-layer maps;
- animated body/footwork schemes;
- short theory notes that are easy to review before practice.

## Current Project Shape

The current project is a static web prototype with three files:

- `index.html` - page structure and educational sections;
- `styles.css` - visual system, layout, responsive styling, footwork stage;
- `app.js` - dance mode data, count highlighting, foot-position animation.

There is no framework yet. Keep it static unless the user explicitly asks to convert it to React/Vue/Svelte/etc.

The current main UI has:

- dance mode switcher: salsa, cha-cha-cha, pachanga, mambo, boogaloo;
- animated schematic feet;
- count grid with active beat;
- rhythm timeline;
- lesson video cards;
- music-layer map for clave, conga, pachanga, body.

## Product Vision

Salsa Hub should feel like an interactive dance theory desk:

- clear enough for a beginner to understand count and steps;
- deep enough for the user to store years of lesson notes;
- visual and kinetic, because dance is physical;
- calm and usable, not a marketing splash page.

The first screen should always be useful. Avoid turning the project into a landing page with a big empty hero. The user should immediately see learning controls, rhythm, steps, or lesson material.

## Language and Tone

The user-facing interface should be in Russian.

Tone:

- warm;
- precise;
- practical;
- dance-studio friendly;
- not corporate;
- not overly childish.

Use terms like:

- счет;
- акцент;
- пауза;
- перенос веса;
- базовый шаг;
- брейк;
- синкопа;
- клаве;
- корпус;
- стопа;
- грув;
- пружина;
- итоговое видео;
- конспект урока.

Avoid vague marketing phrases like:

- "unlock your potential";
- "ultimate platform";
- "revolutionary dance experience";
- "learn like never before".

## Design Direction

The design should feel like a polished learning tool, not a generic SaaS dashboard.

Keep:

- compact but breathable layouts;
- visible rhythm grids;
- schematic movement diagrams;
- clear tabs, segmented controls, toggles, sliders, and icon buttons where useful;
- cards only for repeated items such as lesson videos or small notes;
- page sections as full-width bands or unframed layouts;
- border radius around 8px unless there is a clear reason otherwise.

Avoid:

- decorative gradient orbs;
- one-note purple/blue/slate palettes;
- huge marketing hero blocks;
- text-heavy explanation panels that describe how to use obvious UI;
- nested cards inside cards;
- overly soft rounded rectangles everywhere;
- random stock imagery that does not show dance, rhythm, movement, or music.

Good visual motifs:

- dance floor grid;
- beat markers;
- footstep paths;
- timeline bars;
- music staff/rhythm map hints;
- warm paper-like background with crisp contrast;
- colors that distinguish concepts: accent, pause, step, syncopation, clave.

## Interaction Principles

The site should teach by showing.

Prefer interactive/animated explanations over long paragraphs:

- click a dance style and see the count, feet, and theory change;
- click a beat and see which foot or body action belongs there;
- toggle "on 1" / "on 2";
- show 2-3 clave vs 3-2 clave;
- show where cha-cha-cha inserts extra steps;
- show pachanga bounce separately from foot placement;
- show mambo break timing;
- show boogaloo as groove/body accent rather than only footwork.

Animations should be meaningful:

- foot movement;
- beat pulse;
- weight transfer;
- body bounce;
- clave hits;
- count progression.

Avoid animations that are only decorative.

## Dance Content Model

When expanding `app.js`, prefer structured dance data. A dance entry can include:

- `title`;
- `shortName`;
- `description`;
- `counts`;
- `classes` for each beat: `step`, `pause`, `accent`, `sync`;
- foot positions;
- rhythm notes;
- common mistakes;
- practice drills;
- linked lesson videos;
- music examples;
- related styles.

Possible future structure:

```js
{
  id: "salsa-on-1",
  family: "salsa",
  title: "Salsa on 1",
  counts: ["1", "2", "3", "4", "5", "6", "7", "8"],
  beats: [
    { count: "1", action: "шаг вперед левой", foot: "L", type: "accent" },
    { count: "2", action: "перенос веса", foot: "R", type: "step" },
    { count: "3", action: "возврат в центр", foot: "L", type: "step" },
    { count: "4", action: "пауза", foot: null, type: "pause" }
  ],
  notes: ["Не прыгать на паузе", "Вес должен быть полностью перенесен"]
}
```

## Core Sections to Build Next

### 1. Lesson Library

Create a real lesson archive where each lesson can have:

- date;
- dance style;
- teacher/location;
- video URL or local video placeholder;
- moves covered;
- counts;
- key corrections;
- personal notes;
- tags.

The user likely wants to paste links to lesson recap videos later. Make that easy.

### 2. Step Atlas

A browsable catalog of movements:

- basic step;
- side basic;
- cross body lead;
- right turn;
- left turn;
- open break;
- shines;
- pachanga basic;
- cha-cha chasse;
- mambo break on 2;
- boogaloo groove patterns.

Each movement should show:

- count;
- left/right foot;
- direction;
- weight transfer;
- body action;
- common mistakes.

### 3. Rhythm Lab

A section for understanding dance counts and music layers.

Must eventually explain:

- salsa count 1-2-3, 5-6-7;
- why 4 and 8 are pauses or holds;
- salsa on 1 vs mambo/on 2;
- cha-cha-cha count and syncopation;
- pachanga rhythm and bounce;
- clave 2-3 and 3-2;
- where conga/tumbao supports the dance;
- how to hear accents in salsa music;
- how boogaloo relates to groove/funk feel.

Prefer visual grids over long text.

### 4. Music Map

Create a schematic music map that shows layers over 8 counts:

- clave;
- conga;
- cowbell/campana;
- bass;
- piano montuno;
- vocals;
- dancer body rhythm.

The user specifically wants to understand where in salsa music the pachanga rhythm, clave rhythm, salsa rhythm, etc. live.

### 5. Practice Mode

A future mode could let the user:

- choose dance;
- choose tempo;
- start/stop count;
- hear or see metronome pulses;
- loop 8 counts;
- switch between "feet", "body", "music", and "all".

If adding sound later, ask the user first about assets and browser behavior.

## Technical Guidelines

For now:

- keep the project dependency-free;
- use semantic HTML;
- keep CSS responsive;
- keep JS data-driven;
- do not introduce a build system unless there is a real need;
- do not add external network dependencies without asking.

If the project grows:

- consider splitting data into `data/dances.js`, `data/lessons.js`, `data/rhythms.js`;
- consider adding `assets/` for images/video thumbnails;
- consider converting to a small Vite app only when static files become limiting.

## File Editing Rules

When modifying the current prototype:

- preserve Russian UI text unless the user asks otherwise;
- keep layout responsive for mobile and desktop;
- avoid replacing the whole design unless requested;
- make small, meaningful improvements;
- test that `index.html` still loads without a server;
- run a JS syntax check when editing `app.js`.

Useful command:

```bash
node --check app.js
```

## Accessibility and Usability

Keep:

- buttons as real `<button>` elements;
- links as real `<a>` elements;
- readable contrast;
- non-overlapping text;
- keyboard-friendly controls;
- meaningful section labels;
- no tiny click targets.

For animations:

- avoid excessive flashing;
- keep motion smooth and readable;
- consider `prefers-reduced-motion` if animations become more intense.

## Content Accuracy

Dance theory can be nuanced. When adding factual explanations:

- do not overstate one tradition as the only truth;
- distinguish "common teaching simplification" from "musicological precision";
- use careful wording for clave, mambo, salsa on 1/on 2, cha-cha-cha timing, and pachanga;
- if uncertain, add a note like "уточнить с преподавателем" rather than inventing.

The user may later provide their own teacher's explanations. Prefer those over generic internet summaries.

## Immediate Good Next Tasks

Good next steps for Claude Code:

1. Turn video cards into a real editable lesson list.
2. Add a "notes per dance" panel with common mistakes and drills.
3. Add a clave toggle: 2-3 / 3-2.
4. Make beat cells clickable so selecting a count updates the foot diagram and action text.
5. Add a tempo slider for count animation.
6. Add a data file for dances and move the hardcoded dance data out of `app.js`.
7. Create a printable lesson summary view.
8. Add local placeholders for videos with fields for future URLs.

## User Intent Summary

The user said they want:

> "сайт или приложение или веб-страница с резюме с уроков по ча-ча-ча и пачанге (и сальсе тоже)... набор итоговых видео с уроков по танцам... интересный обучающий сайт с анимацией для обозначения базовых движений танца, схематичное объяснение шагов и ритма сальсы, чачи, пачанги и мамбо. И бугалу тоже. И схематичное объяснение где в музыке сальсы ритм пачанги, ритм клаве, ритм сальсы и тд. Это сайт с теоретической базой танца, с объяснением счёта."

Keep that intent central.

