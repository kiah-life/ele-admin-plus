"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function getFont(font) {
  const style = {
    color: "rgba(122, 122, 122, .35)",
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "sans-serif",
    fontStyle: "normal"
  };
  return Object.assign(style, font);
}
function getGap(gap) {
  const [gapX, gapY] = gap ?? [];
  return [gapX ?? 100, gapY ?? 100];
}
function getPixelRatio() {
  return window.devicePixelRatio || 1;
}
function rotateWatermark(ctx, rotateX, rotateY, rotate) {
  ctx.translate(rotateX, rotateY);
  ctx.rotate(Math.PI / 180 * Number(rotate));
  ctx.translate(-rotateX, -rotateY);
}
function joinStyle(style) {
  const result = Object.keys(style).map((key) => {
    const name = key.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
    return `${name}:${style[key]}`;
  });
  return result.join(";");
}
function useMutation(option) {
  const { getRoot, getEl, onDeleted, onDalsified } = option;
  const deletedObserver = new MutationObserver((mutations) => {
    const el = getEl();
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && Array.from(mutation.removedNodes).some((n) => n === el)) {
        onDeleted();
      }
    });
  });
  const falsifiedObserver = new MutationObserver(() => {
    onDalsified();
  });
  const observe = () => {
    const el = getEl();
    if (el) {
      falsifiedObserver.observe(el, { attributes: true });
    }
    const root = getRoot();
    if (root) {
      deletedObserver.observe(root, { childList: true });
    }
  };
  const disconnect = () => {
    falsifiedObserver.disconnect();
    deletedObserver.disconnect();
  };
  vue.onBeforeUnmount(() => {
    disconnect();
  });
  return { observe, disconnect };
}
exports.getFont = getFont;
exports.getGap = getGap;
exports.getPixelRatio = getPixelRatio;
exports.joinStyle = joinStyle;
exports.rotateWatermark = rotateWatermark;
exports.useMutation = useMutation;
