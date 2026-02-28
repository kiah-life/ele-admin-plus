function toTree(option) {
  const data = option.data;
  const idField = option.idField || "id";
  const parentIdField = option.parentIdField || "parentId";
  const childrenField = option.childrenField || "children";
  const parentIdIsNull = option.parentId == null;
  const parentId = parentIdIsNull ? [] : option.parentId;
  const parentIdIsArray = Array.isArray(parentId);
  const addParentIds = option.addParentIds;
  const parentIdsField = option.parentIdsField || "parentIds";
  const parentIds = option.parentIds ?? [];
  if (data == null) {
    return [];
  }
  if (parentIdIsNull) {
    data.forEach((d) => {
      if (!data.some((t) => d[parentIdField] == t[idField]) && !parentId.includes(d[parentIdField])) {
        parentId.push(d[parentIdField]);
      }
    });
  }
  const result = [];
  data.forEach((d) => {
    if (d[idField] == d[parentIdField]) {
      const error = {
        [idField]: d[idField],
        [parentIdField]: d[parentIdField],
        data: d
      };
      console.error("data error:", error);
      throw new Error("data error");
    }
    if (parentIdIsArray ? parentId.includes(d[parentIdField]) : d[parentIdField] == parentId) {
      const t = { ...d };
      const children = toTree({
        data,
        idField,
        parentIdField,
        childrenField,
        parentId: d[idField],
        addParentIds,
        parentIdsField,
        parentIds: [...parentIds, d[idField]]
      });
      if (children.length > 0) {
        t[childrenField] = children;
      }
      if (addParentIds) {
        t[parentIdsField] = parentIds;
      }
      result.push(t);
    }
  });
  return result;
}
function eachTree(data, callback, childrenField = "children", parent) {
  var _a;
  if (!data) {
    return;
  }
  for (let i = 0; i < data.length; i++) {
    const flag = callback ? callback(data[i], i, parent) : void 0;
    if (flag === false) {
      return false;
    }
    if ((_a = data[i][childrenField]) == null ? void 0 : _a.length) {
      if (eachTree(data[i][childrenField], callback, childrenField, data[i]) === false) {
        return false;
      }
    }
  }
}
function mapTree(data, formatter, childrenField = "children", resultChildrenField = "children", parent) {
  const result = [];
  if (data && data.length) {
    data.forEach((d, i) => {
      const item = formatter(d, i, parent);
      if (item) {
        if (d[childrenField] != null) {
          item[resultChildrenField] = mapTree(
            d[childrenField],
            formatter,
            childrenField,
            resultChildrenField,
            item
          );
        }
        result.push(item);
      }
    });
  }
  return result;
}
function findTree(data, predicate, childrenField) {
  let temp;
  eachTree(
    data,
    (d, i) => {
      if (predicate(d, i)) {
        temp = d;
        return false;
      }
    },
    childrenField
  );
  return temp;
}
function random(m, n) {
  return Math.floor(Math.random() * (m - n) + n);
}
function uuid(length = 32, radix) {
  const str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * (radix || str.length)));
  }
  return result;
}
function formatNumber(num) {
  return String(num ?? "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
}
function assignObject(target, source, excludes) {
  Object.keys(target).forEach((key) => {
    var _a;
    if (!((_a = excludes == null ? void 0 : excludes.includes) == null ? void 0 : _a.call(excludes, key))) {
      target[key] = source[key];
    }
  });
  return target;
}
function isExternalLink(url) {
  return !!(url && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")));
}
function queryChild(parentEl, className, attr) {
  return Array.from((parentEl == null ? void 0 : parentEl.children) ?? []).find((el) => {
    if (className && !el.classList.contains(className)) {
      return false;
    }
    if (attr != null && attr[0] != null) {
      if (el.getAttribute(attr[0]) != attr[1]) {
        return false;
      }
    }
    return true;
  });
}
function getCurrentStyle(el) {
  return el["currentStyle"] || window.getComputedStyle(el, null) || {};
}
function contentIsEllipsis(el, direction) {
  if (!el || !el.childNodes.length) {
    return false;
  }
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  const { width, height } = range.getBoundingClientRect();
  const floorW = Math.floor(width);
  const rangeWidth = width - floorW < 8e-3 ? floorW : width;
  const floorH = Math.floor(height);
  const rangeHeight = height - floorH < 8e-3 ? floorH : height;
  const style = getCurrentStyle(el);
  const top = Number.parseInt(style.paddingTop) || 0;
  const left = Number.parseInt(style.paddingLeft) || 0;
  const right = Number.parseInt(style.paddingRight) || 0;
  const bottom = Number.parseInt(style.paddingBottom) || 0;
  const horizontalPadding = left + right;
  const verticalPadding = top + bottom;
  if (direction === "horizontal") {
    return rangeWidth + horizontalPadding > el.offsetWidth || el.scrollWidth > el.offsetWidth;
  }
  if (direction === "vertical") {
    return rangeHeight + verticalPadding > el.offsetHeight || el.scrollHeight > el.offsetHeight;
  }
  return rangeWidth + horizontalPadding > el.offsetWidth || rangeHeight + verticalPadding > el.offsetHeight || el.scrollWidth > el.offsetWidth;
}
function checkFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}
function exitFullscreen() {
  const func = document.exitFullscreen || document.exitFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
  func && func.call(document);
}
function requestFullscreen(el) {
  if (el == null) {
    el = document.documentElement;
  }
  const func = el.requestFullscreen || el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
  if (!func) {
    throw new Error("您的浏览器不支持全屏模式");
  }
  func.call(el);
}
function bd09ToGcj02(point) {
  const x_pi = 3.141592653589793 * 3e3 / 180;
  const x = point.lng - 65e-4;
  const y = point.lat - 6e-3;
  const z = Math.sqrt(x * x + y * y) - 2e-5 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) - 3e-6 * Math.cos(x * x_pi);
  return {
    lng: z * Math.cos(theta),
    lat: z * Math.sin(theta)
  };
}
function gcj02ToBd09(point) {
  const x_pi = 3.141592653589793 * 3e3 / 180;
  const x = point.lng;
  const y = point.lat;
  const z = Math.sqrt(x * x + y * y) + 2e-5 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) + 3e-6 * Math.cos(x * x_pi);
  return {
    lng: z * Math.cos(theta) + 65e-4,
    lat: z * Math.sin(theta) + 6e-3
  };
}
async function copyText(text) {
  var _a;
  if (typeof ((_a = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a.writeText) === "function") {
    await navigator.clipboard.writeText(text);
    return;
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.style.position = "fixed";
  el.style.top = "-200px";
  el.style.left = "-200px";
  el.style.width = "100px";
  el.style.height = "100px";
  document.body.appendChild(el);
  el.focus();
  el.select();
  if (!document.execCommand("copy")) {
    el.remove();
    return Promise.reject(new Error("浏览器不支持复制"));
  }
  el.remove();
}
function getValue(data, path, defaultValue) {
  if (data == null) {
    return defaultValue;
  }
  const pathType = typeof path;
  if (pathType === "function") {
    return path(data);
  }
  const fields = (pathType === "string" ? path.match(/[^\[\].]+/g) : path) ?? [];
  let result = data;
  for (const key of fields) {
    result = result[key.trim()];
  }
  return typeof result === "undefined" ? defaultValue : result;
}
function debounce(func, wait) {
  let timer = void 0;
  const debounced = function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = void 0;
    }, wait);
  };
  return debounced;
}
function throttle(func, wait, trailing) {
  let timer = void 0;
  const debounced = function(...args) {
    if (!timer) {
      if (!trailing) {
        func.apply(this, args);
      }
      timer = setTimeout(() => {
        if (trailing) {
          func.apply(this, args);
        }
        timer = void 0;
      }, wait);
    }
  };
  return debounced;
}
function omit(obj, fields) {
  const result = Object.assign({}, obj);
  if (obj) {
    for (const key of fields) {
      delete result[key];
    }
  }
  return result;
}
function pick(obj, fields) {
  const result = {};
  if (obj) {
    for (const key of fields) {
      result[key] = obj[key];
    }
  }
  return result;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export {
  assignObject,
  bd09ToGcj02,
  capitalize,
  checkFullscreen,
  contentIsEllipsis,
  copyText,
  debounce,
  eachTree,
  exitFullscreen,
  findTree,
  formatNumber,
  gcj02ToBd09,
  getCurrentStyle,
  getValue,
  isExternalLink,
  mapTree,
  omit,
  pick,
  queryChild,
  random,
  requestFullscreen,
  throttle,
  toTree,
  uuid
};
