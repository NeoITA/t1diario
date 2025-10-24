import { _ as __nuxt_component_0 } from './nuxt-link-CzzqBmMO.mjs';
import { u as useAsyncData, _ as _sfc_main$2 } from './asyncData-BzKl5U8M.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/h3/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/destr/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/hookable/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ohash/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/klona/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/defu/dist/defu.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/scule/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/unctx/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/pathe/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/@nuxt/content/node_modules/pathe/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "newsletter",
    class: "mt-10 rounded-2xl border border-graywarm bg-white p-5"
  }, _attrs))}><h3 class="text-lg font-semibold">Newsletter quindicinale</h3><p class="mt-1 text-gray-600">Zero spam, un riassunto e un\u2019idea in pi\xF9 sulla gestione quotidiana.</p><form class="mt-4 flex gap-2"><input type="email" required placeholder="la-tua@email" class="w-full rounded-xl border border-graywarm px-3 py-2 outline-none focus:ring-2 focus:ring-aqua/60"><button type="submit" class="rounded-xl bg-aqua px-4 py-2 font-medium text-ink">Iscriviti</button></form><p class="mt-2 text-xs text-gray-500">Suggerimento: integra un provider come Buttondown, Substack o Brevo.</p></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsletterCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home-posts",
      () => queryContent("/blog").sort({ date: -1 }).limit(8).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PostCard = _sfc_main$2;
      const _component_NewsletterCta = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-6" }, _attrs))}><h1 class="text-4xl font-bold tracking-tight">T1Diario</h1><p class="mt-2 text-lg text-gray-600">Diari di vita con il diabete di tipo 1</p><div class="mt-6 flex gap-3"><a href="#newsletter" class="rounded-2xl px-4 py-2 bg-aqua text-ink font-medium">Iscriviti</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "rounded-2xl px-4 py-2 border border-graywarm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ultimi post`);
          } else {
            return [
              createTextVNode("Ultimi post")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 grid gap-4"><!--[-->`);
      ssrRenderList(unref(posts), (p) => {
        _push(ssrRenderComponent(_component_PostCard, {
          key: p._path,
          title: p.title,
          description: p.description,
          to: p._path,
          date: p.date,
          tags: p.tags
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NewsletterCta, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYKT0Rkj.mjs.map
