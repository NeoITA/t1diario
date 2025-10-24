import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/stefano/Progetti/t1diario/node_modules/hookable/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/unctx/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/stefano/Progetti/t1diario/node_modules/radix3/dist/index.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/defu/dist/defu.mjs";
import "/Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = resolveComponent("ContentDoc");
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose prose-zinc max-w-none" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, { path: "/chi-sono" }, null, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chi-sono.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chiSono = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  chiSono as default
};
//# sourceMappingURL=chi-sono-e24RI4Sv.js.map
