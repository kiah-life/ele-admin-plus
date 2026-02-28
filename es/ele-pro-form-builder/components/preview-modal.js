import { defineComponent, ref, reactive, watch, nextTick, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, Fragment, renderList, unref, normalizeClass, resolveDynamicComponent, normalizeStyle, mergeProps, createSlots, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import { ElIcon } from "element-plus";
import EleModal from "../../ele-modal/index";
import { setValue, mergeValue, getFormInitValue } from "../../ele-pro-form/util";
import EleProForm from "../../ele-pro-form/index";
import { screenItems } from "../util";
const _hoisted_1 = { class: "ele-pro-form-builder-screen-radio" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const previewFormRef = ref(null);
    const previewFormProps = ref({ items: [] });
    const formData = reactive({});
    const previewScreen = ref("pc");
    const handleUpdateModelValue = (visible) => {
      emit("update:modelValue", visible);
    };
    const setPreviewFormDataFieldValue = (field, value) => {
      setValue(formData, field, value);
    };
    const handlePreviewFormSubmit = () => {
      emit("previewFormSubmit", formData);
    };
    const handlePreviewFormReset = () => {
      var _a;
      Object.keys(formData).forEach((k) => {
        formData[k] = void 0;
      });
      mergeValue(
        formData,
        getFormInitValue((_a = previewFormProps.value) == null ? void 0 : _a.items, props.itemTypeData)
      );
    };
    const handleUpdatePreviewScreen = (size) => {
      previewScreen.value = size;
    };
    watch(
      () => props.modelValue,
      (visible) => {
        if (visible) {
          previewFormProps.value = JSON.parse(
            JSON.stringify(props.formProps || { items: [] })
          );
          handlePreviewFormReset();
          nextTick(() => {
            nextTick(() => {
              var _a, _b;
              (_b = (_a = previewFormRef.value) == null ? void 0 : _a.clearValidate) == null ? void 0 : _b.call(_a);
            });
          });
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(EleModal, {
        width: 960,
        maxable: true,
        draggable: false,
        position: "center",
        closeOnClickModal: false,
        destroyOnClose: true,
        modelValue: _ctx.modelValue,
        "onUpdate:modelValue": handleUpdateModelValue
      }, {
        header: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(screenItems), (item) => {
              return openBlock(), createBlock(unref(ElIcon), {
                key: item.value,
                class: normalizeClass([
                  "ele-pro-form-builder-header-tool",
                  "ele-pro-form-builder-screen-icon",
                  { "is-active": item.value === previewScreen.value }
                ]),
                onClick: ($event) => handleUpdatePreviewScreen(item.value)
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    style: normalizeStyle(item.iconStyle)
                  }, null, 8, ["style"]))
                ]),
                _: 2
              }, 1032, ["class", "onClick"]);
            }), 128))
          ])
        ]),
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.proFormComponent || EleProForm), mergeProps({ validateOnRuleChange: false }, previewFormProps.value, {
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
          }), createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (name) => {
              return {
                name,
                fn: withCtx((slotProps) => [
                  renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
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
export {
  _sfc_main as default
};
