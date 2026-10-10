"use strict";

const pauseMenu = document.getElementById("pause-menu");
const pauseContent = document.getElementById("pause-content");
const historyButton = document.getElementById("show-history");
const companionsButton = document.getElementById("show-companions");
const resumeButton = document.getElementById("resume-game");
let isGamePaused = false;
let focusBeforePause = null;
let resumeAudio = false;

function menuElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  return element;
}

function openPauseMenu() {
  if (gameScreen.hidden || eventRunning || isGamePaused) return;
  focusBeforePause = document.activeElement;
  isGamePaused = true;
  gameScreen.inert = true;
  resumeAudio = audioContext?.state === "running";
  if (resumeAudio) audioContext.suspend().catch(() => {});
  saveGame();
  document.getElementById("pause-heading").textContent = gameState.protagonistName;
  document.getElementById("protagonist-portrait").classList.toggle("has-travel-clothes", gameState.protagonistOutfit === "vaelthar");
  pauseMenu.hidden = false;
  showHistory();
  historyButton.focus();
}

function closePauseMenu(restoreFocus = true) {
  if (!isGamePaused) return;
  isGamePaused = false;
  pauseMenu.hidden = true;
  gameScreen.inert = false;
  if (resumeAudio) audioContext?.resume().catch(() => {});
  resumeAudio = false;
  if (restoreFocus) (focusBeforePause?.isConnected ? focusBeforePause : pauseToCover).focus({ preventScroll: true });
}

function selectPauseSection(section) {
  historyButton.setAttribute("aria-pressed", String(section === "history"));
  companionsButton.setAttribute("aria-pressed", String(section === "companions"));
  pauseContent.replaceChildren();
  pauseContent.scrollTop = 0;
}

function historyChapters() {
  const chapters = new Map();
  for (const key of gameState.appliedNodes) {
    const [sceneId, nodeId] = key.split(":");
    const scene = STORY_SCENES[sceneId];
    const node = scene?.nodes[nodeId];
    const decision = gameState.decisions.find(item => item.scene === sceneId && item.choice === nodeId);
    const text = node?.type === "dialogue" ? node.text : decision?.text;
    if (!text) continue;
    const isRest = sceneId === "c3_inspeccion" &&
      (/^descanso_/.test(nodeId) || /^(insp_invitar|insp_elegir_abrazo|insp_abrazo)/.test(nodeId));
    const chapterId = isRest ? "descanso" : sceneId;
    if (!chapters.has(chapterId)) chapters.set(chapterId, {
      id: chapterId, title: isRest ? "Un lugar donde descansar" : scene.title, entries: [],
    });
    chapters.get(chapterId).entries.push({ text, speaker: decision ? gameState.protagonistName : node.speaker });
  }
  return [...chapters.values()];
}

function showHistory(focusId = null) {
  selectPauseSection("history");
  pauseContent.append(menuElement("h2", "Historia"));
  const chapters = historyChapters();
  if (!chapters.length) pauseContent.append(menuElement("p", "Todavía no hay historia registrada."));
  const list = menuElement("div", "", "history-chapters");
  for (const chapter of chapters) {
    const button = menuElement("button", chapter.title, "text-button history-chapter");
    button.type = "button";
    button.addEventListener("click", () => showHistoryChapter(chapter.id));
    list.append(button);
    if (chapter.id === focusId) queueMicrotask(() => button.focus());
  }
  pauseContent.append(list);
}

function showHistoryChapter(id) {
  const chapter = historyChapters().find(chapter => chapter.id === id);
  if (!chapter) return;
  selectPauseSection("history");
  const back = menuElement("button", "←", "menu-back");
  back.type = "button";
  back.setAttribute("aria-label", "Volver a capítulos");
  back.title = "Volver a capítulos";
  back.addEventListener("click", () => showHistory(id));
  const heading = menuElement("div", "", "companion-heading");
  heading.append(back, menuElement("h2", chapter.title));
  pauseContent.append(heading);
  for (const { text, speaker } of chapter.entries) {
    const entry = menuElement("article", "", "history-entry");
    const speakerName = speaker;
    if (speakerName) entry.append(menuElement("strong", formatStoryText(speakerName)));
    entry.append(menuElement("p", formatStoryText(text), speakerName ? "" : "history-narration"));
    pauseContent.append(entry);
  }
  back.focus({ preventScroll: true });
}

