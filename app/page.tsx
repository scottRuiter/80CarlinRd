import { CtaLink } from "@/components/CtaLink";
import { Gallery } from "@/components/Gallery";
import { ShowingButton } from "@/components/ShowingButton";
import { StickyCta } from "@/components/StickyCta";
import { asset } from "@/lib/asset";
import {
  aboutParagraphs,
  availableLabel,
  ctas,
  featureCards,
  fullAddress,
  generatorCopy,
  highlightList,
  highlights,
  leaseTerms,
  locationAccess,
  petPolicy,
  property,
  rentLabel,
  sunroomUses,
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
          <nav className="hidden items-center gap-5 text-sm text-muted lg:flex">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#gallery" className="hover:text-ink">Photos</a>
            <a href="#power" className="hover:text-ink">Generator</a>
            <a href="#sunroom" className="hover:text-ink">Sunroom</a>
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-16">
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
              {property.listingType}
            </p>
            <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
              {property.addressLine}
            </h1>
            <p className="mt-3 font-display text-2xl italic text-white/90 sm:text-3xl">
              {property.city}, New York
            </p>
            <p className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              {rentLabel}
            </p>
            <p className="mt-3 text-base text-white/88 sm:text-lg">
              3 Beds • 1.5 Baths • 1,808 Sq. Ft.
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
              26 kW Generac Backup Power • Updated Sunroom • Susquehanna Valley Schools
            </p>
            {availableLabel ? (
              <p className="mt-4 text-sm text-white/75">Available {availableLabel}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ShowingButton className="btn-primary text-center" />
              <CtaLink href={ctas.gallery} className="btn-ghost bg-white/10 text-center">
                View Photos
              </CtaLink>
            </div>
          </div>
        </section>

        <section className="border-t border-line px-4 py-16 sm:px-6" id="highlights">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Property highlights</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {highlights.map((item) => (
                <article key={item.label} className="rounded-2xl border border-line bg-card px-4 py-5">
                  <p className="text-xs tracking-wide text-muted uppercase">{item.label}</p>
                  <p className="mt-2 font-display text-xl font-semibold">{item.value}</p>
                </article>
              ))}
            </div>
            <ul className="mt-8 columns-1 gap-x-10 text-muted sm:columns-2">
              {highlightList.map((item) => (
                <li key={item} className="break-inside-avoid border-b border-line py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">About the home</p>
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {property.headline}
            </h2>
            <p className="mt-3 max-w-3xl text-muted">{property.heroSubheadline}</p>
            <p className="mt-6 max-w-3xl text-lg text-ink">{property.shortDescription}</p>
            <div className="mt-8 max-w-3xl space-y-4 text-muted">
              {aboutParagraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={ctas.gallery} className="btn-light">View Photo Gallery</CtaLink>
              <CtaLink href={ctas.lease} className="btn-light">View Lease Details</CtaLink>
              <CtaLink href={ctas.info} className="btn-light">Request More Information</CtaLink>
            </div>
          </div>
        </section>

        <Gallery />

        <section id="power" className="scroll-mt-20 bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-[560px]">
              <img
                src={asset("/images/generac.jpg")}
                alt="26 kW Generac standby generator at 80 Carlin Rd"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-4 py-14 sm:px-10">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-power uppercase">
                {generatorCopy.kicker}
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                {generatorCopy.headline}
              </h2>
              <div className="mt-5 space-y-4 text-paper/80">
                {generatorCopy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-paper/90">
                {generatorCopy.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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

        <section id="sunroom" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Updated sunroom</p>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A bright, flexible additional space.
            </h2>
            <p className="mt-5 max-w-3xl text-muted">
              The updated sunroom features new flooring and refreshed finishes
              and can serve as:
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sunroomUses.map((use) => (
                <li key={use} className="rounded-2xl border border-line bg-card px-4 py-5 font-display text-xl font-semibold">
                  {use}
                </li>
              ))}
            </ul>
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
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Lease terms</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {rentLabel}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              {property.leaseTerm}. Pets {property.pets.toLowerCase()}. {property.rentersInsurance} renters insurance.
            </p>
            <ul className="mt-8 max-w-3xl space-y-3 text-muted">
              {leaseTerms.map((term) => (
                <li key={term} className="border-b border-line pb-3">
                  {term}
                </li>
              ))}
            </ul>
            <div className="mt-10 max-w-3xl rounded-2xl border border-line bg-card p-5">
              <p className="section-kicker">Pet policy</p>
              <p className="text-muted">{petPolicy}</p>
            </div>
          </div>
        </section>

        <section id="location" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Location</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Conklin, New York
            </h2>
            <p className="mt-4 max-w-3xl text-muted">
              80 Carlin Rd is located in Conklin, NY 13748, in Broome County and
              within the Susquehanna Valley Central School District.
            </p>
            <p className="mt-4 text-muted">The location provides convenient access to:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {locationAccess.map((item) => (
                <li key={item} className="rounded-xl border border-line bg-card px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
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
              {rentLabel} · 3 bedrooms · 1.5 baths · 1,808 sq. ft.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ShowingButton className="btn-primary" />
              <CtaLink href={ctas.info} className="btn-ghost">
                Request More Information
              </CtaLink>
              <CtaLink href={ctas.apply} className="btn-ghost">
                Apply to Rent
              </CtaLink>
              <CtaLink href={ctas.zillow} className="btn-ghost">
                View on Zillow
              </CtaLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-sm text-muted sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>{fullAddress}</span>
          <span>{property.listingType} · {property.propertyType}</span>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
