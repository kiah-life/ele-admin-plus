"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../utils/core");
const hook = require("../utils/hook");
const EleBasicSelect = require("../ele-basic-select/index");
const util = require("../ele-basic-select/util");
const util$1 = require("./util");
const props = require("./props");
const _hoisted_1 = ["title"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleTreeSelect" },
  __name: "index",
  props: props.treeSelectProps,
  emits: props.treeSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const { validateChange } = util.useFormValidate();
    const { optionData, reloadOptions } = hook.useProOptions(
      props2,
      "treeProps.data"
    );
    const selectRef = vue.ref(null);
    const treeRef = vue.ref(null);
    const selectVisible = vue.ref(false);
    const selectedItems = vue.ref([]);
    const selectedLabel = vue.computed(() => {
      const selected = selectedItems.value;
      return !props2.multiple && selected.length ? selected[0].label : "";
    });
    const selectPopperClass = vue.computed(() => {
      const classes = ["ele-tree-select-popper"];
      if (props2.popperClass) {
        classes.push(props2.popperClass);
      }
      return classes.join(" ");
    });
    const treeOptions = vue.computed(() => {
      var _a;
      return Object.assign(
        {
          value: "id",
          label: "label",
          children: "children",
          disabled: "disabled"
        },
        (_a = props2.treeProps) == null ? void 0 : _a.props
      );
    });
    const updatePopover = () => {
      selectRef.value && selectRef.value.updatePopper();
    };
    const getItemByValue = (value) => {
      if (util.isEmptyValue(value)) {
        return;
      }
      const valueKey = treeOptions.value.value;
      if (props2.cacheData != null) {
        const temp = props2.cacheData.find((d) => d[valueKey] === value);
        if (temp != null) {
          return temp;
        }
      }
      if (optionData.value) {
        return core.findTree(
          optionData.value,
          (d) => d[valueKey] === value,
          treeOptions.value.children
        );
      }
    };
    const getMultipleSelected = (values) => {
      var _a;
      const valueKey = treeOptions.value.value;
      const labelKey = treeOptions.value.label;
      if (
        // 是懒加载 ||
        ((_a = props2.treeProps) == null ? void 0 : _a.checkStrictly) || props2.showCheckedStrategy === "all"
      ) {
        return util$1.getNormalSelectedItems(
          optionData.value,
          values,
          valueKey,
          labelKey,
          treeOptions.value.children,
          props2.cacheData,
          treeRef.value ? treeRef.value.getCheckedNodes() : void 0
        );
      }
      return util$1.checkSelectedItems(
        util$1.getTreeSelectedItems(
          optionData.value,
          values,
          valueKey,
          labelKey,
          treeOptions.value.children,
          props2.showCheckedStrategy !== "child"
        ),
        values,
        valueKey,
        labelKey,
        props2.cacheData
      );
    };
    const updateSelectedItems = (modelValue) => {
      if (!props2.multiple) {
        const selectedItem = selectedItems.value[0];
        if (util.isEmptyValue(modelValue)) {
          if (!selectedItem) {
            return;
          }
          selectedItems.value = [];
          treeRef.value && treeRef.value.setCurrentKey(null);
          return;
        }
        if (selectedItem && selectedItem.value === modelValue) {
          return;
        }
        const item = getItemByValue(modelValue);
        const labelKey = treeOptions.value.label;
        const label = item ? item[labelKey] : String(modelValue);
        selectedItems.value = [{ label, value: modelValue }];
        treeRef.value && treeRef.value.setCurrentKey(modelValue);
        return;
      }
      if (util.isEmptyValue(modelValue) || !modelValue.length) {
        if (!selectedItems.value.length) {
          return;
        }
        selectedItems.value = [];
        treeRef.value && treeRef.value.setCheckedKeys([]);
        return;
      }
      const keys = selectedItems.value.map((d) => d.value);
      if (!util.valueIsChanged(modelValue, keys, true)) {
        return;
      }
      treeRef.value && treeRef.value.setCheckedKeys(modelValue);
      selectedItems.value = getMultipleSelected(modelValue);
    };
    const treeFilter = (keywords, item) => {
      const label = item[treeOptions.value.label];
      return label != null && label.includes(keywords);
    };
    const handleSelectFilter = (keywords) => {
      treeRef.value && treeRef.value.filter(keywords);
    };
    const focusSearchInput = () => {
      selectRef.value && selectRef.value.focusSearchInput();
    };
    const updateModelValue = (modelValue) => {
      if (util.valueIsChanged(modelValue, props2.modelValue, props2.multiple)) {
        emit("update:modelValue", modelValue);
        validateChange();
        emit("change", modelValue);
      }
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
    const handleSelectRemove = (item) => {
      treeRef.value && treeRef.value.setChecked(item.value, false);
      const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
      selectedItems.value = getMultipleSelected(keys);
      updateModelValue(
        util$1.getModelValue(keys, selectedItems.value, props2.checkedValueStrategy)
      );
      emit("removeTag", item.value);
    };
    const handleSelectClear = () => {
      updateModelValue(props2.multiple ? [] : null);
      updateVisible(false);
      emit("clear");
    };
    const handleSelectFocus = (e) => {
      emit("focus", e);
    };
    const handleSelectBlur = (e) => {
      emit("blur", e);
    };
    const handleTreeClick = (item, _node, e) => {
      var _a, _b, _c;
      e.stopPropagation();
      const valueKey = treeOptions.value.value;
      const childrenKey = treeOptions.value.children;
      const disabledKey = treeOptions.value.disabled;
      const disabled = item[disabledKey];
      if (disabled) {
        const target = e.target;
        if (target && target.classList.contains("is-disabled")) {
          const el = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
          el && el.blur();
        }
      }
      const value = item[valueKey];
      const label = item[treeOptions.value.label];
      const isChild = !((_b = item[childrenKey]) == null ? void 0 : _b.length);
      const isExpandOnClick = ((_c = props2.treeProps) == null ? void 0 : _c.expandOnClickNode) !== false;
      focusSearchInput();
      if (!props2.multiple) {
        const selectedItem = selectedItems.value[0];
        if (selectedItem && selectedItem.value === value) {
          if (!isExpandOnClick || isChild) {
            updateVisible(false);
          }
          return;
        }
        if (!disabled && (!isExpandOnClick || isChild)) {
          selectedItems.value = [{ label, value }];
          updateModelValue(value);
          updateVisible(false);
          return;
        }
        vue.nextTick(() => {
          const modelValue = props2.modelValue;
          const key = util.isEmptyValue(modelValue) ? null : modelValue;
          treeRef.value && treeRef.value.setCurrentKey(key);
        });
        return;
      }
      if (!disabled && (!isExpandOnClick || isChild)) {
        const modelValue = props2.modelValue;
        const checked = modelValue && modelValue.includes(value);
        if (treeRef.value) {
          if (checked) {
            treeRef.value.setChecked(value, false);
          } else if (isChild) {
            treeRef.value.setChecked(value, !checked);
          } else {
            const checkAll = util$1.isCheckAll(
              item[childrenKey],
              modelValue,
              valueKey,
              childrenKey,
              disabledKey
            );
            treeRef.value.setChecked(value, !checkAll);
          }
        }
        const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
        selectedItems.value = getMultipleSelected(keys);
        updateModelValue(
          util$1.getModelValue(keys, selectedItems.value, props2.checkedValueStrategy)
        );
      }
    };
    const handleTreeCheck = () => {
      const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
      selectedItems.value = getMultipleSelected(keys);
      updateModelValue(
        util$1.getModelValue(keys, selectedItems.value, props2.checkedValueStrategy)
      );
      focusSearchInput();
    };
    const handleTreeExpand = () => {
      focusSearchInput();
    };
    const handleTreeCollapse = () => {
      focusSearchInput();
    };
    vue.watch(
      () => props2.modelValue,
      (modelValue) => {
        updateSelectedItems(modelValue);
      },
      { deep: true }
    );
    vue.watch(
      [() => props2.cacheData, optionData],
      () => {
        if (!selectedItems.value.length) {
          return;
        }
        if (!props2.multiple) {
          const item = getItemByValue(props2.modelValue);
          const value = props2.modelValue;
          const label = item ? item[treeOptions.value.label] : String(value);
          selectedItems.value = [{ label, value }];
          return;
        }
        selectedItems.value = getMultipleSelected(props2.modelValue);
      },
      { deep: true }
    );
    vue.watch(
      [() => props2.showCheckedStrategy, () => {
        var _a;
        return (_a = props2.treeProps) == null ? void 0 : _a.checkStrictly;
      }],
      () => {
        if (props2.multiple && !util.isEmptyValue(props2.modelValue) && props2.modelValue.length) {
          if (!props2.checkedValueStrategy) {
            const values = props2.modelValue;
            selectedItems.value = getMultipleSelected(values);
            updateModelValue(
              util$1.getModelValue(
                values,
                selectedItems.value,
                props2.checkedValueStrategy
              )
            );
          } else {
            const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
            selectedItems.value = getMultipleSelected(keys);
            updateModelValue(
              util$1.getModelValue(keys, selectedItems.value, props2.checkedValueStrategy)
            );
          }
        }
      }
    );
    vue.watch(
      () => props2.checkedValueStrategy,
      () => {
        if (!props2.multiple) {
          return;
        }
        const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
        updateModelValue(
          util$1.getModelValue(keys, selectedItems.value, props2.checkedValueStrategy)
        );
      }
    );
    vue.watch(
      () => props2.disabled,
      (disabled) => {
        if (disabled) {
          updateVisible(false);
        }
      }
    );
    vue.onMounted(() => {
      if (!util.isEmptyValue(props2.modelValue) && !(props2.multiple && !props2.modelValue.length)) {
        updateSelectedItems(props2.modelValue);
      }
    });
    __expose({
      reloadOptions,
      selectRef,
      treeRef,
      selectedItems,
      selectedLabel,
      updatePopover,
      updateVisible
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleBasicSelect, {
        ref_key: "selectRef",
        ref: selectRef,
        value: _ctx.modelValue,
        multiple: _ctx.multiple,
        disabled: _ctx.disabled,
        size: _ctx.size,
        clearable: _ctx.clearable,
        placeholder: _ctx.placeholder,
        maxTagCount: _ctx.maxTagCount,
        maxTagTextLength: _ctx.maxTagTextLength,
        tagType: _ctx.tagType,
        automaticDropdown: _ctx.automaticDropdown,
        filterable: _ctx.filterable,
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        placement: _ctx.placement,
        transition: _ctx.transition,
        popperWidth: _ctx.popperWidth,
        popperOptions: _ctx.popperOptions,
        popperClass: selectPopperClass.value,
        selectStyle: _ctx.selectStyle,
        inputStyle: _ctx.inputStyle,
        selectTagsStyle: _ctx.selectTagsStyle,
        selectedLabel: selectedLabel.value,
        selected: selectedItems.value.filter((d) => !d.hide),
        visible: selectVisible.value,
        "onUpdate:visible": updateVisible,
        onFilterChange: handleSelectFilter,
        onRemoveTag: handleSelectRemove,
        onClear: handleSelectClear,
        onFocus: handleSelectFocus,
        onBlur: handleSelectBlur
      }, vue.createSlots({
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElTreeV2), vue.mergeProps({
            itemSize: 32,
            filterMethod: treeFilter
          }, vue.unref(core.omit)(_ctx.treeProps, ["data"]), {
            ref_key: "treeRef",
            ref: treeRef,
            data: vue.unref(optionData),
            props: treeOptions.value,
            highlightCurrent: _ctx.multiple ? false : true,
            showCheckbox: !!_ctx.multiple,
            checkOnClickNode: false,
            defaultCheckedKeys: _ctx.multiple ? _ctx.modelValue : void 0,
            onCheck: handleTreeCheck,
            onNodeClick: handleTreeClick,
            onNodeExpand: handleTreeExpand,
            onNodeCollapse: handleTreeCollapse
          }), {
            default: vue.withCtx((slotProps) => [
              vue.createElementVNode("span", {
                class: vue.normalizeClass([
                  "el-tree-node__label",
                  { "is-disabled": slotProps.node.disabled }
                ]),
                title: slotProps.node.label
              }, [
                vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(slotProps || {})), () => [
                  vue.createTextVNode(vue.toDisplayString(slotProps.node.label), 1)
                ])
              ], 10, _hoisted_1)
            ]),
            _: 3
          }, 16, ["data", "props", "highlightCurrent", "showCheckbox", "defaultCheckedKeys"])
        ]),
        _: 2
      }, [
        _ctx.$slots.maxTagPlaceholder ? {
          name: "maxTagPlaceholder",
          fn: vue.withCtx((slotProps) => [
            vue.renderSlot(_ctx.$slots, "maxTagPlaceholder", vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["value", "multiple", "disabled", "size", "clearable", "placeholder", "maxTagCount", "maxTagTextLength", "tagType", "automaticDropdown", "filterable", "teleported", "persistent", "placement", "transition", "popperWidth", "popperOptions", "popperClass", "selectStyle", "inputStyle", "selectTagsStyle", "selectedLabel", "selected", "visible"]);
    };
  }
});
module.exports = _sfc_main;
