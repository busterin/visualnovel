"use strict";

// Desactivar al terminar la revisión para recuperar el inicio habitual.
const ENABLE_CHAPTER_SELECTOR = true;
// Accesos de revisión a tramos que no son rutas independientes del capítulo.
const REVIEW_STARTS = [
  { chapter: 10.5, label: "Romance · Lyra (vínculo 8)", scene: "lyra_romance", preset: "lyra_romance", interlude: true },
  { chapter: 15, label: "El noveno segundo", scene: "c15_noveno_segundo", preset: "ninth_second" },
  { chapter: 7.5, label: "Extra · Pasar el día en la posada", scene: "extra_posada", preset: "inn_day", interlude: true },
  { chapter: 14, label: "La hija ausente", scene: "c14_maleria", preset: "maleria" },
  { chapter: 13, label: "La noche de las luces apagadas", scene: "c13_apagones", preset: "blackouts" },
  { chapter: 12, label: "El lugar que queda · Homenaje a Seren (Jairen vive)", scene: "c12_homenaje", preset: "memorial_jairen" },
  { chapter: 12, label: "El lugar que queda · Homenaje a Jairen (Seren vive)", scene: "c12_homenaje", preset: "memorial_seren" },
  { chapter: 11, label: "Los nombres que faltaban", scene: "c11_eiden", preset: "eiden_visit" },
  { chapter: 6, label: "Un lugar donde descansar", scene: "c3_inspeccion", node: "descanso_decision_01", preset: "rest" },
  { chapter: 7, label: "La mañana · La ropa de Ada", scene: "c3_ropa_ada", preset: "clothes" },
  { chapter: 7, label: "La revelación · Cincuenta días", scene: "c3_diosa", preset: "revelation" },
  { chapter: 7, label: "Cuenta atrás · Los días que quedan", scene: "c4_actividades", preset: "countdown" },
  { chapter: 8, label: "Visita a palacio", scene: "c8_palacio", preset: "palace" },
  { chapter: 9, label: "Paseo por el mercado", scene: "c9_mercado", preset: "market" },
  { chapter: 10, label: "Volver a conocerte", scene: "c10_lyra", preset: "lyra_training" },
  { chapter: 9.5, label: "Interludio · El aviso de Willard (tras el día 9)", scene: "interludio_willard", preset: "willard", interlude: true },
];
let startingNode = null;

function prepareReviewStart(state, preset) {
  const lyraRomance = preset === "lyra_romance";
  const ninthSecond = preset === "ninth_second";
  const innDay = preset === "inn_day";
  const maleria = preset === "maleria";
  const blackouts = preset === "blackouts";
  const memorial = preset === "memorial_jairen" ? "jairen" : preset === "memorial_seren" ? "seren" : null;
  const eidenVisit = preset === "eiden_visit";
  const palace = preset === "palace";
  const market = preset === "market";
  const willard = preset === "willard";
  const lyraTraining = preset === "lyra_training";
  if (palace || market || willard || lyraTraining || eidenVisit || memorial || blackouts || maleria || innDay || ninthSecond || lyraRomance) preset = "countdown";
  // Solo se aplica a una partida nueva abierta desde estos accesos temporales.
  Object.assign(state, {
    completedScenes: ["c3_archivo", "c3_posada", "c3_inspeccion"],
    archivo_completado: true, posada_completada: true, ruta_inspeccion_completada: true,
    acceso_mantenimiento_autorizado: false, ada_lagunas_iven: true,
    documentos_aberraciones_iven_revisados: true, iven_entrega_inspeccion: true,
    iven_informes_aberraciones: true, inspeccion_corte_segundos: 9,
    metCompanions: ["lyra", "ada", "alma"], affinity: { lyra: 1, ada: 1, alma: 1 },
    mantenimiento_con_lyra: preset === "maintenance",
  });
  if (["clothes", "revelation", "countdown"].includes(preset)) {
    Object.assign(state, { inspeccion_descanso: true, descanso_completado: true, desperto_solo: true });
  }
  if (["revelation", "countdown"].includes(preset)) {
    Object.assign(state, { protagonistOutfit: "vaelthar", ropa_ada_recibida: true, ropa_original_guardada: true });
  }
  if (preset === "countdown") {
    state.revelacion_diosa_completada = true;
    StoryCalendar.activate(state);
    if (lyraRomance) {
      state.affinity.lyra = 8;
      state.lyra_romance_inicio_dia = 0;
      state.lyra_romance_disponible = true;
      StoryCalendar.begin(state, { activity: { id: "lyra_romance" }, dayCost: 1 });
    }
    if (ninthSecond) {
      Object.assign(state, { c14_completado: true, acceso_orbis: true, aviso_willard_completado: true,
        veyra_conocida: true, maleria_conocida: true, c14_veyra_princesa_orbis: true,
        c14_veyra_hija_maleria: true, c14_maleria_recuerda_hija: true });
      state.completedScenes.push("interludio_willard", "c9_mercado", "c14_maleria");
      state.calendar.elapsed = 10; state.calendar.remaining = 40;
      StoryCalendar.begin(state, { activity: { id: "noveno_segundo" }, dayCost: 1 });
    }
    if (innDay) StoryCalendar.begin(state, { activity: { id: "descanso_posada" }, dayCost: 1 });
    if (maleria) {
      state.acceso_orbis = true; state.veyra_conocida = true; state.veyra_bloqueada = false;
      state.aviso_willard_completado = true;
      state.completedScenes.push("interludio_willard", "c9_mercado");
      state.calendar.elapsed = 9; state.calendar.remaining = 41;
      StoryCalendar.begin(state, { activity: { id: "orbis_maleria" }, dayCost: 1 });
    }
    if (willard) {
      state.calendar.elapsed = 9;
      state.calendar.remaining = 41;
    }
    if (blackouts) {
      state.seren_conocida = true; state.jairen_conocido = true; state.willard_conocido = true;
      StoryCalendar.begin(state, { activity: { id: "apagones" }, dayCost: 1 });
    }
    if (memorial) {
      state.seren_conocida = true; state.jairen_conocido = true;
      state.palacio_completado = true;
      state.palacio_superviviente = memorial;
      state.palacio_fallecido = memorial === "jairen" ? "seren" : "jairen";
      state.completedScenes.push("c8_palacio");
      state.calendar.completed.push("palacio");
      state.calendar.elapsed = 2; state.calendar.remaining = 48;
      StoryCalendar.begin(state, { activity: { id: "homenaje" }, dayCost: 1 });
    }
    if (eidenVisit) {
      state.archivo_eiden_conocido = true;
      state.metCompanions.push("eiden"); state.affinity.eiden = 1;
      StoryCalendar.begin(state, { destination: "c11_eiden", activity: { id: "eiden" }, dayCost: 1 });
    }
    if (palace) StoryCalendar.begin(state, { destination: "c8_palacio", activity: { id: "palacio" }, dayCost: 1 });
    if (market) StoryCalendar.begin(state, { destination: "c9_mercado", activity: { id: "capital" }, dayCost: 1 });
    if (lyraTraining) StoryCalendar.begin(state, { destination: "c10_lyra", activity: { id: "lyra" }, dayCost: 1 });
  }
}
const menuOptions = [
  { label: "Nuevo juego", action: openChapterSelector },
  { label: "Cargar", action: showLoadNotice },
  { label: "Opciones", action: () => {} },
];

