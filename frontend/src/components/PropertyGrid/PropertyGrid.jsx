import PropertyCard from "@/components/PropertyCard/PropertyCard";

import "./PropertyGrid.css";

export default function PropertyGrid({ properties }) {
  return (
    <section className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
}
