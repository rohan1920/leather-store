export default function AboutPage() {
  return (
    <section className="section">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-5">
            <p className="section-kicker">Our story</p>
            <h1 className="heading-lg font-heading">
              Born from the hours between the workshop and the last train home.
            </h1>
            <p className="body-lg text-(--color-text-muted)">
              Iron Oak started as a one‑table experiment in repairing old bags
              and rebuilding them from better leather. The seams, patina, and
              stories we found there still guide every pattern we cut today.
            </p>
            <p className="body-sm text-(--color-text-muted)">
              We keep our runs small, our materials honest, and our guarantees
              simple: if something goes wrong, we&apos;ll fix it. You carry the
              piece, we carry the responsibility.
            </p>
          </div>
          <div className="space-y-4">
            <div className="surface-card h-56 rounded-[1.6rem] bg-[rgba(0,0,0,0.12)]" />
            <div className="grid grid-cols-3 gap-3 text-[0.8rem]">
              <div className="surface-chip px-3 py-3">
                <p className="heading-sm text-[0.65rem] text-(--color-text-muted)">
                  Since
                </p>
                <p className="text-lg font-semibold">2014</p>
              </div>
              <div className="surface-chip px-3 py-3">
                <p className="heading-sm text-[0.65rem] text-(--color-text-muted)">
                  Repairs
                </p>
                <p className="text-lg font-semibold">Lifetime</p>
              </div>
              <div className="surface-chip px-3 py-3">
                <p className="heading-sm text-[0.65rem] text-(--color-text-muted)">
                  Batches
                </p>
                <p className="text-lg font-semibold">Small</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


