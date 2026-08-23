type CtaLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function CtaLink({ href, className, children }: CtaLinkProps) {
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
