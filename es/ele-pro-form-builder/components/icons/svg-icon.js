import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createBlock, resolveDynamicComponent } from "vue";
import { ArrowUp, ArrowDown, ArrowRight, ArrowLeft, CheckOutlined, CalendarOutlined, PlusOutlined, StarFilled, ClockCircleOutlined, EnvironmentOutlined, CheckCircleFilled, StepForwardFilled, ExclamationCircleFilled, UserOutlined, CloseOutlined } from "../../../icons";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    components: {
      ArrowUp,
      ArrowDown,
      ArrowRight,
      ArrowLeft,
      CheckOutlined,
      CalendarOutlined,
      PlusOutlined,
      StarFilled,
      ClockCircleOutlined,
      EnvironmentOutlined,
      CheckCircleFilled,
      StepForwardFilled,
      ExclamationCircleFilled,
      UserOutlined,
      CloseOutlined
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
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
        style: normalizeStyle({
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: _ctx.size === "sm" ? "12px" : "14px"
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.name), {
            width: "1em",
            height: "1em",
            style: normalizeStyle(_ctx.iconStyle)
          }, null, 8, ["style"]))
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
