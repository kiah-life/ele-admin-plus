import { ElDivider, ElButton, ElImage, ElCollapse, ElCollapseItem, ElCarousel, ElCarouselItem, ElDescriptions, ElDescriptionsItem, ElRow, ElCol, ElInput, ElDatePicker, ElTimePicker, ElTimeSelect, ElSwitch, ElInputNumber, ElRate, ElSlider, ElColorPicker } from "element-plus";
import EleIcon from "../../ele-icon/index";
import EleText from "../../ele-text/index";
import EleAlert from "../../ele-alert/index";
import EleSteps from "../../ele-steps/index";
import EleProTable from "../../ele-pro-table/index";
import EleCard from "../../ele-card/index";
import EleTabs from "../../ele-tabs/index";
import EleTable from "../../ele-table/index";
import EleAdminLayout from "../../ele-admin-layout/index";
import EleTreeSelect from "../../ele-tree-select/index";
import EleTableSelect from "../../ele-table-select/index";
import EleCheckCard from "../../ele-check-card/index";
import EleEditTag from "../../ele-edit-tag/index";
import EleSelect from "../../ele-select/index";
import EleCascader from "../../ele-cascader/index";
import EleRadioGroup from "../../ele-radio-group/index";
import EleCheckboxGroup from "../../ele-checkbox-group/index";
import EleSelectTree from "../../ele-select-tree/index";
import EleTransfer from "../../ele-transfer/index";
import EleMention from "../../ele-mention/index";
import EleAutocomplete from "../../ele-autocomplete/index";
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
    component: ElDivider,
    isContainer: true,
    sortDisabled: true,
    renderLabelText: true
  },
  {
    type: "button",
    component: ElButton,
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
    component: ElImage,
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
    component: ElCollapse,
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
    component: ElCollapseItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "carousel",
    component: ElCarousel,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "carouselItem",
    component: ElCarouselItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "descriptions",
    component: ElDescriptions,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "descriptionsItem",
    component: ElDescriptionsItem,
    isContainer: true,
    containerSelectable: true
  },
  {
    type: "row",
    component: ElRow,
    isContainer: true,
    sortDisabled: true
  },
  {
    type: "col",
    component: ElCol,
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
    component: ElInput,
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
    component: ElInput,
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
    component: ElDatePicker,
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
    component: ElDatePicker,
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
    component: ElDatePicker,
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
    component: ElDatePicker,
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
    component: ElTimePicker,
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
    component: ElTimePicker,
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
    component: ElTimeSelect,
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
    component: ElSwitch,
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
    component: ElInputNumber,
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
    component: ElRate,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "slider",
    component: ElSlider,
    reservedProps: ({ modelValue, updateModelValue }) => ({
      modelValue,
      "onUpdate:modelValue": updateModelValue
    })
  },
  {
    type: "sliderRange",
    component: ElSlider,
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
    component: ElColorPicker,
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
export {
  defaultItemTypeData
};
