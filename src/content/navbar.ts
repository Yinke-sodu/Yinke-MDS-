/** 导航栏控件规范说明 — Figma 869:8411 */

export interface NavBarExample {
  key: string;
  title: string;
  size: string;
  useCase: string;
  height: number;
  titleText: string;
  hasBack?: boolean;
  rightAction?:
    | { type: 'circle-plus' }
    | { type: 'text-close' }
    | { type: 'capsule' }
    | { type: 'text-save-cancel' }
    | { type: 'icon-group' }
    | { type: 'icon-close' };
  params: string;
  suggestion: string;
}

export const navBarOverview = {
  title: '导航栏控件规范说明',
  description: '基于六种选中实例，保留外观与布局差异，汇总共性，供设计复用与实现核对。',
};

/** 6 种导航栏，两两成对 */
export const navBarPairs: NavBarExample[][] = [
  [
    {
      key: 'A',
      title: '返回＋圆形加号',
      size: '375 × 44',
      useCase: '含快捷操作的二级页。',
      height: 44,
      titleText: '导航标题',
      hasBack: true,
      rightAction: { type: 'circle-plus' },
      params:
        '标题框：x 53、y 10；270 × 24。\n返回图标框：24 × 24；左 16、顶 10。\n右图标框：x 335、y 10；24 × 24；右 16。\n内部圆环：20 × 20；返回／加号线宽：1.5。',
      suggestion: '建议：返回上一级；加号新增业务对象，内容由业务定义。',
    },
    {
      key: 'B',
      title: '返回＋文字关闭',
      size: '375 × 44',
      useCase: '兼需逐级返回与退出的流程。',
      height: 44,
      titleText: '导航标题',
      hasBack: true,
      rightAction: { type: 'text-close' },
      params:
        '标题框：x 72、y 10；232 × 24。\n返回图标框：24 × 24；左 16、顶 10；线宽 1.5。\n关闭文字框：x 304、y 12；56 × 20。\n关闭：苹方常规 14 / 20，约 #A4A3AA；右对齐、右 15。',
      suggestion: '建议：返回上一级，关闭退出流程；灰字不代表已禁用。',
    },
  ],
  [
    {
      key: 'C',
      title: '返回＋右侧胶囊',
      size: '375 × 44',
      useCase: '含宿主入口的页面；胶囊动作待业务确认。',
      height: 44,
      titleText: '导航标题',
      hasBack: true,
      rightAction: { type: 'capsule' },
      params:
        '标题框：x 72、y 10；232 × 24；返回同上。\n胶囊：x 326、y 6；43 × 32；右 6。\n圆角属性 25；描边 0.5，约 #979797，不透明度 20%。\n背景填充未启用；内部图标框 24 × 24，图形黑色。',
      suggestion: '建议：由宿主环境确认入口语义，勿凭外观判定新增或关闭。',
    },
    {
      key: 'D',
      title: '取消／保存',
      size: '375 × 44',
      useCase: '表单编辑与内容提交。',
      height: 44,
      titleText: '导航标题',
      rightAction: { type: 'text-save-cancel' },
      params:
        '标题框：x 72、y 10；232 × 24。\n两侧文字框：56 × 20，y 12；苹方常规 14 / 20。\n取消：x 16，左对齐，约 #A4A3AA。\n保存：x 304，右对齐、右 15，#3379FF。',
      suggestion: '建议：取消退出编辑；保存前校验，提交防重复，失败保留输入。',
    },
  ],
  [
    {
      key: 'E',
      title: '基础返回型',
      size: '375 × 44',
      useCase: '仅需逐级返回的详情页。',
      height: 44,
      titleText: '设备信息',
      hasBack: true,
      rightAction: { type: 'icon-group' },
      params:
        '原标题"设备信息"；无右侧操作。\n标题框：x 53、y 10；270 × 24。\n返回图标框：24 × 24；左 16、顶 10。\n返回线宽 1.5；深色图标约 #181819。',
      suggestion: '建议：返回上一级并保留详情上下文；无业务需要不加右侧操作。',
    },
    {
      key: 'F',
      title: '浮层标题栏',
      size: '375 × 60',
      useCase: '浮层标题与独立关闭。',
      height: 60,
      titleText: '文件夹详情',
      rightAction: { type: 'icon-close' },
      params:
        '原标题"文件夹详情"；苹方半粗体 18 / 24。\n标题框：x 36、y 24；303 × 24；底 12。\n标题色 #323233；关闭框：x 339、y 16。\n关闭框：20 × 20，右 16；叉形约 12 × 12。',
      suggestion: '建议：关闭仅收起浮层，蒙层关闭另定。现有标题与关闭图标不垂直居中，不套用 44 高栏规则。',
    },
  ],
];

export const layoutRules = [
  '宽度随容器；标题相对整栏居中，单行超长省略，不挤占两侧操作。',
  '独立点击热区建议 ≥44 × 44，可扩展而不改图标外观。',
  '返回、关闭及业务操作需有可访问名称；浮层保留现有布局差异。',
];

export const stateRules = [
  '有未提交修改时，离开前确认；明确返回、关闭、取消的作用范围。',
  '禁用、加载、按下态均无视觉样本，待定义，非已有状态。',
  '保存前校验、提交防重复、失败保留输入；胶囊动作待业务确认。',
];
