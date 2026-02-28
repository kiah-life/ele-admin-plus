"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const vueRouter = require("vue-router");
const util = require("../ele-pro-layout/util");
const core = require("./core");
function camelCase(str) {
  const val = str.replace(/[-|/](\w)/g, (_, c) => c ? c.toUpperCase() : "");
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function pathIsAdd(path, data) {
  return core.findTree(data, (d) => path === d.path) != null;
}
function getRoutePath(path) {
  if (!path || !path.includes("?") || path.endsWith("?")) {
    return path;
  }
  return path.substring(0, path.indexOf("?"));
}
function getRouteComponent(menu, name, func) {
  if (!menu.component || !core.isExternalLink(menu.component)) {
    return { component: func(menu.component, menu, name) };
  }
  return {
    component: vue.defineComponent({
      name,
      setup() {
        var _a;
        const proLayoutState = util.useProLayoutState();
        const route = vueRouter.useRoute();
        const { fullPath } = route;
        const iframeSrc = vue.ref(util.getIframeSrc(fullPath, menu.component));
        const isAlive = ((_a = menu.meta) == null ? void 0 : _a.keepAlive) !== false;
        const keepAlive = vue.computed(() => !!proLayoutState.keepAlive);
        return () => {
          if (!isAlive || !keepAlive.value) {
            return vue.h("iframe", {
              src: iframeSrc.value,
              class: "ele-admin-iframe"
            });
          }
          return vue.h("div", { class: "ele-none", style: { display: "none" } });
        };
      }
    }),
    link: true
  };
}
function menuToRoutes(menus, getComponent, added) {
  if (!(menus == null ? void 0 : menus.length)) {
    return;
  }
  const routes = [];
  const addedRoutes = added ? [...added] : [];
  menus.forEach((item) => {
    const meta = { ...item.meta };
    const path = meta.routePath || getRoutePath(item.path);
    if (path && !core.isExternalLink(path) && !pathIsAdd(path, addedRoutes)) {
      const name = item.name || camelCase(path);
      const { component, link } = getRouteComponent(item, name, getComponent);
      if (link) {
        meta.iframe = item.component;
        meta.hideFooter = true;
      }
      addedRoutes.push({ path });
      routes.push({
        name,
        path,
        component,
        redirect: item.redirect,
        meta,
        children: menuToRoutes(item.children, getComponent, addedRoutes)
      });
    }
  });
  return routes;
}
exports.menuToRoutes = menuToRoutes;
