"use strict";
const vue = require("vue");
const index = vue.defineComponent({
  name: "EleApp",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
module.exports = index;
