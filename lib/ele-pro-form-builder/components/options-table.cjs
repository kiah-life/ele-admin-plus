"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../../utils/core");
const EleTreeTable = require("../../ele-tree-table/index");
const EleSelect = require("../../ele-select/index");
const icons = require("../../icons");
const util = require("../../ele-pro-form/util");
const buildCore = require("./build-core");
const ToolButton = require("./tool-button");
const _hoisted_1 = {
  key: 4,
  class: "ele-pro-form-builder-options-edit-cell"
};
const _hoisted_2 = {
  key: 6,
  class: "ele-pro-form-builder-options-edit-cell"
};
const _hoisted_3 = {
  key: 0,
  class: "ele-pro-form-builder-options-edit-th"
};
const _hoisted_4 = {
  key: 1,
  class: "ele-pro-form-builder-options-edit-cell"
};
const actionColKey = "optionsEditTreeTableAction";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "options-table",
  props: {
    data: {},
    isTreeData: { type: [Boolean, Object] },
    columns: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const tableColumns = vue.ref([]);
    const tableData = vue.ref([]);
    const tableMinWidth = vue.computed(() => {
      let width = 0;
      tableColumns.value.forEach((col) => {
        var _a;
        const w = (_a = col.style) == null ? void 0 : _a.width;
        const wn = w == null || typeof w === "number" ? w : Number.parseInt(w);
        width += (wn == null || isNaN(wn) ? void 0 : wn) ?? 120;
      });
      return `${width}px`;
    });
    let tablePropStart = 0;
    const generateCellKey = () => {
      const key = buildCore.generateItemKey();
      tablePropStart++;
      return `${key}c${tablePropStart}`;
    };
    const handleDelete = (row, parent) => {
      const children = parent ? parent.children : tableData.value;
      if (children && children.length) {
        for (let i = 0; i < children.length; i++) {
          const temp = children[i];
          if (temp === row) {
            children.splice(i, 1);
            return true;
          }
          if (handleDelete(row, temp)) {
            return;
          }
        }
      }
    };
    const handleAdd = (parent) => {
      const item = {};
      if (!parent) {
        tableData.value.push(item);
      } else if (parent.children) {
        parent.children.push(item);
      } else {
        parent.children = [item];
      }
    };
    const handleAddCol = () => {
      const index = tableColumns.value.findIndex((c) => c.key === actionColKey);
      if (index !== -1) {
        const col = {
          userProp: "",
          prop: generateCellKey(),
          label: "",
          style: { textAlign: "center" }
        };
        if (index <= 0) {
          tableColumns.value.unshift(col);
        } else {
          tableColumns.value.splice(index, 0, col);
        }
      }
    };
    const handleDeleteCol = (column) => {
      if (column.prop != null) {
        const index = tableColumns.value.findIndex((c) => c.prop === column.prop);
        if (index !== -1) {
          tableColumns.value.splice(index, 1);
        }
      }
    };
    const getResult = () => {
      let result = JSON.parse(
        JSON.stringify(tableData.value)
      );
      if (props.columns === "tableData") {
        result = core.mapTree(result, (row) => {
          const temp = {};
          tableColumns.value.forEach((col) => {
            if (col.prop) {
              util.setValue(temp, col.userProp || col.prop, row[col.prop]);
            }
          });
          return temp;
        });
      } else if (props.columns === "stringArray") {
        result = result.map((d) => d.value);
      }
      return result;
    };
    vue.onMounted(() => {
      tableData.value = [];
      const userData = props.data == null || typeof props.data === "string" ? [] : JSON.parse(JSON.stringify(props.data));
      const actionCol = {
        key: actionColKey,
        label: "",
        style: {
          textAlign: "center",
          width: props.isTreeData ? "78px" : "48px",
          flex: "none"
        },
        class: "is-fixed-right is-fixed-right-first"
      };
      if (props.columns === "tableData") {
        const keys = [];
        core.eachTree(userData, (row) => {
          buildCore.getPropertyPath(row, ["children"]).forEach((k) => {
            if (!keys.includes(k)) {
              keys.push(k);
            }
          });
        });
        tableColumns.value = [
          ...keys.map((k) => ({
            userProp: k,
            prop: generateCellKey(),
            label: "",
            style: { textAlign: "center" }
          })),
          actionCol
        ];
        tableData.value = core.mapTree(userData, (row) => {
          const temp = { ...row };
          tableColumns.value.forEach((col) => {
            if (col.prop && col.userProp) {
              temp[col.prop] = util.getValue(temp, col.userProp);
            }
          });
          return temp;
        });
      } else if (props.columns === "tableColumns") {
        tableColumns.value = [
          {
            prop: "label",
            label: "标题",
            style: { textAlign: "center" }
          },
          {
            prop: "prop",
            label: "属性名",
            style: { textAlign: "center" }
          },
          {
            prop: "columnKey",
            label: "ColumnKey",
            style: { textAlign: "center" }
          },
          {
            prop: "align",
            label: "对齐方式",
            style: { textAlign: "center", width: "110px", flex: "none" }
          },
          {
            prop: "width",
            label: "列宽",
            style: { textAlign: "center", width: "110px", flex: "none" }
          },
          {
            prop: "minWidth",
            label: "最小列宽",
            style: { textAlign: "center", width: "110px", flex: "none" }
          },
          {
            prop: "sortable",
            label: "支持排序",
            style: { textAlign: "center", width: "110px", flex: "none" },
            editType: "switch"
          },
          {
            prop: "fixed",
            label: "固定",
            style: { textAlign: "center" }
          },
          {
            prop: "type",
            label: "类型",
            style: { textAlign: "center", width: "110px", flex: "none" }
          },
          actionCol
        ];
        tableData.value = userData;
      } else if (props.columns === "stringArray") {
        tableColumns.value = [
          { prop: "value", label: "值", style: { textAlign: "center" } },
          actionCol
        ];
        tableData.value = userData.map((d) => ({ value: d }));
      } else if (props.columns) {
        tableColumns.value = [...props.columns, actionCol];
        tableData.value = userData;
      } else {
        tableColumns.value = [
          { prop: "label", label: "文本", style: { textAlign: "center" } },
          { prop: "value", label: "值", style: { textAlign: "center" } },
          actionCol
        ];
        tableData.value = userData;
      }
    });
    __expose({
      getResult
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleTreeTable, {
        data: tableData.value,
        columns: tableColumns.value,
        tableStyle: { minWidth: tableMinWidth.value },
        class: vue.normalizeClass([
          "ele-pro-form-builder-options-editer",
          { "is-table-data": _ctx.columns === "tableData" }
        ])
      }, {
        bodyCell: vue.withCtx(({ row, column, treeLevel }) => [
          _ctx.columns === "tableColumns" && column.prop === "align" ? (vue.openBlock(), vue.createBlock(EleSelect, {
            key: 0,
            size: "default",
            clearable: true,
            modelValue: row[column.prop],
            "onUpdate:modelValue": ($event) => row[column.prop] = $event,
            options: [
              { label: "左对齐", value: "left" },
              { label: "居中", value: "center" },
              { label: "右对齐", value: "right" }
            ],
            popperOptions: { strategy: "fixed" },
            class: "ele-fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : _ctx.columns === "tableColumns" && column.prop === "fixed" ? (vue.openBlock(), vue.createBlock(EleSelect, {
            key: 1,
            size: "default",
            clearable: true,
            modelValue: row[column.prop],
            "onUpdate:modelValue": ($event) => row[column.prop] = $event,
            options: [
              { label: "不固定", value: false },
              { label: "固定在左侧", value: "left" },
              { label: "固定在右侧", value: "right" }
            ],
            popperOptions: { strategy: "fixed" },
            class: "ele-fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : _ctx.columns === "tableColumns" && column.prop === "type" ? (vue.openBlock(), vue.createBlock(EleSelect, {
            key: 2,
            size: "default",
            clearable: true,
            modelValue: row[column.prop],
            "onUpdate:modelValue": ($event) => row[column.prop] = $event,
            options: [
              { label: "默认", value: "default" },
              { label: "选择列", value: "selection" },
              { label: "序号列", value: "index" },
              { label: "展开列", value: "expand" }
            ],
            popperOptions: { strategy: "fixed" },
            class: "ele-fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : _ctx.columns === "tableColumns" && column.prop === "sortable" ? (vue.openBlock(), vue.createBlock(EleSelect, {
            key: 3,
            size: "default",
            clearable: true,
            modelValue: row[column.prop],
            "onUpdate:modelValue": ($event) => row[column.prop] = $event,
            options: [
              { label: "true", value: true },
              { label: "false", value: false },
              { label: "custom", value: "custom" }
            ],
            popperOptions: { strategy: "fixed" },
            class: "ele-fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : column.prop && column.editType === "switch" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            vue.createVNode(vue.unref(elementPlus.ElSwitch), {
              size: "small",
              modelValue: row[column.prop],
              "onUpdate:modelValue": ($event) => row[column.prop] = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ])) : column.prop ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInput), {
            key: 5,
            size: "default",
            clearable: true,
            modelValue: row[column.prop],
            "onUpdate:modelValue": ($event) => row[column.prop] = $event
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : column.key === actionColKey ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.createVNode(ToolButton, {
              buttonProps: {
                type: "danger",
                plain: true,
                circle: true,
                icon: vue.unref(icons.DeleteOutlined)
              },
              tooltip: "删除数据",
              onClick: ($event) => handleDelete(row)
            }, null, 8, ["buttonProps", "onClick"]),
            _ctx.isTreeData && !(typeof _ctx.isTreeData === "object" && _ctx.isTreeData.maxDepth && (treeLevel || 1) >= _ctx.isTreeData.maxDepth) ? (vue.openBlock(), vue.createBlock(ToolButton, {
              key: 0,
              buttonProps: {
                type: "primary",
                plain: true,
                circle: true,
                icon: vue.unref(icons.PlusOutlined)
              },
              tooltip: "新增子级",
              onClick: ($event) => handleAdd(row)
            }, null, 8, ["buttonProps", "onClick"])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ]),
        headerCell: vue.withCtx(({ column }) => [
          _ctx.columns === "tableData" && column.prop ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
            vue.createVNode(vue.unref(elementPlus.ElInput), {
              size: "default",
              clearable: true,
              modelValue: column.userProp,
              "onUpdate:modelValue": ($event) => column.userProp = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(ToolButton, {
              buttonProps: {
                type: "danger",
                plain: true,
                circle: true,
                icon: vue.unref(icons.DeleteOutlined)
              },
              tooltip: "删除属性",
              onClick: ($event) => handleDeleteCol(column)
            }, null, 8, ["buttonProps", "onClick"])
          ])) : column.key === actionColKey ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            _ctx.columns === "tableData" ? (vue.openBlock(), vue.createBlock(ToolButton, {
              key: 0,
              buttonProps: {
                type: "primary",
                plain: true,
                circle: true,
                icon: vue.unref(icons.AppstoreAddOutlined)
              },
              tooltip: "新增属性",
              onClick: _cache[0] || (_cache[0] = ($event) => handleAddCol())
            }, null, 8, ["buttonProps"])) : vue.createCommentVNode("", true),
            vue.createVNode(ToolButton, {
              buttonProps: {
                type: "primary",
                plain: true,
                circle: true,
                icon: vue.unref(icons.PlusOutlined)
              },
              tooltip: "新增数据",
              onClick: _cache[1] || (_cache[1] = ($event) => handleAdd())
            }, null, 8, ["buttonProps"])
          ])) : vue.createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["data", "columns", "tableStyle", "class"]);
    };
  }
});
module.exports = _sfc_main;
