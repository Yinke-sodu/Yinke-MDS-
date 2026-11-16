import { Container } from '@/components/Container';
import { siteContent } from '@/content/site';

/** 页脚，展示系统宣言与版权信息，固定高度 56px */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" style={{ height: '56px' }}>
      <Container className="flex h-full items-center justify-between">
        <p className="text-14 text-fg-muted">{siteContent.footer.note}</p>
        <p className="font-mono text-12 text-fg-subtle">
          {siteContent.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
