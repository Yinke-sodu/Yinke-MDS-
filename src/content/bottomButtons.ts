/**
 * 置底按钮规范 — Figma 874:9294
 * 数据来源：GEAK NAS DS_Mobile Figma 文件 → 控件说明 · 按钮 节点
 */

export interface BottomButtonInstance {
  /** 原样示例 key — 用于 Section 组件的 switch 渲染 */
  key: string;
  /** 说明名称 */
  name: string;
  /** 来源节点 */
  source: string;
  /** 实际尺寸 "宽 × 高" */
  size: string;
  /** 外观描述 */
  appearance: string;
  /** 用途说明 */
  usage: string;
}

export const bottomButtonOverview = {
  title: '控件说明 · 按钮',
  description:
    '实例实测 · 单位 px · 宽度仅代表当前实例，非全场景固定值 · 全部视觉圆角 8',
};

/** 按钮尺寸与状态 — 9 个实例 */
export const buttonInstances: BottomButtonInstance[] = [
  {
    key: 'fullwidth-primary',
    name: '全宽 Full Width · 可点击',
    source: '874:9295',
    size: '343 × 52',
    appearance: '蓝底 #3379FF、白字 Semibold 18/25.2；圆角 8；\n全宽铺底容器。',
    usage: '底部确认操作 / 单操作场景的主按钮。',
  },
  {
    key: 'fullwidth-disabled',
    name: '全宽 Full Width · 置灰',
    source: '874:9296',
    size: '343 × 52',
    appearance: '蓝底叠 70% 白色填充（约 #C2D7FF）、白字 Semibold 18/25.2；\n圆角 8；不可点击。',
    usage: '条件未满足时禁用主操作，避免误触。',
  },
  {
    key: 'large-primary',
    name: '大按钮 Large · 主',
    source: '874:9297',
    size: '298 × 44',
    appearance: '蓝底 #3379FF、白字 Medium 16/22；圆角 8；\n非全宽，容器自适应。',
    usage: '页面内次级区域的主要确认操作。',
  },
  {
    key: 'large-disabled',
    name: '大按钮 Large · 禁用',
    source: '874:9298',
    size: '298 × 44',
    appearance: '蓝底叠 70% 白色填充（约 #C2D7FF）、白字 Medium 16/22；\n圆角 8；不可点击。',
    usage: '大按钮在条件未满足时的禁用态。',
  },
  {
    key: 'medium-primary',
    name: '中按钮 Medium · 主',
    source: '874:9299',
    size: '135 × 44',
    appearance: '蓝底 #3379FF、白字 Medium 16/22；圆角 8。',
    usage: '表单 / 弹窗内的主要操作按钮。',
  },
  {
    key: 'medium-secondary',
    name: '中按钮 Medium · 次',
    source: '874:9300',
    size: '135 × 44',
    appearance: '白底 #FFFFFF、灰字 #5C5C61 Medium 16/22；\n圆角 8；与主按钮并列时用于"取消/返回"。',
    usage: '双按钮布局中的次要操作（取消、返回）。',
  },
  {
    key: 'small-primary',
    name: '小按钮 Small · 主',
    source: '874:9301',
    size: '80 × 32',
    appearance: '蓝底 #3379FF、白字 Regular 12/16；圆角 8。',
    usage: '紧凑场景下的操作，如列表行内操作。',
  },
  {
    key: 'small-disabled',
    name: '小按钮 Small · 禁用',
    source: '874:9302',
    size: '80 × 32',
    appearance: '浅灰底 #F4F4F7、灰字 #5C5C61 Regular 12/16；圆角 8；不可点击。',
    usage: '小按钮条件未满足时的禁用态。',
  },
  {
    key: 'compact-light',
    name: '紧凑 Group 39164 · 轻量',
    source: '874:9303',
    size: '72 × 28',
    appearance: '白底上叠蓝 10% 填充 rgba(51,121,255,0.1)、\n蓝字 #3379FF Regular 12/16；圆角 8。',
    usage: '轻量操作 / 次级标签式按钮；低对比样本。',
  },
];

/** 章节2：色彩与实测说明 */
export const colorNotes: string[] = [
  '主色 #3379FF · 浅灰底 #F4F4F7 · 次文字 #5D5C61 · 反白字 #FFFFFF',
  '全宽/大号禁用：蓝底叠 70% 白色填充，约 #C2D7FF；文字仍白色',
  '浅蓝底白字为原样低对比样本，上线前需评估',
];

/** 章节3：使用建议与待补充 */
export const usageAdvice = [
  {
    num: '01',
    title: '操作层级',
    desc: '单操作页面用全宽主按钮；多操作并列时主蓝次白，避免双主按钮竞争。',
  },
  {
    num: '02',
    title: '标签文案',
    desc: '按钮文案须为动词短语（保存、确认、删除），禁用态不改文案仅变视觉。',
  },
  {
    num: '03',
    title: '点击热区',
    desc: '最小热区 44×44，小按钮 32×32 仍需保证实际可点区域不低于 44px。',
  },
];

export const pendingQuestions = [
  {
    num: '01',
    title: '业务禁用逻辑',
    desc: '哪些条件下按钮进入禁用态？加载中 / 参数缺失 / 权限不足 三者是否区分视觉？',
  },
  {
    num: '02',
    title: '交互状态',
    desc: 'Hover / Pressed / Focus 三套状态是否补齐？移动端默认态与桌面 hover 是否共享 token。',
  },
  {
    num: '03',
    title: '紧凑样式语义',
    desc: '轻量浅蓝底按钮与"标签"边界模糊，需明确是按钮还是标签组件，避免混用。',
  },
];
