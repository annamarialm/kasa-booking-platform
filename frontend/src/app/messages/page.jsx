import "./Messages.css";

const conversations = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,

  name: "Utilisateur",

  message: "Bonjour, votre appartement est-il disponible...",

  time: "11:04 am",
}));

const messages = [
  {
    id: 1,

    sender: "other",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },

  {
    id: 2,

    sender: "other",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },

  {
    id: 3,

    sender: "me",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },

  {
    id: 4,

    sender: "other",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },

  {
    id: 5,

    sender: "me",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },

  {
    id: 6,

    sender: "other",

    text: "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?",
  },
];

export default function MessagesPage() {
  return (
    <main className="messages-page">
      <section className="messages-sidebar">
        <button type="button" className="messages-sidebar__back">
          ← Retour
        </button>

        <h1 className="messages-sidebar__title">Messages</h1>

        <div className="messages-sidebar__list">
          {conversations.map((conversation) => (
            <article key={conversation.id} className="conversation-card">
              <div className="conversation-card__avatar" />

              <div className="conversation-card__content">
                <div className="conversation-card__top">
                  <h2>{conversation.name}</h2>

                  <span>{conversation.time}</span>
                </div>

                <div className="conversation-card__bottom">
                  <p>{conversation.message}</p>

                  <div className="conversation-card__dot" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="messages-chat">
        <div className="messages-chat__content">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.sender === "me" ? "message--me" : ""
              }`}
            >
              <div className="message__avatar" />

              <div className="message__body">
                <div className="message__meta">
                  <span>Utilisateur</span>

                  <span>11:04pm</span>
                </div>

                <div className="message__bubble">{message.text}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="messages-input">
          <textarea placeholder="Envoyer un message" />

          <button type="submit">↑</button>
        </form>
      </section>
    </main>
  );
}
