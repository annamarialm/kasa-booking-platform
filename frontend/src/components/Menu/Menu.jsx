"use client";

import { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import "./Menu.css";

export default function Menu() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === "/" || pathname === "/home";

  const isAboutPage = pathname === "/about";

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="menu">
      <nav className="menu__nav">
        {/* DESKTOP */}

        <div className="menu__desktop">
          <div className="menu__desktop-links">
            <Link
              href="/home"
              className={`menu__link ${isHomePage ? "menu__link--active" : ""}`}
              aria-current={isHomePage ? "page" : undefined}
            >
              Accueil
            </Link>

            <Link
              href="/about"
              className={`menu__link ${
                isAboutPage ? "menu__link--active" : ""
              }`}
              aria-current={isAboutPage ? "page" : undefined}
            >
              À propos
            </Link>
          </div>
          <Link href="/home" aria-label="Accueil" className="menu__logo">
            <Image
              src="/logos/logo.svg"
              alt="Kasa"
              width={147}
              height={40}
              priority
            />
          </Link>
          <Link href="/ajout" className="menu__add-link">
            +Ajouter un logement
          </Link>
          <div className="menu__icons">
            <button
              type="button"
              className="menu__icon-button"
              aria-label="Favoris"
            >
              <Image
                src="/icons/red-favorite.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>

            <span className="menu__separator" />

            <Link
              href="/messages"
              className="menu__icon-button"
              aria-label="Messagerie"
            >
              <Image
                src="/icons/red-message.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
          </div>{" "}
        </div>

        {/* MOBILE TOPBAR */}

        <div className="menu__mobile-topbar">
          <Link
            href="/home"
            aria-label="Accueil"
            className="menu__mobile-logo"
            onClick={closeMenu}
          >
            <Image
              src="/logos/house-logo.svg"
              alt="Kasa"
              width={44}
              height={44}
              priority
            />
          </Link>

          <button
            type="button"
            className="menu__burger"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <Image
              src="/icons/Property 1=menu.svg"
              alt=""
              width={46}
              height={46}
            />
          </button>
        </div>

        {/* MOBILE PANEL */}

        {isMenuOpen && (
          <div className="menu__mobile-panel">
            <div className="menu__mobile-header">
              <Link
                href="/home"
                aria-label="Accueil"
                className="menu__mobile-logo"
                onClick={closeMenu}
              >
                <Image
                  src="/logos/house-logo.svg"
                  alt="Kasa"
                  width={44}
                  height={44}
                  priority
                />
              </Link>

              <button
                type="button"
                className="menu__close-button"
                aria-label="Fermer le menu"
                onClick={closeMenu}
              >
                ✕
              </button>
            </div>

            <div className="menu__mobile-links">
              <Link
                href="/home"
                className={`menu__mobile-link ${
                  isHomePage ? "menu__mobile-link--active" : ""
                }`}
                aria-current={isHomePage ? "page" : undefined}
                onClick={closeMenu}
              >
                Accueil
              </Link>

              <Link
                href="/about"
                className={`menu__mobile-link ${
                  isAboutPage ? "menu__mobile-link--active" : ""
                }`}
                aria-current={isAboutPage ? "page" : undefined}
                onClick={closeMenu}
              >
                À propos
              </Link>

              <Link
                href="/messages"
                className="menu__mobile-link"
                onClick={closeMenu}
              >
                Messagerie
              </Link>

              <Link
                href="/favorites"
                className="menu__mobile-link"
                onClick={closeMenu}
              >
                Favoris
              </Link>
            </div>

            <Link
              href="/ajout"
              className="menu__mobile-button"
              onClick={closeMenu}
            >
              Ajouter un logement
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
