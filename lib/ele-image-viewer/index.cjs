"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../utils/core");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleImageViewer" },
  __name: "index",
  props: props.imageViewerProps,
  emits: props.imageViewerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const imageViewerRef = vue.ref(null);
    const viewerProps = vue.computed(() => {
      const options = core.omit(props2, [
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
    vue.onDeactivated(() => {
      handleClose();
    });
    __expose({
      imageViewerRef
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: "body",
        disabled: !_ctx.teleported
      }, [
        vue.createVNode(vue.Transition, {
          name: _ctx.transitionName,
          appear: true
        }, {
          default: vue.withCtx(() => [
            _ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(["ele-image-viewer", _ctx.customClass]),
              style: vue.normalizeStyle(_ctx.customStyle)
            }, [
              vue.createVNode(vue.unref(elementPlus.ElImageViewer), vue.mergeProps(viewerProps.value, {
                ref_key: "imageViewerRef",
                ref: imageViewerRef,
                onClose: handleClose,
                onSwitch: handleSwitch,
                onRotate: handleRotate
              }), {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16)
            ], 6)) : vue.createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled"]);
    };
  }
});
module.exports = _sfc_main;
