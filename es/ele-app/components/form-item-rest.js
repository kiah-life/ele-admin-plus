import { defineComponent } from "vue";
import { useFormItemRest } from "../../utils/hook";
const formItemRest = defineComponent({
  name: "FormItemRest",
  setup(_props, { slots }) {
    useFormItemRest();
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
export {
  formItemRest as default
};
