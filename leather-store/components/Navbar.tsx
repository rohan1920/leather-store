import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sport-wear", label: "Sport Wear" },
  { href: "/street-wear", label: "Street Wear" },
  { href: "/leather-wear", label: "Leather Wear" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-subtle/40 bg-[rgba(244,238,230,0.9)] backdrop-blur-xl">
      <div className="page-container">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="surface-chip px-3 py-1 text-xs tracking-[0.3em] uppercase">
              Iron Oak
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-xs tracking-[0.28em] uppercase md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.7rem] text-[rgba(26,18,13,0.7)] transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="btn-ghost hidden md:inline-flex">
            <span>Visit Store</span>
          </button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-[rgba(255,255,255,0.7)] text-[0.7rem] md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}


