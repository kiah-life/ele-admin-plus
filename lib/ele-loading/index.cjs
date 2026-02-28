"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const ReceiverView = require("../ele-config-provider/components/receiver-view");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleLoading" },
  __name: "index",
  props: props.loadingProps,
  setup(__props) {
    const props2 = __props;
    const isCircle = vue.computed(() => {
      return props2.type === "circle";
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createBlock(ReceiverView, {
        "element-loading-text": isCircle.value ? _ctx.text : void 0,
        "element-loading-background": isCircle.value ? _ctx.background : void 0,
        "element-loading-spinner": isCircle.value ? _ctx.spinner : void 0,
        "element-loading-svg-view-box": isCircle.value ? _ctx.svgViewBox : void 0,
        class: vue.normalizeClass(["ele-loading", { "ele-loading-show": _ctx.loading }])
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default"),
          !isCircle.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            style: vue.normalizeStyle(_ctx.spinnerStyle),
            class: vue.normalizeClass([
              "ele-loading-spinner",
              { "ele-loading-blur": _ctx.blur },
              { "ele-loading-small": _ctx.size === "small" },
              { "ele-loading-large": _ctx.size === "large" }
            ])
          }, [
            vue.renderSlot(_ctx.$slots, "spinner", {}, () => [
              _cache[0] || (_cache[0] = vue.createElementVNode("div", { class: "ele-loading-dot" }, [
                vue.createElementVNode("i"),
                vue.createElementVNode("i"),
                vue.createElementVNode("i"),
                vue.createElementVNode("i")
              ], -1))
            ]),
            _ctx.text ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "ele-loading-text",
              style: vue.normalizeStyle(_ctx.textStyle)
            }, vue.toDisplayString(_ctx.text), 5)) : vue.createCommentVNode("", true)
          ], 6)), [
            [vue.vShow, _ctx.loading]
          ]) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["element-loading-text", "element-loading-background", "element-loading-spinner", "element-loading-svg-view-box", "class"])), [
        [vue.unref(elementPlus.vLoading), isCircle.value && _ctx.loading]
      ]);
    };
  }
});
module.exports = _sfc_main;
