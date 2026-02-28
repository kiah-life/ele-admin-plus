import { defineComponent, ref, onMounted, openBlock, createElementBlock, toDisplayString, createCommentVNode, createElementVNode, createBlock, resolveDynamicComponent } from "vue";
import { codeStringPrefix } from "../../ele-pro-form/components/render-util";
import CodeEditer from "./code-editer";
const _hoisted_1 = { class: "ele-pro-form-builder-code-edit-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-code-edit-header"
};
const _hoisted_3 = { class: "ele-pro-form-builder-code-edit-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "options-code",
  props: {
    data: {},
    codeTips: {},
    codePlaceholder: {},
    codeEditerComponent: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const codeContent = ref("");
    const getResult = () => {
      const code = codeContent.value;
      if (code == null || !code) {
        return;
      }
      return `${codeStringPrefix}${code}`;
    };
    onMounted(() => {
      if (props.data == null || typeof props.data !== "string") {
        codeContent.value = props.codePlaceholder ?? "";
        return;
      }
      const data = props.data.trim();
      if (data.startsWith(codeStringPrefix)) {
        codeContent.value = data.slice(codeStringPrefix.length);
        return;
      }
      codeContent.value = (data || props.codePlaceholder) ?? "";
    });
    __expose({
      getResult
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.codeTips ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.codeTips), 1)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.codeEditerComponent || CodeEditer), {
            modelValue: codeContent.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => codeContent.value = $event)
          }, null, 8, ["modelValue"]))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
