"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elementPlus = require("element-plus");
const EleIcon = require("../../ele-icon/index");
const EleText = require("../../ele-text/index");
const EleAlert = require("../../ele-alert/index");
const EleSteps = require("../../ele-steps/index");
const EleProTable = require("../../ele-pro-table/index");
const EleCard = require("../../ele-card/index");
const EleTabs = require("../../ele-tabs/index");
const EleTable = require("../../ele-table/index");
const EleAdminLayout = require("../../ele-admin-layout/index");
const EleTreeSelect = require("../../ele-tree-select/index");
const EleTableSelect = require("../../ele-table-select/index");
const EleCheckCard = require("../../ele-check-card/index");
const EleEditTag = require("../../ele-edit-tag/index");
const EleSelect = require("../../ele-select/index");
const EleCascader = require("../../ele-cascader/index");
const EleRadioGroup = require("../../ele-radio-group/index");
const EleCheckboxGroup = require("../../ele-checkbox-group/index");
const EleSelectTree = require("../../ele-select-tree/index");
const EleTransfer = require("../../ele-transfer/index");
const EleMention = require("../../ele-mention/index");
const EleAutocomplete = require("../../ele-autocomplete/index");
const defaultItemTypeData = [
  {
    type: "label",
    component: EleText,
    isContainer: true,
    sortDisabled: true,
    renderLabelText: true
  },
  {
    type: "divider",
    component: elementPlus.ElDivider,
    isContainer: true,
    sortDisabled: true,
    renderLabelText: true
  },
  {
    type: "button",
    component: elementPlus.ElButton,
    isContainer: true,
    sortDisabled: true,
    renderLabelText: true,
    defaultProps: () => ({
      type: "primary"
    })
  },
  {
    type: "icon",
    component: EleIcon,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "image",
    component: elementPlus.ElImage,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "alert",
    component: EleAlert,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "steps",
    component: EleSteps,
    isContainer: true,
    sortDisabled: true,
    defaultProps: ({ modelValue }) => ({
      active: modelValue ?? 0
    })
  },
  {
    type: "proTable",
    isContainer: true,
    sortDisabled: true,
    component: EleProTable
  },
  {
    type: "card",
    component: EleCard,
    isContainer: true,
    defaultProps: () => ({
      bordered: true
    })
  },
  {
    type: "tabs",
    component: EleTabs,
    isContainer: true,
    defaultProps: ({ item, modelValue }) => {
      var _a, _b;
      return {
        type: "border-card",
        modelValue: modelValue ?? ((_b = (_a = item.children) == null ? void 0 : _a[0]) == null ? void 0 : _b.prop)
      };
    },
    reservedProps: ({ item, isShowFormItem }) => ({
      items: (item.children || []).filter((c) => isShowFormItem(c)).map((c) => {
        var _a, _b, _c, _d, _e;
        return {
          name: ((_a = c.props) == null ? void 0 : _a.name) ?? c.prop,
          label: ((_b = c.props) == null ? void 0 : _b.label) ?? c.label,
          disabled: (_c = c.props) == null ? void 0 : _c.disabled,
          closable: (_d = c.props) == null ? void 0 : _d.closable,
          lazy: (_e = c.props) == null ? void 0 : _e.lazy,
          slot: "itemContent",
          meta: c
        };
      })
    }),
    reservedSlots: ({ renderChildren }) => ({
      itemContent: (slotProps) => {
        var _a;
        return renderChildren((_a = slotProps == null ? void 0 : slotProps.item) == null ? void 0 : _a.meta, false, true);
      },
      default: () => void 0
    })
  },
  {
    type: "tabPane",
    component: "div",
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "table",
    component: EleTable,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "tableRow",
    component: "tr",
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "tableCell",
    component: "td",
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "collapse",
    component: elementPlus.ElCollapse,
    isContainer: true,
    sortDisabled: true,
    defaultProps: ({ item, modelValue }) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        modelValue: modelValue ?? (((_a = item.props) == null ? void 0 : _a.accordion) ? ((_d = (_c = (_b = item.children) == null ? void 0 : _b[0]) == null ? void 0 : _c.props) == null ? void 0 : _d.name) ?? ((_f = (_e = item.children) == null ? void 0 : _e[0]) == null ? void 0 : _f.prop) : [])
      };
    },
    reservedProps: ({ updateModelValue }) => ({
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "collapseItem",
    component: elementPlus.ElCollapseItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "carousel",
    component: elementPlus.ElCarousel,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "carouselItem",
    component: elementPlus.ElCarouselItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "descriptions",
    component: elementPlus.ElDescriptions,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "descriptionsItem",
    component: elementPlus.ElDescriptionsItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "row",
    component: elementPlus.ElRow,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "col",
    component: elementPlus.ElCol,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "adminLayout",
    component: EleAdminLayout,
    isContainer: true
  },
  {
    type: "div",
    component: "div",
    isContainer: true,
    sortDisabled: true,
    renderLabelText: true
  },
  {
    type: "input",
    component: elementPlus.ElInput,
    defaultProps: ({ item }) => ({
      clearable: true,
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    }),
    requiredTrigger: "blur"
  },
  {
    type: "textarea",
    component: elementPlus.ElInput,
    defaultProps: ({ item }) => ({
      rows: 4,
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      type: "textarea",
      modelValue,
      "onUpdate:modelValue": updateModelValue
    }),
    requiredTrigger: "blur"
  },
  {
    type: "select",
    component: EleSelect,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "multipleSelect",
    component: EleSelect,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "radio",
    component: EleRadioGroup,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "radioButton",
    component: EleRadioGroup,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      type: "button",
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "checkbox",
    component: EleCheckboxGroup,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "checkboxButton",
    component: EleCheckboxGroup,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      type: "button",
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "date",
    component: elementPlus.ElDatePicker,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      valueFormat: "YYYY-MM-DD",
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "datetime",
    component: elementPlus.ElDatePicker,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      type: "datetime",
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "daterange",
    component: elementPlus.ElDatePicker,
    defaultProps: () => ({
      class: "ele-fluid",
      valueFormat: "YYYY-MM-DD",
      rangeSeparator: "-",
      startPlaceholder: "开始日期",
      endPlaceholder: "结束日期",
      unlinkPanels: true,
      type: "daterange"
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "datetimerange",
    component: elementPlus.ElDatePicker,
    defaultProps: () => ({
      class: "ele-fluid",
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      rangeSeparator: "-",
      startPlaceholder: "开始日期",
      endPlaceholder: "结束日期",
      unlinkPanels: true
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      type: "datetimerange",
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "time",
    component: elementPlus.ElTimePicker,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      valueFormat: "HH:mm:ss",
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "timerange",
    component: elementPlus.ElTimePicker,
    defaultProps: () => ({
      class: "ele-fluid",
      valueFormat: "HH:mm:ss",
      rangeSeparator: "-",
      startPlaceholder: "开始日期",
      endPlaceholder: "结束日期"
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      isRange: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "timeSelect",
    component: elementPlus.ElTimeSelect,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "switch",
    component: elementPlus.ElSwitch,
    defaultProps: () => ({
      activeValue: 1,
      inactiveValue: 0
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "inputNumber",
    component: elementPlus.ElInputNumber,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      controlsPosition: "right",
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "autocomplete",
    component: EleAutocomplete,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "cascader",
    component: EleCascader,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "multipleCascader",
    component: EleCascader,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "rate",
    component: elementPlus.ElRate,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "slider",
    component: elementPlus.ElSlider,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "sliderRange",
    component: elementPlus.ElSlider,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      range: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "mention",
    component: EleMention,
    defaultProps: ({ item }) => ({
      clearable: true,
      placeholder: `请输入${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "colorPicker",
    component: elementPlus.ElColorPicker,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "transfer",
    component: EleTransfer,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "treeSelect",
    component: EleSelectTree,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "treeMultipleSelect",
    component: EleSelectTree,
    defaultProps: ({ item }) => ({
      class: "ele-fluid",
      clearable: true,
      showCheckbox: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "virtualTreeSelect",
    component: EleTreeSelect,
    defaultProps: ({ item }) => ({
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "virtualTreeMultipleSelect",
    component: EleTreeSelect,
    defaultProps: ({ item }) => ({
      clearable: true,
      maxTagCount: 1,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "tableSelect",
    component: EleTableSelect,
    defaultProps: ({ item }) => ({
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "tableMultipleSelect",
    component: EleTableSelect,
    defaultProps: ({ item }) => ({
      clearable: true,
      placeholder: `请选择${item.label ?? ""}`
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "checkCard",
    component: EleCheckCard,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "multipleCheckCard",
    component: EleCheckCard,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      multiple: true,
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "editTag",
    component: EleEditTag,
    defaultProps: () => ({
      type: "info",
      style: { marginTop: "4px" },
      itemStyle: { margin: "0 4px 4px 0" },
      buttonStyle: { marginBottom: "4px" },
      inputTagStyle: { marginBottom: "4px" }
    }),
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "text",
    component: EleText,
    reservedSlots: ({ modelValue }) => ({
      default: () => modelValue
    })
  }
];
exports.defaultItemTypeData = defaultItemTypeData;
