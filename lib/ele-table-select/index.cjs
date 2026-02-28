"use strict";
const vue = require("vue");
const util$1 = require("../ele-pro-layout/util");
const EleBasicSelect = require("../ele-basic-select/index");
const util = require("../ele-basic-select/util");
const EleProTable = require("../ele-pro-table/index");
const util$2 = require("../ele-data-table/util");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleTableSelect" },
  __name: "index",
  props: props.tableSelectProps,
  emits: props.tableSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const { validateChange } = util.useFormValidate();
    const isResponsive = util$1.useResponsive(props2);
    const selectRef = vue.ref(null);
    const tableRef = vue.ref(null);
    const selectVisible = vue.ref(false);
    const selectedItems = vue.ref([]);
    const selectedLabel = vue.computed(() => {
      const selected = selectedItems.value;
      return !props2.multiple && selected.length ? selected[0].label : "";
    });
    const currentRowKey = vue.computed(() => {
      if (props2.multiple || util.isEmptyValue(props2.modelValue)) {
        return;
      }
      return props2.modelValue;
    });
    const selectedRowKeys = vue.computed(() => {
      if (!props2.multiple || util.isEmptyValue(props2.modelValue)) {
        return;
      }
      return props2.modelValue;
    });
    const selectPopperClass = vue.computed(() => {
      const classes = ["ele-table-select-popper"];
      if (isResponsive.value) {
        classes.push("is-responsive");
      }
      if (props2.popperClass) {
        classes.push(props2.popperClass);
      }
      return classes.join(" ");
    });
    const updatePopover = () => {
      selectRef.value && selectRef.value.updatePopper();
    };
    const getItemByValue = (value) => {
      if (util.isEmptyValue(value)) {
        return;
      }
      if (props2.cacheData != null) {
        const temp = props2.cacheData.find((d) => d[props2.valueKey] === value);
        if (temp != null) {
          return temp;
        }
      }
      if (!util.isEmptyValue(props2.initValue)) {
        if (!props2.multiple) {
          return props2.initValue;
        }
        return props2.initValue.find(
          (d) => d[props2.valueKey] === value
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
      const modelValue = props2.modelValue;
      if (util.isEmptyValue(modelValue, true)) {
        return [];
      }
      const selected = [];
      const keys = [];
      if (tableRef.value) {
        const data = tableRef.value.getSelectionRows() || [];
        data.forEach((item) => {
          if (!item._isMock) {
            const value = item[props2.valueKey];
            const index = modelValue.indexOf(value);
            if (index !== -1) {
              selected.push({ value, label: item[props2.labelKey], index });
              keys.push(value);
            }
          }
        });
      }
      if (keys.length !== modelValue.length) {
        const { valueKey, cacheData, initValue } = props2;
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
            const label = item ? item[props2.labelKey] : String(value);
            const index = modelValue.indexOf(value);
            selected.push({ value, label, index });
          }
        });
      }
      selected.sort((a, b) => a.index - b.index);
      return selected;
    };
    const updateSelectedItems = (force) => {
      if (!props2.multiple) {
        const value = props2.modelValue;
        const d = selectedItems.value.length ? selectedItems.value[0] : null;
        if (util.isEmptyValue(value)) {
          if (d != null) {
            selectedItems.value = [];
          }
          return;
        }
        if (force || !d || d.value !== value) {
          const temp = tableRef.value ? tableRef.value.getCurrentRow() : null;
          const t = temp && temp[props2.valueKey] === value ? temp : void 0;
          const item = t || getItemByValue(value);
          const label = item ? item[props2.labelKey] : String(value);
          selectedItems.value = [{ label, value }];
        }
        return;
      }
      if (util.isEmptyValue(props2.modelValue, true)) {
        if (selectedItems.value.length) {
          selectedItems.value = [];
          vue.nextTick(() => {
            updatePopover();
          });
        }
        return;
      }
      const keys = selectedItems.value.map((d) => d.value);
      if (force || util.valueIsChanged(props2.modelValue, keys, true)) {
        selectedItems.value = getMultipleItems();
        vue.nextTick(() => {
          updatePopover();
        });
      }
    };
    const focusSearchInput = () => {
      selectRef.value && selectRef.value.focusSearchInput();
    };
    const handleInitValueChange = (initValue) => {
      const valueKey = props2.valueKey;
      if (!props2.multiple) {
        const key = initValue[valueKey];
        if (key === props2.modelValue) {
          updateSelectedItems();
        } else {
          updateModelValue(key);
        }
        return;
      }
      const keys = initValue.map((d) => d[valueKey]);
      if (!util.valueIsChanged(props2.modelValue, keys, true)) {
        updateSelectedItems();
      } else {
        updateModelValue(keys);
      }
    };
    const updateModelValue = (modelValue) => {
      if (util.valueIsChanged(modelValue, props2.modelValue, props2.multiple)) {
        emit("update:modelValue", modelValue);
        validateChange();
        emit("change", modelValue);
      }
    };
    const updateVisible = (visible) => {
      var _a;
      if (selectVisible.value !== visible) {
        selectVisible.value = visible;
        if (visible && ((_a = props2.tableProps) == null ? void 0 : _a.virtual) && tableRef.value) {
          const virtualTableRef = tableRef.value.getTableRef();
          if (virtualTableRef != null && !virtualTableRef.wrapWidth) {
            vue.nextTick(() => {
              virtualTableRef.updateWrapSize();
              vue.nextTick(() => {
                updatePopover();
              });
            });
          }
        }
        emit("visibleChange", visible);
      }
    };
    const handleSelectRemove = (item) => {
      const values = props2.modelValue || [];
      updateModelValue(values.filter((v) => v !== item.value));
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
    const handleSelectFilter = (keywords) => {
      emit("filterChange", keywords);
    };
    const updateSelectedRowKeys = (rowKeys) => {
      if (props2.multiple) {
        updateModelValue(rowKeys);
      }
    };
    const updateCurrentRowKey = (rowKey) => {
      if (!props2.multiple) {
        updateModelValue(rowKey);
      }
    };
    const handleTableCurrentChange = (row) => {
      if (!props2.multiple && row != null) {
        updateSelectedItems(true);
      }
    };
    const handleTableSelectionChange = () => {
      if (props2.multiple) {
        updateSelectedItems(true);
      }
    };
    const handleTableRowClick = (row) => {
      var _a;
      if (!props2.multiple) {
        updateVisible(false);
        emit("select", row);
      } else if (((_a = props2.tableProps) == null ? void 0 : _a.rowClickChecked) && tableRef.value && !util$2.isDisableRow(
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
      vue.nextTick(() => {
        updatePopover();
      });
    };
    vue.watch(
      () => props2.modelValue,
      () => {
        updateSelectedItems();
      },
      { deep: true }
    );
    vue.watch(
      () => props2.cacheData,
      () => {
        updateSelectedItems(true);
      }
    );
    vue.watch(
      () => props2.initValue,
      (initValue) => {
        if (!util.isEmptyValue(initValue)) {
          handleInitValueChange(initValue);
        }
      },
      { deep: true }
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
      if (!util.isEmptyValue(props2.initValue, props2.multiple)) {
        handleInitValueChange(props2.initValue);
      } else if (!util.isEmptyValue(props2.modelValue, props2.multiple)) {
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
        selected: selectedItems.value,
        visible: selectVisible.value,
        "onUpdate:visible": updateVisible,
        onFilterChange: handleSelectFilter,
        onRemoveTag: handleSelectRemove,
        onClear: handleSelectClear,
        onFocus: handleSelectFocus,
        onBlur: handleSelectBlur
      }, vue.createSlots({
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "topExtra"),
          vue.createVNode(EleProTable, vue.mergeProps({
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
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots).filter(
              (k) => !["topExtra", "bottomExtra", "maxTagPlaceholder"].includes(k)
            ), (name) => {
              return {
                name,
                fn: vue.withCtx((slotProps) => [
                  vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040, ["rowKey", "highlightCurrentRow", "currentRowKey", "selectedRowKeys"]),
          vue.renderSlot(_ctx.$slots, "bottomExtra")
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
