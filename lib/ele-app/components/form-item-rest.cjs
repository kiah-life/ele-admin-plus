"use strict";
const vue = require("vue");
const hook = require("../../utils/hook");
const formItemRest = vue.defineComponent({
  name: "FormItemRest",
  setup(_props, { slots }) {
    hook.useFormItemRest();
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
module.exports = formItemRest;
