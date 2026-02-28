"use strict";
const vue = require("vue");
const util = require("../ele-pro-layout/util");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleBottomBar" },
  __name: "index",
  props: props.bottomBarProps,
  setup(__props) {
    const layoutState = util.useLayoutState();
    const isActivated = vue.ref(true);
    const teleportTo = vue.computed(() => {
      var _a;
      return (_a = layoutState.getBodyWrapperEl) == null ? void 0 : _a.call(layoutState);
    });
    vue.onActivated(() => {
      isActivated.value = true;
    });
    vue.onDeactivated(() => {
      isActivated.value = false;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: teleportTo.value,
        disabled: !_ctx.teleported || !teleportTo.value
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ele-bottom-bar", { "is-deactivated": !isActivated.value }])
        }, [
          vue.createElementVNode("div", {
            class: "ele-bottom-bar-body",
            style: vue.normalizeStyle(_ctx.bodyStyle)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 4),
          vue.createElementVNode("div", {
            class: "ele-bottom-bar-extra",
            style: vue.normalizeStyle(_ctx.extraStyle)
          }, [
            vue.renderSlot(_ctx.$slots, "extra")
          ], 4)
        ], 2)
      ], 8, ["to", "disabled"]);
    };
  }
});
module.exports = _sfc_main;
