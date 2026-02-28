"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const renderUtil = require("../../ele-pro-form/components/render-util");
class JsVar {
  constructor(props) {
    /** 生成代码时显示的变量名称 */
    __publicField(this, "name");
    /** 生成 ElForm 代码时添加的声明代码 */
    __publicField(this, "code");
    /** 生成 ProForm 代码时添加的声明代码 */
    __publicField(this, "proCode");
    /** 生成 ElForm 代码时添加的导入代码 */
    __publicField(this, "imports");
    /** 生成 ProForm 代码时添加的导入代码 */
    __publicField(this, "proImports");
    /** 转 JSON 时标识是 JsVar 对象 */
    __publicField(this, "__isJsVar", true);
    this.name = props.name;
    this.code = props.code;
    this.proCode = props.proCode;
    this.imports = props.imports;
    this.proImports = props.proImports;
  }
}
function removePrefixStr(content, prefix) {
  if (typeof prefix === "string") {
    if (content.startsWith(prefix)) {
      return content.slice(prefix.length);
    }
    return content;
  }
  let result = content;
  prefix.forEach((temp) => {
    result = removePrefixStr(result, temp);
  });
  return result;
}
function transformJsVar(jv) {
  if (jv != null) {
    if (typeof jv === "string") {
      if (jv.startsWith(renderUtil.codeStringPrefix)) {
        const codeName = removePrefixStr(jv, [renderUtil.codeStringPrefix]);
        return new JsVar({ name: codeName });
      }
    }
    if (typeof jv === "object") {
      if (jv instanceof JsVar) {
        return jv;
      }
      if (jv.__isJsVar === true && jv.name != null) {
        return new JsVar(jv);
      }
    }
  }
}
exports.JsVar = JsVar;
exports.removePrefixStr = removePrefixStr;
exports.transformJsVar = transformJsVar;
