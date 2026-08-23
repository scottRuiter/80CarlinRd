import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-20">
      <p className="section-kicker">404</p>
      <h1 className="font-display text-4xl font-semibold">This page is not on the lot.</h1>
      <p className="mt-4 max-w-md text-muted">
        The address is still 80 Carlin Rd. The path you asked for is not.
      </p>
      <Link href="/" className="btn-primary mt-8 w-fit">
        Back to 80 Carlin Rd
      </Link>
    </main>
  );
}
