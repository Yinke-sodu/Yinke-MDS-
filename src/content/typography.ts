/**
 * Typography token 配置。
 * 数据来源：GEAK NAS DS_Mobile Figma 文件 → 字体规范表 · Typography 节点 (833:2244)。
 * 原字体家族 PingFang SC，共 10 个文字样式 / 3 个分组，全部字距 0%、无文本装饰。
 */

export interface FontFamilyToken {
  /** 样式显示名 */
  name: string;
  /** CSS 变量 token */
  token: string;
  /** 预览样本文字 */
  sample: string;
  /** 用途说明 */
  description: string;
}

export interface FontWeightToken {
  /** 字重英文名 */
  name: string;
  /** 对应 CSS font-weight 值 */
  value: string;
  /** CSS 变量 token */
  token: string;
}

export interface TypeStyle {
  /** Figma 中的样式名，如 Headline/Headline0 */
  name: string;
  /** 展示用的预览文案 */
  sample: string;
  /** 原字体名 (PingFang SC) */
  fontFamily: string;
  /** 原字重英文名 */
  fontWeight: 'Regular' | 'Medium' | 'Semibold';
  /** 字号，单位 px */
  fontSize: number;
  /** 行高，单位 px */
  lineHeight: number;
  /** 字距百分比，Figma 规范全部 0% */
  letterSpacing: string;
}

export interface TypeGroup {
  /** 分组编号，如 01 */
  index: string;
  /** 分组中文名，如 标题 */
  label: string;
  /** 分组英文名，如 Headline */
  englishLabel: string;
  /** 该分组下的所有样式 */
  styles: TypeStyle[];
}

/** 字体概览指标 — 从 Figma 设计稿的概览卡片提取 */
export const typographyOverview = {
  /** 原字体家族 */
  fontFamily: 'PingFang SC · 苹方',
  /** 样式总数 / 分组数 */
  styleCount: '10 个样式 / 3 个分组',
  /** 原字重范围 */
  weightRange: 'Regular · Medium · Semibold',
  /** 替代字体预览说明 */
  previewNote:
    '预览保留原字号和行高，但不代表苹方的实际字形与字宽；Caption2 为原有 10px 样式，请留意小字号可读性。',
  /** 参数来源说明 */
  sourceNote:
    '参数来源：GEAK NAS DS_Mobile Figma 文件，字体规范表 · Typography 节点。全部字距 0%、段后距 0 px，无文本装饰。',
};

/** 字体家族列表 — 展示项目中使用的字体栈 */
export const fontFamilyTokens: FontFamilyToken[] = [
  {
    name: 'PingFang SC',
    token: '--font-sans',
    sample: '让信息清晰有序 Aa 0123',
    description: '界面主字体，覆盖 iOS 系统原生中文字形。',
  },
  {
    name: 'Noto Sans SC',
    token: '--font-sans-fallback',
    sample: '好的排版，让阅读自然发生。Aa 0123',
    description: '跨平台替代字体，用于非 Apple 设备与开发预览。',
  },
  {
    name: 'Mono',
    token: '--font-mono',
    sample: 'const token = 24px;',
    description: '用于 token 名称与代码片段。',
  },
];

/** 字重列表 — PingFang SC 提供 3 档，Semibold 设计稿中用 Bold 近似 */
export const weightTokens: FontWeightToken[] = [
  { name: 'Regular', value: '400', token: '--font-weight-normal' },
  { name: 'Medium', value: '500', token: '--font-weight-medium' },
  { name: 'Semibold', value: '600', token: '--font-weight-semibold' },
];

/** 完整的 3 分组 10 样式 — 按 Figma 设计稿原样导出 */
export const typeGroups: TypeGroup[] = [
  {
    index: '01',
    label: '标题',
    englishLabel: 'Headline',
    styles: [
      {
        name: 'Headline/Headline0',
        sample: '让信息清晰有序 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Semibold',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: '0%',
      },
      {
        name: 'Headline/Headline1',
        sample: '让信息清晰有序 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Semibold',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: '0%',
      },
      {
        name: 'Headline/Headline2',
        sample: '让信息清晰有序 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Semibold',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: '0%',
      },
      {
        name: 'Headline/Title1',
        sample: '让信息清晰有序 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Medium',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: '0%',
      },
      {
        name: 'Headline/Title2',
        sample: '让信息清晰有序 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Medium',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: '0%',
      },
    ],
  },
  {
    index: '02',
    label: '正文',
    englishLabel: 'Body',
    styles: [
      {
        name: 'Body/Body1',
        sample: '好的排版，让阅读自然发生。Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Regular',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: '0%',
      },
      {
        name: 'Body/Body2',
        sample: '好的排版，让阅读自然发生。Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Regular',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: '0%',
      },
      {
        name: 'Body/Body3',
        sample: '好的排版，让阅读自然发生。Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Regular',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: '0%',
      },
    ],
  },
  {
    index: '03',
    label: '辅助文字',
    englishLabel: 'Caption',
    styles: [
      {
        name: 'Caption/Caption1',
        sample: '辅助信息与说明文字 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Regular',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: '0%',
      },
      {
        name: 'Caption/Caption2',
        sample: '辅助信息与说明文字 Aa 0123',
        fontFamily: 'PingFang SC',
        fontWeight: 'Regular',
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: '0%',
      },
    ],
  },
];
