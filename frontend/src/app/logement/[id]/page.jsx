/**
 * Fetches a property from the API using its id.
 *
 * @param {string} id - Property identifier
 * @returns {Promise<Object>} Property data
 * @throws {Error} If the request fails
 */
import Image from "next/image";

import Link from "next/link";

import Gallery from "@/components/Gallery/Gallery";

import HostCard from "@/components/HostCard/HostCard";

import "./Logement.css";

async function getProperty(id) {
  const response = await fetch(`http://127.0.0.1:3000/api/properties/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer le logement");
  }

  return response.json();
}

/**
 * Displays the property detail page with gallery,
 * host information, description and structured SEO data.
 *
 * @param {Object} props
 * @param {Object} props.params - Dynamic route parameters
 */
export default async function PropertyPage({ params }) {
  const resolvedParams = await params;

  const property = await getProperty(resolvedParams.id);

  /**
   * Structured data used for SEO and search engine indexing.
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.title,
    description: property.description,
    image: property.cover,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
    },
    amenityFeature:
      property.equipments?.map((equipment) => ({
        "@type": "LocationFeatureSpecification",
        name: equipment,
      })) || [],
  };

  return (
    <main className="logement-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || {}),
        }}
      />

      <div className="logement-page__container">
        <header className="logement-page__header">
          <Link href="/home" className="logement-page__back-link">
            <Image
              src="/icons/Property 1=back.svg"
              alt=""
              width={16}
              height={16}
            />

            <span>Retour aux annonces</span>
          </Link>
        </header>

        <section className="logement-page__top-section">
          <Gallery images={property.pictures} />

          <div className="logement-page__desktop-host">
            <HostCard host={property.host} rating={property.rating_avg} />
          </div>
        </section>

        <section className="logement-page__details">
          <div className="logement-page__intro">
            <h1 className="logement-page__title">{property.title}</h1>

            <div className="logement-page__location">
              <Image
                src="/icons/Property 1=localisation.svg"
                alt=""
                width={16}
                height={16}
              />

              <span>{property.location}</span>
            </div>
          </div>

          <div className="logement-page__section">
            <h2>Description</h2>

            <p className="logement-page__description">{property.description}</p>
          </div>

          <div className="logement-page__section">
            <h2>Équipements</h2>

            <div className="logement-page__tags">
              {property.equipments?.map((equipment) => (
                <span key={equipment}>{equipment}</span>
              ))}
            </div>
          </div>

          <div className="logement-page__section">
            <h2>Catégorie</h2>

            <div className="logement-page__tags">
              {property.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="logement-page__mobile-host">
          <HostCard host={property.host} rating={property.rating_avg} />
        </div>
      </div>
    </main>
  );
}
