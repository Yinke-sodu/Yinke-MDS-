import {
  switchOverview,
  switchInstances,
  switchFacts,
  type SwitchState,
} from '@/content/switch';

/** 开关控件（纯视觉） */
function Switch({
  width,
  height,
  state,
}: {
  width: number;
  height: number;
  state: SwitchState;
}) {
  const thumbSize = width <= 32 ? 16 : 20;
  const thumbLeft = state === 'on' ? (width <= 32 ? 14 : 18) : 2;
  const trackColor =
    state === 'on' ? '#3379FF' : 'rgba(23, 23, 25, 0.1)';

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        borderRadius: '999px',
        backgroundColor: trackColor,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: `${thumbSize}px`,
          height: `${thumbSize}px`,
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: `${thumbLeft}px`,
        }}
      />
    </div>
  );
}

function MultiLineText({
  lines,
  fontSize,
  lineHeight,
  fontWeight,
  color,
}: {
  lines: string[];
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  color: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ color, fontSize, lineHeight, fontWeight }}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

function SwitchTable({
  group,
  rows,
}: {
  group: string;
  rows: typeof switchInstances;
}) {
  const COLS = ['220px', '280px', '180px', '600px', '384px'];
  const GAP = '20px';

  const headerCells = [
    '原样示例 · 1:1',
    '说明名称 · 来源',
    '实际尺寸（px）',
    '外观 · 已知状态',
    '用途说明 · 建议',
  ];

  // 缩小后的字号（Figma 宽度 1792 → 实际 580，约 1/3）
  const FS_HEADER = '13px';
  const LH_HEADER = '18px';
  const FS_CELL = '15px';
  const LH_CELL_MULTI = '22px';
  const LH_CELL_SINGLE = '20px';

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <span
        style={{
          color: '#121736',
          fontSize: '20px',
          lineHeight: '26px',
          fontWeight: 630,
        }}
      >
        {group}
      </span>

      <div
        style={{
          backgroundColor: '#F4F4F7',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* 表头 */}
        <div
          style={{
            height: '40px',
            padding: '0 24px',
            display: 'flex',
            gap: GAP,
            alignItems: 'center',
          }}
        >
          {headerCells.map((h, i) => (
            <div key={i} style={{ width: COLS[i], flexShrink: 0 }}>
              <span
                style={{
                  color: '#5C647A',
                  fontSize: FS_HEADER,
                  lineHeight: LH_HEADER,
                  fontWeight: 400,
                }}
              >
                {h}
              </span>
            </div>
          ))}
        </div>

        {/* 数据行 */}
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? 'none' : '1px solid #E5E5EA',
              height: '80px',
              padding: '0 24px',
              display: 'flex',
              gap: GAP,
              alignItems: 'center',
            }}
          >
            {/* 列 0：原样示例 */}
            <div
              style={{
                width: COLS[0],
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Switch
                width={row.width}
                height={row.height}
                state={row.state}
              />
            </div>

            {/* 列 1：说明名称 */}
            <div style={{ width: COLS[1], flexShrink: 0 }}>
              <MultiLineText
                lines={[row.name, `Component ${row.width === 40 ? '15' : '14'}`]}
                fontSize={FS_CELL}
                lineHeight={LH_CELL_MULTI}
                fontWeight={400}
                color="#121736"
              />
            </div>

            {/* 列 2：实际尺寸 */}
            <div style={{ width: COLS[2], flexShrink: 0 }}>
              <span
                style={{
                  color: '#121736',
                  fontSize: FS_CELL,
                  lineHeight: LH_CELL_SINGLE,
                  fontWeight: 400,
                }}
              >
                {row.sizeLabel}
              </span>
            </div>

            {/* 列 3：外观描述 */}
            <div style={{ width: COLS[3], flexShrink: 0 }}>
              <MultiLineText
                lines={row.appearance.split('\n')}
                fontSize={FS_CELL}
                lineHeight={LH_CELL_MULTI}
                fontWeight={400}
                color="#121736"
              />
            </div>

            {/* 列 4：用途说明 */}
            <div style={{ width: COLS[4], flexShrink: 0 }}>
              <span
                style={{
                  color: '#121736',
                  fontSize: FS_CELL,
                  lineHeight: LH_CELL_SINGLE,
                  fontWeight: 400,
                }}
              >
                {row.usage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SwitchSection() {
  const smallRows = switchInstances.filter(
    (r) => r.group === '小尺寸 · 32 × 20',
  );
  const standardRows = switchInstances.filter(
    (r) => r.group === '标准尺寸 · 40 × 24',
  );

  return (
    <div
      style={{
        padding: '56px 44px 88px',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      {/* 文档标题区 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1
          style={{
            color: '#121736',
            fontSize: '32px',
            lineHeight: '44px',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {switchOverview.title}
        </h1>
        <p
          style={{
            color: '#5C647A',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {switchOverview.description}
        </p>
      </div>

      {/* 小尺寸表格 */}
      <SwitchTable group="小尺寸 · 32 × 20" rows={smallRows} />

      {/* 标准尺寸表格 */}
      <SwitchTable group="标准尺寸 · 40 × 24" rows={standardRows} />

      {/* 底部共用视觉事实 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p
          style={{
            color: '#121736',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {switchFacts.main}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p
            style={{
              color: '#121736',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 400,
              margin: 0,
            }}
          >
            {switchFacts.sampleScope}
          </p>
          <p
            style={{
              color: '#5C647A',
              fontSize: '13px',
              lineHeight: '20px',
              fontWeight: 400,
              margin: 0,
            }}
          >
            {switchFacts.limitation}
          </p>
        </div>
      </div>
    </div>
  );
}
