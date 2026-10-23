"use strict";

// El calendario vive dentro del mismo estado guardado de la partida.
// Opciones: activity:{id, fromDay, throughDay, requiresFlags, excludesActivities,
// alliance:{id, companion, minAffinity, requiresFlags}}. destination inicia una
// actividad de 1 día por defecto. continueActivity enlaza la misma jornada.
// Nodos: endActivity cierra una jornada; startCountdown activa el plazo de la partida.
const StoryCalendar = {
  TOTAL_DAYS: 30,
  MIN_ALLIANCE_AFFINITY: 5,
  create() { return { totalDays:this.TOTAL_DAYS, active:false, remaining:this.TOTAL_DAYS, elapsed:0, sequence:0, activity:null, settled:[], completed:[], completedDays:{}, expired:false }; },
  restore(saved) {
    const calendar = { ...this.create(), ...(saved || {}) };
    if (saved?.totalDays !== this.TOTAL_DAYS) {
      const elapsed = Number.isSafeInteger(saved?.elapsed) ? Math.max(0, saved.elapsed)
        : Math.max(0, 50 - (saved?.remaining ?? 50));
      calendar.totalDays = this.TOTAL_DAYS;
      calendar.elapsed = calendar.active ? Math.min(elapsed, this.TOTAL_DAYS - 1) : 0;
      calendar.remaining = this.TOTAL_DAYS - calendar.elapsed;
      calendar.expired = false;
      if (calendar.active && elapsed >= this.TOTAL_DAYS) calendar.legacyElapsed = elapsed;
    }
    calendar.completedDays = { ...(saved?.completedDays || {}) };
    // Los guardados anteriores no registraban fechas: empezar la espera al cargarlos.
    if (!saved?.completedDays) {
      for (const id of calendar.completed) calendar.completedDays[id] = calendar.elapsed;
    }
    return calendar;
  },
  activate(state) {
    if (!state.calendar.active) state.calendar = { ...this.create(), active:true };
  },
  cost(state, option) {
    if (!state.calendar.active || option.continueActivity) return 0;
    return option.activity || option.destination ? (option.dayCost ?? 1) : 0;
  },
  available(state, option) {
    if (option.romanceWith === "veyra" && (state.affinity.veyra || 0) < 8) return false;
    if (option.romanceWith && (state[`${option.romanceWith}_romance_cerrado`] ||
        Object.keys(state).some(key => key.endsWith('_relacion') && key !== `${option.romanceWith}_relacion` && state[key] === 'pareja'))) return false;
    const calendar=state.calendar, activity=option.activity;
    if (calendar.active && this.cost(state,option)>0 && (calendar.remaining<1 || calendar.activity)) return false;
    if (!activity) return true;
    if (!this.relativeDateReached(calendar, activity.afterActivity)) return false;
    const day=calendar.elapsed+1;
    if (activity.fromDay && day<activity.fromDay || activity.throughDay && day>activity.throughDay) return false;
    if ((activity.requiresFlags||[]).some(flag=>!state[flag])) return false;
    if (activity.requiresAnyFlags?.length && !activity.requiresAnyFlags.some(flag=>state[flag])) return false;
    if ((activity.excludesFlags||[]).some(flag=>state[flag])) return false;
    if ((activity.excludesActivities||[]).some(id=>calendar.completed.includes(id))) return false;
    const alliance=activity.alliance;
    if (alliance && ((state.affinity[alliance.companion]||0)<Math.max(this.MIN_ALLIANCE_AFFINITY, alliance.minAffinity||0) ||
        !(alliance.requiresFlags||[]).length || alliance.requiresFlags.some(flag=>!state[flag]))) return false;
    return true;
  },
  relativeDateReached(calendar, requirement) {
    if (!requirement) return true;
    const completedDay = calendar.completedDays?.[requirement.id];
    return Number.isSafeInteger(completedDay) && calendar.elapsed + 1 >= completedDay + requirement.days;
  },
  dueActivity(state, scenes) {
    const c = state.calendar;
    if (!c.active || c.expired || c.activity) return null;
    return (scenes.c4_actividades?.scheduledActivities || []).slice().sort((a,b) => a.day-b.day).find(item =>
      c.elapsed + 1 >= item.day &&
      !state[item.hideIfFlag] &&
      this.relativeDateReached(c, item.afterActivity) &&
      !state.completedScenes.includes(item.scene) &&
      (item.requiresFlags || []).every(flag => state[flag]) &&
      (item.requiredScenes || []).every(id => state.completedScenes.includes(id))) || null;
  },
  begin(state, option) {
    if (!this.available(state,option)) return false;
    const cost=this.cost(state,option);
    if (cost) {
      const token=++state.calendar.sequence;
      state.calendar.activity={token,id:option.activity?.id||option.destination,cost,
        alliance:option.activity?.alliance||null};
    }
    return true;
  },
  finish(state) {
    const c=state.calendar,a=c.activity;
    if (!a) return;
    if (!c.settled.includes(a.token)) {
      c.remaining=Math.max(0,c.remaining-a.cost);c.elapsed=c.totalDays-c.remaining;
      c.settled.push(a.token);
      if (!c.completed.includes(a.id)) c.completed.push(a.id);
      c.completedDays ||= {};
      c.completedDays[a.id] ??= c.elapsed;
      if (a.alliance && (state.affinity[a.alliance.companion] || 0) >= Math.max(this.MIN_ALLIANCE_AFFINITY, a.alliance.minAffinity || 0) && a.alliance.requiresFlags.length && a.alliance.requiresFlags.every(flag=>state[flag])) {
        state.alliances[a.alliance.id]={companion:a.alliance.companion,day:c.elapsed,facts:[...a.alliance.requiresFlags]};
      }
      c.expired=c.remaining===0;
    }
    c.activity=null;
  },
};