function showCompanions() {
  selectPauseSection("companions");
  pauseContent.append(menuElement("h2", "Compañeros"));
  const met = gameState.metCompanions.filter(id => COMPANIONS[id]);
  if (!met.length) pauseContent.append(menuElement("p", "Todavía no has encontrado a ningún compañero."));
  const gallery = menuElement("div", "", "companions-gallery");
  for (const id of met) {
    const companion = COMPANIONS[id];
    const button = menuElement("button", "", "companion-button");
    button.type = "button";
    const avatar = menuElement("span", "", "companion-avatar");
    avatar.setAttribute("aria-hidden", "true");
    avatar.style.backgroundImage = `url("${companion.portrait}")`;
    avatar.style.backgroundSize = companion.avatarSize || "cover";
    avatar.style.backgroundPosition = companion.avatarPosition || companion.portraitPosition || "center";
    button.append(avatar, menuElement("span", companion.name));
    button.addEventListener("click", () => showCompanion(id));
    gallery.append(button);
  }
  pauseContent.append(gallery);
}

function showCompanion(id) {
  if (!gameState.metCompanions.includes(id) || !COMPANIONS[id]) return;
  selectPauseSection("companions");
  const companion = COMPANIONS[id];
  const back = menuElement("button", "", "menu-back");
  back.type = "button";
  back.setAttribute("aria-label", "Volver a compañeros");
  back.title = "Volver a compañeros";
  const arrow = menuElement("span", "←");
  arrow.setAttribute("aria-hidden", "true");
  back.append(arrow);
  back.addEventListener("click", () => { showCompanions(); pauseContent.querySelector("button")?.focus(); });
  const portrait = document.createElement("img");
  portrait.src = companion.portrait;
  portrait.alt = companion.name;
  portrait.className = "companion-portrait";
  portrait.style.objectPosition = companion.portraitPosition || "center 25%";
  const frame = menuElement("div", "", "companion-portrait-frame");
  const level = gameState.affinity[id] ?? 1;
  const affinity = menuElement("span", "", "companion-affinity");
  affinity.classList.toggle("is-platonic", companion.bondType === "platonic");
  affinity.setAttribute("role", "img");
  affinity.setAttribute("aria-label", `${companion.bondType === "platonic" ? "Vínculo no romántico" : "Afinidad"} con ${companion.name}: nivel ${level}`);
  affinity.title = `Afinidad: nivel ${level}`;
  const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  heart.setAttribute("viewBox", "0 0 24 24");
  heart.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M12 21S2 15 2 8.5C2 2.5 9 1.5 12 6c3-4.5 10-3.5 10 2.5C22 15 12 21 12 21Z");
  heart.append(path);
  const number = menuElement("span", String(level), "affinity-level");
  number.setAttribute("aria-hidden", "true");
  affinity.append(heart, number);
  frame.append(portrait, affinity);
  const heading = menuElement("div", "", "companion-heading");
  heading.append(back, menuElement("h2", companion.name));
  pauseContent.append(heading, frame,
    menuElement("p", companion.description));
  back.focus();
}

historyButton.addEventListener("click", () => showHistory());
companionsButton.addEventListener("click", showCompanions);
resumeButton.addEventListener("click", () => closePauseMenu());
pauseMenu.addEventListener("keydown", event => {
  if (event.key === "Escape") { event.preventDefault(); closePauseMenu(); }
  if (event.key === "Tab") {
    const targets = [...pauseMenu.querySelectorAll('button, [tabindex="0"]')];
    const first = targets[0], last = targets[targets.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
