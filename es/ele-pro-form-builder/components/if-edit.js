import { defineComponent, ref, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createTextVNode, toDisplayString, createElementVNode, createCommentVNode, createBlock, resolveDynamicComponent } from "vue";
import { ElButton } from "element-plus";
import EleModal from "../../ele-modal/index";
import CodeEditer from "./code-editer";
const _hoisted_1 = { class: "ele-pro-form-builder-code-edit-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-code-edit-header"
};
const _hoisted_3 = { class: "ele-pro-form-builder-code-edit-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "if-edit",
  props: {
    modelValue: {},
    title: {},
    codeTips: {},
    codeEditerComponent: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = ref(false);
    const codeContent = ref("");
    const openModal = () => {
      codeContent.value = props.modelValue ?? "";
      visible.value = true;
    };
    const handleCancel = () => {
      visible.value = false;
      codeContent.value = "";
    };
    const handleSave = () => {
      const result = codeContent.value;
      handleCancel();
      emit("update:modelValue", result === "" ? void 0 : result);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(ElButton), {
          size: "small",
          style: { width: "100%" },
          onClick: openModal
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }),
        createVNode(EleModal, {
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
          footer: withCtx(() => [
            createVNode(unref(ElButton), {
              size: "default",
              onClick: handleCancel
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("取消")
              ])),
              _: 1
            }),
            createVNode(unref(ElButton), {
              type: "primary",
              size: "default",
              onClick: handleSave
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode(" 保存 ")
              ])),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _ctx.codeTips ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.codeTips), 1)) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_3, [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.codeEditerComponent || CodeEditer), {
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
export {
  _sfc_main as default
};
