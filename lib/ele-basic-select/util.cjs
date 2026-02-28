"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const elementPlus = require("element-plus");
const error = require("element-plus/es/utils/error");
function isEmptyValue(value, multiple) {
  const isNull = value == null || value === "";
  return isNull || multiple && !value.length;
}
function valueIsChanged(value1, value2, multiple) {
  const isNull1 = isEmptyValue(value1);
  const isNull2 = isEmptyValue(value2);
  if (isNull1 && isNull2) {
    return false;
  }
  if (!multiple) {
    return isNull1 !== isNull2 || value1 !== value2;
  }
  const isEmpty1 = isNull1 || !value1.length;
  const isEmpty2 = isNull2 || !value2.length;
  if (isEmpty1 && isEmpty2) {
    return false;
  }
  if (isEmpty1 !== isEmpty2) {
    return true;
  }
  if (value1.length !== value2.length) {
    return true;
  }
  return value1.some((v) => !value2.includes(v));
}
function useFormValidate() {
  const formItem = vue.inject(elementPlus.formItemContextKey, null);
  const validateChange = () => {
    if (formItem != null) {
      formItem.validate("change").catch((e) => error.debugWarn(e));
    }
  };
  return { validateChange };
}
exports.isEmptyValue = isEmptyValue;
exports.useFormValidate = useFormValidate;
exports.valueIsChanged = valueIsChanged;
