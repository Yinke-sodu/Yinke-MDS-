/**
 * 颜色规范数据，来源：Figma GEAK NAS DS_Mobile · 颜色规范表节点 841:2912
 */

export interface ColorRow {
  /** 样式名称 */
  name: string;
  /** HEX 值 */
  hex: string;
  /** RGB 值，如 "51, 121, 255" */
  rgb: string;
  /** 不透明度，如 "100%" */
  opacity: string;
  /** 用于色块预览（处理 rgba 情况） */
  swatchColor: string;
}

export interface ColorGroup {
  /** 分组编号 */
  index: string;
  /** 分组标题 */
  title: string;
  /** 数量标签 */
  countLabel: string;
  /** 概览色块列表（用于概览卡片色谱条） */
  overviewSwatches: string[];
  /** 颜色行 */
  rows: ColorRow[];
}

export const colorOverview = {
  title: '颜色规范表',
  description:
    '统一查看色彩层级、标准色值与不透明度；中性色采用 Design Spec — Variables 的变量定义。',
};

export const colorGroups: ColorGroup[] = [
  {
    index: '01',
    title: '主色 · Primary',
    countLabel: '9 个样式',
    overviewSwatches: [
      '#3379FF', '#4786FF', '#70A1FF', '#85AFFF', '#99BCFF',
      '#ADC9FF', '#C2D7FF', '#D6E4FF', '#EBF2FF',
    ],
    rows: [
      { name: 'Primary/Blue', hex: '#3379FF', rgb: '51, 121, 255', opacity: '100%', swatchColor: '#3379FF' },
      { name: 'Primary/Blue 90', hex: '#4786FF', rgb: '71, 134, 255', opacity: '100%', swatchColor: '#4786FF' },
      { name: 'Primary/Blue 70', hex: '#70A1FF', rgb: '112, 161, 255', opacity: '100%', swatchColor: '#70A1FF' },
      { name: 'Primary/Blue 60', hex: '#85AFFF', rgb: '133, 175, 255', opacity: '100%', swatchColor: '#85AFFF' },
      { name: 'Primary/Blue 50', hex: '#99BCFF', rgb: '153, 188, 255', opacity: '100%', swatchColor: '#99BCFF' },
      { name: 'Primary/Blue 40', hex: '#ADC9FF', rgb: '173, 201, 255', opacity: '100%', swatchColor: '#ADC9FF' },
      { name: 'Primary/Blue 30', hex: '#C2D7FF', rgb: '194, 215, 255', opacity: '100%', swatchColor: '#C2D7FF' },
      { name: 'Primary/Blue 20', hex: '#D6E4FF', rgb: '214, 228, 255', opacity: '100%', swatchColor: '#D6E4FF' },
      { name: 'Primary/Blue 10', hex: '#EBF2FF', rgb: '235, 242, 255', opacity: '100%', swatchColor: '#EBF2FF' },
    ],
  },
  {
    index: '02',
    title: '功能色 · Functional',
    countLabel: '3 个样式',
    overviewSwatches: ['#34BEA1', '#F56C6C', '#FAAD14'],
    rows: [
      { name: 'Functional/Success', hex: '#34BEA1', rgb: '52, 190, 161', opacity: '100%', swatchColor: '#34BEA1' },
      { name: 'Functional/Error', hex: '#F56C6C', rgb: '245, 108, 108', opacity: '100%', swatchColor: '#F56C6C' },
      { name: 'Functional/Warning', hex: '#FAAD14', rgb: '250, 173, 20', opacity: '100%', swatchColor: '#FAAD14' },
    ],
  },
  {
    index: '03',
    title: '中性色 · Neutral',
    countLabel: '10 个变量',
    overviewSwatches: [
      '#FFFFFF', '#F4F4F7', '#E6E6EA', '#D9D9DD', '#CFCFD5',
      '#A4A3AA', '#5D5C61', '#181819', '#000000', '#000000',
    ],
    rows: [
      { name: '背景/主背景（11', hex: '#FFFFFF', rgb: '255, 255, 255', opacity: '100%', swatchColor: '#FFFFFF' },
      { name: '背景/左侧导航（17', hex: '#F4F4F7', rgb: '244, 244, 247', opacity: '100%', swatchColor: '#F4F4F7' },
      { name: '背景/Card背景（21', hex: '#E6E6EB', rgb: '230, 230, 235', opacity: '100%', swatchColor: '#E6E6EB' },
      { name: '背景/Hover背景（26', hex: '#D9D9DD', rgb: '217, 217, 221', opacity: '100%', swatchColor: '#D9D9DD' },
      { name: '文字/Text-Disabled 禁用（45', hex: '#CFCFD5', rgb: '207, 207, 213', opacity: '100%', swatchColor: '#CFCFD5' },
      { name: '文字/Text-Tertiary 备注（64', hex: '#A4A3AA', rgb: '164, 163, 170', opacity: '100%', swatchColor: '#A4A3AA' },
      { name: '文字/Text-Secondary 正文（83', hex: '#5D5C61', rgb: '93, 92, 97', opacity: '100%', swatchColor: '#5D5C61' },
      { name: '文字/Text-Primary 标题（97', hex: '#181819', rgb: '24, 24, 25', opacity: '100%', swatchColor: '#181819' },
      { name: '遮罩/Overlay', hex: '#000000', rgb: '0, 0, 0', opacity: '60%', swatchColor: 'rgba(0,0,0,0.6)' },
      { name: '遮罩/Overlay2', hex: '#000000', rgb: '0, 0, 0', opacity: '30%', swatchColor: 'rgba(0,0,0,0.3)' },
    ],
  },
];

