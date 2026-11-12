import { Hero } from '@/sections/Hero';
import { PaletteSection } from '@/sections/PaletteSection';
import { ShapeSection } from '@/sections/ShapeSection';
import { SpacingSection } from '@/sections/SpacingSection';
import { TypographySection } from '@/sections/TypographySection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PaletteSection />
      <TypographySection />
      <SpacingSection />
      <ShapeSection />
    </main>
  );
}
