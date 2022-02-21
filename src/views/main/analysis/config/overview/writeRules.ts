export const writeRules = {
  组件的文件: '统一小写, 多个单词使用-分割',
  组件的目录结构:
    '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出',
  组件导包顺序:
    '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数',
  组件的名称: '统一大写开头，驼峰命名',
  组件属性顺序: 'name, components, props, emits, setup ...',
  template标签: '小写加 - ( 例如：<case-panel/> )',
  template标签属性顺序: 'v-if , v-for , ref, class, style, ... ,事件',
  组件的props: '小写开头，驼峰命名，必须编写类型默认值',
  组件的样式:
    '	作用域：scoped, lang = scss / less ; 类名：统一小写, 多个单词使用-分割'
}
