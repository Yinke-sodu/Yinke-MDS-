import { Badge } from '@/components/Badge';
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { brandSwatches } from '@/content/colors';
import { siteContent } from '@/content/site';
import { spaceScale } from '@/content/spacing';
import { cssVar } from '@/lib/tokens';

/** 首屏区块，概括设计系统并预览核心 token */
export function Hero() {
  const { hero, preview } = siteContent;

  return (
    <section id="top" className="pb-16 pt-12">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_var(--layout-hero-aside-width)]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-sm border border-border bg-surface-muted px-3 py-1 font-mono text-12 uppercase tracking-wide text-fg-muted">
                {hero.eyebrow}
              </span>
              <Badge tone="neutral">{hero.badge}</Badge>
            </div>

            <h1 className="mt-6 text-40 font-semibold tracking-tight text-fg md:text-52">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-18 text-fg-muted">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#palette">{hero.primaryAction}</ButtonLink>
            </div>
          </div>

          <Card>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-12 text-fg-subtle">
                {hero.status.label}
              </span>
              <span className="inline-flex items-center gap-2 text-12 font-medium text-success">
                <span
                  className="h-2 w-2 rounded-full bg-success-base"
                  aria-hidden
                />
                {hero.status.value}
              </span>
            </div>

            <dl className="mt-6 flex flex-col gap-3 border-t border-border pt-4">
              {hero.status.meta.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4"
                >
                  <dt className="text-14 text-fg-muted">{item.label}</dt>
                  <dd className="text-14 font-medium text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        <div className="mt-10 rounded-md border border-border bg-surface-muted p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-12 text-fg-muted">
              {preview.label}
            </span>
            <Badge tone="success">{preview.status}</Badge>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-12 text-fg-subtle">
                {preview.colorLabel}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {brandSwatches.map((color) => (
                  <span
                    key={color.token}
                    title={color.name}
                    className="h-8 rounded-sm border border-border-subtle"
                    style={{ backgroundColor: cssVar(color.token) }}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-12 text-fg-subtle">
                {preview.typeLabel}
              </p>
              <p
                className="mt-2 text-fg"
                style={{
                  fontSize: cssVar(preview.typeToken),
                  fontWeight: cssVar(preview.typeWeightToken),
                }}
              >
                {preview.typeSample}
              </p>
              <p className="mt-1 font-mono text-12 text-fg-muted">
                {preview.typeToken}
              </p>
            </div>

            <div>
              <p className="font-mono text-12 text-fg-subtle">
                {preview.spaceLabel}
              </p>
              <div className="mt-4 flex h-8 items-end gap-2">
                {spaceScale.map((space) => (
                  <span
                    key={space.token}
                    className="h-2 rounded-full bg-primary"
                    style={{ width: cssVar(space.token) }}
                  />
                ))}
              </div>
              <p className="mt-1 font-mono text-12 text-fg-muted">
                {spaceScale.map((space) => space.value).join(' / ')}
              </p>
            </div>
          </div>

          <p className="mt-6 border-t border-border pt-4 font-mono text-12 text-fg-muted">
            {preview.footerNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
