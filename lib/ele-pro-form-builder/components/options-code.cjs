"use strict";
const vue = require("vue");
const renderUtil = require("../../ele-pro-form/components/render-util");
const CodeEditer = require("./code-editer");
const _hoisted_1 = { class: "ele-pro-form-builder-code-edit-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-code-edit-header"
};
const _hoisted_3 = { class: "ele-pro-form-builder-code-edit-body" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "options-code",
  props: {
    data: {},
    codeTips: {},
    codePlaceholder: {},
    codeEditerComponent: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const codeContent = vue.ref("");
    const getResult = () => {
      const code = codeContent.value;
      if (code == null || !code) {
        return;
      }
      return `${renderUtil.codeStringPrefix}${code}`;
    };
    vue.onMounted(() => {
      if (props.data == null || typeof props.data !== "string") {
        codeContent.value = props.codePlaceholder ?? "";
        return;
      }
      const data = props.data.trim();
      if (data.startsWith(renderUtil.codeStringPrefix)) {
        codeContent.value = data.slice(renderUtil.codeStringPrefix.length);
        return;
      }
      codeContent.value = (data || props.codePlaceholder) ?? "";
    });
    __expose({
      getResult
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        _ctx.codeTips ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, vue.toDisplayString(_ctx.codeTips), 1)) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", _hoisted_3, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.codeEditerComponent || CodeEditer), {
            modelValue: codeContent.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => codeContent.value = $event)
          }, null, 8, ["modelValue"]))
        ])
      ]);
    };
  }
});
module.exports = _sfc_main;
