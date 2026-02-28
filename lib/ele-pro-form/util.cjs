"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const lodashEs = require("lodash-es");
const core = require("../utils/core");
const itemTypeData = require("./components/item-type-data");
const renderUtil = require("./components/render-util");
function isContainerType(item, itemTypeData$1) {
  const typeData = item.type ? [...itemTypeData$1 || [], ...itemTypeData.defaultItemTypeData].find(
    (d) => d.type === item.type
  ) : void 0;
  return (typeData == null ? void 0 : typeData.isContainer) || item.itemType === "container" || item.itemType === "view";
}
function getFormInitValue(items, itemTypeData2) {
  const init = {};
  core.eachTree(items, (item) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (item.initValue != null && item.initValue !== "" && item.prop) {
      lodashEs.set(init, item.prop, item.initValue);
      return;
    }
    if (item.type && item.prop) {
      if ("tabs" === item.type) {
        const active = ((_a = item.props) == null ? void 0 : _a.modelValue) ?? ((_c = (_b = item.children) == null ? void 0 : _b[0]) == null ? void 0 : _c.prop);
        lodashEs.set(init, item.prop, active);
        return;
      }
      if ("collapse" === item.type) {
        const active = ((_d = item.props) == null ? void 0 : _d.modelValue) ?? (((_e = item.props) == null ? void 0 : _e.accordion) ? ((_h = (_g = (_f = item.children) == null ? void 0 : _f[0]) == null ? void 0 : _g.props) == null ? void 0 : _h.name) ?? ((_j = (_i = item.children) == null ? void 0 : _i[0]) == null ? void 0 : _j.prop) : []);
        lodashEs.set(init, item.prop, active);
        return;
      }
      if ("sliderRange" === item.type) {
        lodashEs.set(init, item.prop, [
          ((_k = item.props) == null ? void 0 : _k.min) ?? 0,
          ((_l = item.props) == null ? void 0 : _l.max) ?? 100
        ]);
        return;
      }
    }
    if (isContainerType(item, itemTypeData2) || !item.prop) {
      return;
    }
    if (typeof lodashEs.get(init, item.prop) === "undefined") {
      lodashEs.set(init, item.prop, void 0);
    }
  });
  return init;
}
Object.defineProperty(exports, "getValue", {
  enumerable: true,
  get: () => lodashEs.get
});
Object.defineProperty(exports, "mergeValue", {
  enumerable: true,
  get: () => lodashEs.merge
});
Object.defineProperty(exports, "setValue", {
  enumerable: true,
  get: () => lodashEs.set
});
Object.defineProperty(exports, "ChildrenRender", {
  enumerable: true,
  get: () => renderUtil.ChildrenRender
});
Object.defineProperty(exports, "sortableGroupName", {
  enumerable: true,
  get: () => renderUtil.sortableGroupName
});
exports.getFormInitValue = getFormInitValue;
exports.isContainerType = isContainerType;
