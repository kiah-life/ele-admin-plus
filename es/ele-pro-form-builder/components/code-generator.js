import { omit, eachTree, mapTree, pick } from "../../utils/core";
import { isContainerType, getFormInitValue } from "../../ele-pro-form/util";
import { defaultItemTypeData } from "../../ele-pro-form/components/item-type-data";
import { getComponentRefName, getRuleMessage } from "../../ele-pro-form/components/render-util";
import { getComponentItemByType } from "./build-core";
import { transformJsVar, JsVar } from "./code-js-var";
import { obj2Str, templateEngine, generatePropsCode, addIndentChar, kebabCase } from "./code-util";
import { footerTemplate, contentTemplate, formTemplate, proTemplate } from "./code-template";
const uploadTypes = ["imageUpload", "fileUpload"];
function generateFooterCode(config, showFooterExpand) {
  if (!config.footer) {
    return "";
  }
  const style = { flex: 1, display: "flex", alignItems: "center" };
  const code = obj2Str({ ...style, ...config.footerStyle || {} }, true);
  return templateEngine(footerTemplate, {
    footerStyleCode: code,
    footerPropsCode: generatePropsCode(config.footerProps),
    showFooterExpand
  });
}
function generateFormItemProps(item, indentSize, indentChar) {
  const { vIf, label, prop, itemProps } = item;
  const props = { label, prop, ...itemProps || {}, vIf };
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
}
function generateColProps(item, grid, indentSize, indentChar) {
  const gridCol = grid === true ? { span: 12 } : grid || {};
  const { vIf, colProps } = item || {};
  const props = { ...gridCol, ...colProps || {}, vIf };
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
}
function generateComponentProps(item, indentSize, indentChar, omitKeys) {
  const props = omit(item.props || {}, [
    ...omitKeys || [],
    ...item.type && ["div", "tableCell"].includes(item.type) ? ["is", "innerHTML"] : []
  ]);
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
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
  const name = (_g = getComponentItemByType(item.type, componentData)) == null ? void 0 : _g.componentName;
  return kebabCase(name || "div");
}
function generateItemComponentCode(item, indentSize, indentChar, content, componentData) {
  const component = getItemComponentTag(item, componentData);
  const propsCode = generatePropsCode(item.props, null, indentSize);
  const code = addIndentChar(propsCode, indentChar);
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
  const jsVar = transformJsVar(divTag);
  if (jsVar != null) {
    return jsVar.name;
  }
  return divTag || "div";
}
function generateContentCode(config, showFooterExpand, componentData, itemTypeData) {
  let contentCode = templateEngine(contentTemplate, {
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
    isContainerType: (item) => isContainerType(item, itemTypeData),
    addIndentChar,
    generatePropsCode
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
  const refName = getComponentRefName(item);
  return `(_rule, value, callback) => {
  if (value && ${refName}.value && !${refName}.value.isDone()) {
    return callback(new Error('${item.label}还未上传完毕'));
  }
  callback();
}`;
}
function generateRuleCode(items, componentData, itemTypeData) {
  const rules = {};
  eachTree(items, (item) => {
    if (isContainerType(item, itemTypeData)) {
      return;
    }
    const itemRules = [];
    const typeData = item.type ? [...itemTypeData || [], ...defaultItemTypeData].find(
      (d) => d.type === item.type
    ) : void 0;
    if (item.required) {
      const config = getComponentItemByType(item.type, componentData);
      const componentPropsData = {
        ...(config == null ? void 0 : config.defaultProps) || {},
        ...item.props || {},
        ...(config == null ? void 0 : config.reservedProps) || {}
      };
      itemRules.push({
        required: true,
        message: getRuleMessage(
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
        validator: new JsVar({ name: getUploadValidatorCode(item) })
      });
    }
    if (itemRules.length && item.prop) {
      rules[item.prop] = itemRules;
    }
  });
  return obj2Str(rules, false, 2);
}
function getComponentProps(item, componentData, itemTypeData) {
  const data = getComponentItemByType(item.type, componentData);
  const props = {
    ...(data == null ? void 0 : data.defaultProps) || {},
    ...item.props || {},
    ...(data == null ? void 0 : data.reservedProps) || {}
  };
  const refName = getComponentRefName(item);
  props.ref = new JsVar({
    name: refName,
    code: `/** ${item.label || item.prop}引用 */
const ${refName} = ref(null);`
  });
  if (item.type && isContainerType(item, itemTypeData)) {
    props.vIf = item.vIf;
    if (item.type === "steps") {
      if (props.active == null) {
        props.active = new JsVar({
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
    props.options = new JsVar({
      name: `${keyName}CascaderOptions`,
      code: `/** ${labelName}级联数据 */
const ${keyName}CascaderOptions = ref(${obj2Str(props.options || [], false, 0)});`
    });
    const temp = props.props || {};
    if (item.type === "multipleCascader") {
      temp.multiple = true;
    }
    props.props = new JsVar({
      name: `${keyName}CascaderProps`,
      code: `/** ${labelName}级联配置 */
const ${keyName}CascaderProps = reactive(${obj2Str(temp, false, 0)});`
    });
  } else if (item.type === "virtualTreeSelect" || item.type === "virtualTreeMultipleSelect") {
    props.treeProps = new JsVar({
      name: `${keyName}TreeProps`,
      code: `/** ${labelName}树配置 */
const ${keyName}TreeProps = reactive(${obj2Str(props.treeProps || {}, false, 0)});`
    });
  } else if (item.type === "tableSelect" || item.type === "tableMultipleSelect") {
    props.tableProps = new JsVar({
      name: `${keyName}TableProps`,
      code: `/** ${labelName}表格配置 */
const ${keyName}TableProps = reactive(${obj2Str(props.tableProps || {}, false, 0)});`
    });
  } else if (item.type === "checkCard" || item.type === "multipleCheckCard" || item.type === "steps") {
    props.items = new JsVar({
      name: `${keyName}Items`,
      code: `/** ${labelName}数据 */
const ${keyName}Items = ref(${obj2Str(props.items || [], false, 0)});`
    });
  } else if (item.type === "virtualTreeSelect" || item.type === "virtualTreeMultipleSelect") {
    props.treeProps = new JsVar({
      name: `${keyName}TreeProps`,
      code: `/** ${labelName}树配置 */
const ${keyName}TreeProps = ref(${obj2Str(props.treeProps || {}, false, 0)});`
    });
  } else if (item.type === "transfer" || item.type === "treeSelect" || item.type === "treeMultipleSelect") {
    props.data = new JsVar({
      name: `${keyName}Data`,
      code: `/** ${labelName}数据 */
const ${keyName}Data = ref(${obj2Str(props.data || [], false, 0)});`
    });
  } else if (item.type === "select" || item.type === "multipleSelect" || item.type === "radio" || item.type === "radioButton" || item.type === "checkbox" || item.type === "checkboxButton") {
    const options = props.options || [];
    if (!Array.isArray(data)) {
      props.options = new JsVar({
        name: `${keyName}Options`,
        code: `/** ${labelName}选项数据 */
const ${keyName}Options = ref(${obj2Str(options, false, 0)});`
      });
    }
  } else if (item.type === "mention") {
    props.options = new JsVar({
      name: `${keyName}Options`,
      code: `/** ${labelName}选项数据 */
const ${keyName}Options = ref(${obj2Str(props.options || [], false, 0)});`
    });
  } else if (item.type === "autocomplete") {
    props.fetchSuggestions = new JsVar({
      name: `${keyName}FetchSuggestions`,
      code: `/** ${labelName}建议数据 */
const ${keyName}FetchSuggestions = ref(${obj2Str(props.fetchSuggestions || [], false, 0)});`
    });
  }
  return props;
}
function getImportAndVarCode(config) {
  const imports = /* @__PURE__ */ new Set([]);
  const codes = /* @__PURE__ */ new Set([]);
  eachTree(config.items, (item) => {
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
    const jsVar = transformJsVar(jv);
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
function getElNormalizeItems(formItems, componentData, itemTypeData) {
  const items = mapTree(formItems, (item) => {
    return {
      ...item,
      props: getComponentProps(item, componentData, itemTypeData),
      initValue: void 0
    };
  });
  return JSON.parse(JSON.stringify(items));
}
function generateElFormCode(data, componentData, itemTypeData) {
  const config = JSON.parse(
    JSON.stringify({ ...data || {}, items: (data == null ? void 0 : data.items) || [] })
  );
  const formInitValue = getFormInitValue(config.items, itemTypeData);
  config.items = getElNormalizeItems(config.items, componentData, itemTypeData);
  const elFormProps = pick(config, [
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
    itemTypeData
  );
  const { imports, codes } = getImportAndVarCode(config);
  const refNamesCode = config.items.map(
    (item) => `${getComponentRefName(item)}: ${getComponentRefName(item)}.value`
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
    modelCode: obj2Str(formInitValue, false, 2),
    formContentCode,
    formPropsCode: generatePropsCode(elFormProps, false, 4, false),
    formRuleCode: generateRuleCode(config.items, componentData, itemTypeData),
    formImportCode: imports.join("\n  "),
    formVarCode: addIndentChar(codes.join("\n\n"), "  "),
    showFooterExpand: sfe
  };
  return templateEngine(formTemplate, templateData);
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
    proFormConfigCode: obj2Str(config, false, 2, () => void 0),
    proFormImportCode: proImports.join("\n  "),
    proFormVarCode: addIndentChar(proCodes.join("\n\n"), "  "),
    showFooterExpand: sfe
  };
  return templateEngine(proTemplate, templateData);
}
export {
  generateColProps,
  generateComponentProps,
  generateContentCode,
  generateElFormCode,
  generateFooterCode,
  generateFormItemProps,
  generateItemComponentCode,
  generateProFormCode,
  generateRuleCode,
  getComponentProps,
  getDivTag,
  getElNormalizeItems,
  getImportAndVarCode,
  getItemComponentTag,
  getUploadValidatorCode
};
