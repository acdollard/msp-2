import '../../chunks/page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as loadQuery, $ as $$PortableText } from '../../chunks/PortableText_DPY-yehc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_QocpDe7W.mjs';
import { $ as $$Footer } from '../../chunks/Footer_ChPZRHq-.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: instruments } = await loadQuery({
    query: `*[_type == "instrument"]`
  });
  return instruments.map(({ slug }) => {
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
  const { data: instrument } = await loadQuery({
    query: `*[_type == "instrument" && slug.current == $slug][0]`,
    params
  });
  console.log(instrument);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-lleaxsgm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content flex flex-col justify-center items-center" data-astro-cid-lleaxsgm> <div class="instrument-card flex flex-col justify-center items-center" data-astro-cid-lleaxsgm> <h1 class="text-3xl font-bold my-4 flex justify-start items-start text-slate-100" data-astro-cid-lleaxsgm> ${instrument.title} </h1> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": instrument.body, "data-astro-cid-lleaxsgm": true })} <div class="card-text flex flex-col items-start text-slate-100" data-astro-cid-lleaxsgm> <div class="flex flex-row justify-start" data-astro-cid-lleaxsgm> <p class="font-bold" data-astro-cid-lleaxsgm>Daily Rate: &nbsp;</p> <p data-astro-cid-lleaxsgm>$${instrument.dailyRate}.00</p> </div> <div class="flex flex-row" data-astro-cid-lleaxsgm> <p class="font-bold" data-astro-cid-lleaxsgm>est. Weekly Rate: &nbsp;</p> <p data-astro-cid-lleaxsgm>$${instrument.estimatedWeeklyRate}.00</p> </div> <p data-astro-cid-lleaxsgm></p> </div> </div> <section class="contact-section" data-astro-cid-lleaxsgm> <div class="contact-intro" data-astro-cid-lleaxsgm> <h2 class="contact-title text-slate-100" data-astro-cid-lleaxsgm>
Inquire About This Instrument
</h2> <p class="contact-description text-slate-100" data-astro-cid-lleaxsgm>
Fill out the form below and we'll get back to you as soon as possible.
</p> </div> <form class="contact-form" action="https://api.web3forms.com/submit" method="POST" data-astro-cid-lleaxsgm> <input type="hidden" name="access_key" value="58177190-04ce-4344-a245-ad51baeecf68" data-astro-cid-lleaxsgm> <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" data-astro-cid-lleaxsgm> <input type="hidden" name="from_name" value="My Website" data-astro-cid-lleaxsgm> <!-- More custom ization options available in the docs: https://docs.web3forms.com --> <div class="form-group-container" data-astro-cid-lleaxsgm> <div class="form-group" data-astro-cid-lleaxsgm> <label for="name" class="form-label" data-astro-cid-lleaxsgm>Name</label> <input id="name" name="name" class="form-input" placeholder="Your name" type="text" data-astro-cid-lleaxsgm> </div> <div class="form-group" data-astro-cid-lleaxsgm> <label for="email" class="form-label" data-astro-cid-lleaxsgm>Email</label> <input id="email" name="email" class="form-input" placeholder="Your email" type="email" data-astro-cid-lleaxsgm> </div> <div class="form-group" data-astro-cid-lleaxsgm> <label for="phone" class="form-label" data-astro-cid-lleaxsgm>Phone</label> <input id="phone" name="phone" class="form-input" placeholder="+1 (234) 56789" type="text" data-astro-cid-lleaxsgm> </div> <div class="form-group" data-astro-cid-lleaxsgm> <label for="message" class="form-label" data-astro-cid-lleaxsgm>Message</label> <textarea class="form-textarea" id="message" name="message"${addAttribute(`Hi, I'm interested in renting the ${instrument.title}.`, "placeholder")} data-astro-cid-lleaxsgm></textarea> </div> </div> <button class="form-submit" type="submit" data-astro-cid-lleaxsgm>Send Message</button> </form> </section> </div> ` })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lleaxsgm": true })} `;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/instrument/[slug].astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/pages/instrument/[slug].astro";
const $$url = "/instrument/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
