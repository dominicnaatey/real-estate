import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Contact
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Reach out at{" "}
            <a
              href="mailto:hello@example.com"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              hello@example.com
            </a>
            .
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/.08 px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/.08 px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/about"
          >
            About
          </Link>
        </div>
      </main>
    </div>
  );
}
