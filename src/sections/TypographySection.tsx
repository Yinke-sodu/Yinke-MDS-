import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { siteContent } from '@/content/site';
import {
  fontFamilyTokens,
  typeScale,
  weightTokens,
} from '@/content/typography';
import { cssVar } from '@/lib/tokens';

/** 字体区块，展示字体家族、字重与完整字号阶梯 */
export function TypographySection() {
  const copy = siteContent.sections.typography;

  return (
    <Section
      id="typography"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {fontFamilyTokens.map((font) => (
          <Card key={font.token}>
            <p
              className="text-24 text-fg"
              style={{ fontFamily: cssVar(font.token) }}
            >
              {font.sample}
            </p>
            <div className="mt-6 flex items-start justify-between gap-4 border-t border-border pt-4">
              <div>
                <p className="text-14 font-medium text-fg">{font.name}</p>
                <p className="mt-1 text-12 text-fg-muted">
                  {font.description}
                </p>
              </div>
              <span className="shrink-0 font-mono text-12 text-fg-subtle">
                {font.token}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {weightTokens.map((weight) => (
          <span
            key={weight.token}
            className="inline-flex items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 text-15 text-fg"
            style={{ fontWeight: cssVar(weight.token) }}
          >
            {weight.name}
            <span className="font-mono text-12 font-normal text-fg-muted">
              {weight.value}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-10">
        {typeScale.map((item) => (
          <div
            key={item.token}
            className="flex flex-col gap-2 border-b border-border py-4 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <p
              className="text-fg tracking-tight"
              style={{
                fontSize: cssVar(item.token),
                lineHeight: cssVar(item.lineHeightToken),
              }}
            >
              {item.sample}
            </p>
            <span className="shrink-0 font-mono text-12 text-fg-muted">
              {item.token} · {item.size} / {item.lineHeight}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