const coverScreen = document.getElementById("cover-screen");
const gameScreen = document.getElementById("game-screen");
const menuButton = document.getElementById("menu-option");
const optionLabel = document.getElementById("option-label");
const announcement = document.getElementById("menu-announcement");
const introScreen = document.getElementById("intro-screen");
const introVideo = document.getElementById("intro-video");
const nameScreen = document.getElementById("name-screen");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("traveler-name");
const nameError = document.getElementById("name-error");
const chapterScreen = document.getElementById("chapter-screen");
const chapterOptions = document.getElementById("chapter-options");
const cancelChapter = document.getElementById("cancel-chapter");
let startingScene = "lyra-has-vuelto";
const videoFallback = document.getElementById("video-fallback");
const enableVideoSound = document.getElementById("enable-video-sound");
const introFlash = document.getElementById("intro-flash");
const introSceneFade = document.getElementById("intro-scene-fade");
// Corte bosque → Lyra de videointro.mp4, alrededor de 17,1 segundos.
const introSceneTransition = { start: 16.65, whiteFrom: 17, whiteUntil: 17.25, end: 17.95 };
let introSceneFadeFrame = null;
let introTransitionRunning = false;
const novel = document.querySelector(".novel");
// El teclado puede reducir el área visible, pero no debe estrechar el formulario.
function updateNameViewport() {
  const viewport = window.visualViewport;
  const frame = novel.getBoundingClientRect();
  const top = Math.max(0, (viewport?.offsetTop || 0) - frame.top);
  const height = Math.max(0, Math.min(frame.height - top, viewport?.height || window.innerHeight));
  novel.style.setProperty("--name-viewport-top", `${top}px`);
  novel.style.setProperty("--name-viewport-height", `${height}px`);
}
window.addEventListener("resize", updateNameViewport);
window.visualViewport?.addEventListener("resize", updateNameViewport);
window.visualViewport?.addEventListener("scroll", updateNameViewport);
const dialoguePanel = document.getElementById("dialogue-panel");
const dialogueText = document.getElementById("dialogue-text");
const speaker = document.getElementById("speaker");
const choicesPanel = document.getElementById("choices-panel");
const sceneEnding = document.getElementById("scene-ending");
const sceneImages = [document.getElementById("scene-image-a"), document.getElementById("scene-image-b")];
const wallName = document.getElementById("wall-name");
const storyDocument = document.getElementById("story-document");
const storyEvent = document.getElementById("story-event");
const storyVideoPanel = document.getElementById("story-video-panel");
const storyVideo = document.getElementById("story-video");
const storyVideoPlay = document.getElementById("story-video-play");
const storyVideoSkip = document.getElementById("story-video-skip");
let cancelStoryVideo = null;
storyVideoPanel.addEventListener("click", event => event.stopPropagation());
storyVideoPanel.addEventListener("keydown", event => {
  event.stopPropagation();
  if (event.key === "Escape") { event.preventDefault(); storyVideoSkip.click(); }
  else if (!activateFocusedButton(event)) focusWithArrow(event, [storyVideoPlay, storyVideoSkip]);
});
const eventImage = document.getElementById("event-image");
const pauseToCover = document.getElementById("pause-to-cover");
const innNetworkButton = document.getElementById("inn-network-button");
innNetworkButton.addEventListener("click", event => {
  event.stopPropagation();
  if (isGamePaused || eventRunning || dayTransitionRunning || !gameState.red_posada_desbloqueada ||
      gameState.scene !== "c4_actividades" || gameState.calendar.expired) return;
  gameState.red_posada_retorno = gameState.node;
  gameState.red_posada_presentada = true;
  gameState.node = "red_posada";
  renderScene();
});
const saveStatus = document.getElementById("save-status");
const SAVE_KEY = "el-mundo-que-te-recuerda.save.v2";
let eventRunning = false;
let eventRequest = 0;
let renderedChapter = null;
let renderedDay = null;
let dayTransitionRunning = false;
let dayTransitionRequest = 0;
const dayTransition = document.getElementById("day-transition");
const imageCache = new Map();
const missingResources = new Set();
let imageRequest = 0;
let visibleImage = 0;
let sceneImageFade = Promise.resolve();
let requestedImage = null;
let audioContext = null;
let selectedOption = 0;
let gameState = null;

