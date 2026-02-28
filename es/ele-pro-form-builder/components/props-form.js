import { defineComponent, ref, reactive, watch, openBlock, createElementBlock, Fragment, createBlock, resolveDynamicComponent, createSlots, withCtx, createVNode, mergeProps, unref, renderList, renderSlot, normalizeProps, guardReactiveProps, createCommentVNode } from "vue";
import { ElInput, ElEmpty } from "element-plus";
import { findTree } from "../../utils/core";
import EleProForm from "../../ele-pro-form/index";
import { getFormDataAndItems, fixedChildTypes } from "./build-core";
import { generateAddChildData } from "./build-util";
import OptionsEdit from "./options-edit";
import EventEdit from "./event-edit";
import HtmlEdit from "./html-edit";
import IfEdit from "./if-edit";
import SourceEdit from "./source-edit";
import ChildrenEdit from "./children-edit";
import StyleEdit from "./style-edit";
import JsonInput from "./json-input";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "props-form",
  props: {
    currentFormItemId: {},
    formProps: {},
    configFormPresetProps: {},
    componentData: {},
    proFormComponent: {},
    codeEditerComponent: {},
    jsonEditerComponent: {},
    htmlEditerComponent: {},
    itemTypeData: {},
    httpRequest: {}
  },
  emits: ["update:currentFormItemId", "updateItem", "updateItems", "sortItemChildren", "openComponentPicker"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const propsProFormRef = ref(null);
    const currentFormItem = ref();
    const propsFormData = reactive({});
    const propsFormItems = ref([]);
    const handleUpdateItem = (field, value) => {
      if (props.currentFormItemId != null) {
        emit("updateItem", props.currentFormItemId, field, value);
      }
    };
    const handleUpdateChildLabel = (label, child, field) => {
      emit("updateItem", child.key, field, label);
    };
    const handleSortChildren = (children) => {
      if (props.currentFormItemId != null) {
        emit(
          "sortItemChildren",
          children.map((c) => c.key),
          props.currentFormItemId
        );
      }
    };
    const handleDeleteChildren = (child) => {
      emit("updateItems", {
        addItems: [],
        updateItems: [],
        deleteItemIds: [child.key]
      });
    };
    const handleAddChildren = (parent) => {
      var _a;
      if (parent.type && fixedChildTypes.some((d) => d.type === parent.type)) {
        const result = generateAddChildData(
          parent,
          void 0,
          void 0,
          void 0,
          (_a = props.formProps) == null ? void 0 : _a.items,
          void 0,
          props.componentData
        );
        emit("updateItems", result);
      } else {
        emit("openComponentPicker", parent.key);
      }
    };
    const handleUpdateCurrentFormItemId = (formItemId) => {
      emit("update:currentFormItemId", formItemId);
    };
    const resetPropsFormData = (data) => {
      Object.keys(propsFormData).forEach((k) => {
        propsFormData[k] = void 0;
      });
      if (data) {
        Object.assign(propsFormData, data);
      }
    };
    watch(
      [() => props.formProps, () => props.currentFormItemId],
      () => {
        var _a, _b, _c, _d, _e;
        if (props.currentFormItemId == null) {
          resetPropsFormData();
          propsFormItems.value = [];
          currentFormItem.value = void 0;
          return;
        }
        const temp = findTree(
          (_a = props.formProps) == null ? void 0 : _a.items,
          (item) => item.key === props.currentFormItemId
        );
        const { data, items } = getFormDataAndItems(temp, props.componentData);
        resetPropsFormData(
          Object.assign({}, data, {
            itemProps: Object.assign(
              {
                labelWidth: ((_b = props.formProps) == null ? void 0 : _b.labelWidth) ?? ((_c = props.configFormPresetProps) == null ? void 0 : _c.labelWidth),
                labelPosition: ((_d = props.formProps) == null ? void 0 : _d.labelPosition) ?? ((_e = props.configFormPresetProps) == null ? void 0 : _e.labelPosition)
              },
              data.itemProps
            )
          })
        );
        if (JSON.stringify(propsFormItems.value) !== JSON.stringify(items)) {
          propsFormItems.value = items;
        }
        if (currentFormItem.value !== temp) {
          currentFormItem.value = temp;
          if (propsProFormRef.value) {
            propsProFormRef.value.$el.scrollTop = 0;
          }
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.proFormComponent || EleProForm), {
          ref_key: "propsProFormRef",
          ref: propsProFormRef,
          size: "small",
          labelPosition: "top",
          model: propsFormData,
          items: propsFormItems.value,
          itemTypeData: _ctx.itemTypeData,
          httpRequest: _ctx.httpRequest,
          class: "ele-pro-form-builder-props-form",
          onUpdateValue: handleUpdateItem
        }, createSlots({ _: 2 }, [
          !_ctx.$slots.proFormBuilderOptionsEdit ? {
            name: "proFormBuilderOptionsEdit",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              createVNode(OptionsEdit, mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "0"
          } : void 0,
          !_ctx.$slots.proFormBuilderEventEdit ? {
            name: "proFormBuilderEventEdit",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              createVNode(EventEdit, mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "1"
          } : void 0,
          !_ctx.$slots.proFormBuilderHtmlEdit ? {
            name: "proFormBuilderHtmlEdit",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              createVNode(HtmlEdit, mergeProps({ htmlEditerComponent: _ctx.htmlEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["htmlEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "2"
          } : void 0,
          !_ctx.$slots.proFormBuilderIfEdit ? {
            name: "proFormBuilderIfEdit",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              createVNode(IfEdit, mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "3"
          } : void 0,
          !_ctx.$slots.proFormBuilderSourceEdit ? {
            name: "proFormBuilderSourceEdit",
            fn: withCtx(({ item, model, updatePropValue }) => [
              createVNode(SourceEdit, mergeProps({ jsonEditerComponent: _ctx.jsonEditerComponent }, item.props || {}, {
                modelValue: model,
                "onUpdate:modelValue": (val) => updatePropValue("", val)
              }), null, 16, ["jsonEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "4"
          } : void 0,
          !_ctx.$slots.proFormBuilderChildrenEdit ? {
            name: "proFormBuilderChildrenEdit",
            fn: withCtx(({ item }) => [
              (openBlock(), createBlock(ChildrenEdit, mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
                formItem: currentFormItem.value,
                componentData: _ctx.componentData,
                onUpdateChildLabel: handleUpdateChildLabel,
                onSortChildren: handleSortChildren,
                onDeleteChildren: handleDeleteChildren,
                onAddChildren: handleAddChildren,
                "onUpdate:currentFormItemId": handleUpdateCurrentFormItemId
              }), null, 16, ["formItem", "componentData"]))
            ]),
            key: "5"
          } : void 0,
          !_ctx.$slots.proFormBuilderStyleEdit ? {
            name: "proFormBuilderStyleEdit",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              (openBlock(), createBlock(StyleEdit, mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ]),
            key: "6"
          } : void 0,
          !_ctx.$slots.proFormBuilderJsonInput ? {
            name: "proFormBuilderJsonInput",
            fn: withCtx(({ item, modelValue, updateValue }) => [
              (openBlock(), createBlock(JsonInput, mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ]),
            key: "7"
          } : void 0,
          !_ctx.$slots.proFormBuilderIconInput ? {
            name: "proFormBuilderIconInput",
            fn: withCtx(({ modelValue, updateValue }) => [
              createVNode(unref(ElInput), {
                size: "small",
                clearable: true,
                modelValue,
                "onUpdate:modelValue": updateValue
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            key: "8"
          } : void 0,
          renderList(Object.keys(_ctx.$slots), (name) => {
            return {
              name,
              fn: withCtx((slotProps) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1064, ["model", "items", "itemTypeData", "httpRequest"])),
        !currentFormItem.value ? (openBlock(), createBlock(unref(ElEmpty), {
          key: 0,
          imageSize: 58,
          description: "选中组件配置属性",
          class: "ele-pro-form-builder-form-empty"
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
