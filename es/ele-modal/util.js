import { unref } from "vue";
import { queryChild, getCurrentStyle } from "../utils/core";
import { useMoveEvent } from "../utils/hook";
const containerClass = "ele-modal-container";
const wrapperClass = "ele-modal";
const closedClass = "ele-modal-closed";
const fixTop = 0.65;
const fixLeft = 0.65;
function getModalEl(dialogRef) {
  var _a, _b;
  const el = (_b = unref((_a = unref(dialogRef)) == null ? void 0 : _a.dialogContentRef)) == null ? void 0 : _b.$el;
  return el;
}
function initModalStyle(modalEl) {
  modalEl.style.top = modalEl.offsetTop + "px";
  modalEl.style.left = modalEl.offsetLeft + "px";
  modalEl.style.right = "auto";
  modalEl.style.bottom = "auto";
  modalEl.style.position = "absolute";
  modalEl.style.margin = "0";
}
function canMoveOut(moveOut, direction) {
  if (direction && moveOut != null && Array.isArray(moveOut)) {
    return moveOut.includes(direction);
  }
  return false;
}
function getModalContainer(inner, multiple, appendTo, modalsEl) {
  if (multiple) {
    const parent = (inner ? modalsEl : void 0) || document.body;
    const wrapper = queryChild(parent, containerClass);
    if (wrapper) {
      return wrapper;
    }
    const elem = document.createElement("div");
    elem.classList.add(containerClass);
    parent.appendChild(elem);
    return elem;
  }
  if (inner && modalsEl) {
    return modalsEl;
  }
  return appendTo || "body";
}
function useModalMove(dialogRef, props, isFullscreen) {
  let modalEl = null;
  let wrapEl = null;
  let downOL = null;
  let downOT = null;
  const { handleMousedown, handleTouchstart } = useMoveEvent({
    start: () => {
      modalEl = getModalEl(dialogRef);
      wrapEl = modalEl == null ? void 0 : modalEl.parentElement;
      if (!modalEl || !wrapEl || !props.draggable || isFullscreen.value) {
        return;
      }
      modalEl.style.userSelect = "none";
      initModalStyle(modalEl);
      downOL = modalEl.offsetLeft;
      downOT = modalEl.offsetTop;
    },
    move: ({ distanceX, distanceY, e }) => {
      if (!modalEl || !wrapEl || downOL == null || downOT == null || distanceX == null || distanceY == null) {
        return;
      }
      e.preventDefault();
      let positionLeft = distanceX + downOL;
      let positionTop = distanceY + downOT;
      const limitL = wrapEl.clientWidth - modalEl.clientWidth - fixLeft;
      const limitT = wrapEl.clientHeight - modalEl.clientHeight - fixTop;
      if (!props.moveOut) {
        if (positionLeft < 0) {
          positionLeft = 0;
        } else if (positionLeft > limitL) {
          positionLeft = limitL;
        }
        if (positionTop > limitT) {
          positionTop = limitT;
        }
        if (positionTop < 0) {
          positionTop = 0;
        }
      } else {
        if (!canMoveOut(props.moveOut, "left") && positionLeft < 0) {
          positionLeft = 0;
        }
        if (!canMoveOut(props.moveOut, "right") && positionLeft > limitL) {
          positionLeft = limitL;
        }
        if (!canMoveOut(props.moveOut, "bottom") && positionTop > limitT) {
          positionTop = limitT;
        }
        if (!canMoveOut(props.moveOut, "top") && positionTop < 0) {
          positionTop = 0;
        }
        const minLimitL = wrapEl.clientWidth - 48;
        if (positionLeft > minLimitL) {
          positionLeft = minLimitL;
        }
        const minLimitT = wrapEl.clientHeight - 48;
        if (props.multiple && positionTop > minLimitT) {
          positionTop = minLimitT;
        }
      }
      modalEl.style.left = `${Math.floor(positionLeft)}px`;
      modalEl.style.top = `${Math.floor(positionTop)}px`;
    },
    end: () => {
      if (modalEl) {
        modalEl.style.userSelect = "";
      }
      downOL = null;
      downOT = null;
      modalEl = null;
      wrapEl = null;
    },
    touchmoveOptions: { passive: false }
  });
  return {
    handleHeaderMousedown: handleMousedown,
    handleHeaderTouchstart: handleTouchstart
  };
}
function useModalResize(dialogRef, props, isFullscreen) {
  let modalEl = null;
  let wrapEl = null;
  let downW = null;
  let downH = null;
  const { handleMousedown, handleTouchstart } = useMoveEvent({
    start: () => {
      modalEl = getModalEl(dialogRef);
      wrapEl = modalEl == null ? void 0 : modalEl.parentElement;
      if (!modalEl || !wrapEl || !props.resizable || isFullscreen.value) {
        return;
      }
      modalEl.style.userSelect = "none";
      initModalStyle(modalEl);
      downW = modalEl.clientWidth;
      downH = modalEl.clientHeight;
    },
    move: ({ distanceX, distanceY, e }) => {
      if (!modalEl || !wrapEl || downW == null || downH == null || distanceX == null || distanceY == null) {
        return;
      }
      e.preventDefault();
      if (props.resizable !== "vertical") {
        const w = distanceX + downW;
        const maxW = wrapEl.clientWidth - modalEl.offsetLeft - fixLeft;
        const nw = (w < props.minWidth ? props.minWidth : !canMoveOut(props.moveOut, "right") && w > maxW ? maxW : w) + "px";
        modalEl.style.width = nw;
        modalEl.style.maxWidth = nw;
        modalEl.style.minWidth = nw;
      }
      if (props.resizable !== "horizontal") {
        const h = distanceY + downH;
        const maxH = wrapEl.clientHeight - modalEl.offsetTop - fixTop;
        const nh = (h < props.minHeight ? props.minHeight : !canMoveOut(props.moveOut, "bottom") && h > maxH ? maxH : h) + "px";
        modalEl.style.height = nh;
        modalEl.style.maxHeight = nh;
        modalEl.style.minHeight = nh;
      }
    },
    end: () => {
      if (modalEl) {
        modalEl.style.userSelect = "";
      }
      downW = null;
      downH = null;
      modalEl = null;
      wrapEl = null;
    },
    touchmoveOptions: { passive: false }
  });
  return {
    handleResizeMousedown: handleMousedown,
    handleResizeTouchstart: handleTouchstart
  };
}
function useModalEvent(dialogRef, props, isFullscreen) {
  const { handleHeaderMousedown, handleHeaderTouchstart } = useModalMove(
    dialogRef,
    props,
    isFullscreen
  );
  const { handleResizeMousedown, handleResizeTouchstart } = useModalResize(
    dialogRef,
    props,
    isFullscreen
  );
  let isInitPosition = true;
  const getZIndex = () => {
    return props.zIndex ?? 2e3;
  };
  const topModal = (el) => {
    var _a;
    const modalEl = el ?? getModalEl(dialogRef);
    const overlayEl = (_a = modalEl == null ? void 0 : modalEl.parentElement) == null ? void 0 : _a.parentElement;
    if (!overlayEl) {
      return;
    }
    const currentIndex = getCurrentStyle(overlayEl).zIndex;
    const containerEl = overlayEl.parentElement;
    const cls = `.${wrapperClass}:not(.${closedClass})`;
    const modals = containerEl ? containerEl.querySelectorAll(cls) : void 0;
    let maxIndex = 0;
    (modals ? Array.from(modals) : []).forEach((modalEl2) => {
      const zIndex = getCurrentStyle(modalEl2).zIndex;
      if (zIndex != null) {
        const index = Number(zIndex);
        if (index >= maxIndex && (!overlayEl || modalEl2 !== overlayEl)) {
          maxIndex = index + 1;
        }
      }
    });
    if (maxIndex > Number(currentIndex || getZIndex() || 0)) {
      overlayEl.style.zIndex = String(maxIndex);
    }
  };
  const mousedownListener = (event) => {
    if (props.multiple) {
      topModal(event.currentTarget);
    }
  };
  const bindAutoTopEvent = () => {
    const modalEl = getModalEl(dialogRef);
    if (modalEl) {
      modalEl.addEventListener("mousedown", mousedownListener);
      modalEl.addEventListener("touchstart", mousedownListener);
    }
  };
  const unbindAutoTopEvent = () => {
    const modalEl = getModalEl(dialogRef);
    if (modalEl) {
      modalEl.removeEventListener("mousedown", mousedownListener);
      modalEl.removeEventListener("touchstart", mousedownListener);
    }
  };
  const getPositionMargin = (position) => {
    if (position == null || typeof position !== "object" || position.top == null && position.right == null && position.bottom == null && position.left == null) {
      return;
    }
    return [position.top, position.right, position.bottom, position.left].map((p) => typeof p === "number" ? `${p}px` : p || "auto").join(" ");
  };
  const getPosition = () => {
    if (props.alignCenter) {
      return "center";
    }
    if (props.top != null && props.top !== "") {
      return { top: props.top };
    }
    return props.position;
  };
  const setInitPosition = () => {
    if (isInitPosition) {
      isInitPosition = false;
      const modalEl = getModalEl(dialogRef);
      const margin = getPositionMargin(getPosition());
      if (modalEl && margin != null) {
        modalEl.style.margin = margin;
      }
    }
  };
  const resetModalStyle = () => {
    const modalEl = getModalEl(dialogRef);
    if (modalEl) {
      const w = props.width;
      modalEl.style.margin = getPositionMargin(getPosition()) || "";
      modalEl.style.position = "";
      modalEl.style.top = "";
      modalEl.style.left = "";
      modalEl.style.right = "";
      modalEl.style.bottom = "";
      modalEl.style.height = "";
      modalEl.style.maxHeight = "";
      modalEl.style.minHeight = "";
      modalEl.style.width = typeof w === "number" ? `${w}px` : w ?? "";
      modalEl.style.maxWidth = "";
      modalEl.style.minWidth = "";
    }
  };
  return {
    handleHeaderMousedown,
    handleHeaderTouchstart,
    handleResizeMousedown,
    handleResizeTouchstart,
    bindAutoTopEvent,
    unbindAutoTopEvent,
    topModal,
    setInitPosition,
    resetModalStyle
  };
}
export {
  closedClass,
  containerClass,
  getModalContainer,
  useModalEvent,
  useModalMove,
  useModalResize,
  wrapperClass
};
