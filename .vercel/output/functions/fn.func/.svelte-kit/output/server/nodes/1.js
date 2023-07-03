

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0d3edce7.js","_app/immutable/chunks/scheduler.4bf496c6.js","_app/immutable/chunks/index.541c4797.js"];
export const stylesheets = [];
export const fonts = [];
