import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createVNode, unref, withCtx, createBlock, resolveDynamicComponent, createCommentVNode } from "vue";
import VueDraggable from "vuedraggable";
import { sortableGroupName } from "../../ele-pro-form/util";
import { generateBuildFormItem } from "./build-core";
const _hoisted_1 = { class: "ele-pro-form-builder-component-wrapper" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "ele-pro-form-builder-component-item-body" };
const _hoisted_4 = { class: "ele-pro-form-builder-component-item-cover" };
const _hoisted_5 = { class: "ele-pro-form-builder-component-item-label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "component-list",
  props: {
    formItems: {},
    parentFormItemId: {},
    draggable: { type: Boolean },
    componentData: {},
    itemTypeData: {}
  },
  emits: ["updateItems"],
  setup(__props, { emit: __emit }) {
    const sortableGroup = { name: sortableGroupName, pull: "clone", put: false };
    const props = __props;
    const emit = __emit;
    const groupData = computed(() => {
      return (props.componentData || []).map((groupItem) => {
        return {
          ...groupItem,
          items: groupItem.items.filter((item) => !item.hide).map((d) => ({
            ...d,
            key: `proFormBuilderComponent_${d.type}`
          }))
        };
      });
    });
    const handleCloneItem = (original) => {
      const item = generateBuildFormItem(
        original.type,
        props.formItems,
        props.componentData,
        props.itemTypeData
      );
      return item ?? original;
    };
    const handleAddItem = (componentType) => {
      const item = generateBuildFormItem(
        componentType,
        props.formItems,
        props.componentData,
        props.itemTypeData
      );
      const result = {
        addItems: [{ item, parentItemId: props.parentFormItemId }],
        updateItems: [],
        deleteItemIds: []
      };
      emit("updateItems", result);
    };
    const handleItemClick = (item) => {
      handleAddItem(item.type);
    };
    const handleLabelClick = (e) => {
      var _a;
      const el = (_a = e.currentTarget) == null ? void 0 : _a.parentElement;
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(groupData.value, (groupItem, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "ele-pro-form-builder-component-group"
          }, [
            createElementVNode("div", {
              class: "ele-pro-form-builder-component-group-label",
              onClick: handleLabelClick
            }, toDisplayString(groupItem.name), 1),
            createVNode(unref(VueDraggable), {
              itemKey: "key",
              sort: false,
              group: sortableGroup,
              disabled: !_ctx.draggable,
              setData: () => void 0,
              clone: handleCloneItem,
              modelValue: groupItem.items,
              class: "ele-pro-form-builder-component-list"
            }, {
              item: withCtx(({ element }) => [
                createElementVNode("div", {
                  class: "ele-pro-form-builder-component-item",
                  onClick: ($event) => handleItemClick(element)
                }, [
                  createElementVNode("div", _hoisted_3, [
                    createElementVNode("div", _hoisted_4, [
                      element.cover ? (openBlock(), createBlock(resolveDynamicComponent(element.cover), { key: 0 })) : createCommentVNode("", true)
                    ])
                  ]),
                  createElementVNode("div", _hoisted_5, toDisplayString(element.name), 1)
                ], 8, _hoisted_2)
              ]),
              _: 2
            }, 1032, ["disabled", "modelValue"])
          ]);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
