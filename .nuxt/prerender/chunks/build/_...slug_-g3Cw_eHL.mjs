import { resolveComponent, mergeProps, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/h3/dist/index.mjs';
import 'file:///Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = resolveComponent("ContentDoc");
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose prose-zinc max-w-none prose-headings:scroll-mt-24" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-g3Cw_eHL.mjs.map
