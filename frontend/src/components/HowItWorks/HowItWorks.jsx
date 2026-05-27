import "./HowItWorks.css";

const steps = [
  {
    title: "Recherchez",
    description:
      "Entrez votre destination, vos dates et laissez Kasa faire le reste",
  },
  {
    title: "Réservez",
    description:
      "Profitez d’une plateforme sécurisée et de profils d’hôtes vérifiés.",
  },
  {
    title: "Vivez l’expérience",
    description:
      "Installez-vous, profitez de votre séjour, et sentez-vous chez vous, partout.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__content">
        <div className="how-it-works__title-wrapper">
          <h2 className="how-it-works__title">Comment ça marche ?</h2>

          <p className="how-it-works__subtitle">
            Que vous partiez pour un week-end improvisé, des vacances en famille
            ou un voyage professionnel, Kasa vous aide à trouver un lieu qui
            vous ressemble.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step) => (
            <article key={step.title} className="how-it-works__card">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
