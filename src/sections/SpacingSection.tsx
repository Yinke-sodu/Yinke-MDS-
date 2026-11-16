import {
  spacingFooter,
  spacingOverview,
  spacingRows,
} from '@/content/spacing';

/** 间距规范表，1:1 复刻 Figma GEAK NAS DS_Mobile 设计稿 */
export function SpacingSection() {
  return (
    <div style={{ padding: '56px 44px 64px', backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* 概览区 */}
      <section
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '0 0 48px',
          borderRadius: '12px',
        }}
      >
        {/* 标题与描述 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              color: 'var(--color-spacing-text)',
              fontSize: '36px',
              lineHeight: '54px',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {spacingOverview.title}
          </h1>
          <p
            style={{
              color: 'var(--color-spacing-text-muted)',
              fontSize: '18px',
              lineHeight: '27px',
              fontWeight: 400,
              margin: 0,
            }}
          >
            {spacingOverview.description}
          </p>
        </div>

        {/* 概览指标卡片 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          {spacingOverview.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                backgroundColor: 'var(--color-spacing-surface)',
                padding: '20px 24px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span
                style={{
                  color: 'var(--color-spacing-text-muted)',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: 400,
                }}
              >
                {m.label}
              </span>
              <span
                style={{
                  color: 'var(--color-spacing-text)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 500,
                }}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 参数表 */}
      <section
        style={{
          marginTop: '24px',
        }}
      >
        {/* 表头 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 120px 120px 516px',
            gap: '16px',
            backgroundColor: 'var(--color-spacing-surface)',
            height: '54px',
            padding: '0 24px',
            alignItems: 'center',
          }}
        >
          <HeaderCell>间距示意</HeaderCell>
          <HeaderCell>间距值</HeaderCell>
          <HeaderCell>基础倍数</HeaderCell>
          <HeaderCell>使用场景</HeaderCell>
        </div>

        {/* 分组标题 */}
        <div
          style={{
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
          }}
        >
          <span
            style={{
              color: 'var(--color-spacing-accent)',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 500,
            }}
          >
            01  常用间距 · Spacing
          </span>
        </div>

        {/* 数据行 */}
        {spacingRows.map((row) => (
          <div key={row.px}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '240px 120px 120px 516px',
                gap: '16px',
                height: '96px',
                padding: '0 24px',
                alignItems: 'center',
              }}
            >
              {/* 间距示意（间距条 + 数值） */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                {/* 间距条容器 240×48 */}
                <div
                  style={{
                    width: '240px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '160px',
                      height: `${row.px}px`,
                      backgroundColor: 'var(--color-spacing-accent)',
                    }}
                  />
                </div>
              </div>
              {/* 间距值 */}
              <ValueCell>{row.px}px</ValueCell>
              {/* 基础倍数 */}
              <MutedCell>{row.multiplier}</MutedCell>
              {/* 使用场景 */}
              <MutedCell>{row.usage}</MutedCell>
            </div>
            {/* 分隔线 */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--color-spacing-divider)',
              }}
            />
          </div>
        ))}
      </section>

      {/* 使用说明 */}
      <section
        style={{
          marginTop: '24px',
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <span
          style={{
            color: 'var(--color-spacing-text)',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 500,
          }}
        >
          {spacingFooter.title}
        </span>
        <span
          style={{
            color: 'var(--color-spacing-text-muted)',
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: 400,
          }}
        >
          {spacingFooter.body}
        </span>
      </section>
    </div>
  );
}

/** 表头单元格 — 灰色 12px Medium */
function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: 'var(--color-spacing-text-muted)',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** 深色值单元格 — 14px Medium */
function ValueCell({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: 'var(--color-spacing-text)',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** 灰色说明单元格 — 14px Regular */
function MutedCell({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: 'var(--color-spacing-text-muted)',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: 400,
      }}
    >
      {children}
    </span>
  );
}
