import { getProperties } from "@/api/api";

import Banner from "@/components/Banner/Banner";

import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";

import HowItWorks from "@/components/HowItWorks/HowItWorks";

import "./Home.css";

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <main className="home-page">
      <div className="container">
        <Banner />

        <PropertyGrid properties={properties} />

        <HowItWorks />
      </div>
    </main>
  );
}
