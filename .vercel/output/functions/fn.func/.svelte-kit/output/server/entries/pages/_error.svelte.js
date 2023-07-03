import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const error_me = "/_app/immutable/assets/error_me.9aaa53be.webp";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="h-[80vh] flex justify-center items-center font-league-spartan relative overflow-hidden" style="text-wrap: balance"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[500px] font-black -z-10 text-[#2C303A] break-keep" data-svelte-h="svelte-tengo4">404</div> <div><div><img${add_attribute("src", error_me, 0)} alt="got something wrong?" class="h-80 m-auto mb-5"></div> <div class="text-4xl font-semibold text-center" data-svelte-h="svelte-umkxoi">This page is removed or Does not exist</div> <div class="text-center mt-10" data-svelte-h="svelte-ztmayy"><a href="/" class="px-10 py-5 border rounded-lg border-[#2C303A] hover:bg-[#2C303A]">🏠 Home</a></div></div></section>`;
});
export {
  Error as default
};
