import { computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderVNode } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { withLeadingSlash, withTrailingSlash, joinURL } from 'file:///Users/stefano/Progetti/t1diario/node_modules/ufo/dist/index.mjs';
import { d as useRuntimeConfig } from './server.mjs';
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

const ImageComponent = "img";
const _sfc_main = {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
        src: unref(refinedSrc),
        alt: props.alt,
        width: props.width,
        height: props.height
      }, _attrs), null), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseImg-Dj5JR0yT.mjs.map
