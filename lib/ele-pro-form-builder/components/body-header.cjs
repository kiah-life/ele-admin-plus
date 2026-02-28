"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const util = require("../util");
const PreviewModal = require("./preview-modal");
const ImportModal = require("./import-modal");
const _hoisted_1 = { class: "ele-pro-form-builder-header" };
const _hoisted_2 = { class: "ele-pro-form-builder-screen-radio" };
const _hoisted_3 = { class: "ele-pro-form-builder-header-left" };
const _hoisted_4 = { class: "ele-pro-form-builder-header-tools" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const previewVisible = vue.ref(false);
    const importVisible = vue.ref(false);
    const isImport = vue.ref(false);
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
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(util.screenItems), (item) => {
            return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
              key: item.value,
              class: vue.normalizeClass([
                "ele-pro-form-builder-header-tool",
                "ele-pro-form-builder-screen-icon",
                { "is-active": item.value === _ctx.currentScreen }
              ]),
              onClick: ($event) => handleUpdateScreen(item.value)
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.icon), {
                  style: vue.normalizeStyle(item.iconStyle)
                }, null, 8, ["style"]))
              ]),
              _: 2
            }, 1032, ["class", "onClick"]);
          }), 128))
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          vue.createVNode(vue.unref(elementPlus.ElIcon), {
            class: vue.normalizeClass([
              "ele-pro-form-builder-header-tool",
              "ele-pro-form-builder-header-tool-undo",
              { "is-disabled": _ctx.undoDisabled }
            ]),
            title: "撤销",
            onClick: handleUndo
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(icons.RollbackOutlined))
            ]),
            _: 1
          }, 8, ["class"]),
          vue.createVNode(vue.unref(elementPlus.ElIcon), {
            class: vue.normalizeClass([
              "ele-pro-form-builder-header-tool",
              "ele-pro-form-builder-header-tool-redo",
              { "is-disabled": _ctx.redoDisabled }
            ]),
            title: "恢复",
            onClick: handleRedo
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(icons.RecoverOutlined))
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        vue.createElementVNode("div", _hoisted_4, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.headerTools || [], (toolName) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: toolName }, [
              toolName === "import" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                key: 0,
                text: true,
                icon: vue.unref(icons.UploadOutlined),
                onClick: handleOpenImport
              }, {
                default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                  vue.createTextVNode(" 导入 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "export" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                key: 1,
                text: true,
                icon: vue.unref(icons.DownloadOutlined),
                onClick: handleOpenExport
              }, {
                default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                  vue.createTextVNode(" 导出 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "clear" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                key: 2,
                text: true,
                type: "danger",
                icon: vue.unref(icons.DeleteOutlined),
                onClick: handleClear
              }, {
                default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                  vue.createTextVNode(" 清空 ")
                ])),
                _: 1
              }, 8, ["icon"])) : toolName === "preview" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                key: 3,
                text: true,
                type: "primary",
                icon: vue.unref(icons.EyeOutlined),
                onClick: handleOpenPreview
              }, {
                default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                  vue.createTextVNode(" 预览 ")
                ])),
                _: 1
              }, 8, ["icon"])) : vue.createCommentVNode("", true)
            ], 64);
          }), 128)),
          vue.renderSlot(_ctx.$slots, "headerTools")
        ]),
        _ctx.headerTools && _ctx.headerTools.includes("preview") ? (vue.openBlock(), vue.createBlock(PreviewModal, {
          key: 0,
          modelValue: previewVisible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => previewVisible.value = $event),
          formProps: _ctx.formProps,
          proFormComponent: _ctx.proFormComponent,
          itemTypeData: _ctx.itemTypeData,
          httpRequest: _ctx.httpRequest,
          onPreviewFormSubmit: handlePreviewFormSubmit
        }, vue.createSlots({ _: 2 }, [
          vue.renderList(Object.keys(_ctx.$slots).filter((k) => !ownSlots.includes(k)), (name) => {
            return {
              name,
              fn: vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1032, ["modelValue", "formProps", "proFormComponent", "itemTypeData", "httpRequest"])) : vue.createCommentVNode("", true),
        _ctx.headerTools && (_ctx.headerTools.includes("import") || _ctx.headerTools.includes("export")) ? (vue.openBlock(), vue.createBlock(ImportModal, {
          key: 1,
          modelValue: importVisible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => importVisible.value = $event),
          config: _ctx.formProps,
          isImport: isImport.value,
          jsonEditerComponent: _ctx.jsonEditerComponent,
          onImportData: handleImportData
        }, null, 8, ["modelValue", "config", "isImport", "jsonEditerComponent"])) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
module.exports = _sfc_main;
