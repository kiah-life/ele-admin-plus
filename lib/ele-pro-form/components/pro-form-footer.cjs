"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "ProFormFooter" },
  __name: "pro-form-footer",
  props: {
    /** 底栏 ElFormItem 属性 */
    footerProps: Object,
    /** 底栏 ElFormItem 插槽 */
    footerSlots: Object,
    /** 底栏样式 */
    footerStyle: Object,
    /** 提交按钮文本 */
    submitText: String,
    /** 重置按钮文本 */
    resetText: String,
    /** 提交按钮属性 */
    submitButtonProps: Object,
    /** 重置按钮属性 */
    resetButtonProps: Object,
    /** 是否在底栏显示表单展开收起按钮 */
    showSearchExpand: Boolean,
    /** 搜索表单展开状态 */
    searchExpand: Boolean,
    /** 展开和收起按钮属性 */
    searchExpandButtonProps: Object,
    /** 展开按钮的文字 */
    searchExpandText: String,
    /** 收起按钮的文字 */
    searchShrinkText: String
  },
  emits: {
    updateSearchExpand: (_expand) => true,
    submit: () => true,
    reset: () => true
  },
  setup(__props, { emit: __emit }) {
    const ownSlots = ["footer", "footerExtra"];
    const props = __props;
    const emit = __emit;
    const toggleSearchExpand = () => {
      emit("updateSearchExpand", !props.searchExpand);
    };
    const handleSubmit = () => {
      emit("submit");
    };
    const handleReset = () => {
      emit("reset");
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElFormItem), vue.mergeProps(__props.footerProps || {}, {
        labelWidth: typeof ((_a = __props.footerProps) == null ? void 0 : _a.labelWidth) === "number" ? `${__props.footerProps.labelWidth}px` : (_b = __props.footerProps) == null ? void 0 : _b.labelWidth
      }), vue.createSlots({
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            style: vue.normalizeStyle({
              flex: 1,
              display: "flex",
              alignItems: "center",
              ...__props.footerStyle || {}
            })
          }, [
            vue.renderSlot(_ctx.$slots, "footer", {}, () => [
              vue.createVNode(vue.unref(elementPlus.ElButton), vue.mergeProps({ type: "primary" }, __props.submitButtonProps || {}, { onClick: handleSubmit }), {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(__props.submitText), 1)
                ]),
                _: 1
              }, 16),
              vue.createVNode(vue.unref(elementPlus.ElButton), vue.mergeProps(__props.resetButtonProps || {}, { onClick: handleReset }), {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(__props.resetText), 1)
                ]),
                _: 1
              }, 16)
            ]),
            __props.showSearchExpand ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElLink), vue.mergeProps({
              key: 0,
              type: "primary",
              underline: false,
              style: { "margin-left": "12px" }
            }, __props.searchExpandButtonProps || {}, { onClick: toggleSearchExpand }), {
              default: vue.withCtx(() => [
                __props.searchExpand ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.createElementVNode("span", null, vue.toDisplayString(__props.searchShrinkText), 1),
                  vue.createVNode(vue.unref(elementPlus.ElIcon), { style: { "vertical-align": "-1px" } }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(icons.ArrowUp))
                    ]),
                    _: 1
                  })
                ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                  vue.createElementVNode("span", null, vue.toDisplayString(__props.searchExpandText), 1),
                  vue.createVNode(vue.unref(elementPlus.ElIcon), { style: { "vertical-align": "-2px" } }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(icons.ArrowDown))
                    ]),
                    _: 1
                  })
                ], 64))
              ]),
              _: 1
            }, 16)) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "footerExtra")
          ], 4)
        ]),
        _: 2
      }, [
        vue.renderList(Object.keys(__props.footerSlots || {}).filter(
          (k) => !ownSlots.includes(k) && !!(__props.footerSlots && __props.footerSlots[k] && _ctx.$slots[__props.footerSlots[k]])
        ), (name) => {
          return {
            name,
            fn: vue.withCtx((slotProps) => {
              var _a2;
              return [
                vue.renderSlot(_ctx.$slots, (_a2 = __props.footerSlots) == null ? void 0 : _a2[name], vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
              ];
            })
          };
        })
      ]), 1040, ["labelWidth"]);
    };
  }
});
module.exports = _sfc_main;
