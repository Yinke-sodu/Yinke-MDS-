'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteContent } from '@/content/site';

/** 侧边导航，严格按 Figma 806:2004 实现：260px 宽、40px 项高、选中态显示英文 sub-label */
export function Sidebar() {
  const pathname = usePathname();
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([]);
  const [hoverKey, setHoverKey] = useState<string | null>(null);

  const toggleGroup = (title: string) => {
    setCollapsedGroups((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  return (
    <aside
      style={{
        width: '260px',
        flexShrink: 0,
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E5E5E5',
        padding: '68px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        overflowY: 'auto',
      }}
    >
      {siteContent.navGroups.map((group) => {
        const isOpen = !collapsedGroups.includes(group.title);

        return (
          <div key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* 分组标题 */}
            <button
              type="button"
              onClick={() => toggleGroup(group.title)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '12px',
                paddingRight: '9px',
                gap: '0px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 400,
                color: '#181819',
              }}
            >
              <span>{group.title}</span>
              <Chevron open={isOpen} />
            </button>

            {/* 分组内导航项 */}
            {isOpen && group.items.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  const isHover = hoverKey === item.href;
                  const showEn = isActive || isHover;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      onMouseEnter={() => setHoverKey(item.href)}
                      onMouseLeave={() => setHoverKey(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '40px',
                        paddingLeft: '32px',
                        paddingRight: '9px',
                        gap: '0px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 400,
                        backgroundColor: isActive ? '#F4F4F7' : 'transparent',
                        borderRadius: isActive ? '8px' : '0',
                        color: '#181819',
                        transition: 'background-color 150ms, border-radius 150ms',
                      }}
                      onMouseOver={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = '#F9F9FB';
                          (e.currentTarget as HTMLElement).style.borderRadius = '8px';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                          (e.currentTarget as HTMLElement).style.borderRadius = '0';
                        }
                      }}
                    >
                      {item.enLabel && showEn ? (
                        <>
                          <span>{item.label}</span>
                          <span style={{ color: '#8E8E93' }}>{` ${item.enLabel}`}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}

interface ChevronProps {
  open: boolean;
}

/** 分组展开状态的箭头图标 */
function Chevron({ open }: ChevronProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 150ms',
        flexShrink: 0,
      }}
    >
      <path
        d="M3.75 5.5 7.5 9.25 11.25 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
