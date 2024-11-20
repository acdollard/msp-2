import '../chunks/page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_QocpDe7W.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DvjGetrG.mjs';
import { $ as $$Footer } from '../chunks/Footer_ChPZRHq-.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-uw5kdbxl> <div class="panel" data-astro-cid-uw5kdbxl> <h1 class="text-2xl my-4 flex justify-center" data-astro-cid-uw5kdbxl>Contact us</h1> <address data-astro-cid-uw5kdbxl> <ul data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl>Phone: 615-222-2222</li> <li data-astro-cid-uw5kdbxl>Email: email@mainstreetpercission.com</li> </ul> </address> </div> <div class="panel" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-uw5kdbxl": true })} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-uw5kdbxl": true })} ` })} `;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/contact.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
