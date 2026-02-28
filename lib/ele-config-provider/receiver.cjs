"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const props = require("./props");
const defaultLocale = require("../lang/zh_CN");
function useReceiver() {
  return vue.inject(props.CONFIG_KEY, {});
}
function useGlobalProps(name) {
  const globalConfig = useReceiver();
  return vue.computed(() => globalConfig[name] ?? {});
}
function useLocale(name, props2) {
  const globalConfig = useReceiver();
  const lang = vue.computed(() => {
    const temp = globalConfig.locale ?? defaultLocale;
    if (name) {
      return Object.assign({}, temp[name] ?? {}, props2 == null ? void 0 : props2.locale);
    }
    return temp;
  });
  return { lang, globalConfig };
}
exports.useGlobalProps = useGlobalProps;
exports.useLocale = useLocale;
exports.useReceiver = useReceiver;
