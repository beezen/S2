export { Event as GEvent } from '@antv/g-canvas'; // Canvas 渲染器
export { getTheme } from './theme'; // 获取主题配置
export { Node } from './facet/layout/node';
export { Hierarchy } from './facet/layout/hierarchy';
export { buildTableHierarchy } from './facet/layout/build-table-hierarchy';
// facet 为子表数据分析模块

export * from './common'; // 公共模块，包括 常量、调试、国际化、图标、类型、缓存
export * from './utils'; // 工具模块
export * from './cell'; // 各种单元格基类
export * from './sheet-type'; // 各种表格基类
export * from './data-set'; // 数据组装模块
export * from './interaction'; // 交互式功能模块
export * from './ui/tooltip'; // 提示模块
export * from './facet/header'; // 表头模块
