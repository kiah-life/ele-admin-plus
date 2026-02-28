import { defineComponent, ref, computed, watch, onMounted, onActivated, onDeactivated, openBlock, createBlock, Teleport, createVNode, unref, mergeProps, createSlots, withCtx, createElementVNode, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createElementBlock, withModifiers, createCommentVNode, resolveDynamicComponent, normalizeClass, nextTick } from "vue";
import { ElDialog, ElIcon } from "element-plus";
import { CompressOutlined, ExpandOutlined, CloseOutlined, ResizeOutlined } from "../icons";
import ReceiverView from "../ele-config-provider/components/receiver-view";
import { useLayoutState, useResponsive } from "../ele-pro-layout/util";
import { getModalContainer, useModalEvent, wrapperClass, closedClass } from "./util";
import { modalProps, modalEmits } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleModal", inheritAttrs: false },
  __name: "index",
  props: modalProps,
  emits: modalEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const layoutState = useLayoutState();
    const isResponsive = useResponsive(props);
    const dialogRef = ref(null);
    const isFullscreen = ref(props.fullscreen ?? false);
    const isActivated = ref(true);
    const dialogClass = computed(() => {
      const classes = [wrapperClass];
      if (props.responsive ?? isResponsive.value ?? true) {
        classes.push("ele-modal-responsive");
      }
      if (props.alignCenter || props.position === "center") {
        classes.push("ele-modal-center");
      } else if (props.position === "top") {
        classes.push("ele-modal-top");
      } else if (props.position === "bottom") {
        classes.push("ele-modal-bottom");
      } else if (props.position === "left") {
        classes.push("ele-modal-left");
      } else if (props.position === "right") {
        classes.push("ele-modal-right");
      } else if (props.position === "leftTop") {
        classes.push("ele-modal-left-top");
      } else if (props.position === "leftBottom") {
        classes.push("ele-modal-left-bottom");
      } else if (props.position === "rightTop") {
        classes.push("ele-modal-right-top");
      } else if (props.position === "rightBottom") {
        classes.push("ele-modal-right-bottom");
      }
      if (props.draggable) {
        classes.push("ele-modal-movable");
      }
      if (props.resizable) {
        classes.push("ele-modal-resizable");
      }
      if (props.multiple) {
        classes.push("ele-modal-multiple");
      }
      if (isFullscreen.value) {
        classes.push("ele-modal-fullscreen");
      }
      if (!props.modelValue) {
        classes.push(closedClass);
      }
      if (!isActivated.value && props.modelValue) {
        classes.push("ele-modal-hide");
      }
      if (props.inner) {
        classes.push("ele-modal-inner");
      }
      if (props.modalClass) {
        classes.push(props.modalClass);
      }
      return classes.join(" ");
    });
    const teleportTo = computed(() => {
      return getModalContainer(
        props.inner,
        props.multiple,
        props.appendTo,
        layoutState.modalsEl
      );
    });
    const teleportDisabled = computed(() => {
      const appendTo = props.appendTo || "body";
      const disabled = appendTo === "body" ? !props.appendToBody : false;
      return props.multiple || props.inner ? false : disabled;
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
    } = useModalEvent(dialogRef, props, isFullscreen);
    const updateModelValue = (modelValue) => {
      emit("update:modelValue", modelValue);
    };
    const toggleFullscreen = (fullscreen) => {
      isFullscreen.value = !isFullscreen.value;
      nextTick(() => {
        topModal();
      });
      emit("update:fullscreen", isFullscreen.value);
    };
    const handleOpen = () => {
      if (props.resetOnClose || props.destroyOnClose) {
        isFullscreen.value = props.fullscreen ?? false;
      }
      nextTick(() => {
        if (props.resetOnClose) {
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
    watch(
      () => props.fullscreen,
      (fullscreen) => {
        isFullscreen.value = fullscreen ?? false;
      }
    );
    onMounted(() => {
      if (props.modelValue) {
        setInitPosition();
      }
    });
    onActivated(() => {
      isActivated.value = true;
    });
    onDeactivated(() => {
      isActivated.value = false;
    });
    __expose({
      dialogRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: teleportTo.value,
        disabled: teleportDisabled.value
      }, [
        createVNode(unref(ElDialog), mergeProps(_ctx.$attrs, {
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
        }), createSlots({
          header: withCtx(({ close, titleId, titleClass }) => [
            createElementVNode("div", {
              style: normalizeStyle(_ctx.headerStyle),
              class: "ele-modal-header",
              onMousedown: _cache[6] || (_cache[6] = //@ts-ignore
              (...args) => unref(handleHeaderMousedown) && unref(handleHeaderMousedown)(...args)),
              onTouchstart: _cache[7] || (_cache[7] = //@ts-ignore
              (...args) => unref(handleHeaderTouchstart) && unref(handleHeaderTouchstart)(...args))
            }, [
              createElementVNode("div", {
                class: "ele-modal-title",
                style: normalizeStyle(_ctx.titleStyle)
              }, [
                renderSlot(_ctx.$slots, "header", {
                  close,
                  titleId,
                  titleClass
                }, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ])
              ], 4),
              _ctx.maxable ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "ele-modal-tool ele-modal-tool-max",
                style: normalizeStyle(_ctx.fullscreenBtnStyle),
                onClick: _cache[0] || (_cache[0] = ($event) => toggleFullscreen()),
                onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"])),
                onTouchstart: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"]))
              }, [
                renderSlot(_ctx.$slots, "maxIcon", { fullscreen: isFullscreen.value }, () => [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      isFullscreen.value ? (openBlock(), createBlock(unref(CompressOutlined), { key: 0 })) : (openBlock(), createBlock(unref(ExpandOutlined), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 36)) : createCommentVNode("", true),
              _ctx.showClose ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "ele-modal-tool",
                style: normalizeStyle(_ctx.closeBtnStyle),
                onClick: _cache[3] || (_cache[3] = ($event) => updateModelValue(false)),
                onMousedown: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"])),
                onTouchstart: _cache[5] || (_cache[5] = withModifiers(() => {
                }, ["stop"]))
              }, [
                renderSlot(_ctx.$slots, "closeIcon", {}, () => [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      _ctx.closeIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon), { key: 0 })) : (openBlock(), createBlock(unref(CloseOutlined), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 36)) : createCommentVNode("", true)
            ], 36),
            _ctx.resizable ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([
                "ele-modal-resize-icon",
                { "is-horizontal": _ctx.resizable === "horizontal" },
                { "is-vertical": _ctx.resizable === "vertical" }
              ]),
              style: normalizeStyle(_ctx.resizeIconStyle),
              onMousedown: _cache[8] || (_cache[8] = //@ts-ignore
              (...args) => unref(handleResizeMousedown) && unref(handleResizeMousedown)(...args)),
              onTouchstart: _cache[9] || (_cache[9] = //@ts-ignore
              (...args) => unref(handleResizeTouchstart) && unref(handleResizeTouchstart)(...args))
            }, [
              renderSlot(_ctx.$slots, "resizeIcon", {}, () => [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(ResizeOutlined))
                  ]),
                  _: 1
                })
              ])
            ], 38)) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            createVNode(ReceiverView, {
              wrapPosition: false,
              class: normalizeClass(["ele-modal-body", { "is-form": _ctx.form }]),
              style: normalizeStyle(_ctx.bodyStyle)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["class", "style"])
          ]),
          _: 2
        }, [
          _ctx.$slots.footer ? {
            name: "footer",
            fn: withCtx(() => [
              createElementVNode("div", {
                class: "ele-modal-footer",
                style: normalizeStyle(_ctx.footerStyle)
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 4)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["modelValue", "title", "width", "modal", "modalClass", "lockScroll", "openDelay", "closeDelay", "closeOnClickModal", "closeOnPressEscape", "beforeClose", "center", "destroyOnClose", "zIndex", "headerAriaLevel"])
      ], 8, ["to", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
