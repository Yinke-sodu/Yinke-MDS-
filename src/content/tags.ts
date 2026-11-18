/** 标签与标识 — Figma 870:8639 */

export interface TagRow {
  example: string; // 原样示例 HTML
  name: string; // 说明名称
  source: string; // 来源
  size: string; // 实际尺寸
  appearance: string; // 外观/已知状态
  usage: string; // 用途说明
}

/** 轻底标签（带同色细描边）的颜色配置 */
export interface SoftTagColor {
  label: string;
  bg: string;
  text: string;
}

export const tagOverview = {
  title: '控件说明 · 标签与标识',
  description: '保留原文、颜色与形态，分类对照尺寸、外观及建议用途。',
};

export const promoTags: TagRow[] = [
  {
    example: 'promo-red',
    name: '橙红优惠标签',
    source: '713:1004',
    size: '78 × 22',
    appearance: '橙红渐变底、白字；左下直角。\n文案：Save 20%',
    usage: '在优惠信息旁突出节省比例。',
  },
  {
    example: 'promo-yellow',
    name: '浅黄优惠标签',
    source: '713:1006',
    size: '82 × 22',
    appearance: '浅黄底、棕字；左下直角。\n文案：Save 20%',
    usage: '同类优惠信息的另一外观选择。',
  },
];

export const softTagColors: SoftTagColor[] = [
  { label: '黄', bg: '#F5B84E', text: '#F5B84E' },
  { label: '红', bg: '#F35D5D', text: '#F5B84E' },
  { label: '绿', bg: '#34C26A', text: '#F5B84E' },
  { label: '蓝', bg: '#3379FF', text: '#F5B84E' },
  { label: '灰', bg: '#A4A3AA', text: '#5D5C61' },
];

export const softTagRows: TagRow[] = [
  {
    example: 'soft-yellow',
    name: '浅底文字标签 · 黄',
    source: '713:989 · 组 189',
    size: '48 × 16',
    appearance: '浅黄底、黄字与细描边；\n文案：标签文案。',
    usage: '简短属性说明；黄色业务语义未定义。',
  },
  {
    example: 'soft-red',
    name: '浅底文字标签 · 红',
    source: '713:990 · 组 195',
    size: '48 × 16',
    appearance: '浅红底、红字与细描边；\n文案：标签文案。',
    usage: '简短属性说明；不等同错误或告警。',
  },
  {
    example: 'soft-green',
    name: '浅底文字标签 · 绿',
    source: '713:991 · 组 196',
    size: '48 × 16',
    appearance: '浅绿底、绿字与细描边；\n文案：标签文案。',
    usage: '简短属性说明；不等同成功状态。',
  },
  {
    example: 'soft-blue',
    name: '浅底文字标签 · 蓝',
    source: '713:992 · Variant4',
    size: '48 × 16',
    appearance: '浅蓝底、蓝字与细描边；\n文案：标签文案。',
    usage: '简短属性说明；不等同选中状态。',
  },
  {
    example: 'soft-gray',
    name: '浅底文字标签 · 灰',
    source: '713:993 · Variant5',
    size: '48 × 16',
    appearance: '浅灰底、灰字与细描边；\n文案：标签文案。',
    usage: '简短属性说明；不等同禁用状态。',
  },
];

export const solidTagRow: TagRow = {
  example: 'solid-green',
  name: '实底文字标签 · 绿',
  source: '713:1028 · 独立标签',
  size: '48 × 16',
  appearance: '绿底、白字，2 px 圆角；\n文案：标签文案。',
  usage: '需实底时使用；不凭绿色推定业务状态。',
};

export const iconTagRow: TagRow = {
  example: 'icon-refund',
  name: '橙色"返"标识',
  source: '199:1558 · icon_返现',
  size: '16 × 16',
  appearance: '橙色圆角方底，白色"返"；\n未展示其他交互状态。',
  usage: '搭配返现说明；具体规则由业务文案补充。',
};
