import { defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, createSlots, withCtx, renderSlot, createVNode, mergeProps, renderList, normalizeProps, guardReactiveProps, nextTick } from "vue";
import { useResponsive } from "../ele-pro-layout/util";
import EleBasicSelect from "../ele-basic-select/index";
import { useFormValidate, isEmptyValue, valueIsChanged } from "../ele-basic-select/util";
import EleProTable from "../ele-pro-table/index";
import { isDisableRow } from "../ele-data-table/util";
import { tableSelectProps, tableSelectEmits } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleTableSelect" },
  __name: "index",
  props: tableSelectProps,
  emits: tableSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { validateChange } = useFormValidate();
    const isResponsive = useResponsive(props);
    const selectRef = ref(null);
    const tableRef = ref(null);
    const selectVisible = ref(false);
    const selectedItems = ref([]);
    const selectedLabel = computed(() => {
      const selected = selectedItems.value;
      return !props.multiple && selected.length ? selected[0].label : "";
    });
    const currentRowKey = computed(() => {
      if (props.multiple || isEmptyValue(props.modelValue)) {
        return;
      }
      return props.modelValue;
    });
    const selectedRowKeys = computed(() => {
      if (!props.multiple || isEmptyValue(props.modelValue)) {
        return;
      }
      return props.modelValue;
    });
    const selectPopperClass = computed(() => {
      const classes = ["ele-table-select-popper"];
      if (isResponsive.value) {
        classes.push("is-responsive");
      }
      if (props.popperClass) {
        classes.push(props.popperClass);
      }
      return classes.join(" ");
    });
    const updatePopover = () => {
      selectRef.value && selectRef.value.updatePopper();
    };
    const getItemByValue = (value) => {
      if (isEmptyValue(value)) {
        return;
      }
      if (props.cacheData != null) {
        const temp = props.cacheData.find((d) => d[props.valueKey] === value);
        if (temp != null) {
          return temp;
        }
      }
      if (!isEmptyValue(props.initValue)) {
        if (!props.multiple) {
          return props.initValue;
        }
        return props.initValue.find(
          (d) => d[props.valueKey] === value
        );
      }
    };
    const getCacheItemByValue = (value, cacheKeys, cacheData, tKeys, initValue) => {
      if (cacheData != null) {
        const index = cacheKeys.indexOf(value);
        if (index !== -1) {
          return cacheData[index];
        }
      }
      if (initValue != null) {
        const i = tKeys.indexOf(value);
        if (i !== -1) {
          return initValue[i];
        }
      }
    };
    const getMultipleItems = () => {
      const modelValue = props.modelValue;
      if (isEmptyValue(modelValue, true)) {
        return [];
      }
      const selected = [];
      const keys = [];
      if (tableRef.value) {
        const data = tableRef.value.getSelectionRows() || [];
        data.forEach((item) => {
          if (!item._isMock) {
            const value = item[props.valueKey];
            const index = modelValue.indexOf(value);
            if (index !== -1) {
              selected.push({ value, label: item[props.labelKey], index });
              keys.push(value);
            }
          }
        });
      }
      if (keys.length !== modelValue.length) {
        const { valueKey, cacheData, initValue } = props;
        const cacheKeys = cacheData ? cacheData.map((d) => d[valueKey]) : [];
        const tKeys = initValue ? initValue.map((d) => d[valueKey]) : [];
        modelValue.forEach((value) => {
          if (!keys.includes(value)) {
            const item = getCacheItemByValue(
              value,
              cacheKeys,
              cacheData,
              tKeys,
              initValue
            );
            const label = item ? item[props.labelKey] : String(value);
            const index = modelValue.indexOf(value);
            selected.push({ value, label, index });
          }
        });
      }
      selected.sort((a, b) => a.index - b.index);
      return selected;
    };
    const updateSelectedItems = (force) => {
      if (!props.multiple) {
        const value = props.modelValue;
        const d = selectedItems.value.length ? selectedItems.value[0] : null;
        if (isEmptyValue(value)) {
          if (d != null) {
            selectedItems.value = [];
          }
          return;
        }
        if (force || !d || d.value !== value) {
          const temp = tableRef.value ? tableRef.value.getCurrentRow() : null;
          const t = temp && temp[props.valueKey] === value ? temp : void 0;
          const item = t || getItemByValue(value);
          const label = item ? item[props.labelKey] : String(value);
          selectedItems.value = [{ label, value }];
        }
        return;
      }
      if (isEmptyValue(props.modelValue, true)) {
        if (selectedItems.value.length) {
          selectedItems.value = [];
          nextTick(() => {
            updatePopover();
          });
        }
        return;
      }
      const keys = selectedItems.value.map((d) => d.value);
      if (force || valueIsChanged(props.modelValue, keys, true)) {
        selectedItems.value = getMultipleItems();
        nextTick(() => {
          updatePopover();
        });
      }
    };
    const focusSearchInput = () => {
      selectRef.value && selectRef.value.focusSearchInput();
    };
    const handleInitValueChange = (initValue) => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        const key = initValue[valueKey];
        if (key === props.modelValue) {
          updateSelectedItems();
        } else {
          updateModelValue(key);
        }
        return;
      }
      const keys = initValue.map((d) => d[valueKey]);
      if (!valueIsChanged(props.modelValue, keys, true)) {
        updateSelectedItems();
      } else {
        updateModelValue(keys);
      }
    };
    const updateModelValue = (modelValue) => {
      if (valueIsChanged(modelValue, props.modelValue, props.multiple)) {
        emit("update:modelValue", modelValue);
        validateChange();
        emit("change", modelValue);
      }
    };
    const updateVisible = (visible) => {
      var _a;
      if (selectVisible.value !== visible) {
        selectVisible.value = visible;
        if (visible && ((_a = props.tableProps) == null ? void 0 : _a.virtual) && tableRef.value) {
          const virtualTableRef = tableRef.value.getTableRef();
          if (virtualTableRef != null && !virtualTableRef.wrapWidth) {
            nextTick(() => {
              virtualTableRef.updateWrapSize();
              nextTick(() => {
                updatePopover();
              });
            });
          }
        }
        emit("visibleChange", visible);
      }
    };
    const handleSelectRemove = (item) => {
      const values = props.modelValue || [];
      updateModelValue(values.filter((v) => v !== item.value));
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
    const handleSelectFilter = (keywords) => {
      emit("filterChange", keywords);
    };
    const updateSelectedRowKeys = (rowKeys) => {
      if (props.multiple) {
        updateModelValue(rowKeys);
      }
    };
    const updateCurrentRowKey = (rowKey) => {
      if (!props.multiple) {
        updateModelValue(rowKey);
      }
    };
    const handleTableCurrentChange = (row) => {
      if (!props.multiple && row != null) {
        updateSelectedItems(true);
      }
    };
    const handleTableSelectionChange = () => {
      if (props.multiple) {
        updateSelectedItems(true);
      }
    };
    const handleTableRowClick = (row) => {
      var _a;
      if (!props.multiple) {
        updateVisible(false);
        emit("select", row);
      } else if (((_a = props.tableProps) == null ? void 0 : _a.rowClickChecked) && tableRef.value && !isDisableRow(
        row,
        tableRef.value.getData().indexOf(row),
        tableRef.value.tableProps.columns
      )) {
        emit("select", tableRef.value.getSelectionRows() || []);
      }
    };
    const handleTableSelect = (selection) => {
      emit("select", selection);
    };
    const handleTableSelectAll = (selection) => {
      emit("select", selection);
    };
    const handleTableDone = () => {
      nextTick(() => {
        updatePopover();
      });
    };
    watch(
      () => props.modelValue,
      () => {
        updateSelectedItems();
      },
      { deep: true }
    );
    watch(
      () => props.cacheData,
      () => {
        updateSelectedItems(true);
      }
    );
    watch(
      () => props.initValue,
      (initValue) => {
        if (!isEmptyValue(initValue)) {
          handleInitValueChange(initValue);
        }
      },
      { deep: true }
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
      if (!isEmptyValue(props.initValue, props.multiple)) {
        handleInitValueChange(props.initValue);
      } else if (!isEmptyValue(props.modelValue, props.multiple)) {
        updateSelectedItems();
      }
    });
    __expose({
      selectRef,
      tableRef,
      selectVisible,
      selectedItems,
      selectedLabel,
      currentRowKey,
      selectedRowKeys,
      updatePopover,
      updateSelectedItems,
      updateVisible,
      focusSearchInput
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
        selected: selectedItems.value,
        visible: selectVisible.value,
        "onUpdate:visible": updateVisible,
        onFilterChange: handleSelectFilter,
        onRemoveTag: handleSelectRemove,
        onClear: handleSelectClear,
        onFocus: handleSelectFocus,
        onBlur: handleSelectBlur
      }, createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "topExtra"),
          createVNode(EleProTable, mergeProps({
            "onUpdate:selectedRowKeys": updateSelectedRowKeys,
            "onUpdate:currentRowKey": updateCurrentRowKey,
            onSelectionChange: handleTableSelectionChange,
            onCurrentChange: handleTableCurrentChange,
            onRowClick: handleTableRowClick,
            onSelect: handleTableSelect,
            onSelectAll: handleTableSelectAll,
            onDone: handleTableDone
          }, _ctx.tableProps || {}, {
            ref_key: "tableRef",
            ref: tableRef,
            rowKey: _ctx.valueKey,
            reserveCurrent: true,
            highlightCurrentRow: !_ctx.multiple,
            currentRowKey: currentRowKey.value,
            selectedRowKeys: selectedRowKeys.value
          }), createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots).filter(
              (k) => !["topExtra", "bottomExtra", "maxTagPlaceholder"].includes(k)
            ), (name) => {
              return {
                name,
                fn: withCtx((slotProps) => [
                  renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040, ["rowKey", "highlightCurrentRow", "currentRowKey", "selectedRowKeys"]),
          renderSlot(_ctx.$slots, "bottomExtra")
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
