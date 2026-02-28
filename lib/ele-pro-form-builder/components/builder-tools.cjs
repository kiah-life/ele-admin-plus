"use strict";
const vue = require("vue");
const icons = require("../../icons");
const ToolButton = require("./tool-button");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "builder-tools",
  props: {
    itemType: {}
  },
  emits: ["delete", "copy", "add", "addTableRow", "addTableCol", "openTableTool"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleDelete = (e) => {
      emit("delete", e);
    };
    const handleCopy = (e) => {
      emit("copy", e);
    };
    const handleAdd = (e) => {
      emit("add", e);
    };
    const handleAddTableRow = (e) => {
      emit("addTableRow", e);
    };
    const handleAddTableCol = (e) => {
      emit("addTableCol", e);
    };
    const handleOpenTableTool = (e) => {
      emit("openTableTool", e);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        _ctx.itemType && ["table", "tableCell"].includes(_ctx.itemType) ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 0,
          buttonProps: {
            size: "small",
            type: "primary",
            icon: vue.unref(icons.InsertRowOutlined)
          },
          tooltip: _ctx.itemType === "tableCell" ? "插入行" : "新增行",
          onClick: handleAddTableRow
        }, null, 8, ["buttonProps", "tooltip"])) : vue.createCommentVNode("", true),
        _ctx.itemType && ["table", "tableCell"].includes(_ctx.itemType) ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 1,
          buttonProps: {
            size: "small",
            type: "primary",
            icon: vue.unref(icons.InsertColumnOutlined)
          },
          tooltip: _ctx.itemType === "tableCell" ? "插入列" : "新增列",
          onClick: handleAddTableCol
        }, null, 8, ["buttonProps", "tooltip"])) : vue.createCommentVNode("", true),
        _ctx.itemType && [
          "tabs",
          "tabPane",
          "collapse",
          "collapseItem",
          "row",
          "col",
          "carousel",
          "carouselItem",
          "descriptions",
          "descriptionsItem"
        ].includes(_ctx.itemType) ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 2,
          buttonProps: {
            size: "small",
            type: "primary",
            icon: vue.unref(icons.PlusSquareDashOutlined)
          },
          tooltip: {
            tabs: "添加选项卡",
            tabPane: "插入选项卡",
            collapse: "添加折叠面板",
            collapseItem: "插入折叠面板",
            row: "添加栅格列",
            col: "插入栅格列",
            carousel: "添加走马灯",
            carouselItem: "插入走马灯",
            descriptions: "添加描述列表",
            descriptionsItem: "插入描述列表"
          }[_ctx.itemType] || "添加",
          onClick: handleAdd
        }, null, 8, ["buttonProps", "tooltip"])) : vue.createCommentVNode("", true),
        _ctx.itemType !== "tableCell" ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 3,
          buttonProps: {
            size: "small",
            type: "primary",
            icon: vue.unref(icons.CopyOutlined)
          },
          tooltip: "复制",
          onClick: handleCopy
        }, null, 8, ["buttonProps"])) : vue.createCommentVNode("", true),
        _ctx.itemType !== "tableCell" ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 4,
          buttonProps: {
            size: "small",
            type: "danger",
            icon: vue.unref(icons.DeleteOutlined)
          },
          tooltip: "删除",
          onClick: handleDelete
        }, null, 8, ["buttonProps"])) : vue.createCommentVNode("", true),
        _ctx.itemType === "tableCell" ? (vue.openBlock(), vue.createBlock(ToolButton, {
          key: 5,
          buttonProps: {
            size: "small",
            type: "primary",
            icon: vue.unref(icons.AppstoreAddOutlined),
            style: { fontSize: "14px" }
          },
          tooltip: "更多",
          onClick: handleOpenTableTool
        }, null, 8, ["buttonProps"])) : vue.createCommentVNode("", true)
      ], 64);
    };
  }
});
module.exports = _sfc_main;
