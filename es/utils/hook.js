import { provide, ref, onBeforeUnmount, computed, watch } from "vue";
import { formItemContextKey } from "element-plus";
import { capitalize, getValue } from "./core";
function useFormItemRest() {
  provide(formItemContextKey, null);
}
function useTimer(ms, cb) {
  let timer = null;
  const waiting = ref(false);
  const stopTimer = () => {
    if (timer != null) {
      clearTimeout(timer);
      timer = null;
    }
    waiting.value = false;
  };
  const startTimer = (callback, timeout) => {
    stopTimer();
    waiting.value = true;
    const to = timeout ?? (typeof ms === "function" ? ms() : ms);
    timer = setTimeout(() => {
      const func = callback ?? cb;
      func && func();
      waiting.value = false;
    }, to);
  };
  onBeforeUnmount(() => {
    stopTimer();
  });
  return [startTimer, stopTimer, waiting];
}
function useMediaQuery(query, onChange) {
  const mediaQuery = window.matchMedia(query);
  const handleChange = () => {
    onChange && onChange();
  };
  const startWatch = () => {
    stopWatch();
    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
  };
  const stopWatch = () => {
    if ("removeEventListener" in mediaQuery) {
      mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.removeListener(handleChange);
    }
    handleChange();
  };
  onBeforeUnmount(() => {
    stopWatch();
  });
  return [mediaQuery, startWatch, stopWatch];
}
function useMobile(onChange) {
  const mobile = ref(false);
  const [media, startMedia, stopMedia] = useMediaQuery(
    "(max-width: 768px)",
    () => {
      const isMobile = media.matches;
      if (mobile.value !== isMobile) {
        mobile.value = isMobile;
        onChange && onChange(isMobile);
      }
    }
  );
  return [mobile, startMedia, stopMedia];
}
function useMobileDevice(onChange) {
  const mobileDevice = ref(false);
  const [media, startMedia, stopMedia] = useMediaQuery(
    "(pointer: coarse)",
    () => {
      const isMobileDevice = media.matches;
      if (mobileDevice.value !== isMobileDevice) {
        mobileDevice.value = isMobileDevice;
        onChange && onChange(isMobileDevice);
      }
    }
  );
  return [mobileDevice, startMedia, stopMedia];
}
function useWindowListener(event, listener) {
  const eventName = typeof event === "string" ? event : "resize";
  const callback = typeof event === "function" ? event : listener;
  if (callback != null) {
    window.addEventListener(eventName, callback);
  }
  onBeforeUnmount(() => {
    if (callback != null) {
      window.removeEventListener(eventName, callback);
    }
  });
}
function useCollapseAnim() {
  let enterHeight = 0;
  const getHeight = (el, isEnter) => {
    if (!isEnter) {
      return Math.max(el.offsetHeight, el.scrollHeight);
    }
    return Math.max(el.offsetHeight, el.scrollHeight, enterHeight);
  };
  const handleBeforeEnter = (el) => {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.maxHeight = "0px";
    el.style.paddingTop = "0px";
    el.style.paddingBottom = "0px";
  };
  const handleEnter = (el) => {
    el.dataset.oldOverflow = el.style.overflow;
    el.style.maxHeight = `${getHeight(el, true)}px`;
    el.style.paddingTop = el.dataset.oldPaddingTop ?? "";
    el.style.paddingBottom = el.dataset.oldPaddingBottom ?? "";
    el.style.overflow = "hidden";
  };
  const handleAfterEnter = (el) => {
    el.style.maxHeight = "";
    el.style.overflow = el.dataset.oldOverflow ?? "";
  };
  const handleBeforeLeave = (el) => {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    enterHeight = getHeight(el);
    el.style.maxHeight = `${enterHeight}px`;
    el.style.overflow = "hidden";
  };
  const handleLeave = (el) => {
    el.style.maxHeight = "0px";
    el.style.paddingTop = "0px";
    el.style.paddingBottom = "0px";
  };
  const handleAfterLeave = (el) => {
    el.style.maxHeight = "";
    el.style.overflow = el.dataset.oldOverflow ?? "";
    el.style.paddingTop = el.dataset.oldPaddingTop ?? "";
    el.style.paddingBottom = el.dataset.oldPaddingBottom ?? "";
  };
  return {
    handleBeforeEnter,
    handleEnter,
    handleAfterEnter,
    handleBeforeLeave,
    handleLeave,
    handleAfterLeave
  };
}
function useMousewheel(cb) {
  const handleMousewheel = (e) => {
    const delta = e.wheelDelta || e.detail;
    cb && cb({ e, direction: delta > 0 ? "up" : "down" });
  };
  const handleFirefoxMousewheel = (e) => {
    const delta = e.wheelDelta || e.detail;
    cb && cb({ e, direction: delta < 0 ? "up" : "down" });
  };
  const bindMousewheel = (el) => {
    el.addEventListener("mousewheel", handleMousewheel, { passive: false });
    el.addEventListener("DOMMouseScroll", handleFirefoxMousewheel);
  };
  const unbindMousewheel = (el) => {
    el.removeEventListener("mousewheel", handleMousewheel);
    el.removeEventListener("DOMMouseScroll", handleFirefoxMousewheel);
  };
  return {
    handleMousewheel,
    handleFirefoxMousewheel,
    bindMousewheel,
    unbindMousewheel
  };
}
function useTouchEvent(option) {
  let startX = null;
  let startY = null;
  let distanceX = null;
  let distanceY = null;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    if (option && option.start) {
      option.start({ e, startX, startY });
    }
  };
  const handleTouchMove = (e) => {
    if (startX != null && startY != null) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      distanceX = currentX - startX;
      distanceY = currentY - startY;
      if (option && option.move) {
        option.move({ e, startX, startY, distanceX, distanceY });
      }
    }
  };
  const handleTouchEnd = (e) => {
    if (option && option.end) {
      option.end({ e, startX, startY, distanceX, distanceY });
    }
    startX = null;
    startY = null;
    distanceX = null;
    distanceY = null;
  };
  const bindTouchEvent = (el) => {
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);
  };
  const unbindTouchEvent = (el) => {
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchmove", handleTouchMove);
    el.removeEventListener("touchend", handleTouchEnd);
  };
  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    bindTouchEvent,
    unbindTouchEvent
  };
}
function useMoveEvent(option) {
  let startX = null;
  let startY = null;
  let distanceX = null;
  let distanceY = null;
  const unbindEvent = () => {
    document.removeEventListener("mousemove", mousemoveFn);
    document.removeEventListener("mouseup", mouseupFn);
    document.removeEventListener("touchmove", touchmoveFn);
    document.removeEventListener("touchend", touchendFn);
  };
  const emitStart = (clientX, clientY, e) => {
    startX = clientX;
    startY = clientY;
    if (option && option.start) {
      option.start({ e, startX, startY });
    }
  };
  const emitMove = (currentX, currentY, e) => {
    if (startX != null && startY != null) {
      distanceX = currentX - startX;
      distanceY = currentY - startY;
      if (option && option.move) {
        option.move({ e, startX, startY, distanceX, distanceY });
      }
    }
  };
  const emitEnd = (e) => {
    unbindEvent();
    if (option && option.end) {
      option.end({ e, startX, startY, distanceX, distanceY });
    }
    startX = null;
    startY = null;
    distanceX = null;
    distanceY = null;
  };
  const mousemoveFn = function(e) {
    emitMove(e.clientX, e.clientY, e);
  };
  const touchmoveFn = function(e) {
    emitMove(e.touches[0].clientX, e.touches[0].clientY, e);
  };
  const mouseupFn = (e) => {
    emitEnd(e);
  };
  const touchendFn = (e) => {
    emitEnd(e);
  };
  const handleMousedown = (e) => {
    if (e.button !== 0) {
      return;
    }
    emitStart(e.clientX, e.clientY, e);
    document.addEventListener("mousemove", mousemoveFn);
    document.addEventListener("mouseup", mouseupFn);
  };
  const handleTouchstart = (e) => {
    emitStart(e.touches[0].clientX, e.touches[0].clientY, e);
    document.addEventListener(
      "touchmove",
      touchmoveFn,
      option == null ? void 0 : option.touchmoveOptions
    );
    document.addEventListener("touchend", touchendFn);
  };
  onBeforeUnmount(() => {
    unbindEvent();
  });
  return {
    handleMousedown,
    handleTouchstart
  };
}
function useComponentEvents(events, emit) {
  const emitMethods = {};
  const emitProps = {};
  (Array.isArray(events) ? events : Object.keys(events)).forEach((name) => {
    emitMethods[name] = (...params) => {
      emit(name, ...params);
    };
    emitProps[`on${capitalize(name)}`] = (...params) => {
      emit(name, ...params);
    };
  });
  return {
    emitMethods,
    emitProps
  };
}
function useProOptions(props, name = "options") {
  const optionData = ref([]);
  const optionsProp = computed(() => getValue(props, name));
  const reloadOptions = () => {
    if (optionsProp.value != null) {
      if (typeof optionsProp.value === "function") {
        optionData.value = [];
        optionsProp.value().then((data) => {
          optionData.value = data || [];
        });
        return;
      }
      if (Array.isArray(optionsProp.value)) {
        optionData.value = optionsProp.value;
        return;
      }
    }
    optionData.value = [];
  };
  watch(
    () => optionsProp,
    () => {
      reloadOptions();
    },
    {
      deep: true,
      immediate: true
    }
  );
  return {
    optionData,
    reloadOptions
  };
}
export {
  useCollapseAnim,
  useComponentEvents,
  useFormItemRest,
  useMediaQuery,
  useMobile,
  useMobileDevice,
  useMousewheel,
  useMoveEvent,
  useProOptions,
  useTimer,
  useTouchEvent,
  useWindowListener
};
