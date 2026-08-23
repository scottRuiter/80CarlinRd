import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/property";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="kicker">Straight answers</p>
          <h2 className="display text-4xl sm:text-6xl">
            Asked before <em className="text-amber">every</em> showing.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="text-lg font-medium text-fog transition group-hover:text-amber">
                    {item.q}
                  </span>
                  <span className="mt-1 text-xl text-muted transition duration-300 group-open:rotate-45 group-open:text-amber">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
