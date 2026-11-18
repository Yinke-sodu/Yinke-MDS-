/**
 * 置底按钮设计规范 — Figma 878:9576
 * 7 章节 / 1440×2814
 */

export const buttonSpecOverview = {
  title: '置底按钮｜设计规范',
  description:
    '用于承载页面底部关键操作，并在滚动、信息扩展及全面屏环境中保持行动可见、层级明确与触达安全。',
};

/** 章节 01 · 组件定义 / 适用场景 */
export const section01Definition = {
  eyebrow: '01 · DEFINITION',
  title: '01 · 组件定义 / 适用场景',
  subtitle:
    '置底按钮固定在移动端页面底部，集中承载当前任务最重要的提交、确认或继续操作。',
  scenarios: [
    '表单提交、支付确认、流程继续等单一关键行动',
    '存在明确主次关系的双操作，如取消与确认',
    '批量选择场景，需要同步展示"已选择 全部/N 项"',
    '业务需要在操作前补充状态、价格、说明等信息',
  ],
};

/** 章节 02 · 结构与规格 */
export const section02Structure = {
  title: '02 · 结构与规格',
  subtitle:
    '组件由背景容器、扩展内容（可选）、按钮区与底部安全区（按设备）组成。',
  /** 4 列规格表 */
  specs: [
    { label: '容器宽度', value: '375 pt', note: '现有移动端示例基准宽度；实际跟随设备宽度' },
    { label: '垂直间距', value: '12 pt', note: '容器上下间距12pt。' },
    { label: '按钮高度', value: '44/52 pt', note: '特殊上下组合及文案过长场景统一使用。' },
    { label: '水平边距', value: '16 pt', note: '按钮与屏幕边缘保持稳定留白。' },
  ],
  heightNote:
    '示例可观察到 68、76、102、110、134、154 pt 等容器高度。它们不是固定枚举：最终高度由按钮数量、扩展内容和底部安全区共同决定，容器应随内容自适应。',
};

/** 章节 03 · 类型与组合 */
export const section03Types = {
  title: '03 · 类型与组合',
  subtitle: '优先根据任务数量与主次关系选择最简组合。',
  types: [
    {
      code: 'A',
      name: '单主按钮',
      description: '页面仅有一个明确的主要行动。',
      preview: 'single-primary',
    },
    {
      code: 'B',
      name: '主次双按钮横排',
      description: '两个短文案操作并列，主操作置于右侧。',
      preview: 'dual-horizontal',
    },
  ],
};

/** 章节 04 · 布局规则 */
export const section04Layout = {
  title: '04 · 布局规则',
  subtitle:
    '置底容器贴合页面底边，内容按"扩展信息 → 操作按钮 → 安全区"自上而下排列。',
  rules: [
    {
      title: '1. 容器上下间距12pt',
      desc: '按钮区与容器上下边界保持 12 pt；横向内容默认与屏幕保持 16 pt。',
    },
    {
      title: '2. 主次顺序稳定',
      desc: '横排时次要操作在左、主要操作在右；单按钮占满可用内容宽度。',
    },
    {
      title: '3. 高度按内容生成',
      desc: '按钮数量、扩展内容和安全区共同决定容器高度。',
    },
  ],
};

/** 章节 05 · 安全区与背景 */
export const section05SafeArea = {
  title: '05 · 安全区与背景',
  subtitle:
    '全面屏机型，需增加底部安全距离；非全面屏机型不额外占用安全区。',
  rules: [
    {
      title: '1. 全面屏安全区',
      desc: '安全区位于按钮区下方，背景与置底容器连续，任何可点击内容不得进入该区域。',
    },
    {
      title: '2. 置底背景色支持换色',
      desc: '可按业务氛围调整容器背景，但需保持按钮、文案和系统指示条的可读对比度。',
    },
  ],
};

/** 章节 06 · 扩展内容 */
export const section06Expand = {
  title: '06 · 扩展内容',
  subtitle: '根据业务需要，组件内可增加其他内容。',
  rules: [
    {
      title: '1. 推荐内容',
      desc: '可展示"已选择 全部/N 项"、总价、协议提示或当前状态；信息应服务于按钮决策。',
    },
    {
      title: '2. 保持操作聚焦',
      desc: '扩展内容置于按钮上方，并与操作区保持清晰分组；避免放入复杂表单或可滚动长内容。',
    },
  ],
};

/** 章节 07 · 特殊组合 */
export const section07Special = {
  title: '07 · 特殊组合',
  subtitle: '上下形式，按钮双强调(文案过长时) 该场景按钮高度使用44pt',
};
