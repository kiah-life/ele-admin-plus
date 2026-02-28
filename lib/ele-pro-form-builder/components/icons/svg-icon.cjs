"use strict";
const vue = require("vue");
const icons = require("../../../icons");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    components: {
      ArrowUp: icons.ArrowUp,
      ArrowDown: icons.ArrowDown,
      ArrowRight: icons.ArrowRight,
      ArrowLeft: icons.ArrowLeft,
      CheckOutlined: icons.CheckOutlined,
      CalendarOutlined: icons.CalendarOutlined,
      PlusOutlined: icons.PlusOutlined,
      StarFilled: icons.StarFilled,
      ClockCircleOutlined: icons.ClockCircleOutlined,
      EnvironmentOutlined: icons.EnvironmentOutlined,
      CheckCircleFilled: icons.CheckCircleFilled,
      StepForwardFilled: icons.StepForwardFilled,
      ExclamationCircleFilled: icons.ExclamationCircleFilled,
      UserOutlined: icons.UserOutlined,
      CloseOutlined: icons.CloseOutlined
    }
  },
  __name: "svg-icon",
  props: {
    name: {},
    iconStyle: {},
    size: {},
    color: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          {
            "ele-icon-color-primary": _ctx.color !== "secondary" && _ctx.color !== "lighter" && _ctx.color !== "base" && _ctx.color !== "placeholder" && _ctx.color !== "light" && _ctx.color !== "primary5" && _ctx.color !== "success"
          },
          { "ele-icon-color-secondary": _ctx.color === "secondary" },
          { "ele-icon-color-lighter": _ctx.color === "lighter" },
          { "ele-icon-color-base": _ctx.color === "base" },
          { "ele-icon-color-placeholder": _ctx.color === "placeholder" },
          { "ele-icon-color-light": _ctx.color === "light" },
          { "ele-icon-color-primary5": _ctx.color === "primary5" },
          { "ele-icon-color-success": _ctx.color === "success" }
        ]),
        style: vue.normalizeStyle({
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: _ctx.size === "sm" ? "12px" : "14px"
        })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.name), {
            width: "1em",
            height: "1em",
            style: vue.normalizeStyle(_ctx.iconStyle)
          }, null, 8, ["style"]))
        ])
      ], 6);
    };
  }
});
module.exports = _sfc_main;
