import { defineComponent, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementVNode, normalizeStyle, renderSlot, createVNode, createTextVNode, toDisplayString, createElementBlock, Fragment, createCommentVNode, renderList, normalizeProps, guardReactiveProps } from "vue";
import { ElFormItem, ElButton, ElLink, ElIcon } from "element-plus";
import { ArrowUp, ArrowDown } from "../../icons";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(unref(ElFormItem), mergeProps(__props.footerProps || {}, {
        labelWidth: typeof ((_a = __props.footerProps) == null ? void 0 : _a.labelWidth) === "number" ? `${__props.footerProps.labelWidth}px` : (_b = __props.footerProps) == null ? void 0 : _b.labelWidth
      }), createSlots({
        default: withCtx(() => [
          createElementVNode("div", {
            style: normalizeStyle({
              flex: 1,
              display: "flex",
              alignItems: "center",
              ...__props.footerStyle || {}
            })
          }, [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              createVNode(unref(ElButton), mergeProps({ type: "primary" }, __props.submitButtonProps || {}, { onClick: handleSubmit }), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.submitText), 1)
                ]),
                _: 1
              }, 16),
              createVNode(unref(ElButton), mergeProps(__props.resetButtonProps || {}, { onClick: handleReset }), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.resetText), 1)
                ]),
                _: 1
              }, 16)
            ]),
            __props.showSearchExpand ? (openBlock(), createBlock(unref(ElLink), mergeProps({
              key: 0,
              type: "primary",
              underline: false,
              style: { "margin-left": "12px" }
            }, __props.searchExpandButtonProps || {}, { onClick: toggleSearchExpand }), {
              default: withCtx(() => [
                __props.searchExpand ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createElementVNode("span", null, toDisplayString(__props.searchShrinkText), 1),
                  createVNode(unref(ElIcon), { style: { "vertical-align": "-1px" } }, {
                    default: withCtx(() => [
                      createVNode(unref(ArrowUp))
                    ]),
                    _: 1
                  })
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createElementVNode("span", null, toDisplayString(__props.searchExpandText), 1),
                  createVNode(unref(ElIcon), { style: { "vertical-align": "-2px" } }, {
                    default: withCtx(() => [
                      createVNode(unref(ArrowDown))
                    ]),
                    _: 1
                  })
                ], 64))
              ]),
              _: 1
            }, 16)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "footerExtra")
          ], 4)
        ]),
        _: 2
      }, [
        renderList(Object.keys(__props.footerSlots || {}).filter(
          (k) => !ownSlots.includes(k) && !!(__props.footerSlots && __props.footerSlots[k] && _ctx.$slots[__props.footerSlots[k]])
        ), (name) => {
          return {
            name,
            fn: withCtx((slotProps) => {
              var _a2;
              return [
                renderSlot(_ctx.$slots, (_a2 = __props.footerSlots) == null ? void 0 : _a2[name], normalizeProps(guardReactiveProps(slotProps || {})))
              ];
            })
          };
        })
      ]), 1040, ["labelWidth"]);
    };
  }
});
export {
  _sfc_main as default
};
