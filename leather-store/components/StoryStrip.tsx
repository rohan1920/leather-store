import Image from "next/image";

interface StoryStripProps {
  title: string;
  kicker: string;
  body: string;
  imageAlt: string;
}

export function StoryStrip({ title, kicker, body, imageAlt }: StoryStripProps) {
  return (
    <section className="section">
      <div className="page-container">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr,1.1fr]">
          <div className="order-2 space-y-4 md:order-1">
            <p className="section-kicker">{kicker}</p>
            <h2 className="heading-lg font-heading">{title}</h2>
            <p className="body-lg max-w-lg text-(--color-text-muted)">
              {body}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="surface-card relative h-[260px] overflow-hidden md:h-80">
              <Image
                src="/globe.svg"
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


