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
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "app-header" }, [
      vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u65F6\uFF0C\u9876\u90E8\u4F1A\u9677\u5165\u5230\u72B6\u6001\u680F\uFF0C\u7528\u4E00\u4E2A\u7A7A\u7684\u5143\u7D20\u5360\u4F4D\uFF0Chttps://uniapp.dcloud.net.cn/collocation/pages.html#customnav "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
        ]),
        vue.createElementVNode("view", { class: "title" }, [
          vue.renderSlot(_ctx.$slots, "title", {}, void 0, true)
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ])
    ]);
  }
  const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__scopeId", "data-v-7429e111"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/app-header.vue"]]);
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "app-bar",
    props: {
      onSwitch: { type: Function, required: false }
    },
    setup(__props) {
      const props = __props;
      const menus = [
        {
          text: "\u804A\u5929",
          icon: "chat",
          key: "chat"
        },
        {
          text: "\u901A\u8BAF\u5F55",
          icon: "pepole",
          key: "contacts"
        },
        {
          text: "\u6211\u7684",
          icon: "me",
          key: "mine"
        }
      ];
      const switchTo = (key) => {
        var _a;
        (_a = props.onSwitch) == null ? void 0 : _a.call(props, key);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "app-bar" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(menus, (menu) => {
            return vue.createElementVNode("view", {
              class: "menu-item",
              key: menu.key,
              onClick: ($event) => switchTo(menu.key)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(["icon", "iconfont", `icon-${menu.icon}`])
                }, null, 2)
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", null, vue.toDisplayString(menu.text), 1)
              ])
            ], 8, ["onClick"]);
          }), 64))
        ]);
      };
    }
  });
  const AppBar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0182d41e"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/app-bar.vue"]]);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      onSwitch: { type: Function, required: false }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createVNode(AppHeader, null, {
            left: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
            ]),
            title: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "title", {}, void 0, true)
            ]),
            right: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
            ]),
            _: 3
          }),
          vue.createElementVNode("view", { class: "app-content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          vue.createVNode(AppBar, {
            "on-switch": props.onSwitch
          }, null, 8, ["on-switch"])
        ]);
      };
    }
  });
  const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-aad600b3"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/index.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " chat ");
  }
  const Chat = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/chat/chat.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " contacts ");
  }
  const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/contacts/contacts.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " mine ");
  }
  const Mine = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/mine/mine.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      let currentComponent = vue.ref("chat");
      const switchComponent = (componentName) => {
        currentComponent.value = componentName;
        formatAppLog("log", "at pages/index/index.vue:34", currentComponent.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Layout, { "on-switch": switchComponent }, {
          left: vue.withCtx(() => [
            vue.createElementVNode("text", null, "left")
          ]),
          title: vue.withCtx(() => [
            vue.createElementVNode("text", null, "\u6807\u9898")
          ]),
          right: vue.withCtx(() => [
            vue.createElementVNode("text", null, "\u53F3\u4FA7")
          ]),
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.KeepAlive, null, [
              vue.unref(currentComponent) === "contacts" ? (vue.openBlock(), vue.createBlock(Contacts, { key: 0 })) : vue.unref(currentComponent) === "mine" ? (vue.openBlock(), vue.createBlock(Mine, { key: 1 })) : (vue.openBlock(), vue.createBlock(Chat, { key: 2 }))
            ], 1024))
          ]),
          _: 1
        });
      };
    }
  });
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
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
