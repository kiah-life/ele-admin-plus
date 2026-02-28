import { defineComponent, ref, computed, h } from "vue";
import { useRoute } from "vue-router";
import { useProLayoutState, getIframeSrc } from "../ele-pro-layout/util";
import { isExternalLink, findTree } from "./core";
function camelCase(str) {
  const val = str.replace(/[-|/](\w)/g, (_, c) => c ? c.toUpperCase() : "");
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function pathIsAdd(path, data) {
  return findTree(data, (d) => path === d.path) != null;
}
function getRoutePath(path) {
  if (!path || !path.includes("?") || path.endsWith("?")) {
    return path;
  }
  return path.substring(0, path.indexOf("?"));
}
function getRouteComponent(menu, name, func) {
  if (!menu.component || !isExternalLink(menu.component)) {
    return { component: func(menu.component, menu, name) };
  }
  return {
    component: defineComponent({
      name,
      setup() {
        var _a;
        const proLayoutState = useProLayoutState();
        const route = useRoute();
        const { fullPath } = route;
        const iframeSrc = ref(getIframeSrc(fullPath, menu.component));
        const isAlive = ((_a = menu.meta) == null ? void 0 : _a.keepAlive) !== false;
        const keepAlive = computed(() => !!proLayoutState.keepAlive);
        return () => {
          if (!isAlive || !keepAlive.value) {
            return h("iframe", {
              src: iframeSrc.value,
              class: "ele-admin-iframe"
            });
          }
          return h("div", { class: "ele-none", style: { display: "none" } });
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
    if (path && !isExternalLink(path) && !pathIsAdd(path, addedRoutes)) {
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
export {
  menuToRoutes
};
