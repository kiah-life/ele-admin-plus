"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const EleTooltip = require("../ele-tooltip/index");
const ReceiverView = require("../ele-config-provider/components/receiver-view");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleBasicSelect" },
  __name: "index",
  props: props.basicSelectProps,
  emits: props.basicSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const tooltipRef = vue.ref(null);
    const inputRef = vue.ref(null);
    const searchRef = vue.ref(null);
    const inputValue = vue.ref(
      props2.multiple || !props2.selectedLabel ? "" : props2.selectedLabel
    );
    const searchValue = vue.ref("");
    const isEmpty = vue.computed(() => {
      if (!props2.multiple) {
        return props2.value == null || props2.value === "";
      }
      return !Array.isArray(props2.value) || !props2.value.length;
    });
    const inputPlaceholder = vue.computed(() => {
      const str = isEmpty.value && props2.placeholder ? props2.placeholder : "";
      if (!props2.filterable || !props2.visible || props2.multiple) {
        return str;
      }
      return props2.selectedLabel || str;
    });
    const isCollapse = vue.computed(() => {
      return typeof props2.maxTagCount === "number" && props2.selected != null && props2.selected.length > props2.maxTagCount;
    });
    const currentTags = vue.computed(() => {
      if (!isCollapse.value || isEmpty.value || props2.selected == null) {
        return props2.selected || [];
      }
      return props2.selected.slice(0, props2.maxTagCount);
    });
    const omittedTags = vue.computed(() => {
      if (!isCollapse.value || isEmpty.value || props2.selected == null) {
        return [];
      }
      return props2.selected.slice(props2.maxTagCount);
    });
    const omittedSize = vue.computed(() => {
      if (isEmpty.value || props2.maxTagCount == null || props2.maxTagCount < 0) {
        return 0;
      }
      return props2.value.length - props2.maxTagCount;
    });
    const updatePopper = () => {
      tooltipRef.value && tooltipRef.value.updatePopper();
    };
    const focusSearchInput = (e) => {
      if (props2.filterable && props2.visible) {
        if (e != null && e.target != null) {
          const target = e.target;
          if (target.nodeName && target.nodeName.toLowerCase() === "input") {
            return;
          }
        }
        const input = props2.multiple ? searchRef.value : inputRef.value;
        input && input.focus();
      }
    };
    const updateSearchValue = (modelValue) => {
      if (props2.filterable && props2.visible && props2.multiple) {
        searchValue.value = modelValue;
        emit("filterChange", modelValue);
      }
    };
    const updateInputValue = (modelValue) => {
      if (props2.filterable && props2.visible && !props2.multiple) {
        inputValue.value = modelValue;
        emit("filterChange", modelValue);
      }
    };
    const updateVisible = (visible) => {
      if (!props2.disabled || !visible) {
        emit("update:visible", visible);
      }
    };
    const handleTagClose = (item) => {
      if (!props2.disabled) {
        emit("removeTag", item);
      }
    };
    const handleClear = () => {
      emit("clear");
    };
    const handleInputClick = (e) => {
      if (props2.automaticDropdown && props2.visible) {
        e.stopPropagation();
      }
    };
    const handleInputFocus = (e) => {
      if (props2.automaticDropdown && !props2.visible) {
        updateVisible(true);
      }
      emit("focus", e);
    };
    const handleInputBlur = (e) => {
      emit("blur", e);
    };
    const handleInputEsc = (e) => {
      if (!props2.disabled && props2.visible) {
        e.stopPropagation();
        e.preventDefault();
        updateVisible(false);
      }
    };
    vue.watch(
      () => props2.selectedLabel,
      (label) => {
        if (!props2.filterable || !props2.visible) {
          inputValue.value = props2.multiple || !label ? "" : label;
        }
      }
    );
    vue.watch(
      () => props2.visible,
      (visible) => {
        if (props2.filterable) {
          if (props2.multiple) {
            searchValue.value = "";
            if (visible) {
              focusSearchInput();
            }
          } else {
            const label = props2.selectedLabel;
            inputValue.value = visible || !label ? "" : label;
          }
        }
      }
    );
    __expose({
      tooltipRef,
      inputRef,
      searchRef,
      currentTags,
      omittedTags,
      omittedSize,
      updatePopper,
      focusSearchInput,
      updateSearchValue,
      updateInputValue,
      updateVisible
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleTooltip, {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        trigger: "click",
        visible: _ctx.visible,
        disabled: _ctx.disabled,
        placement: _ctx.placement,
        teleported: _ctx.teleported,
        width: _ctx.popperWidth,
        popperClass: _ctx.popperClass,
        popperOptions: _ctx.popperOptions,
        transition: _ctx.transition,
        gpuAcceleration: _ctx.transition === "el-fade-in-linear",
        effect: "light",
        persistent: true,
        isPopover: true,
        triggerKeys: [],
        "onUpdate:visible": updateVisible
      }, {
        body: vue.withCtx(() => [
          _ctx.persistent || _ctx.visible ? (vue.openBlock(), vue.createBlock(ReceiverView, {
            key: 0,
            class: "ele-popover-body",
            onClick: focusSearchInput
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })) : vue.createCommentVNode("", true)
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([
              "ele-select",
              _ctx.selectClass,
              { "is-empty": isEmpty.value },
              { "is-multiple": _ctx.multiple },
              { "is-disabled": _ctx.disabled },
              { "is-filterable": _ctx.filterable },
              { "is-small": _ctx.size === "small" },
              { "is-large": _ctx.size === "large" },
              { "is-opened": _ctx.visible }
            ]),
            style: vue.normalizeStyle(_ctx.selectStyle)
          }, [
            vue.createVNode(vue.unref(elementPlus.ElInput), {
              ref_key: "inputRef",
              ref: inputRef,
              size: _ctx.size,
              disabled: _ctx.disabled,
              validateEvent: false,
              modelValue: inputValue.value,
              placeholder: _ctx.filterable && _ctx.multiple && _ctx.visible ? "" : inputPlaceholder.value,
              readonly: !_ctx.filterable || !_ctx.visible || _ctx.multiple,
              style: vue.normalizeStyle(_ctx.inputStyle),
              "onUpdate:modelValue": updateInputValue,
              onClick: handleInputClick,
              onFocus: handleInputFocus,
              onBlur: handleInputBlur,
              onKeydown: vue.withKeys(handleInputEsc, ["esc"])
            }, vue.createSlots({
              suffix: vue.withCtx(() => [
                _ctx.clearable && !_ctx.disabled && !isEmpty.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                  key: 0,
                  class: "ele-select-clear el-input__icon",
                  onClick: vue.withModifiers(handleClear, ["stop"])
                }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
                      vue.createVNode(vue.unref(icons.CloseCircleFilled))
                    ])
                  ]),
                  _: 3
                })) : vue.createCommentVNode("", true),
                vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "ele-select-arrow el-input__icon" }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "suffixIcon", { visible: _ctx.visible }, () => [
                      vue.createVNode(vue.unref(icons.ArrowDown))
                    ])
                  ]),
                  _: 3
                })
              ]),
              _: 2
            }, [
              _ctx.$slots.prefix ? {
                name: "prefix",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "prefix")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["size", "disabled", "modelValue", "placeholder", "readonly", "style"]),
            _ctx.multiple ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "ele-select-tags",
              style: vue.normalizeStyle(_ctx.selectTagsStyle)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(currentTags.value, (item, index) => {
                return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTag), {
                  key: index + "-" + item.value,
                  size: _ctx.size,
                  type: _ctx.tagType,
                  closable: !_ctx.disabled,
                  disableTransitions: true,
                  title: item.label,
                  onClose: ($event) => handleTagClose(item)
                }, {
                  default: vue.withCtx(() => [
                    item.label && _ctx.maxTagTextLength && item.label.length > _ctx.maxTagTextLength ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(item.label.slice(0, _ctx.maxTagTextLength)) + "... ", 1)
                    ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      vue.createTextVNode(vue.toDisplayString(item.label), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["size", "type", "closable", "title", "onClose"]);
              }), 128)),
              isCollapse.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTag), {
                key: 0,
                size: _ctx.size,
                type: _ctx.tagType,
                disableTransitions: true
              }, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "maxTagPlaceholder", {
                    omittedValues: omittedTags.value,
                    omittedSize: omittedSize.value
                  }, () => [
                    vue.createTextVNode(" +" + vue.toDisplayString(omittedSize.value), 1)
                  ])
                ]),
                _: 3
              }, 8, ["size", "type"])) : vue.createCommentVNode("", true),
              !_ctx.disabled && _ctx.filterable ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTag), {
                key: 1,
                size: _ctx.size,
                disableTransitions: true,
                class: "ele-select-search"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElInput), {
                    ref_key: "searchRef",
                    ref: searchRef,
                    size: _ctx.size,
                    validateEvent: false,
                    modelValue: searchValue.value,
                    placeholder: inputPlaceholder.value,
                    "onUpdate:modelValue": updateSearchValue,
                    onKeydown: vue.withKeys(handleInputEsc, ["esc"])
                  }, null, 8, ["size", "modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["size"])) : vue.createCommentVNode("", true)
            ], 4)) : vue.createCommentVNode("", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["visible", "disabled", "placement", "teleported", "width", "popperClass", "popperOptions", "transition", "gpuAcceleration"]);
    };
  }
});
module.exports = _sfc_main;
