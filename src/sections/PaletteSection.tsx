'use client';

import { useState } from 'react';
import { colorFooter, colorGroups, colorOverview } from '@/content/colors';

/** 颜色规范表，1:1 复刻 Figma GEAK NAS DS_Mobile 设计稿 852:2877 */
export function PaletteSection() {
  const [toast, setToast] = useState<string | null>(null);

  /** 点击数据行复制 CSS 色值到剪贴板 */
  const copyColor = async (row: { hex: string; swatchColor: string }) => {
    const value = row.swatchColor.startsWith('rgba')
      ? row.swatchColor
      : row.hex;
    try {
      await navigator.clipboard.writeText(value);
      setToast(`已复制 ${value}`);
      setTimeout(() => setToast(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div style={{ padding: '56px 44px 64px', backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* 复制成功提示 */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#181819',
            color: '#FFFFFF',
            fontSize: '13px',
            lineHeight: '20px',
            padding: '8px 16px',
            borderRadius: '8px',
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          {toast}
        </div>
      )}

      {/* 颜色概览 */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              color: '#161C26',
              fontSize: '36px',
              lineHeight: '54px',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {colorOverview.title}
          </h1>
          <p
            style={{
              color: '#5D5C61',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400,
              margin: 0,
            }}
          >
            {colorOverview.description}
          </p>
        </div>

        {/* 分组概览卡片 */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {colorGroups.map((group) => (
            <div
              key={group.index}
              style={{
                flex: 1,
                backgroundColor: '#F4F4F7',
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    color: '#181819',
                    fontSize: '14px',
                    lineHeight: '21px',
                    fontWeight: 500,
                  }}
                >
                  {group.title}
                </span>
                <span
                  style={{
                    color: '#181819',
                    fontSize: '24px',
                    lineHeight: '36px',
                    fontWeight: 500,
                  }}
                >
                  {group.rows.length.toString().padStart(2, '0')}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                  height: '16px',
                }}
              >
                {group.overviewSwatches.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      backgroundColor: c,
                      borderRadius: '3px',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 颜色样式表 */}
      <section style={{ marginTop: '56px' }}>
        {/* 表头 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '223px 223px 223px 223px 48px',
            gap: '16px',
            backgroundColor: '#F4F4F7',
            height: '54px',
            padding: '0 24px',
            alignItems: 'center',
          }}
        >
          <HeaderCell>颜色预览</HeaderCell>
          <HeaderCell>样式名称</HeaderCell>
          <HeaderCell>HEX</HeaderCell>
          <HeaderCell>RGB</HeaderCell>
          <HeaderCell>不透明度</HeaderCell>
        </div>

        {/* 分组 + 数据行 */}
        {colorGroups.map((group) => (
          <div key={group.index}>
            {/* 分组标题行 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '75px',
                padding: '0 24px',
              }}
            >
              <span
                style={{
                  color: '#181819',
                  fontSize: '18px',
                  lineHeight: '27px',
                  fontWeight: 500,
                }}
              >
                {group.index}  {group.title}
              </span>
              <span
                style={{
                  color: '#5D5C61',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: 400,
                }}
              >
                {group.countLabel}
              </span>
            </div>

            {/* 分隔线 */}
            <Divider />

            {/* 数据行 */}
            {group.rows.map((row) => (
              <div key={row.name}>
                <div
                  onClick={() => copyColor(row)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '223px 223px 223px 223px 48px',
                    gap: '16px',
                    height: '80px',
                    padding: '0 24px',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F9F9FB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {/* 颜色预览：128×40 色块 */}
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        width: '128px',
                        height: '40px',
                        backgroundColor: row.swatchColor,
                        borderRadius: '4px',
                        border: row.swatchColor === '#FFFFFF' ? '1px solid #E6E6EB' : undefined,
                      }}
                    />
                  </div>
                  {/* 样式名称 */}
                  <span style={{ color: '#181819', fontSize: '14px', lineHeight: '21px', fontWeight: 500 }}>
                    {row.name}
                  </span>
                  {/* HEX */}
                  <span style={{ color: '#181819', fontSize: '14px', lineHeight: '21px', fontWeight: 400, fontFamily: 'ui-monospace, monospace' }}>
                    {row.hex}
                  </span>
                  {/* RGB */}
                  <span style={{ color: '#5D5C61', fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
                    {row.rgb}
                  </span>
                  {/* 不透明度 */}
                  <span style={{ color: '#5D5C61', fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
                    {row.opacity}
                  </span>
                </div>
                <Divider />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* 规范说明 */}
      <section
        style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <span
          style={{
            color: '#181819',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 500,
          }}
        >
          {colorFooter.title}
        </span>
        {colorFooter.lines.map((line, i) => (
          <span
            key={i}
            style={{
              color: '#5D5C61',
              fontSize: i === 2 ? '12px' : '14px',
              lineHeight: i === 2 ? '18px' : '21px',
              fontWeight: 400,
            }}
          >
            {line}
          </span>
        ))}
      </section>
    </div>
  );
}

/** 表头单元格 — 灰色 12px Medium */
function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: '#5D5C61',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** 表格分隔线 — 1px #F4F4F7 */
function Divider() {
  return (
    <div
      style={{
        height: '1px',
        backgroundColor: '#F4F4F7',
        borderRadius: '4px',
      }}
    />
  );
}
