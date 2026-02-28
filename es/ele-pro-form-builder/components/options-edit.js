import { defineComponent, ref, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode } from "vue";
import { ElButton } from "element-plus";
import { codeStringPrefix } from "../../ele-pro-form/components/render-util";
import EleModal from "../../ele-modal/index";
import EleTabBar from "../../ele-tab-bar/index";
import OptionsTable from "./options-table";
import OptionsCode from "./options-code";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const visible = ref(false);
    const optionsType = ref("optionsTable");
    const editerRef = ref(null);
    const openModal = () => {
      if (props.modelValue != null && typeof props.modelValue === "string" && props.modelValue.startsWith(codeStringPrefix)) {
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
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(ElButton), {
          size: "small",
          style: { width: "100%" },
          onClick: openModal
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }),
        createVNode(EleModal, {
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
          footer: withCtx(() => [
            createVNode(unref(ElButton), {
              size: "default",
              onClick: handleCancel
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("取消")
              ])),
              _: 1
            }),
            createVNode(unref(ElButton), {
              type: "primary",
              size: "default",
              onClick: handleSave
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode(" 保存 ")
              ])),
              _: 1
            })
          ]),
          default: withCtx(() => [
            _ctx.codeOptions ? (openBlock(), createBlock(EleTabBar, {
              key: 0,
              modelValue: optionsType.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionsType.value = $event),
              items: [
                { value: "optionsTable", label: "静态数据" },
                { value: "optionsCode", label: "远程数据" }
              ],
              type: "plain",
              class: "ele-pro-form-builder-options-tabs"
            }, null, 8, ["modelValue"])) : createCommentVNode("", true),
            !_ctx.codeOptions || optionsType.value === "optionsTable" ? (openBlock(), createBlock(OptionsTable, {
              key: 1,
              ref_key: "editerRef",
              ref: editerRef,
              data: _ctx.modelValue,
              isTreeData: _ctx.isTreeData,
              columns: _ctx.columns
            }, null, 8, ["data", "isTreeData", "columns"])) : _ctx.codeOptions ? (openBlock(), createBlock(OptionsCode, {
              key: 2,
              ref_key: "editerRef",
              ref: editerRef,
              data: _ctx.modelValue,
              codeTips: _ctx.codeTips,
              codePlaceholder: _ctx.codePlaceholder,
              codeEditerComponent: _ctx.codeEditerComponent
            }, null, 8, ["data", "codeTips", "codePlaceholder", "codeEditerComponent"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title", "modelValue"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
