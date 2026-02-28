"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const props$1 = require("../ele-tabs/props");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleTabTool" },
  __name: "index",
  props: props.tabToolProps,
  setup(__props) {
    const props2 = __props;
    const wrapProps = vue.inject(props$1.TAB_WRAP_KEY, null);
    const handleItemClick = (e) => {
      if (wrapProps && wrapProps.triggerTabItemClick) {
        wrapProps.triggerTabItemClick(void 0, props2.tabName, e);
      }
    };
    const handleItemContextmenu = (e) => {
      if (wrapProps && wrapProps.triggerItemContextMenu) {
        wrapProps.triggerItemContextMenu(void 0, props2.tabName, e);
      }
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["ele-tab-tool", { "is-tab": _ctx.tab }, { "is-active": _ctx.active }])
      }, [
        _ctx.tab ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("div", {
            class: "ele-tab-title",
            onClick: handleItemClick,
            onContextmenu: handleItemContextmenu
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 32),
          vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "ele-tab-corner-left" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(icons.CornerLeftFilled))
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "ele-tab-corner-right" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(icons.CornerRightFilled))
            ]),
            _: 1
          })
        ], 64)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
      ], 2);
    };
  }
});
module.exports = _sfc_main;
