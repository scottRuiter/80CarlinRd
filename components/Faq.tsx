import { faqs } from "@/lib/property";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="section-kicker">Good questions</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          What renters usually ask first.
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
