import { Hero } from "../components/Hero";
import { CategoryHighlights } from "../components/CategoryHighlights";
import { StoryStrip } from "../components/StoryStrip";
import { ProductGrid } from "../components/ProductGrid";
import { LifestyleGrid } from "../components/LifestyleGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryStrip
        title="Each piece is cut, stitched, and burnished by hand."
        kicker="Studio craft"
        body="We work in small batches, pairing full‑grain leather with military‑grade canvas and custom webbing so your bag breaks in, not down. Every edge is hand finished for a smooth carry that sits close to the body."
        imageAlt="Leather crafting process"
      />
      <CategoryHighlights />
      <ProductGrid />
      <LifestyleGrid />
    </>
  );
}
