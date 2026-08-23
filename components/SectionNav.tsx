"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/property";

export function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-3">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex items-center justify-end gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`text-xs tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-amber opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive ? "w-8 bg-amber" : "w-4 bg-white/25 group-hover:w-6 group-hover:bg-white/60"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
