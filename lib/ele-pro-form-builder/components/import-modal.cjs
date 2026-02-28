"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../../utils/core");
const EleModal = require("../../ele-modal/index");
const renderUtil = require("../../ele-pro-form/components/render-util");
const buildUtil = require("./build-util");
const CodeEditer = require("./code-editer");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "import-modal",
  props: {
    modelValue: { type: Boolean },
    config: {},
    isImport: { type: Boolean },
    jsonEditerComponent: {}
  },
  emits: ["update:modelValue", "importData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const jsonContent = vue.ref("");
    const handleUpdateModelValue = (visible) => {
      emit("update:modelValue", visible);
    };
    const handleImportData = (data) => {
      emit("importData", data);
    };
    const handleCloseModal = () => {
      handleUpdateModelValue(false);
    };
    const checkLegacyItems = (items) => {
      return core.mapTree(items, (item) => {
        const legacyProps = renderUtil.getComponentLegacyProps(item);
        return {
          ...item,
          type: renderUtil.getItemTypeName(item),
          props: { ...legacyProps, ...item.props || {} },
          options: void 0
        };
      });
    };
    const handleImport = () => {
      if (!jsonContent.value) {
        return;
      }
      handleCloseModal();
      try {
        const result = JSON.parse(jsonContent.value);
        if (result && Array.isArray(result)) {
          const config = JSON.parse(JSON.stringify(props.config));
          buildUtil.itemsGenerateNewKey(result, config.items, false);
          result.forEach((item) => {
            config.items.push(item);
          });
          config.items = checkLegacyItems(config.items);
          handleImportData(config);
          return;
        }
        if (result && typeof result === "object" && result.prop && result.items == null) {
          const config = JSON.parse(JSON.stringify(props.config));
          buildUtil.itemsGenerateNewKey(result, config.items, false);
          config.items.push(result);
          config.items = checkLegacyItems(config.items);
          handleImportData(config);
          return;
        }
        if (result) {
          buildUtil.itemsGenerateNewKey(result.items, [], false);
          result.items = checkLegacyItems(result.items);
          handleImportData(result);
        }
      } catch (e) {
        console.error(e);
      }
    };
    vue.watch(
      () => props.modelValue,
      (visible) => {
        if (visible && !props.isImport) {
          jsonContent.value = JSON.stringify(props.config || {}, void 0, 2);
        } else {
          jsonContent.value = "";
        }
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleModal, {
        width: 800,
        maxable: true,
        position: "center",
        title: "表单配置JSON",
        modelValue: _ctx.modelValue,
        closeOnClickModal: false,
        destroyOnClose: true,
        bodyStyle: {
          height: "520px",
          minHeight: "100%",
          maxHeight: "100%",
          padding: _ctx.isImport ? "8px 16px 8px 16px" : "8px 16px 12px 16px"
        },
        "onUpdate:modelValue": handleUpdateModelValue
      }, vue.createSlots({
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.jsonEditerComponent || CodeEditer), {
            modelValue: jsonContent.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => jsonContent.value = $event)
          }, null, 8, ["modelValue"]))
        ]),
        _: 2
      }, [
        _ctx.isImport ? {
          name: "footer",
          fn: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              size: "default",
              onClick: handleCloseModal
            }, {
              default: vue.withCtx(() => _cache[1] || (_cache[1] = [
                vue.createTextVNode("取消")
              ])),
              _: 1
            }),
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              type: "primary",
              size: "default",
              onClick: handleImport
            }, {
              default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                vue.createTextVNode(" 导入 ")
              ])),
              _: 1
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "bodyStyle"]);
    };
  }
});
module.exports = _sfc_main;
