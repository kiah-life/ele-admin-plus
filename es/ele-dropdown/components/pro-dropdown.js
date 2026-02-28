import { defineComponent, ref, computed, openBlock, createBlock, mergeProps, withCtx, createElementBlock, createSlots, renderList, renderSlot, normalizeProps, guardReactiveProps, createCommentVNode, unref } from "vue";
import { ElScrollbar, ElButton } from "element-plus";
import { ArrowDown } from "../../icons";
import { pick } from "../../utils/core";
import EleTooltip from "../../ele-tooltip/index";
import { tooltipPropKeys } from "../../ele-tooltip/props";
import DropdownMenus from "./dropdown-menus";
import { dropdownProps, dropdownEmits } from "../props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "ProDropdown" },
  __name: "pro-dropdown",
  props: {
    ...dropdownProps,
    /** 当前选中菜单项 */
    selected: Object
  },
  emits: dropdownEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tooltipRef = ref(null);
    const tooltipProps = computed(() => {
      const options = pick(props, tooltipPropKeys);
      options.showAfter = props.trigger === "hover" ? props.showTimeout : 0;
      options.hideAfter = props.trigger === "hover" ? props.hideTimeout : 0;
      options.gpuAcceleration = props.transition === "el-fade-in-linear";
      const classes = ["ele-dropdown"];
      if (props.preventContextmenu) {
        classes.push("is-prevent-event");
      }
      if (typeof props.popperClass === "string" && props.popperClass) {
        classes.push(props.popperClass);
      }
      options.popperClass = classes.join(" ");
      options.isPopover = true;
      return options;
    });
    const hasSubMenu = computed(
      () => !!(props.items && props.items.some((d) => {
        var _a;
        return !!((_a = d.children) == null ? void 0 : _a.length);
      }))
    );
    const hidePopper = () => {
      tooltipRef.value && tooltipRef.value.hide();
    };
    const updatePopper = () => {
      tooltipRef.value && tooltipRef.value.updatePopper();
    };
    const handleUpdateVisible = (visible) => {
      emit("update:visible", visible);
      emit("visibleChange", visible);
    };
    const handlePopBeforeEnter = () => {
      emit("before-enter");
    };
    const handlePopBeforeLeave = () => {
      emit("before-leave");
    };
    const handlePopAfterEnter = () => {
      emit("after-enter");
    };
    const handlePopAfterLeave = () => {
      emit("after-leave");
    };
    const handleItemClick = (item) => {
      var _a;
      if (props.hideOnClick && !((_a = item.children) == null ? void 0 : _a.length)) {
        hidePopper();
      }
      emit("command", item.command);
    };
    const handleOpen = () => {
      if (props.disabled) {
        return;
      }
      tooltipRef.value && tooltipRef.value.handleOpen();
    };
    const handleClose = () => {
      hidePopper();
    };
    const handleWrapperContext = (e) => {
      if (props.preventContextmenu) {
        e.preventDefault();
      }
    };
    __expose({
      tooltipRef,
      hidePopper,
      updatePopper,
      handleOpen,
      handleClose
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(EleTooltip, mergeProps({ tabindex: _ctx.tabindex }, tooltipProps.value, {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        "onUpdate:visible": handleUpdateVisible,
        onBeforeShow: handlePopBeforeEnter,
        onBeforeHide: handlePopBeforeLeave,
        onShow: handlePopAfterEnter,
        onHide: handlePopAfterLeave
      }), {
        body: withCtx(() => [
          hasSubMenu.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "ele-dropdown-wrapper",
            onContextmenu: handleWrapperContext
          }, [
            _ctx.items && _ctx.items.length ? (openBlock(), createBlock(DropdownMenus, {
              key: 0,
              role: _ctx.role,
              items: _ctx.items,
              selected: _ctx.modelValue,
              menuStyle: _ctx.menuStyle,
              iconProps: _ctx.iconProps,
              size: _ctx.size,
              onItemClick: handleItemClick,
              onWrapperContext: handleWrapperContext
            }, createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots).filter((k) => "default" !== k), (name) => {
                return {
                  name,
                  fn: withCtx((slotProps) => [
                    renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                  ])
                };
              })
            ]), 1032, ["role", "items", "selected", "menuStyle", "iconProps", "size"])) : createCommentVNode("", true)
          ], 32)) : (openBlock(), createBlock(unref(ElScrollbar), {
            key: 1,
            maxHeight: _ctx.maxHeight,
            class: "ele-dropdown-wrapper",
            onContextmenu: handleWrapperContext
          }, {
            default: withCtx(() => [
              _ctx.items && _ctx.items.length ? (openBlock(), createBlock(DropdownMenus, {
                key: 0,
                role: _ctx.role,
                items: _ctx.items,
                selected: _ctx.modelValue,
                menuStyle: _ctx.menuStyle,
                iconProps: _ctx.iconProps,
                size: _ctx.size,
                onItemClick: handleItemClick,
                onWrapperContext: handleWrapperContext
              }, createSlots({ _: 2 }, [
                renderList(Object.keys(_ctx.$slots).filter((k) => "default" !== k), (name) => {
                  return {
                    name,
                    fn: withCtx((slotProps) => [
                      renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                    ])
                  };
                })
              ]), 1032, ["role", "items", "selected", "menuStyle", "iconProps", "size"])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["maxHeight"]))
        ]),
        default: withCtx(() => [
          _ctx.splitButton ? (openBlock(), createBlock(unref(ElButton), mergeProps({
            key: 0,
            type: _ctx.type,
            size: _ctx.size,
            disabled: _ctx.disabled,
            icon: unref(ArrowDown),
            class: "ele-dropdown-caret-button"
          }, _ctx.caretButtonProps || {}), null, 16, ["type", "size", "disabled", "icon"])) : renderSlot(_ctx.$slots, "default", {
            key: 1,
            active: _ctx.modelValue,
            selected: __props.selected
          })
        ]),
        _: 3
      }, 16, ["tabindex"]);
    };
  }
});
export {
  _sfc_main as default
};
