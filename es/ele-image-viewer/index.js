import { defineComponent, ref, computed, onDeactivated, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementBlock, normalizeClass, normalizeStyle, unref, mergeProps, renderSlot, createCommentVNode } from "vue";
import { ElImageViewer } from "element-plus";
import { omit } from "../utils/core";
import { imageViewerProps, imageViewerEmits } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleImageViewer" },
  __name: "index",
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const imageViewerRef = ref(null);
    const viewerProps = computed(() => {
      const options = omit(props, [
        "modelValue",
        "customClass",
        "customStyle",
        "transitionName",
        "keepAlive"
      ]);
      options.teleported = false;
      return options;
    });
    const handleClose = () => {
      emit("update:modelValue", false);
      emit("close");
    };
    const handleSwitch = (index) => {
      emit("switch", index);
    };
    const handleRotate = (deg) => {
      emit("rotate", deg);
    };
    onDeactivated(() => {
      handleClose();
    });
    __expose({
      imageViewerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.teleported
      }, [
        createVNode(Transition, {
          name: _ctx.transitionName,
          appear: true
        }, {
          default: withCtx(() => [
            _ctx.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["ele-image-viewer", _ctx.customClass]),
              style: normalizeStyle(_ctx.customStyle)
            }, [
              createVNode(unref(ElImageViewer), mergeProps(viewerProps.value, {
                ref_key: "imageViewerRef",
                ref: imageViewerRef,
                onClose: handleClose,
                onSwitch: handleSwitch,
                onRotate: handleRotate
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16)
            ], 6)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
