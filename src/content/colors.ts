/**
 * 颜色变量配置。
 * 数据对应设计稿「颜色变量 Color Variables」表格，
 * 同时保留 Media Lib 与 GEAK NAS 两套模式的取值。
 */

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
  {
    name: '主色',
    type: 'Color',
    mediaLib: color('#FCDCAB'),
    geakNas: color('#3379FF'),
  },
  {
    name: '背景/主背景（11',
    type: 'Color',
    mediaLib: color('#17181C'),
    geakNas: color('#FFFFFF'),
  },
  {
    name: '背景/左侧导航（17',
    type: 'Color',
    mediaLib: color('#22252B'),
    geakNas: color('#F4F4F7'),
  },
  {
    name: '背景/Card背景（21',
    type: 'Color',
    mediaLib: color('#2B2E35'),
    geakNas: color('#E6E6EB'),
  },
  {
    name: '背景/Hover背景（26',
    type: 'Color',
    mediaLib: color('#353943'),
    geakNas: color('#D9D9DD'),
  },
  {
    name: '文字/Text-Disabled 禁用（45',
    type: 'Color',
    mediaLib: color('#666B74'),
    geakNas: color('#CFCFD5'),
  },
  {
    name: '状态/Success',
    type: 'Color',
    mediaLib: color('#35C26B'),
    geakNas: color('#35C26B'),
  },
  {
    name: '状态/Warning',
    type: 'Color',
    mediaLib: color('#F5B84E'),
    geakNas: color('#F5B84E'),
  },
  {
    name: '状态/Error',
    type: 'Color',
    mediaLib: color('#F35D5D'),
    geakNas: color('#F35D5D'),
  },
  {
    name: '状态/Info',
    type: 'Color',
    mediaLib: color('#4B9CFF'),
    geakNas: color('#4B9CFF'),
  },
  {
    name: '文字/Text-Tertiary 备注（64',
    type: 'Color',
    mediaLib: color('#9096A2'),
    geakNas: color('#A4A3AA'),
  },
  {
    name: '文字/Text-Secondary 正文（83',
    type: 'Color',
    mediaLib: color('#C7CBD3'),
    geakNas: color('#5D5C61'),
  },
  {
    name: '文字/Text-Primary 标题（97',
    type: 'Color',
    mediaLib: color('#F5F6F8'),
    geakNas: color('#181819'),
  },
  {
    name: '遮罩/Overlay',
    type: 'Color',
    mediaLib: color('#000000 (60%)', 'rgba(0, 0, 0, 0.6)'),
    geakNas: color('#000000 (60%)', 'rgba(0, 0, 0, 0.6)'),
  },
  {
    name: '遮罩/Overlay2',
    type: 'Color',
    mediaLib: color('#000000 (30%)', 'rgba(0, 0, 0, 0.3)'),
    geakNas: color('#000000 (30%)', 'rgba(0, 0, 0, 0.3)'),
  },
];

export interface BrandSwatch {
  name: string;
  token: string;
}

export const brandSwatches: BrandSwatch[] = [
  { name: 'Primary', token: '--color-primary' },
  { name: 'Primary Hover', token: '--color-primary-hover' },
  { name: 'Primary Soft', token: '--color-primary-soft' },
  { name: 'On Primary', token: '--color-on-primary' },
];
