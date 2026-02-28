"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const ReceiverView = require("../ele-config-provider/components/receiver-view");
const util = require("../ele-pro-layout/util");
const util$1 = require("../ele-modal/util");
const props = require("./props");
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleDrawer" },
  __name: "index",
  props: props.drawerProps,
  emits: elementPlus.drawerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const layoutState = util.useLayoutState();
    const drawerRef = vue.ref(null);
    const isActivated = vue.ref(true);
    const drawerClass = vue.computed(() => {
      const classes = ["ele-drawer"];
      if (!props2.modelValue) {
        classes.push("ele-drawer-closed");
      }
      if (!isActivated.value && props2.modelValue) {
        classes.push("ele-drawer-hide");
      }
      if (props2.inner) {
        classes.push("ele-drawer-inner");
      }
      if (props2.modalClass) {
        classes.push(props2.modalClass);
      }
      return classes.join(" ");
    });
    const teleportTo = vue.computed(() => {
      return util$1.getModalContainer(
        props2.inner,
        false,
        props2.appendTo,
        layoutState.modalsEl
      );
    });
    const teleportDisabled = vue.computed(() => {
      const appendTo = props2.appendTo || "body";
      const disabled = appendTo === "body" ? !props2.appendToBody : false;
      return props2.inner ? false : disabled;
    });
    const handleClose = () => {
      if (drawerRef.value && drawerRef.value.handleClose) {
        drawerRef.value.handleClose();
      }
    };
    const updateModelValue = (value) => {
      emit("update:modelValue", value);
    };
    const handleDrawerOpen = () => {
      emit("open");
    };
    const handleDrawerOpened = () => {
      emit("opened");
    };
    const handleDrawerClose = () => {
      emit("close");
    };
    const handleDrawerClosed = () => {
      emit("closed");
    };
    const handleDrawerOpenAutoFocus = () => {
      emit("openAutoFocus");
    };
    const handleDrawerCloseAutoFocus = () => {
      emit("closeAutoFocus");
    };
    vue.onActivated(() => {
      isActivated.value = true;
    });
    vue.onDeactivated(() => {
      isActivated.value = false;
    });
    __expose({
      drawerRef,
      handleClose
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: teleportTo.value,
        disabled: teleportDisabled.value
      }, [
        vue.createVNode(vue.unref(elementPlus.ElDrawer), vue.mergeProps(_ctx.$attrs, {
          ref_key: "drawerRef",
          ref: drawerRef,
          modelValue: _ctx.modelValue,
          appendToBody: false,
          lockScroll: _ctx.inner ? false : _ctx.lockScroll,
          beforeClose: _ctx.beforeClose,
          closeOnClickModal: _ctx.closeOnClickModal,
          closeOnPressEscape: _ctx.closeOnPressEscape,
          openDelay: _ctx.openDelay,
          closeDelay: _ctx.closeDelay,
          destroyOnClose: _ctx.destroyOnClose,
          modal: _ctx.modal,
          direction: _ctx.direction,
          showClose: false,
          size: _ctx.size,
          title: _ctx.title,
          withHeader: _ctx.withHeader,
          modalClass: drawerClass.value,
          zIndex: _ctx.zIndex,
          headerAriaLevel: _ctx.headerAriaLevel,
          onOpen: handleDrawerOpen,
          onOpened: handleDrawerOpened,
          onClose: handleDrawerClose,
          onClosed: handleDrawerClosed,
          onOpenAutoFocus: handleDrawerOpenAutoFocus,
          onCloseAutoFocus: handleDrawerCloseAutoFocus,
          "onUpdate:modelValue": updateModelValue
        }), vue.createSlots({
          header: vue.withCtx(({ close }) => [
            vue.createElementVNode("div", {
              class: "ele-drawer-header",
              style: vue.normalizeStyle(_ctx.headerStyle)
            }, [
              vue.createElementVNode("div", {
                role: "heading",
                class: "ele-drawer-title",
                style: vue.normalizeStyle(_ctx.titleStyle)
              }, [
                vue.renderSlot(_ctx.$slots, "header", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
                ])
              ], 4),
              _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "ele-drawer-close",
                style: vue.normalizeStyle(_ctx.closeBtnStyle),
                onClick: close
              }, [
                vue.renderSlot(_ctx.$slots, "closeBtn", {}, () => [
                  vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(icons.CloseOutlined))
                    ]),
                    _: 1
                  })
                ])
              ], 12, _hoisted_1)) : vue.createCommentVNode("", true)
            ], 4)
          ]),
          default: vue.withCtx(() => [
            vue.createVNode(ReceiverView, {
              wrapPosition: false,
              class: "ele-drawer-body",
              style: vue.normalizeStyle(_ctx.bodyStyle)
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["style"])
          ]),
          _: 2
        }, [
          _ctx.$slots.footer ? {
            name: "footer",
            fn: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "ele-drawer-footer",
                style: vue.normalizeStyle(_ctx.footerStyle)
              }, [
                vue.renderSlot(_ctx.$slots, "footer")
              ], 4)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["modelValue", "lockScroll", "beforeClose", "closeOnClickModal", "closeOnPressEscape", "openDelay", "closeDelay", "destroyOnClose", "modal", "direction", "size", "title", "withHeader", "modalClass", "zIndex", "headerAriaLevel"])
      ], 8, ["to", "disabled"]);
    };
  }
});
module.exports = _sfc_main;
