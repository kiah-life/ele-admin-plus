"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../icons");
const ReceiverView = require("../ele-config-provider/components/receiver-view");
const util = require("../ele-pro-layout/util");
const props = require("./props");
const _hoisted_1 = { class: "ele-split-panel-space" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleSplitPanel" },
  __name: "index",
  props: props.splitPanelProps,
  emits: props.splitPanelEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const isResponsive = util.useResponsive(props2);
    const rootRef = vue.ref(null);
    const wrapRef = vue.ref(null);
    const sideRef = vue.ref(null);
    const isCollapse = vue.ref(false);
    const resizedSize = vue.ref(null);
    const resizing = vue.ref(false);
    const toggleCollapse = (collapse) => {
      isCollapse.value = typeof collapse === "boolean" ? collapse : !isCollapse.value;
      emit("update:collapse", isCollapse.value);
    };
    const resetSize = () => {
      resizedSize.value = null;
    };
    const getMaxSize = (el) => {
      const size = props2.vertical ? el.clientHeight : el.clientWidth;
      if (!props2.maxSize) {
        return size;
      }
      if (props2.maxSize < 0) {
        return size + props2.maxSize;
      } else if (props2.maxSize < 1) {
        return Math.floor(size * props2.maxSize);
      }
      return Math.min(props2.maxSize, size);
    };
    const handleResize = (event) => {
      var _a;
      const rootEl = (_a = rootRef.value) == null ? void 0 : _a.$el;
      const sideEl = sideRef.value;
      if (!rootEl || !sideEl) {
        return;
      }
      resizing.value = true;
      const downX = event.clientX;
      const downY = event.clientY;
      const downW = sideEl.clientWidth;
      const downH = sideEl.clientHeight;
      const min = !props2.minSize || props2.minSize < 0 ? 0 : props2.minSize;
      const max = getMaxSize(rootEl);
      const mousemoveFn = (e) => {
        const size = props2.vertical ? (props2.reverse ? downY - e.clientY : e.clientY - downY) + downH : (props2.reverse ? downX - e.clientX : e.clientX - downX) + downW;
        resizedSize.value = `${size < min ? min : size > max ? max : size}px`;
      };
      const mouseupFn = () => {
        resizing.value = false;
        document.removeEventListener("mousemove", mousemoveFn);
        document.removeEventListener("mouseup", mouseupFn);
      };
      document.addEventListener("mousemove", mousemoveFn);
      document.addEventListener("mouseup", mouseupFn);
    };
    vue.watch(
      [() => props2.collapse, () => props2.allowCollapse],
      () => {
        if (!props2.allowCollapse) {
          isCollapse.value = false;
        } else {
          isCollapse.value = props2.collapse;
        }
      },
      { immediate: true }
    );
    vue.watch(
      () => props2.size,
      () => {
        resetSize();
      }
    );
    vue.watch(
      () => props2.minSize,
      (minSize) => {
        const min = !minSize || minSize < 0 ? 0 : minSize;
        if (resizedSize.value && Number.parseInt(resizedSize.value) < min) {
          resizedSize.value = min + "px";
        }
      }
    );
    vue.watch(
      () => props2.maxSize,
      () => {
        var _a;
        const rootEl = (_a = rootRef.value) == null ? void 0 : _a.$el;
        if (resizedSize.value && rootEl) {
          const max = getMaxSize(rootEl);
          if (Number.parseInt(resizedSize.value) > max) {
            resizedSize.value = max + "px";
          }
        }
      }
    );
    __expose({
      toggleCollapse,
      resetSize
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(ReceiverView, {
        ref_key: "rootRef",
        ref: rootRef,
        class: vue.normalizeClass([
          "ele-split-panel",
          { "is-reverse": _ctx.reverse },
          { "is-vertical": _ctx.vertical },
          { "is-collapse": isCollapse.value },
          { "is-resizing": resizing.value },
          { "is-responsive": vue.unref(isResponsive) },
          { "is-flex-table": _ctx.flexTable }
        ]),
        style: vue.normalizeStyle({
          "--ele-split-size": resizedSize.value || _ctx.size,
          "--ele-split-space": _ctx.space
        })
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            ref_key: "wrapRef",
            ref: wrapRef,
            class: "ele-split-panel-wrap",
            style: vue.normalizeStyle(_ctx.customWrapStyle)
          }, [
            vue.createElementVNode("div", {
              ref_key: "sideRef",
              ref: sideRef,
              class: "ele-split-panel-side",
              style: vue.normalizeStyle(_ctx.customStyle)
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 4),
            vue.createElementVNode("div", _hoisted_1, [
              _ctx.resizable ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "ele-split-resize-line",
                onMousedown: handleResize
              }, null, 32)) : vue.createCommentVNode("", true)
            ])
          ], 4),
          vue.createElementVNode("div", {
            class: "ele-split-panel-body",
            style: vue.normalizeStyle(_ctx.bodyStyle)
          }, [
            vue.renderSlot(_ctx.$slots, "body", { collapse: isCollapse.value })
          ], 4),
          _ctx.allowCollapse ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            style: vue.normalizeStyle(_ctx.collapseStyle),
            class: "ele-split-collapse-button",
            onClick: _cache[0] || (_cache[0] = ($event) => toggleCollapse())
          }, [
            vue.renderSlot(_ctx.$slots, "collapse", { collapse: isCollapse.value }, () => [
              vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "ele-split-collapse-icon" }, {
                default: vue.withCtx(() => [
                  _ctx.vertical ? (vue.openBlock(), vue.createBlock(vue.unref(icons.ArrowUp), {
                    key: 0,
                    style: { "margin-top": "-1.25px" }
                  })) : (vue.openBlock(), vue.createBlock(vue.unref(icons.ArrowLeft), {
                    key: 1,
                    style: { "margin-left": "-1.25px" }
                  }))
                ]),
                _: 1
              })
            ])
          ], 4)) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", {
            class: "ele-split-panel-mask",
            onClick: _cache[1] || (_cache[1] = ($event) => toggleCollapse())
          })
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
module.exports = _sfc_main;
