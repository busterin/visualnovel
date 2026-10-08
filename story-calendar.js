"use strict";

// El calendario vive dentro del mismo estado guardado de la partida.
// Opciones: activity:{id, fromDay, throughDay, requiresFlags, excludesActivities,
// alliance:{id, companion, minAffinity, requiresFlags}}. destination inicia una
// actividad de 1 día por defecto. continueActivity enlaza la misma jornada.
// Nodos: endActivity cierra una jornada; startCountdown activa los 50 días.
const StoryCalendar = {
  create() { return { active:false, remaining:50, elapsed:0, sequence:0, activity:null, settled:[], completed:[], expired:false }; },
  activate(state) {
    if (!state.calendar.active) state.calendar = { ...this.create(), active:true };
  },
  cost(state, option) {
    if (!state.calendar.active || option.continueActivity) return 0;
    return option.activity || option.destination ? (option.dayCost ?? 1) : 0;
  },
  available(state, option) {
    const calendar=state.calendar, activity=option.activity;
    if (calendar.active && this.cost(state,option)>0 && (calendar.remaining<1 || calendar.activity)) return false;
    if (!activity) return true;
    const day=calendar.elapsed+1;
    if (activity.fromDay && day<activity.fromDay || activity.throughDay && day>activity.throughDay) return false;
    if ((activity.requiresFlags||[]).some(flag=>!state[flag])) return false;
    if ((activity.excludesActivities||[]).some(id=>calendar.completed.includes(id))) return false;
    const alliance=activity.alliance;
    if (alliance && ((state.affinity[alliance.companion]||0)<(alliance.minAffinity||0) ||
        !(alliance.requiresFlags||[]).length || alliance.requiresFlags.some(flag=>!state[flag]))) return false;
    return true;
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
      c.remaining=Math.max(0,c.remaining-a.cost);c.elapsed=50-c.remaining;
      c.settled.push(a.token);
      if (!c.completed.includes(a.id)) c.completed.push(a.id);
      if (a.alliance && a.alliance.requiresFlags.length && a.alliance.requiresFlags.every(flag=>state[flag])) {
        state.alliances[a.alliance.id]={companion:a.alliance.companion,day:c.elapsed,facts:[...a.alliance.requiresFlags]};
      }
      c.expired=c.remaining===0;
    }
    c.activity=null;
  },
};
