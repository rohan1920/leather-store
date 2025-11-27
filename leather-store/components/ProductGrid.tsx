type Product = {
  id: number;
  name: string;
  price: string;
  tag?: string;
  tone: "sport" | "street" | "leather";
};

const products: Product[] = [
  {
    id: 1,
    name: "Field Day Crossbody",
    price: "$220",
    tag: "Sport",
    tone: "sport",
  },
  {
    id: 2,
    name: "Midnight Commute Pack",
    price: "$280",
    tag: "Street",
    tone: "street",
  },
  {
    id: 3,
    name: "Foundry Messenger",
    price: "$320",
    tag: "Leather",
    tone: "leather",
  },
  {
    id: 4,
    name: "Weekender Duffle",
    price: "$420",
    tag: "Best Seller",
    tone: "leather",
  },
];

function cardTone(tone: Product["tone"]) {
  if (tone === "sport") return "bg-[#f1f5f9]";
  if (tone === "street") return "bg-[#111827] text-zinc-50";
  return "bg-[#f9efe0]";
}

export function ProductGrid() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Featured this week</p>
            <h2 className="section-title font-heading">Carry for every lane</h2>
          </div>
          <p className="section-subtitle body-sm">
            Rotate across sport, street, and leather without losing the thread
            of your style. Built to work together, not compete.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className={`group flex flex-col justify-between rounded-[1.4rem] border border-subtle/60 p-4 transition-transform hover:-translate-y-1 hover:shadow-xl ${cardTone(
                product.tone,
              )}`}
            >
              <div className="mb-4 aspect-4/3 rounded-[1.1rem] bg-[rgba(0,0,0,0.08)]" />
              <div className="space-y-2">
                {product.tag && (
                  <span className="badge-soft inline-flex">{product.tag}</span>
                )}
                <h3 className="text-sm font-medium tracking-[0.14em] uppercase">
                  {product.name}
                </h3>
                <p className="body-sm text-(--color-text-muted)">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


