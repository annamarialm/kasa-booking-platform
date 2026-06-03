import Image from "next/image";

import Link from "next/link";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link href="/home" className="footer__logo" aria-label="Accueil">
          <Image
            src="/logos/house-logo.svg"
            alt="Logo Kasa - retour accueil"
            width={46}
            height={53}
          />
        </Link>

        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
