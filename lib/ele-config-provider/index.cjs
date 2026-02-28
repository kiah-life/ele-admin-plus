"use strict";
const vue = require("vue");
const props = require("./props");
const index = vue.defineComponent({
  name: "EleConfigProvider",
  props: props.configProviderProps,
  setup(props$1, { slots }) {
    const config = vue.reactive({ ...props$1 });
    vue.provide(props.CONFIG_KEY, config);
    vue.watch(
      () => props$1.locale,
      () => {
        config.locale = props$1.locale;
      }
    );
    vue.watch(
      () => props$1.table,
      () => {
        config.table = props$1.table;
      },
      { deep: true }
    );
    vue.watch(
      () => props$1.message,
      () => {
        config.message = props$1.message;
      },
      { deep: true }
    );
    vue.watch(
      () => props$1.messageBox,
      () => {
        config.messageBox = props$1.messageBox;
      },
      { deep: true }
    );
    vue.watch(
      () => props$1.license,
      () => {
        config.license = props$1.license;
      }
    );
    vue.watch(
      () => props$1.mapKey,
      () => {
        config.mapKey = props$1.mapKey;
      }
    );
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
module.exports = index;
