'use client';

import { usePathname } from 'next/navigation';
import { Badge } from '@/components/Badge';
import { siteContent } from '@/content/site';

/** 顶部栏，提供品牌标识、版本信息与移动端横向导航 */
export function Header() {
  const pathname = usePathname();
  const navItems = siteContent.navGroups.flatMap((group) => group.items);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface">
      <div className="flex h-14 items-center gap-3 px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-16 font-semibold text-on-primary">
            Y
          </span>
          <span className="text-16 font-medium text-fg">
            {siteContent.name}
          </span>
        </a>
        <Badge tone="neutral">{siteContent.version}</Badge>
      </div>

      <nav
        aria-label="移动端导航"
        className="no-scrollbar flex gap-1 overflow-x-auto border-t border-border-subtle px-4 py-2 lg:hidden"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`shrink-0 rounded-sm px-3 py-2 text-14 transition-colors duration-fast ${
                isActive
                  ? 'bg-surface-muted font-medium text-primary'
                  : 'text-fg-muted hover:bg-surface-muted hover:text-fg'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
