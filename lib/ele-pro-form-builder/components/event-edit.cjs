"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const renderUtil = require("../../ele-pro-form/components/render-util");
const EleModal = require("../../ele-modal/index");
const CodeEditer = require("./code-editer");
const _hoisted_1 = { class: "ele-pro-form-builder-code-edit-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-code-edit-header"
};
const _hoisted_3 = { class: "ele-pro-form-builder-code-edit-body" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "event-edit",
  props: {
    modelValue: {},
    title: {},
    codeTips: {},
    codePlaceholder: {},
    codeEditerComponent: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = vue.ref(false);
    const codeContent = vue.ref("");
    const openModal = () => {
      if (props.modelValue == null || typeof props.modelValue !== "string") {
        codeContent.value = props.codePlaceholder ?? "";
      } else if (props.modelValue.trim().startsWith(renderUtil.codeStringPrefix)) {
        codeContent.value = props.modelValue.trim().slice(renderUtil.codeStringPrefix.length);
      } else {
        codeContent.value = (props.modelValue || props.codePlaceholder) ?? "";
      }
      visible.value = true;
    };
    const getResult = () => {
      const code = codeContent.value;
      if (code == null || !code) {
        return;
      }
      return `${renderUtil.codeStringPrefix}${code}`;
    };
    const handleCancel = () => {
      visible.value = false;
      codeContent.value = "";
    };
    const handleSave = () => {
      const result = getResult();
      handleCancel();
      emit("update:modelValue", result);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createVNode(vue.unref(elementPlus.ElButton), {
          size: "small",
          style: { width: "100%" },
          onClick: openModal
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }),
        vue.createVNode(EleModal, {
          width: 800,
          maxable: true,
          position: "center",
          title: _ctx.title,
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
          closeOnClickModal: false,
          destroyOnClose: true,
          bodyStyle: {
            height: "520px",
            minHeight: "100%",
            maxHeight: "100%",
            padding: "8px 16px"
          }
        }, {
          footer: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              size: "default",
              onClick: handleCancel
            }, {
              default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                vue.createTextVNode("取消")
              ])),
              _: 1
            }),
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              type: "primary",
              size: "default",
              onClick: handleSave
            }, {
              default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                vue.createTextVNode(" 保存 ")
              ])),
              _: 1
            })
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1, [
              _ctx.codeTips ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, vue.toDisplayString(_ctx.codeTips), 1)) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", _hoisted_3, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.codeEditerComponent || CodeEditer), {
                  modelValue: codeContent.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => codeContent.value = $event)
                }, null, 8, ["modelValue"]))
              ])
            ])
          ]),
          _: 1
        }, 8, ["title", "modelValue"])
      ], 64);
    };
  }
});
module.exports = _sfc_main;
