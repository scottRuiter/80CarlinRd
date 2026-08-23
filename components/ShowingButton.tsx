import { CtaLink } from "@/components/CtaLink";
import { ctas } from "@/lib/property";

type ShowingButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function ShowingButton({
  className = "btn-primary",
  children = "Schedule a Showing",
}: ShowingButtonProps) {
  return (
    <CtaLink href={ctas.showing} className={className}>
      {children}
    </CtaLink>
  );
}
