import { defineComponent, reactive, provide, watch } from "vue";
import { configProviderProps, CONFIG_KEY } from "./props";
const index = defineComponent({
  name: "EleConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const config = reactive({ ...props });
    provide(CONFIG_KEY, config);
    watch(
      () => props.locale,
      () => {
        config.locale = props.locale;
      }
    );
    watch(
      () => props.table,
      () => {
        config.table = props.table;
      },
      { deep: true }
    );
    watch(
      () => props.message,
      () => {
        config.message = props.message;
      },
      { deep: true }
    );
    watch(
      () => props.messageBox,
      () => {
        config.messageBox = props.messageBox;
      },
      { deep: true }
    );
    watch(
      () => props.license,
      () => {
        config.license = props.license;
      }
    );
    watch(
      () => props.mapKey,
      () => {
        config.mapKey = props.mapKey;
      }
    );
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
export {
  index as default
};
