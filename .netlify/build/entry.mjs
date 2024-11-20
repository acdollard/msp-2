import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BiUsrXKX.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/studio/_---params_.astro.mjs');
const _page2 = () => import('./pages/categories.astro.mjs');
const _page3 = () => import('./pages/category/_slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/instrument/_slug_.astro.mjs');
const _page6 = () => import('./pages/post/_slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/categories.astro", _page2],
    ["src/pages/category/[slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/instrument/[slug].astro", _page5],
    ["src/pages/post/[slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f5de1021-13a6-4300-aefc-3da9390e5633"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
