/**
 * 字体 token 配置：字体家族、字重与字号阶梯。
 */

export interface FontFamilyToken {
  name: string;
  token: string;
  sample: string;
  description: string;
}

export interface FontWeightToken {
  name: string;
  token: string;
  value: string;
}

export interface TypeScaleToken {
  name: string;
  token: string;
  lineHeightToken: string;
  size: string;
  lineHeight: string;
  sample: string;
}

export const fontFamilyTokens: FontFamilyToken[] = [
  {
    name: 'MiSans',
    token: '--font-sans',
    sample: 'Aa 移动端设计规范 123',
    description: '界面默认字体，覆盖中英文与数字。',
  },
  {
    name: 'Mono',
    token: '--font-mono',
    sample: 'const token = 28px;',
    description: '用于 token 名称与代码片段。',
  },
];

export const weightTokens: FontWeightToken[] = [
  { name: 'Regular', token: '--font-weight-normal', value: '400' },
  { name: 'Medium', token: '--font-weight-medium', value: '500' },
  { name: 'Semibold', token: '--font-weight-semibold', value: '600' },
  { name: 'Bold', token: '--font-weight-bold', value: '700' },
];

export const typeScale: TypeScaleToken[] = [
  {
    name: 'Display',
    token: '--font-size-52',
    lineHeightToken: '--line-height-52',
    size: '52px',
    lineHeight: '58px',
    sample: '移动端设计规范',
  },
  {
    name: 'Title',
    token: '--font-size-40',
    lineHeightToken: '--line-height-40',
    size: '40px',
    lineHeight: '48px',
    sample: '一致性来自约束',
  },
  {
    name: 'Heading 1',
    token: '--font-size-32',
    lineHeightToken: '--line-height-32',
    size: '32px',
    lineHeight: '40px',
    sample: '让界面拥有节奏',
  },
  {
    name: 'Heading 2',
    token: '--font-size-28',
    lineHeightToken: '--line-height-28',
    size: '28px',
    lineHeight: '35px',
    sample: '信息层级清晰',
  },
  {
    name: 'Heading 3',
    token: '--font-size-24',
    lineHeightToken: '--line-height-24',
    size: '24px',
    lineHeight: '32px',
    sample: '组件与 token 对齐',
  },
  {
    name: 'Lead',
    token: '--font-size-20',
    lineHeightToken: '--line-height-20',
    size: '20px',
    lineHeight: '28px',
    sample: '从设计稿到代码',
  },
  {
    name: 'Body Large',
    token: '--font-size-18',
    lineHeightToken: '--line-height-18',
    size: '18px',
    lineHeight: '26px',
    sample: '所有数值只保留一个来源',
  },
  {
    name: 'Body',
    token: '--font-size-15',
    lineHeightToken: '--line-height-15',
    size: '15px',
    lineHeight: '24px',
    sample: '正文使用基准字号，适合长文本阅读。',
  },
  {
    name: 'Caption',
    token: '--font-size-14',
    lineHeightToken: '--line-height-14',
    size: '14px',
    lineHeight: '20px',
    sample: '辅助说明与表单提示文字。',
  },
  {
    name: 'Footnote',
    token: '--font-size-12',
    lineHeightToken: '--line-height-12',
    size: '12px',
    lineHeight: '16px',
    sample: '标签与极小号注释。',
  },
];
