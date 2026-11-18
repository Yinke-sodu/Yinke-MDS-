/**
 * Toast / 轻提示设计规范 — Figma 900:3702
 * 4 章节 · 14 卡
 */

export const toastOverview = {
  title: 'Toast/轻提示',
  description: '轻量反馈操作结果或状态，不打断用户操作。',
};

export const usagePrinciples = [
  '• 场景：结果反馈或状态变化，不打断操作。',
  '• 位置：屏幕最顶层、页面中间，减少内容遮挡。',
  '• 内容：图标 + 文字或纯文字；结果提示不超过 3 秒。',
];

/** 01 状态与示例 — 4 行（含纯文本） */
export interface ToastStatus {
  kind: 'fail' | 'success' | 'loading' | 'text-only';
  title: string;
  desc: string;
  text: string;
  size: string;
}

export const toastStatuses: ToastStatus[] = [
  {
    kind: 'fail',
    title: '失败提示',
    desc: '反馈操作失败。',
    text: '最小的宽度',
    size: '样例 116 × 36 px',
  },
  {
    kind: 'success',
    title: '成功提示',
    desc: '反馈操作完成。',
    text: '最小的宽度',
    size: '样例 116 × 36 px',
  },
  {
    kind: 'loading',
    title: '加载中',
    desc: '反馈处理状态；此处为静态示例。',
    text: '最小的宽度',
    size: '样例 116 × 36 px',
  },
  {
    kind: 'text-only',
    title: '纯文本提示',
    desc: '无图标，仅用文字反馈结果或状态。',
    text: '最小的宽度',
    size: '样例 94 × 36 px',
  },
];

export const timeRule =
  '加载中仅展示视觉状态；加载生命周期不受结果提示的 3 秒规则限制。';

/** 02 长文案处理 */
export const fontNote =
  '原组件缺少 PingFang SC Regular，以下五个长文案示例暂留默认文字；换行、省略以本节说明为准。';

export const wrapRule = {
  title: '纯文本：折行、居中',
  desc: '每行不超过 18 个字；超长折行、各行居中，容器随行数增高。',
};

export const ellipsisRule = {
  title: '图标 + 文字：单行省略',
  desc: '图标与文字横排；文字超出区域时，结尾省略，不换行。',
  note: '三个样例均为 254 × 36 px；文字区域 208 px。',
};

export const longTextRows = [
  { title: '纯文本单行长文案', text: '文案建议控制在 18 字以内；纯文本超', size: '样例 263 × 36 px' },
  { title: '纯文本双行', text: '文案建议控制在 18 字以内；纯文本超长折行，带图标超长单行省略。', size: '样例 263 × 56 px · 文字居中' },
];

export const longIconRows = [
  { title: '失败 · 长文案', kind: 'fail' as const },
  { title: '成功 · 长文案', kind: 'success' as const },
  { title: '加载中 · 长文案', kind: 'loading' as const },
];

export const widthNote =
  '18 字仅为建议，不与像素宽度绝对对应；显示以文字区域为准。';

/** 03 视觉参数 — 第一表 6 行 */
export interface ParamRow {
  name: string;
  value: string;
  note: string;
}

export const visualParams: ParamRow[] = [
  { name: '容器圆角', value: '8 px', note: '选中示例均一致' },
  { name: '容器背景', value: '黑色 · 60% 不透明度', note: '#000000 / 60%' },
  { name: '文字颜色', value: '白色', note: '#FFFFFF' },
  { name: '文字排版', value: '14 px / 20 px', note: '字号 / 行高' },
  { name: '容器内边距', value: '左右 12 px · 上下 8 px', note: '纯文本、带图标均一致' },
  { name: '图标与间距', value: '18 × 18 px · 间距 4 px', note: '图标容器 / 图标到文字' },
];

/** 03 样例实际尺寸 — 5 行 */
export const sizeSamples: ParamRow[] = [
  { name: '带图标短文本', value: '116 × 36 px', note: '失败 / 成功 / 加载中' },
  { name: '纯文本短文案', value: '94 × 36 px', note: '五字样例' },
  { name: '纯文本长单行', value: '263 × 36 px', note: '单行展示' },
  { name: '纯文本双行', value: '263 × 56 px', note: '折行、居中' },
  { name: '带图标长文案', value: '254 × 36 px', note: '文字区域 208 px、结尾省略' },
];

export const sizeNote1 =
  '样例宽度非全局最小宽度，亦非强制最大宽度。';
export const sizeNote2 =
  '「最小的宽度」仅为样例文案，非全局规则。示例放大 2 倍；标注为原始尺寸。';

/** 04 使用边界 */
export const usageBoundary =
  '仅限选中的九个示例；不含上下结构、转场加载及交互动画。';
