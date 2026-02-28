"use strict";
const vue = require("vue");
const DropdownMenuItem = require("./dropdown-menu-item");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "DropdownMenus" },
  __name: "dropdown-menus",
  props: {
    /** 下拉菜单数据 */
    items: {
      type: Array,
      required: true
    },
    /** 选中的菜单 */
    selected: [String, Number, Object],
    /** 自定义下拉菜单样式 */
    menuStyle: Object,
    /** 自定义图标属性 */
    iconProps: Object,
    /** 尺寸 */
    size: String
  },
  emits: {
    itemClick: (_item) => true,
    wrapperContext: (_e) => true
  },
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleItemClick = (item) => {
      if (item.disabled) {
        return;
      }
      emit("itemClick", item);
    };
    const handleWrapperContext = (e) => {
      emit("wrapperContext", e);
    };
    return (_ctx, _cache) => {
      const _component_DropdownMenus = vue.resolveComponent("DropdownMenus", true);
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          "ele-dropdown-menu",
          { "is-small": __props.size === "small" },
          { "is-large": __props.size === "large" }
        ]),
        style: vue.normalizeStyle(__props.menuStyle)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.items, (item) => {
          return vue.openBlock(), vue.createBlock(DropdownMenuItem, {
            key: item.key == null ? JSON.stringify(item.command) : item.key,
            item,
            selected: __props.selected,
            iconProps: __props.iconProps,
            onItemClick: handleItemClick,
            onWrapperContext: handleWrapperContext
          }, vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots).filter(
              (k) => "default" !== k && "subMenus" !== k
            ), (name) => {
              return {
                name,
                fn: vue.withCtx((slotProps) => [
                  vue.renderSlot(_ctx.$slots, name, vue.mergeProps({ ref_for: true }, slotProps || {}))
                ])
              };
            }),
            item.children && item.children.length ? {
              name: "subMenus",
              fn: vue.withCtx(() => [
                vue.createVNode(_component_DropdownMenus, {
                  items: item.children,
                  selected: __props.selected,
                  menuStyle: __props.menuStyle,
                  iconProps: __props.iconProps,
                  size: __props.size,
                  onItemClick: handleItemClick,
                  onWrapperContext: handleWrapperContext
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots).filter(
                    (k) => "default" !== k && "subMenus" !== k
                  ), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.mergeProps({ ref_for: true }, slotProps || {}))
                      ])
                    };
                  })
                ]), 1032, ["items", "selected", "menuStyle", "iconProps", "size"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["item", "selected", "iconProps"]);
        }), 128))
      ], 6);
    };
  }
});
module.exports = _sfc_main;