function changeOption(direction) {
  selectedOption = (selectedOption + direction + menuOptions.length) % menuOptions.length;
  const option = menuOptions[selectedOption];
  optionLabel.textContent = option.label;
  menuButton.setAttribute("aria-label", option.label);
  announcement.textContent = option.label;
}

function focusWithArrow(event, targets) {
  if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return false;
  targets = targets.filter(element => !element.disabled && element.getClientRects().length);
  if (!targets.length) return false;
  event.preventDefault();
  const direction = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
  const current = targets.indexOf(document.activeElement);
  const next = current < 0 ? (direction > 0 ? 0 : targets.length - 1)
    : (current + direction + targets.length) % targets.length;
  targets[next].focus({ preventScroll: true });
  targets[next].scrollIntoView({ block: "nearest", inline: "nearest" });
  return true;
}

function activateFocusedButton(event) {
  if (event.key !== "Enter" || document.activeElement?.tagName !== "BUTTON") return false;
  event.preventDefault();
  if (!event.repeat) document.activeElement.click();
  return true;
}

function openChapterSelector() {
  if (!ENABLE_CHAPTER_SELECTOR) { startNewGame(); return; }
  if (introTransitionRunning) return;
  chapterOptions.replaceChildren();
  const entries = Object.entries(STORY_SCENES)
    .filter(([, scene]) => scene.chapter && !scene.hideFromSelector && scene.nodes?.[scene.start])
    .map(([id, scene]) => ({ chapter: scene.chapter, label: scene.title, scene: id }));
  for (const review of REVIEW_STARTS) {
    if (STORY_SCENES[review.scene]?.nodes[review.node || STORY_SCENES[review.scene].start]) {
      entries.push({ ...review, review });
    }
  }
  entries.sort((a, b) => a.chapter - b.chapter).forEach((entry) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-button";
    button.textContent = entry.interlude ? entry.label : `Capítulo ${entry.chapter} · ${entry.label}`;
    button.addEventListener("click", () => startNewGame(entry.scene, entry.review));
    chapterOptions.append(button);
  });
  chapterScreen.hidden = false;
  coverScreen.inert = true;
  chapterOptions.firstElementChild?.focus();
}

cancelChapter.addEventListener("click", () => {
  chapterScreen.hidden = true;
  coverScreen.inert = false;
  menuButton.focus();
});
chapterScreen.addEventListener("keydown", (event) => {
  if (activateFocusedButton(event)) return;
  const buttons = [...chapterScreen.querySelectorAll("button")];
  const index = buttons.indexOf(document.activeElement);
  if (event.key === "Escape") { event.preventDefault(); cancelChapter.click(); }
  else if (focusWithArrow(event, buttons)) return;
  else if (["ArrowUp", "ArrowDown", "Tab"].includes(event.key)) {
    event.preventDefault();
    const direction = event.key === "ArrowUp" || (event.key === "Tab" && event.shiftKey) ? -1 : 1;
    buttons[(index + direction + buttons.length) % buttons.length].focus();
  }
});

async function startNewGame(sceneId = "lyra-has-vuelto", review = null) {
  if (introTransitionRunning) return;
  if (!STORY_SCENES[sceneId]?.nodes[STORY_SCENES[sceneId].start]) return;
  startingScene = sceneId;
  startingNode = review?.node || null;
  chapterScreen.hidden = true;
  coverScreen.inert = false;
  introTransitionRunning = true;
  gameState = StoryEngine.createState();
  if (review) prepareReviewStart(gameState, review.preset);
  novel.classList.remove("is-playing");
  resetScenePresentation();
  nameForm.reset();
  nameInput.removeAttribute("aria-invalid");
  nameError.textContent = "";
  gameScreen.hidden = true;
  nameScreen.hidden = true;
  introScreen.hidden = true;
  videoFallback.hidden = true;
  introVideo.pause();
  stopIntroSceneFade();
  introSceneFade.hidden = true;
  introSceneFade.style.opacity = "0";
  introVideo.controls = false;
  introVideo.muted = false;
  enableVideoSound.hidden = true;
  introVideo.currentTime = 0;
  if (sceneId !== "lyra-has-vuelto") {
    coverScreen.hidden = true;
    introTransitionRunning = false;
    askTravelerName();
    return;
  }
  // Solicitar reproducción dentro del clic; detenerla antes de pintar el fundido.
  // Algunos móviles pierden la autorización del gesto después de un await.
  introVideo.play().catch(() => {});
  introVideo.pause();
  coverScreen.inert = true;
  introFlash.hidden = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Primero fundir la portada a blanco; el vídeo sigue detenido hasta entonces.
  await introFlash.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: reducedMotion ? 200 : 650, easing: "ease-in-out", fill: "forwards",
  }).finished;
  coverScreen.hidden = true;
  introScreen.hidden = false;
  introScreen.focus({ preventScroll: true });
  // La llamada no espera a la descarga: un vídeo lento no retiene el fundido.
  playIntroVideo();
  await introFlash.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: reducedMotion ? 200 : 500, easing: "ease-out", fill: "forwards",
  }).finished;
  introFlash.hidden = true;
  introFlash.getAnimations().forEach((animation) => animation.cancel());
  coverScreen.inert = false;
  introTransitionRunning = false;
}

async function playIntroVideo() {
  try {
    await introVideo.play();
  } catch (error) {
    if (introScreen.hidden) return;
    if (error.name === "NotAllowedError") {
      // Si el navegador bloquea el audio, el vídeo sigue arrancando solo.
      introVideo.muted = true;
      try {
        await introVideo.play();
        enableVideoSound.hidden = false;
        return;
      } catch { /* Ofrecer controles si tampoco permite reproducir sin sonido. */ }
    }
    if (introScreen.hidden) return;
    introVideo.controls = true;
    document.getElementById("video-status").textContent = "No se ha podido iniciar el vídeo. Puedes reproducirlo con los controles o continuar.";
    videoFallback.hidden = false;
  }
}

