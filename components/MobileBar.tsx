import { ctas, property } from "@/lib/property";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-night/95 px-4 py-3 backdrop-blur-lg lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={ctas.tel}
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-semibold text-fog"
        >
          Call
        </a>
        <a
          href={ctas.sms}
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-semibold text-fog"
        >
          Text
        </a>
        <a
          href={ctas.showing}
          className="flex h-12 flex-[1.4] items-center justify-center rounded-full bg-amber text-sm font-semibold text-[#14100a]"
        >
          Request a showing
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-muted">
        {property.rent} · {property.contactPhoneLabel}
      </p>
    </div>
  );
}
