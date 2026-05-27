/**
 * Displays a favorite button for a property card.
 * Favorites are stored in localStorage to persist
 * between browser sessions.
 *
 * @param {Object} props
 * @param {string} props.propertyId - Property identifier
 */
"use client";

import { useState } from "react";

import Image from "next/image";

import "./FavoriteButton.css";

export default function FavoriteButton({ propertyId }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    return storedFavorites.includes(propertyId);
  });

  /**
   * Adds or removes a property from favorites.
   *
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */
  function toggleFavorite(event) {
    event.preventDefault();

    event.stopPropagation();

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;

    if (storedFavorites.includes(propertyId)) {
      updatedFavorites = storedFavorites.filter(
        (favoriteId) => favoriteId !== propertyId,
      );

      setIsFavorite(false);
    } else {
      updatedFavorites = [...storedFavorites, propertyId];

      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <button
      type="button"
      className={`property-card__favorite-button ${
        isFavorite ? "property-card__favorite-button--active" : ""
      }`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <Image src="/icons/favorite.svg" alt="" width={16} height={16} />
    </button>
  );
}