enableVideoSound.addEventListener("click", () => {
  introVideo.muted = false;
  enableVideoSound.hidden = true;
  playIntroVideo();
});

function askTravelerName() {
  if (!gameState || gameState.scene !== "intro") return;
  introVideo.pause();
  stopIntroSceneFade();
  introSceneFade.hidden = true;
  introScreen.hidden = true;
  gameState.scene = "name";
  nameScreen.hidden = false;
  updateNameViewport();
  document.getElementById("name-heading").focus();
}

// Usar esta función al mostrar diálogos, narración, opciones y nombres de hablantes.
// El callback conserva literalmente nombres que contienen caracteres como $&.
function formatStoryText(text) {
  return StoryEngine.format(text, gameState);
}

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name || name.length > 40) {
    nameError.textContent = "Introduce un nombre de entre 1 y 40 caracteres.";
    nameInput.setAttribute("aria-invalid", "true");
    nameInput.focus();
    return;
  }
  gameState.protagonistName = name;
  nameInput.blur();
  nameScreen.hidden = true;
  StoryEngine.goToScene(gameState, STORY_SCENES, startingScene, startingNode);
  novel.classList.add("is-playing");
  gameScreen.hidden = false;
  prepareAudio();
  renderScene();
  gameScreen.focus({ preventScroll: true });
  Object.values(STORY_SCENES[gameState.scene].assets).forEach((asset) => loadSceneImage(asset.src));
});

nameInput.addEventListener("input", () => {
  nameError.textContent = "";
  nameInput.removeAttribute("aria-invalid");
});
introVideo.addEventListener("ended", askTravelerName);
introVideo.addEventListener("error", () => {
  document.getElementById("video-status").textContent = "No se ha podido reproducir el vídeo. Puedes continuar.";
  videoFallback.hidden = false;
});
document.getElementById("continue-intro").addEventListener("click", askTravelerName);

function updateIntroSceneFade() {
  const time = introVideo.currentTime;
  const { start, whiteFrom, whiteUntil, end } = introSceneTransition;
  let opacity = 0;
  if (time > start && time < end) {
    const progress = time < whiteFrom ? (time - start) / (whiteFrom - start)
      : time > whiteUntil ? (end - time) / (end - whiteUntil) : 1;
    opacity = progress * progress * (3 - 2 * progress);
  }
  introSceneFade.style.opacity = String(opacity);
  introSceneFade.hidden = opacity === 0 || introScreen.hidden;
}

function stopIntroSceneFade() {
  cancelAnimationFrame(introSceneFadeFrame);
  introSceneFadeFrame = null;
}

function animateIntroSceneFade() {
  stopIntroSceneFade();
  updateIntroSceneFade();
  // Seguir el tiempo del vídeo conserva la sincronización al pausar o cargar.
  if (!introVideo.paused && !introVideo.ended && !introScreen.hidden) {
    introSceneFadeFrame = requestAnimationFrame(animateIntroSceneFade);
  }
}

introVideo.addEventListener("play", animateIntroSceneFade);
introVideo.addEventListener("pause", stopIntroSceneFade);
introVideo.addEventListener("ended", stopIntroSceneFade);
introVideo.addEventListener("timeupdate", updateIntroSceneFade);
introVideo.addEventListener("seeked", updateIntroSceneFade);

function showLoadNotice() {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    if (!saved) { window.alert("Todavía no hay una partida guardada."); return; }
    const restored = StoryEngine.restore(JSON.parse(saved), STORY_SCENES);
    resetScenePresentation();
    gameState = restored;
    coverScreen.hidden = true;
    introScreen.hidden = true;
    nameScreen.hidden = true;
    novel.classList.add("is-playing");
    gameScreen.hidden = false;
    renderScene();
    if (choicesPanel.hidden) gameScreen.focus({ preventScroll: true });
  } catch {
    window.alert("No se ha podido cargar la partida guardada.");
  }
}

function saveGame() {
  if (!gameState || !STORY_SCENES[gameState.scene]) return;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
    saveStatus.hidden = true;
  } catch {
    saveStatus.textContent = "El navegador no permite guardar. La partida continúa en esta pestaña.";
    saveStatus.hidden = false;
  }
}

document.getElementById("previous-option").addEventListener("click", () => changeOption(-1));
document.getElementById("next-option").addEventListener("click", () => changeOption(1));
menuButton.addEventListener("click", () => menuOptions[selectedOption].action());

coverScreen.addEventListener("keydown", (event) => {
  if (activateFocusedButton(event)) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    changeOption(event.key === "ArrowLeft" ? -1 : 1);
    menuButton.focus({ preventScroll: true });
  } else {
    focusWithArrow(event, [...coverScreen.querySelectorAll("button")]);
  }
});

nameScreen.addEventListener("keydown", event => {
  if (activateFocusedButton(event)) return;
  if (event.key === "Escape") {
    event.preventDefault();
    nameScreen.hidden = true;
    returnToCover();
  } else if (["ArrowUp", "ArrowDown"].includes(event.key) || event.target !== nameInput) {
    focusWithArrow(event, [nameInput, nameForm.querySelector("button")]);
  }
});
introScreen.addEventListener("keydown", event => {
  if (introTransitionRunning) { event.preventDefault(); return; }
  if (activateFocusedButton(event)) return;
  if (event.key === "Escape") {
    event.preventDefault();
    introVideo.pause();
    stopIntroSceneFade();
    introScreen.hidden = true;
    returnToCover();
  } else focusWithArrow(event, [...introScreen.querySelectorAll("button")]);
});

