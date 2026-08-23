import { CtaLink } from "@/components/CtaLink";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { InquiryForm } from "@/components/InquiryForm";
import { ShowingButton } from "@/components/ShowingButton";
import { StickyCta } from "@/components/StickyCta";
import { asset } from "@/lib/asset";
import {
  availableLabel,
  ctas,
  fullAddress,
  generatorCopy,
  leaseTerms,
  locationAccess,
  petPolicy,
  property,
  rentLabel,
  sunroomUses,
} from "@/lib/property";

const facts = [
  { label: "Bedrooms", value: "3" },
  { label: "Baths", value: "1.5" },
  { label: "Living area", value: "1,808 sf" },
  { label: "Lot", value: "0.39 ac" },
  { label: "Rent", value: "$2,500" },
  { label: "Lease", value: "12 months" },
];

const reasons = [
  {
    title: "The house stays on",
    body: "26 kW natural-gas Generac with automatic transfer. Heat, fridge, and lights do not depend on a portable generator in the driveway.",
  },
  {
    title: "A real extra room",
    body: "Updated sunroom with new flooring — office, sitting room, or the place you actually use in the morning.",
  },
  {
    title: "A house, not a unit",
    body: "Single-family, three bedrooms, about 1,808 square feet, and a residential yard in Susquehanna Valley schools.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold no-underline">
            <img src={asset("/mark.svg")} alt="" width={28} height={28} />
            <span className="truncate">{property.addressLine}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm font-semibold text-muted">
            <a href="#gallery" className="hover:text-ink">Photos</a>
            <a href="#power" className="hidden hover:text-ink sm:inline">Power</a>
            <a href="#lease" className="hidden hover:text-ink sm:inline">Lease</a>
            <a href="#faq" className="hidden hover:text-ink md:inline">FAQ</a>
            <ShowingButton className="btn-primary min-h-10 px-4 text-sm" />
          </nav>
        </div>
      </header>

      <main id="top" className="pb-24 md:pb-0">
        <section className="relative min-h-[86svh] overflow-hidden text-white">
          <img
            src={asset(property.heroImage)}
            alt={`Front of ${fullAddress}`}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
          <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-4 pb-28 pt-24 sm:px-6 sm:pb-32">
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
              {property.listingType} · {property.city}, New York
            </p>
            <h1 className="font-display text-5xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              {property.addressLine}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              {rentLabel} · 3 beds · 1.5 baths · 1,808 sq. ft.
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/75 sm:text-base">
              26 kW Generac backup power · Updated sunroom · Susquehanna Valley schools
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

        <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:-mt-20 sm:px-6">
          <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-line bg-card shadow-[0_20px_50px_rgba(27,23,20,0.12)] md:grid-cols-6">
            {facts.map((fact) => (
              <div key={fact.label} className="border-line px-3 py-4 even:bg-paper/50 md:border-r md:last:border-r-0">
                <p className="text-[11px] tracking-wide text-muted uppercase">{fact.label}</p>
                <p className="mt-1 font-display text-lg font-semibold sm:text-xl">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker">The home</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Comfortable, updated, and ready when the road goes dark.
              </h2>
              <p className="mt-5 text-lg text-ink">{property.shortDescription}</p>
              <p className="mt-4 text-muted">
                Conklin, Broome County, Susquehanna Valley Central School District — with a
                yard, a finished lower level, and a kitchen that has already been brought forward.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={asset("/images/kitchen.jpg")}
                alt="Updated kitchen at 80 Carlin Rd"
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
                loading="lazy"
              />
              <img
                src={asset("/images/living-room.jpg")}
                alt="Living room at 80 Carlin Rd"
                className="mt-8 h-56 w-full rounded-2xl object-cover sm:h-72"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-3 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-2xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{reason.body}</p>
              </article>
            ))}
          </div>
        </section>

        <Gallery />

        <section id="power" className="scroll-mt-20 bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-[620px]">
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
              <p className="mt-5 text-lg text-paper/85">{generatorCopy.paragraphs[0]}</p>
              <p className="mt-4 text-paper/75">{generatorCopy.paragraphs[1]}</p>
              <ul className="mt-8 grid gap-2 text-sm text-paper/90 sm:grid-cols-2">
                {generatorCopy.bullets.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="sunroom" className="scroll-mt-20 px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Updated sunroom</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                A bright, flexible extra space.
              </h2>
              <p className="mt-5 text-muted">
                New flooring and refreshed finishes. Not a leftover porch —
                a room you can actually assign a life to.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {sunroomUses.map((use) => (
                  <span key={use} className="rounded-full border border-line bg-card px-3 py-2 text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={asset("/images/kitchen-from-side.jpg")}
              alt="Kitchen opening toward additional living space"
              className="h-80 w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section id="lease" className="scroll-mt-20 bg-card/70 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Lease terms</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                {rentLabel}
              </h2>
              <CtaLink href={ctas.apply} className="btn-light w-fit">
                Apply to Rent
              </CtaLink>
            </div>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {leaseTerms.map((term) => (
                <li key={term} className="rounded-2xl border border-line bg-paper px-4 py-4 text-sm text-muted">
                  {term}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-sm text-muted">
              <strong className="text-ink">Pets:</strong> {petPolicy}
            </p>
          </div>
        </section>

        <section id="location" className="scroll-mt-20 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Location</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Conklin, New York
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              80 Carlin Rd, Conklin, NY 13748 · Broome County · {property.schoolDistrict}.
              Close to Binghamton, shopping, and the roads people actually use for work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {locationAccess.slice(0, 6).map((item) => (
                <span key={item} className="rounded-full border border-line bg-card px-3 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-line">
              <iframe
                title={`Map of ${fullAddress}`}
                src={property.mapEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[440px]"
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

        <Faq />

        <section id="contact" className="scroll-mt-20 px-4 pb-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-ink text-paper lg:grid-cols-[0.9fr_1.1fr]">
            <div className="px-5 py-12 sm:px-10">
              <p className="section-kicker !text-power">See the house</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Schedule a showing.
              </h2>
              <p className="mt-4 text-paper/75">
                {rentLabel} · 3 bedrooms · 1.5 baths · 1,808 sq. ft.
                Tell us when you can walk through. A personal phone number is not published here.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={ctas.zillow} className="btn-ghost">
                  View on Zillow
                </CtaLink>
                <CtaLink href={ctas.apply} className="btn-ghost">
                  Apply to Rent
                </CtaLink>
              </div>
            </div>
            <div className="bg-white/5 px-5 py-12 sm:px-10">
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-sm text-muted sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>{fullAddress}</span>
          <span>{property.listingType} · {rentLabel}</span>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
