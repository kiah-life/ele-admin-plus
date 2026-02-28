import { defineComponent, ref, computed, watch, openBlock, createBlock, withCtx, renderSlot, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, createVNode, unref, withKeys, createSlots, withModifiers, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import { ElInput, ElIcon, ElTag } from "element-plus";
import { CloseCircleFilled, ArrowDown } from "../icons";
import EleTooltip from "../ele-tooltip/index";
import ReceiverView from "../ele-config-provider/components/receiver-view";
import { basicSelectProps, basicSelectEmits } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleBasicSelect" },
  __name: "index",
  props: basicSelectProps,
  emits: basicSelectEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tooltipRef = ref(null);
    const inputRef = ref(null);
    const searchRef = ref(null);
    const inputValue = ref(
      props.multiple || !props.selectedLabel ? "" : props.selectedLabel
    );
    const searchValue = ref("");
    const isEmpty = computed(() => {
      if (!props.multiple) {
        return props.value == null || props.value === "";
      }
      return !Array.isArray(props.value) || !props.value.length;
    });
    const inputPlaceholder = computed(() => {
      const str = isEmpty.value && props.placeholder ? props.placeholder : "";
      if (!props.filterable || !props.visible || props.multiple) {
        return str;
      }
      return props.selectedLabel || str;
    });
    const isCollapse = computed(() => {
      return typeof props.maxTagCount === "number" && props.selected != null && props.selected.length > props.maxTagCount;
    });
    const currentTags = computed(() => {
      if (!isCollapse.value || isEmpty.value || props.selected == null) {
        return props.selected || [];
      }
      return props.selected.slice(0, props.maxTagCount);
    });
    const omittedTags = computed(() => {
      if (!isCollapse.value || isEmpty.value || props.selected == null) {
        return [];
      }
      return props.selected.slice(props.maxTagCount);
    });
    const omittedSize = computed(() => {
      if (isEmpty.value || props.maxTagCount == null || props.maxTagCount < 0) {
        return 0;
      }
      return props.value.length - props.maxTagCount;
    });
    const updatePopper = () => {
      tooltipRef.value && tooltipRef.value.updatePopper();
    };
    const focusSearchInput = (e) => {
      if (props.filterable && props.visible) {
        if (e != null && e.target != null) {
          const target = e.target;
          if (target.nodeName && target.nodeName.toLowerCase() === "input") {
            return;
          }
        }
        const input = props.multiple ? searchRef.value : inputRef.value;
        input && input.focus();
      }
    };
    const updateSearchValue = (modelValue) => {
      if (props.filterable && props.visible && props.multiple) {
        searchValue.value = modelValue;
        emit("filterChange", modelValue);
      }
    };
    const updateInputValue = (modelValue) => {
      if (props.filterable && props.visible && !props.multiple) {
        inputValue.value = modelValue;
        emit("filterChange", modelValue);
      }
    };
    const updateVisible = (visible) => {
      if (!props.disabled || !visible) {
        emit("update:visible", visible);
      }
    };
    const handleTagClose = (item) => {
      if (!props.disabled) {
        emit("removeTag", item);
      }
    };
    const handleClear = () => {
      emit("clear");
    };
    const handleInputClick = (e) => {
      if (props.automaticDropdown && props.visible) {
        e.stopPropagation();
      }
    };
    const handleInputFocus = (e) => {
      if (props.automaticDropdown && !props.visible) {
        updateVisible(true);
      }
      emit("focus", e);
    };
    const handleInputBlur = (e) => {
      emit("blur", e);
    };
    const handleInputEsc = (e) => {
      if (!props.disabled && props.visible) {
        e.stopPropagation();
        e.preventDefault();
        updateVisible(false);
      }
    };
    watch(
      () => props.selectedLabel,
      (label) => {
        if (!props.filterable || !props.visible) {
          inputValue.value = props.multiple || !label ? "" : label;
        }
      }
    );
    watch(
      () => props.visible,
      (visible) => {
        if (props.filterable) {
          if (props.multiple) {
            searchValue.value = "";
            if (visible) {
              focusSearchInput();
            }
          } else {
            const label = props.selectedLabel;
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
      return openBlock(), createBlock(EleTooltip, {
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
        body: withCtx(() => [
          _ctx.persistent || _ctx.visible ? (openBlock(), createBlock(ReceiverView, {
            key: 0,
            class: "ele-popover-body",
            onClick: focusSearchInput
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass([
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
            style: normalizeStyle(_ctx.selectStyle)
          }, [
            createVNode(unref(ElInput), {
              ref_key: "inputRef",
              ref: inputRef,
              size: _ctx.size,
              disabled: _ctx.disabled,
              validateEvent: false,
              modelValue: inputValue.value,
              placeholder: _ctx.filterable && _ctx.multiple && _ctx.visible ? "" : inputPlaceholder.value,
              readonly: !_ctx.filterable || !_ctx.visible || _ctx.multiple,
              style: normalizeStyle(_ctx.inputStyle),
              "onUpdate:modelValue": updateInputValue,
              onClick: handleInputClick,
              onFocus: handleInputFocus,
              onBlur: handleInputBlur,
              onKeydown: withKeys(handleInputEsc, ["esc"])
            }, createSlots({
              suffix: withCtx(() => [
                _ctx.clearable && !_ctx.disabled && !isEmpty.value ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: "ele-select-clear el-input__icon",
                  onClick: withModifiers(handleClear, ["stop"])
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "clearIcon", {}, () => [
                      createVNode(unref(CloseCircleFilled))
                    ])
                  ]),
                  _: 3
                })) : createCommentVNode("", true),
                createVNode(unref(ElIcon), { class: "ele-select-arrow el-input__icon" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "suffixIcon", { visible: _ctx.visible }, () => [
                      createVNode(unref(ArrowDown))
                    ])
                  ]),
                  _: 3
                })
              ]),
              _: 2
            }, [
              _ctx.$slots.prefix ? {
                name: "prefix",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "prefix")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["size", "disabled", "modelValue", "placeholder", "readonly", "style"]),
            _ctx.multiple ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "ele-select-tags",
              style: normalizeStyle(_ctx.selectTagsStyle)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentTags.value, (item, index) => {
                return openBlock(), createBlock(unref(ElTag), {
                  key: index + "-" + item.value,
                  size: _ctx.size,
                  type: _ctx.tagType,
                  closable: !_ctx.disabled,
                  disableTransitions: true,
                  title: item.label,
                  onClose: ($event) => handleTagClose(item)
                }, {
                  default: withCtx(() => [
                    item.label && _ctx.maxTagTextLength && item.label.length > _ctx.maxTagTextLength ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(item.label.slice(0, _ctx.maxTagTextLength)) + "... ", 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(item.label), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["size", "type", "closable", "title", "onClose"]);
              }), 128)),
              isCollapse.value ? (openBlock(), createBlock(unref(ElTag), {
                key: 0,
                size: _ctx.size,
                type: _ctx.tagType,
                disableTransitions: true
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "maxTagPlaceholder", {
                    omittedValues: omittedTags.value,
                    omittedSize: omittedSize.value
                  }, () => [
                    createTextVNode(" +" + toDisplayString(omittedSize.value), 1)
                  ])
                ]),
                _: 3
              }, 8, ["size", "type"])) : createCommentVNode("", true),
              !_ctx.disabled && _ctx.filterable ? (openBlock(), createBlock(unref(ElTag), {
                key: 1,
                size: _ctx.size,
                disableTransitions: true,
                class: "ele-select-search"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElInput), {
                    ref_key: "searchRef",
                    ref: searchRef,
                    size: _ctx.size,
                    validateEvent: false,
                    modelValue: searchValue.value,
                    placeholder: inputPlaceholder.value,
                    "onUpdate:modelValue": updateSearchValue,
                    onKeydown: withKeys(handleInputEsc, ["esc"])
                  }, null, 8, ["size", "modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["size"])) : createCommentVNode("", true)
            ], 4)) : createCommentVNode("", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["visible", "disabled", "placement", "teleported", "width", "popperClass", "popperOptions", "transition", "gpuAcceleration"]);
    };
  }
});
export {
  _sfc_main as default
};
