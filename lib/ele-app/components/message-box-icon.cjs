"use strict";
const vue = require("vue");
const icons = require("../../icons");
const _hoisted_1 = { class: "ele-message-box-icon" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "MessageBoxIcon" },
  __name: "message-box-icon",
  props: {
    /** 类型 */
    type: String,
    /** 图标 */
    icon: [String, Object, Function],
    /** 标识id */
    boxId: String
  },
  emits: {
    boxDestroy: (_boxId) => true,
    boxMounted: (_) => true
  },
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const ins = (_a = vue.getCurrentInstance) == null ? void 0 : _a.call(vue);
    vue.onBeforeUnmount(() => {
      emit("boxDestroy", props.boxId);
    });
    vue.onMounted(() => {
      var _a2, _b;
      emit("boxMounted", {
        boxId: props.boxId,
        doClose: (_b = (_a2 = ins == null ? void 0 : ins.ctx) == null ? void 0 : _a2.$root) == null ? void 0 : _b.doClose
      });
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        __props.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.icon), { key: 0 })) : __props.type === "success" ? (vue.openBlock(), vue.createBlock(vue.unref(icons.CheckCircleFilled), { key: 1 })) : __props.type === "warning" ? (vue.openBlock(), vue.createBlock(vue.unref(icons.ExclamationCircleFilled), { key: 2 })) : __props.type === "error" ? (vue.openBlock(), vue.createBlock(vue.unref(icons.CloseCircleFilled), { key: 3 })) : __props.type === "info" ? (vue.openBlock(), vue.createBlock(vue.unref(icons.InfoCircleFilled), { key: 4 })) : vue.createCommentVNode("", true)
      ], 512)), [
        [vue.vShow, __props.type || __props.icon]
      ]);
    };
  }
});
module.exports = _sfc_main;
