import { defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, createSlots, withCtx, createVNode, unref, mergeProps, createElementVNode, normalizeClass, renderSlot, normalizeProps, guardReactiveProps, createTextVNode, toDisplayString, nextTick } from "vue";
import { ElTreeV2 } from "element-plus";
import { omit, findTree } from "../utils/core";
import { useProOptions } from "../utils/hook";
import EleBasicSelect from "../ele-basic-select/index";
import { useFormValidate, isEmptyValue, valueIsChanged } from "../ele-basic-select/util";
import { getModelValue, getNormalSelectedItems, checkSelectedItems, getTreeSelectedItems, isCheckAll } from "./util";
import { treeSelectProps, treeSelectEmits } from "./props";
const _hoisted_1 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleTreeSelect" },
  __name: "index",
  props: treeSelectProps,
  emits: treeSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { validateChange } = useFormValidate();
    const { optionData, reloadOptions } = useProOptions(
      props,
      "treeProps.data"
    );
    const selectRef = ref(null);
    const treeRef = ref(null);
    const selectVisible = ref(false);
    const selectedItems = ref([]);
    const selectedLabel = computed(() => {
      const selected = selectedItems.value;
      return !props.multiple && selected.length ? selected[0].label : "";
    });
    const selectPopperClass = computed(() => {
      const classes = ["ele-tree-select-popper"];
      if (props.popperClass) {
        classes.push(props.popperClass);
      }
      return classes.join(" ");
    });
    const treeOptions = computed(() => {
      var _a;
      return Object.assign(
        {
          value: "id",
          label: "label",
          children: "children",
          disabled: "disabled"
        },
        (_a = props.treeProps) == null ? void 0 : _a.props
      );
    });
    const updatePopover = () => {
      selectRef.value && selectRef.value.updatePopper();
    };
    const getItemByValue = (value) => {
      if (isEmptyValue(value)) {
        return;
      }
      const valueKey = treeOptions.value.value;
      if (props.cacheData != null) {
        const temp = props.cacheData.find((d) => d[valueKey] === value);
        if (temp != null) {
          return temp;
        }
      }
      if (optionData.value) {
        return findTree(
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
        ((_a = props.treeProps) == null ? void 0 : _a.checkStrictly) || props.showCheckedStrategy === "all"
      ) {
        return getNormalSelectedItems(
          optionData.value,
          values,
          valueKey,
          labelKey,
          treeOptions.value.children,
          props.cacheData,
          treeRef.value ? treeRef.value.getCheckedNodes() : void 0
        );
      }
      return checkSelectedItems(
        getTreeSelectedItems(
          optionData.value,
          values,
          valueKey,
          labelKey,
          treeOptions.value.children,
          props.showCheckedStrategy !== "child"
        ),
        values,
        valueKey,
        labelKey,
        props.cacheData
      );
    };
    const updateSelectedItems = (modelValue) => {
      if (!props.multiple) {
        const selectedItem = selectedItems.value[0];
        if (isEmptyValue(modelValue)) {
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
      if (isEmptyValue(modelValue) || !modelValue.length) {
        if (!selectedItems.value.length) {
          return;
        }
        selectedItems.value = [];
        treeRef.value && treeRef.value.setCheckedKeys([]);
        return;
      }
      const keys = selectedItems.value.map((d) => d.value);
      if (!valueIsChanged(modelValue, keys, true)) {
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
      if (valueIsChanged(modelValue, props.modelValue, props.multiple)) {
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
        getModelValue(keys, selectedItems.value, props.checkedValueStrategy)
      );
      emit("removeTag", item.value);
    };
    const handleSelectClear = () => {
      updateModelValue(props.multiple ? [] : null);
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
      const isExpandOnClick = ((_c = props.treeProps) == null ? void 0 : _c.expandOnClickNode) !== false;
      focusSearchInput();
      if (!props.multiple) {
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
        nextTick(() => {
          const modelValue = props.modelValue;
          const key = isEmptyValue(modelValue) ? null : modelValue;
          treeRef.value && treeRef.value.setCurrentKey(key);
        });
        return;
      }
      if (!disabled && (!isExpandOnClick || isChild)) {
        const modelValue = props.modelValue;
        const checked = modelValue && modelValue.includes(value);
        if (treeRef.value) {
          if (checked) {
            treeRef.value.setChecked(value, false);
          } else if (isChild) {
            treeRef.value.setChecked(value, !checked);
          } else {
            const checkAll = isCheckAll(
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
          getModelValue(keys, selectedItems.value, props.checkedValueStrategy)
        );
      }
    };
    const handleTreeCheck = () => {
      const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
      selectedItems.value = getMultipleSelected(keys);
      updateModelValue(
        getModelValue(keys, selectedItems.value, props.checkedValueStrategy)
      );
      focusSearchInput();
    };
    const handleTreeExpand = () => {
      focusSearchInput();
    };
    const handleTreeCollapse = () => {
      focusSearchInput();
    };
    watch(
      () => props.modelValue,
      (modelValue) => {
        updateSelectedItems(modelValue);
      },
      { deep: true }
    );
    watch(
      [() => props.cacheData, optionData],
      () => {
        if (!selectedItems.value.length) {
          return;
        }
        if (!props.multiple) {
          const item = getItemByValue(props.modelValue);
          const value = props.modelValue;
          const label = item ? item[treeOptions.value.label] : String(value);
          selectedItems.value = [{ label, value }];
          return;
        }
        selectedItems.value = getMultipleSelected(props.modelValue);
      },
      { deep: true }
    );
    watch(
      [() => props.showCheckedStrategy, () => {
        var _a;
        return (_a = props.treeProps) == null ? void 0 : _a.checkStrictly;
      }],
      () => {
        if (props.multiple && !isEmptyValue(props.modelValue) && props.modelValue.length) {
          if (!props.checkedValueStrategy) {
            const values = props.modelValue;
            selectedItems.value = getMultipleSelected(values);
            updateModelValue(
              getModelValue(
                values,
                selectedItems.value,
                props.checkedValueStrategy
              )
            );
          } else {
            const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
            selectedItems.value = getMultipleSelected(keys);
            updateModelValue(
              getModelValue(keys, selectedItems.value, props.checkedValueStrategy)
            );
          }
        }
      }
    );
    watch(
      () => props.checkedValueStrategy,
      () => {
        if (!props.multiple) {
          return;
        }
        const keys = treeRef.value && treeRef.value.getCheckedKeys() || [];
        updateModelValue(
          getModelValue(keys, selectedItems.value, props.checkedValueStrategy)
        );
      }
    );
    watch(
      () => props.disabled,
      (disabled) => {
        if (disabled) {
          updateVisible(false);
        }
      }
    );
    onMounted(() => {
      if (!isEmptyValue(props.modelValue) && !(props.multiple && !props.modelValue.length)) {
        updateSelectedItems(props.modelValue);
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
      return openBlock(), createBlock(EleBasicSelect, {
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
      }, createSlots({
        default: withCtx(() => [
          createVNode(unref(ElTreeV2), mergeProps({
            itemSize: 32,
            filterMethod: treeFilter
          }, unref(omit)(_ctx.treeProps, ["data"]), {
            ref_key: "treeRef",
            ref: treeRef,
            data: unref(optionData),
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
            default: withCtx((slotProps) => [
              createElementVNode("span", {
                class: normalizeClass([
                  "el-tree-node__label",
                  { "is-disabled": slotProps.node.disabled }
                ]),
                title: slotProps.node.label
              }, [
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps || {})), () => [
                  createTextVNode(toDisplayString(slotProps.node.label), 1)
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
          fn: withCtx((slotProps) => [
            renderSlot(_ctx.$slots, "maxTagPlaceholder", normalizeProps(guardReactiveProps(slotProps || {})))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["value", "multiple", "disabled", "size", "clearable", "placeholder", "maxTagCount", "maxTagTextLength", "tagType", "automaticDropdown", "filterable", "teleported", "persistent", "placement", "transition", "popperWidth", "popperOptions", "popperClass", "selectStyle", "inputStyle", "selectTagsStyle", "selectedLabel", "selected", "visible"]);
    };
  }
});
export {
  _sfc_main as default
};