export const colorFooter = {
  title: '规范说明',
  lines: [
    '主色与功能色色块保留原颜色样式；中性色色块关联 Design Spec — Variables 的对应变量（GEAK NAS）。',
    'HEX 与 RGB 按 sRGB 8 位数值展示；RGB 顺序为 R、G、B。Overlay 为 60%，Overlay2 为 30%，其余为 100%。',
    'Blue 90、Blue 70 等为原样式名称，并非不透明度。分组与色阶仅展示现有样式，不补造缺失档位。',
  ],
};

/** 旧版本兼容：供 Hero 等区块引用 */

/** Hero 区块色板预览 */
export const brandSwatches: { token: string; name: string; hex: string }[] = [
  { token: '--color-primary', name: 'Primary', hex: '#3379FF' },
  { token: '--color-success-base', name: 'Success', hex: '#34BEA1' },
  { token: '--color-warning-base', name: 'Warning', hex: '#FAAD14' },
  { token: '--color-danger-base', name: 'Error', hex: '#F56C6C' },
  { token: '--color-app-text-primary', name: 'Text', hex: '#181819' },
  { token: '--color-app-text-secondary', name: 'Muted', hex: '#5D5C61' },
];
export interface ColorVariableValue {
  value: string;
  swatch: string;
}

export interface ColorVariable {
  name: string;
  type: string;
  mediaLib: ColorVariableValue;
  geakNas: ColorVariableValue;
}

function color(value: string, swatch = value): ColorVariableValue {
  return { value, swatch };
}

export const colorVariables: ColorVariable[] = [
  { name: '主色', type: 'Color', mediaLib: color('#FCDCAB'), geakNas: color('#3379FF') },
  { name: '背景/主背景（11', type: 'Color', mediaLib: color('#17181C'), geakNas: color('#FFFFFF') },
  { name: '背景/左侧导航（17', type: 'Color', mediaLib: color('#22252B'), geakNas: color('#F4F4F7') },
  { name: '背景/Card背景（21', type: 'Color', mediaLib: color('#2B2E35'), geakNas: color('#E6E6EB') },
  { name: '背景/Hover背景（26', type: 'Color', mediaLib: color('#353943'), geakNas: color('#D9D9DD') },
  { name: '文字/Text-Disabled 禁用（45', type: 'Color', mediaLib: color('#666B74'), geakNas: color('#CFCFD5') },
  { name: '状态/Success', type: 'Color', mediaLib: color('#35C26B'), geakNas: color('#35C26B') },
  { name: '状态/Warning', type: 'Color', mediaLib: color('#F5B84E'), geakNas: color('#F5B84E') },
  { name: '状态/Error', type: 'Color', mediaLib: color('#F35D5D'), geakNas: color('#F35D5D') },
  { name: '状态/Info', type: 'Color', mediaLib: color('#4B9CFF'), geakNas: color('#4B9CFF') },
  { name: '文字/Text-Tertiary 备注（64', type: 'Color', mediaLib: color('#9096A2'), geakNas: color('#A4A3AA') },
  { name: '文字/Text-Secondary 正文（83', type: 'Color', mediaLib: color('#C7CBD3'), geakNas: color('#5D5C61') },
  { name: '文字/Text-Primary 标题（97', type: 'Color', mediaLib: color('#F5F6F8'), geakNas: color('#181819') },
  { name: '遮罩/Overlay', type: 'Color', mediaLib: color('#000000 (60%)', 'rgba(0,0,0,0.6)'), geakNas: color('#000000 (60%)', 'rgba(0,0,0,0.6)') },
  { name: '遮罩/Overlay2', type: 'Color', mediaLib: color('#000000 (30%)', 'rgba(0,0,0,0.3)'), geakNas: color('#000000 (30%)', 'rgba(0,0,0,0.3)') },
];
