/**
 * 形状 token 配置：圆角与阴影。
 */

export interface RadiusToken {
  name: string;
  token: string;
  value: string;
  description: string;
}

export interface ShadowToken {
  name: string;
  token: string;
  description: string;
}

export const radiusTokens: RadiusToken[] = [
  {
    name: 'Small',
    token: '--radius-sm',
    value: '8px',
    description: '按钮、输入框与标签',
  },
  {
    name: 'Medium',
    token: '--radius-md',
    value: '12px',
    description: '小卡片与色块',
  },
  {
    name: 'Large',
    token: '--radius-lg',
    value: '20px',
    description: '内容卡片与面板',
  },
  {
    name: 'X-Large',
    token: '--radius-xl',
    value: '24px',
    description: '浮层与弹窗',
  },
];

export const shadowTokens: ShadowToken[] = [
  { name: 'Small', token: '--shadow-sm', description: '默认卡片与输入框' },
  { name: 'Medium', token: '--shadow-md', description: '悬浮卡片与下拉层' },
  { name: 'Large', token: '--shadow-lg', description: '模态框与浮层' },
];
