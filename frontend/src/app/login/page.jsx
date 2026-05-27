/**
 * Displays the user login page and handles
 * authentication with the backend API.
 *
 * Stores the authentication token in localStorage
 * after a successful login.
 */
"use client";

import { useState } from "react";

import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  /**
   * Sends login credentials to the API
   * and handles authentication errors.
   *
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Identifiants invalides");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);

      alert("Connexion réussie");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-card__content">
          <h1 className="login-card__title">Heureux de vous revoir</h1>

          <p className="login-card__subtitle">
            Connectez-vous pour retrouver vos réservations, vos annonces et tout
            ce qui rend vos séjours uniques.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__group">
              <label htmlFor="email">Adresse email</label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="login-form__group">
              <label htmlFor="password">Mot de passe</label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && <p className="login-form__error">{error}</p>}

            <button type="submit" className="login-form__button">
              Se connecter
            </button>
          </form>

          <div className="login-card__links">
            <button type="button">Mot de passe oublié</button>

            <button type="button">Pas encore de compte ? Inscrivez-vous</button>
          </div>
        </div>
      </section>
    </main>
  );
}
