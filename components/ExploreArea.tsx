"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  areaCategories,
  areaPlaces,
  fullAddress,
  outdoorLiving,
  property,
  type AreaCategory,
} from "@/lib/property";

function embedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function ExploreArea() {
  const [filter, setFilter] = useState<"all" | AreaCategory>("all");
  const [selected, setSelected] = useState(fullAddress);

  const places = useMemo(
    () => (filter === "all" ? areaPlaces : areaPlaces.filter((place) => place.category === filter)),
    [filter],
  );

  return (
    <section id="explore" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="kicker">Explore the Area</p>
          <h2 className="display max-w-4xl text-4xl sm:text-6xl">
            A great location in <em className="text-amber">Greater Binghamton</em>.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            80 Carlin Rd offers the balance of a residential Conklin setting with
            convenient access to the shopping, dining, recreation, entertainment,
            education, and cultural attractions of Greater Binghamton.
          </p>
          <p className="mt-4 max-w-3xl text-muted">
            Whether you are heading into downtown Binghamton, shopping along
            Vestal Parkway, spending the day outdoors, attending a sporting event,
            or visiting Binghamton University, the property is a convenient home
            base for the Southern Tier.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={60}>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {areaCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setFilter(item.id);
                  if (item.id === "all") setSelected(fullAddress);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === item.id
                    ? "border-amber bg-amber text-[#14100a]"
                    : "border-line text-muted hover:border-white/40 hover:text-fog"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-3">
            {places.map((place) => {
              const active = selected === place.query;
              return (
                <button
                  key={place.name}
                  type="button"
                  onClick={() => setSelected(place.query)}
                  className={`glass w-full p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-amber/40 ${
                    active ? "border-amber/70" : ""
                  }`}
                >
                  <p className="text-xs tracking-[0.18em] text-amber uppercase">
                    {areaCategories.find((item) => item.id === place.category)?.label}
                  </p>
                  <h3 className="display mt-2 text-2xl">{place.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{place.blurb}</p>
                </button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-line">
              <iframe
                key={selected}
                title={`Map of ${selected}`}
                src={embedUrl(selected)}
                className="h-[360px] w-full border-0 grayscale-[0.35] contrast-[1.08] sm:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <p className="text-muted">
                {selected === fullAddress
                  ? `Home base: ${fullAddress}`
                  : selected}
              </p>
              <a
                href={mapsLink(selected)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setFilter("all");
                setSelected(fullAddress);
              }}
              className="mt-3 text-sm text-muted hover:text-fog"
            >
              Reset to 80 Carlin Rd
            </button>
          </div>
        </div>

        <Reveal className="mt-16" delay={80}>
          <div className="glass p-7 sm:p-10">
            <p className="kicker">Outdoor living</p>
            <h3 className="display max-w-2xl text-3xl sm:text-4xl">
              The Southern Tier, close enough for a weeknight.
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {outdoorLiving.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-4 py-2 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={100}>
          <div className="max-w-3xl">
            <p className="kicker">The best of both settings</p>
            <p className="text-lg text-muted">
              80 Carlin Rd is a residential address in Conklin without giving up
              downtown entertainment, Vestal Parkway shopping, Binghamton University,
              parks, museums, professional sports, restaurants, and outdoor recreation.
              Room to come home and unwind — with Greater Binghamton in easy reach.
            </p>
            <p className="mt-4 text-sm text-muted">
              {property.schoolDistrict} · Broome County
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
