"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const renderUtil = require("../../ele-pro-form/components/render-util");
const EleModal = require("../../ele-modal/index");
const EleTabBar = require("../../ele-tab-bar/index");
const OptionsTable = require("./options-table");
const OptionsCode = require("./options-code");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "options-edit",
  props: {
    modelValue: {},
    title: {},
    isTreeData: { type: [Boolean, Object] },
    columns: {},
    codeOptions: { type: Boolean },
    codeTips: {},
    codePlaceholder: {},
    codeEditerComponent: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = vue.ref(false);
    const optionsType = vue.ref("optionsTable");
    const editerRef = vue.ref(null);
    const openModal = () => {
      if (props.modelValue != null && typeof props.modelValue === "string" && props.modelValue.startsWith(renderUtil.codeStringPrefix)) {
        optionsType.value = "optionsCode";
      } else {
        optionsType.value = "optionsTable";
      }
      visible.value = true;
    };
    const handleCancel = () => {
      visible.value = false;
    };
    const handleSave = () => {
      var _a, _b;
      const result = (_b = (_a = editerRef.value) == null ? void 0 : _a.getResult) == null ? void 0 : _b.call(_a);
      emit("update:modelValue", result ?? []);
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createVNode(vue.unref(elementPlus.ElButton), {
          size: "small",
          style: { width: "100%" },
          onClick: openModal
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }),
        vue.createVNode(EleModal, {
          width: 960,
          maxable: true,
          position: "center",
          title: _ctx.title,
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
          closeOnClickModal: false,
          destroyOnClose: true,
          bodyStyle: {
            height: "568px",
            minHeight: "100%",
            maxHeight: "100%",
            padding: "0 16px 8px 16px",
            display: "flex",
            flexDirection: "column"
          }
        }, {
          footer: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              size: "default",
              onClick: handleCancel
            }, {
              default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                vue.createTextVNode("取消")
              ])),
              _: 1
            }),
            vue.createVNode(vue.unref(elementPlus.ElButton), {
              type: "primary",
              size: "default",
              onClick: handleSave
            }, {
              default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                vue.createTextVNode(" 保存 ")
              ])),
              _: 1
            })
          ]),
          default: vue.withCtx(() => [
            _ctx.codeOptions ? (vue.openBlock(), vue.createBlock(EleTabBar, {
              key: 0,
              modelValue: optionsType.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionsType.value = $event),
              items: [
                { value: "optionsTable", label: "静态数据" },
                { value: "optionsCode", label: "远程数据" }
              ],
              type: "plain",
              class: "ele-pro-form-builder-options-tabs"
            }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true),
            !_ctx.codeOptions || optionsType.value === "optionsTable" ? (vue.openBlock(), vue.createBlock(OptionsTable, {
              key: 1,
              ref_key: "editerRef",
              ref: editerRef,
              data: _ctx.modelValue,
              isTreeData: _ctx.isTreeData,
              columns: _ctx.columns
            }, null, 8, ["data", "isTreeData", "columns"])) : _ctx.codeOptions ? (vue.openBlock(), vue.createBlock(OptionsCode, {
              key: 2,
              ref_key: "editerRef",
              ref: editerRef,
              data: _ctx.modelValue,
              codeTips: _ctx.codeTips,
              codePlaceholder: _ctx.codePlaceholder,
              codeEditerComponent: _ctx.codeEditerComponent
            }, null, 8, ["data", "codeTips", "codePlaceholder", "codeEditerComponent"])) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title", "modelValue"])
      ], 64);
    };
  }
});
module.exports = _sfc_main;
