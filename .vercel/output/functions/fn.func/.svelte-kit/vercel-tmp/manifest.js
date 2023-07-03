export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.25148ddb.js","app":"_app/immutable/entry/app.c467df02.js","imports":["_app/immutable/entry/start.25148ddb.js","_app/immutable/chunks/scheduler.4bf496c6.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.c467df02.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.4bf496c6.js","_app/immutable/chunks/index.541c4797.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
