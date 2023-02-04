if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "app-header",
    setup(__props) {
      const titleInfo = vue.reactive({
        leftContent: "\u5DE6\u4FA7",
        rightContent: "\u53F3\u4FA7",
        title: "\u6807\u9898"
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "app-header" }, [
          vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u65F6\uFF0C\u9876\u90E8\u4F1A\u9677\u5165\u5230\u72B6\u6001\u680F\uFF0C\u7528\u4E00\u4E2A\u7A7A\u7684\u5143\u7D20\u5360\u4F4D\uFF0Chttps://uniapp.dcloud.net.cn/collocation/pages.html#customnav "),
          vue.createElementVNode("view", { class: "status-bar" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(titleInfo.leftContent), 1)
            ]),
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(titleInfo.title), 1)
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(titleInfo.rightContent), 1)
            ])
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7429e111"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/app-header.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "app-bar" }, " app-bar ");
  }
  const AppBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-0182d41e"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/app-bar.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createVNode(AppHeader),
          vue.createElementVNode("view", { class: "app-content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          vue.createVNode(AppBar)
        ]);
      };
    }
  });
  const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-aad600b3"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/index.vue"]]);
  const _sfc_main$1 = {
    components: {
      Layout
    },
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_layout = vue.resolveComponent("layout");
    return vue.openBlock(), vue.createBlock(_component_layout, null, {
      default: vue.withCtx(() => [
        vue.createElementVNode("text", null, "custom content"),
        vue.createElementVNode("view", { class: "empty" }),
        vue.createElementVNode("text", null, "custom content")
      ]),
      _: 1
    });
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
