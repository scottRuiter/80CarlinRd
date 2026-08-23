import { BlackoutDemo } from "@/components/BlackoutDemo";
import { CountUp } from "@/components/CountUp";
import { ExploreArea } from "@/components/ExploreArea";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { MobileBar } from "@/components/MobileBar";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionNav } from "@/components/SectionNav";
import { TourForm } from "@/components/TourForm";
import { asset } from "@/lib/asset";
import {
  ctas,
  fullAddress,
  connectedHome,
  generatorCopy,
  leaseTerms,
  property,
  stats,
  sunroomUses,
} from "@/lib/property";

const ticker = [
  "26 kW Generac standby",
  "Nest thermostats + zone sensors",
  "Electronic PIN side-door entry",
  "Wi-Fi 6 + wired Ethernet",
  "Automatic transfer switch",
  "Updated electrical panel",
  "Natural gas",
  "Updated sunroom",
  "Attached 1-stall garage",
  "Finished lower level",
  "0.39-acre lot",
  "Susquehanna Valley schools",
];

const pillars = [
  {
    n: "01",
    title: "The lights stay on",
    body: "A 26 kW natural-gas Generac starts itself when the utility drops. Whole house, not a couple of circuits.",
  },
  {
    n: "02",
    title: "Room to spread out",
    body: "Three bedrooms, about 1,808 square feet, a finished lower level, Nest comfort by floor, and an updated sunroom that earns its keep.",
  },
  {
    n: "03",
    title: "A house, not a unit",
    body: "Single-family on roughly 0.39 acres, with an attached 1-stall garage, a yard, a shed, and neighbors instead of shared walls.",
  },
];

