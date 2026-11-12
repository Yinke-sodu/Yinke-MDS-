'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

/** 侧边导航，按全局样式与组件分组，可折叠 */
export function Sidebar() {
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([]);

  const toggleGroup = (title: string) => {
    setCollapsedGroups((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  return (
    <aside className="sidebar-shell hidden w-sidebar shrink-0 overflow-y-auto border-r border-border-subtle bg-surface lg:block">
      <nav className="flex flex-col gap-1 p-3" aria-label="设计规范导航">
        {siteContent.navGroups.map((group) => {
          const isOpen = !collapsedGroups.includes(group.title);

          return (
            <div key={group.title} className="flex flex-col">
              <button
                type="button"
                onClick={() => toggleGroup(group.title)}
                aria-expanded={isOpen}
                className="flex h-10 items-center justify-between gap-2 rounded-sm px-3 text-14 text-fg transition-colors duration-fast hover:bg-surface-muted"
              >
                <span>{group.title}</span>
                <Chevron open={isOpen} />
              </button>

              {isOpen ? (
                <div className="flex flex-col">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex h-10 items-center rounded-sm pl-8 pr-3 text-14 text-fg transition-colors duration-fast hover:bg-surface-muted"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
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
      className={`shrink-0 text-fg transition-transform duration-fast ${open ? 'rotate-180' : ''}`}
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
