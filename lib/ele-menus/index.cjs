"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const core = require("../utils/core");
const EleTooltip = require("../ele-tooltip/index");
const MenuItems = require("./components/menu-items");
const util = require("./util");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleMenus" },
  __name: "index",
  props: props.menusProps,
  emits: props.menusEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a, _b;
    const props$1 = __props;
    const emit = __emit;
    const isWebkit = (_b = (_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.includes) == null ? void 0 : _b.call(_a, "WebKit");
    const menuRef = vue.ref(null);
    const ellipsisRef = vue.ref(null);
    const sliceIndex = vue.ref(-1);
    const menuItems = vue.shallowRef([]);
    const moreMenuItems = vue.shallowRef([]);
    const tooltipVirtualRef = vue.ref();
    const tooltipContent = vue.ref("");
    const tooltipVisible = vue.ref(false);
    const isHorizontal = vue.computed(() => props$1.mode === "horizontal");
    const isCompact = vue.computed(() => props$1.mode === "compact");
    const collapseTooltipDisabled = vue.computed(
      () => isCompact.value ? !props$1.collapse : props$1.tooltipDisabled
    );
    const menuProps = vue.computed(
      () => core.pick(props$1, props.menuPropKeys)
    );
    const open = (index) => {
      if (menuRef.value) {
        menuRef.value.open(index);
      }
    };
    const close = (index) => {
      if (menuRef.value) {
        menuRef.value.open(index);
      }
    };
    const hideTooltip = () => {
      tooltipVisible.value = false;
    };
    const triggerTooltip = (e) => {
      var _a2;
      if (props$1.textEllipsisTooltip) {
        const itemEl = (_a2 = e.currentTarget) == null ? void 0 : _a2.parentNode;
        if (itemEl) {
          const titleEl = itemEl.querySelector(".ele-menu-title");
          const text = titleEl == null ? void 0 : titleEl.innerText;
          if (text && core.contentIsEllipsis(titleEl, "horizontal")) {
            tooltipVirtualRef.value = itemEl;
            tooltipContent.value = text;
            tooltipVisible.value = true;
            return;
          }
        }
      }
      hideTooltip();
    };
    const handleOpen = (index, indexPath) => {
      emit("open", index, indexPath);
    };
    const handleClose = (index, indexPath) => {
      emit("close", index, indexPath);
    };
    const handleSelect = (index, indexPath, item, routerResult) => {
      emit("select", index, indexPath, item, routerResult);
    };
    const handleItemClick = (item, e) => {
      emit("itemClick", item, e);
    };
    const handleItemMouseenter = (item, e) => {
      triggerTooltip(e);
      emit("itemMouseenter", item, e);
    };
    const handleItemMouseleave = (item, e) => {
      hideTooltip();
      emit("itemMouseleave", item, e);
    };
    const handleParentMouseenter = (item, e) => {
      triggerTooltip(e);
      emit("parentMouseenter", item, e);
    };
    const handleParentMouseleave = (item, e) => {
      hideTooltip();
      emit("parentMouseleave", item, e);
    };
    const scrollToActive = () => {
      var _a2;
      const menuEl = (_a2 = menuRef.value) == null ? void 0 : _a2.$el;
      if (menuEl) {
        const el = menuEl.querySelector(".el-menu-item.is-active") || menuEl.querySelector(".el-sub-menu.is-active");
        if (el) {
          if (typeof el["scrollIntoViewIfNeeded"] === "function") {
            el.scrollIntoViewIfNeeded(true);
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }
    };
    const { observe, unobserve, computedEllipsis } = util.useMenuEllipsis({
      getMenuEl: () => {
        var _a2;
        return (_a2 = menuRef.value) == null ? void 0 : _a2.$el;
      },
      getMoreEl: () => {
        var _a2;
        return (_a2 = ellipsisRef.value) == null ? void 0 : _a2.$el;
      },
      onEllipsis: (index) => {
        if (sliceIndex.value !== index) {
          sliceIndex.value = index;
        }
      }
    });
    vue.onMounted(() => {
      var _a2;
      if (props$1.ellipsis && isHorizontal.value && ((_a2 = menuRef.value) == null ? void 0 : _a2.$el)) {
        computedEllipsis();
        observe();
      }
    });
    vue.watch(
      [
        () => props$1.ellipsis,
        isHorizontal,
        () => {
          var _a2;
          return (_a2 = menuRef.value) == null ? void 0 : _a2.$el;
        },
        () => props$1.items
      ],
      () => {
        var _a2;
        if (props$1.ellipsis && isHorizontal.value && ((_a2 = menuRef.value) == null ? void 0 : _a2.$el)) {
          observe();
          return;
        }
        unobserve();
        sliceIndex.value = -1;
      }
    );
    vue.watch(
      [() => props$1.items, sliceIndex, isHorizontal],
      () => {
        const { items, moreItems } = util.getMenuItems(
          props$1.items,
          sliceIndex.value,
          isHorizontal.value
        );
        menuItems.value = items;
        moreMenuItems.value = moreItems;
      },
      {
        immediate: true,
        deep: true
      }
    );
    __expose({
      menuRef,
      ellipsisRef,
      open,
      close,
      scrollToActive
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElMenu), vue.mergeProps(menuProps.value, {
        ref_key: "menuRef",
        ref: menuRef,
        ellipsis: false,
        mode: isCompact.value ? "vertical" : _ctx.mode,
        collapse: isCompact.value ? true : _ctx.collapse,
        class: [
          "ele-menu",
          { "ele-menu-dark": _ctx.theme === "dark" },
          { "is-night": _ctx.theme === "dark" },
          { "ele-menu-colorful": _ctx.colorful },
          { "is-colorful": _ctx.colorful },
          { "is-compact": isCompact.value },
          { "is-compact-collapse": isCompact.value && _ctx.collapse }
        ],
        onOpen: handleOpen,
        onClose: handleClose,
        onSelect: handleSelect
      }), {
        default: vue.withCtx(() => {
          var _a2;
          return [
            menuItems.value && menuItems.value.length ? (vue.openBlock(), vue.createBlock(MenuItems, {
              key: 0,
              items: menuItems.value,
              first: true,
              tipDisabled: collapseTooltipDisabled.value,
              parentIsGroup: false,
              theme: _ctx.theme,
              popTheme: _ctx.popupTheme,
              colorful: _ctx.colorful,
              popupColorful: _ctx.popupColorful,
              firstPopClass: _ctx.firstPopperClass,
              webkit: vue.unref(isWebkit),
              onItemClick: handleItemClick,
              onItemMouseenter: handleItemMouseenter,
              onItemMouseleave: handleItemMouseleave,
              onParentMouseenter: handleParentMouseenter,
              onParentMouseleave: handleParentMouseleave
            }, vue.createSlots({ _: 2 }, [
              vue.renderList(Object.keys(_ctx.$slots), (name) => {
                return {
                  name,
                  fn: vue.withCtx((slotProps) => [
                    vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                  ])
                };
              })
            ]), 1032, ["items", "tipDisabled", "theme", "popTheme", "colorful", "popupColorful", "firstPopClass", "webkit"])) : vue.createCommentVNode("", true),
            moreMenuItems.value && moreMenuItems.value.length ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElSubMenu), vue.mergeProps({
              key: "sub-menu-more",
              teleported: true
            }, _ctx.ellipsisProps || {}, {
              ref_key: "ellipsisRef",
              ref: ellipsisRef,
              index: "sub-menu-more",
              popperClass: vue.unref(util.getPopperClass)(
                (_a2 = _ctx.ellipsisProps) == null ? void 0 : _a2.popperClass,
                _ctx.theme,
                _ctx.popupTheme,
                _ctx.colorful,
                _ctx.popupColorful,
                _ctx.firstPopperClass,
                true,
                vue.unref(isWebkit)
              ),
              class: "ele-sub-menu-ellipsis"
            }), {
              title: vue.withCtx(() => {
                var _a3;
                return [
                  vue.createVNode(vue.unref(elementPlus.ElIcon), vue.normalizeProps(vue.guardReactiveProps(((_a3 = _ctx.ellipsisProps) == null ? void 0 : _a3.iconProps) || {})), {
                    default: vue.withCtx(() => {
                      var _a4, _b2;
                      return [
                        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(((_a4 = _ctx.ellipsisProps) == null ? void 0 : _a4.icon) ?? vue.unref(icons.EllipsisOutlined)), {
                          style: vue.normalizeStyle((_b2 = _ctx.ellipsisProps) == null ? void 0 : _b2.iconStyle)
                        }, null, 8, ["style"]))
                      ];
                    }),
                    _: 1
                  }, 16)
                ];
              }),
              default: vue.withCtx(() => [
                vue.createVNode(MenuItems, {
                  items: moreMenuItems.value,
                  first: false,
                  tipDisabled: collapseTooltipDisabled.value,
                  parentIsGroup: false,
                  theme: _ctx.theme,
                  popTheme: _ctx.popupTheme,
                  colorful: _ctx.colorful,
                  popupColorful: _ctx.popupColorful,
                  firstPopClass: _ctx.firstPopperClass,
                  webkit: vue.unref(isWebkit),
                  onItemClick: handleItemClick,
                  onItemMouseenter: handleItemMouseenter,
                  onItemMouseleave: handleItemMouseleave,
                  onParentMouseenter: handleParentMouseenter,
                  onParentMouseleave: handleParentMouseleave
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["items", "tipDisabled", "theme", "popTheme", "colorful", "popupColorful", "firstPopClass", "webkit"])
              ]),
              _: 3
            }, 16, ["popperClass"])) : vue.createCommentVNode("", true),
            _ctx.textEllipsisTooltip ? (vue.openBlock(), vue.createBlock(EleTooltip, vue.mergeProps({
              key: 2,
              trigger: "click",
              placement: "right",
              fallbackPlacements: [
                "top-end",
                "top",
                "top-start",
                "bottom-end",
                "bottom",
                "bottom-start",
                "left"
              ],
              persistent: false,
              enterable: false,
              triggerKeys: []
            }, _ctx.textEllipsisTooltip === true ? {} : _ctx.textEllipsisTooltip, {
              virtualTriggering: true,
              virtualRef: tooltipVirtualRef.value,
              content: tooltipContent.value,
              visible: tooltipVisible.value
            }), null, 16, ["virtualRef", "content", "visible"])) : vue.createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16, ["mode", "collapse", "class"]);
    };
  }
});
module.exports = _sfc_main;
