/**
 * Displays an interactive image gallery for a property.
 * Users can navigate using buttons or keyboard arrows.
 *
 * @param {Object} props
 * @param {string[]} props.images - List of property image URLs
 */
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import "./Gallery.css";

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images && images.length > 0;

  const hasMultipleImages = images && images.length > 1;

  /**
   * Displays the next image in the gallery.
   * Loops back to the first image at the end.
   */
  function showNextImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1,
    );
  }

  /**
   * Displays the previous image in the gallery.
   * Loops back to the last image at the beginning.
   */
  function showPreviousImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1,
    );
  }

  useEffect(() => {
    /**
     * Handles keyboard navigation for the gallery.
     *
     * @param {KeyboardEvent} event
     */
    function handleKeyDown(event) {
      if (!hasMultipleImages) {
        return;
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((previousIndex) =>
          previousIndex === images.length - 1 ? 0 : previousIndex + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((previousIndex) =>
          previousIndex === 0 ? images.length - 1 : previousIndex - 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, images]);

  if (!hasImages) {
    return null;
  }

  return (
    <section className="gallery" aria-label="Galerie photos du logement">
      <div className="gallery__image-container">
        <Image
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1} du logement`}
          fill
          className="gallery__image"
          priority
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="gallery__button gallery__button--previous"
              onClick={showPreviousImage}
              aria-label="Image précédente"
            >
              ←
            </button>

            <button
              type="button"
              className="gallery__button gallery__button--next"
              onClick={showNextImage}
              aria-label="Image suivante"
            >
              →
            </button>

            <div className="gallery__counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
