"use client";

import { useState, type ReactNode } from "react";
import { property } from "@/lib/property";

// Split so the address is not sitting in the HTML as one scrapable string.
const inbox = ["scott.a.ruiter", "gmail.com"].join("@");
const endpoint = `https://formsubmit.co/ajax/${inbox}`;

const blank = {
  name: "",
  email: "",
  phone: "",
  bestTime: "",
  currentCity: "",
  adults: "",
  children: "",
  pets: "",
  vehicles: "",
  income: "",
  credit: "",
  insurance: "",
  employer: "",
  moveIn: "",
  showing: "",
  message: "",
  company: "",
};

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-fog">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-xs tracking-[0.18em] text-amber uppercase">{children}</p>
  );
}

export function TourForm() {
  const [values, setValues] = useState(blank);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof typeof blank) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          _replyto: values.email,
          Name: values.name,
          Email: values.email,
          Phone: values.phone,
          "Best time to reach": values.bestTime || "—",
          "Current city": values.currentCity || "—",
          Adults: values.adults,
          Children: values.children || "0",
          Pets: values.pets || "None",
          Vehicles: values.vehicles || "—",
          "Monthly household income": values.income,
          "Credit score": values.credit,
          "Renters insurance": values.insurance,
          "Employer / occupation": values.employer || "—",
          "Desired move-in": values.moveIn,
          "Preferred showing time": values.showing,
          Notes: values.message || "—",
          Property: "80 Carlin Rd, Conklin, NY 13748",
        }),
      });

      // FormSubmit answers 200 even when it rejects the submission (for example
      // when the inbox has never been activated), so the body decides, not the status.
      const result = await response.json().catch(() => null);
      const delivered = String(result?.success) === "true";
      if (!response.ok || !delivered) throw new Error("Request failed");

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
    <form onSubmit={onSubmit} className="glass grid gap-5 p-5 sm:p-7">

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

      <Heading>Contact</Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Full name" required>
          <input
            required
            autoComplete="name"
            name="name"
            value={values.name}
            onChange={update("name")}
            className="field"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            autoComplete="email"
            name="email"
            value={values.email}
            onChange={update("email")}
            className="field"
          />
        </Field>
        <Field label="Phone" required>
          <input
            required
            type="tel"
            autoComplete="tel"
            name="phone"
            placeholder="(607) 555-0100"
            value={values.phone}
            onChange={update("phone")}
            className="field"
          />
        </Field>
        <Field label="Best time to reach you">
          <input
            name="bestTime"
            placeholder="Weeknights after 6, lunch…"
            value={values.bestTime}
            onChange={update("bestTime")}
            className="field"
          />
        </Field>
        <Field label="Current city">
          <input
            name="currentCity"
            placeholder="Endicott, relocating from…"
            value={values.currentCity}
            onChange={update("currentCity")}
            className="field"
          />
        </Field>
        <Field label="Employer / occupation">
          <input
            name="employer"
            placeholder="Company or role"
            value={values.employer}
            onChange={update("employer")}
            className="field"
          />
        </Field>
      </div>

      <Heading>Household</Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Adults" required>
          <input
            required
            inputMode="numeric"
            name="adults"
            placeholder="How many"
            value={values.adults}
            onChange={update("adults")}
            className="field"
          />
        </Field>
        <Field label="Children">
          <input
            name="children"
            placeholder="Ages, if any"
            value={values.children}
            onChange={update("children")}
            className="field"
          />
        </Field>
        <Field label="Pets">
          <input
            name="pets"
            placeholder="Type, size, and count"
            value={values.pets}
            onChange={update("pets")}
            className="field"
          />
        </Field>
        <Field label="Vehicles">
          <input
            name="vehicles"
            placeholder="How many, plus any oversized"
            value={values.vehicles}
            onChange={update("vehicles")}
            className="field"
          />
        </Field>
      </div>

      <Heading>Qualifications</Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Monthly household income" required>
          <input
            required
            name="income"
            placeholder="$7,500 or more"
            value={values.income}
            onChange={update("income")}
            className="field"
          />
        </Field>
        <Field label="Credit score" required>
          <select
            required
            name="credit"
            value={values.credit}
            onChange={update("credit")}
            className="field"
          >
            <option value="">Select a range</option>
            <option value="750+">750 or higher</option>
            <option value="700–749">700–749</option>
            <option value="650–699">650–699</option>
            <option value="Below 650">Below 650</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </Field>
        <Field label="Renters insurance" required>
          <select
            required
            name="insurance"
            value={values.insurance}
            onChange={update("insurance")}
            className="field"
          >
            <option value="">Select one</option>
            <option value="Already have a policy">Already have a policy</option>
            <option value="Will obtain before move-in">Will obtain before move-in</option>
            <option value="Need more information">Need more information</option>
          </select>
        </Field>
        <Field label="Desired move-in" required>
          <input
            required
            name="moveIn"
            placeholder="Month or date"
            value={values.moveIn}
            onChange={update("moveIn")}
            className="field"
          />
        </Field>
      </div>

      <Heading>Showing</Heading>
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Field label="When can you walk through?" required>
          <input
            required
            name="showing"
            placeholder="Thursday after 5, Saturday morning…"
            value={values.showing}
            onChange={update("showing")}
            className="field"
          />
        </Field>
        <Field label="Anything else we should know?">
          <textarea
            name="message"
            rows={3}
            placeholder="Questions about the house, pets, schools…"
            value={values.message}
            onChange={update("message")}
            className="field py-3"
          />
        </Field>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
        <button type="submit" className="btn btn-amber sm:min-w-56" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send showing request"}
        </button>
      </div>
    </form>
  );
}
