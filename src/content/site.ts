/**
 * 站点文案与结构配置。
 * 页面中出现的所有静态文案都从这里读取，组件内不写死内容。
 */

export interface NavItem {
  label: string;
  href: string;
  enLabel?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface PaletteSectionCopy extends SectionCopy {
  copyActionLabel: string;
  copiedLabel: string;
  columns: {
    name: string;
    type: string;
    mediaLib: string;
    geakNas: string;
  };
}

export interface StatusMeta {
  label: string;
  value: string;
}

export interface HeroCopy extends SectionCopy {
  badge: string;
  primaryAction: string;
  status: {
    label: string;
    value: string;
    tone: 'success';
    meta: StatusMeta[];
  };
}

export interface HeroPreviewCopy {
  label: string;
  status: string;
  colorLabel: string;
  typeLabel: string;
  spaceLabel: string;
  typeSample: string;
  typeToken: string;
  typeWeightToken: string;
  footerNote: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  version: string;
  description: string;
  navGroups: NavGroup[];
  hero: HeroCopy;
  sections: {
    palette: PaletteSectionCopy;
    typography: SectionCopy;
    spacing: SectionCopy;
    shape: SectionCopy;
  };
  preview: HeroPreviewCopy;
  footer: {
    note: string;
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  name: 'Yinke UI system',
  tagline: '移动端设计规范',
  version: 'v1.0',
  description:
    '面向移动端产品的设计规范，统一颜色、字体、间距与形状，让设计稿与代码共享同一套 token。',
  navGroups: [
    {
      title: '全局样式',
      items: [
        { label: '色彩', href: '/palette', enLabel: 'Color' },
        { label: '布局', href: '#' },
        { label: '字体', href: '/typography', enLabel: 'Typography' },
        { label: '图标', href: '#' },
        { label: '间距', href: '/spacing', enLabel: 'Spacing' },
        { label: '圆角与阴影', href: '/shape' },
      ],
    },
    {
      title: '组件',
      items: [
        { label: '按钮', href: '/bottom-button', enLabel: 'Button' },
        { label: '置底按钮', href: '/button-spec', enLabel: 'Bottom Button' },
        { label: '底部浮窗', href: '#' },
        { label: '标签', href: '/tags', enLabel: 'Tag' },
        { label: '弹窗', href: '/modal', enLabel: 'Modal' },
        { label: '导航栏', href: '/navbar', enLabel: 'NavBar' },
      ],
    },
    {
      title: '模版',
      items: [],
    },
  ],
  hero: {
    eyebrow: 'MOBILE COMPONENT · GUIDELINE',
    badge: 'v1.0',
    title: '移动端设计规范',
    description:
      '从颜色、字体到间距与形状，所有视觉决策都收敛到同一套 token。设计稿与代码只保留一个真相来源。',
    primaryAction: '浏览设计规范',
    status: {
      label: '规范状态',
      value: 'Ready for review',
      tone: 'success',
      meta: [
        { label: '版本', value: 'v1.0' },
        { label: '维护人', value: '设计系统团队' },
      ],
    },
  },
  sections: {
    palette: {
      eyebrow: '01 / Color',
      title: '颜色变量',
      description:
        '颜色变量同时提供 Media Lib 与 GEAK NAS 两套模式的取值，界面按 GEAK NAS 的白底模式呈现。',
      copyActionLabel: '复制色值：',
      copiedLabel: '已复制',
      columns: {
        name: 'Variable Name',
        type: 'Type',
        mediaLib: 'Media Lib',
        geakNas: 'GEAK NAS',
      },
    },
    typography: {
      eyebrow: '02 / Typography',
      title: '字体规范表',
      description:
        '原字体 PingFang SC，10 个文字样式按标题、正文、辅助文字 3 个分组组织。全部字距 0%，无文本装饰。',
    },
    spacing: {
      eyebrow: '03 / Spacing',
      title: '间距',
      description:
        '以 4px 为基准的间距刻度。组件内边距、区块留白与布局间隔全部从这里取值，不出现孤立数值。',
    },
    shape: {
      eyebrow: '04 / Shape',
      title: '圆角与阴影',
      description:
        '圆角负责柔化边界，阴影负责表达层级。数值越大，元素在视觉上越靠近用户。',
    },
  },
  preview: {
    label: 'tokens.css',
    status: '已同步',
    colorLabel: 'Color / Primary',
    typeLabel: 'Type / 28',
    spaceLabel: 'Spacing / Scale',
    typeSample: 'Aa 设计规范',
    typeToken: '--font-size-28',
    typeWeightToken: '--font-weight-semibold',
    footerNote: '一个来源，全站生效。',
  },
  footer: {
    note: '设计与代码之间，只保留一个真相来源。',
    copyright: '© 2026 Yinke UI system',
  },
};
