"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const EleModal = require("../../ele-modal/index");
const util$1 = require("../../ele-pro-form/util");
const EleProForm = require("../../ele-pro-form/index");
const util = require("../util");
const _hoisted_1 = { class: "ele-pro-form-builder-screen-radio" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "preview-modal",
  props: {
    modelValue: { type: Boolean },
    formProps: {},
    proFormComponent: {},
    itemTypeData: {},
    httpRequest: {}
  },
  emits: ["update:modelValue", "previewFormSubmit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const previewFormRef = vue.ref(null);
    const previewFormProps = vue.ref({ items: [] });
    const formData = vue.reactive({});
    const previewScreen = vue.ref("pc");
    const handleUpdateModelValue = (visible) => {
      emit("update:modelValue", visible);
    };
    const setPreviewFormDataFieldValue = (field, value) => {
      util$1.setValue(formData, field, value);
    };
    const handlePreviewFormSubmit = () => {
      emit("previewFormSubmit", formData);
    };
    const handlePreviewFormReset = () => {
      var _a;
      Object.keys(formData).forEach((k) => {
        formData[k] = void 0;
      });
      util$1.mergeValue(
        formData,
        util$1.getFormInitValue((_a = previewFormProps.value) == null ? void 0 : _a.items, props.itemTypeData)
      );
    };
    const handleUpdatePreviewScreen = (size) => {
      previewScreen.value = size;
    };
    vue.watch(
      () => props.modelValue,
      (visible) => {
        if (visible) {
          previewFormProps.value = JSON.parse(
            JSON.stringify(props.formProps || { items: [] })
          );
          handlePreviewFormReset();
          vue.nextTick(() => {
            vue.nextTick(() => {
              var _a, _b;
              (_b = (_a = previewFormRef.value) == null ? void 0 : _a.clearValidate) == null ? void 0 : _b.call(_a);
            });
          });
        }
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleModal, {
        width: 960,
        maxable: true,
        draggable: false,
        position: "center",
        closeOnClickModal: false,
        destroyOnClose: true,
        modelValue: _ctx.modelValue,
        "onUpdate:modelValue": handleUpdateModelValue
      }, {
        header: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(util.screenItems), (item) => {
              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: item.value,
                class: vue.normalizeClass([
                  "ele-pro-form-builder-header-tool",
                  "ele-pro-form-builder-screen-icon",
                  { "is-active": item.value === previewScreen.value }
                ]),
                onClick: ($event) => handleUpdatePreviewScreen(item.value)
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.icon), {
                    style: vue.normalizeStyle(item.iconStyle)
                  }, null, 8, ["style"]))
                ]),
                _: 2
              }, 1032, ["class", "onClick"]);
            }), 128))
          ])
        ]),
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.proFormComponent || EleProForm), vue.mergeProps({ validateOnRuleChange: false }, previewFormProps.value, {
            ref_key: "previewFormRef",
            ref: previewFormRef,
            model: formData,
            searchExpand: formData.searchExpand,
            "onUpdate:searchExpand": _cache[0] || (_cache[0] = ($event) => formData.searchExpand = $event),
            editable: false,
            itemTypeData: _ctx.itemTypeData,
            httpRequest: _ctx.httpRequest,
            class: [
              "ele-pro-form-builder-preview-form",
              { "is-pc": previewScreen.value === "pc" },
              { "is-pad": previewScreen.value === "pad" },
              { "is-phone": previewScreen.value === "phone" }
            ],
            onUpdateValue: setPreviewFormDataFieldValue,
            onSubmit: handlePreviewFormSubmit,
            onReset: handlePreviewFormReset
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots), (name) => {
              return {
                name,
                fn: vue.withCtx((slotProps) => [
                  vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040, ["model", "searchExpand", "itemTypeData", "httpRequest", "class"]))
        ]),
        _: 3
      }, 8, ["modelValue"]);
    };
  }
});
module.exports = _sfc_main;
