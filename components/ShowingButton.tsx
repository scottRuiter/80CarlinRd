import { property } from "@/lib/property";

type ShowingButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

function showingHref() {
  if (property.showingHref) return property.showingHref;
  if (property.contactEmail) {
    return `mailto:${property.contactEmail}?subject=${encodeURIComponent("Showing request — 80 Carlin Rd")}`;
  }
  return "#contact";
}

export function ShowingButton({
  className = "btn-primary",
  children = "Schedule a Showing",
}: ShowingButtonProps) {
  const href = showingHref();
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
    >
      {children}
    </a>
  );
}
