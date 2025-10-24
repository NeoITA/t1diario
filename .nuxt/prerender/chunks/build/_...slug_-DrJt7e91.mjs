import { defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, computed, resolveComponent, mergeProps, ref, watch, useSSRContext } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/stefano/Progetti/t1diario/node_modules/vue/server-renderer/index.mjs';
import { d as useRuntimeConfig } from './server.mjs';
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

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GiscusComments",
  __ssrInlineRender: true,
  setup(__props) {
    const container = ref(null);
    const giscusConfig = computed(() => {
      var _a;
      return ((_a = useRuntimeConfig().public) == null ? void 0 : _a.giscus) || {};
    });
    const isConfigured = computed(
      () => Boolean(
        giscusConfig.value.repo && giscusConfig.value.repoId && giscusConfig.value.category && giscusConfig.value.categoryId
      )
    );
    const injectGiscus = () => {
      if (!container.value) {
        return;
      }
      container.value.innerHTML = "";
      const script = (void 0).createElement("script");
      script.setAttribute("src", "https://giscus.app/client.js");
      script.setAttribute("data-repo", giscusConfig.value.repo);
      script.setAttribute("data-repo-id", giscusConfig.value.repoId);
      script.setAttribute("data-category", giscusConfig.value.category);
      script.setAttribute("data-category-id", giscusConfig.value.categoryId);
      script.setAttribute("data-mapping", giscusConfig.value.mapping || "pathname");
      script.setAttribute("data-strict", giscusConfig.value.strict || "0");
      script.setAttribute("data-reactions-enabled", giscusConfig.value.reactions || "1");
      script.setAttribute("data-emit-metadata", giscusConfig.value.emitMetadata || "0");
      script.setAttribute("data-input-position", giscusConfig.value.inputPosition || "bottom");
      script.setAttribute("data-theme", giscusConfig.value.theme || "light");
      script.setAttribute("data-lang", giscusConfig.value.lang || "it");
      script.setAttribute("data-loading", giscusConfig.value.loading || "lazy");
      script.setAttribute("crossorigin", "anonymous");
      script.setAttribute("async", "true");
      container.value.appendChild(script);
    };
    watch(isConfigured, (enabled) => {
      if (enabled) {
        injectGiscus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GiscusComments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const giscusEnabled = computed(() => {
      var _a;
      const giscus = ((_a = useRuntimeConfig().public) == null ? void 0 : _a.giscus) || {};
      return Boolean(giscus.repo && giscus.repoId && giscus.category && giscus.categoryId);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = resolveComponent("ContentDoc");
      const _component_GiscusComments = _sfc_main$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose prose-zinc max-w-none prose-headings:scroll-mt-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      if (giscusEnabled.value) {
        _push(ssrRenderComponent(_component_GiscusComments, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DrJt7e91.mjs.map
