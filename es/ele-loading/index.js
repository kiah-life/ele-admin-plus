import { defineComponent, computed, withDirectives, openBlock, createBlock, normalizeClass, withCtx, renderSlot, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, vShow, unref } from "vue";
import { vLoading } from "element-plus";
import ReceiverView from "../ele-config-provider/components/receiver-view";
import { loadingProps } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleLoading" },
  __name: "index",
  props: loadingProps,
  setup(__props) {
    const props = __props;
    const isCircle = computed(() => {
      return props.type === "circle";
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(ReceiverView, {
        "element-loading-text": isCircle.value ? _ctx.text : void 0,
        "element-loading-background": isCircle.value ? _ctx.background : void 0,
        "element-loading-spinner": isCircle.value ? _ctx.spinner : void 0,
        "element-loading-svg-view-box": isCircle.value ? _ctx.svgViewBox : void 0,
        class: normalizeClass(["ele-loading", { "ele-loading-show": _ctx.loading }])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          !isCircle.value ? withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle(_ctx.spinnerStyle),
            class: normalizeClass([
              "ele-loading-spinner",
              { "ele-loading-blur": _ctx.blur },
              { "ele-loading-small": _ctx.size === "small" },
              { "ele-loading-large": _ctx.size === "large" }
            ])
          }, [
            renderSlot(_ctx.$slots, "spinner", {}, () => [
              _cache[0] || (_cache[0] = createElementVNode("div", { class: "ele-loading-dot" }, [
                createElementVNode("i"),
                createElementVNode("i"),
                createElementVNode("i"),
                createElementVNode("i")
              ], -1))
            ]),
            _ctx.text ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "ele-loading-text",
              style: normalizeStyle(_ctx.textStyle)
            }, toDisplayString(_ctx.text), 5)) : createCommentVNode("", true)
          ], 6)), [
            [vShow, _ctx.loading]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["element-loading-text", "element-loading-background", "element-loading-spinner", "element-loading-svg-view-box", "class"])), [
        [unref(vLoading), isCircle.value && _ctx.loading]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
