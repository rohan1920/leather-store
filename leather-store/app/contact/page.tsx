export default function ContactPage() {
  return (
    <section className="section">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-5">
            <p className="section-kicker">Contact</p>
            <h1 className="heading-lg font-heading">
              Questions about fit, care, or sizing? Write us.
            </h1>
            <p className="body-lg text-(--color-text-muted)">
              Tell us how you move through the day and we&apos;ll recommend a
              kit that fits. We usually respond within one business day.
            </p>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-[0.8rem] tracking-[0.18em] uppercase text-(--color-text-muted)">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-full border border-subtle bg-white px-4 py-2 text-sm outline-none focus:border-[#7a4a28]"
                  placeholder="Aap ka naam"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] tracking-[0.18em] uppercase text-(--color-text-muted)">
                  Email
                </label>
                <input
                  className="mt-1 w-full rounded-full border border-subtle bg-white px-4 py-2 text-sm outline-none focus:border-[#7a4a28]"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] tracking-[0.18em] uppercase text-(--color-text-muted)">
                  Message
                </label>
                <textarea
                  className="mt-1 w-full rounded-3xl border border-subtle bg-white px-4 py-3 text-sm outline-none focus:border-[#7a4a28]"
                  rows={4}
                  placeholder="Humein bataein ke aap kis tarah ke sport / street / leather wear ke liye dekh rahe hain..."
                />
              </div>
              <button type="submit" className="btn-primary">
                Send message
              </button>
            </form>
          </div>
          <div className="space-y-4 rounded-[1.8rem] bg-[#2b211a] p-6 text-[0.9rem] text-zinc-100">
            <p className="heading-sm text-xs text-[rgba(255,255,255,0.7)]">
              Studio & store
            </p>
            <p>
              42 Mercer Street
              <br />
              Portland, OR 97201
            </p>
            <p className="text-[0.85rem] text-[rgba(255,255,255,0.7)]">
              Wed–Sun, 11am–7pm
            </p>
            <p className="mt-4 text-[0.85rem] text-[rgba(255,255,255,0.7)]">
              For repair questions, include a few clear photos of the issue and
              your original order number if you have it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


