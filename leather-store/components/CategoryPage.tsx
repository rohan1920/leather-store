type CategoryTone = "sport" | "street" | "leather";

interface CategoryPageProps {
  title: string;
  tagline: string;
  description: string;
  tone: CategoryTone;
}

const toneStyles: Record<CategoryTone, string> = {
  sport: "from-[#e0f2fe] via-[#f4eee6] to-[#e0f2fe]",
  street: "from-[#020617] via-[#111827] to-[#020617]",
  leather: "from-[#2b211a] via-[#7a4a28] to-[#f4eee6]",
};

export function CategoryPage({
  title,
  tagline,
  description,
  tone,
}: CategoryPageProps) {
  return (
    <>
      <section className="section pb-0">
        <div className="page-container">
          <div
            className={`overflow-hidden rounded-4xl border border-subtle bg-linear-to-r ${toneStyles[tone]}`}
          >
            <div className="grid gap-10 p-8 md:grid-cols-[1.1fr,1.1fr] md:p-12">
              <div className="space-y-5 text-left text-zinc-50 md:pr-6">
                <p className="section-kicker text-[rgba(255,255,255,0.7)]">
                  {tagline}
                </p>
                <h1 className="heading-lg font-heading max-w-md">
                  {title}
                </h1>
                <p className="body-lg max-w-md text-[rgba(255,255,255,0.8)]">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
                  <span>Curated essentials</span>
                  <span>Lifetime repair</span>
                  <span>Ships in 48 hours</span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-[1.4rem] bg-[rgba(248,244,238,0.9)] p-5 text-[0.85rem] text-(--color-text-primary)">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="heading-sm text-xs text-(--color-text-muted)">
                      Filters
                    </p>
                    <p className="body-sm text-(--color-text-muted)">
                      Size, color, carry style
                    </p>
                  </div>
                  <button className="btn-ghost">Refine</button>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[0.8rem]">
                  <button className="surface-chip px-3 py-2 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-(--color-text-muted)">
                      Sort by
                    </p>
                    <p className="font-medium">Newest first</p>
                  </button>
                  <button className="surface-chip px-3 py-2 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-(--color-text-muted)">
                      Strap style
                    </p>
                    <p className="font-medium">Crossbody</p>
                  </button>
                  <button className="surface-chip px-3 py-2 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-(--color-text-muted)">
                      Capacity
                    </p>
                    <p className="font-medium">Daily carry</p>
                  </button>
                  <button className="surface-chip px-3 py-2 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-(--color-text-muted)">
                      Color
                    </p>
                    <p className="font-medium">Earth tones</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-8">
        <div className="page-container">
          <div className="section-header">
            <div>
              <p className="section-kicker">In the lineup</p>
              <h2 className="section-title font-heading">Featured pieces</h2>
            </div>
            <p className="section-subtitle body-sm">
              A focused look at the silhouettes that define this category. Swap
              colors and materials while keeping the same clean lines.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((idx) => (
              <article
                key={idx}
                className="flex flex-col gap-3 rounded-[1.4rem] border border-subtle bg-[rgba(255,255,255,0.96)] p-4 shadow-sm"
              >
                <div className="aspect-4/3 rounded-[1.1rem] bg-[rgba(0,0,0,0.06)]" />
                <div className="space-y-1">
                  <p className="text-[0.75rem] uppercase tracking-[0.22em] text-(--color-text-muted)">
                    Look {idx.toString().padStart(2, "0")}
                  </p>
                  <p className="text-sm font-medium">
                    {title} kit #{idx}
                  </p>
                  <p className="text-[0.8rem] text-(--color-text-muted)">
                    $240 · Ships in 2–3 business days
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


