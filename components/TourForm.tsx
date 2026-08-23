"use client";

import { useState } from "react";
import { property } from "@/lib/property";

// Split so the address is not sitting in the HTML as one scrapable string.
const inbox = ["scott.a.ruiter", "gmail.com"].join("@");
const endpoint = `https://formsubmit.co/ajax/${inbox}`;

const blank = {
  name: "",
  email: "",
  phone: "",
  moveIn: "",
  occupants: "",
  pets: "",
  message: "",
  company: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function TourForm() {
  const [values, setValues] = useState(blank);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof typeof blank) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [key]: event.target.value }));
      if (status === "error") setStatus("idle");
    };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.company) return;

    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Showing request — 80 Carlin Rd — ${values.name}`,
          _template: "table",
          _captcha: "false",
          Name: values.name,
          Email: values.email,
          Phone: values.phone || "—",
          "Desired move-in": values.moveIn || "—",
          Occupants: values.occupants || "—",
          Pets: values.pets || "—",
          Message: values.message || "—",
          Property: "80 Carlin Rd, Conklin, NY 13748",
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues(blank);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber/15 text-3xl text-amber">
          ✓
        </div>
        <h3 className="display mt-6 text-3xl">Request sent.</h3>
        <p className="mt-3 max-w-sm text-muted">
          Your showing request is on its way to {property.contactName}. Expect a
          reply by email or phone.
        </p>
        <p className="mt-6 text-sm text-muted">
          Need it sooner? Call{" "}
          <a href={`tel:+1${property.contactPhone}`} className="font-semibold text-amber">
            {property.contactPhoneLabel}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-outline mt-8"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 p-6 sm:p-8">
      <div>
        <h3 className="display text-3xl">Request a showing</h3>
        <p className="mt-2 text-sm text-muted">
          Fill this out and hit save. It goes straight to {property.contactName}.
        </p>
      </div>

      <input
        type="text"
        name="company"
        value={values.company}
        onChange={update("company")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Name *</span>
          <input required name="name" value={values.name} onChange={update("name")} className="field" />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Email *</span>
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={update("email")}
            className="field"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Phone</span>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={update("phone")}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Desired move-in</span>
          <input
            name="moveIn"
            placeholder="Month or date"
            value={values.moveIn}
            onChange={update("moveIn")}
            className="field"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Occupants</span>
          <input
            name="occupants"
            placeholder="How many people"
            value={values.occupants}
            onChange={update("occupants")}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-fog">Pets</span>
          <input
            name="pets"
            placeholder="Type and size, if any"
            value={values.pets}
            onChange={update("pets")}
            className="field"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-fog">When can you walk through?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Weeknights after 5, Saturday morning…"
          value={values.message}
          onChange={update("message")}
          className="field py-3"
        />
      </label>

      <button type="submit" className="btn btn-amber w-full" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Save & Send Request"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-ember">
          That did not go through. Call or text{" "}
          <a href={`tel:+1${property.contactPhone}`} className="font-semibold underline">
            {property.contactPhoneLabel}
          </a>{" "}
          instead.
        </p>
      ) : (
        <p className="text-xs text-muted">
          Your details are only used to arrange a showing for this property.
        </p>
      )}
    </form>
  );
}
