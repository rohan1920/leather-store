export function LifestyleGrid() {
  const tiles = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="section">
      <div className="page-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Follow our story</p>
            <h2 className="section-title font-heading">Days in the studio</h2>
          </div>
          <p className="section-subtitle body-sm">
            Glimpses from the workbench, the road, and the people who carry
            Iron Oak every day.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {tiles.map((tile) => (
            <div
              key={tile}
              className="aspect-4/3 rounded-[1.1rem] bg-[rgba(0,0,0,0.15)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


