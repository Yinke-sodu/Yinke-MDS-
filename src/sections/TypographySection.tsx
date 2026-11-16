import { typographyOverview, typeGroups } from '@/content/typography';

/** 字体规范表，1:1 复刻 Figma GEAK NAS DS_Mobile 设计稿 */
export function TypographySection() {
  return (
    <div style={{ padding: '56px 44px 64px', backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* 主标题区 */}
      <div className="mb-8">
        <h1
          style={{
            color: 'var(--color-typo-text)',
            fontSize: '36px',
            lineHeight: '54px',
            fontWeight: 500,
          }}
        >
          字体规范表
        </h1>
        <p
          className="mt-2"
          style={{
            color: 'var(--color-typo-text-muted)',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 400,
          }}
        >
          {typographyOverview.sourceNote}
        </p>
      </div>

      {/* 概览指标卡片组 — 3 张，间距 16px */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:gap-4">
        <OverviewCard
          label="原字体家族"
          value={typographyOverview.fontFamily}
        />
        <OverviewCard
          label="样式总数"
          value={typographyOverview.styleCount}
        />
        <OverviewCard
          label="原字重范围"
          value={typographyOverview.weightRange}
        />
      </div>

      {/* 样式参数表 — 精确复刻 Figma 列宽 */}
      <div>
        {/* 表头 — 浅灰背景，54px 高，垂直居中 */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: '420px 220px 140px 120px 1fr',
            gap: '16px',
            backgroundColor: 'var(--color-typo-surface)',
            height: '54px',
            padding: '0 24px',
          }}
        >
          <HeaderCell>替代字体预览</HeaderCell>
          <HeaderCell>原字体</HeaderCell>
          <HeaderCell>原字重</HeaderCell>
          <HeaderCell>字号</HeaderCell>
          <HeaderCell align="right">行高</HeaderCell>
        </div>

        {/* 分组 + 样式行 */}
        {typeGroups.map((group) => (
          <div key={group.index}>
            {/* 分组标题行 — 蓝色文字，72px 高，垂直居中 */}
            <div
              style={{
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
              }}
            >
              <p
                style={{
                  color: 'var(--color-typo-accent)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 500,
                }}
              >
                {group.index} &nbsp; {group.label} &nbsp;·&nbsp;{' '}
                {group.englishLabel}
              </p>
            </div>

            {/* 分隔线 */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--color-typo-divider)',
              }}
            />

            {/* 样式数据行 — 96px 高 */}
            {group.styles.map((style) => (
              <div key={style.name}>
                <div
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: '420px 220px 140px 120px 1fr',
                    gap: '16px',
                    height: '96px',
                    padding: '0 24px',
                  }}
                >
                  {/* 替代字体预览 — 使用精确字号、行高、字重 */}
                  <span
                    style={{
                      color: 'var(--color-typo-text)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: `${style.fontSize}px`,
                      lineHeight: `${style.lineHeight}px`,
                      fontWeight: fontWeightValue(style.fontWeight),
                    }}
                  >
                    {style.sample}
                  </span>

                  {/* 原字体 — 灰色 14px */}
                  <DataCell muted>{style.fontFamily}</DataCell>
                  {/* 原字重 — 灰色 14px */}
                  <DataCell muted>{style.fontWeight}</DataCell>
                  {/* 字号 — 深色 14px */}
                  <DataCell>{style.fontSize} px</DataCell>
                  {/* 行高 — 深色 14px，右对齐 */}
                  <DataCell align="right">{style.lineHeight} px</DataCell>
                </div>

                {/* 行间分隔线 */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--color-typo-divider)',
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 规范说明区 */}
      <div className="mt-12">
        <p
          style={{
            color: 'var(--color-typo-text)',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 500,
          }}
        >
          规范说明
        </p>
        <p
          className="mt-2"
          style={{
            color: 'var(--color-typo-text-muted)',
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: 400,
          }}
        >
          {typographyOverview.sourceNote}
        </p>
        <p
          className="mt-1"
          style={{
            color: 'var(--color-typo-text-muted)',
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: 400,
          }}
        >
          {typographyOverview.previewNote}
        </p>
      </div>
    </div>
  );
}

/** 概览指标卡片 — Figma 精确尺寸：480px 宽、92px 高、圆角 13px、padding 20/24px */
function OverviewCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex-1"
      style={{
        backgroundColor: 'var(--color-typo-surface)',
        borderRadius: 'var(--color-typo-radius)',
        padding: '20px 24px',
      }}
    >
      <p
        style={{
          color: 'var(--color-typo-text-muted)',
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: 400,
        }}
      >
        {label}
      </p>
      <p
        className="mt-[10px]"
        style={{
          color: 'var(--color-typo-text)',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/** 表头单元格 — 灰色 12px Medium，可选右对齐 */
function HeaderCell({
  children,
  align,
}: {
  children: React.ReactNode;
  align?: 'right';
}) {
  return (
    <span
      style={{
        color: 'var(--color-typo-text-muted)',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 500,
        textAlign: align,
        display: align ? 'block' : undefined,
      }}
    >
      {children}
    </span>
  );
}

/** 数据单元格 — 14px Regular，可选灰色和右对齐 */
function DataCell({
  children,
  muted,
  align,
}: {
  children: React.ReactNode;
  muted?: boolean;
  align?: 'right';
}) {
  return (
    <span
      style={{
        color: muted
          ? 'var(--color-typo-text-muted)'
          : 'var(--color-typo-text)',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: 400,
        textAlign: align,
        display: align ? 'block' : undefined,
      }}
    >
      {children}
    </span>
  );
}

/** Figma 字重英文名 → CSS font-weight 数值 */
function fontWeightValue(
  weight: 'Regular' | 'Medium' | 'Semibold',
): number {
  switch (weight) {
    case 'Regular':
      return 400;
    case 'Medium':
      return 500;
    case 'Semibold':
      return 600;
  }
}
