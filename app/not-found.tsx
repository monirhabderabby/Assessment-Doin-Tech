import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className={`bg-blueprint bg-brand text-white ${styles.hero}`}
    >
      <div className="container flex flex-col items-center text-center">
        <div aria-hidden="true" className={styles.code}>
          404
        </div>
        <h1 id="not-found-title" className={styles.title}>
          <span className="sr-only">404: </span>
          The page you are looking
          <br className="hidden sm:block" /> for doesn’t exist
        </h1>
        <p className={styles.description}>
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-lime px-6 py-2.5 text-lg font-medium text-ink transition-colors hover:bg-white focus-visible:outline-white sm:mt-9"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
