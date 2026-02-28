import { eachTree } from "../utils/core";
import { isEmptyValue } from "../ele-basic-select/util";
function getKeysAndList(data, valueKey, childrenKey) {
  const keys = [];
  const list = [];
  eachTree(
    data,
    (d) => {
      keys.push(d[valueKey]);
      list.push(d);
    },
    childrenKey
  );
  return [keys, list];
}
function getNormalSelectedItems(data, checkedKeys, valueKey, labelKey, childrenKey, cacheData, checkedData) {
  const selected = [];
  if (isEmptyValue(checkedKeys) || !checkedKeys.length) {
    return selected;
  }
  const cacheKeys = cacheData ? cacheData.map((d) => d[valueKey]) : [];
  const ckKeys = checkedData ? checkedData.map((d) => d[valueKey]) : [];
  const [dataKeys, list] = getKeysAndList(data, valueKey, childrenKey);
  checkedKeys.forEach((key) => {
    const index = cacheKeys.indexOf(key);
    let item = cacheData && index !== -1 ? cacheData[index] : void 0;
    if (index === -1 && checkedData) {
      const tIndex = ckKeys.indexOf(key);
      if (tIndex !== -1) {
        item = checkedData[tIndex];
      }
    }
    if (!item && data) {
      const i = dataKeys.indexOf(key);
      if (i !== -1) {
        item = list[i];
      }
    }
    selected.push({ value: key, label: item ? item[labelKey] : String(key) });
  });
  return selected;
}
function getTreeSelectedItems(data, checkedKeys, valueKey, labelKey, childrenKey, showParent, hide) {
  const selected = [];
  if (isEmptyValue(checkedKeys) || !checkedKeys.length) {
    return selected;
  }
  if (data) {
    data.forEach((d) => {
      const value = d[valueKey];
      const children = d[childrenKey];
      const checked = checkedKeys.includes(value);
      if (showParent) {
        if (checked) {
          selected.push({ value, label: d[labelKey], hide });
        }
        getTreeSelectedItems(
          children,
          checkedKeys,
          valueKey,
          labelKey,
          childrenKey,
          showParent,
          checked ? true : hide
        ).forEach((item) => {
          selected.push(item);
        });
      } else {
        const hasChildren = !!(children && children.length);
        if (checked) {
          selected.push({ value, label: d[labelKey], hide: hasChildren });
        }
        if (hasChildren) {
          getTreeSelectedItems(
            children,
            checkedKeys,
            valueKey,
            labelKey,
            childrenKey,
            showParent
          ).forEach((item) => {
            selected.push(item);
          });
        }
      }
    });
  }
  return selected;
}
function checkSelectedItems(selected, checkedKeys, valueKey, labelKey, cacheData) {
  const selectedValues = selected.map((s) => s.value);
  const cacheKeys = cacheData ? cacheData.map((d) => d[valueKey]) : [];
  checkedKeys.forEach((key) => {
    if (!selectedValues.includes(key)) {
      const index = cacheKeys.indexOf(key);
      const item = cacheData && index !== -1 ? cacheData[index] : void 0;
      selected.push({ value: key, label: item ? item[labelKey] : String(key) });
    }
  });
  return selected;
}
function isCheckAll(data, checkedKeys, valueKey, childrenKey, disabledKey) {
  if (!data || !data.length || !checkedKeys || !checkedKeys.length) {
    return false;
  }
  return data.every((d) => {
    if (d[disabledKey] || checkedKeys.includes(d[valueKey])) {
      return true;
    }
    if (d[childrenKey] && d[childrenKey].length) {
      return isCheckAll(
        d[childrenKey],
        checkedKeys,
        valueKey,
        childrenKey,
        disabledKey
      );
    }
    return false;
  });
}
function getModelValue(keys, selected, checkedValueStrategy) {
  if (!checkedValueStrategy) {
    return keys;
  }
  const ids = [];
  selected.forEach((d) => {
    if (!d.hide) {
      ids.push(d.value);
    }
  });
  return ids;
}
export {
  checkSelectedItems,
  getKeysAndList,
  getModelValue,
  getNormalSelectedItems,
  getTreeSelectedItems,
  isCheckAll
};
