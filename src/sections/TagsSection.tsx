import {
  iconTagRow,
  promoTags,
  softTagRows,
  solidTagRow,
  tagOverview,
  type TagRow,
} from '@/content/tags';

/** 标签与标识规范页 — 1:1 复刻 Figma 870:8639 */
export function TagsSection() {
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
          {tagOverview.title}
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
          {tagOverview.description}
        </p>
      </div>

      {/* 优惠与已选标签 */}
      <TagGroup
        title="优惠与已选标签"
        count="3 项"
        subtitle={'保留 Save 20%、"已选"原文与异形圆角'}
      >
        <TagTable rows={promoTags} renderExample={renderExample} />
      </TagGroup>

      {/* 文字标签 */}
      <TagGroup
        title="文字标签"
        count="6 项"
        subtitle="前 5 项为 Component 19 变体；实底标签独立对照，颜色语义未定义"
      >
        <TagTable
          rows={[...softTagRows, solidTagRow]}
          renderExample={renderExample}
        />
      </TagGroup>

      {/* 图形标签 */}
      <TagGroup title="图形标签" count="1 项" subtitle="原名称：标签+气泡红点/券标/icon_返现">
        <TagTable rows={[iconTagRow]} renderExample={renderExample} />
      </TagGroup>
    </div>
  );
}

/** 分组标题 + 表格容器 */
function TagGroup({
  title,
  count,
  subtitle,
  children,
}: {
  title: string;
  count: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#121736', fontSize: '28px', lineHeight: '35px', fontWeight: 330 }}>
            {title}
          </span>
          <span style={{ color: '#5C647A', fontSize: '15px', lineHeight: '24px', fontWeight: 330 }}>
            {count}
          </span>
        </div>
        <span style={{ color: '#5C647A', fontSize: '15px', lineHeight: '24px', fontWeight: 330 }}>
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
}

/** 控件说明表：灰底 20px 圆角 + 5 列表头 + 行 */
function TagTable({
  rows,
  renderExample,
}: {
  rows: TagRow[];
  renderExample: (key: string) => React.ReactNode;
}) {
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
      {/* 表头 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '128px 200px 120px 1fr 1fr',
          alignItems: 'center',
          gap: '20px',
          padding: '0 24px',
          height: '42px',
          backgroundColor: '#F4F4F7',
        }}
      >
        {['原样示例 · 1:1', '说明名称 / 来源', '实际尺寸（px）', '外观 / 已知状态', '用途说明（建议）'].map(
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

      {/* 数据行 */}
      {rows.map((row) => (
        <div
          key={row.example}
          style={{
            display: 'grid',
            gridTemplateColumns: '128px 200px 120px 1fr 1fr',
            alignItems: 'center',
            gap: '20px',
            padding: '16px 24px',
            borderTop: '1px solid #E5E5EA',
          }}
        >
          {/* 原样示例 */}
          <div style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
            {renderExample(row.example)}
          </div>

          {/* 名称 + 来源 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#121736', fontSize: '18px', lineHeight: '28.8px', fontWeight: 330 }}>
              {row.name}
            </span>
            <span style={{ color: '#5C647A', fontSize: '15px', lineHeight: '24px', fontWeight: 330 }}>
              {row.source}
            </span>
          </div>

          {/* 尺寸 */}
          <span style={{ color: '#121736', fontSize: '15px', lineHeight: '24px', fontWeight: 330 }}>
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
          <span style={{ color: '#121736', fontSize: '15px', lineHeight: '24px', fontWeight: 330 }}>
            {row.usage}
          </span>
        </div>
      ))}
    </div>
  );
}

/** 根据 key 渲染不同的标签预览组件（1:1 还原 Figma 实际像素和颜色） */
function renderExample(key: string): React.ReactNode {
  switch (key) {
    case 'promo-red':
      return (
        <div
          style={{
            width: '78px',
            height: '22px',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#000000',
            borderRadius: '4px 16px 16px 16px', // 左下直角，其余圆角
            color: '#FFFFFF',
            fontSize: '12px',
            lineHeight: '14.5px',
            fontWeight: 400,
            textAlign: 'center',
          }}
        >
          Save 20%
        </div>
      );

    case 'promo-yellow':
      return (
        <div
          style={{
            width: '82px',
            height: '22px',
            padding: '0 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#FFDB00',
            borderRadius: '4px 16px 16px 16px', // 左下直角，其余圆角
            color: '#83381E',
            fontSize: '12px',
            lineHeight: '14.5px',
            fontWeight: 400,
            textAlign: 'center',
          }}
        >
          Save 20%
        </div>
      );

    case 'solid-green':
      return (
        <div
          style={{
            width: '48px',
            height: '16px',
            padding: '0 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00B85C',
            borderRadius: '2px',
            color: '#FFFFFF',
            fontSize: '10px',
            lineHeight: '10px',
            fontWeight: 500,
          }}
        >
          标签文案
        </div>
      );

    case 'icon-refund':
      return (
        <div
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: '#FF7533',
            border: '1px solid #FF7E40',
            borderRadius: '1.88px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '10.35px',
            lineHeight: '13.72px',
            fontWeight: 330,
          }}
        >
          返
        </div>
      );

    default:
      // soft-yellow / soft-red / soft-green / soft-blue / soft-gray
      // 软底标签：背景 10% 透明度，文字正常色
      const variantMap: Record<string, { bg: string; text: string }> = {
        'soft-yellow': { bg: '#F5B84E', text: '#F5B84E' },
        'soft-red': { bg: '#F35D5D', text: '#F35D5D' },
        'soft-green': { bg: '#34C26A', text: '#34C26A' },
        'soft-blue': { bg: '#3379FF', text: '#3379FF' },
        'soft-gray': { bg: '#A4A3AA', text: '#5D5C61' },
      };
      const c = variantMap[key];
      if (!c) return null;

      // 把 hex 转 rgba，加 10% 透明度用于背景
      const hex = c.bg;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const bg10 = `rgba(${r},${g},${b},0.1)`;

      return (
        <div
          style={{
            width: '48px',
            height: '16px',
            borderRadius: '2px',
            backgroundColor: bg10,
            border: `1px solid ${c.bg}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: c.text,
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: 400,
          }}
        >
          标签文案
        </div>
      );
  }
}
