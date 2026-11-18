import {
  toastOverview,
  usagePrinciples,
  toastStatuses,
  timeRule,
  fontNote,
  wrapRule,
  ellipsisRule,
  longTextRows,
  longIconRows,
  widthNote,
  visualParams,
  sizeSamples,
  sizeNote1,
  sizeNote2,
  usageBoundary,
} from '@/content/toast';

/* ---------- Toast 核心组件（1:1 Figma） ---------- */

/** 图标 Toast — 72×36（2 倍放大展示），实际 36×18
 * 容器：r=8, bg=rgba(0,0,0,0.6), px=12 py=8
 * 图标：18×18, gap=4
 */
function IconToast({
  text,
  icon,
  doubleSize = true,
}: {
  text: string;
  icon: React.ReactNode;
  doubleSize?: boolean;
}) {
  const scale = doubleSize ? 2 : 1;
  const h = 36 * scale;
  const padX = 12 * scale;
  const padY = 8 * scale;
  const iconSize = 18 * scale;
  const gap = 4 * scale;
  const r = 8 * scale;
  const fontSize = 14 * scale;
  const lh = 20 * scale;

  return (
    <div
      style={{
        height: h,
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: r,
        padding: `${padY}px ${padX}px`,
        gap,
      }}
    >
      <div style={{ width: iconSize, height: iconSize, flexShrink: 0 }}>
        {icon}
      </div>
      <span
        style={{
          fontSize,
          fontWeight: 400,
          lineHeight: `${lh}px`,
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </div>
  );
}

/** 纯文本 Toast */
function TextToast({
  text,
  doubleSize = true,
  multiline = false,
}: {
  text: string;
  doubleSize?: boolean;
  multiline?: boolean;
}) {
  const scale = doubleSize ? 2 : 1;
  const padX = 12 * scale;
  const padY = 8 * scale;
  const r = 8 * scale;
  const fontSize = 14 * scale;
  const lh = 20 * scale;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: multiline ? 'center' : 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: r,
        padding: `${padY}px ${padX}px`,
        maxWidth: multiline ? 526 : undefined,
        width: multiline ? 'auto' : undefined,
      }}
    >
      <span
        style={{
          fontSize,
          fontWeight: 400,
          lineHeight: `${lh}px`,
          color: '#FFFFFF',
          whiteSpace: multiline ? 'pre-wrap' : 'nowrap',
          textAlign: multiline ? 'center' : 'left',
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ---------- 18×18 图标 ---------- */

function FailIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx={9} cy={9} r={7.5} stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SuccessIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx={9} cy={9} r={7.5} stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M5.5 9L8 11.5L12.5 7"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoadingIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx={9} cy={9} r={7.5} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <path
        d="M16.5 9A7.5 7.5 0 0 0 9 1.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function iconFor(kind: string, size: number) {
  switch (kind) {
    case 'fail': return <FailIcon size={size} />;
    case 'success': return <SuccessIcon size={size} />;
    case 'loading': return <LoadingIcon size={size} />;
    default: return null;
  }
}

/* ---------- 位置模拟 ---------- */

function StatusBar() {
  return (
    <div
      style={{
        width: '100%',
        height: 17,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 600, color: '#000000' }}>
        9:41
      </span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <div style={{ width: 16, height: 8, backgroundColor: '#121736' }} />
        <div style={{ width: 16, height: 8, backgroundColor: '#121736' }} />
        <div
          style={{
            width: 21,
            height: 9,
            border: '1px solid #121736',
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

function PositionMock() {
  return (
    <div
      style={{
        width: 315,
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5EA',
        borderRadius: 12,
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <StatusBar />
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: '#121736',
          lineHeight: '20px',
        }}
      >
        标准导航标题
      </span>

      <div
        style={{
          height: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextToast text="已添加到下载任务" />
      </div>

      <div
        style={{
          width: 134,
          height: 5,
          borderRadius: 3,
          backgroundColor: '#121736',
          alignSelf: 'center',
          opacity: 0.3,
        }}
      />
    </div>
  );
}

/* ---------- 章节标题 ---------- */

function ChapterTitle({ title, subtitle }: { title: string; subtitle?: string }) {
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
      {subtitle && (
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            lineHeight: '20px',
            color: '#5C647A',
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 13,
        fontWeight: 630,
        lineHeight: '20px',
        color: '#121736',
      }}
    >
      {children}
    </span>
  );
}

/* ---------- 示例行（状态） ---------- */

function StatusExampleRow({
  kind,
  text,
  title,
  desc,
  size,
}: {
  kind: 'fail' | 'success' | 'loading' | 'text-only';
  text: string;
  title: string;
  desc: string;
  size: string;
}) {
  const icon = kind === 'text-only' ? null : iconFor(kind, 36);

  return (
    <div
      style={{
        backgroundColor: '#F4F4F7',
        borderRadius: 20,
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <div style={{ display: 'flex', flexShrink: 0 }}>
        {icon ? (
          <IconToast text={text} icon={icon} />
        ) : (
          <TextToast text={text} />
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 630,
            lineHeight: '22px',
            color: '#121736',
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            lineHeight: '20px',
            color: '#5C647A',
          }}
        >
          {desc}
        </span>
      </div>

      <span
        style={{
          fontSize: 13,
          fontWeight: 400,
          lineHeight: '20px',
          color: '#5D5C61',
          flexShrink: 0,
        }}
      >
        {size}
      </span>
    </div>
  );
}

/* ---------- 参数表 ---------- */

function ParamTable({ rows }: { rows: { name: string; value: string; note: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          <span
            style={{
              width: 300,
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '20px',
              color: '#121736',
            }}
          >
            {r.name}
          </span>
          <span
            style={{
              width: 350,
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '20px',
              color: '#121736',
            }}
          >
            {r.value}
          </span>
          <span
            style={{
              flex: 1,
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#5D5C61',
            }}
          >
            {r.note}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- 主 Section ---------- */

export function ToastSection() {
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
      {/* 文档标题 */}
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
          {toastOverview.title}
        </h1>
        <p
          style={{
            color: '#5C647A',
            fontSize: 14,
            lineHeight: '22px',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {toastOverview.description}
        </p>
      </div>

      {/* ================ 01 · 单行结构（常用） ================ */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ChapterTitle title="01 · 单行结构（常用）" />

        {/* 使用原则 */}
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
          {usagePrinciples.map((p, i) => (
            <span
              key={i}
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '22px',
                color: '#5C647A',
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* 位置与状态 — 双栏 */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
          {/* 左栏：位置展示 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              width: 355,
              flexShrink: 0,
            }}
          >
            <SectionLabel>位置展示</SectionLabel>
            <div
              style={{
                backgroundColor: '#F4F4F7',
                border: '1px solid #DDE2EC',
                borderRadius: 20,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <PositionMock />
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '20px',
                color: '#5D5C61',
              }}
            >
              页面居中，浮于内容之上。
            </span>
          </div>

          {/* 右栏：状态与示例 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1,
            }}
          >
            <SectionLabel>状态与示例</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {toastStatuses.map((s, i) => (
                <StatusExampleRow
                  key={i}
                  kind={s.kind}
                  text={s.text}
                  title={s.title}
                  desc={s.desc}
                  size={s.size}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 时间规则卡 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5C647A',
            }}
          >
            {timeRule}
          </span>
        </div>
      </section>

      {/* ================ 02 · 长文案处理 ================ */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ChapterTitle
          title="02 · 长文案处理"
          subtitle="文案建议 18 字以内；超长时，纯文本折行，带图标单行省略。"
        />

        {/* 字体限定提示 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5D5C61',
            }}
          >
            {fontNote}
          </span>
        </div>

        {/* 纯文本规则 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionLabel>{wrapRule.title}</SectionLabel>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '20px',
                color: '#5C647A',
              }}
            >
              {wrapRule.desc}
            </span>
          </div>

          {longTextRows.map((row, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F4F4F7',
                borderRadius: 20,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 40,
              }}
            >
              <TextToast text={row.text} multiline={row.title.includes('双行')} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#121736',
                  flex: 1,
                }}
              >
                {row.title}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: '#5D5C61',
                  flexShrink: 0,
                }}
              >
                {row.size}
              </span>
            </div>
          ))}
        </div>

        {/* 图标规则 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionLabel>{ellipsisRule.title}</SectionLabel>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '20px',
                color: '#5C647A',
              }}
            >
              {ellipsisRule.desc}
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '20px',
                color: '#5D5C61',
              }}
            >
              {ellipsisRule.note}
            </span>
          </div>

          {longIconRows.map((row, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F4F4F7',
                borderRadius: 20,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 40,
              }}
            >
              <IconToast
                text="文案建议控制在 18 字以内超长单行省略示例"
                icon={iconFor(row.kind, 36)!}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#121736',
                  flex: 1,
                }}
              >
                {row.title}
              </span>
            </div>
          ))}
        </div>

        {/* 字数限定卡 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5C647A',
            }}
          >
            {widthNote}
          </span>
        </div>
      </section>

      {/* ================ 03 · 尺寸与视觉参数 ================ */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ChapterTitle
          title="03 · 尺寸与视觉参数"
          subtitle="选中示例实测；尺寸单位 px。"
        />

        <SectionLabel>视觉与布局</SectionLabel>
        <ParamTable rows={visualParams} />

        <SectionLabel>样例实际尺寸</SectionLabel>
        <ParamTable rows={sizeSamples} />

        {/* 尺寸说明 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5C647A',
            }}
          >
            {sizeNote1}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5D5C61',
            }}
          >
            {sizeNote2}
          </span>
        </div>
      </section>

      {/* ================ 04 · 使用边界 ================ */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ChapterTitle title="04 · 使用边界" />
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22px',
              color: '#5C647A',
            }}
          >
            {usageBoundary}
          </span>
        </div>
      </section>
    </div>
  );
}
