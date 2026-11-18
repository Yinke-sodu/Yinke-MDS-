import {
  bottomButtonOverview,
  buttonInstances,
  colorNotes,
  usageAdvice,
  pendingQuestions,
} from '@/content/bottomButtons';

/** 控件说明 · 按钮 — 1:1 复刻 Figma 874:9294 */
export function BottomButtonSection() {
  return (
    <div
      style={{
        padding: '56px 44px 88px',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '56px',
      }}
    >
      {/* 文档标题 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h1
          style={{
            color: '#181819',
            fontSize: '36px',
            lineHeight: '54px',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {bottomButtonOverview.title}
        </h1>
        <p
          style={{
            color: '#5D5C61',
            fontSize: '18px',
            lineHeight: '30px',
            fontWeight: 330,
            margin: 0,
          }}
        >
          {bottomButtonOverview.description}
        </p>
      </div>

      {/* 章节1：按钮尺寸与状态 */}
      <ButtonGroup
        title="按钮尺寸与状态"
        subtitle="5 种尺寸 · 9 个实例 · 灰底表格对照"
      >
        <ButtonTable />
      </ButtonGroup>

      {/* 章节2：色彩与实测说明 */}
      <ButtonGroup
        title="色彩与实测说明"
        subtitle="颜色值与禁用态的实测结论"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '20px 24px',
            gap: '12px',
          }}
        >
          {colorNotes.map((note, i) => (
            <p
              key={i}
              style={{
                color: '#121736',
                fontSize: '15px',
                lineHeight: '24px',
                fontWeight: 330,
                margin: 0,
              }}
            >
              {note}
            </p>
          ))}
        </div>
      </ButtonGroup>

      {/* 章节3：使用建议与待补充 */}
      <ButtonGroup
        title="使用建议与待补充"
        subtitle="双栏并列 — 建议 vs 待确认项"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            gap: '24px',
          }}
        >
          {/* 左栏：使用建议 */}
          <AdviceColumn title="使用建议" items={usageAdvice} />
          {/* 右栏：待补充 */}
          <AdviceColumn title="待补充 / 待确认" items={pendingQuestions} />
        </div>
      </ButtonGroup>
    </div>
  );
}

/** 分组标题 + 副标题容器 */
function ButtonGroup({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span
          style={{
            color: '#121736',
            fontSize: '28px',
            lineHeight: '35px',
            fontWeight: 330,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: '#5C647A',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
          }}
        >
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
}

/** 按钮尺寸与状态表格 */
function ButtonTable() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F4F4F7',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      {/* 表头 — 精确列宽 360/180/112/300/272，gap 20，高 42px */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '360px 180px 112px 300px 272px',
          alignItems: 'center',
          gap: '20px',
          padding: '0 24px',
          height: '42px',
          backgroundColor: '#F4F4F7',
        }}
      >
        {['原样示例 · 1:1', '说明名称', '实际尺寸（px）', '外观 / 已知状态', '用途说明（建议）'].map(
          (h) => (
            <span
              key={h}
              style={{
                color: '#5C647A',
                fontSize: '15px',
                lineHeight: '24px',
                fontWeight: 330,
              }}
            >
              {h}
            </span>
          ),
        )}
      </div>

      {/* 9 条数据行 — 行高 112px，padding 20 24，gap 20 */}
      {buttonInstances.map((row) => (
        <div
          key={row.key}
          style={{
            display: 'grid',
            gridTemplateColumns: '360px 180px 112px 300px 272px',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 24px',
            borderTop: '1px solid #E5E5ED',
          }}
        >
          {/* 原样示例 — 精确像素按钮预览 */}
          <div
            style={{
              height: '52px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {renderButtonPreview(row.key)}
          </div>

          {/* 名称 */}
          <span
            style={{
              color: '#121736',
              fontSize: '18px',
              lineHeight: '28.8px',
              fontWeight: 330,
            }}
          >
            {row.name}
          </span>

          {/* 尺寸 */}
          <span
            style={{
              color: '#121736',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 330,
            }}
          >
            {row.size}
          </span>

          {/* 外观 */}
          <span
            style={{
              color: '#121736',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 330,
              whiteSpace: 'pre-line',
            }}
          >
            {row.appearance}
          </span>

          {/* 用途 */}
          <span
            style={{
              color: '#121736',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 330,
            }}
          >
            {row.usage}
          </span>
        </div>
      ))}
    </div>
  );
}

