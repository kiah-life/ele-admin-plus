"use strict";
const vue = require("vue");
const buildCore = require("./build-core");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "component-name",
  props: {
    itemType: {},
    componentData: {}
  },
  setup(__props) {
    const props = __props;
    const typeName = vue.computed(() => {
      var _a;
      const type = props.itemType;
      return ((_a = buildCore.getComponentItemByType(type, props.componentData)) == null ? void 0 : _a.name) ?? type;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", null, vue.toDisplayString(typeName.value), 1);
    };
  }
});
module.exports = _sfc_main;
