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
(function(vue, shared) {
  "use strict";
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "login",
    setup(__props) {
      const login = () => {
        uni.redirectTo({
          url: "/pages/index/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createElementVNode("view", { class: "login-window" }, [
            vue.createElementVNode("view", { class: "input-area" }, [
              vue.createElementVNode("text", null, "\u8D26\u53F7\uFF1A"),
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
              })
            ]),
            vue.createElementVNode("view", { class: "input-area" }, [
              vue.createElementVNode("text", null, "\u5BC6\u7801\uFF1A"),
              vue.createElementVNode("input", {
                type: "password",
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
              })
            ]),
            vue.createElementVNode("view", { class: "button-area" }, [
              vue.createElementVNode("button", {
                class: "primary",
                onClick: login
              }, "\u767B\u5F55")
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
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-e4e4508d"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/pages/login/login.vue"]]);
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "view-list",
    props: {
      infoList: { type: Array, required: true },
      onClick: { type: Function, required: false }
    },
    emits: ["click"],
    setup(__props, { emit }) {
      const props = __props;
      const triggerClickEvent = (event, info, index) => {
        emit("click", { event, info, index });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "view-list-container" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.infoList, (info, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "view-list-item",
              key: index,
              onClick: ($event) => triggerClickEvent($event, info, index)
            }, [
              info.img ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "img-container"
              }, [
                vue.createElementVNode("img", {
                  class: "avatar",
                  src: info.img
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: vue.normalizeClass({ "info-content": true, "with-sub-info": !!info.right, "with-img": !!info.img })
              }, [
                vue.createElementVNode("view", { class: "title single-line" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(info.title), 1)
                ]),
                info.desc ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "desc single-line"
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(info.desc), 1)
                ])) : vue.createCommentVNode("v-if", true)
              ], 2),
              info.right ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "sub-info"
              }, [
                typeof info.right === "string" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "single single-line"
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(info.right), 1)
                ])) : vue.createCommentVNode("v-if", true),
                typeof info.right === "object" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "double"
                }, [
                  info.right.top ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "single-line"
                  }, [
                    vue.createElementVNode("text", null, vue.toDisplayString(info.right.top), 1)
                  ])) : vue.createCommentVNode("v-if", true),
                  info.right.bottom ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "single-line"
                  }, [
                    vue.createElementVNode("text", { class: "single-line" }, vue.toDisplayString(info.right.bottom), 1)
                  ])) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true)
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  });
  const ViewList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-150ad610"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/common/view-list/view-list.vue"]]);
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "contacts",
    setup(__props) {
      const contacts = vue.reactive([
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u8054\u7CFB\u4EBAA"
        },
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u8054\u7CFB\u4EBAB"
        }
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(ViewList, { "info-list": contacts }, null, 8, ["info-list"])
        ]);
      };
    }
  });
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/contacts/contacts.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "mine",
    setup(__props) {
      const logout = () => {
        uni.redirectTo({
          url: "/pages/login/login"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "button-area" }, [
          vue.createElementVNode("button", {
            class: "primary",
            onClick: logout
          }, " \u9000\u51FA\u767B\u5F55 ")
        ]);
      };
    }
  });
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-00c63ace"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/mine/mine.vue"]]);
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "session",
    setup(__props) {
      const infoList = vue.reactive([
        {
          title: "\u6807\u51C6\u540D\u79F0"
        },
        {
          title: "\u6807\u51C6\u540D\u79F0",
          desc: "\u6807\u51C6\u63CF\u8FF0"
        },
        {
          title: "\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0\u6807\u51C6\u540D\u79F0",
          desc: "\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0\u6807\u51C6\u63CF\u8FF0"
        },
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u6807\u51C6\u540D\u79F0",
          desc: "\u6807\u51C6\u63CF\u8FF0",
          right: "\u53F3\u4FA7\u6587\u672C"
        },
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u6807\u51C6\u540D\u79F0",
          desc: "\u6807\u51C6\u63CF\u8FF0",
          right: {
            top: "\u9876\u90E8\u6587\u672C",
            bottom: "\u5E95\u90E8\u6587\u672C"
          }
        },
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u6807\u51C6\u540D\u79F0\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F",
          desc: "\u6807\u51C6\u63CF\u8FF0\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F",
          right: "\u5E95\u90E8\u6587\u672C\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F"
        },
        {
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          title: "\u6807\u51C6\u540D\u79F0\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F",
          desc: "\u6807\u51C6\u63CF\u8FF0\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F",
          right: {
            top: "\u9876\u90E8\u6587\u672C\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F",
            bottom: "\u5E95\u90E8\u6587\u672C\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F\u5185\u5BB9\u8F83\u957F"
          }
        }
      ]);
      const startChat = (event) => {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "chat-list" }, [
          vue.createVNode(ViewList, {
            "info-list": infoList,
            onClick: startChat
          }, null, 8, ["info-list"])
        ]);
      };
    }
  });
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/session/session.vue"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "iconfont",
    props: {
      name: { type: String, required: true },
      class: { type: String, required: false }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(["icon", "iconfont", `icon-${props.name}`, props.class || ""])
        }, null, 2);
      };
    }
  });
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/iconfont/iconfont.vue"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "app-header",
    props: {
      headerConfig: { type: null, required: true }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        const _component_iconfont = resolveEasycom(vue.resolveDynamicComponent("iconfont"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "app-header" }, [
          vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u65F6\uFF0C\u9876\u90E8\u4F1A\u9677\u5165\u5230\u72B6\u6001\u680F\uFF0C\u7528\u4E00\u4E2A\u7A7A\u7684\u5143\u7D20\u5360\u4F4D\uFF0Chttps://uniapp.dcloud.net.cn/collocation/pages.html#customnav "),
          vue.createElementVNode("view", { class: "status-bar" }),
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(["left", "title", "right"], (key) => {
              return vue.createElementVNode("view", {
                key,
                class: vue.normalizeClass(key)
              }, [
                props.headerConfig[key] ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  props.headerConfig[key].isIcon !== true ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    onClick: props.headerConfig[key].onClick
                  }, vue.toDisplayString(props.headerConfig[key].content), 9, ["onClick"])) : (vue.openBlock(), vue.createBlock(_component_iconfont, {
                    key: 1,
                    name: props.headerConfig[key].content,
                    onClick: props.headerConfig[key].onClick,
                    class: "app-header-icon"
                  }, null, 8, ["name", "onClick"]))
                ], 64)) : vue.createCommentVNode("v-if", true)
              ], 2);
            }), 64))
          ])
        ]);
      };
    }
  });
  const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7429e111"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/app-header.vue"]]);
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "app-bar",
    props: {
      onSwitch: { type: Function, required: false }
    },
    setup(__props) {
      const props = __props;
      const menus = [
        {
          text: "\u4F1A\u8BDD",
          icon: "chat",
          key: "session"
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
        const _component_iconfont = resolveEasycom(vue.resolveDynamicComponent("iconfont"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "app-bar" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(menus, (menu) => {
            return vue.createElementVNode("view", {
              class: "menu-item",
              key: menu.key,
              onClick: ($event) => switchTo(menu.key)
            }, [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_iconfont, {
                  name: menu.icon,
                  class: "app-bar-icon"
                }, null, 8, ["name"])
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
    __name: "layout",
    props: {
      headerConfig: { type: null, required: true },
      onSwitch: { type: Function, required: false },
      appBarVisible: { type: Boolean, required: false }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createVNode(AppHeader, {
            "header-config": props.headerConfig
          }, null, 8, ["header-config"]),
          vue.createElementVNode("view", {
            class: vue.normalizeClass({ "app-content": true, "no-app-bar": props.appBarVisible === false })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2),
          props.appBarVisible ? (vue.openBlock(), vue.createBlock(AppBar, {
            key: 0,
            "on-switch": props.onSwitch
          }, null, 8, ["on-switch"])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-88c6ddf1"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/layout/layout.vue"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const pageInfo = {
        session: {
          component: "session",
          title: "\u4F1A\u8BDD"
        },
        contacts: {
          component: "contacts",
          title: "\u901A\u8BAF\u5F55"
        },
        mine: {
          component: "mine",
          title: "\u6211\u7684"
        }
      };
      const headerConfig = vue.reactive({
        title: {
          content: pageInfo.session.title
        }
      });
      const currentPageInfo = vue.ref(pageInfo.session);
      const switchComponent = (componentName) => {
        currentPageInfo.value = pageInfo[componentName];
        headerConfig.title.content = pageInfo[componentName].title;
      };
      return (_ctx, _cache) => {
        const _component_contacts = resolveEasycom(vue.resolveDynamicComponent("contacts"), __easycom_0$2);
        const _component_mine = resolveEasycom(vue.resolveDynamicComponent("mine"), __easycom_1$1);
        const _component_session = resolveEasycom(vue.resolveDynamicComponent("session"), __easycom_2$1);
        const _component_layout = resolveEasycom(vue.resolveDynamicComponent("layout"), __easycom_2);
        return vue.openBlock(), vue.createBlock(_component_layout, {
          "on-switch": switchComponent,
          "header-config": headerConfig,
          "app-bar-visible": ""
        }, {
          default: vue.withCtx(() => [
            currentPageInfo.value.component === "contacts" ? (vue.openBlock(), vue.createBlock(_component_contacts, { key: 0 })) : currentPageInfo.value.component === "mine" ? (vue.openBlock(), vue.createBlock(_component_mine, { key: 1 })) : (vue.openBlock(), vue.createBlock(_component_session, { key: 2 }))
          ]),
          _: 1
        }, 8, ["header-config"]);
      };
    }
  });
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/pages/index/index.vue"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "message",
    props: {
      img: { type: String, required: true },
      type: { type: String, required: true },
      content: { type: String, required: true },
      direction: { type: String, required: false }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["message", props.direction === "right" ? "reverse" : ""])
        }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("img", {
              class: "avatar",
              src: props.img
            }, null, 8, ["src"])
          ]),
          props.type === "text" || props.type === void 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "message-container text-message"
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString(props.content), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ], 2);
      };
    }
  });
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-49e8e8fa"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/message/message.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render(_ctx, _cache) {
    const _component_iconfont = resolveEasycom(vue.resolveDynamicComponent("iconfont"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-input" }, [
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createElementVNode("view", { class: "icon-box" }, [
            vue.createVNode(_component_iconfont, {
              name: "84qiehuanyuyin",
              class: "chat-page-icon"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "center" }, [
          vue.createElementVNode("textarea", { "auto-height": "" })
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createElementVNode("button", { class: "primary" }, "\u53D1\u9001")
        ])
      ]),
      vue.createElementVNode("view", { class: "addition" })
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-7713cc3c"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/components/chat-input/chat-input.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "chat",
    setup(__props) {
      const back = () => {
        uni.navigateBack();
      };
      const headerConfig = {
        left: {
          content: "left",
          isIcon: true,
          onClick: back
        },
        title: {
          content: "\u8054\u7CFB\u4EBAA"
        }
      };
      const messages = vue.reactive([
        {
          id: 1,
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          type: "text",
          content: "\u8FD9\u662F\u6D88\u606F\u5185\u5BB9"
        },
        {
          id: 2,
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          type: "text",
          content: "\u8FD9\u662F\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u5462\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684"
        },
        {
          id: 3,
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          direction: "right",
          type: "text",
          content: "\u8FD9\u662F\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u5462\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684"
        },
        {
          id: 4,
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          direction: "right",
          type: "text",
          content: "\u53F3\u4FA7\u6D88\u606F"
        },
        {
          id: 5,
          img: "https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg",
          type: "text",
          content: "\u8FD9\u662F\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u5462\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684"
        }
      ]);
      return (_ctx, _cache) => {
        const _component_message = resolveEasycom(vue.resolveDynamicComponent("message"), __easycom_0);
        const _component_chat_input = resolveEasycom(vue.resolveDynamicComponent("chat-input"), __easycom_1);
        const _component_layout = resolveEasycom(vue.resolveDynamicComponent("layout"), __easycom_2);
        return vue.openBlock(), vue.createBlock(_component_layout, { "header-config": headerConfig }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "chat-container" }, [
              vue.createElementVNode("scroll-view", {
                "scroll-y": "true",
                class: "chat-view"
              }, [
                vue.createElementVNode("view", { class: "message-box" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(messages, (message) => {
                    return vue.openBlock(), vue.createBlock(_component_message, vue.mergeProps({
                      key: message.id
                    }, message), null, 16);
                  }), 128))
                ])
              ]),
              vue.createElementVNode("view", { class: "operation-area" }, [
                vue.createVNode(_component_chat_input)
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0a633310"], ["__file", "E:/Project/realtime-chat/\u5B9E\u65F6\u804A\u5929/pages/chat/chat.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/chat/chat", PagesChatChat);
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
})(Vue, uni.VueShared);
