import { s as sanityClient } from '../../chunks/page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as loadQuery, $ as $$PortableText } from '../../chunks/PortableText_DPY-yehc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_QocpDe7W.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: category } = await loadQuery({
    query: `*[_type == "category"]`
  });
  return category.map(({ slug }) => {
    return {
      params: {
        slug: slug.current
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { params } = Astro2;
  const { data: category } = await loadQuery(
    {
      query: `*[_type == "category" && slug.current == $slug][0]`,
      params
    }
  );
  const instruments = await sanityClient.fetch(
    `*[_type == "instrument" && references(*[_type == "category" && lower(title) == "${category.title}"]._id)]`
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-xvtl5w7w": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="containerr" data-astro-cid-xvtl5w7w> <h1 class="text-2xl flex justify-center pt-6" data-astro-cid-xvtl5w7w>
All
${category.title} </h1> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": category.body, "data-astro-cid-xvtl5w7w": true })} <div class="instrument-list grid grid-rows-1 text-sm md:text-base" data-astro-cid-xvtl5w7w> <div class="row flex flex-row justify-between mb-4" data-astro-cid-xvtl5w7w> <p class="font-bold mx-4" data-astro-cid-xvtl5w7w>Name</p> <div class="prices flex flex-row" data-astro-cid-xvtl5w7w> <p class="flex justify-end font-bold min-w-44" data-astro-cid-xvtl5w7w>Daily Rate</p> <p class="flex justify-end font-bold min-w-44 text-right mx-4" data-astro-cid-xvtl5w7w>
est. Weekly Rate
</p> </div> </div> ${instruments.map(
    (i) => renderTemplate`<div class="row flex flex-row justify-between items-center h-12 rounded:md hover:bg-green-500" data-astro-cid-xvtl5w7w> <a${addAttribute(`/instrument/${i.slug.current}`, "href")} class="px-4" data-astro-cid-xvtl5w7w> ${i.title} </a> <div class="prices flex flex-row " data-astro-cid-xvtl5w7w> <p class="min-w-44 flex justify-end text-sm md:text-base" data-astro-cid-xvtl5w7w>${`$${i.dailyRate}.00`}</p> <p class="min-w-44 flex justify-end text-sm md:text-base mx-4" data-astro-cid-xvtl5w7w> ${`$${i.estimatedWeeklyRate}.00`} </p> </div> </div>`
  )} </div> </div> ` })} `;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/category/[slug].astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/category/[slug].astro";
const $$url = "/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
