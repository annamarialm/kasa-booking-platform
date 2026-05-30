<a id="english"></a>

# 🏡 Kasa Booking Platform (Full Stack Project)

🇬🇧 [English](#english) | 🇫🇷 [Version Française](#francais)

A full-stack application for a fictional property rental platform inspired by Kasa.

The project is structured as a monorepo containing both a **frontend (Next.js)** and a **backend (Express + SQLite)**.

---

## 🌐 Live Demo (Frontend Only)

🔗 https://kasa-booking-platform.vercel.app

---

## 📌 Project Overview

Kasa is a peer-to-peer accommodation platform allowing users to browse property listings, view detailed property pages, and interact with a messaging interface.

This project includes:

- A **frontend application built with Next.js**
- A **backend API built with Express.js and SQLite**
- A full REST API with authentication, properties, favorites, ratings, and uploads

For production deployment, the frontend uses a **mocked JSON dataset** instead of the backend API to ensure stable hosting on Vercel.

---

## 📁 Project Structure

```text
frontend/ → Next.js application (UI)
backend/  → Express API (SQLite database)
```

---

## ⚙️ Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- JavaScript (ES6+)
- CSS
- Jest
- React Testing Library
- Vercel

### Backend

- Express.js
- SQLite
- JWT Authentication
- OpenAPI Documentation

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd kasa-booking-platform
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Run the Backend

```bash
cd backend
npm start
```

Backend available at:

```text
http://localhost:3000
```

### 4. Run the Frontend

```bash
cd frontend
npm run dev
```

Frontend available at:

```text
http://localhost:3000
```

_or port 3001 if the backend is already using port 3000._

---

## 🔌 API Overview

The backend exposes the following REST API endpoints:

```text
/api/properties
/api/users
/api/auth
/api/favorites
/api/uploads
/api/ratings
```

### API Documentation

```text
http://localhost:3000/docs.html
```

---

## 🔐 Authentication

JWT-based authentication.

### Roles

- client
- owner
- admin

---

## 🧪 Testing (Frontend)

```bash
cd frontend
npm run test
```

---

## 🌍 Deployment

- Frontend deployed on Vercel
- Backend intended for local development only

---

## 🧠 Architecture Decision

To ensure a stable deployment experience:

- The backend is used during local development.
- The deployed frontend uses a mocked JSON dataset.

This approach avoids dependency on a live backend server while preserving the same data structure and API workflow.

---

## 👨‍💻 Author

Developed as part of a professional training program focused on:

- Full-stack architecture
- API integration
- Frontend optimization
- Testing and accessibility
- Production deployment workflows

---

<a id="francais"></a>

# 🇫🇷 Plateforme de réservation Kasa (Projet Full Stack)

🇬🇧 [English](#english) | 🇫🇷 [Version Française](#francais)

Une application full-stack inspirée de Kasa, plateforme fictive de location de logements entre particuliers.

Le projet est structuré en monorepo avec un **frontend Next.js** et un **backend Express + SQLite**.

---

## 🌐 Démo en ligne (Frontend uniquement)

🔗 https://kasa-booking-platform.vercel.app

---

## 📌 Présentation du projet

Kasa est une plateforme de location permettant de consulter des annonces, afficher des détails de logements et interagir via une interface de messagerie.

Le projet comprend :

- Une **application frontend en Next.js**
- Une **API backend en Express.js avec SQLite**
- Une API REST complète (authentification, propriétés, favoris, notes et uploads)

Pour le déploiement en production, le frontend utilise un **jeu de données JSON mocké** afin de garantir une expérience stable sur Vercel.

---

## 📁 Structure du projet

```text
frontend/ → Application Next.js (interface utilisateur)
backend/  → API Express (base de données SQLite)
```

---

## ⚙️ Stack technique

### Frontend

- Next.js 16 (App Router)
- React 19
- JavaScript (ES6+)
- CSS
- Jest
- React Testing Library
- Vercel

### Backend

- Express.js
- SQLite
- Authentification JWT
- Documentation OpenAPI

---

## 🚀 Installation et démarrage

### 1. Cloner le projet

```bash
git clone <repository-url>
cd kasa-booking-platform
```

### 2. Installer les dépendances

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Lancer le backend

```bash
cd backend
npm start
```

Backend disponible sur :

```text
http://localhost:3000
```

### 4. Lancer le frontend

```bash
cd frontend
npm run dev
```

Frontend disponible sur :

```text
http://localhost:3000
```

_ou sur le port 3001 si le backend utilise déjà le port 3000._

---

## 🔌 API

L’API backend expose les routes suivantes :

```text
/api/properties
/api/users
/api/auth
/api/favorites
/api/uploads
/api/ratings
```

### Documentation API

```text
http://localhost:3000/docs.html
```

---

## 🔐 Authentification

Authentification basée sur JWT.

### Rôles

- client
- owner
- admin

---

## 🧪 Tests (Frontend)

```bash
cd frontend
npm run test
```

---

## 🌍 Déploiement

- Frontend déployé sur Vercel
- Backend utilisé uniquement en local

---

## 🧠 Choix d’architecture

Afin de garantir un déploiement stable :

- Le backend est utilisé pour le développement local.
- Le frontend déployé utilise un jeu de données JSON mocké.

Cette approche évite toute dépendance à un serveur distant tout en conservant une structure proche d’une véritable API.

---

## 👨‍💻 Auteur

Développé dans le cadre d’une formation en développement front-end axée sur :

- Architecture full-stack
- Intégration d’API
- Optimisation frontend
- Tests et accessibilité
- Déploiement en production
