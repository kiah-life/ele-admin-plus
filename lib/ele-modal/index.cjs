"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const ReceiverView = require("../ele-config-provider/components/receiver-view");
const util = require("../ele-pro-layout/util");
const util$1 = require("./util");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleModal", inheritAttrs: false },
  __name: "index",
  props: props.modalProps,
  emits: props.modalEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const layoutState = util.useLayoutState();
    const isResponsive = util.useResponsive(props2);
    const dialogRef = vue.ref(null);
    const isFullscreen = vue.ref(props2.fullscreen ?? false);
    const isActivated = vue.ref(true);
    const dialogClass = vue.computed(() => {
      const classes = [util$1.wrapperClass];
      if (props2.responsive ?? isResponsive.value ?? true) {
        classes.push("ele-modal-responsive");
      }
      if (props2.alignCenter || props2.position === "center") {
        classes.push("ele-modal-center");
      } else if (props2.position === "top") {
        classes.push("ele-modal-top");
      } else if (props2.position === "bottom") {
        classes.push("ele-modal-bottom");
      } else if (props2.position === "left") {
        classes.push("ele-modal-left");
      } else if (props2.position === "right") {
        classes.push("ele-modal-right");
      } else if (props2.position === "leftTop") {
        classes.push("ele-modal-left-top");
      } else if (props2.position === "leftBottom") {
        classes.push("ele-modal-left-bottom");
      } else if (props2.position === "rightTop") {
        classes.push("ele-modal-right-top");
      } else if (props2.position === "rightBottom") {
        classes.push("ele-modal-right-bottom");
      }
      if (props2.draggable) {
        classes.push("ele-modal-movable");
      }
      if (props2.resizable) {
        classes.push("ele-modal-resizable");
      }
      if (props2.multiple) {
        classes.push("ele-modal-multiple");
      }
      if (isFullscreen.value) {
        classes.push("ele-modal-fullscreen");
      }
      if (!props2.modelValue) {
        classes.push(util$1.closedClass);
      }
      if (!isActivated.value && props2.modelValue) {
        classes.push("ele-modal-hide");
      }
      if (props2.inner) {
        classes.push("ele-modal-inner");
      }
      if (props2.modalClass) {
        classes.push(props2.modalClass);
      }
      return classes.join(" ");
    });
    const teleportTo = vue.computed(() => {
      return util$1.getModalContainer(
        props2.inner,
        props2.multiple,
        props2.appendTo,
        layoutState.modalsEl
      );
    });
    const teleportDisabled = vue.computed(() => {
      const appendTo = props2.appendTo || "body";
      const disabled = appendTo === "body" ? !props2.appendToBody : false;
      return props2.multiple || props2.inner ? false : disabled;
    });
    const {
      handleHeaderMousedown,
      handleHeaderTouchstart,
      handleResizeMousedown,
      handleResizeTouchstart,
      bindAutoTopEvent,
      unbindAutoTopEvent,
      topModal,
      setInitPosition,
      resetModalStyle
    } = util$1.useModalEvent(dialogRef, props2, isFullscreen);
    const updateModelValue = (modelValue) => {
      emit("update:modelValue", modelValue);
    };
    const toggleFullscreen = (fullscreen) => {
      isFullscreen.value = !isFullscreen.value;
      vue.nextTick(() => {
        topModal();
      });
      emit("update:fullscreen", isFullscreen.value);
    };
    const handleOpen = () => {
      if (props2.resetOnClose || props2.destroyOnClose) {
        isFullscreen.value = props2.fullscreen ?? false;
      }
      vue.nextTick(() => {
        if (props2.resetOnClose) {
          resetModalStyle();
        } else {
          setInitPosition();
        }
        topModal();
      });
      emit("open");
    };
    const handleOpened = () => {
      bindAutoTopEvent();
      emit("opened");
    };
    const handleClose = () => {
      unbindAutoTopEvent();
      emit("close");
    };
    const handleClosed = () => {
      emit("closed");
    };
    const handleOpenAutoFocus = () => {
      emit("openAutoFocus");
    };
    const handleCloseAutoFocus = () => {
      emit("closeAutoFocus");
    };
    vue.watch(
      () => props2.fullscreen,
      (fullscreen) => {
        isFullscreen.value = fullscreen ?? false;
      }
    );
    vue.onMounted(() => {
      if (props2.modelValue) {
        setInitPosition();
      }
    });
    vue.onActivated(() => {
      isActivated.value = true;
    });
    vue.onDeactivated(() => {
      isActivated.value = false;
    });
    __expose({
      dialogRef
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: teleportTo.value,
        disabled: teleportDisabled.value
      }, [
        vue.createVNode(vue.unref(elementPlus.ElDialog), vue.mergeProps(_ctx.$attrs, {
          ref_key: "dialogRef",
          ref: dialogRef,
          modelValue: _ctx.modelValue,
          title: _ctx.title,
          width: _ctx.width,
          fullscreen: false,
          modal: _ctx.multiple ? false : _ctx.modal,
          modalClass: dialogClass.value,
          appendToBody: false,
          lockScroll: _ctx.inner || _ctx.multiple ? false : _ctx.lockScroll,
          openDelay: _ctx.openDelay,
          closeDelay: _ctx.closeDelay,
          closeOnClickModal: _ctx.closeOnClickModal,
          closeOnPressEscape: _ctx.closeOnPressEscape,
          showClose: false,
          beforeClose: _ctx.beforeClose,
          draggable: false,
          overflow: false,
          center: _ctx.center,
          alignCenter: false,
          destroyOnClose: _ctx.destroyOnClose,
          zIndex: _ctx.zIndex,
          headerAriaLevel: _ctx.headerAriaLevel,
          "onUpdate:modelValue": updateModelValue,
          onOpen: handleOpen,
          onOpened: handleOpened,
          onClose: handleClose,
          onClosed: handleClosed,
          onOpenAutoFocus: handleOpenAutoFocus,
          onCloseAutoFocus: handleCloseAutoFocus
        }), vue.createSlots({
          header: vue.withCtx(({ close, titleId, titleClass }) => [
            vue.createElementVNode("div", {
              style: vue.normalizeStyle(_ctx.headerStyle),
              class: "ele-modal-header",
              onMousedown: _cache[6] || (_cache[6] = //@ts-ignore
              (...args) => vue.unref(handleHeaderMousedown) && vue.unref(handleHeaderMousedown)(...args)),
              onTouchstart: _cache[7] || (_cache[7] = //@ts-ignore
              (...args) => vue.unref(handleHeaderTouchstart) && vue.unref(handleHeaderTouchstart)(...args))
            }, [
              vue.createElementVNode("div", {
                class: "ele-modal-title",
                style: vue.normalizeStyle(_ctx.titleStyle)
              }, [
                vue.renderSlot(_ctx.$slots, "header", {
                  close,
                  titleId,
                  titleClass
                }, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
                ])
              ], 4),
              _ctx.maxable ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "ele-modal-tool ele-modal-tool-max",
                style: vue.normalizeStyle(_ctx.fullscreenBtnStyle),
                onClick: _cache[0] || (_cache[0] = ($event) => toggleFullscreen()),
                onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop"])),
                onTouchstart: _cache[2] || (_cache[2] = vue.withModifiers(() => {
                }, ["stop"]))
              }, [
                vue.renderSlot(_ctx.$slots, "maxIcon", { fullscreen: isFullscreen.value }, () => [
                  vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                    default: vue.withCtx(() => [
                      isFullscreen.value ? (vue.openBlock(), vue.createBlock(vue.unref(icons.CompressOutlined), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(icons.ExpandOutlined), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 36)) : vue.createCommentVNode("", true),
              _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 1,
                class: "ele-modal-tool",
                style: vue.normalizeStyle(_ctx.closeBtnStyle),
                onClick: _cache[3] || (_cache[3] = ($event) => updateModelValue(false)),
                onMousedown: _cache[4] || (_cache[4] = vue.withModifiers(() => {
                }, ["stop"])),
                onTouchstart: _cache[5] || (_cache[5] = vue.withModifiers(() => {
                }, ["stop"]))
              }, [
                vue.renderSlot(_ctx.$slots, "closeIcon", {}, () => [
                  vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                    default: vue.withCtx(() => [
                      _ctx.closeIcon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.closeIcon), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(icons.CloseOutlined), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 36)) : vue.createCommentVNode("", true)
            ], 36),
            _ctx.resizable ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass([
                "ele-modal-resize-icon",
                { "is-horizontal": _ctx.resizable === "horizontal" },
                { "is-vertical": _ctx.resizable === "vertical" }
              ]),
              style: vue.normalizeStyle(_ctx.resizeIconStyle),
              onMousedown: _cache[8] || (_cache[8] = //@ts-ignore
              (...args) => vue.unref(handleResizeMousedown) && vue.unref(handleResizeMousedown)(...args)),
              onTouchstart: _cache[9] || (_cache[9] = //@ts-ignore
              (...args) => vue.unref(handleResizeTouchstart) && vue.unref(handleResizeTouchstart)(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "resizeIcon", {}, () => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.ResizeOutlined))
                  ]),
                  _: 1
                })
              ])
            ], 38)) : vue.createCommentVNode("", true)
          ]),
          default: vue.withCtx(() => [
            vue.createVNode(ReceiverView, {
              wrapPosition: false,
              class: vue.normalizeClass(["ele-modal-body", { "is-form": _ctx.form }]),
              style: vue.normalizeStyle(_ctx.bodyStyle)
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["class", "style"])
          ]),
          _: 2
        }, [
          _ctx.$slots.footer ? {
            name: "footer",
            fn: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "ele-modal-footer",
                style: vue.normalizeStyle(_ctx.footerStyle)
              }, [
                vue.renderSlot(_ctx.$slots, "footer")
              ], 4)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["modelValue", "title", "width", "modal", "modalClass", "lockScroll", "openDelay", "closeDelay", "closeOnClickModal", "closeOnPressEscape", "beforeClose", "center", "destroyOnClose", "zIndex", "headerAriaLevel"])
      ], 8, ["to", "disabled"]);
    };
  }
});
module.exports = _sfc_main;
