import { Container } from '@/components/Container';
import { Hero } from '@/sections/Hero';
import { siteContent } from '@/content/site';

/** 首页，展示 Hero 区 + 各规范的快速导航卡片 */
export default function HomePage() {
  return (
    <main>
      <Hero />

      <Container className="pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.navGroups.flatMap((group) =>
            group.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group rounded-md border border-border bg-surface p-6 transition-colors duration-fast hover:border-primary hover:bg-surface-muted/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-12 uppercase tracking-wide text-primary">
                      {group.title}
                    </p>
                    <p className="mt-2 text-24 font-medium text-fg group-hover:text-primary transition-colors">
                      {item.label}
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="shrink-0 text-fg-subtle transition-transform duration-fast group-hover:translate-x-1 group-hover:text-primary"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            )),
          )}
        </div>
      </Container>
    </main>
  );
}
