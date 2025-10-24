import { _ as __nuxt_component_0$1 } from './nuxt-link-CzzqBmMO.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs';
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-graywarm/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50" }, _attrs))}><div class="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-xl font-bold tracking-tight"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`T1Diario`);
      } else {
        return [
          createTextVNode("T1Diario")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="flex items-center gap-4 text-sm">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/chi-sono",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Chi sono`);
      } else {
        return [
          createTextVNode("Chi sono")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderNav = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-panna text-ink antialiased" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`<main class="mx-auto max-w-3xl px-6 py-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="mt-16 border-t border-graywarm/70"><div class="mx-auto max-w-3xl px-6 py-10 text-sm text-gray-600"><p class="mb-2 font-medium">T1Diario \u2014 Diari di vita con il diabete di tipo 1</p><p>Questo blog racconta esperienze personali, non offre consigli medici.</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CkIR4dPD.mjs.map
