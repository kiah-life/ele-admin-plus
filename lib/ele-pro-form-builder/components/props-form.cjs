"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../../utils/core");
const EleProForm = require("../../ele-pro-form/index");
const buildCore = require("./build-core");
const buildUtil = require("./build-util");
const OptionsEdit = require("./options-edit");
const EventEdit = require("./event-edit");
const HtmlEdit = require("./html-edit");
const IfEdit = require("./if-edit");
const SourceEdit = require("./source-edit");
const ChildrenEdit = require("./children-edit");
const StyleEdit = require("./style-edit");
const JsonInput = require("./json-input");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const propsProFormRef = vue.ref(null);
    const currentFormItem = vue.ref();
    const propsFormData = vue.reactive({});
    const propsFormItems = vue.ref([]);
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
      if (parent.type && buildCore.fixedChildTypes.some((d) => d.type === parent.type)) {
        const result = buildUtil.generateAddChildData(
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
    vue.watch(
      [() => props.formProps, () => props.currentFormItemId],
      () => {
        var _a, _b, _c, _d, _e;
        if (props.currentFormItemId == null) {
          resetPropsFormData();
          propsFormItems.value = [];
          currentFormItem.value = void 0;
          return;
        }
        const temp = core.findTree(
          (_a = props.formProps) == null ? void 0 : _a.items,
          (item) => item.key === props.currentFormItemId
        );
        const { data, items } = buildCore.getFormDataAndItems(temp, props.componentData);
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
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.proFormComponent || EleProForm), {
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
        }, vue.createSlots({ _: 2 }, [
          !_ctx.$slots.proFormBuilderOptionsEdit ? {
            name: "proFormBuilderOptionsEdit",
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              vue.createVNode(OptionsEdit, vue.mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "0"
          } : void 0,
          !_ctx.$slots.proFormBuilderEventEdit ? {
            name: "proFormBuilderEventEdit",
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              vue.createVNode(EventEdit, vue.mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "1"
          } : void 0,
          !_ctx.$slots.proFormBuilderHtmlEdit ? {
            name: "proFormBuilderHtmlEdit",
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              vue.createVNode(HtmlEdit, vue.mergeProps({ htmlEditerComponent: _ctx.htmlEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["htmlEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "2"
          } : void 0,
          !_ctx.$slots.proFormBuilderIfEdit ? {
            name: "proFormBuilderIfEdit",
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              vue.createVNode(IfEdit, vue.mergeProps({ codeEditerComponent: _ctx.codeEditerComponent }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["codeEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "3"
          } : void 0,
          !_ctx.$slots.proFormBuilderSourceEdit ? {
            name: "proFormBuilderSourceEdit",
            fn: vue.withCtx(({ item, model, updatePropValue }) => [
              vue.createVNode(SourceEdit, vue.mergeProps({ jsonEditerComponent: _ctx.jsonEditerComponent }, item.props || {}, {
                modelValue: model,
                "onUpdate:modelValue": (val) => updatePropValue("", val)
              }), null, 16, ["jsonEditerComponent", "modelValue", "onUpdate:modelValue"])
            ]),
            key: "4"
          } : void 0,
          !_ctx.$slots.proFormBuilderChildrenEdit ? {
            name: "proFormBuilderChildrenEdit",
            fn: vue.withCtx(({ item }) => [
              (vue.openBlock(), vue.createBlock(ChildrenEdit, vue.mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
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
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              (vue.openBlock(), vue.createBlock(StyleEdit, vue.mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ]),
            key: "6"
          } : void 0,
          !_ctx.$slots.proFormBuilderJsonInput ? {
            name: "proFormBuilderJsonInput",
            fn: vue.withCtx(({ item, modelValue, updateValue }) => [
              (vue.openBlock(), vue.createBlock(JsonInput, vue.mergeProps({ key: _ctx.currentFormItemId }, item.props || {}, {
                modelValue,
                "onUpdate:modelValue": updateValue
              }), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ]),
            key: "7"
          } : void 0,
          !_ctx.$slots.proFormBuilderIconInput ? {
            name: "proFormBuilderIconInput",
            fn: vue.withCtx(({ modelValue, updateValue }) => [
              vue.createVNode(vue.unref(elementPlus.ElInput), {
                size: "small",
                clearable: true,
                modelValue,
                "onUpdate:modelValue": updateValue
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            key: "8"
          } : void 0,
          vue.renderList(Object.keys(_ctx.$slots), (name) => {
            return {
              name,
              fn: vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1064, ["model", "items", "itemTypeData", "httpRequest"])),
        !currentFormItem.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElEmpty), {
          key: 0,
          imageSize: 58,
          description: "选中组件配置属性",
          class: "ele-pro-form-builder-form-empty"
        })) : vue.createCommentVNode("", true)
      ], 64);
    };
  }
});
module.exports = _sfc_main;
