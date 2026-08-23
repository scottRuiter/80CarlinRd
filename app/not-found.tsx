import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="kicker">404</p>
      <h1 className="display text-5xl sm:text-7xl">
        This page is not on the lot.
      </h1>
      <p className="mt-5 max-w-md text-muted">
        The address is still 80 Carlin Rd. The path you asked for is not.
      </p>
      <Link href="/" className="btn btn-amber mt-10 w-fit">
        Back to 80 Carlin Rd
      </Link>
    </main>
  );
}
