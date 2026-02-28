"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function getRotatedBounds(w, h, r) {
  const radians = r * (Math.PI / 180);
  const cosR = Math.cos(radians);
  const sinR = Math.sin(radians);
  const width = Math.abs(w * cosR) + Math.abs(h * sinR);
  const height = Math.abs(w * sinR) + Math.abs(h * cosR);
  return { width, height };
}
exports.getRotatedBounds = getRotatedBounds;
