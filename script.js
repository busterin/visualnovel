"use strict";

// Desactivar al terminar la revisión para recuperar el inicio habitual.
const ENABLE_CHAPTER_SELECTOR = true;
// Accesos de revisión a tramos que no son rutas independientes del capítulo.
const REVIEW_STARTS = [
  { chapter: 33, label: "La voluntad quebrada · Seren vive", scene: "c33_voluntad", preset: "will_seren" },
  { chapter: 33, label: "La voluntad quebrada · Jairen vive", scene: "c33_voluntad", preset: "will_jairen" },
  { chapter: 33, label: "La voluntad quebrada · Seren pareja", scene: "c33_voluntad", preset: "will_seren_romance" },
  { chapter: 32.5, interlude: true, label: "Romance Seren", scene: "seren_romance", preset: "seren_romance" },
  { chapter: 32, label: "El peso de la corona · Seren vive", scene: "c32_corona", preset: "crown_weight_seren" },
  { chapter: 32, label: "El peso de la corona · Jairen vive", scene: "c32_corona", preset: "crown_weight_jairen" },
  { chapter: 31, label: "Los nombres que aún responden · Rescate de los borrados", scene: "c31_nombres", preset: "names_return" },
  { chapter: 30, label: "La luz que queda · Veyra", scene: "c30_luz", preset: "veyra_light" },
  { chapter: 29, label: "El día que no existió · Veyra", scene: "c29_jardines", preset: "veyra_gardens" },
  { chapter: 28, label: "Una noche sin informes · Mara", scene: "c28_mara", preset: "mara_evening" },
  { chapter: 27, label: "Siempre fuimos dos", scene: "c27_biell", preset: "biell" },
  { chapter: 26, label: "El rostro de la oscuridad", scene: "c26_oscuridad", preset: "darkness" },
  { chapter: 25, label: "El hombre al que culparon", scene: "c25_albert", preset: "albert" },
  { chapter: 24, label: "El último recuerdo", scene: "c24_ultimo_recuerdo", preset: "last_memory" },
  { chapter: 21, label: "Los secretos de Valdoren · Parte 1", scene: "c21_valdoren", preset: "valdoren" },
  { chapter: 20, label: "Cuando falla la luz · Seren vive", scene: "c20_falla_luz", preset: "light_seren" },
  { chapter: 20, label: "Cuando falla la luz · Jairen vive", scene: "c20_falla_luz", preset: "light_jairen" },
  { chapter: 19, label: "Antes de la corona · Seren vive", scene: "c19_antes_corona", preset: "crown_seren" },
  { chapter: 19, label: "Antes de la corona · Jairen vive", scene: "c19_antes_corona", preset: "crown_jairen" },
  { chapter: 18, label: "El Umbral", scene: "c18_umbral", preset: "veyra_threshold" },
  { chapter: 17, label: "La estación donde nunca llega el tren", scene: "c17_estacion_lyra", preset: "lyra_station" },
  { chapter: 10.5, label: "Romance · Lyra (vínculo 8)", scene: "lyra_romance", preset: "lyra_romance", interlude: true },
  { chapter: 16, label: "La verdad del faro", scene: "c16_verdad_faro", preset: "lighthouse_truth" },
  { chapter: 15, label: "El noveno segundo", scene: "c15_noveno_segundo", preset: "ninth_second" },
  { chapter: 7.5, label: "Extra · Pasar el día en la posada", scene: "extra_posada", preset: "inn_day", interlude: true },
  { chapter: 14, label: "La hija ausente", scene: "c14_maleria", preset: "maleria" },
  { chapter: 13, label: "La noche de las luces apagadas", scene: "c13_apagones", preset: "blackouts" },
  { chapter: 12, label: "El lugar que queda · Homenaje a Seren (Jairen vive)", scene: "c12_homenaje", preset: "memorial_jairen" },
  { chapter: 12, label: "El lugar que queda · Homenaje a Jairen (Seren vive)", scene: "c12_homenaje", preset: "memorial_seren" },
  { chapter: 11, label: "Los nombres que faltaban", scene: "c11_eiden", preset: "eiden_visit" },
  { chapter: 6, label: "Un lugar donde descansar", scene: "c3_inspeccion", node: "descanso_decision_01", preset: "rest" },
  { chapter: 7, label: "La mañana · La ropa de Ada", scene: "c3_ropa_ada", preset: "clothes" },
  { chapter: 7, label: "La revelación · Treinta días", scene: "c3_diosa", preset: "revelation" },
  { chapter: 7, label: "Cuenta atrás · Los días que quedan", scene: "c4_actividades", preset: "countdown" },
  { chapter: 8, label: "Visita a palacio", scene: "c8_palacio", preset: "palace" },
  { chapter: 9, label: "Paseo por el mercado", scene: "c9_mercado", preset: "market" },
  { chapter: 10, label: "Volver a conocerte", scene: "c10_lyra", preset: "lyra_training" },
  { chapter: 9.5, label: "Interludio · El aviso de Willard (tras el día 9)", scene: "interludio_willard", preset: "willard", interlude: true },
];
let startingNode = null;

