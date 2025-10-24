import { u as useAsyncData, _ as _sfc_main$1 } from './asyncData-BzKl5U8M.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute } from './server.mjs';
import './nuxt-link-CzzqBmMO.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => queryContent("/blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PostCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}><h1 class="text-3xl font-bold">Blog</h1><p class="mt-1 text-gray-600">Pensieri pratici e ironici sulla vita con il T1D.</p><div class="mt-6 grid gap-4"><!--[-->`);
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
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-By0dk5MU.mjs.map
