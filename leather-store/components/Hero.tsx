import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section pt-8">
      <div className="page-container">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr,1.1fr]">
          <div className="space-y-6">
            <div className="section-kicker">Premium Leather Goods</div>
            <h1 className="font-heading heading-xl max-w-xl">
              Crossbody, carry, and daily wear that age with you.
            </h1>
            <p className="body-lg max-w-md text-[var(--color-text-muted)]">
              Sport, street, and heritage leather pieces designed for the moments
              between work and weekend. Cut, stitched, and finished by hand.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/collections">
                <button className="btn-primary">Explore collections</button>
              </Link>
              <Link href="/leather-wear">
                <button className="btn-ghost">View leather wear</button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              <span>Handmade in small batches</span>
              <span>Lifetime repair guarantee</span>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <div className="surface-card absolute inset-0 overflow-hidden">
              <Image
                src="/file.svg"
                alt="Leather crossbody bag"
                fill
                className="object-cover"
              />
            </div>
            <div className="surface-chip absolute -left-6 top-6 hidden flex-col gap-1 px-4 py-3 text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] sm:flex">
              <span>New arrival</span>
              <span className="text-[0.68rem] text-black">
                Crossbody series 03
              </span>
            </div>
            <div className="surface-chip absolute -bottom-4 right-6 flex items-center gap-3 px-5 py-3 text-[0.8rem]">
              <div className="h-9 w-9 rounded-full bg-[#7a4a28]" />
              <div>
                <p className="font-medium tracking-[0.16em] uppercase text-[0.7rem]">
                  Everyday carry
                </p>
                <p className="text-[0.7rem] text-[var(--color-text-muted)]">
                  Built for city days & last trains home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