const spaces = [
  { img: "/images/kitchen.jpg", title: "Kitchen", body: "Island, stainless appliances, tile backsplash, and real counter space." },
  { img: "/images/living-room.jpg", title: "Living room", body: "Open to the kitchen, with light from the front of the house." },
  { img: "/images/sunroom.jpg", title: "Sunroom", body: "New flooring, wraparound windows, and a bright extra room that looks onto the yard." },
  { img: "/images/tile.jpg", title: "Lower level", body: "Finished flexible space with a bar counter — den, office, or playroom." },
  { img: "/images/backyard.jpg", title: "Yard", body: "Deep lawn, mature trees, and a storage shed on about 0.39 acres." },
  { img: "/images/front-lawn.jpg", title: "Garage", body: "Attached 1-stall garage — off the street and out of the weather." },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SectionNav />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-night/60 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <img src={asset("/mark.svg")} alt="" width={30} height={30} className="rounded-lg" />
            <span className="text-sm font-semibold tracking-wide text-fog">
              80 Carlin Rd
              <span className="ml-2 hidden text-muted sm:inline">Conklin, NY</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={ctas.tel}
              className="hidden text-sm font-medium text-muted transition hover:text-fog sm:inline"
            >
              {property.contactPhoneLabel}
            </a>
            <a href={ctas.showing} className="btn btn-amber min-h-10 px-5 text-sm">
              Request a showing
            </a>
          </div>
        </div>
      </header>

      <main className="pb-28 lg:pb-0">
        <section id="home" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
          <img
            src={asset(property.heroImage)}
            alt={`Front of ${fullAddress}`}
            fetchPriority="high"
            className="ken-burns absolute inset-0 h-full w-full object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(242,166,59,0.18),transparent_55%)]" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
            <p className="kicker">For rent · Conklin, New York</p>
            <h1 className="display text-[clamp(3rem,11vw,8.5rem)]">
              80 Carlin Rd
            </h1>
            <p className="display mt-2 text-[clamp(1.5rem,4vw,2.75rem)] italic text-amber">
              the house that stays on
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase">Monthly rent</p>
                <p className="display mt-1 text-5xl sm:text-6xl">$2,500</p>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="display text-3xl text-fog">
                      <CountUp value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm text-muted sm:text-base">
              Attached 1-stall garage · Nest zone comfort · PIN side-door entry · Wi-Fi 6 + Ethernet
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={ctas.showing} className="btn btn-amber">
                Request a showing
              </a>
              <a href={ctas.gallery} className="btn btn-outline">
                Take the photo tour
              </a>
            </div>
          </div>

          <div className="scroll-hint absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
            <span />
          </div>
        </section>

        <div className="overflow-hidden border-y border-line bg-night-2/60 py-4">
          <div className="marquee text-sm tracking-[0.18em] text-muted uppercase">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="text-amber">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="story" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <Reveal>
                <p className="kicker">The home</p>
                <h2 className="display text-4xl sm:text-6xl">
                  Three bedrooms, 1,808 square feet, and a{" "}
                  <em className="text-amber">generator that never asks</em> for
                  permission.
                </h2>
                <p className="mt-6 max-w-xl text-lg text-muted">
                  {property.shortDescription}
                </p>
                <p className="mt-4 max-w-xl text-muted">
                  Conklin, Broome County, inside the {property.schoolDistrict} — with an
                  attached 1-stall garage, a yard, a finished lower level, and a kitchen
                  already brought forward.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={ctas.gallery} className="btn btn-outline">
                    See the photos
                  </a>
                  <a href={ctas.tel} className="btn btn-outline">
                    Call {property.contactPhoneLabel}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120} className="grid grid-cols-2 gap-3">
                <img
                  src={asset("/images/front-lawn.jpg")}
                  alt="Front lawn at 80 Carlin Rd"
                  loading="lazy"
                  className="h-64 w-full rounded-2xl border border-line object-cover sm:h-80"
                />
                <img
                  src={asset("/images/kitchen-island.jpg")}
                  alt="Kitchen island"
                  loading="lazy"
                  className="mt-10 h-64 w-full rounded-2xl border border-line object-cover sm:h-80"
                />
              </Reveal>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.n} delay={index * 90}>
                  <article className="glass group h-full p-7 transition duration-500 hover:-translate-y-1 hover:border-amber/40">
                    <p className="display text-5xl text-amber/30 transition group-hover:text-amber/70">
                      {pillar.n}
                    </p>
                    <h3 className="display mt-4 text-2xl">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{pillar.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Gallery />

        <section id="features" className="relative scroll-mt-24 overflow-hidden py-24">
          <img
            src={asset("/images/generac.jpg")}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/92 to-night" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <p className="kicker">{generatorCopy.kicker}</p>
              <h2 className="display text-4xl sm:text-6xl">
                When the street goes dark,{" "}
                <em className="text-amber">this house doesn&apos;t</em>.
              </h2>
              <p className="mt-6 text-lg text-muted">{generatorCopy.paragraphs[0]}</p>
              <p className="mt-4 text-muted">{generatorCopy.paragraphs[2]}</p>
              <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {generatorCopy.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line py-2 text-sm text-fog">
                    <span className="mt-1 text-amber">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <img
                  src={asset("/images/generac-2.jpg")}
                  alt="Generac standby generator installation"
                  loading="lazy"
                  className="h-40 w-full rounded-2xl border border-line object-cover"
                />
                <img
                  src={asset("/images/electrical-panel.jpg")}
                  alt="Updated electrical panel and automatic transfer switch"
                  loading="lazy"
                  className="h-40 w-full rounded-2xl border border-line object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <BlackoutDemo />
            </Reveal>
          </div>
        </section>

        <section id="connected" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="kicker">Connected home</p>
              <h2 className="display max-w-3xl text-4xl sm:text-6xl">
                Comfort, access, and bandwidth —{" "}
                <em className="text-amber">already in the walls</em>.
              </h2>
              <p className="mt-5 max-w-2xl text-muted">
                These are installed, not promised. Nest zoning, a PIN side door,
                Wi-Fi 6, and high-speed Ethernet are part of the house.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {connectedHome.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="glass group h-full p-7 transition duration-500 hover:-translate-y-1 hover:border-amber/40">
                    <p className="text-xs tracking-[0.2em] text-amber uppercase">
                      0{index + 1}
                    </p>
                    <h3 className="display mt-4 text-3xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="spaces" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="kicker">The spaces</p>
              <h2 className="display max-w-2xl text-4xl sm:text-6xl">
                Rooms you will actually use.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {spaces.map((space, index) => (
                <Reveal key={space.title} delay={index * 80}>
                  <article className="group relative overflow-hidden rounded-3xl border border-line">
                    <img
                      src={asset(space.img)}
                      alt={space.title}
                      loading="lazy"
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="display text-3xl">{space.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted">{space.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12" delay={80}>
              <div id="sunroom" className="glass overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="grid grid-cols-2 gap-2 p-3">
                    <img
                      src={asset("/images/sunroom.jpg")}
                      alt="Updated sunroom with wraparound windows"
                      className="col-span-2 h-64 w-full rounded-2xl object-cover sm:h-80"
                      loading="lazy"
                    />
                    <img
                      src={asset("/images/sunroom-2.jpg")}
                      alt="Sunroom windows looking onto the backyard"
                      className="h-36 w-full rounded-2xl object-cover sm:h-44"
                      loading="lazy"
                    />
                    <img
                      src={asset("/images/sunroom-3.jpg")}
                      alt="Sunroom corner with new windows and wood paneling"
                      className="h-36 w-full rounded-2xl object-cover sm:h-44"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 sm:p-10">
                    <p className="kicker">Updated sunroom</p>
                    <h3 className="display max-w-xl text-3xl sm:text-4xl">
                      New flooring, wraparound windows, and no assigned purpose.
                    </h3>
                    <p className="mt-4 text-sm text-muted">
                      Bright extra living space looking onto the yard — sitting room,
                      office, hobby space, or morning coffee.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {sunroomUses.map((use) => (
                        <span
                          key={use}
                          className="rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-amber hover:text-amber"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="lease" className="scroll-mt-24 border-y border-line bg-night-2/50 px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <p className="kicker">Lease terms</p>
              <h2 className="display text-4xl sm:text-6xl">$2,500 a month.</h2>
              <p className="mt-5 max-w-md text-muted">
                12-month lease preferred. No surprises buried in the fine print —
                here is the whole list.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={ctas.showing} className="btn btn-amber">
                  Request a showing
                </a>
                <a href={ctas.zillow} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View on Zillow
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {leaseTerms.map((term) => (
                  <li key={term} className="glass p-5 text-sm text-muted">
                    {term}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <ExploreArea />

        <Faq />

        <section id="tour" className="scroll-mt-24 px-5 pb-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <p className="kicker">Book a walkthrough</p>
              <h2 className="display text-4xl sm:text-6xl">
                Come see it in <em className="text-amber">person</em>.
              </h2>
              <p className="mt-5 max-w-md text-muted">
                Photos only go so far. Send your details and we will set up a time —
                evenings and weekends included.
              </p>

              <div className="mt-8 grid gap-3">
                <a href={ctas.tel} className="glass flex items-center justify-between p-5 transition hover:border-amber/50">
                  <span>
                    <span className="block text-xs tracking-[0.18em] text-muted uppercase">Call</span>
                    <span className="display text-2xl">{property.contactPhoneLabel}</span>
                  </span>
                  <span className="text-amber">↗</span>
                </a>
                <a href={ctas.sms} className="glass flex items-center justify-between p-5 transition hover:border-amber/50">
                  <span>
                    <span className="block text-xs tracking-[0.18em] text-muted uppercase">Text</span>
                    <span className="display text-2xl">{property.contactPhoneLabel}</span>
                  </span>
                  <span className="text-amber">↗</span>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted">
                Showings hosted by {property.contactName}.
              </p>
            </Reveal>

            <Reveal delay={110}>
              <TourForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-10 text-sm text-muted sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="display text-xl text-fog">{fullAddress}</span>
          <span>
            {property.rent} · 3 bd · 1.5 ba · 1,808 sf ·{" "}
            <a href={ctas.tel} className="text-amber hover:underline">
              {property.contactPhoneLabel}
            </a>
          </span>
        </div>
      </footer>

      <MobileBar />
    </>
  );
}
