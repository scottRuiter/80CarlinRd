"use client";

import { useState } from "react";

const neighbors = [0, 1, 2, 4, 5, 6];

export function BlackoutDemo() {
  const [out, setOut] = useState(false);

  return (
    <div className="glass overflow-hidden p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-fog">Try the outage</p>
          <p className="mt-1 text-sm text-muted">
            {out
              ? "Utility power is out. 80 Carlin Rd is still running."
              : "The street is on utility power."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOut((value) => !value)}
          aria-pressed={out}
          className={`btn ${out ? "btn-amber" : "btn-outline"}`}
        >
          {out ? "Restore power" : "Cut the power"}
        </button>
      </div>

      <div
        className={`mt-8 flex items-end justify-center gap-2 rounded-2xl px-3 py-8 transition-colors duration-700 sm:gap-4 ${
          out ? "bg-[#04060a]" : "bg-white/5"
        }`}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((index) => {
          const isOurs = index === 3;
          const lit = isOurs || !out;

          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <svg
                viewBox="0 0 48 44"
                className={`transition-all duration-700 ${
                  isOurs ? "w-14 sm:w-20" : "w-9 opacity-90 sm:w-12"
                }`}
                style={
                  isOurs && out
                    ? { filter: "drop-shadow(0 0 18px rgba(242,166,59,0.65))" }
                    : undefined
                }
                aria-hidden="true"
              >
                <path
                  d="M4 20 24 4l20 16v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                  fill={lit ? "#1b2130" : "#0a0d13"}
                  stroke={lit ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}
                  strokeWidth="1.5"
                />
                <rect
                  x="14"
                  y="24"
                  width="8"
                  height="8"
                  rx="1"
                  fill={lit ? "#f2a63b" : "#12161f"}
                  className="transition-colors duration-700"
                />
                <rect
                  x="27"
                  y="24"
                  width="8"
                  height="8"
                  rx="1"
                  fill={lit ? "#f2a63b" : "#12161f"}
                  className="transition-colors duration-700"
                />
              </svg>
              <span
                className={`text-[10px] tracking-wide uppercase transition-colors duration-700 ${
                  isOurs ? "text-amber" : "text-muted/60"
                }`}
              >
                {isOurs ? "80 Carlin" : neighbors.includes(index) ? "•" : ""}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted">
        The automatic transfer switch does this on its own — no cords, no manual
        start, no waiting for the utility.
      </p>
    </div>
  );
}
