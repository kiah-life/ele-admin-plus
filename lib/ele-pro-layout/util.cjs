"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const core = require("../utils/core");
const props = require("../ele-admin-layout/props");
const props$1 = require("./props");
function findMenuByPath(path, menus) {
  return path == null ? void 0 : core.findTree(menus, (d) => path === d.path);
}
function findTabByPath(path, tabs) {
  if (path != null && tabs != null) {
    return tabs.find((d) => path === d.key || path === d.fullPath);
  }
}
function findTabByKey(key, tabs) {
  if (key != null && tabs != null) {
    return tabs.find((d) => key === d.key);
  }
}
function getMatchedMenus(path, menus, parents) {
  var _a;
  for (const m of menus) {
    const p = parents ? [...parents, m] : [m];
    if (m.path === path) {
      return p;
    } else if ((_a = m.children) == null ? void 0 : _a.length) {
      const result = getMatchedMenus(path, m.children, p);
      if (result) {
        return result;
      }
    }
  }
}
function getRouteMatched(route, menus) {
  var _a, _b, _c;
  const { path, fullPath, meta } = route;
  if (meta == null ? void 0 : meta.active) {
    const m2 = findMenuByPath(fullPath, menus) ?? findMenuByPath(path, menus);
    return {
      active: meta.active,
      activeOther: true,
      title: ((_a = m2 == null ? void 0 : m2.meta) == null ? void 0 : _a.title) ?? meta.title,
      matched: getMatchedMenus(meta.active, menus)
    };
  }
  const fm = findMenuByPath(fullPath, menus);
  if (fm) {
    return {
      active: fullPath,
      title: ((_b = fm.meta) == null ? void 0 : _b.title) ?? meta.title,
      matched: getMatchedMenus(fullPath, menus)
    };
  }
  const m = findMenuByPath(path, menus);
  return {
    active: path,
    title: ((_c = m == null ? void 0 : m.meta) == null ? void 0 : _c.title) ?? meta.title,
    matched: getMatchedMenus(path, menus)
  };
}
function getMatchedLevels(matched, activeOther, route, menus, tabs) {
  var _a;
  const levels = [];
  if (matched) {
    matched.forEach((m) => {
      var _a2;
      if (m.meta && m.meta.title && m.meta.breadcrumb !== false) {
        const title = ((_a2 = findTabByPath(m.path, tabs)) == null ? void 0 : _a2.title) || m.meta.title;
        levels.push({ path: m.path, title });
      }
    });
  }
  if (activeOther) {
    const { path, fullPath, meta } = route;
    const notIn = !levels.length || fullPath !== levels[levels.length - 1].path;
    if (notIn && meta.title) {
      const m = findMenuByPath(fullPath, menus) ?? findMenuByPath(path, menus);
      const t = findTabByPath(fullPath, tabs) ?? findTabByPath(path, tabs);
      const title = (t == null ? void 0 : t.title) || ((_a = m == null ? void 0 : m.meta) == null ? void 0 : _a.title) || meta.title;
      levels.push({ path: fullPath, title });
    }
  }
  return levels;
}
function getMatchedComponents(matched) {
  const components = [];
  matched.forEach((m) => {
    var _a, _b;
    if ((_b = (_a = m.components) == null ? void 0 : _a.default) == null ? void 0 : _b.name) {
      components.push(m.components.default.name);
    }
  });
  return components;
}
function getRouteTab(route, tabs, homePath, routeTitle) {
  const { path, fullPath, meta, matched } = route;
  const key = meta.tabUnique === false ? fullPath : path;
  const t = findTabByPath(key, tabs);
  const title = (t == null ? void 0 : t.title) || routeTitle;
  const home = path === homePath || fullPath === homePath;
  const closable = (t == null ? void 0 : t.closable) ?? meta.closable !== false;
  const components = getMatchedComponents(matched);
  return { key, path, fullPath, title, closable, home, components, meta };
}
function getActiveChilds(menus, active, childrenName) {
  const field = childrenName || "children";
  if (!menus.length) {
    return [];
  }
  if (!active) {
    return menus[0][field] || [];
  }
  const m = menus.find((m2) => m2.path === active);
  if (m == null) {
    return menus[0][field] || [];
  }
  return m[field] || [];
}
function getIframeSrc(routePath, iframeUrl) {
  const [_path1, query1 = ""] = (routePath ?? "").split("?");
  const [path2, query2 = ""] = (iframeUrl ?? "").split("?");
  const params1 = new URLSearchParams(query1);
  const params2 = new URLSearchParams(query2);
  for (const [key, value] of params2.entries()) {
    params1.append(key, value);
  }
  const newQuery = params1.toString();
  return `${path2}${newQuery ? `?${newQuery}` : ""}`;
}
function getMenuItems(menus, link) {
  return core.mapTree(menus, (m) => {
    const { path, meta } = m;
    const { hide, icon, title, props: props2 } = meta ?? {};
    if (hide) {
      return;
    }
    const item = {
      title,
      icon,
      path: link ? path : void 0,
      index: path,
      ...core.omit(props2, ["title", "icon", "path", "index"]),
      meta
    };
    return item;
  });
}
function useLayoutState() {
  return vue.inject(props.LAYOUT_KEY, {});
}
function useProLayoutState() {
  return vue.inject(props$1.PRO_LAYOUT_KEY, {});
}
function useResponsive(props2) {
  const state = useProLayoutState();
  return vue.computed(() => props2.responsive ?? state.responsive ?? true);
}
exports.findMenuByPath = findMenuByPath;
exports.findTabByKey = findTabByKey;
exports.findTabByPath = findTabByPath;
exports.getActiveChilds = getActiveChilds;
exports.getIframeSrc = getIframeSrc;
exports.getMatchedComponents = getMatchedComponents;
exports.getMatchedLevels = getMatchedLevels;
exports.getMatchedMenus = getMatchedMenus;
exports.getMenuItems = getMenuItems;
exports.getRouteMatched = getRouteMatched;
exports.getRouteTab = getRouteTab;
exports.useLayoutState = useLayoutState;
exports.useProLayoutState = useProLayoutState;
exports.useResponsive = useResponsive;
