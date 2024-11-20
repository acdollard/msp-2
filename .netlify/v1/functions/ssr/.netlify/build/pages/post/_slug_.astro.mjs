import '../../chunks/page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as loadQuery, $ as $$PortableText } from '../../chunks/PortableText_DPY-yehc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_QocpDe7W.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]`
  });
  return posts.map(({ slug }) => {
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
  const { data: post } = await loadQuery({
    query: `*[_type == "post" && slug.current == $slug][0]`,
    params
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>A post about ${post.title}</h1> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body })} ` })}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
