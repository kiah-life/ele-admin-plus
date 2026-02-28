import { set, get } from "lodash-es";
import { get as get2, merge, set as set2 } from "lodash-es";
import { eachTree } from "../utils/core";
import { defaultItemTypeData } from "./components/item-type-data";
import { ChildrenRender, sortableGroupName } from "./components/render-util";
function isContainerType(item, itemTypeData) {
  const typeData = item.type ? [...itemTypeData || [], ...defaultItemTypeData].find(
    (d) => d.type === item.type
  ) : void 0;
  return (typeData == null ? void 0 : typeData.isContainer) || item.itemType === "container" || item.itemType === "view";
}
function getFormInitValue(items, itemTypeData) {
  const init = {};
  eachTree(items, (item) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (item.initValue != null && item.initValue !== "" && item.prop) {
      set(init, item.prop, item.initValue);
      return;
    }
    if (item.type && item.prop) {
      if ("tabs" === item.type) {
        const active = ((_a = item.props) == null ? void 0 : _a.modelValue) ?? ((_c = (_b = item.children) == null ? void 0 : _b[0]) == null ? void 0 : _c.prop);
        set(init, item.prop, active);
        return;
      }
      if ("collapse" === item.type) {
        const active = ((_d = item.props) == null ? void 0 : _d.modelValue) ?? (((_e = item.props) == null ? void 0 : _e.accordion) ? ((_h = (_g = (_f = item.children) == null ? void 0 : _f[0]) == null ? void 0 : _g.props) == null ? void 0 : _h.name) ?? ((_j = (_i = item.children) == null ? void 0 : _i[0]) == null ? void 0 : _j.prop) : []);
        set(init, item.prop, active);
        return;
      }
      if ("sliderRange" === item.type) {
        set(init, item.prop, [
          ((_k = item.props) == null ? void 0 : _k.min) ?? 0,
          ((_l = item.props) == null ? void 0 : _l.max) ?? 100
        ]);
        return;
      }
    }
    if (isContainerType(item, itemTypeData) || !item.prop) {
      return;
    }
    if (typeof get(init, item.prop) === "undefined") {
      set(init, item.prop, void 0);
    }
  });
  return init;
}
export {
  ChildrenRender,
  getFormInitValue,
  get2 as getValue,
  isContainerType,
  merge as mergeValue,
  set2 as setValue,
  sortableGroupName
};
