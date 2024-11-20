import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead } from './astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div> <form method="POST" id="form" class="flex flex-col bg-transparent gap-1 mx-auto px-8 pt-4 rounded-md"> <input type="hidden" name="access_key"', '> <label for="name" class="text-slate-100 text-lg md:text-2xl pl-2">Name</label> <input type="text" name="name" required class="mb-2 mx-2 rounded-md p-1"> <label for="email" class="text-slate-100 text-lg md:text-2xl pl-2">Email</label> <input type="email" name="email" required class="mb-2 mx-2 rounded-md p-1"> <label for="message" class="text-slate-100 text-lg md:text-2xl pl-2">Message</label> <textarea name="message" required class="mb-2 mx-2 rounded-md p-4"></textarea> <button type="submit" class="mt-6 text-lg text-slate-100 border-2 border-slate-100 px-4 py-2 flex justify-center align-center hover:bg-slate-100 hover:text-slate-900 hover:transition-all ease-in">SUBMIT</button> <div id="result" class="text-slate-900 pl-2"></div> </form> </div> <script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    const formData = new FormData(form);\n    e.preventDefault();\n\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Please wait...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.innerHTML = json.message;\n        } else {\n          console.log(response);\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 3000);\n      });\n  });\n</script>'])), maybeRenderHead(), addAttribute(undefined                               , "value"));
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };
