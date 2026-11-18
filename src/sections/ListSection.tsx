import {
  listOverview,
  sceneItems,
  heightSpecs,
  compactInstances,
  singleInstances,
  toggleInstances,
  layoutRules,
  type ListInstance,
} from '@/content/list';

/* ---------- 子组件 ---------- */

/** 开关控件（32×20 开启态，用于双行开关） */
function SwitchOn() {
  return (
    <div
      style={{
        width: 32,
        height: 20,
        position: 'relative',
        borderRadius: '999px',
        backgroundColor: '#3379FF',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          position: 'absolute',
          top: 2,
          left: 14,
        }}
      />
    </div>
  );
}

/** Chevron Right 箭头 */
function ChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 4.5L12.5 10L7 15.5"
        stroke="#A4A3AA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Eye / 眼睛图标 */
function EyeIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4Z"
        stroke="#A4A3AA"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx={8} cy={8} r={2} stroke="#A4A3AA" strokeWidth="1.2" />
    </svg>
  );
}

/** Lock / 锁图标 */
function LockIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x={3}
        y={7}
        width={10}
        height={7}
        rx={1.5}
        stroke="#3379FF"
        strokeWidth="1.2"
      />
      <path
        d="M5 7V5a3 3 0 0 1 6 0v2"
        stroke="#3379FF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 前置圆形（24×24 灰色） */
function LeadingDot() {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#D9D9D9',
        flexShrink: 0,
      }}
    />
  );
}

/* ---------- 列表实例渲染 ---------- */

/** PIN 信息展示 319×40 */
function PinRow() {
  return (
    <div
      style={{
        width: 319,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #F4F4F7',
        backgroundColor: '#FFFFFF',
        padding: '0 12px',
        gap: 12,
      }}
    >
      {/* 左：PIN 码 + 眼睛 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: '#5C5C61',
            lineHeight: '16px',
          }}
        >
          PIN 码
        </span>
        <EyeIcon />
      </div>

      {/* 弹性填充 */}
      <div style={{ flex: 1 }} />

      {/* 右：锁 + **** + 箭头 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <LockIcon />
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: '#171719',
            lineHeight: '16px',
          }}
        >
          ****
        </span>
        <ChevronRight size={20} />
      </div>
    </div>
  );
}

/** 标准单行 343×50 */
function SingleRow({ item }: { item: ListInstance }) {
  const v = item.variant;
  if (v.type !== 'single') return null;

  const titleColor = v.titleColor === 'dark' ? '#191919' : '#A4A3AA';
  const statusColor =
    v.status?.color === 'blue' ? '#3379FF' : v.status?.color === 'gray' ? '#A4A3AA' : '#3379FF';

  return (
    <div
      style={{
        width: 343,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        padding: '0 12px',
        gap: 8,
      }}
    >
      {/* 前置圆形（可选） */}
      {v.hasLeadingDot && <LeadingDot />}

      {/* 标题 */}
      <span
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: titleColor,
          lineHeight: '17px',
        }}
      >
        {v.title}
      </span>

      <div style={{ flex: 1 }} />

      {/* 状态文字（可选） */}
      {v.status && (
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: statusColor,
            lineHeight: '20px',
          }}
        >
          {v.status.text}
        </span>
      )}

      {/* 箭头（可选） */}
      {v.hasArrow && <ChevronRight size={20} />}
    </div>
  );
}

/** 双行开关 343×70 */
function ToggleRow({ item }: { item: ListInstance }) {
  const v = item.variant;
  if (v.type !== 'toggle') return null;

  return (
    <div
      style={{
        width: 343,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        padding: '0 12px',
        gap: 12,
      }}
    >
      {/* 左：标题 + 副标题 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#191919',
            lineHeight: '17px',
          }}
        >
          {v.title}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: '#3379FF',
            lineHeight: '16px',
          }}
        >
          {v.subtitle}
        </span>
      </div>

      {/* 右：开关 */}
      <SwitchOn />
    </div>
  );
}

/* ---------- 章节标题 ---------- */

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 630,
          lineHeight: '26px',
          color: '#121736',
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 13,
          fontWeight: 400,
          lineHeight: '20px',
          color: '#A4A3AA',
          margin: 0,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

/* ---------- 灰底卡（原样示例 + 外观与用途） ---------- */

function SpecCard({
  item,
  children,
}: {
  item: ListInstance;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: '#F4F4F7',
        borderRadius: 20,
        padding: '24px',
        display: 'flex',
        gap: 40,
      }}
    >
      {/* 左：原样示例 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            lineHeight: '20px',
            color: '#A4A3AA',
          }}
        >
          原样示例 · 1:1
        </span>
        {children}
      </div>

      {/* 右：外观与用途 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* 名称 + 尺寸 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 630,
              lineHeight: '24px',
              color: '#121736',
            }}
          >
            {item.index} · {item.name}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 630,
              lineHeight: '20px',
              color: '#A4A3AA',
            }}
          >
            {item.sizeLabel}
          </span>
        </div>

        {/* 外观 */}
        <div style={{ display: 'flex', gap: 8 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#5C647A',
            }}
          >
            外观 / 已知状态
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#5C647A',
            }}
          >
            {item.appearance}
          </span>
        </div>

        {/* 用途 */}
        <div style={{ display: 'flex', gap: 8 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#A4A3AA',
            }}
          >
            用途说明（建议）
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#A4A3AA',
            }}
          >
            {item.usage}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- 主 Section ---------- */

export function ListSection() {
  return (
    <div
      style={{
        padding: '56px 44px 88px',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}
    >
      {/* 文档标题区 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h1
          style={{
            color: '#181819',
            fontSize: 28,
            lineHeight: '40px',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {listOverview.title}
        </h1>
        <p
          style={{
            color: '#A4A3AA',
            fontSize: 14,
            lineHeight: '22px',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {listOverview.description}
        </p>
      </div>

      {/* 01 · 组件定义 / 适用场景 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeader
          title="01 · 组件定义 / 适用场景"
          subtitle="列表以信息行为基础，按内容层级组织标题、状态、辅助说明与尾部操作。"
        />

        {/* 适用场景 — 灰底卡 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {sceneItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '22px',
                color: '#5C647A',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* 高度与来源 — 3 列 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            gap: 32,
          }}
        >
          {heightSpecs.map((s, i) => (
            <div
              key={i}
              style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 630,
                  lineHeight: '20px',
                  color: '#A4A3AA',
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 630,
                  lineHeight: '24px',
                  color: '#121736',
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: '#A4A3AA',
                }}
              >
                {s.source}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 02 · 紧凑信息行 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeader
          title="02 · 紧凑信息行"
          subtitle="40 px 高度 · 1 项 · PIN Code Display"
        />
        {compactInstances.map((item, i) => (
          <SpecCard key={i} item={item}>
            <PinRow />
          </SpecCard>
        ))}
      </section>

      {/* 03 · 标准单行 / 类型与组合 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <SectionHeader
          title="03 · 标准单行 / 类型与组合"
          subtitle="50 px 高度 · 7 项 · Account List Item；原样示例保持 343 × 50 px，不因尾部图标改变高度。"
        />
        {singleInstances.map((item, i) => (
          <SpecCard key={i} item={item}>
            <SingleRow item={item} />
          </SpecCard>
        ))}
      </section>

      {/* 04 · 双行开关 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeader
          title="04 · 双行开关"
          subtitle="70 px 高度 · 1 项 · GEAK Link Toggle"
        />
        {toggleInstances.map((item, i) => (
          <SpecCard key={i} item={item}>
            <ToggleRow item={item} />
          </SpecCard>
        ))}
      </section>

      {/* 05 · 布局规则与使用边界 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeader
          title="05 · 布局规则与使用边界"
          subtitle="建议与待确认项独立呈现，视觉样式不等同于已实现的交互行为。"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {layoutRules.map((rule, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F4F4F7',
                borderRadius: 20,
                padding: '20px 24px',
                display: 'flex',
                gap: 32,
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 630,
                  lineHeight: '24px',
                  color: '#121736',
                  width: 240,
                  flexShrink: 0,
                }}
              >
                {rule.title}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: '#5C647A',
                  flex: 1,
                }}
              >
                {rule.desc}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
