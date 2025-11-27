export function Footer() {
  return (
    <footer className="mt-16 bg-[#18100d] text-[0.78rem] text-zinc-300">
      <div className="border-t border-[#31241c]">
        <div className="page-container py-10">
          <div className="grid gap-10 md:grid-cols-[1.3fr,repeat(3,1fr)]">
            <div className="space-y-4">
              <div className="inline-block border border-[#4a3a2f] px-4 py-2 text-[0.7rem] tracking-[0.25em] uppercase text-zinc-200">
                Iron Oak Leather
              </div>
              <p className="body-sm max-w-sm text-[rgba(243,237,230,0.7)]">
                Everyday bags, wallets, and carry built from full‑grain leather.
                Designed to sit quietly in the background while you move.
              </p>
            </div>
            <div className="space-y-3">
              <div className="heading-sm text-[0.7rem] text-[#a48b73]">
                Collections
              </div>
              <ul className="space-y-1 text-[0.78rem]">
                <li>New Arrivals</li>
                <li>Sport Wear</li>
                <li>Street Wear</li>
                <li>Leather Wear</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="heading-sm text-[0.7rem] text-[#a48b73]">
                Company
              </div>
              <ul className="space-y-1 text-[0.78rem]">
                <li>Our Story</li>
                <li>Journal</li>
                <li>Stockists</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="heading-sm text-[0.7rem] text-[#a48b73]">
                Studio
              </div>
              <p className="text-[0.78rem]">
                42 Mercer Street, Portland, OR
                <br />
                Wed–Sun, 11am–7pm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#31241c]">
        <div className="page-container flex flex-col items-center justify-between gap-4 py-6 text-[0.7rem] text-[#7b6654] md:flex-row">
          <p>© {new Date().getFullYear()} Iron Oak Leather. All rights reserved.</p>
          <p className="tracking-[0.22em] uppercase">
            Follow @ironoakleather on Instagram
          </p>
        </div>
      </div>
    </footer>
  );
}


