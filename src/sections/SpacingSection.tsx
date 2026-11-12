import { Section } from '@/components/Section';
import { siteContent } from '@/content/site';
import { spaceScale } from '@/content/spacing';
import { cssVar } from '@/lib/tokens';

/** 间距区块，用刻度条直观呈现每个间距 token */
export function SpacingSection() {
  const copy = siteContent.sections.spacing;

  return (
    <Section
      id="spacing"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-x-12 md:grid-cols-2">
        {spaceScale.map((space) => (
          <div key={space.token} className="border-b border-border py-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-12 text-fg">{space.token}</span>
              <span className="font-mono text-12 text-fg-muted">
                {space.value}
              </span>
            </div>
            <div className="mt-3 flex h-2 w-full items-center rounded-full bg-surface-strong">
              <span
                className="block h-2 rounded-full bg-primary"
                style={{ width: cssVar(space.token) }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
