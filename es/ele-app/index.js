import { defineComponent } from "vue";
const index = defineComponent({
  name: "EleApp",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
export {
  index as default
};
