import { defineComponent, getCurrentInstance, onBeforeUnmount, onMounted, withDirectives, openBlock, createElementBlock, createBlock, resolveDynamicComponent, unref, createCommentVNode, vShow } from "vue";
import { CheckCircleFilled, ExclamationCircleFilled, CloseCircleFilled, InfoCircleFilled } from "../../icons";
const _hoisted_1 = { class: "ele-message-box-icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const ins = (_a = getCurrentInstance) == null ? void 0 : _a();
    onBeforeUnmount(() => {
      emit("boxDestroy", props.boxId);
    });
    onMounted(() => {
      var _a2, _b;
      emit("boxMounted", {
        boxId: props.boxId,
        doClose: (_b = (_a2 = ins == null ? void 0 : ins.ctx) == null ? void 0 : _a2.$root) == null ? void 0 : _b.doClose
      });
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { key: 0 })) : __props.type === "success" ? (openBlock(), createBlock(unref(CheckCircleFilled), { key: 1 })) : __props.type === "warning" ? (openBlock(), createBlock(unref(ExclamationCircleFilled), { key: 2 })) : __props.type === "error" ? (openBlock(), createBlock(unref(CloseCircleFilled), { key: 3 })) : __props.type === "info" ? (openBlock(), createBlock(unref(InfoCircleFilled), { key: 4 })) : createCommentVNode("", true)
      ], 512)), [
        [vShow, __props.type || __props.icon]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