function returnToCover() {
  saveGame();
  resetScenePresentation();
  novel.classList.remove("is-playing");
  gameScreen.hidden = true;
  coverScreen.hidden = false;
  selectedOption = 0;
  changeOption(0);
  menuButton.focus();
}
document.getElementById("return-to-cover").addEventListener("click", returnToCover);
pauseToCover.addEventListener("click", () => openPauseMenu());
window.addEventListener("pagehide", saveGame);

function resetScenePresentation() {
  cancelStoryVideo?.();
  storyVideo.pause();
  storyVideoPanel.hidden = true;
  renderedDay = null;
  gameScreen.inert = false;
  dayTransitionRequest += 1;
  dayTransitionRunning = false;
  dayTransition.getAnimations().forEach(animation => animation.cancel());
  dayTransition.hidden = true;
  dayTransition.style.opacity = "0";
  closePauseMenu(false);
  eventRequest += 1;
  eventRunning = false;
  storyEvent.getAnimations().forEach((animation) => animation.cancel());
  storyEvent.hidden = true;
  storyEvent.style.opacity = "0";
  wallName.hidden = true;
  storyDocument.hidden = true;
  renderedChapter = null;
  imageRequest += 1;
  requestedImage = null;
  sceneImages.forEach((image) => {
    image.getAnimations().forEach(animation => animation.cancel());
    image.classList.remove("is-visible");
  });
  sceneEnding.hidden = true;
  gameScreen.classList.remove("is-memory");
  gameScreen.classList.remove("is-final-note");
  novel.classList.remove("is-chapter-two");
}

function loadSceneImage(src) {
  if (!imageCache.has(src)) {
    imageCache.set(src, new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => { missingResources.add(src); resolve(false); };
      // Una descarga interrumpida no debe bloquear un evento.
      const timeout = setTimeout(() => { missingResources.add(src); resolve(false); }, 10000);
      const loaded = image.onload;
      const failed = image.onerror;
      image.onload = () => { clearTimeout(timeout); loaded(); };
      image.onerror = () => { clearTimeout(timeout); failed(); };
      image.src = src;
    }));
  }
  return imageCache.get(src);
}

async function showSceneImage(key, transitionMs = 520) {
  const assets = STORY_SCENES[gameState.scene].assets;
  let asset = assets[key];
  if (!asset) {
    imageRequest += 1;
    requestedImage = null;
    sceneImages.forEach((image) => image.classList.remove("is-visible"));
    gameScreen.style.removeProperty("--scene-background");
    return;
  }
  if (requestedImage === asset.src) return;
  requestedImage = asset.src;
  const request = ++imageRequest;
  const loaded = await loadSceneImage(asset.src);
  if (request !== imageRequest) return;
  if (!loaded) {
    // Si falta el recuerdo, mantener a Lyra neutra sin interrumpir el guion.
    asset = assets[asset.fallback || "neutra"];
    if (!asset || !await loadSceneImage(asset.src)) {
      if (request === imageRequest) {
        sceneImages.forEach((image) => image.classList.remove("is-visible"));
        gameScreen.style.removeProperty("--scene-background");
      }
      return;
    }
    if (request !== imageRequest) return;
  }
  // No sustituir una capa mientras aún participa en el fundido anterior.
  // Si se avanza rápido, solo se presenta la última imagen solicitada.
  await sceneImageFade;
  if (request !== imageRequest) return;
  const next = 1 - visibleImage;
  const incoming = sceneImages[next];
  const outgoing = sceneImages[visibleImage];
  incoming.src = asset.src;
  try { await incoming.decode(); } catch { /* La precarga ya comprobó el recurso. */ }
  if (request !== imageRequest) return;
  const duration = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : transitionMs;
  incoming.alt = asset.alt;
  incoming.removeAttribute("aria-hidden");
  outgoing.setAttribute("aria-hidden", "true");
  gameScreen.classList.toggle("is-memory", asset.layout === "memory");
  if (asset.layout === "memory") gameScreen.style.setProperty("--memory-background", `url("${asset.src}")`);
  gameScreen.style.setProperty("--scene-background", `url("${asset.src}")`);
  // La imagen anterior permanece opaca debajo: evita el oscurecimiento a mitad
  // del cambio y permite fundir en ambas direcciones sin saltos de capas.
  incoming.parentNode.insertBefore(incoming, wallName);
  incoming.classList.add("is-visible");
  visibleImage = next;
  const animation = duration ? incoming.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration, easing: "ease-in-out",
  }) : null;
  sceneImageFade = (animation?.finished || Promise.resolve()).catch(() => {}).then(() => {
    if (visibleImage === next) outgoing.classList.remove("is-visible");
  });
  await sceneImageFade;
}

function renderScene() {
  if (dayTransitionRunning) return;
  StoryEngine.prepare(gameState, STORY_SCENES);
  const elapsed = gameState.calendar.elapsed;
  const newDay = renderedDay !== null && elapsed > renderedDay && !gameState.calendar.expired;
  renderedDay = elapsed;
  if (newDay && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    void transitionToNewDay();
    return;
  }
  renderSceneContent();
}

async function transitionToNewDay() {
  const request = ++dayTransitionRequest;
  dayTransitionRunning = true;
  eventRunning = true;
  gameScreen.inert = true;
  saveGame();
  dayTransition.hidden = false;
  const fade = async (from, to) => {
    const animation = dayTransition.animate([{ opacity: from }, { opacity: to }], {
      duration: 1100, easing: "ease-in-out", fill: "forwards",
    });
    await animation.finished;
    dayTransition.style.opacity = String(to);
    animation.cancel();
  };
  try {
    await fade(0, 1);
    if (request !== dayTransitionRequest) return;
    const node = StoryEngine.current(gameState, STORY_SCENES);
    await showSceneImage(node?.image, 0);
    if (request !== dayTransitionRequest) return;
    renderSceneContent();
    await new Promise(resolve => setTimeout(resolve, 350));
    if (request !== dayTransitionRequest) return;
    await fade(1, 0);
  } catch (error) {
    if (request === dayTransitionRequest) renderSceneContent();
  } finally {
    if (request === dayTransitionRequest) {
      dayTransition.hidden = true;
      dayTransition.style.opacity = "0";
      dayTransitionRunning = false;
      eventRunning = false;
      gameScreen.inert = false;
      gameScreen.focus({ preventScroll: true });
    }
  }
}

