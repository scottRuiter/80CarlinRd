"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { gallery, galleryFilters, type PhotoCategory } from "@/lib/property";

const PREVIEW_COUNT = 12;

export function Gallery() {
  const [filter, setFilter] = useState<"all" | PhotoCategory>("all");
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const touchStart = useRef<number | null>(null);

  const matching = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((photo) => photo.category === filter)),
    [filter],
  );

  const visible = expanded ? matching : matching.slice(0, PREVIEW_COUNT);
  const hidden = matching.length - visible.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((delta: number) => {
    setActive((current) =>
      current === null ? current : (current + delta + gallery.length) % gallery.length,
    );
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active === null ? null : gallery[active];

  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="kicker">Photo tour</p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-2xl text-4xl sm:text-6xl">
              Every room, <em className="text-amber">unstaged</em>.
            </h2>
            <p className="max-w-sm text-muted">
              {gallery.length} photos. Tap any image for full screen, then swipe or
              use the arrow keys.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {galleryFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setFilter(item.id);
                  setExpanded(false);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === item.id
                    ? "border-amber bg-amber text-[#14100a]"
                    : "border-line text-muted hover:border-white/40 hover:text-fog"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
          {visible.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(gallery.findIndex((item) => item.src === photo.src))}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-night-2 text-left break-inside-avoid"
            >
              <img
                src={asset(photo.src)}
                alt={photo.alt}
                loading={index < 4 ? "eager" : "lazy"}
                className="w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-transparent opacity-70 transition group-hover:opacity-95" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-sm">
                <span className="font-medium text-fog">{photo.caption}</span>
                <span className="translate-x-2 text-amber opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>

        {hidden > 0 || expanded ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="btn btn-outline"
            >
              {expanded
                ? "Show fewer photos"
                : `Show all ${matching.length} photos`}
            </button>
          </div>
        ) : null}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-night/97 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(delta) > 50) step(delta > 0 ? -1 : 1);
            touchStart.current = null;
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 text-sm sm:px-8">
            <p className="text-fog">
              {current.caption}
              <span className="ml-3 text-muted">
                {active! + 1} / {gallery.length}
              </span>
            </p>
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-line px-4 py-2 text-fog transition hover:border-white/50"
            >
              Close ✕
            </button>
          </div>

          <div className="relative min-h-0 flex-1 px-3 sm:px-8">
            <img
              src={asset(current.src)}
              alt={current.alt}
              className="absolute inset-0 mx-auto h-full w-full object-contain px-3 sm:px-8"
            />
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-night/70 text-xl text-fog transition hover:border-amber hover:text-amber sm:flex"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-night/70 text-xl text-fog transition hover:border-amber hover:text-amber sm:flex"
            >
              →
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto px-5 py-4 sm:px-8">
            {gallery.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={photo.caption}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition ${
                  index === active ? "border-amber opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <img src={asset(photo.src)} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
