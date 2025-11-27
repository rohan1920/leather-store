import Link from "next/link";

const categories = [
  {
    slug: "sport-wear",
    label: "Sport Wear",
    description: "Lightweight leather and technical textiles built for movement.",
    tone: "bg-[#f1e4d2]",
  },
  {
    slug: "street-wear",
    label: "Street Wear",
    description: "Soft-structured carry for city commutes and late-night walks.",
    tone: "bg-[#c79a6a]",
  },
  {
    slug: "leather-wear",
    label: "Leather Wear",
    description: "Heritage-grade hides that patina with every day you carry.",
    tone: "bg-[#2b211a] text-zinc-100",
  },
];

export function CategoryHighlights() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Three ways to wear</p>
            <h2 className="section-title font-heading">Sport, street, leather</h2>
          </div>
          <p className="section-subtitle body-sm">
            Move from daily training to downtown nights without changing bags.
            Each line is tuned to a different rhythm of your week.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`}>
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.7rem] border-subtle p-5 transition-transform hover:-translate-y-1 hover:shadow-xl ${cat.tone}`}
              >
                <div className="flex flex-col gap-3">
                  <span className="badge-soft">Collection</span>
                  <h3 className="font-heading text-sm tracking-[0.25em] uppercase">
                    {cat.label}
                  </h3>
                  <p className="body-sm max-w-xs opacity-90">{cat.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-[0.75rem] uppercase tracking-[0.18em]">
                  <span className="flex items-center gap-1">
                    Explore line
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <span className="opacity-70">12 pieces</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


