/**
 * 间距规范数据，来源：Figma GEAK NAS DS_Mobile · 间距规范节点 848:2591
 */

/** 旧版本兼容：供 Hero 等区块引用的间距刻度 */
export interface SpaceToken {
  token: string;
  value: string;
}

export const spaceScale: SpaceToken[] = [
  { token: '--space-1', value: '4px' },
  { token: '--space-2', value: '8px' },
  { token: '--space-3', value: '12px' },
  { token: '--space-4', value: '16px' },
  { token: '--space-6', value: '24px' },
  { token: '--space-8', value: '32px' },
  { token: '--space-12', value: '48px' },
];

export interface SpaceRow {
  /** 间距数值（px） */
  px: number;
  /** 基础倍数（以 4px 为 1 ×） */
  multiplier: string;
  /** 使用场景说明 */
  usage: string;
}

export const spacingOverview = {
  eyebrow: '03 / Spacing',
  title: '间距规范',
  description: '以 4px 为基础单位，统一查看间距层级与使用场景。',
  metrics: [
    { label: '基础单位', value: '4 px' },
    { label: '间距总数', value: '6 档常用间距' },
    { label: '间距范围', value: '4 – 32 px' },
  ],
};

export const spacingRows: SpaceRow[] = [
  { px: 4, multiplier: '1 ×', usage: '基础单位，用于细微分隔与间距微调' },
  { px: 8, multiplier: '2 ×', usage: '小间距，用于紧凑控件、图标与文本组合' },
  { px: 12, multiplier: '3 ×', usage: '中间距，用于列表、表单与卡片内部布局' },
  { px: 16, multiplier: '4 ×', usage: '标准间距，用于常规内容块与操作区域' },
  { px: 24, multiplier: '6 ×', usage: '大间距，用于重要区块与关键信息的留白' },
  { px: 32, multiplier: '8 ×', usage: '区块间距，用于不同模块与功能区域的分隔' },
];

export const spacingFooter = {
  title: '规范说明',
  body: '以 4px 为基础单位，优先使用上述六档间距；同类场景保持一致，组内紧凑、组间疏朗。',
};
