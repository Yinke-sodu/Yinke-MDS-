import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { radiusTokens, shadowTokens } from '@/content/shape';
import { siteContent } from '@/content/site';
import { cssVar } from '@/lib/tokens';

/** 形状区块，展示圆角与阴影 token 的实际效果 */
export function ShapeSection() {
  const copy = siteContent.sections.shape;

  return (
    <Section
      id="shape"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {radiusTokens.map((radius) => (
          <Card key={radius.token} className="flex flex-col gap-3">
            <span
              className="h-16 w-16 border border-border-strong bg-surface-muted"
              style={{ borderRadius: cssVar(radius.token) }}
            />
            <span className="text-14 font-medium text-fg">{radius.name}</span>
            <span className="text-12 text-fg-muted">{radius.description}</span>
            <span className="font-mono text-12 text-fg-subtle">
              {radius.token} · {radius.value}
            </span>
          </Card>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {shadowTokens.map((shadow) => (
          <div
            key={shadow.token}
            className="rounded-md border border-border bg-surface p-6"
            style={{ boxShadow: cssVar(shadow.token) }}
          >
            <p className="text-15 font-semibold text-fg">{shadow.name}</p>
            <p className="mt-1 font-mono text-12 text-fg-muted">
              {shadow.token}
            </p>
            <p className="mt-2 text-12 text-fg-subtle">
              {shadow.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