function renderSceneContent() {
  StoryEngine.prepare(gameState, STORY_SCENES);
  const node = StoryEngine.current(gameState, STORY_SCENES);
  const chapter = STORY_SCENES[gameState.scene];
  const chapterChanged = renderedChapter !== gameState.scene;
  if (gameState.scene === "c4_actividades" && gameState.node === "red_posada") {
    node.backTo = gameState.red_posada_retorno || "reflexion_diaria";
  }
  innNetworkButton.hidden = !(gameState.red_posada_desbloqueada && gameState.calendar.active &&
    !gameState.calendar.expired && gameState.scene === "c4_actividades" &&
    node?.type === "choice" && gameState.node !== "red_posada");
  const newInnNetwork = !innNetworkButton.hidden && !gameState.red_posada_presentada;
  innNetworkButton.classList.toggle("is-new", newInnNetwork);
  innNetworkButton.setAttribute("aria-label", newInnNetwork
    ? "Nueva ayuda disponible: abrir la Red de la Posada" : "Abrir la Red de la Posada");
  const dayCounter = document.getElementById("day-counter");
  dayCounter.hidden = !gameState.calendar.active;
  dayCounter.textContent = `${gameState.calendar.remaining} ${gameState.calendar.remaining === 1 ? "día restante" : "días restantes"}`;
  const dayHeading = document.getElementById("day-heading");
  dayHeading.hidden = !(gameState.calendar.active && !gameState.calendar.expired &&
    gameState.scene === "c4_actividades" && Boolean(node));
  dayHeading.textContent = `DÍA ${gameState.calendar.elapsed + 1}`;
  const affinityNotice = document.getElementById("affinity-notice");
  affinityNotice.hidden = !node?.affinityGain;
  affinityNotice.textContent = node?.affinityGain
    ? `♥ ${node.affinityGain.amount > 0 ? "+" : ""}${node.affinityGain.amount} vínculo con ${COMPANIONS[node.affinityGain.companion].name}` : "";
  const platonic = node?.affinityGain && COMPANIONS[node.affinityGain.companion].bondType === "platonic";
  affinityNotice.classList.toggle("is-romantic", Boolean(node?.affinityGain && !platonic));
  affinityNotice.setAttribute("aria-label", node?.affinityGain ? `${affinityNotice.textContent}. ${platonic ? "Vínculo no romántico" : "Afinidad con Lyra"}.` : "");
  renderedChapter = gameState.scene;
  novel.classList.toggle("is-chapter-two", chapter?.chapter >= 2);
  gameScreen.classList.toggle("is-final-note", node?.presentation === "final-note");
  saveGame();
  wallName.hidden = true;
  storyDocument.hidden = true;
  pauseToCover.hidden = !node || node.type === "event";
  if (!node) {
    document.getElementById("ending-heading").textContent = gameState.calendar.expired ? "El plazo de 50 días ha terminado." : "Continuará";
    if (chapter?.endingImage && !gameState.calendar.expired) {
      showSceneImage(chapter.endingImage);
    } else {
      imageRequest += 1;
    }
    dialoguePanel.hidden = true;
    choicesPanel.hidden = true;
    sceneEnding.hidden = false;
    document.getElementById("ending-heading").focus({ preventScroll: true });
    return;
  }
  sceneEnding.hidden = true;
  dialoguePanel.classList.toggle("is-danger", node.tone === "danger");
  if (node.type === "event") {
    dialoguePanel.hidden = true;
    choicesPanel.hidden = true;
    runStoryEvent(node);
    return;
  }
  const documentPresentation = chapter.documents?.[node.document]?.presentation;
  showSceneImage(documentPresentation?.image || node.image, node.transitionMs ?? (chapterChanged ? 650 : 520));
  wallName.hidden = !node.wallName;
  if (node.wallName) {
    wallName.textContent = gameState.protagonistName;
    wallName.classList.toggle("long-name", gameState.protagonistName.length > 18);
  }
  renderDocument(node.document);
  const isChoice = node.type === "choice";
  dialoguePanel.hidden = isChoice;
  choicesPanel.hidden = !isChoice;
  choicesPanel.replaceChildren();
  choicesPanel.classList.toggle("is-character-cards", isChoice && node.presentation === "character-cards");
  choicesPanel.classList.toggle("is-kingdoms", isChoice && node.presentation === "kingdoms");
  choicesPanel.classList.toggle("is-daily-choices", isChoice &&
    StoryEngine.availableOptions(gameState, STORY_SCENES).some(option => StoryCalendar.cost(gameState, option) === 1));
  if (isChoice) {
    if (node.backTo && (!node.backRequiresFlag || gameState[node.backRequiresFlag])) {
      const back = document.createElement("button");
      back.type = "button";
      back.className = "menu-back";
      back.textContent = "←";
      back.setAttribute("aria-label", "Volver a elegir reino");
      back.addEventListener("click", event => {
        event.stopPropagation();
        if (isGamePaused || dayTransitionRunning) return;
        gameState.node = node.backTo;
        StoryEngine.prepare(gameState, STORY_SCENES);
        renderScene();
      });
      choicesPanel.append(back);
    }
    if (node.prompt) {
      const prompt = document.createElement("p");
      prompt.className = "choice-prompt";
      prompt.textContent = node.prompt;
      choicesPanel.append(prompt);
      const detail = document.createElement("p");
      detail.className = "choice-detail";
      detail.textContent = node.detail || "";
      choicesPanel.append(detail);
    }
    StoryEngine.availableOptions(gameState, STORY_SCENES).forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = formatStoryText(option.text);
      if (node.presentation === "kingdoms" && option.emblem) {
        button.classList.add("kingdom-button");
        button.dataset.kingdom = option.id;
        button.setAttribute("aria-label", formatStoryText(option.text));
        const emblem = document.createElement("img");
        emblem.src = option.emblem;
        emblem.alt = "";
        emblem.draggable = false;
        button.replaceChildren(emblem);
      }
      if (node.presentation === "character-cards" && option.portrait) {
        button.classList.add("character-card");
        button.setAttribute("aria-label", formatStoryText(option.text));
        const frame = document.createElement("div");
        frame.className = "character-card-portrait";
        frame.style.setProperty("--portrait-scale", option.portraitScale || 1);
        frame.style.setProperty("--portrait-origin", option.portraitOrigin || "center");
        const portrait = document.createElement("img");
        portrait.src = option.portrait;
        portrait.alt = "";
        portrait.draggable = false;
        const label = document.createElement("span");
        label.textContent = option.cardLabel;
        frame.append(portrait);
        button.replaceChildren(frame, label);
      }
      if (gameState.calendar.active) {
        const cost = StoryCalendar.cost(gameState, option);
        if (cost || option.continueActivity) {
          const label = document.createElement("small");
          label.className = "activity-cost";
          label.textContent = cost ? `${cost} día al terminar` : "Misma jornada · sin coste adicional";
          button.append(label);
        }
      }
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (isGamePaused || dayTransitionRunning) return;
        if (option.comingSoon) { window.alert("En construcción"); return; }
        if (StoryEngine.choose(gameState, STORY_SCENES, option.id)) {
          renderScene();
          gameScreen.focus({ preventScroll: true });
        }
      });
      choicesPanel.append(button);
    });
    choicesPanel.querySelector("button")?.focus({ preventScroll: true });
  } else {
    speaker.hidden = !node.speaker;
    dialogueText.classList.toggle("is-narration", !node.speaker && node.textStyle !== "document");
    dialoguePanel.classList.toggle("is-narration", !node.speaker && node.textStyle !== "document");
    speaker.textContent = node.speaker ? formatStoryText(node.speaker) : "";
    dialogueText.textContent = formatStoryText(node.text);
    dialoguePanel.scrollTop = 0;
    if (node.sound === "metallic-hit") playMetallicHit();
  }
}

