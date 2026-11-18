import {
  layoutRules,
  navBarOverview,
  navBarPairs,
  stateRules,
  type NavBarExample,
} from '@/content/navbar';

/** 导航栏控件规范说明 — 1:1 复刻 Figma 869:8411 */
export function NavBarSection() {
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
      {/* 文档概述 */}
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
          {navBarOverview.title}
        </h1>
        <p
          style={{
            color: '#5C647A',
            fontSize: '18px',
            lineHeight: '29.7px',
            fontWeight: 300,
            margin: 0,
          }}
        >
          {navBarOverview.description}
        </p>
        <div style={{ height: '1px', backgroundColor: '#E1E5EB', width: '100%' }} />
      </div>

      {/* 01 六种导航栏 — 组件示例与差异参数 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              color: '#121736',
              fontSize: '28px',
              lineHeight: '35px',
              fontWeight: 520,
            }}
          >
            01
          </span>
          <span
            style={{
              color: '#121736',
              fontSize: '28px',
              lineHeight: '35px',
              fontWeight: 520,
            }}
          >
            组件示例与差异参数
          </span>
          <span
            style={{
              color: '#5C647A',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 300,
            }}
          >
            标尺仅供说明，不属原组件
          </span>
        </div>

        {/* 3 组 × 2 卡片 */}
        {navBarPairs.map((pair, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {pair.map((ex) => (
              <NavBarCard key={ex.key} example={ex} />
            ))}
          </div>
        ))}
      </section>

      {/* 02 共性与实现约定 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              color: '#121736',
              fontSize: '28px',
              lineHeight: '35px',
              fontWeight: 520,
            }}
          >
            02
          </span>
          <span
            style={{
              color: '#121736',
              fontSize: '28px',
              lineHeight: '35px',
              fontWeight: 520,
            }}
          >
            共性规则与实现边界
          </span>
          <span
            style={{
              color: '#5C647A',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 300,
            }}
          >
            现有参数与建议分列
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <RuleCard title="建议 · 布局与可访问性" rules={layoutRules} />
          <RuleCard title="建议 · 行为与状态补齐" rules={stateRules} />
        </div>
      </section>
    </div>
  );
}

/** 单个导航栏示例卡片：灰底 + 标题 + 预览 + 参数 + 建议 */
function NavBarCard({ example }: { example: NavBarExample }) {
  return (
    <div
      style={{
        backgroundColor: '#F4F4F7',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* 示例标题行 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            color: '#121736',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 330,
          }}
        >
          {example.title}
        </span>
        <span
          style={{
            color: '#5C647A',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
          }}
        >
          {example.size}
        </span>
      </div>

      {/* 用途 */}
      <p
        style={{
          color: '#5C647A',
          fontSize: '15px',
          lineHeight: '24px',
          fontWeight: 330,
          margin: 0,
        }}
      >
        用途：{example.useCase}
      </p>

      {/* 原尺寸示例与标尺 */}
      <div
        style={{
          backgroundColor: '#F4F4F7',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            color: '#5C647A',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
          }}
        >
          <span>原尺寸 · 浅底仅供文档展示</span>
          <span style={{ color: '#3379FF' }}>{example.height}</span>
        </div>
        <NavBarPreview example={example} />
        <div
          style={{
            alignSelf: 'flex-start',
            color: '#3379FF',
            fontSize: '15px',
            lineHeight: '18.75px',
            fontWeight: 330,
          }}
        >
          375
        </div>
      </div>

      {/* 当前设计参数 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span
          style={{
            color: '#121736',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 330,
          }}
        >
          当前设计参数
        </span>
        <pre
          style={{
            color: '#121736',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
            margin: 0,
            fontFamily: 'inherit',
            whiteSpace: 'pre-wrap',
          }}
        >
          {example.params}
        </pre>
      </div>

      {/* 使用建议 */}
      <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            color: '#3379FF',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
          }}
        >
          {example.suggestion}
        </span>
      </div>
    </div>
  );
}

/** 375×44 或 375×60 的导航栏预览，精确还原 Figma 6 种实例 */
function NavBarPreview({ example }: { example: NavBarExample }) {
  const h = example.height;

  return (
    <div
      style={{
        width: '375px',
        height: `${h}px`,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #E5E5E5',
      }}
    >
      {/* 返回图标（除 D 取消/保存和 F 浮层外都有） */}
      {example.hasBack && (
        <div
          style={{
            position: 'absolute',
            left: '16px',
            top: '10px',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronLeft />
        </div>
      )}

      {/* 左侧取消文字（D 类型） */}
      {example.rightAction?.type === 'text-save-cancel' && (
        <span
          style={{
            position: 'absolute',
            left: '16px',
            top: '12px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            color: '#A4A3AA',
          }}
        >
          取消
        </span>
      )}

      {/* 标题（相对整栏居中） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: h === 60 ? '24px' : '10px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: h === 60 ? 600 : 500,
            color: example.rightAction?.type === 'icon-close' ? '#323233' : '#191919',
          }}
        >
          {example.titleText}
        </span>
      </div>

      {/* 右侧各种操作 */}
      <RightAction action={example.rightAction} />
    </div>
  );
}

function RightAction({ action }: { action?: NavBarExample['rightAction'] }) {
  if (!action) return null;

  switch (action.type) {
    case 'circle-plus':
      return (
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '10px',
            width: '24px',
            height: '24px',
          }}
        >
          <CirclePlus />
        </div>
      );
    case 'text-close':
      return (
        <span
          style={{
            position: 'absolute',
            right: '15px',
            top: '12px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            color: '#A4A3AA',
          }}
        >
          关闭
        </span>
      );
    case 'capsule':
      return (
        <div
          style={{
            position: 'absolute',
            right: '6px',
            top: '6px',
            width: '43px',
            height: '32px',
            borderRadius: '25px',
            border: '0.5px solid rgba(151,151,151,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MoreIcon />
          </div>
        </div>
      );
    case 'text-save-cancel':
      return (
        <span
          style={{
            position: 'absolute',
            right: '15px',
            top: '12px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            color: '#3379FF',
          }}
        >
          保存
        </span>
      );
    case 'icon-group':
      return (
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '10px',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GridIcon />
        </div>
      );
    case 'icon-close':
      return (
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CloseIcon />
        </div>
      );
    default:
      return null;
  }
}

function RuleCard({ title, rules }: { title: string; rules: string[] }) {
  return (
    <div
      style={{
        backgroundColor: '#F4F4F7',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <span
        style={{
          color: '#181819',
          fontSize: '18px',
          lineHeight: '27px',
          fontWeight: 330,
        }}
      >
        {title}
      </span>
      {rules.map((r, i) => (
        <p
          key={i}
          style={{
            color: '#181819',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
            margin: 0,
          }}
        >
          {r}
        </p>
      ))}
    </div>
  );
}

/* ===== 图标：全部用内联 SVG，严格 1.5 线宽 ===== */

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 6 9 12l6 6"
        stroke="#181819"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CirclePlus() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#181819" strokeWidth="1.5" />
      <path d="M12 8v8M8 12h8" stroke="#181819" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1l10 10M11 1 1 11" stroke="#C8C9CC" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="1.5" fill="#000000" />
      <circle cx="12" cy="12" r="1.5" fill="#000000" />
      <circle cx="18" cy="12" r="1.5" fill="#000000" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#181819" strokeWidth="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#181819" strokeWidth="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#181819" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#181819" strokeWidth="1.5" />
    </svg>
  );
}
