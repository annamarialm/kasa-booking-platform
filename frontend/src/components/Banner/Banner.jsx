import Image from "next/image";

import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>

        <p className="banner__subtitle">
          Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux,
          sélectionnés avec soin par nos hôtes.
        </p>
      </div>

      <div className="banner__image-wrapper">
        <Image
          src="/images/home-banner.jpg"
          alt="Maison moderne dans la nature"
          width={1115}
          height={572}
          priority
          className="banner__image"
        />
      </div>
    </section>
  );
}
