"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AreaMap, directionsLink } from "@/components/AreaMap";
import { Reveal } from "@/components/Reveal";
import {
  areaCategories,
  areaPlaces,
  fullAddress,
  outdoorLiving,
  property,
  type AreaCategory,
} from "@/lib/property";
import { formatDrive, loadDriveTable, type DriveInfo } from "@/lib/routing";

export function ExploreArea() {
  const [filter, setFilter] = useState<"all" | AreaCategory>("all");
  const [selected, setSelected] = useState("");
  const [drives, setDrives] = useState<Record<string, DriveInfo>>({});
  const rail = useRef<HTMLDivElement>(null);
  const mapPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    void loadDriveTable(areaPlaces)
      .then((table) => {
        if (!cancelled) setDrives(table);
      })
      .catch(() => {
        /* Cards keep a quiet fallback until routing answers. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const places = useMemo(
    () => (filter === "all" ? areaPlaces : areaPlaces.filter((place) => place.category === filter)),
    [filter],
  );
  const activePlace = places.find((place) => place.name === selected);

  function scrollRail(direction: 1 | -1) {
    rail.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  }

  const choose = useCallback((name: string) => {
    setSelected(name);
    if (window.innerWidth < 1024) {
      mapPanel.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  return (
    <section id="explore" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="kicker">Explore the Area</p>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display max-w-3xl text-4xl sm:text-6xl">
              A great location in <em className="text-amber">Greater Binghamton</em>.
            </h2>
            <p className="max-w-md text-muted">
              A residential Conklin address with downtown Binghamton, Vestal Parkway
              shopping, Binghamton University, and the parks in easy reach. Pick a
              place to see it against 80 Carlin Rd.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={60}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="rail flex-1">
              {areaCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFilter(item.id);
                    if (item.id === "all") setSelected("");
                    rail.current?.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    filter === item.id
                      ? "border-amber bg-amber text-[#14100a]"
                      : "border-line text-muted hover:border-white/40 hover:text-fog"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="Scroll places left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fog transition hover:border-amber hover:text-amber"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label="Scroll places right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fog transition hover:border-amber hover:text-amber"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div ref={rail} className="rail mt-6">
          {places.map((place, index) => {
            const active = selected === place.name;
            return (
              <button
                key={place.name}
                type="button"
                onClick={() => choose(place.name)}
                className={`glass w-[16rem] p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-amber/40 sm:w-[19rem] ${
                  active ? "border-amber/70" : ""
                }`}
              >
                <p className="flex items-center gap-2 text-xs tracking-[0.18em] text-amber uppercase">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fog text-[0.7rem] font-bold tracking-normal text-night">
                    {index + 1}
                  </span>
                  {areaCategories.find((item) => item.id === place.category)?.label}
                </p>
                <h3 className="display mt-2 text-2xl">{place.name}</h3>
                <p className="mt-1 text-xs text-amber">
                  {drives[place.name]
                    ? formatDrive(drives[place.name])
                    : "Drive time loading…"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{place.blurb}</p>
              </button>
            );
          })}
        </div>

        <p className="mt-1 text-xs text-muted lg:hidden">Swipe for more places →</p>

        <div ref={mapPanel} className="mt-8 scroll-mt-24">
          <div className="overflow-hidden rounded-3xl border border-line">
            <AreaMap
              places={places}
              selected={selected}
              drives={drives}
              onSelect={choose}
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="text-muted">
              {activePlace ? (
                <>
                  <span className="text-amber">80 Carlin Rd</span>
                  {" → "}
                  {activePlace.name}
                  {drives[activePlace.name]
                    ? ` · ${formatDrive(drives[activePlace.name])}`
                    : ""}
                </>
              ) : (
                <>
                  Amber pin is 80 Carlin Rd. Numbered pins match the cards.
                </>
              )}
            </p>
            <div className="flex items-center gap-4">
              {selected ? (
                <button
                  type="button"
                  onClick={() => {
                    setFilter("all");
                    setSelected("");
                  }}
                  className="text-muted transition hover:text-fog"
                >
                  Reset to 80 Carlin Rd
                </button>
              ) : null}
              <a
                href={
                  activePlace
                    ? directionsLink(activePlace.query)
                    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber hover:underline"
              >
                {activePlace ? "Directions in Google Maps ↗" : "Open in Google Maps ↗"}
              </a>
            </div>
          </div>
        </div>

        <Reveal className="mt-14" delay={80}>
          <div className="glass grid gap-6 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="kicker">Outdoor living</p>
              <h3 className="display max-w-md text-3xl sm:text-4xl">
                The Southern Tier, close enough for a weeknight.
              </h3>
              <p className="mt-4 text-sm text-muted">
                {property.schoolDistrict} · Broome County
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
