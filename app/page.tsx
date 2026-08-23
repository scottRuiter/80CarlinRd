import { Gallery } from "@/components/Gallery";
import { ShowingButton } from "@/components/ShowingButton";
import { StickyCta } from "@/components/StickyCta";
import { asset } from "@/lib/asset";
import {
  aboutParagraphs,
  availableLabel,
  featureCards,
  fullAddress,
  highlights,
  leaseTerms,
  petPolicy,
  property,
  rentLabel,
} from "@/lib/property";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold no-underline">
            <img src={asset("/mark.svg")} alt="" width={28} height={28} />
            <span className="truncate">{property.addressLine}</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#gallery" className="hover:text-ink">Photos</a>
            <a href="#power" className="hover:text-ink">Generator</a>
            <a href="#lease" className="hover:text-ink">Lease</a>
            <a href="#location" className="hover:text-ink">Location</a>
            <ShowingButton />
          </nav>
        </div>
      </header>

      <main id="top" className="pb-24 md:pb-0">
        <section className="relative min-h-[88svh] overflow-hidden text-white">
          <img
            src={asset(property.heroImage)}
            alt={`Front of ${fullAddress}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-16">
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
              For Rent
            </p>
            <h1 className="font-display text-5xl leading-none sm:text-7xl">
              {property.addressLine}
            </h1>
            <p className="mt-3 font-display text-2xl italic text-white/90 sm:text-3xl">
              {property.city}, {property.state} {property.zip}
            </p>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              {property.bedrooms} Bedrooms · {property.city}, {property.state}
              <br />
              {property.schoolDistrict}
            </p>
            <dl className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <dt className="text-white/65">Monthly rent</dt>
                <dd className="mt-1 font-semibold">{rentLabel}</dd>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <dt className="text-white/65">Available</dt>
                <dd className="mt-1 font-semibold">{availableLabel}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#gallery" className="btn-ghost bg-white/10 text-center">
                View Photos
              </a>
              <ShowingButton className="btn-primary text-center" />
            </div>
          </div>
        </section>

        <section className="border-t border-line px-4 py-16 sm:px-6" id="highlights">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Property highlights</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.value} className="rounded-2xl border border-line bg-card px-4 py-5">
                  <p className="text-xs tracking-wide text-muted uppercase">{item.label}</p>
                  <p className="mt-2 font-display text-xl font-semibold">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                A Conklin home with power when the road goes dark.
              </h2>
            </div>
            <div className="space-y-4 text-muted">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <Gallery />

        <section id="power" className="scroll-mt-20 bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-[540px]">
              <img
                src={asset("/images/generac.jpg")}
                alt="26 kW Generac standby generator at 80 Carlin Rd"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-4 py-14 sm:px-10">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-power uppercase">
                Whole-home backup power
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Power when the neighborhood goes dark.
              </h2>
              <p className="mt-5 text-paper/80">
                This property is equipped with a recently installed 26 kW
                natural-gas Generac standby generator with automatic transfer,
                providing automatic backup power during utility outages.
              </p>
              <ul className="mt-6 space-y-3 text-paper/90">
                <li>26 kW Generac standby generator</li>
                <li>Automatic transfer switch</li>
                <li>Updated electrical service and labeled panel</li>
                <li>Natural gas — no propane tank to refill</li>
              </ul>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={asset("/images/electrical-panel.jpg")}
                  alt="Updated electrical panel and Generac automatic transfer switch"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Features</p>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What sets the house apart.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-line bg-card p-5">
                  <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lease" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <p className="section-kicker">Lease terms</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Straightforward house rules.
              </h2>
              <ul className="mt-6 space-y-3 text-muted">
                {leaseTerms.map((term) => (
                  <li key={term} className="border-b border-line pb-3">
                    {term}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-kicker">Pet policy</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Pets considered.
              </h2>
              <p className="mt-6 text-muted">{petPolicy}</p>
            </div>
          </div>
        </section>

        <section id="location" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Location</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {fullAddress}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Conklin, New York · {property.schoolDistrict}
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card">
              <iframe
                title={`Map of ${fullAddress}`}
                src={property.mapEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={property.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-brick hover:text-brick-deep"
            >
              Open in Google Maps
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-ink px-5 py-12 text-center text-paper sm:px-10">
            <p className="section-kicker !text-power">Interested in the home?</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Schedule a showing.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-paper/75">
              Use the listing or the showing button below. A personal phone
              number is not published on this page.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShowingButton className="btn-primary w-full sm:w-auto" />
              {property.zillowUrl ? (
                <a
                  href={property.zillowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  View Zillow listing
                </a>
              ) : null}
              {property.applicationUrl ? (
                <a
                  href={property.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  Rental application
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-sm text-muted sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>{fullAddress}</span>
          <span>For rent · GitHub Pages</span>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