/** 双栏建议 / 待补充列 */
function AdviceColumn({
  title,
  items,
}: {
  title: string;
  items: { num: string; title: string; desc: string }[];
}) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 栏目标题 */}
      <span
        style={{
          color: '#121736',
          fontSize: '18px',
          lineHeight: '28.8px',
          fontWeight: 330,
        }}
      >
        {title}
      </span>

      {/* 条目 */}
      {items.map((item) => (
        <div
          key={item.num}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <span
              style={{
                color: '#3379FF',
                fontSize: '15px',
                lineHeight: '24px',
                fontWeight: 330,
              }}
            >
              {item.num}
            </span>
            <span
              style={{
                color: '#121736',
                fontSize: '18px',
                lineHeight: '28.8px',
                fontWeight: 330,
              }}
            >
              {item.title}
            </span>
          </div>
          <p
            style={{
              color: '#5C647A',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 330,
              margin: 0,
              paddingLeft: '23px',
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/** 根据 key 渲染精确像素的按钮预览 — 1:1 还原 Figma 实际尺寸和颜色 */
function renderButtonPreview(key: string): React.ReactNode {
  // 统一按钮文案
  const label = '保存';

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    flexShrink: 0,
  };

  switch (key) {
    case 'fullwidth-primary':
      return (
        <div
          style={{
            ...baseStyle,
            width: '343px',
            height: '52px',
            backgroundColor: '#3379FF',
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '25.2px',
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      );

    case 'fullwidth-disabled':
      return (
        <div
          style={{
            ...baseStyle,
            width: '343px',
            height: '52px',
            // 蓝底叠 70% 白色填充 → 约 #C2D7FF
            backgroundColor: '#C2D7FF',
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '25.2px',
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      );

    case 'large-primary':
      return (
        <div
          style={{
            ...baseStyle,
            width: '298px',
            height: '44px',
            backgroundColor: '#3379FF',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      );

    case 'large-disabled':
      return (
        <div
          style={{
            ...baseStyle,
            width: '298px',
            height: '44px',
            backgroundColor: '#C2D7FF',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      );

    case 'medium-primary':
      return (
        <div
          style={{
            ...baseStyle,
            width: '135px',
            height: '44px',
            backgroundColor: '#3379FF',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      );

    case 'medium-secondary':
      return (
        <div
          style={{
            ...baseStyle,
            width: '135px',
            height: '44px',
            backgroundColor: '#FFFFFF',
            color: '#5C5C61',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 500,
            border: 'none',
            boxShadow: 'inset 0 0 0 0px transparent',
          }}
        >
          {label}
        </div>
      );

    case 'small-primary':
      return (
        <div
          style={{
            ...baseStyle,
            width: '80px',
            height: '32px',
            backgroundColor: '#3379FF',
            color: '#FFFFFF',
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 400,
          }}
        >
          {label}
        </div>
      );

    case 'small-disabled':
      return (
        <div
          style={{
            ...baseStyle,
            width: '80px',
            height: '32px',
            backgroundColor: '#F4F4F7',
            color: '#5C5C61',
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 400,
          }}
        >
          {label}
        </div>
      );

    case 'compact-light':
      // 白底上叠蓝 10% 填充
      return (
        <div
          style={{
            ...baseStyle,
            width: '72px',
            height: '28px',
            backgroundColor: 'rgba(51,121,255,0.1)',
            color: '#3379FF',
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 400,
          }}
        >
          {label}
        </div>
      );

    default:
      return null;
  }
}
