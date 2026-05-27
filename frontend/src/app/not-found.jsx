import Link from "next/link";

import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-page__content">
        <h1 className="not-found-page__title">404</h1>

        <p className="not-found-page__text">
          Il semble que la page que vous cherchez ait pris des vacances... ou
          n’ait jamais existé.
        </p>

        <div className="not-found-page__actions">
          <Link href="/home" className="not-found-page__button">
            Accueil
          </Link>

          <Link href="/home" className="not-found-page__button">
            Logements
          </Link>
        </div>
      </section>
    </main>
  );
}
