export default function CollectionsPage() {
  const collections = [
    {
      name: "Weekend carry",
      blurb: "Overnighters, camera slings, and small duffles.",
    },
    {
      name: "Office essentials",
      blurb: "Slim briefcases and laptop sleeves that dress up any desk.",
    },
    {
      name: "Travel ready",
      blurb: "Carry-ons, organizers, and passport wallets.",
    },
    {
      name: "Studio limited",
      blurb: "Numbered runs from the workshop, available for a short time.",
    },
  ];

  return (
    <section className="section">
      <div className="page-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Collections</p>
            <h1 className="section-title font-heading">Curated sets</h1>
          </div>
          <p className="section-subtitle body-sm">
            Build a complete kit with pieces that are meant to live together.
            Start with a collection, then tune the details.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <article
              key={collection.name}
              className="surface-card border-subtle p-6"
            >
              <h2 className="heading-sm text-xs text-(--color-text-muted)">
                {collection.name}
              </h2>
              <p className="mt-3 body-sm text-(--color-text-muted)">
                {collection.blurb}
              </p>
              <div className="mt-6 flex items-center justify-between text-[0.8rem]">
                <span className="badge-soft">View lookbook</span>
                <span className="text-[0.7rem] uppercase tracking-[0.2em]">
                  8–14 pieces
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


