import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const logo = "data:image/png;base64,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";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="font-league-spartan relative h-24 flex items-center px-5"><div class="w-fit h-fit mr-8" data-svelte-h="svelte-axy7x1"><a href="/" class="hover:drop-shadow-[0px_0px_3px_#E54EFE]">Home</a></div> <div class="w-fit h-fit" data-svelte-h="svelte-1uta9p5"><a href="https://harshvish.vercel.app/" target="_blank" class="hover:drop-shadow-[0px_0px_3px_#E54EFE]">About me</a></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img alt="logo"${add_attribute("src", logo, 0)} class="scale-50"></div></div>`;
});
const naruto = "/_app/immutable/assets/naruto.1984efaa.png";
const quotation_bottom = "/_app/immutable/assets/quotation_bottom.c49b1075.png";
const quotation_top = "/_app/immutable/assets/quotation_top.36b89d6b.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-10 relative -z-50 h-96 mt-36 flex justify-center items-center" style="text-wrap: balance"><div class="font-blod text-4xl w-[600px] text-center quote leading-snug my-10" data-svelte-h="svelte-r070oc">If you don&#39;t like your destiny, don&#39;t accept it. Instead have the courage to change it the way
		you want it to be.</div> <img${add_attribute("src", naruto, 0)} class="absolute -bottom-10 -left-10 h-60" alt="naruto anime"> <img${add_attribute("src", quotation_bottom, 0)} class="absolute md:-bottom-10 -bottom-12 right-0 h-20" alt="quotation"> <img${add_attribute("src", quotation_top, 0)} class="absolute md:-top-10 -top-12 left-0 h-20" alt="quotation"></div>`;
});
const transition_svelte_svelte_type_style_lang = "";
const css = {
  code: ".transition.svelte-vcdv4c{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<div class="transition svelte-vcdv4c">${slots.default ? slots.default({}) : ``}</div>`;
});
const blog = "";
async function load({ url }) {
  return { url: url.pathname };
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  return `<head data-svelte-h="svelte-figsmz"><title>Harsh ✌🏽 / Blogs</title></head> <div class="mx-auto md:px-8 px-0" style="width: 100%; max-width:83.5rem">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main>${validate_component(Transition, "PageTransition").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
