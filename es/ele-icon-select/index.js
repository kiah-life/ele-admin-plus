import { defineComponent, ref, computed, watch, openBlock, createBlock, createSlots, withCtx, createElementVNode, normalizeStyle, createElementBlock, renderSlot, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, createVNode, unref, normalizeProps, guardReactiveProps } from "vue";
import { ElInput } from "element-plus";
import { useResponsive } from "../ele-pro-layout/util";
import EleBasicSelect from "../ele-basic-select/index";
import { useFormValidate, valueIsChanged } from "../ele-basic-select/util";
import { SearchOutlined } from "../icons";
import IconGrid from "./components/icon-grid";
import { iconSelectProps, iconSelectEmits } from "./props";
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "ele-icon-select-main" };
const _hoisted_3 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleIconSelect" },
  __name: "index",
  props: iconSelectProps,
  emits: iconSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { validateChange } = useFormValidate();
    const isResponsive = useResponsive(props);
    const selectRef = ref(null);
    const selectVisible = ref(false);
    const tabs = ref([]);
    const tabActive = ref();
    const menus = ref([]);
    const menuActive = ref();
    const icons = ref([]);
    const keywords = ref("");
    const tabBar = computed(() => {
      if (!tabs.value || !tabs.value.length) {
        return false;
      }
      if (props.hideOnSingleTab && tabs.value.length === 1) {
        return false;
      }
      return true;
    });
    const selectPopperClass = computed(() => {
      const classes = ["ele-icon-select-popper"];
      if (isResponsive.value) {
        classes.push("is-responsive");
      }
      if (props.popperClass) {
        classes.push(props.popperClass);
      }
      return classes.join(" ");
    });
    const iconPopperStyle = computed(() => {
      if (!props.popperHeight) {
        return;
      }
      return {
        height: typeof props.popperHeight === "number" ? `${props.popperHeight}px` : props.popperHeight
      };
    });
    const updatePopover = () => {
      selectRef.value && selectRef.value.updatePopper();
    };
    const initData = () => {
      if (props.data == null || !props.data.length || typeof props.data[0] === "string") {
        tabs.value = [];
        menus.value = [];
        tabActive.value = void 0;
        menuActive.value = void 0;
        icons.value = filterData(props.data);
        return;
      }
      tabs.value = props.data.map(
        (d) => d.title
      );
      if (tabActive.value == null || tabActive.value >= tabs.value.length) {
        tabActive.value = 0;
      }
      const data = props.data[tabActive.value];
      if (typeof data !== "string" && data.children != null && data.children.length) {
        menus.value = data.children.map((d) => d.title);
        if (menuActive.value == null || menuActive.value >= menus.value.length) {
          menuActive.value = 0;
        }
        icons.value = filterData(data.children[menuActive.value].icons);
        return;
      }
      menus.value = [];
      menuActive.value = void 0;
      icons.value = typeof data !== "string" ? filterData(data.icons) : [];
    };
    const filterData = (data) => {
      if (!data) {
        return [];
      }
      if (!keywords.value) {
        return data;
      }
      const keyword = keywords.value.toLowerCase();
      return data.filter((t) => t.toLowerCase().includes(keyword));
    };
    const updateVisible = (visible) => {
      if (visible) {
        handleSelectFilter("");
      }
      if (selectVisible.value !== visible) {
        selectVisible.value = visible;
        emit("visibleChange", visible);
      }
    };
    const updateModelValue = (modelValue) => {
      if (valueIsChanged(modelValue, props.modelValue)) {
        emit("update:modelValue", modelValue);
        validateChange();
        emit("change", modelValue);
      }
    };
    const handleSelectClear = () => {
      updateModelValue(null);
      updateVisible(false);
      emit("clear");
    };
    const handleSelectFocus = (e) => {
      emit("focus", e);
    };
    const handleSelectBlur = (e) => {
      emit("blur", e);
    };
    const handleSelectFilter = (value) => {
      var _a;
      if (keywords.value !== value) {
        keywords.value = value;
      }
      initData();
      if (!((_a = props.data) == null ? void 0 : _a.length) || icons.value.length) {
        return;
      }
      for (let i = 0; i < props.data.length; i++) {
        const d = props.data[i];
        if (typeof d === "string") {
          return;
        }
        const keyword = keywords.value.toLowerCase();
        if (d.children != null && d.children.length) {
          for (let j = 0; j < d.children.length; j++) {
            const icons2 = d.children[j].icons;
            if (icons2 && icons2.some((t) => t.toLowerCase().includes(keyword))) {
              menuActive.value = j;
              tabActive.value = i;
              initData();
              return;
            }
          }
        } else if (d.icons != null && d.icons.some((t) => t.toLowerCase().includes(keyword))) {
          tabActive.value = i;
          initData();
          return;
        }
      }
    };
    const handleTabClick = (index) => {
      tabActive.value = index;
      initData();
    };
    const handleMenuClick = (index) => {
      menuActive.value = index;
      initData();
    };
    const handleIconSelect = (icon) => {
      updateModelValue(icon);
      updateVisible(false);
    };
    watch(
      () => props.data,
      () => {
        initData();
      },
      {
        immediate: true,
        deep: true
      }
    );
    __expose({
      selectRef,
      updatePopover
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(EleBasicSelect, {
        ref_key: "selectRef",
        ref: selectRef,
        value: _ctx.modelValue,
        multiple: false,
        disabled: _ctx.disabled,
        size: _ctx.size,
        clearable: _ctx.clearable,
        placeholder: _ctx.placeholder,
        automaticDropdown: _ctx.automaticDropdown,
        filterable: typeof _ctx.filterable === "boolean" ? _ctx.filterable : false,
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        placement: _ctx.placement,
        transition: _ctx.transition,
        popperWidth: _ctx.popperWidth,
        popperOptions: _ctx.popperOptions,
        popperClass: selectPopperClass.value,
        selectClass: "is-icon-select",
        selectStyle: _ctx.selectStyle,
        inputStyle: _ctx.inputStyle,
        selectTagsStyle: _ctx.selectTagsStyle,
        selectedLabel: _ctx.modelValue,
        visible: selectVisible.value,
        "onUpdate:visible": updateVisible,
        onFilterChange: handleSelectFilter,
        onClear: handleSelectClear,
        onFocus: handleSelectFocus,
        onBlur: handleSelectBlur
      }, createSlots({
        default: withCtx(() => [
          createElementVNode("div", {
            class: "ele-icon-select",
            style: normalizeStyle(iconPopperStyle.value)
          }, [
            tabBar.value || _ctx.filterable === "popper" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "ele-icon-select-header",
              style: normalizeStyle(_ctx.headerStyle)
            }, [
              renderSlot(_ctx.$slots, "tabLeftExtra"),
              tabBar.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "ele-icon-select-tabs",
                style: normalizeStyle(_ctx.tabsStyle)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (t, i) => {
                  return openBlock(), createElementBlock("div", {
                    key: i + "-" + t,
                    class: normalizeClass(["ele-icon-select-tab", { "is-active": i === tabActive.value }]),
                    onClick: ($event) => handleTabClick(i)
                  }, toDisplayString(t), 11, _hoisted_1);
                }), 128))
              ], 4)) : createCommentVNode("", true),
              _ctx.filterable === "popper" ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "ele-icon-select-search",
                style: normalizeStyle(_ctx.searchStyle)
              }, [
                createVNode(unref(ElInput), {
                  size: "small",
                  clearable: true,
                  modelValue: keywords.value,
                  validateEvent: false,
                  prefixIcon: unref(SearchOutlined),
                  placeholder: _ctx.filterPlaceholder,
                  "onUpdate:modelValue": handleSelectFilter
                }, null, 8, ["modelValue", "prefixIcon", "placeholder"])
              ], 4)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "tabRightExtra")
            ], 4)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_2, [
              menus.value && menus.value.length ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "ele-icon-select-menus",
                style: normalizeStyle(_ctx.menusStyle)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(menus.value, (m, i) => {
                  return openBlock(), createElementBlock("div", {
                    key: i + "-" + m,
                    class: normalizeClass(["ele-icon-select-menu", { "is-active": i === menuActive.value }]),
                    onClick: ($event) => handleMenuClick(i)
                  }, toDisplayString(m), 11, _hoisted_3);
                }), 128))
              ], 4)) : createCommentVNode("", true),
              createVNode(IconGrid, {
                data: icons.value,
                icon: _ctx.modelValue,
                emptyProps: _ctx.emptyProps,
                tooltip: _ctx.tooltip,
                tooltipProps: _ctx.tooltipProps,
                popperVisible: selectVisible.value,
                gridStyle: _ctx.gridStyle,
                itemStyle: _ctx.itemStyle,
                style: normalizeStyle(_ctx.bodyStyle),
                onSelect: handleIconSelect
              }, createSlots({ _: 2 }, [
                _ctx.$slots.icon ? {
                  name: "icon",
                  fn: withCtx((slotProps) => [
                    renderSlot(_ctx.$slots, "icon", normalizeProps(guardReactiveProps(slotProps || {})))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["data", "icon", "emptyProps", "tooltip", "tooltipProps", "popperVisible", "gridStyle", "itemStyle", "style"])
            ])
          ], 4)
        ]),
        _: 2
      }, [
        _ctx.modelValue && _ctx.$slots.icon ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "icon", {
              icon: _ctx.modelValue,
              prefix: true
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["value", "disabled", "size", "clearable", "placeholder", "automaticDropdown", "filterable", "teleported", "persistent", "placement", "transition", "popperWidth", "popperOptions", "popperClass", "selectStyle", "inputStyle", "selectTagsStyle", "selectedLabel", "visible"]);
    };
  }
});
export {
  _sfc_main as default
};
