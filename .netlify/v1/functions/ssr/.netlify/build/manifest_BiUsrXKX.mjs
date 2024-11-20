import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_Wf6vOkdf.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alexanderdollard/Development/Astro%20sites/main-street-percussion-2/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdYNti-z.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n.hero-1[data-astro-cid-hioekb44]{display:flex;justify-content:center;background-color:#14593abf;height:100vh}.cs-container[data-astro-cid-hioekb44]{width:100%;max-width:80rem;margin:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:start;gap:3rem}.cs-content[data-astro-cid-hioekb44]{width:100%;display:grid;grid-template-columns:auto auto;gap:15px}@media only screen and (max-width: 750px){.cs-content[data-astro-cid-hioekb44]{width:100%;display:grid;grid-template-columns:auto auto;gap:15px;grid-template-columns:auto}}.card[data-astro-cid-hioekb44]{width:380px;height:180px}.card[data-astro-cid-hioekb44]:hover{transform:scale(1.03);border:1px solid var(--nscDarkGrey)}\n"}],"routeData":{"route":"/categories","isIndex":false,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories.astro","pathname":"/categories","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdYNti-z.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".containerr[data-astro-cid-xvtl5w7w]{background-color:#14593abf;height:100vh;width:100%;color:#f9f9f9}.instrument-list[data-astro-cid-xvtl5w7w]{margin:3rem 6rem}h1[data-astro-cid-xvtl5w7w]{font-size:2rem}\n.nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n"}],"routeData":{"route":"/category/[slug]","isIndex":false,"type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/category/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdYNti-z.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n@media only screen and (min-width: 0rem){section[data-astro-cid-uw5kdbxl]{height:100vh;background-color:#14593abf;display:flex;flex-direction:column;align-items:center;justify-content:start;padding-top:4rem;color:#d9d9d9}h1[data-astro-cid-uw5kdbxl]{font-size:2.2rem}.panel[data-astro-cid-uw5kdbxl]{width:90%}li[data-astro-cid-uw5kdbxl]{font-size:1.5rem;padding:.5rem 2.2rem}}@media only screen and (min-width: 37rem){section[data-astro-cid-uw5kdbxl]{display:flex}.panel[data-astro-cid-uw5kdbxl]{width:70%}}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdYNti-z.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".page-content[data-astro-cid-lleaxsgm]{background-color:#14593abf}.contact-section[data-astro-cid-lleaxsgm]{width:100%;max-width:40rem;margin-left:auto;margin-right:auto;padding:3rem 1rem}.contact-intro[data-astro-cid-lleaxsgm]>[data-astro-cid-lleaxsgm]+[data-astro-cid-lleaxsgm]{margin-top:1rem}.contact-title[data-astro-cid-lleaxsgm]{font-size:1.875rem;line-height:2.25rem;font-weight:700}.form-group-container[data-astro-cid-lleaxsgm]{display:grid;gap:1rem;margin-top:2rem}.form-group[data-astro-cid-lleaxsgm]{display:flex;flex-direction:column}.form-label[data-astro-cid-lleaxsgm]{margin-bottom:.5rem}.form-input[data-astro-cid-lleaxsgm],.form-textarea[data-astro-cid-lleaxsgm]{padding:.5rem;border:1px solid #e5e7eb;display:flex;height:2.5rem;width:100%;border-radius:.375rem;font-size:.875rem;line-height:1.25rem}.form-input[data-astro-cid-lleaxsgm]::-moz-placeholder{color:#6b7280}.form-input[data-astro-cid-lleaxsgm]::placeholder,.form-textarea[data-astro-cid-lleaxsgm]:focus-visible{color:#6b7280}.form-input[data-astro-cid-lleaxsgm]:focus-visible,.form-textarea[data-astro-cid-lleaxsgm]:focus-visible{outline:2px solid #2563eb;outline-offset:2px}.form-textarea[data-astro-cid-lleaxsgm]{min-height:120px}.form-submit[data-astro-cid-lleaxsgm]{width:100%;margin-top:1.2rem;background-color:#3124ca;color:#fff;padding:13px 5px;border-radius:.375rem}\n.nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n"}],"routeData":{"route":"/instrument/[slug]","isIndex":false,"type":"page","pattern":"^\\/instrument\\/([^/]+?)\\/?$","segments":[[{"content":"instrument","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/instrument/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdYNti-z.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C9Oj14wY.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.BGLwnGeK.css"},{"type":"inline","content":".nav-item[data-astro-cid-ugcunkw7]{position:relative;height:6rem}.dropdown[data-astro-cid-ugcunkw7]{display:flex;justify-content:center;align-items:center}.dropdown-menu[data-astro-cid-ugcunkw7]{display:none;position:absolute;top:100%;right:0}.dropdown-menu[data-astro-cid-ugcunkw7]>li[data-astro-cid-ugcunkw7] a[data-astro-cid-ugcunkw7]{display:block;background-color:#fff;padding:.5rem 1rem;min-width:16rem}.dropdown[data-astro-cid-ugcunkw7]:hover .dropdown-menu[data-astro-cid-ugcunkw7]{display:inline-block}\n@media only screen and (min-width: 0rem){.section-1[data-astro-cid-j7pv25f6]{height:100vh;color:#d9d9d9;background:linear-gradient(#14593abf,#176542bf);display:flex;flex-direction:column;justify-content:center;align-items:center}.section-2[data-astro-cid-j7pv25f6]{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}.section-3[data-astro-cid-j7pv25f6]{background-color:#14593abf;display:flex;justify-content:center;align-items:center}.container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:80vh}.panel[data-astro-cid-j7pv25f6]{background-size:cover;background-position:center;background-repeat:no-repeat;height:30vh;width:90vw;border-radius:50px;color:#d9d9d9;margin:10px;position:relative;transition:flex .3s ease-in;flex:.5}.panel[data-astro-cid-j7pv25f6]:hover{transform:scale(1.01)}.panel[data-astro-cid-j7pv25f6].active{flex:5}.panel[data-astro-cid-j7pv25f6] h3[data-astro-cid-j7pv25f6]{font-size:2rem;position:absolute;bottom:40px;left:0;padding-left:20px;padding-top:5px;padding-bottom:5px;opacity:0}.panel[data-astro-cid-j7pv25f6].active h3[data-astro-cid-j7pv25f6]{opacity:1;transition:opacity .3s ease-in .3s;cursor:pointer}.panel[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{pointer-events:none}.panel[data-astro-cid-j7pv25f6].active a[data-astro-cid-j7pv25f6]{pointer-events:auto}h1[data-astro-cid-j7pv25f6]{font-size:3rem;font-weight:700}h2[data-astro-cid-j7pv25f6]{margin:2rem;font-size:2.53rem}p[data-astro-cid-j7pv25f6]{font-size:1.5rem;letter-spacing:.05em;font-weight:400}}@media only screen and (min-width: 37rem){.section-1[data-astro-cid-j7pv25f6]{height:80vh}.section-2[data-astro-cid-j7pv25f6]{margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh}.container[data-astro-cid-j7pv25f6]{flex-direction:row;align-items:center;justify-content:center;width:100%;padding:0 5rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/categories.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/category/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/instrument/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/categories@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/category/[slug]@_@astro":"pages/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/instrument/[slug]@_@astro":"pages/instrument/_slug_.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BiUsrXKX.mjs","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.C9Oj14wY.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.g79-VL6I.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CdA6hfj3.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CSySTEJb.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BT_CwUCm.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Cj3EWI93.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.BNVIIrGC.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.D51PwfHB.js","@astrojs/react/client.js":"_astro/client.DAVXiJi4.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.Dku2F_3G.js","@astrojs/vue/client.js":"_astro/client.BHVC3W3U.js","/astro/hoisted.js?q=1":"_astro/hoisted.CdYNti-z.js","/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DHJB5E3v.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/studio-route.BGLwnGeK.css","/favicon.svg","/_astro/ViteDevServerStopped.CSySTEJb.js","/_astro/browser.7KqZ-Os9.js","/_astro/client.BHVC3W3U.js","/_astro/client.CF8elnFF.js","/_astro/client.DAVXiJi4.js","/_astro/hoisted.C9Oj14wY.js","/_astro/hoisted.CdYNti-z.js","/_astro/index.BNVIIrGC.js","/_astro/index2.D51PwfHB.js","/_astro/index3.Dku2F_3G.js","/_astro/resources.g79-VL6I.js","/_astro/resources2.CdA6hfj3.js","/_astro/resources3.Cj3EWI93.js","/_astro/stegaEncodeSourceMap.BT_CwUCm.js","/_astro/studio-component.DHJB5E3v.js","/_astro/studio-component.aZSJDPGN.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"vEq4M8K0St2ZFXdkPUHwYhAREoElsAsvlIL//23VeXU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
