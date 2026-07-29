import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900">
      <div className="text-center">
        {/* Decorative Status Badge */}
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          404
        </p>

        {/* Main Heading */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Page not found
        </h1>

        {/* Description */}
        <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL or the page has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
