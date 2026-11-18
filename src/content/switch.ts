/**
 * 开关控件说明 — Figma 891:905
 * 2 尺寸 × 2 状态 = 4 实例
 */

export const switchOverview = {
  title: '控件说明 · Switch 开关',
  description: '尺寸单位 px · 4 个源实例副本 · 原样 1:1 展示',
};

export type SwitchState = 'on' | 'off';

export interface SwitchInstance {
  /** 分组名（小尺寸 / 标准尺寸） */
  group: string;
  /** 宽度 px */
  width: number;
  /** 高度 px */
  height: number;
  /** 状态 */
  state: SwitchState;
  /** 说明名称 */
  name: string;
  /** 外观描述（轨道色 + 滑块位置） */
  appearance: string;
  /** 用途说明 */
  usage: string;
  /** 尺寸字符串 */
  sizeLabel: string;
}

export const switchInstances: SwitchInstance[] = [
  // 小尺寸 · 32 × 20
  {
    group: '小尺寸 · 32 × 20',
    width: 32,
    height: 20,
    state: 'on',
    name: '小尺寸开启外观',
    appearance: '开启轨道 #3379FF\n滑块在右侧，x = 14',
    usage: '用于紧凑设置',
    sizeLabel: '32 × 20',
  },
  {
    group: '小尺寸 · 32 × 20',
    width: 32,
    height: 20,
    state: 'off',
    name: '小尺寸关闭外观',
    appearance: '关闭轨道 #181819 · 轨道图层透明度 10%\n滑块在左侧，x = 2',
    usage: '同一列表保持尺寸一致',
    sizeLabel: '32 × 20',
  },
  // 标准尺寸 · 40 × 24
  {
    group: '标准尺寸 · 40 × 24',
    width: 40,
    height: 24,
    state: 'on',
    name: '标准尺寸开启外观',
    appearance: '开启轨道 #3379FF\n滑块在右侧，x = 18',
    usage: '用于常规设置',
    sizeLabel: '40 × 24',
  },
  {
    group: '标准尺寸 · 40 × 24',
    width: 40,
    height: 24,
    state: 'off',
    name: '标准尺寸关闭外观',
    appearance: '关闭轨道 #181819 · 轨道图层透明度 10%\n滑块在左侧，x = 2',
    usage: '搭配明确功能标签',
    sizeLabel: '40 × 24',
  },
];

/** 底部共用视觉事实 */
export const switchFacts = {
  main: '白色滑块 #FFFFFF；关闭仅轨道图层透明度为 10%，不是整个控件透明；关闭不等于禁用。',
  sampleScope:
    '样本仅覆盖开启 / 关闭外观；禁用、加载、悬停、焦点与点击热区未提供，需另行定义。',
  limitation: '视觉规格不代表交互已实现或无障碍合规。',
};
