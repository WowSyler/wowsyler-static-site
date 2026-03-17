import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/lib/routes';

export default function NotFoundView() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#0A2342] uppercase">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0A2342] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you requested does not exist or has moved. Use the homepage to continue in the
          correct language flow.
        </p>
        <div className="mt-8">
          <Link
            href={`/${DEFAULT_LOCALE}/`}
            className="inline-flex items-center rounded-full bg-[#0A2342] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#123765]"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
