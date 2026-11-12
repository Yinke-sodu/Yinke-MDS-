import { ColorValueCell } from '@/components/ColorValueCell';
import { Section } from '@/components/Section';
import { colorVariables } from '@/content/colors';
import { siteContent } from '@/content/site';

/** 颜色区块，按设计稿展示颜色变量在两种模式下的取值 */
export function PaletteSection() {
  const copy = siteContent.sections.palette;

  return (
    <Section
      id="palette"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="overflow-x-auto rounded-md border border-border bg-surface">
        <table
          aria-label={copy.title}
          className="w-full min-w-[40rem] border-collapse text-left"
        >
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-12 font-medium uppercase tracking-wide text-fg-subtle">
                {copy.columns.name}
              </th>
              <th className="px-4 py-3 text-12 font-medium uppercase tracking-wide text-fg-subtle">
                {copy.columns.type}
              </th>
              <th className="px-4 py-3 text-12 font-medium uppercase tracking-wide text-fg-subtle">
                {copy.columns.mediaLib}
              </th>
              <th className="px-4 py-3 text-12 font-medium uppercase tracking-wide text-fg-subtle">
                {copy.columns.geakNas}
              </th>
            </tr>
          </thead>
          <tbody>
            {colorVariables.map((variable) => (
              <tr
                key={variable.name}
                className="border-t border-border-subtle"
              >
                <td className="px-4 py-4 text-14 text-fg">
                  {variable.name}
                </td>
                <td className="px-4 py-4 text-12 text-fg-subtle">
                  {variable.type}
                </td>
                <td className="p-0">
                  <ColorValueCell
                    value={variable.mediaLib}
                    copyActionLabel={copy.copyActionLabel}
                    copiedLabel={copy.copiedLabel}
                  />
                </td>
                <td className="p-0">
                  <ColorValueCell
                    value={variable.geakNas}
                    copyActionLabel={copy.copyActionLabel}
                    copiedLabel={copy.copiedLabel}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
