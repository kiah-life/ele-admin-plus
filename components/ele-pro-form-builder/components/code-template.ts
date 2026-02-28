/**
 * ProForm 代码生成模板
 */
export const proTemplate = `<template>
  <pro-form
    v-bind="config"
    :model="form"<%# if(d.showFooterExpand){ %>
    v-model:search-expand="form.searchExpand"<%# } %>
    @updateValue="setFieldValue"
    @submit="handleSubmit"
    @reset="handleReset"
  />
</template>

<script setup>
  <% d.proFormImportCode %><%# if(d.proFormVarCode){ %>

  <% d.proFormVarCode %><%# } %>

  /** 表单配置 */
  const config = reactive(<% d.proFormConfigCode %>);

  /** 表单数据 */
  const [form, resetFields, _assignFields, setFieldValue] = useFormData(
    getFormInitValue(config.items)
  );

  /** 提交表单 */
  const handleSubmit = (form) => {
    console.log(form);
  };

  /** 重置表单 */
  const handleReset = () => {<%# if(d.showFooterExpand){ %>
    resetFields(void 0, ['searchExpand']);<%# }else{ %>
    resetFields();<%# } %>
  };
</script>
`;

/**
 * ElForm 代码生成模板
 */
export const formTemplate = `<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"<% d.formPropsCode %>
    @submit.prevent=""
  ><% d.formContentCode %>
  </el-form>
</template>

<script setup>
  <% d.formImportCode %>

  /** 表单组件 */
  const formRef = ref(null);

  /** 表单数据 */
  const [form, resetFields, _assignFields] = useFormData(<% d.modelCode %>);

  /** 表单验证规则 */
  const rules = reactive(<% d.formRuleCode %>);

  /** 提交表单 */
  const handleSubmit = () => {
    formRef.value?.validate?.((valid) => {
      if (!valid) {
        return;
      }
      console.log(form);
    });
  };

  /** 重置表单 */
  const handleReset = () => {<%# if(d.showFooterExpand){ %>
    resetFields(void 0, ['searchExpand']);<%# }else{ %>
    resetFields();<%# } %>
    nextTick(() => {
      nextTick(() => {
        formRef.value?.clearValidate?.();
      });
    });
  };

  /** 搜索表单是否展开 */
  const searchExpand = computed(() => form.searchExpand);<%# if(d.formVarCode){ %>

  <% d.formVarCode %><%# } %>
</script>
`;

/**
 * ElForm 内容代码生成模板
 */
