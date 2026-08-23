"use client";

import { useState } from "react";
import { ctas, property } from "@/lib/property";

const fields = {
  name: "",
  email: "",
  phone: "",
  dates: "",
  pets: "",
  message: "",
};

function buildMessage(values: typeof fields) {
  return [
    "Showing request for 80 Carlin Rd, Conklin, NY 13748",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Preferred dates: ${values.dates || "—"}`,
    `Pets: ${values.pets || "—"}`,
    "",
    values.message || "I would like to schedule a showing.",
  ].join("\n");
}

export function InquiryForm() {
  const [values, setValues] = useState(fields);
  const [status, setStatus] = useState<"idle" | "copied" | "sent" | "error">("idle");
  const [busy, setBusy] = useState(false);

  const update = (key: keyof typeof fields) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setStatus("idle");
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);

    const body = buildMessage(values);
    const subject = "Showing request — 80 Carlin Rd";

    try {
      if (property.web3formsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: property.web3formsKey,
            subject,
            from_name: values.name,
            email: values.email,
            message: body,
          }),
        });
        if (!response.ok) throw new Error("Submit failed");
        setStatus("sent");
        return;
      }

      if (property.contactEmail) {
        window.location.href = `mailto:${property.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        return;
      }

      await navigator.clipboard.writeText(body);
      setStatus("copied");
      window.open(ctas.zillow, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Name</span>
          <input
            required
            name="name"
            value={values.name}
            onChange={update("name")}
            className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Email</span>
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={update("email")}
            className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Phone</span>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={update("phone")}
            className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Preferred showing dates</span>
          <input
            name="dates"
            placeholder="Weeknights after 5, Saturday morning…"
            value={values.dates}
            onChange={update("dates")}
            className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="font-semibold">Pets, if any</span>
        <input
          name="pets"
          placeholder="Optional"
          value={values.pets}
          onChange={update("pets")}
          className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-semibold">Message</span>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          className="rounded-xl border border-line bg-paper px-3 py-3 text-ink"
        />
      </label>
      <button type="submit" className="btn-primary" disabled={busy}>
        {busy ? "Sending…" : "Request a Showing"}
      </button>
      {status === "copied" ? (
        <p className="text-sm text-paper/80">
          Your request was copied. Finish it on the Zillow listing contact form that just opened.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="text-sm text-paper/80">Request ready. Check your email app or wait for a reply.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-power">Something went wrong. Use View on Zillow and send the same details there.</p>
      ) : null}
    </form>
  );
}
