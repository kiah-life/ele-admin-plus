import { inject, computed } from "vue";
import { CONFIG_KEY } from "./props";
import defaultLocale from "../lang/zh_CN";
function useReceiver() {
  return inject(CONFIG_KEY, {});
}
function useGlobalProps(name) {
  const globalConfig = useReceiver();
  return computed(() => globalConfig[name] ?? {});
}
function useLocale(name, props) {
  const globalConfig = useReceiver();
  const lang = computed(() => {
    const temp = globalConfig.locale ?? defaultLocale;
    if (name) {
      return Object.assign({}, temp[name] ?? {}, props == null ? void 0 : props.locale);
    }
    return temp;
  });
  return { lang, globalConfig };
}
export {
  useGlobalProps,
  useLocale,
  useReceiver
};
