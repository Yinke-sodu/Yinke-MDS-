import { Container } from '@/components/Container';
import { siteContent } from '@/content/site';

/** 页脚，展示系统宣言与版权信息 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-2 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-14 text-fg-muted">{siteContent.footer.note}</p>
        <p className="font-mono text-12 text-fg-subtle">
          {siteContent.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
