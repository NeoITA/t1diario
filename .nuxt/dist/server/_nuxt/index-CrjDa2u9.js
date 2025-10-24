import { u as useAsyncData, _ as _sfc_main$1 } from "./asyncData-DDOAft9H.js";
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute } from "../server.mjs";
import "./nuxt-link-CzzqBmMO.js";
import "/Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/stefano/Progetti/t1diario/node_modules/unctx/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/stefano/Progetti/t1diario/node_modules/radix3/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/defu/dist/defu.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CrjDa2u9.js.map
