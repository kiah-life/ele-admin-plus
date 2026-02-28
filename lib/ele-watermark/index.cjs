"use strict";
const vue = require("vue");
const util = require("./util");
const props = require("./props");
const SIZE = 2;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleWatermark" },
  __name: "index",
  props: props.watermarkProps,
  setup(__props) {
    const props2 = __props;
    const { observe, disconnect } = util.useMutation({
      getRoot: () => rootRef.value,
      getEl: () => imgRef.value,
      onDeleted: () => {
        disconnect();
        rootKey.value = rootKey.value + 1;
        vue.nextTick(() => {
          render();
        });
      },
      onDalsified: () => {
        render();
      }
    });
    const rootKey = vue.ref(1);
    const rootRef = vue.ref(null);
    const imgRef = vue.ref(null);
    const imgStyle = vue.ref({ display: "none" });
    const updateStyle = (base64, size) => {
      const position = props2.fixed ? "fixed" : "absolute";
      const width = props2.fixed ? "100vw" : "100%";
      const height = props2.fixed ? "100vh" : "100%";
      const style = {
        position: `${position} !important`,
        top: "0 !important",
        left: "0 !important",
        right: "auto !important",
        bottom: "auto !important",
        width: `${width} !important`,
        height: `${height} !important`,
        pointerEvents: "none !important",
        backgroundRepeat: "repeat !important",
        opacity: "1 !important",
        transform: "none !important",
        filter: "none !important",
        visibility: "visible !important",
        transition: "none !important",
        maxWidth: "none !important",
        maxHeight: "none !important",
        zoom: "1 !important",
        mask: "none !important",
        clipPath: "none !important",
        display: "block !important",
        ...props2.customStyle || {}
      };
      if (!base64) {
        style.display = "none !important";
      } else {
        style.backgroundImage = `url('${base64}') !important`;
        if (size) {
          style.backgroundSize = `${size} !important`;
        }
        style.zIndex = `${props2.zIndex ?? 2147483647} !important`;
      }
      disconnect();
      if (imgRef.value && imgRef.value.style && imgRef.value.style.cssText) {
        imgRef.value.style.cssText = util.joinStyle(style);
        observe();
      } else {
        imgStyle.value = style;
        vue.nextTick(() => {
          observe();
        });
      }
    };
    const getDefaultWidth = (ctx) => {
      if (props2.image || !ctx.measureText) {
        return 120;
      }
      const content = props2.content;
      const contents = Array.isArray(content) ? content : [content];
      const widths = contents.map((item) => ctx.measureText(item).width);
      return Math.ceil(Math.max(...widths));
    };
    const getDefaultHeight = (ctx) => {
      if (props2.image || !ctx.measureText) {
        return 64;
      }
      const lines = Array.isArray(props2.content) ? props2.content.length : 1;
      const { fontSize } = util.getFont(props2.font);
      return fontSize * lines + (lines - 1) * props2.lineGap;
    };
    const getMarkSize = (ctx) => {
      const width = props2.width;
      const height = props2.height;
      return [width ?? getDefaultWidth(ctx), height ?? getDefaultHeight(ctx)];
    };
    const fillTexts = (ctx, drawX, drawY, drawWidth, drawHeight) => {
      const ratio = util.getPixelRatio();
      const { color, fontSize, fontStyle, fontWeight, fontFamily } = util.getFont(
        props2.font
      );
      const mergedFontSize = fontSize * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${drawHeight}px ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.translate(drawWidth / 2, 0);
      const content = props2.content;
      const contents = Array.isArray(content) ? content : [content];
      contents.forEach((item, index) => {
        ctx.fillText(
          item ?? "",
          drawX,
          drawY + index * (mergedFontSize + props2.lineGap * ratio)
        );
      });
    };
    const render = () => {
      if (props2.disabled) {
        disconnect();
        imgStyle.value = { display: "none" };
        return;
      }
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      const rotate = props2.rotate ?? -22;
      if (!props2.image && ctx.measureText != null) {
        const { fontSize, fontFamily } = util.getFont(props2.font);
        ctx.font = `${fontSize}px ${fontFamily}`;
      }
      const [markWidth, markHeight] = getMarkSize(ctx);
      const ratio = util.getPixelRatio();
      const [gapX, gapY] = util.getGap(props2.gap);
      const canvasWidth = (gapX + markWidth) * ratio;
      const canvasHeight = (gapY + markHeight) * ratio;
      canvas.setAttribute("width", `${canvasWidth * SIZE}px`);
      canvas.setAttribute("height", `${canvasHeight * SIZE}px`);
      const drawWidth = markWidth * ratio;
      const drawHeight = markHeight * ratio;
      const rotateX = (drawWidth + gapX * ratio) / 2;
      const rotateY = (drawHeight + gapY * ratio) / 2;
      ctx.save();
      util.rotateWatermark(ctx, rotateX, rotateY, rotate);
      const drawX = gapX * ratio / 2;
      const drawY = gapY * ratio / 2;
      const alternateDrawX = drawX + canvasWidth;
      const alternateDrawY = drawY + canvasHeight;
      const alternateRotateX = rotateX + canvasWidth;
      const alternateRotateY = rotateY + canvasHeight;
      if (props2.image) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          ctx.restore();
          util.rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
          ctx.drawImage(
            img,
            alternateDrawX,
            alternateDrawY,
            drawWidth,
            drawHeight
          );
          updateStyle(canvas.toDataURL(), `${(gapX + markWidth) * SIZE}px`);
        };
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = props2.image;
      } else {
        fillTexts(ctx, drawX, drawY, drawWidth, drawHeight);
        ctx.restore();
        util.rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
        fillTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
        updateStyle(canvas.toDataURL(), `${(gapX + markWidth) * SIZE}px`);
      }
    };
    vue.onMounted(() => {
      render();
    });
    vue.watch(
      () => props2,
      () => {
        render();
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        key: rootKey.value,
        style: vue.normalizeStyle(!_ctx.wrapPosition || _ctx.fixed ? void 0 : { position: "relative" })
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        !_ctx.disabled ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          ref_key: "imgRef",
          ref: imgRef,
          style: vue.normalizeStyle(imgStyle.value)
        }, null, 4)) : vue.createCommentVNode("", true)
      ], 4);
    };
  }
});
module.exports = _sfc_main;
