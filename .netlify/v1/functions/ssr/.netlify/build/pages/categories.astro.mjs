import { s as sanityClient } from '../chunks/page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_QocpDe7W.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { $ as $$Footer } from '../chunks/Footer_ChPZRHq-.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const categories = await sanityClient.fetch(`*[_type == "category"]{
  title, 
  slug,
  "imageUrl": mainImage.asset->url
}`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-hioekb44": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-1" data-astro-cid-hioekb44> <div class="flex flex-col items-start gap-4 my-8" data-astro-cid-hioekb44> <h1 class="text-3xl text-slate-100" data-astro-cid-hioekb44>Categories</h1> <div class="cs-content" data-astro-cid-hioekb44> ${categories.map((c) => {
    return renderTemplate`<a${addAttribute(`/category/${c.slug.current}`, "href")} data-astro-cid-hioekb44> <div class="card flex flex-row gap-4 justify-between bg-white rounded-md" data-astro-cid-hioekb44> <img${addAttribute(urlFor(c.imageUrl).height(150).width(150).url(), "src")} alt="image" class="rounded-full m-2" data-astro-cid-hioekb44> <div class="text bg-white flex flex-col justify-start rounded-md mx-4 mt-4" data-astro-cid-hioekb44> <h2 class="text-xl" data-astro-cid-hioekb44>${c.title}</h2> </div> </div> </a>`;
  })} </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hioekb44": true })} ` })} `;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/categories.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
