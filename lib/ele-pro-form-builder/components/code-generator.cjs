"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("../../utils/core");
const util = require("../../ele-pro-form/util");
const itemTypeData = require("../../ele-pro-form/components/item-type-data");
const renderUtil = require("../../ele-pro-form/components/render-util");
const buildCore = require("./build-core");
const codeJsVar = require("./code-js-var");
const codeUtil = require("./code-util");
const codeTemplate = require("./code-template");
const uploadTypes = ["imageUpload", "fileUpload"];
function generateFooterCode(config, showFooterExpand) {
  if (!config.footer) {
    return "";
  }
  const style = { flex: 1, display: "flex", alignItems: "center" };
  const code = codeUtil.obj2Str({ ...style, ...config.footerStyle || {} }, true);
  return codeUtil.templateEngine(codeTemplate.footerTemplate, {
    footerStyleCode: code,
    footerPropsCode: codeUtil.generatePropsCode(config.footerProps),
    showFooterExpand
  });
}
function generateFormItemProps(item, indentSize, indentChar) {
  const { vIf, label, prop, itemProps } = item;
  const props = { label, prop, ...itemProps || {}, vIf };
  const code = codeUtil.generatePropsCode(props, null, indentSize);
  return codeUtil.addIndentChar(code, indentChar);
}
function generateColProps(item, grid, indentSize, indentChar) {
  const gridCol = grid === true ? { span: 12 } : grid || {};
  const { vIf, colProps } = item || {};
  const props = { ...gridCol, ...colProps || {}, vIf };
  const code = codeUtil.generatePropsCode(props, null, indentSize);
  return codeUtil.addIndentChar(code, indentChar);
}
function generateComponentProps(item, indentSize, indentChar, omitKeys) {
  const props = core.omit(item.props || {}, [
    ...omitKeys || [],
    ...item.type && ["div", "tableCell"].includes(item.type) ? ["is", "innerHTML"] : []
  ]);
  const code = codeUtil.generatePropsCode(props, null, indentSize);
  return codeUtil.addIndentChar(code, indentChar);
}
function getItemComponentTag(item, componentData) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (item.type === "tableCell") {
    if (((_a = item.props) == null ? void 0 : _a.is) === "th") {
      return "th";
    }
  } else if (item.type === "autocomplete") {
    const fetchSuggestions = ((_b = item.props) == null ? void 0 : _b.fetchSuggestions) ?? [];
    if (Array.isArray(fetchSuggestions)) {
      return "el-autocomplete";
    }
  } else if (item.type === "mention") {
    const options = ((_c = item.props) == null ? void 0 : _c.options) ?? [];
    if (Array.isArray(options)) {
      return "el-mention";
    }
  } else if (item.type === "transfer") {
    const data = ((_d = item.props) == null ? void 0 : _d.data) ?? [];
    if (Array.isArray(data)) {
      return "el-transfer";
    }
  } else if (item.type === "treeSelect" || item.type === "treeMultipleSelect") {
    const data = ((_e = item.props) == null ? void 0 : _e.data) ?? [];
    if (Array.isArray(data)) {
      return "el-tree-select";
    }
  } else if (item.type === "cascader" || item.type === "multipleCascader") {
    const options = ((_f = item.props) == null ? void 0 : _f.options) ?? [];
    if (Array.isArray(options)) {
      return "el-cascader";
    }
  }
  const name = (_g = buildCore.getComponentItemByType(item.type, componentData)) == null ? void 0 : _g.componentName;
  return codeUtil.kebabCase(name || "div");
}
function generateItemComponentCode(item, indentSize, indentChar, content, componentData) {
  const component = getItemComponentTag(item, componentData);
  const propsCode = codeUtil.generatePropsCode(item.props, null, indentSize);
  const code = codeUtil.addIndentChar(propsCode, indentChar);
  if (content == null) {
    return `<${component}${code}/>`;
  }
  if (content === "") {
    return `<${component}${code}>
${indentChar}</${component}>`;
  }
  return `<${component}${code}>
${indentChar}  ${content}
${indentChar}</${component}>`;
}
function getDivTag(item) {
  var _a;
  const divTag = (_a = item.props) == null ? void 0 : _a.is;
  const jsVar = codeJsVar.transformJsVar(divTag);
  if (jsVar != null) {
    return jsVar.name;
  }
  return divTag || "div";
}
function generateContentCode(config, showFooterExpand, componentData, itemTypeData2) {
  let contentCode = codeUtil.templateEngine(codeTemplate.contentTemplate, {
    items: config.items,
    grid: config.grid,
    rowProps: config.rowProps,
    indentSize: 4,
    contentExtra: generateFooterCode(config, showFooterExpand),
    contentExtraColProps: config.footerColProps || { span: 24 },
    generateFormItemProps,
    generateColProps,
    generateComponentProps,
    generateComponentCode: (item, indentSize, indentChar, content) => generateItemComponentCode(
      item,
      indentSize,
      indentChar,
      content,
      componentData
    ),
    getDivTag,
    getComponentTag: (item) => getItemComponentTag(item, componentData),
    isContainerType: (item) => util.isContainerType(item, itemTypeData2),
    addIndentChar: codeUtil.addIndentChar,
    generatePropsCode: codeUtil.generatePropsCode
  });
  [
    "img",
    "input",
    "hr",
    "br",
    "col",
    "area",
    "embed",
    "source",
    "track",
    "wbr"
  ].forEach((tagName) => {
    contentCode = contentCode.replace(
      new RegExp(`>\\s*</${tagName}>`, "g"),
      "/>"
    );
  });
  return contentCode;
}
function getUploadValidatorCode(item) {
  const refName = renderUtil.getComponentRefName(item);
  return `(_rule, value, callback) => {
  if (value && ${refName}.value && !${refName}.value.isDone()) {
    return callback(new Error('${item.label}还未上传完毕'));
  }
  callback();
}`;
}
function generateRuleCode(items, componentData, itemTypeData$1) {
  const rules = {};
  core.eachTree(items, (item) => {
    if (util.isContainerType(item, itemTypeData$1)) {
      return;
    }
    const itemRules = [];
    const typeData = item.type ? [...itemTypeData$1 || [], ...itemTypeData.defaultItemTypeData].find(
      (d) => d.type === item.type
    ) : void 0;
    if (item.required) {
      const config = buildCore.getComponentItemByType(item.type, componentData);
      const componentPropsData = {
        ...(config == null ? void 0 : config.defaultProps) || {},
        ...item.props || {},
        ...(config == null ? void 0 : config.reservedProps) || {}
      };
      itemRules.push({
        required: true,
        message: renderUtil.getRuleMessage(
          item.label,
          item.requiredMessage,
          componentPropsData.placeholder
        ),
        trigger: (typeData == null ? void 0 : typeData.requiredTrigger) ?? "change"
      });
    }
    if (item.type && uploadTypes.includes(item.type)) {
      itemRules.push({
        trigger: (typeData == null ? void 0 : typeData.requiredTrigger) ?? "change",
        validator: new codeJsVar.JsVar({ name: getUploadValidatorCode(item) })
      });
    }
    if (itemRules.length && item.prop) {
      rules[item.prop] = itemRules;
    }
  });
  return codeUtil.obj2Str(rules, false, 2);
}
function getComponentProps(item, componentData, itemTypeData2) {
  const data = buildCore.getComponentItemByType(item.type, componentData);
  const props = {
    ...(data == null ? void 0 : data.defaultProps) || {},
    ...item.props || {},
    ...(data == null ? void 0 : data.reservedProps) || {}
  };
  const refName = renderUtil.getComponentRefName(item);
  props.ref = new codeJsVar.JsVar({
    name: refName,
    code: `/** ${item.label || item.prop}引用 */
const ${refName} = ref(null);`
  });
  if (item.type && util.isContainerType(item, itemTypeData2)) {
    props.vIf = item.vIf;
    if (item.type === "steps") {
      if (props.active == null) {
        props.active = new codeJsVar.JsVar({
          name: `form.${item.prop} ?? 0`
        });
      }
    } else if (item.type === "tabs") {
      props.vModel = `form.${item.prop}`;
      props.modelValue = void 0;
      props.items = (item.children || []).map((c) => {
        var _a, _b, _c, _d, _e;
        return {
          name: ((_a = c.props) == null ? void 0 : _a.name) ?? c.prop,
          label: ((_b = c.props) == null ? void 0 : _b.label) ?? c.label,
          disabled: (_c = c.props) == null ? void 0 : _c.disabled,
          closable: (_d = c.props) == null ? void 0 : _d.closable,
          lazy: (_e = c.props) == null ? void 0 : _e.lazy
        };
      });
    } else if (["collapseItem", "carouselItem"].includes(item.type)) {
      if (props.name == null && item.prop != null) {
        props.name = item.prop;
      }
    } else if (item.type === "collapse") {
      if (props.modelValue == null) {
        props.vModel = `form.${item.prop}`;
        props.modelValue = void 0;
      }
    }
  } else if (item.type && item.type !== "text") {
    props.vModel = `form.${item.prop}`;
  }
  const keyName = String(item.key ?? item.prop);
  const labelName = String(item.label || item.prop);
  if (item.type === "cascader" || item.type === "multipleCascader") {
    props.options = new codeJsVar.JsVar({
      name: `${keyName}CascaderOptions`,
      code: `/** ${labelName}级联数据 */
const ${keyName}CascaderOptions = ref(${codeUtil.obj2Str(props.options || [], false, 0)});`
    });
    const temp = props.props || {};
    if (item.type === "multipleCascader") {
      temp.multiple = true;
    }
    props.props = new codeJsVar.JsVar({
      name: `${keyName}CascaderProps`,
      code: `/** ${labelName}级联配置 */
const ${keyName}CascaderProps = reactive(${codeUtil.obj2Str(temp, false, 0)});`
    });
  } else if (item.type === "virtualTreeSelect" || item.type === "virtualTreeMultipleSelect") {
    props.treeProps = new codeJsVar.JsVar({
      name: `${keyName}TreeProps`,
      code: `/** ${labelName}树配置 */
const ${keyName}TreeProps = reactive(${codeUtil.obj2Str(props.treeProps || {}, false, 0)});`
    });
  } else if (item.type === "tableSelect" || item.type === "tableMultipleSelect") {
    props.tableProps = new codeJsVar.JsVar({
      name: `${keyName}TableProps`,
      code: `/** ${labelName}表格配置 */
const ${keyName}TableProps = reactive(${codeUtil.obj2Str(props.tableProps || {}, false, 0)});`
    });
  } else if (item.type === "checkCard" || item.type === "multipleCheckCard" || item.type === "steps") {
    props.items = new codeJsVar.JsVar({
      name: `${keyName}Items`,
      code: `/** ${labelName}数据 */
const ${keyName}Items = ref(${codeUtil.obj2Str(props.items || [], false, 0)});`
    });
  } else if (item.type === "virtualTreeSelect" || item.type === "virtualTreeMultipleSelect") {
    props.treeProps = new codeJsVar.JsVar({
      name: `${keyName}TreeProps`,
      code: `/** ${labelName}树配置 */
const ${keyName}TreeProps = ref(${codeUtil.obj2Str(props.treeProps || {}, false, 0)});`
    });
  } else if (item.type === "transfer" || item.type === "treeSelect" || item.type === "treeMultipleSelect") {
    props.data = new codeJsVar.JsVar({
      name: `${keyName}Data`,
      code: `/** ${labelName}数据 */
const ${keyName}Data = ref(${codeUtil.obj2Str(props.data || [], false, 0)});`
    });
  } else if (item.type === "select" || item.type === "multipleSelect" || item.type === "radio" || item.type === "radioButton" || item.type === "checkbox" || item.type === "checkboxButton") {
    const options = props.options || [];
    if (!Array.isArray(data)) {
      props.options = new codeJsVar.JsVar({
        name: `${keyName}Options`,
        code: `/** ${labelName}选项数据 */
const ${keyName}Options = ref(${codeUtil.obj2Str(options, false, 0)});`
      });
    }
  } else if (item.type === "mention") {
    props.options = new codeJsVar.JsVar({
      name: `${keyName}Options`,
      code: `/** ${labelName}选项数据 */
const ${keyName}Options = ref(${codeUtil.obj2Str(props.options || [], false, 0)});`
    });
  } else if (item.type === "autocomplete") {
    props.fetchSuggestions = new codeJsVar.JsVar({
      name: `${keyName}FetchSuggestions`,
      code: `/** ${labelName}建议数据 */
const ${keyName}FetchSuggestions = ref(${codeUtil.obj2Str(props.fetchSuggestions || [], false, 0)});`
    });
  }
  return props;
}
function getImportAndVarCode(config) {
  const imports = /* @__PURE__ */ new Set([]);
  const codes = /* @__PURE__ */ new Set([]);
  core.eachTree(config.items, (item) => {
    if (item.type === "imageUpload") {
      imports.add(
        `import ImageUpload from '@/components/ImageUpload/index';`
      );
    } else if (item.type === "fileUpload") {
      imports.add(
        `import FileUpload from '@/components/FileUpload/index';`
      );
    } else if (item.type === "regions") {
      imports.add(
        `import RegionsSelect from '@/components/RegionsSelect/index';`
      );
    } else if (item.type === "editor") {
      imports.add(
        `import TinymceEditor from '@/components/TinymceEditor/index';`
      );
    }
  });
  if (config.showSearchExpand) {
    imports.add(`import { ArrowUp } from '@/components/icons';`);
    imports.add(`import { ArrowDown } from '@/components/icons';`);
  }
  const proImports = /* @__PURE__ */ new Set([]);
  const proCodes = /* @__PURE__ */ new Set([]);
  JSON.stringify(config, (_jk, jv) => {
    const jsVar = codeJsVar.transformJsVar(jv);
    if (jsVar != null) {
      if (jsVar.imports) {
        jsVar.imports.forEach((code) => {
          imports.add(code);
        });
      }
      if (jsVar.code) {
        codes.add(jsVar.code);
      }
      if (jsVar.proImports) {
        jsVar.proImports.forEach((code) => {
          proImports.add(code);
        });
      }
      if (jsVar.proCode) {
        proCodes.add(jsVar.proCode);
      }
    }
    return jv;
  });
  return {
    imports: [
      `import { ref, reactive, computed, nextTick } from 'vue';`,
      `import { useFormData } from '@/utils/use-form-data';`,
      `import httpRequest from '@/utils/request';`,
      ...imports
    ],
    codes: [...codes],
    proImports: [
      `import { reactive } from 'vue';`,
      `import { useFormData } from '@/utils/use-form-data';`,
      `import { getFormInitValue } from '@/components/ProForm/util';`,
      `import ProForm from '@/components/ProForm/index';`,
      ...proImports
    ],
    proCodes: [...proCodes]
  };
}
function getElNormalizeItems(formItems, componentData, itemTypeData2) {
  const items = core.mapTree(formItems, (item) => {
    return {
      ...item,
      props: getComponentProps(item, componentData, itemTypeData2),
      initValue: void 0
    };
  });
  return JSON.parse(JSON.stringify(items));
}
function generateElFormCode(data, componentData, itemTypeData2) {
  const config = JSON.parse(
    JSON.stringify({ ...data || {}, items: (data == null ? void 0 : data.items) || [] })
  );
  const formInitValue = util.getFormInitValue(config.items, itemTypeData2);
  config.items = getElNormalizeItems(config.items, componentData, itemTypeData2);
  const elFormProps = core.pick(config, [
    "labelPosition",
    "requireAsteriskPosition",
    "labelWidth",
    "labelSuffix",
    "inline",
    "inlineMessage",
    "statusIcon",
    "showMessage",
    "validateOnRuleChange",
    "hideRequiredAsterisk",
    "scrollToError",
    "scrollIntoViewOptions",
    "size",
    "disabled",
    "style",
    "class"
  ]);
  const sfe = config.showSearchExpand;
  const formContentCode = generateContentCode(
    config,
    sfe,
    componentData,
    itemTypeData2
  );
  const { imports, codes } = getImportAndVarCode(config);
  const refNamesCode = config.items.map(
    (item) => `${renderUtil.getComponentRefName(item)}: ${renderUtil.getComponentRefName(item)}.value`
  ).join(",\n    ");
  codes.push(`/** 获取组件引用 */
const getProFormRefs = () => {
  return {
    ${refNamesCode}
  };
};`);
  codes.push(`/** 表单项数量 */
const items = { length: ${config.items.length} };`);
  const templateData = {
    modelCode: codeUtil.obj2Str(formInitValue, false, 2),
    formContentCode,
    formPropsCode: codeUtil.generatePropsCode(elFormProps, false, 4, false),
    formRuleCode: generateRuleCode(config.items, componentData, itemTypeData2),
    formImportCode: imports.join("\n  "),
    formVarCode: codeUtil.addIndentChar(codes.join("\n\n"), "  "),
    showFooterExpand: sfe
  };
  return codeUtil.templateEngine(codeTemplate.formTemplate, templateData);
}
function generateProFormCode(data) {
  const config = JSON.parse(
    JSON.stringify({ ...data || {}, items: (data == null ? void 0 : data.items) || [] })
  );
  const sfe = config.showSearchExpand;
  if (sfe) {
    config.submitText = "搜索";
  }
  const { proImports, proCodes } = getImportAndVarCode(config);
  const templateData = {
    proFormConfigCode: codeUtil.obj2Str(config, false, 2, () => void 0),
    proFormImportCode: proImports.join("\n  "),
    proFormVarCode: codeUtil.addIndentChar(proCodes.join("\n\n"), "  "),
    showFooterExpand: sfe
  };
  return codeUtil.templateEngine(codeTemplate.proTemplate, templateData);
}
exports.generateColProps = generateColProps;
exports.generateComponentProps = generateComponentProps;
exports.generateContentCode = generateContentCode;
exports.generateElFormCode = generateElFormCode;
exports.generateFooterCode = generateFooterCode;
exports.generateFormItemProps = generateFormItemProps;
exports.generateItemComponentCode = generateItemComponentCode;
exports.generateProFormCode = generateProFormCode;
exports.generateRuleCode = generateRuleCode;
exports.getComponentProps = getComponentProps;
exports.getDivTag = getDivTag;
exports.getElNormalizeItems = getElNormalizeItems;
exports.getImportAndVarCode = getImportAndVarCode;
exports.getItemComponentTag = getItemComponentTag;
exports.getUploadValidatorCode = getUploadValidatorCode;
