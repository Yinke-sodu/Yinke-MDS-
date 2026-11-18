/**
 * 列表组件设计规范 — Figma 878:9958
 * 5 章节 · 9 实例
 */

export const listOverview = {
  title: 'List 列表｜设计规范',
  description:
    '尺寸单位 px，本次所选 9 个样本实测；按信息层级划分紧凑信息、标准单行与双行开关。',
};

/** 章节 01 — 组件定义 / 适用场景 */
export const sceneItems = [
  '●  紧凑信息展示：PIN 码、隐藏值与图标。',
  '●  标准单行入口：标题、状态、前置标识与尾部箭头。',
  '●  双行开关：标题、辅助说明与开关并列。',
];

export const heightSpecs = [
  { label: '紧凑信息行', value: '40 px', source: '1 项 · PIN Code Display' },
  { label: '标准单行', value: '50 px', source: '7 项 · Account List Item' },
  { label: '双行开关', value: '70 px', source: '1 项 · GEAK Link Toggle' },
];

export interface ListInstance {
  /** 章节标识 */
  section: 'compact' | 'single' | 'toggle';
  /** 编号（如 "01"） */
  index: string;
  /** 名称 */
  name: string;
  /** 尺寸 */
  sizeLabel: string;
  /** 外观描述（用于右侧说明区） */
  appearance: string;
  /** 用途说明 */
  usage: string;
  /** 组件内部实例 */
  variant: CompactVariant | SingleVariant | ToggleVariant;
}

export type CompactVariant = {
  type: 'pin';
  title: string;
  hiddenText: string;
};

export type SingleVariant = {
  type: 'single';
  title: string;
  titleColor: 'dark' | 'light';
  status?: { text: string; color: 'blue' | 'gray' };
  hasArrow: boolean;
  hasLeadingDot?: boolean;
};

export type ToggleVariant = {
  type: 'toggle';
  title: string;
  subtitle: string;
};

/** 章节 02 — 紧凑信息行 */
export const compactInstances: ListInstance[] = [
  {
    section: 'compact',
    index: '01',
    name: 'PIN 信息展示',
    sizeLabel: '319 × 40 px',
    appearance: 'PIN 码 / 隐藏值 / 图标',
    usage: '紧凑信息展示',
    variant: {
      type: 'pin',
      title: 'PIN 码',
      hiddenText: '****',
    },
  },
];

/** 章节 03 — 标准单行（7 项） */
export const singleInstances: ListInstance[] = [
  {
    section: 'single',
    index: '01',
    name: '深色标题 + 箭头',
    sizeLabel: '343 × 50 px',
    appearance: '深色标题 / 尾部箭头',
    usage: '单行入口信息',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'dark',
      hasArrow: true,
    },
  },
  {
    section: 'single',
    index: '02',
    name: '浅灰标题 + 箭头',
    sizeLabel: '343 × 50 px',
    appearance: '浅灰标题 / 尾部箭头',
    usage: '弱化层级；交互待确认',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'light',
      hasArrow: true,
    },
  },
  {
    section: 'single',
    index: '03',
    name: '深色标题 + 蓝色状态',
    sizeLabel: '343 × 50 px',
    appearance: '深色标题 / 蓝色 Not Bound',
    usage: '标题与状态并列',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'dark',
      status: { text: 'Not Bound', color: 'blue' },
      hasArrow: false,
    },
  },
  {
    section: 'single',
    index: '04',
    name: '浅灰标题 + 灰色状态',
    sizeLabel: '343 × 50 px',
    appearance: '浅灰标题 / 灰色 Not Bound',
    usage: '弱化信息；逻辑待确认',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'light',
      status: { text: 'Not Bound', color: 'gray' },
      hasArrow: false,
    },
  },
  {
    section: 'single',
    index: '05',
    name: '深色标题 + 状态 + 箭头',
    sizeLabel: '343 × 50 px',
    appearance: '深色标题 / 蓝色状态 / 箭头',
    usage: '状态与入口信息并列',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'dark',
      status: { text: 'Not Bound', color: 'blue' },
      hasArrow: true,
    },
  },
  {
    section: 'single',
    index: '06',
    name: '浅灰标题 + 状态 + 箭头',
    sizeLabel: '343 × 50 px',
    appearance: '浅灰标题 / 灰色状态 / 箭头',
    usage: '弱化层级；交互待确认',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'light',
      status: { text: 'Not Bound', color: 'gray' },
      hasArrow: true,
    },
  },
  {
    section: 'single',
    index: '07',
    name: '前置圆形 + 状态 + 箭头',
    sizeLabel: '343 × 50 px',
    appearance: '圆形 / 深色标题 / 蓝色状态 / 箭头',
    usage: '需前置标识的信息行',
    variant: {
      type: 'single',
      title: 'GEAK Account 1231231',
      titleColor: 'dark',
      status: { text: 'Not Bound', color: 'blue' },
      hasArrow: true,
      hasLeadingDot: true,
    },
  },
];

/** 章节 04 — 双行开关 */
export const toggleInstances: ListInstance[] = [
  {
    section: 'toggle',
    index: '01',
    name: 'GEAK Link 双行开关',
    sizeLabel: '343 × 70 px',
    appearance: 'GEAK Link / 服务开启 / 开关',
    usage: '标题、辅助说明与开关并列',
    variant: {
      type: 'toggle',
      title: 'GEAK Link',
      subtitle: '服务开启',
    },
  },
];

/** 章节 05 — 布局规则 */
export const layoutRules = [
  {
    title: '1. 按信息层级选择高度',
    desc: '按信息层级选择高度；单行不因尾部图标改变高度。',
  },
  {
    title: '2. 多行与交互逻辑',
    desc: '超长多行另设自适应规格；热区与禁用逻辑待确认。',
  },
  {
    title: '3. 视觉与交互限定',
    desc: '视觉样式不代表交互实现或无障碍合规；不凭浅灰样式判定禁用，不凭颜色推断交互实现。',
  },
];
