import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, b as createAstro } from './astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { s as sanityClient } from './page-ssr_BFQKSPxn.mjs';
/* empty css                              */

const $$TopNav = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await sanityClient.fetch(`*[_type == "category"]{
        _id,
        title,
        slug,
        "instruments": *[_type == "instrument" && references(^._id)]{
          _id,
          title,
          slug,
        }
      }`);
  return renderTemplate`${maybeRenderHead()}<section class="nav-section" data-astro-cid-ugcunkw7> <nav class="relative mx-8 h-24 flex justify-between items-center bg-white" data-astro-cid-ugcunkw7> <a class="text-2xl font-light leading-none" href="/" data-astro-cid-ugcunkw7>
Main Street Percussion
</a> <div class="lg:hidden" data-astro-cid-ugcunkw7> <button class="navbar-burger flex items-center text-gray-600 p-3" data-astro-cid-ugcunkw7> <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ugcunkw7> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" data-astro-cid-ugcunkw7></path> </svg> </button> </div> <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6" data-astro-cid-ugcunkw7> <li data-astro-cid-ugcunkw7> <a class="text-lg text-gray-800 hover:text-gray-500" href="/" data-astro-cid-ugcunkw7>Home</a> </li> <li class="nav-item dropdown" data-astro-cid-ugcunkw7> <a class="text-lg text-gray-800 hover:text-gray-500 dropdown-toggle" href="/categories" data-astro-cid-ugcunkw7>Categories</a> <ul class="dropdown-menu" data-astro-cid-ugcunkw7> ${categories.map((c) => {
    return renderTemplate`<li class="hover:text-gray-500" data-astro-cid-ugcunkw7> <a${addAttribute(`/category/${c.slug.current}`, "href")} data-astro-cid-ugcunkw7>${c.title}</a> </li>`;
  })} </ul> </li> <li data-astro-cid-ugcunkw7> <a class="nav-item text-lg text-gray-800 hover:text-gray-500" href="/contact" data-astro-cid-ugcunkw7>Contact</a> </li> </ul> </nav> <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" data-astro-cid-ugcunkw7> <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" data-astro-cid-ugcunkw7></div> <nav class="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto" data-astro-cid-ugcunkw7> <div class="flex items-center mb-8" data-astro-cid-ugcunkw7> <a class="mr-auto text-2xl font-light leading-none" href="/" data-astro-cid-ugcunkw7>
Main Street Percussion
</a> <button class="navbar-close" data-astro-cid-ugcunkw7> <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ugcunkw7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ugcunkw7></path> </svg> </button> </div> <div data-astro-cid-ugcunkw7> <ul data-astro-cid-ugcunkw7> <li class="mb-1" data-astro-cid-ugcunkw7> <a class="block p-4 text-lg font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="/" data-astro-cid-ugcunkw7>Home</a> </li> <li class="mb-1" data-astro-cid-ugcunkw7> <a class="block p-4 text-lg font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="/categories" data-astro-cid-ugcunkw7>Categories</a> </li> <li class="mb-1" data-astro-cid-ugcunkw7> <a class="block p-4 text-lg font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="/contact" data-astro-cid-ugcunkw7>Contact</a> </li> </ul> </div> </nav> </div> </section>  `;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/components/TopNav.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Main Street Percussion</title>${renderHead()}</head> <body class=""> ${renderComponent($$result, "TopNav", $$TopNav, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
