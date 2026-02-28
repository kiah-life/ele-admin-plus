import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, Fragment, renderList, unref, createBlock, normalizeClass, withCtx, resolveDynamicComponent, normalizeStyle, createVNode, createTextVNode, createCommentVNode, renderSlot, createSlots, normalizeProps, guardReactiveProps } from "vue";
import { ElIcon, ElButton } from "element-plus";
import { RollbackOutlined, RecoverOutlined, UploadOutlined, DownloadOutlined, DeleteOutlined, EyeOutlined } from "../../icons";
import { screenItems } from "../util";
import PreviewModal from "./preview-modal";
import ImportModal from "./import-modal";
const _hoisted_1 = { class: "ele-pro-form-builder-header" };
const _hoisted_2 = { class: "ele-pro-form-builder-screen-radio" };
const _hoisted_3 = { class: "ele-pro-form-builder-header-left" };
const _hoisted_4 = { class: "ele-pro-form-builder-header-tools" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "body-header",
  props: {
    currentScreen: {},
    undoDisabled: { type: Boolean },
    redoDisabled: { type: Boolean },
    formProps: {},
    headerTools: {},
    proFormComponent: {},
    jsonEditerComponent: {},
    itemTypeData: {},
    httpRequest: {}
  },
  emits: ["update:currentScreen", "undo", "redo", "clear", "previewFormSubmit", "importData"],
  setup(__props, { emit: __emit }) {
    const ownSlots = ["headerTools"];
    const props = __props;
    const emit = __emit;
    const previewVisible = ref(false);
    const importVisible = ref(false);
    const isImport = ref(false);
    const handleUpdateScreen = (size) => {
      emit("update:currentScreen", size);
    };
    const handleUndo = () => {
      if (!props.undoDisabled) {
        emit("undo");
      }
    };
    const handleRedo = () => {
      if (!props.redoDisabled) {
        emit("redo");
      }
    };
    const handleClear = () => {
      emit("clear");
    };
    const handleOpenPreview = () => {
      previewVisible.value = true;
    };
    const handlePreviewFormSubmit = (data) => {
      emit("previewFormSubmit", data);
    };
    const handleOpenImport = () => {
      importVisible.value = true;
      isImport.value = true;
    };
    const handleOpenExport = () => {
      importVisible.value = true;
      isImport.value = false;
    };
    const handleImportData = (data) => {
      emit("importData", data);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(screenItems), (item) => {
            return openBlock(), createBlock(unref(ElIcon), {
              key: item.value,
              class: normalizeClass([
                "ele-pro-form-builder-header-tool",
                "ele-pro-form-builder-screen-icon",
                { "is-active": item.value === _ctx.currentScreen }
              ]),
              onClick: ($event) => handleUpdateScreen(item.value)
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                  style: normalizeStyle(item.iconStyle)
                }, null, 8, ["style"]))
              ]),
              _: 2
            }, 1032, ["class", "onClick"]);
          }), 128))
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(unref(ElIcon), {
            class: normalizeClass([
              "ele-pro-form-builder-header-tool",
              "ele-pro-form-builder-header-tool-undo",
              { "is-disabled": _ctx.undoDisabled }
            ]),
            title: "撤销",
            onClick: handleUndo
          }, {
            default: withCtx(() => [
              createVNode(unref(RollbackOutlined))
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(unref(ElIcon), {
            class: normalizeClass([
              "ele-pro-form-builder-header-tool",
              "ele-pro-form-builder-header-tool-redo",
              { "is-disabled": _ctx.redoDisabled }
            ]),
            title: "恢复",
            onClick: handleRedo
          }, {
            default: withCtx(() => [
              createVNode(unref(RecoverOutlined))
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        createElementVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headerTools || [], (toolName) => {
            return openBlock(), createElementBlock(Fragment, { key: toolName }, [
              toolName === "import" ? (openBlock(), createBlock(unref(ElButton), {
                key: 0,
                text: true,
                icon: unref(UploadOutlined),
                onClick: handleOpenImport
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode(" 导入 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "export" ? (openBlock(), createBlock(unref(ElButton), {
                key: 1,
                text: true,
                icon: unref(DownloadOutlined),
                onClick: handleOpenExport
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" 导出 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "clear" ? (openBlock(), createBlock(unref(ElButton), {
                key: 2,
                text: true,
                type: "danger",
                icon: unref(DeleteOutlined),
                onClick: handleClear
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode(" 清空 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "preview" ? (openBlock(), createBlock(unref(ElButton), {
                key: 3,
                text: true,
                type: "primary",
                icon: unref(EyeOutlined),
                onClick: handleOpenPreview
              }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode(" 预览 ")
                ])),
                _: 1
              }, 8, ["icon"])) : createCommentVNode("", true)
            ], 64);
          }), 128)),
          renderSlot(_ctx.$slots, "headerTools")
        ]),
        _ctx.headerTools && _ctx.headerTools.includes("preview") ? (openBlock(), createBlock(PreviewModal, {
          key: 0,
          modelValue: previewVisible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => previewVisible.value = $event),
          formProps: _ctx.formProps,
          proFormComponent: _ctx.proFormComponent,
          itemTypeData: _ctx.itemTypeData,
          httpRequest: _ctx.httpRequest,
          onPreviewFormSubmit: handlePreviewFormSubmit
        }, createSlots({ _: 2 }, [
          renderList(Object.keys(_ctx.$slots).filter((k) => !ownSlots.includes(k)), (name) => {
            return {
              name,
              fn: withCtx((slotProps) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1032, ["modelValue", "formProps", "proFormComponent", "itemTypeData", "httpRequest"])) : createCommentVNode("", true),
        _ctx.headerTools && (_ctx.headerTools.includes("import") || _ctx.headerTools.includes("export")) ? (openBlock(), createBlock(ImportModal, {
          key: 1,
          modelValue: importVisible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => importVisible.value = $event),
          config: _ctx.formProps,
          isImport: isImport.value,
          jsonEditerComponent: _ctx.jsonEditerComponent,
          onImportData: handleImportData
        }, null, 8, ["modelValue", "config", "isImport", "jsonEditerComponent"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
