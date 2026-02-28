import { defineComponent, openBlock, createElementBlock, Fragment, createBlock, unref, withCtx, createElementVNode, createVNode, withModifiers, toDisplayString, createCommentVNode, createSlots, createTextVNode } from "vue";
import VueDraggable from "vuedraggable";
import { ElIcon, ElInput, ElButton } from "element-plus";
import { DragOutlined, DeleteOutlined, PlusOutlined } from "../../icons";
import ComponentName from "./component-name";
const _hoisted_1 = { class: "ele-pro-form-builder-children-edit-item" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-children-edit-item-body"
};
const _hoisted_3 = {
  key: 1,
  class: "ele-pro-form-builder-children-edit-item-body"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "ele-pro-form-builder-children-edit-item-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "children-edit",
  props: {
    addBtnText: {},
    formItem: {},
    componentData: {}
  },
  emits: ["update:currentFormItemId", "updateChildLabel", "sortChildren", "deleteChildren", "addChildren"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleUpdateLabel = (value, item, field) => {
      emit("updateChildLabel", value, item, field);
    };
    const handleUpdateChildren = (children) => {
      emit("sortChildren", children);
    };
    const handleDelete = (item) => {
      emit("deleteChildren", item);
    };
    const handleClick = (item) => {
      emit("update:currentFormItemId", item.key);
    };
    const handleAdd = () => {
      emit("addChildren", props.formItem);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _ctx.formItem.children ? (openBlock(), createBlock(unref(VueDraggable), {
          key: 0,
          itemKey: "key",
          animation: 150,
          setData: () => void 0,
          modelValue: _ctx.formItem.children,
          handle: ".ele-pro-form-builder-children-edit-item-handle",
          class: "ele-pro-form-builder-children-edit-list",
          "onUpdate:modelValue": handleUpdateChildren
        }, {
          item: withCtx(({ element }) => {
            var _a, _b;
            return [
              createElementVNode("div", _hoisted_1, [
                createVNode(unref(ElIcon), { class: "ele-pro-form-builder-children-edit-item-handle" }, {
                  default: withCtx(() => [
                    createVNode(unref(DragOutlined))
                  ]),
                  _: 1
                }),
                _ctx.formItem.type && _ctx.formItem.type === "tabs" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    modelValue: (_a = element.props) == null ? void 0 : _a.label,
                    "onUpdate:modelValue": (value) => handleUpdateLabel(value, element, "props.label")
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : _ctx.formItem.type && _ctx.formItem.type === "collapse" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    modelValue: (_b = element.props) == null ? void 0 : _b.title,
                    "onUpdate:modelValue": (value) => handleUpdateLabel(value, element, "props.title")
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: "ele-pro-form-builder-children-edit-item-body is-clickable",
                  onClick: withModifiers(($event) => handleClick(element), ["stop"])
                }, [
                  createVNode(ComponentName, {
                    itemType: element.type,
                    componentData: _ctx.componentData,
                    class: "ele-pro-form-builder-outline-item-type-tag"
                  }, null, 8, ["itemType", "componentData"]),
                  createElementVNode("div", _hoisted_5, toDisplayString(element.label || element.prop), 1)
                ], 8, _hoisted_4)),
                createVNode(unref(ElIcon), {
                  class: "ele-pro-form-builder-children-edit-item-del-btn",
                  title: "删除",
                  onClick: withModifiers(($event) => handleDelete(element), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(DeleteOutlined))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue"])) : createCommentVNode("", true),
        createVNode(unref(ElButton), {
          size: "small",
          icon: unref(PlusOutlined),
          style: { width: "100%" },
          onClick: handleAdd
        }, createSlots({ _: 2 }, [
          _ctx.addBtnText ? {
            name: "default",
            fn: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.addBtnText), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
