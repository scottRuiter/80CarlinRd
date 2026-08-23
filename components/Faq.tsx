import { Reveal } from "@/components/Reveal";
import { faqs, qualifications } from "@/lib/property";

function FaqList({ items }: { items: typeof faqs }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <span className="font-medium text-fog transition group-hover:text-amber">
              {item.q}
            </span>
            <span className="mt-0.5 text-xl text-muted transition duration-300 group-open:rotate-45 group-open:text-amber">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq() {
  const half = Math.ceil(faqs.length / 2);

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker">Qualifications</p>
              <h2 className="display max-w-3xl text-4xl sm:text-6xl">
                Clear bar before you <em className="text-amber">apply</em>.
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              These are the expectations for 80 Carlin Rd. Please confirm them
              before requesting a showing.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {qualifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="glass h-full p-7">
                <p className="text-xs tracking-[0.2em] text-amber uppercase">
                  0{index + 1}
                </p>
                <h3 className="display mt-4 text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="kicker">Straight answers</p>
          <h2 className="display text-4xl sm:text-5xl">
            Asked before <em className="text-amber">every</em> showing.
          </h2>
        </Reveal>

        <Reveal className="mt-8" delay={80}>
          <div className="grid gap-x-12 lg:grid-cols-2">
            <FaqList items={faqs.slice(0, half)} />
            <FaqList items={faqs.slice(half)} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