function prepareReviewStart(state, preset) {
  if (["will_seren","will_jairen","will_seren_romance"].includes(preset)) {
    const ruler=preset === "will_jairen" ? "jairen" : "seren";
    prepareReviewStart(state, `crown_weight_${ruler}`);
    state.calendar.elapsed=24;state.calendar.remaining=6;state.calendar.activity=null;
    Object.assign(state,{c26_completado:true,willard_enemigo:true,willard_avatar_descubierto:true});
    state.completedScenes=[...new Set([...state.completedScenes,"interludio_willard",
      ...STORY_SCENES.c4_actividades.scheduledActivities.filter(x=>x.day<=24).map(x=>x.scene)])];
    state.affinity[ruler]=8;
    if(preset === "will_seren_romance") {
      Object.assign(state,{seren_relacion:"pareja",seren_romance_activo:true,seren_romance_completado:true,c32_completado:true});
      state.completedScenes.push("seren_romance","c32_corona");
    }
    StoryCalendar.begin(state,{activity:{id:"voluntad_quebrada"},dayCost:1});
    return;
  }
  if (preset === "seren_romance") {
    prepareReviewStart(state, "crown_weight_seren");
    Object.assign(state, {c32_completado:true,c32_superviviente:"seren",c32_decision:"A",seren_conversacion_corona:true});
    state.completedScenes.push("c32_corona");
    state.calendar.completed.push("peso_corona");
    state.affinity.seren=8;
    state.calendar.activity=null;
    StoryCalendar.begin(state,{activity:{id:"romance_seren"},dayCost:1});
    return;
  }
  if (preset === "crown_weight_seren" || preset === "crown_weight_jairen") {
    const ruler=preset === "crown_weight_seren" ? "seren" : "jairen";
    prepareReviewStart(state, `light_${ruler}`);
    Object.assign(state, {c20_completado:true,c20_superviviente:ruler,
      c20_ataque_palacio_repelido:true,c20_faro_restablecido:true,combates_desbloqueados:true});
    state.completedScenes.push("c20_falla_luz","interludio_combate");
    state.calendar.completed.push("falla_luz");
    state.calendar.elapsed=8;state.calendar.remaining=state.calendar.totalDays-8;
    state.calendar.activity=null;
    StoryCalendar.begin(state,{activity:{id:"peso_corona"},dayCost:1});
    return;
  }
  if (preset === "names_return") {
    prepareReviewStart(state, "veyra_light");
    Object.assign(state, {c30_completado:true,c30_decision:"B",veyra_desaparecida:true,
      veyra_anclaje_restaurado:false,conjuro_restauracion_anclaje_consumido:false,
      ruta_salvacion_global_disponible:true,ruta_salvacion_global_bloqueada:false,
      promesa_salvar_borrados:true,iven_esposo_ada:true,iven_rescatado:false,
      c24_completado:true,c26_completado:true,willard_enemigo:true});
    state.calendar.elapsed=24;
    state.calendar.remaining=6;
    state.calendar.activity=null;
    state.affinity.veyra=8;
    for (const id of ["mara","kael","veyra"]) {
      if (!state.metCompanions.includes(id)) state.metCompanions.push(id);
      state.affinity[id] ??= 1;
    }
    state.completedScenes=[...new Set([...state.completedScenes,"c30_luz",
      "interludio_combate","interludio_willard",
      ...STORY_SCENES.c4_actividades.scheduledActivities.filter(item=>item.day<=24).map(item=>item.scene)])];
    return;
  }
  if (preset === "veyra_light") {
    prepareReviewStart(state, "veyra_gardens");
    Object.assign(state, {c18_completado:true,c29_completado:true,c25_completado:true,c18_veyra_cruza_umbral:true,
      c18_umbral_descubierto:true,conjuro_restauracion_anclaje_obtenido:true});
    state.completedScenes.push("c18_umbral","c29_jardines","c25_albert");
    state.documents.c25_conjuro_anclaje = {...STORY_SCENES.c25_albert.documents.c25_conjuro_anclaje};
    state.calendar.activity=null;
    StoryCalendar.begin(state,{activity:{id:"orbis_luz"},dayCost:1});
    return;
  }
  const veyraGardens = preset === "veyra_gardens";
  const maraEvening = preset === "mara_evening";
  const biell = preset === "biell";
  const darkness = preset === "darkness" || biell;
  const albert = preset === "albert" || darkness || maraEvening;
  const lastMemory = preset === "last_memory" || albert;
  const valdoren = preset === "valdoren";
  const light = preset === "light_seren" ? "seren" : preset === "light_jairen" ? "jairen" : null;
  const crown = light || (preset === "crown_seren" ? "seren" : preset === "crown_jairen" ? "jairen" : null);
  const veyraThreshold = preset === "veyra_threshold";
  const lyraStation = preset === "lyra_station";
  const lyraRomance = preset === "lyra_romance";
  const lighthouseTruth = preset === "lighthouse_truth";
  const ninthSecond = preset === "ninth_second" || lighthouseTruth;
  const innDay = preset === "inn_day";
  const maleria = preset === "maleria";
  const blackouts = preset === "blackouts";
  const memorial = preset === "memorial_jairen" ? "jairen" : preset === "memorial_seren" ? "seren" : null;
  const eidenVisit = preset === "eiden_visit";
  const palace = preset === "palace";
  const market = preset === "market";
  const willard = preset === "willard";
  const lyraTraining = preset === "lyra_training";
  if (palace || market || willard || lyraTraining || eidenVisit || memorial || blackouts || maleria || innDay || ninthSecond || lyraRomance || lyraStation || veyraThreshold || crown || valdoren || lastMemory || veyraGardens) preset = "countdown";
  // Solo se aplica a una partida nueva abierta desde estos accesos temporales.
  Object.assign(state, {
    completedScenes: ["c3_archivo", "c3_posada", "c3_inspeccion"],
    archivo_completado: true, posada_completada: true, ruta_inspeccion_completada: true,
    acceso_mantenimiento_autorizado: false, ada_lagunas_iven: true,
    documentos_aberraciones_iven_revisados: true, iven_entrega_inspeccion: true,
    iven_informes_aberraciones: true, inspeccion_corte_segundos: 9,
    metCompanions: ["lyra", "ada"], affinity: { lyra: 1, ada: 1 },
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
    if (valdoren) {
      state.c10_completado = true;
      state.completedScenes.push("c10_lyra");
      state.calendar.completed.push("lyra");
      state.calendar.elapsed = 1; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      StoryCalendar.begin(state, { activity: { id: "valdoren" }, dayCost: 1 });
    }
    if (crown) {
      const deceased = crown === "seren" ? "jairen" : "seren";
      Object.assign(state, { palacio_completado: true, palacio_superviviente: crown,
        palacio_fallecido: deceased, c12_completado: true, c12_superviviente: crown,
        c12_homenaje_a: deceased, seren_conocida: true, jairen_conocido: true });
      state.completedScenes.push("c8_palacio", "c12_homenaje");
      state.calendar.completed.push("palacio", "homenaje");
      state.calendar.elapsed = 5; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      if (light) {
        state.c19_completado = true; state.c19_superviviente = light;
        state.completedScenes.push("c19_antes_corona");
        state.calendar.completed.push("antes_corona");
        state.metCompanions.push(light); state.affinity[light] = 1;
        state.calendar.elapsed = 7; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      }
      StoryCalendar.begin(state, { activity: { id: light ? "falla_luz" : "antes_corona" }, dayCost: 1 });
    }
    if (veyraThreshold) {
      Object.assign(state, { acceso_orbis: true, aviso_willard_completado: true,
        mercado_completado: true, veyra_conocida: true, c14_completado: true,
        c14_decision_1: "A", c14_veyra_princesa_orbis: true, c14_veyra_hija_maleria: true });
      state.completedScenes.push("interludio_willard", "c9_mercado", "c14_maleria");
      state.calendar.elapsed = 10; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      state.metCompanions.push("veyra"); state.affinity.veyra = 1;
      StoryCalendar.begin(state, { activity: { id: "orbis_umbral" }, dayCost: 1 });
    }
    if (lyraStation) {
      state.c10_completado = true;
      state.completedScenes.push("c10_lyra");
      state.calendar.completed.push("lyra");
      state.calendar.elapsed = 1; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      StoryCalendar.begin(state, { activity: { id: "estacion_lyra" }, dayCost: 1 });
    }
    if (lyraRomance) {
      state.affinity.lyra = 8;
      state.lyra_romance_inicio_dia = 0;
      state.lyra_romance_disponible = true;
      StoryCalendar.begin(state, { activity: { id: "lyra_romance" }, dayCost: 1 });
    }
    if ((crown || veyraThreshold || ninthSecond || maleria || willard || lastMemory) && !state.completedScenes.includes("c8_palacio")) {
      Object.assign(state, { palacio_completado: true, palacio_superviviente: "seren", palacio_fallecido: "jairen", seren_conocida: true, jairen_conocido: true });
      state.completedScenes.push("c8_palacio");
      state.calendar.completed.push("palacio");
    }
    if (lastMemory) {
      state.completedScenes.push("c15_noveno_segundo", "c16_verdad_faro");
      Object.assign(state, { c15_completado: true, c16_completado: true });
      state.calendar.completed.push("noveno_segundo", "verdad_faro");
      state.calendar.elapsed = 7; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      if (albert) {
        state.completedScenes.push("c24_ultimo_recuerdo", "interludio_willard");
        state.calendar.completed.push("ultimo_recuerdo");
        state.calendar.completedDays.ultimo_recuerdo = 8;
        state.calendar.elapsed = 10; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
        Object.assign(state, { c24_completado: true, aurelia_fallecida: true,
          c24_testimonio_albert_no_estaba_dentro: true, c24_protagonista_activo_conjuro_solo: true,
          c24_conjuro_tres_participantes: true, objetivo_encontrar_albert: true,
          kael_conocido: true, kael_otro_mundo: true, acceso_orbis: true, aviso_willard_completado: true });
        state.metCompanions.push("kael"); state.affinity.kael = 1;
      }
      if (darkness) {
        state.completedScenes.push("c25_albert");
        state.calendar.completed.push("albert"); state.calendar.completedDays.albert = 11;
        state.calendar.elapsed = 11; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
        Object.assign(state, {c25_completado:true, albert_encontrado:true, albert_vivo:true, albert_enfermo:true,
          albert_inocente_segun_pruebas:true, c25_orden_defensa_obtenida:true, objetivo_encontrar_albert:false});
        state.documents.c25_orden_defensa = {...STORY_SCENES.c25_albert.documents.c25_orden_defensa};
      }
      if (biell) {
        state.completedScenes.push("c26_oscuridad");
        state.calendar.completed.push("rostro_oscuridad");
        state.calendar.completedDays.rostro_oscuridad = 12;
        state.calendar.elapsed = 12; state.calendar.remaining = state.calendar.totalDays - 12;
        Object.assign(state, { c26_completado: true, willard_enemigo: true, willard_traidor_confirmado: true,
          willard_avatar_descubierto: true, ritual_faro_descubierto: true, ritual_faro_amenaza_activa: true,
          c26_fuente_luz_especial: true, albert_exonerado: true });
      }
      StoryCalendar.begin(state, { activity: { id: maraEvening ? "noche_mara" : biell ? "siempre_dos" : darkness ? "rostro_oscuridad" : albert ? "albert" : "ultimo_recuerdo" }, dayCost: 1 });
    }
    if (ninthSecond) {
      Object.assign(state, { c14_completado: true, acceso_orbis: true, aviso_willard_completado: true,
        veyra_conocida: true, maleria_conocida: true, c14_veyra_princesa_orbis: true,
        c14_veyra_hija_maleria: true, c14_maleria_recuerda_hija: true });
      state.completedScenes.push("interludio_willard", "c9_mercado", "c14_maleria");
      state.calendar.elapsed = 10; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      if (lighthouseTruth) {
        state.completedScenes.push("c15_noveno_segundo");
        Object.assign(state, { c15_completado: true, c15_albert_altero_retorno: true,
          c15_willard_lyra_fuera: true, c15_pasado_protagonista_desbloqueado: true });
        state.calendar.elapsed = 11; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
        state.calendar.completed.push("noveno_segundo");
      }
      StoryCalendar.begin(state, { activity: { id: lighthouseTruth ? "verdad_faro" : "noveno_segundo" }, dayCost: 1 });
    }
    if (veyraGardens) {
      Object.assign(state, {acceso_orbis:true, aviso_willard_completado:true, veyra_conocida:true, veyra_bloqueada:false,
        mercado_completado:true, c14_completado:true, c14_maleria_recuerda_hija:true, c15_veyra_desanclada:true});
      state.completedScenes.push("c8_palacio", "interludio_willard", "c9_mercado", "c14_maleria");
      state.calendar.elapsed=10;state.calendar.remaining=state.calendar.totalDays-10;
      state.metCompanions.push("veyra");state.affinity.veyra=1;
      StoryCalendar.begin(state,{activity:{id:"orbis_jardines"},dayCost:1});
    }
    if (innDay) StoryCalendar.begin(state, { activity: { id: "descanso_posada" }, dayCost: 1 });
    if (maleria) {
      state.acceso_orbis = true; state.veyra_conocida = true; state.veyra_bloqueada = false;
      state.aviso_willard_completado = true;
      state.completedScenes.push("interludio_willard", "c9_mercado");
      state.calendar.elapsed = 9; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
      StoryCalendar.begin(state, { activity: { id: "orbis_maleria" }, dayCost: 1 });
    }
    if (willard) {
      state.calendar.elapsed = 9;
      state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
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
      state.calendar.elapsed = 2; state.calendar.remaining = state.calendar.totalDays - state.calendar.elapsed;
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

function fitDialoguePanel() {
  if (dialoguePanel.hidden || gameScreen.hidden) return;
  dialogueText.style.removeProperty('font-size');
  const bounds = gameScreen.getBoundingClientRect();
  const available = bounds.height - 88 - (parseFloat(getComputedStyle(dialoguePanel).bottom) || 16);
  // Mantener el tamaño habitual siempre que quepa al ampliar el cuadro.
  // En pantallas especialmente bajas, ajustar solo lo necesario.
  let size = parseFloat(getComputedStyle(dialogueText).fontSize);
  while (dialoguePanel.offsetHeight > available && size > 14) {
    size -= .5;
    dialogueText.style.fontSize = `${size}px`;
  }
}
new ResizeObserver(fitDialoguePanel).observe(gameScreen);
document.fonts.ready.then(fitDialoguePanel);
const speaker = document.getElementById("speaker");
const choicesPanel = document.getElementById("choices-panel");
const sceneEnding = document.getElementById("scene-ending");
const sceneImages = [document.getElementById("scene-image-a"), document.getElementById("scene-image-b")];
const wallName = document.getElementById("wall-name");
const storyDocument = document.getElementById("story-document");
const storyEvent = document.getElementById("story-event");
const storyVideoPanel = document.getElementById("story-video-panel");
const storyVideo = document.getElementById("story-video");
let cancelStoryVideo = null;
storyVideoPanel.addEventListener("click", event => event.stopPropagation());
storyVideoPanel.addEventListener("keydown", event => {
  event.stopPropagation();
  event.preventDefault();
});
const eventImage = document.getElementById("event-image");
const pauseToCover = document.getElementById("pause-to-cover");
const combatAccessButton = document.getElementById("combat-access-button");
combatAccessButton.addEventListener("click", event => {
  event.stopPropagation();
  if (isGamePaused || eventRunning || dayTransitionRunning) return;
  CombatAccess.open();
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
  const combatTrial = document.createElement("button");
  combatTrial.type = "button";
  combatTrial.className = "text-button";
  combatTrial.textContent = "Tutorial de combate · Defensa del Faro";
  combatTrial.addEventListener("click", () => BattleDemo.open());
  chapterOptions.append(combatTrial);
  const castleCombat = document.createElement("button");
  castleCombat.type = "button";
  castleCombat.className = "text-button";
  castleCombat.textContent = "Combate · Defensa del castillo (aliados de tu partida)";
  castleCombat.addEventListener("click", () => CastleBattle.open());
  chapterOptions.append(castleCombat);
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
  incoming.classList.toggle("is-flashback", asset.treatment === "flashback");
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
    storyVideoPanel.hidden = true;
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
  combatAccessButton.hidden = !CombatAccess.available(gameState, node);
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
    document.getElementById("ending-heading").textContent = gameState.calendar.expired ? `El plazo de ${gameState.calendar.totalDays} días ha terminado.` : "Continuará";
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
      const mainStory = gameState.scene === "c4_actividades" && !!STORY_SCENES[option.destination]?.mainStory;
      button.classList.toggle("is-main-story", mainStory);
      button.classList.toggle("is-combat-choice", !!option.combat || !!option.combatBattle);
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
        if (cost || option.continueActivity || option.combat || option.costLabel) {
          const label = document.createElement("small");
          label.className = "activity-cost";
          label.textContent = option.costLabel || (option.combat ? ((cost || (option.continueActivity && option.dayCost)) ? `Combate · Consume ${cost || option.dayCost} día` : "Combate · no consume días") : cost ? `${mainStory ? "Trama principal · " : ""}Consume ${cost} día` : "Misma jornada · sin coste adicional");
          button.append(label);
        }
      }
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (isGamePaused || dayTransitionRunning) return;
        if (option.comingSoon) { window.alert("En construcción"); return; }
        if (option.cancelBattle) { StoryBattles.returnToActivities(); return; }
        if (option.combatBattle) { StoryBattles.open(option.combatBattle); return; }
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
    fitDialoguePanel();
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
    const afterVideo = StoryEngine.current(gameState, STORY_SCENES);
    if (node.style === "video" && afterVideo?.whiteAfterVideo) {
      // Cubrir el último fotograma antes de mostrar la narración guardable.
      dayTransition.hidden = false;
      dayTransition.style.opacity = "1";
      if (!reduced) {
        await dayTransition.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 1100, easing: "ease-in-out",
        }).finished.catch(() => {});
      }
      if (!active()) return;
      await showSceneImage(afterVideo.image, 0);
      if (!active()) return;
      storyVideoPanel.hidden = true;
      eventRunning = false;
      storyEvent.hidden = true;
      storyEvent.style.opacity = "0";
      renderScene();
      dayTransition.hidden = true;
      dayTransition.style.opacity = "0";
      gameScreen.focus({ preventScroll: true });
      return;
    }
    if (node.style === "video" && (reduced || gameState.calendar.expired ||
        renderedDay === null || gameState.calendar.elapsed <= renderedDay)) {
      // Sin animación, sustituir el último fotograma solo cuando el nuevo fondo esté listo.
      await showSceneImage(StoryEngine.current(gameState, STORY_SCENES)?.image, 0);
      if (!active()) return;
      storyVideoPanel.hidden = true;
    }
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
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      storyVideo.pause();
      storyVideo.onended = null;
      storyVideo.onerror = null;
      // Mantener el último fotograma hasta que el fundido blanco cubra la pantalla.
      cancelStoryVideo = null;
      resolve();
    };
    cancelStoryVideo = finish;
    storyVideoPanel.hidden = false;
    storyVideo.controls = false;
    storyVideo.muted = true;
    storyVideo.src = src;
    storyVideo.onended = finish;
    storyVideo.onerror = finish;
    storyVideo.play().catch(async () => {
      if (finished) return;
      // Algunos móviles solo permiten la reproducción automática sin sonido.
      storyVideo.muted = true;
      try { await storyVideo.play(); } catch { finish(); }
    });
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
    ? [...choicesPanel.querySelectorAll("button"), combatAccessButton, pauseToCover]
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
