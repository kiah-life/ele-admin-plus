"use strict";
const vue = require("vue");
const EleModal = require("../../ele-modal/index");
const ComponentList = require("./component-list");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "component-picker",
  props: {
    modelValue: { type: Boolean },
    addParentFormItemId: {},
    formItems: {},
    componentData: {},
    itemTypeData: {}
  },
  emits: ["update:modelValue", "updateItems"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleUpdateModelValue = (visible) => {
      emit("update:modelValue", visible);
    };
    const handleUpdateItems = (result) => {
      emit("updateItems", result);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleModal, {
        width: 808,
        maxable: true,
        position: "center",
        title: "组件库",
        modelValue: _ctx.modelValue,
        closeOnClickModal: false,
        destroyOnClose: true,
        bodyStyle: {
          height: "568px",
          minHeight: "100%",
          maxHeight: "100%",
          padding: 0
        },
        "onUpdate:modelValue": handleUpdateModelValue
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(ComponentList, {
            parentFormItemId: _ctx.addParentFormItemId,
            formItems: _ctx.formItems,
            componentData: _ctx.componentData,
            itemTypeData: _ctx.itemTypeData,
            class: "ele-pro-form-builder-component-picker",
            onUpdateItems: handleUpdateItems
          }, null, 8, ["parentFormItemId", "formItems", "componentData", "itemTypeData"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
module.exports = _sfc_main;
