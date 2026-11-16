/** 弹窗规范页内容数据 */

export interface DialogExample {
  key: string;
  label: string;
  type: 'single' | 'double' | 'confirm';
  title: string;
  subtitle?: string;
  showClose?: boolean;
  mainTextOnly?: boolean; // 仅主标题场景（无描述）
  mainText16?: boolean; // 无主标题场景（正文 16px Medium）
  confirmCancelText?: string;
  confirmOkText?: string;
  primaryText?: string;
  secondaryText?: string;
}

export const modalOverview = {
  title: '弹窗 | 规范说明',
  description: '维护人 @设计师 | 用于确认操作、信息提示、回收站清空等通用弹窗场景',
};

export const generalRules = [
  '固定宽度330px，圆角16px，内边距24px，背景色 #FFFFFF',
  '主按钮高度44px，字号16px Medium，圆角8px，背景色 #3379FF，文字白色',
  '次按钮高度44px，字号16px Medium，圆角8px，背景色 #F4F4F7，文字色 #5D5C61',
  '主标题字号18px Semibold，颜色 #181819，单行居中、超过两行左对齐',
  '副标题/描述文案字号14px Regular，颜色 #5D5C61，左对齐',
  '确认弹窗（Confirm Dialog）按钮为文字按钮样式，字号16px Regular，通过分割线分隔',
];

export const confirmRules = [
  '按钮区域通过1px水平分割线与内容区分隔',
  '双按钮之间通过1px垂直分割线分隔',
  '「取消」按钮：16px Regular，颜色 #181819',
  '「确定」按钮：16px Regular，颜色 #3379FF（主题蓝）',
  '按钮区域高度48px，无背景填充',
];

export const sizeSpacingRules = [
  '弹窗宽度：固定330px',
  '弹窗圆角：16px',
  '内边距：上下左右各24px',
  '内容区域宽度：282px（330 - 24×2）',
  '标题与描述文案间距：12px',
  '内容区与按钮区间距：24px',
  '单按钮宽度：撑满282px，高度44px，圆角8px',
  '双按钮：等宽各135px，间距12px，高度44px，圆角8px',
  '关闭图标：20×20px，位于标题行右侧',
  '确认弹窗按钮区高度：48px，分割线1px #E5E5E5',
];

export const typographyRules = [
  '主标题：18px Semibold #181819，单行居中对齐，超过两行时左对齐',
  '副标题/描述：14px Regular #5D5C61，左对齐，最多不超过三行',
  '无主标题场景：正文使用16px Medium #181819，左对齐',
  '主按钮文字：16px Medium #FFFFFF，居中，最多八个字',
  '次按钮文字：16px Medium #5D5C61，居中',
  '确认弹窗「取消」：16px Regular #181819；「确定」：16px Regular #3379FF',
];

/** 带强调主按钮的弹窗（5 个例子） */
export const accentDialogs: DialogExample[] = [
  {
    key: 'A',
    label: '主标题+副标题（单按钮）',
    type: 'single',
    title: '主标题居中最多俩行',
    subtitle: '若超过三行时文字非居中展示，需左对齐展示，两行时居中对齐',
    primaryText: '主按钮最多八个字',
  },
  {
    key: 'B',
    label: '仅主标题·多行左对齐（单按钮）',
    type: 'single',
    title: '主标题居中最多俩行主标题居中最多俩行主标题居中最多俩行',
    mainTextOnly: true,
    primaryText: '主按钮最多八个字',
  },
  {
    key: 'C',
    label: '主标题+副标题（双按钮）',
    type: 'double',
    title: '主标题居中最多俩行',
    subtitle: '若超过三行时文字非居中展示，需左对齐展示，两行时居中对齐',
    primaryText: '确定',
    secondaryText: '取消',
  },
  {
    key: 'D',
    label: '无主标题（双按钮·正文16px Medium）',
    type: 'double',
    title: '若超过三行时文字非居中展示，需左对齐展示，两行时居中对齐',
    mainText16: true,
    primaryText: '确定',
    secondaryText: '取消',
  },
  {
    key: 'E',
    label: '特殊带关闭按钮（双按钮）',
    type: 'double',
    title: '主标题居中最多俩行',
    subtitle: '若超过三行时文字非居中展示，需左对齐展示，两行时居中对齐',
    primaryText: '确定',
    secondaryText: '取消',
    showClose: true,
  },
];

/** 确认弹窗（2 个例子） */
export const confirmDialogs: DialogExample[] = [
  {
    key: 'A',
    label: '主标题+描述文案（文字按钮）',
    type: 'confirm',
    title: '清空回收站',
    subtitle: '此操作不可撤销，文件将被永久删除。此操作不可撤销，文件将被永久删除。',
    confirmCancelText: '取消',
    confirmOkText: '确定',
  },
  {
    key: 'B',
    label: '仅标题（文字按钮）',
    type: 'confirm',
    title: '确认删除所有历史记录吗？',
    mainTextOnly: true,
    confirmCancelText: '取消',
    confirmOkText: '确定',
  },
];
