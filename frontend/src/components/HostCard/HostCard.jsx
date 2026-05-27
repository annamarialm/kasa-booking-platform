import Image from "next/image";

import Link from "next/link";

import "./HostCard.css";

export default function HostCard({ host, rating }) {
  if (!host) {
    return null;
  }

  return (
    <aside className="host-card">
      <h2 className="host-card__title">Votre hôte</h2>

      <div className="host-card__profile">
        <div className="host-card__profile-left">
          <Image
            src={host.picture}
            alt={host.name}
            width={81}
            height={82}
            className="host-card__avatar"
          />

          <div className="host-card__info">
            <p>{host.name}</p>
          </div>
        </div>

        <div className="host-card__rating">
          <Image src="/icons/Star 1.svg" alt="" width={16} height={16} />

          <span>{rating}</span>
        </div>
      </div>

      <div className="host-card__buttons">
        <button type="button">Contacter l’hôte</button>

        <Link href="/messages" className="host-card__message-button">
          Envoyer un message
        </Link>
      </div>
    </aside>
  );
}
