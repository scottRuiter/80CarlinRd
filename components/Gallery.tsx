"use client";

import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { gallery } from "@/lib/property";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((current) =>
      current === null ? current : (current + gallery.length - 1) % gallery.length,
    );
  }, []);
  const next = useCallback(() => {
    setActive((current) =>
      current === null ? current : (current + 1) % gallery.length,
    );
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : gallery[active];

  return (
    <section id="gallery" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Photo gallery</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Walk through the house.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {gallery.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-line text-left"
            >
              <img
                src={asset(photo.src)}
                alt={photo.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 py-2 text-sm text-white">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-ink/92 p-3 text-white sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <div className="mb-3 flex items-center justify-between gap-3 text-sm">
            <p>
              {current.caption}
              <span className="ml-2 text-white/60">
                {active! + 1} / {gallery.length}
              </span>
            </p>
            <button type="button" className="btn-ghost min-h-10 px-4" onClick={close}>
              Close
            </button>
          </div>
          <div
            className="relative min-h-0 flex-1"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={asset(current.src)}
              alt={current.alt}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <div className="mt-3 flex justify-between gap-3">
            <button type="button" className="btn-ghost min-h-10 flex-1" onClick={(event) => { event.stopPropagation(); prev(); }}>
              Previous
            </button>
            <button type="button" className="btn-ghost min-h-10 flex-1" onClick={(event) => { event.stopPropagation(); next(); }}>
              Next
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
