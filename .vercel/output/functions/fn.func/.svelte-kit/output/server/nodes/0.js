import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.a5f6b21b.js","_app/immutable/chunks/scheduler.4bf496c6.js","_app/immutable/chunks/index.541c4797.js"];
export const stylesheets = ["_app/immutable/assets/0.6b97bb8a.css"];
export const fonts = [];
