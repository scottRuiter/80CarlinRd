import { CtaLink } from "@/components/CtaLink";
import { ShowingButton } from "@/components/ShowingButton";
import { ctas, rentLabel } from "@/lib/property";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{rentLabel}</p>
          <CtaLink href={ctas.gallery} className="text-xs font-semibold text-brick">
            View photos
          </CtaLink>
        </div>
        <ShowingButton className="btn-primary shrink-0 px-4" />
      </div>
    </div>
  );
}
