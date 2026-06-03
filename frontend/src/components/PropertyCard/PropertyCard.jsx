/**
 * Displays a clickable property card with image,
 * location, price and favorite button.
 *
 * The favorite button is dynamically imported on
 * the client side to avoid hydration issues caused
 * by localStorage usage.
 *
 * @param {Object} props
 * @param {Object} props.property - Property data
 */
"use client";

import dynamic from "next/dynamic";

import Image from "next/image";

import Link from "next/link";

import "./PropertyCard.css";

const FavoriteButton = dynamic(
  () => import("@/components/FavoriteButton/FavoriteButton"),
  {
    ssr: false,
  },
);

export default function PropertyCard({ property }) {
  return (
    <Link href={`/logement/${property.id}`} className="property-card__link">
      <article className="property-card">
        <div className="property-card__image-wrapper">
          <FavoriteButton propertyId={property.id} />

          <Image
            src={property.cover}
            alt=""
            width={400}
            height={300}
            className="property-card__image"
          />
        </div>

        <div className="property-card__content">
          <h2 className="property-card__title">{property.title}</h2>

          <p className="property-card__location">{property.location}</p>

          <p className="property-card__price">
            {property.price_per_night}€ <span>par nuit</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