function advanceDialogue() {
  if (isGamePaused || gameScreen.hidden || !sceneEnding.hidden || eventRunning) return;
  if (StoryEngine.advance(gameState, STORY_SCENES)) renderScene();
}

function renderDocument(id) {
  storyDocument.replaceChildren();
  const presentation = STORY_SCENES[gameState.scene].documents?.[id]?.presentation;
  storyDocument.classList.toggle("is-on-paper", Boolean(presentation));
  const document = gameState.documents[id];
  storyDocument.hidden = !document;
  if (!document) return;
  const add = (tag, text, className) => {
    const element = window.document.createElement(tag);
    element.className = className;
    element.textContent = formatStoryText(text);
    storyDocument.append(element);
  };
  if (document.label) add("p", document.label, "document-label");
  add("h2", document.title, "document-title");
  if (document.body) add("p", document.body, "document-body");
  (document.paragraphs || []).forEach((paragraph) => add("p", paragraph, "document-body"));
  if (document.signed) add("p", document.signature, "document-signature");
  if (presentation) positionPaperText();
  storyDocument.scrollTop = storyDocument.scrollHeight;
}

function positionPaperText() {
  if (storyDocument.hidden || !storyDocument.classList.contains("is-on-paper")) return;
  const node = StoryEngine.current(gameState, STORY_SCENES);
  const paper = STORY_SCENES[gameState.scene].documents?.[node?.document]?.presentation;
  if (!paper) return;
  // Follow the same centered cover crop as the illustration, including on resize.
  const scale = Math.max(gameScreen.clientWidth / paper.width, gameScreen.clientHeight / paper.height);
  const bounds = paper.textBounds;
  storyDocument.style.setProperty("--paper-left", `${(gameScreen.clientWidth - paper.width * scale) / 2 + bounds.x * scale}px`);
  storyDocument.style.setProperty("--paper-top", `${(gameScreen.clientHeight - paper.height * scale) / 2 + bounds.y * scale}px`);
  storyDocument.style.setProperty("--paper-width", `${bounds.width * scale}px`);
  storyDocument.style.setProperty("--paper-height", `${bounds.height * scale}px`);
  storyDocument.style.setProperty("--paper-font", `${Math.max(12, 30 * scale)}px`);
}
new ResizeObserver(positionPaperText).observe(gameScreen);