export const contentTemplate = `<%# getFormContent(d.items,d.grid,d.rowProps,d.indentSize,d.contentExtra,d.contentExtraColProps); function getFormContent(items,grid,rowProps,indentSize,contentExtra,contentExtraColProps){ var indentChar = Array.from({length:indentSize||0}).fill(' ').join(''); if(!grid){ (items||[]).forEach(function(item){ %>
<% indentChar %><%# getFormItem(item,indentSize); }); if(contentExtra){ %>
<% indentChar %><% d.addIndentChar(contentExtra,indentChar) %><%# } }else if(items&&items.length){ %>
<% indentChar %><el-row<% d.addIndentChar(d.generatePropsCode(rowProps,null,2,true),indentChar) %>><%# items.forEach(function(item){ %>
<% indentChar %>  <el-col<% d.generateColProps(item,grid,4,indentChar) %>>
<% indentChar %>    <%# getFormItem(item,(indentSize||0)+4); %>
<% indentChar %>  </el-col><%# }); if(contentExtra){ %>
<% indentChar %>  <el-col<% d.generateColProps(null,contentExtraColProps,4,indentChar) %>>
<% indentChar %>    <% d.addIndentChar(contentExtra,'    '+indentChar) %>
<% indentChar %>  </el-col><%# } %>
<% indentChar %></el-row><%# } } function getFormItem(item,indentSize){ var indentChar = Array.from({length:indentSize||0}).fill(' ').join(''); if(item.type=='icon'){ %><el-icon<% d.generateComponentProps(item,2,indentChar) %>><%# if(item.props&&item.props.name){ %>
<% indentChar %>  <<% item.props.name %> /><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></el-icon><%# }else if(item.type=='tabs'){ %><ele-tabs<% d.generateComponentProps(item,2,indentChar) %>><%# (item.children||[]).forEach(function(tabItem){ %>
<% indentChar %>  <template #<% tabItem.prop %>><%# getFormContent(tabItem.children,tabItem.grid,tabItem.rowProps,indentSize+4); %>
<% indentChar %>  </template><%# }); %>
<% indentChar %></ele-tabs><%# }else if(item.type=='div'){ var divTagName = d.getDivTag(item); %><<% divTagName %><% d.generateComponentProps(item,2,indentChar) %>><%# const divHTML = (item.props||{}).innerHTML||item.label; if(divHTML){ %>
<% indentChar %>  <% divHTML %><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></<% divTagName %>><%# }else if(d.isContainerType(item)){ %><<% d.getComponentTag(item) %><% d.generateComponentProps(item,2,indentChar) %>><%# if(item.label){ %>
<% indentChar %>  <% item.label %><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></<% d.getComponentTag(item) %>><%# }else{ %><el-form-item<% d.generateFormItemProps(item,2,indentChar) %>>
<% indentChar %>  <%# if((item.type=='select'||item.type=='multipleSelect')&&Array.isArray((item.props||{}).options||[])){ %><el-select<% d.generateComponentProps(item,4,indentChar,['options']) %>><%# ((item.props||{}).options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-option<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-select><%# }else if(item.type=='radio'&&Array.isArray((item.props||{}).options||[])){ %><el-radio-group<% d.generateComponentProps(item,4,indentChar,['options']) %>><%# ((item.props||{}).options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-radio<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-radio-group><%# }else if(item.type=='radioButton'&&Array.isArray((item.props||{}).options||[])){ %><el-radio-group<% d.generateComponentProps(item,4,indentChar,['options']) %>><%# ((item.props||{}).options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-radio-button<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-radio-group><%# }else if(item.type=='checkbox'&&Array.isArray((item.props||{}).options||[])){ %><el-checkbox-group<% d.generateComponentProps(item,4,indentChar,['options']) %>><%# ((item.props||{}).options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-checkbox<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-checkbox-group><%# }else if(item.type=='checkboxButton'&&Array.isArray((item.props||{}).options||[])){ %><el-checkbox-group<% d.generateComponentProps(item,4,indentChar,['options']) %>><%# ((item.props||{}).options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-checkbox-button<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-checkbox-group><%# }else if(item.type=='text'){ %><ele-text<% d.generateComponentProps(item,4,indentChar) %>>
<% indentChar %>    {{ form.<% item.prop %> }}
<% indentChar %>  </ele-text><%# }else{ %><% d.generateComponentCode(item,4,indentChar) %><%# } %>
<% indentChar %></el-form-item><%# } } %>`;

/**
 * ElForm 底栏代码生成模板
 */
export const footerTemplate = `<el-form-item<% d.footerPropsCode %>>
  <div :style="<% d.footerStyleCode %>">
    <el-button type="primary" @click="handleSubmit"><% d.showFooterExpand?'搜索':'提交' %></el-button>
    <el-button @click="handleReset">重置</el-button><%# if(d.showFooterExpand){ %>
    <el-link
      type="primary"
      :underline="false"
      style="margin-left: 12px"
      @click="form.searchExpand = !form.searchExpand"
    >
      <template v-if="form.searchExpand">
        <span>收起</span>
        <el-icon style="vertical-align: -1px">
          <ArrowUp />
        </el-icon>
      </template>
      <template v-else>
        <span>展开</span>
        <el-icon style="vertical-align: -2px">
          <ArrowDown />
        </el-icon>
      </template>
    </el-link><%# } %>
  </div>
</el-form-item>`;
