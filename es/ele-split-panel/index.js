import { defineComponent, ref, watch, openBlock, createBlock, normalizeClass, unref, normalizeStyle, withCtx, createElementVNode, renderSlot, createElementBlock, createCommentVNode, createVNode } from "vue";
import { ElIcon } from "element-plus";
import { ArrowUp, ArrowLeft } from "../icons";
import ReceiverView from "../ele-config-provider/components/receiver-view";
import { useResponsive } from "../ele-pro-layout/util";
import { splitPanelProps, splitPanelEmits } from "./props";
const _hoisted_1 = { class: "ele-split-panel-space" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleSplitPanel" },
  __name: "index",
  props: splitPanelProps,
  emits: splitPanelEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isResponsive = useResponsive(props);
    const rootRef = ref(null);
    const wrapRef = ref(null);
    const sideRef = ref(null);
    const isCollapse = ref(false);
    const resizedSize = ref(null);
    const resizing = ref(false);
    const toggleCollapse = (collapse) => {
      isCollapse.value = typeof collapse === "boolean" ? collapse : !isCollapse.value;
      emit("update:collapse", isCollapse.value);
    };
    const resetSize = () => {
      resizedSize.value = null;
    };
    const getMaxSize = (el) => {
      const size = props.vertical ? el.clientHeight : el.clientWidth;
      if (!props.maxSize) {
        return size;
      }
      if (props.maxSize < 0) {
        return size + props.maxSize;
      } else if (props.maxSize < 1) {
        return Math.floor(size * props.maxSize);
      }
      return Math.min(props.maxSize, size);
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
      const min = !props.minSize || props.minSize < 0 ? 0 : props.minSize;
      const max = getMaxSize(rootEl);
      const mousemoveFn = (e) => {
        const size = props.vertical ? (props.reverse ? downY - e.clientY : e.clientY - downY) + downH : (props.reverse ? downX - e.clientX : e.clientX - downX) + downW;
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
    watch(
      [() => props.collapse, () => props.allowCollapse],
      () => {
        if (!props.allowCollapse) {
          isCollapse.value = false;
        } else {
          isCollapse.value = props.collapse;
        }
      },
      { immediate: true }
    );
    watch(
      () => props.size,
      () => {
        resetSize();
      }
    );
    watch(
      () => props.minSize,
      (minSize) => {
        const min = !minSize || minSize < 0 ? 0 : minSize;
        if (resizedSize.value && Number.parseInt(resizedSize.value) < min) {
          resizedSize.value = min + "px";
        }
      }
    );
    watch(
      () => props.maxSize,
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
      return openBlock(), createBlock(ReceiverView, {
        ref_key: "rootRef",
        ref: rootRef,
        class: normalizeClass([
          "ele-split-panel",
          { "is-reverse": _ctx.reverse },
          { "is-vertical": _ctx.vertical },
          { "is-collapse": isCollapse.value },
          { "is-resizing": resizing.value },
          { "is-responsive": unref(isResponsive) },
          { "is-flex-table": _ctx.flexTable }
        ]),
        style: normalizeStyle({
          "--ele-split-size": resizedSize.value || _ctx.size,
          "--ele-split-space": _ctx.space
        })
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "wrapRef",
            ref: wrapRef,
            class: "ele-split-panel-wrap",
            style: normalizeStyle(_ctx.customWrapStyle)
          }, [
            createElementVNode("div", {
              ref_key: "sideRef",
              ref: sideRef,
              class: "ele-split-panel-side",
              style: normalizeStyle(_ctx.customStyle)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 4),
            createElementVNode("div", _hoisted_1, [
              _ctx.resizable ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "ele-split-resize-line",
                onMousedown: handleResize
              }, null, 32)) : createCommentVNode("", true)
            ])
          ], 4),
          createElementVNode("div", {
            class: "ele-split-panel-body",
            style: normalizeStyle(_ctx.bodyStyle)
          }, [
            renderSlot(_ctx.$slots, "body", { collapse: isCollapse.value })
          ], 4),
          _ctx.allowCollapse ? (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle(_ctx.collapseStyle),
            class: "ele-split-collapse-button",
            onClick: _cache[0] || (_cache[0] = ($event) => toggleCollapse())
          }, [
            renderSlot(_ctx.$slots, "collapse", { collapse: isCollapse.value }, () => [
              createVNode(unref(ElIcon), { class: "ele-split-collapse-icon" }, {
                default: withCtx(() => [
                  _ctx.vertical ? (openBlock(), createBlock(unref(ArrowUp), {
                    key: 0,
                    style: { "margin-top": "-1.25px" }
                  })) : (openBlock(), createBlock(unref(ArrowLeft), {
                    key: 1,
                    style: { "margin-left": "-1.25px" }
                  }))
                ]),
                _: 1
              })
            ])
          ], 4)) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "ele-split-panel-mask",
            onClick: _cache[1] || (_cache[1] = ($event) => toggleCollapse())
          })
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
