# 🏡 Kasa Booking Platform (Frontend)

🇬🇧 [English](#-kasa-booking-platform-frontend) | 🇫🇷 [Version Française](#-version-française)

A modern frontend application for a property rental platform inspired by Kasa, built with **Next.js** and **React**.

This project was developed as part of a front-end engineering training program, focusing on performance, accessibility, testing, and deployment.

---

## 🌐 Live Demo

🔗 https://kasa-booking-platform.vercel.app

---

## 📌 Project Overview

Kasa is a fictional peer-to-peer accommodation platform allowing users to browse property listings, view detailed property pages, and interact with a messaging interface.

This frontend application was rebuilt using modern JavaScript technologies and follows a component-based architecture with Next.js App Router.

For production deployment purposes, the backend API has been replaced with a mocked JSON dataset, ensuring full functionality without requiring a running server.

---

## ⚙️ Tech Stack

- Next.js 16 (App Router)
- React 19
- JavaScript (ES6+)
- CSS (Global + Modular Styling)
- Jest
- React Testing Library
- ESLint
- Vercel
- Node.js

---

## ✨ Features

- 🏠 Property listing page
- 📄 Property detail page (dynamic routing)
- 🖼 Image gallery with navigation
- ❤️ Favorite system (persisted in localStorage)
- 💬 Messaging interface (UI only)
- 🔐 Login page (frontend authentication mock)
- 📱 Fully responsive design (mobile-first approach)
- 🔎 SEO optimization (sitemap + structured data with schema.org)
- ♿ Accessibility improvements (ARIA labels, semantic HTML, contrast compliance)
- 🧪 Unit testing with Jest and React Testing Library
- 🚀 Deployment on Vercel

---

## 🏗 Architecture

```text
app/         → Pages using Next.js App Router
components/  → Reusable UI components
data/        → Mocked dataset used for production deployment
__tests__/   → Unit tests for critical components
public/      → Static assets (icons, images)
```

---

## 🔌 Data Strategy (Mocked Backend)

For production deployment, the backend API has been replaced with a local dataset.

### Original Architecture

- Express API serving property data
- Backend-generated responses

### Current Architecture

```text
src/data/properties.json
```

### Benefits

- No dependency on a running backend server
- Stable deployment on Vercel
- Consistent API-like structure
- Easier maintenance and demonstration

---

## 🧪 Testing

Unit tests were implemented to ensure component reliability.

### Covered Areas

- 🖼 Image carousel (Gallery component)
- ❤️ Favorite system (localStorage persistence)

### Run Tests

```bash
npm run test
```

### Watch Mode

```bash
npm run test:watch
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open the Application

```text
http://localhost:3000
```

---

## 📦 Build for Production

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

## 🌍 Deployment

This project is deployed using **Vercel**.

Every push to the `main` branch automatically triggers a new deployment.

---

## ♿ Accessibility

The application follows accessibility best practices:

- Semantic HTML structure
- ARIA labels where necessary
- Keyboard navigation support
- Contrast compliance improvements
- Accessible forms

---

## 🔎 SEO Optimization

Implemented SEO features include:

- Sitemap generation
- Structured data using schema.org (JSON-LD)
- Semantic HTML
- Optimized page metadata

---

## 👨‍💻 Author

Developed as part of a professional front-end development training program focused on:

- Modern React architecture
- Performance optimization
- Accessibility compliance
- Testing practices
- Production deployment workflows

---

# 🇫🇷 Version Française

## 🏡 Plateforme de réservation Kasa (Frontend)

Une application frontend moderne pour une plateforme de location immobilière inspirée de Kasa, développée avec **Next.js** et **React**.

Ce projet a été réalisé dans le cadre d’une formation en développement front-end, avec un accent particulier sur la performance, l’accessibilité, les tests et le déploiement.

---

## 🌐 Démo en ligne

🔗 https://kasa-booking-platform.vercel.app

---

## 📌 Présentation du projet

Kasa est une plateforme fictive de location entre particuliers permettant de consulter des annonces immobilières, de visualiser les détails d’un logement et d’interagir avec une interface de messagerie.

Cette application frontend a été reconstruite avec des technologies JavaScript modernes et suit une architecture basée sur les composants avec Next.js App Router.

Pour simplifier le déploiement en production, l’API backend a été remplacée par un jeu de données JSON local, garantissant le fonctionnement complet sans serveur.

---

## ⚙️ Stack technique

- Next.js 16 (App Router)
- React 19
- JavaScript (ES6+)
- CSS global et modulaire
- Jest
- React Testing Library
- ESLint
- Vercel
- Node.js

---

## ✨ Fonctionnalités

- 🏠 Liste des logements
- 📄 Page détail d’un logement
- 🖼 Galerie d’images interactive
- ❤️ Système de favoris (localStorage)
- 💬 Interface de messagerie (interface uniquement)
- 🔐 Page de connexion (authentification simulée)
- 📱 Design responsive
- 🔎 Optimisation SEO (sitemap + schema.org)
- ♿ Améliorations d’accessibilité
- 🧪 Tests unitaires
- 🚀 Déploiement sur Vercel

---

## 🏗 Architecture

```text
app/         → Pages Next.js (App Router)
components/  → Composants réutilisables
data/        → Données mockées
__tests__/   → Tests unitaires
public/      → Ressources statiques
```

---

## 🔌 Stratégie de données

En production, l’API backend est remplacée par un fichier JSON local.

### Architecture initiale

- API Express
- Données servies par le backend

### Architecture actuelle

```text
src/data/properties.json
```

### Avantages

- Aucune dépendance à un serveur backend
- Déploiement stable sur Vercel
- Structure de données cohérente
- Maintenance simplifiée

---

## 🧪 Tests

Les tests unitaires couvrent les composants principaux.

### Éléments testés

- 🖼 Galerie d’images
- ❤️ Système de favoris

### Lancer les tests

```bash
npm run test
```

### Mode Watch

```bash
npm run test:watch
```

---

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir l’application

```text
http://localhost:3000
```

---

## 📦 Build de production

```bash
npm run build
```

Puis :

```bash
npm run start
```

---

## 🌍 Déploiement

Ce projet est déployé sur **Vercel**.

Chaque push sur la branche `main` déclenche automatiquement un nouveau déploiement.

---

## ♿ Accessibilité

L’application respecte les bonnes pratiques d’accessibilité :

- Structure HTML sémantique
- Labels ARIA
- Navigation clavier
- Contraste amélioré
- Formulaires accessibles

---

## 🔎 SEO

Fonctionnalités SEO intégrées :

- Génération de sitemap
- Données structurées (schema.org JSON-LD)
- HTML sémantique
- Métadonnées optimisées

---

## 👨‍💻 Auteur

Développé dans le cadre d’une formation en développement front-end axée sur :

- Architecture React moderne
- Optimisation des performances
- Accessibilité web
- Tests unitaires
- Déploiement en production