async function runStoryEvent(node) {
  if (eventRunning) return;
  eventRunning = true;
  const request = ++eventRequest;
  const active = () => request === eventRequest && !gameScreen.hidden;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  storyEvent.classList.toggle("is-memory-flash", node.style === "memory");
  storyEvent.classList.toggle("is-light-flash", node.style === "light");
  StoryEngine.beginEvent(gameState, STORY_SCENES);
  saveGame();
  const fade = async (from, to, duration) => {
    storyEvent.style.opacity = String(to);
    if (!duration || !active()) return;
    await storyEvent.animate([{ opacity: from }, { opacity: to }], { duration, easing: "ease-in-out" }).finished.catch(() => {});
  };
  const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
  try {
    if (node.style === "video") {
      await playStoryVideo(node.video);
    } else if (node.style === "memory") {
      const asset = STORY_SCENES[gameState.scene].assets[node.image];
      const loaded = await loadSceneImage(asset.src);
      if (!active()) return;
      await showSceneImage(node.returnImage, 0);
      if (!active()) return;
      if (loaded) {
        eventImage.src = asset.src;
        eventImage.alt = asset.alt;
        eventImage.hidden = false;
        storyEvent.hidden = false;
        await fade(0, 1, reduced ? 0 : node.fadeDurationMs);
        if (!active()) return;
        await wait(node.durationMs);
        if (!active()) return;
        await fade(1, 0, reduced ? 0 : node.fadeDurationMs);
      }
    } else {
      eventImage.hidden = true;
      storyEvent.hidden = reduced && node.style === "light";
      await fade(0, 1, reduced ? 0 : node.fadeDurationMs);
      if (!active()) return;
      if (!reduced && node.durationMs) await wait(node.durationMs);
      if (!active()) return;
      await showSceneImage(node.image, 0);
      if (!active()) return;
      if (node.style !== "ending") await fade(1, 0, reduced ? 0 : node.fadeDurationMs);
    }
    if (!active()) return;
    StoryEngine.finishEvent(gameState, STORY_SCENES);
    eventRunning = false;
    storyEvent.hidden = true;
    storyEvent.style.opacity = "0";
    renderScene();
    gameScreen.focus({ preventScroll: true });
  } catch {
    if (!active()) return;
    // El texto sigue accesible aunque el navegador no permita animaciones.
    StoryEngine.finishEvent(gameState, STORY_SCENES);
    eventRunning = false;
    storyEvent.hidden = true;
    renderScene();
  }
}

function playStoryVideo(src) {
  return new Promise(resolve => {
    const finish = () => {
      storyVideo.pause();
      storyVideo.onended = null;
      storyVideo.onerror = null;
      storyVideoPlay.onclick = null;
      storyVideoSkip.onclick = null;
      storyVideoPanel.hidden = true;
      cancelStoryVideo = null;
      resolve();
    };
    cancelStoryVideo = finish;
    storyVideoPanel.hidden = false;
    storyVideo.src = src;
    storyVideoPlay.hidden = false;
    storyVideoPlay.textContent = "Reproducir vídeo";
    storyVideoSkip.textContent = "Omitir vídeo";
    const play = () => storyVideo.play().then(() => {
      if (storyVideoPanel.hidden) return;
      storyVideoPlay.hidden = true;
      storyVideoSkip.focus({ preventScroll: true });
    }).catch(() => {
      if (storyVideoPanel.hidden) return;
      storyVideoPlay.hidden = false;
      storyVideoPlay.focus({ preventScroll: true });
    });
    storyVideo.onended = finish;
    storyVideo.onerror = () => {
      storyVideoPlay.hidden = true;
      storyVideoSkip.textContent = "Vídeo no disponible · Seguir";
      storyVideoSkip.focus({ preventScroll: true });
    };
    storyVideoPlay.onclick = play;
    storyVideoSkip.onclick = finish;
    play();
  });
}

document.getElementById("advance-dialogue").addEventListener("click", (event) => {
  event.stopPropagation();
  advanceDialogue();
});

let dialoguePointerStart = null;
gameScreen.addEventListener("pointerdown", (event) => {
  dialoguePointerStart = { x: event.clientX, y: event.clientY };
});
gameScreen.addEventListener("pointercancel", () => { dialoguePointerStart = null; });
gameScreen.addEventListener("click", (event) => {
  const start = dialoguePointerStart;
  dialoguePointerStart = null;
  if (event.target.closest("button")) return;
  // Un arrastre para desplazar el texto no es un toque para avanzar.
  if (event.detail && start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8) return;
  advanceDialogue();
});

gameScreen.addEventListener("keydown", (event) => {
  if (isGamePaused || eventRunning) { event.preventDefault(); return; }
  if (activateFocusedButton(event)) return;
  if (event.key === "Escape") {
    event.preventDefault();
    if (gameState.pendingChoice) {
      StoryEngine.choose(gameState, STORY_SCENES, "confirm_no");
      renderScene();
    } else if (StoryEngine.current(gameState, STORY_SCENES)?.backTo &&
        (!StoryEngine.current(gameState, STORY_SCENES).backRequiresFlag ||
          gameState[StoryEngine.current(gameState, STORY_SCENES).backRequiresFlag])) {
      gameState.node = StoryEngine.current(gameState, STORY_SCENES).backTo;
      StoryEngine.prepare(gameState, STORY_SCENES);
      renderScene();
    } else if (!sceneEnding.hidden) {
      returnToCover();
    } else openPauseMenu();
    return;
  }
  if (choicesPanel.hidden && document.activeElement === pauseToCover && ["ArrowUp", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
    gameScreen.focus({ preventScroll: true });
    return;
  }
  const controls = !choicesPanel.hidden
    ? [...choicesPanel.querySelectorAll("button"), innNetworkButton, pauseToCover]
    : [...gameScreen.querySelectorAll("button")];
  if (focusWithArrow(event, controls)) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.repeat) { event.preventDefault(); return; }
  if (event.target.closest("button")) return;
  event.preventDefault();
  advanceDialogue();
});

function prepareAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    audioContext ||= new AudioContext();
    audioContext.resume().catch(() => {});
  } catch { /* La falta de audio no bloquea la lectura. */ }
}

function playMetallicHit() {
  if (!audioContext || audioContext.state !== "running") return;
  // Golpe metálico breve y tenue, sintetizado sin recursos externos.
  const now = audioContext.currentTime;
  [220, 587, 1031, 1687].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035 / (index + 1), now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    oscillator.start(now);
    oscillator.stop(now + 0.7);
  });
}
