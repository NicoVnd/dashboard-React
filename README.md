# 🚀 Projet d'apprentissage React — Dashboard Interactif 2.0

## 🎯 Objectif du projet

Créer un Dashboard Interactif en utilisant React.js, pour apprendre à :

- Structurer une application avec des composants réutilisables
- Gérer l'état local et global
- Intégrer des APIs externes (météo, citations, etc.)
- Utiliser TailwindCSS avec React
- Sauvegarder des données dans le localStorage
- Gérer un mode clair/sombre
- Afficher des graphiques dynamiques avec Chart.js

Ce projet reprend mon dashboard en JS "vanilla" mais version framework moderne et pro ⚡

## 🧰 Stack utilisée

- ⚛️ **React.js** — pour la logique et les composants
- ⚡ **Vite** — pour un environnement rapide et moderne
- 🎨 **TailwindCSS** — pour le style responsive et dark mode
- 📊 **Chart.js** — pour les graphiques
- 🌦️ **OpenWeatherMap API** — pour la météo
- 💬 **Quotable API** — pour les citations
- 💾 **LocalStorage** — pour la persistance des données

## 📦 Installation

```bash
# 1. Je crée mon projet avec Vite
npm create vite@latest react-dashboard -- --template react

# 2. J'entre dans mon dossier
cd react-dashboard

# 3. J'installe les dépendances
npm install

# 4. J'installe TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## ⚙️ Configuration de Tailwind

Je modifie mon fichier `tailwind.config.js` :

```javascript
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Puis, dans `src/index.css` :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🧩 Structure du projet

```
react-dashboard/
│── public/
│── src/
│   ├── components/
│   │   ├── Clock.jsx
│   │   ├── Weather.jsx
│   │   ├── TodoList.jsx
│   │   ├── Quote.jsx
│   │   └── ChartCard.jsx
│   ├── utils/
│   │   ├── storage.js
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## 🪜 Étapes de réalisation

### ✅ Étape 1 — Initialisation du projet

- Créer mon environnement avec Vite
- Installer Tailwind et vérifier que le style fonctionne
- Ajouter une base de layout (App.jsx)

### ✅ Étape 2 — Composant Clock

- Créer Clock.jsx
- Utiliser useState + useEffect pour mettre à jour l'heure chaque seconde
- Appliquer un style Tailwind simple

### ✅ Étape 3 — Composant TodoList

- Utiliser useState pour gérer les tâches
- Ajouter des fonctions addTodo, deleteTodo, toggleDone
- Sauvegarder dans localStorage
- Ajouter une animation Tailwind

### ✅ Étape 4 — Composant Weather

- Appeler l'API OpenWeatherMap avec fetch
- Gérer le chargement et les erreurs
- Afficher température, icône, description
- Ajouter un champ pour changer de ville

### ✅ Étape 5 — Composant Quote

- Récupérer une citation via l'API Quotable
- Ajouter un bouton "Nouvelle citation"
- **Bonus :** stocker la dernière citation dans localStorage

### ✅ Étape 6 — Composant ChartCard

- Intégrer Chart.js
- Créer un graphique simple (par ex. suivi de tâches complétées)
- Ajouter des transitions

### ✅ Étape 7 — Thème clair/sombre

- Gérer la classe dark sur le html
- Ajouter un bouton toggle dans App.jsx
- Sauvegarder la préférence dans localStorage

### ✅ Étape 8 — Mise en page finale

- Disposer les widgets dans une grid responsive
- Ajouter un fond dégradé Tailwind
- Effets de hover, blur, et shadow

## 💾 Gestion des préférences utilisateur

J'utilise un petit module `utils/storage.js` :

```javascript
export const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const load = (key, fallback) => JSON.parse(localStorage.getItem(key)) || fallback;
```

Puis dans mes composants :

```javascript
useEffect(() => {
  save("todos", todos);
}, [todos]);
```

## 🌐 Lancer le projet

```bash
npm run dev
```

J'ouvre http://localhost:5173 🚀

## 💡 Étapes Bonus

- [ ] Ajouter un Drag & Drop (lib : react-beautiful-dnd)
- [ ] Ajouter une authentification (Firebase)
- [ ] Déployer sur Vercel ou Netlify
- [ ] Créer une version mobile optimisée

## 🧠 Ce que j'apprendrai

| Compétence | Objectif |
|------------|----------|
| React Components | Construire des UI modulaires |
| useState / useEffect | Gérer la logique dynamique |
| Props & lifting state | Communication entre composants |
| API Calls | Récupération de données externes |
| TailwindCSS | UI moderne et responsive |
| LocalStorage | Persistance des préférences |
| Chart.js | Visualisation de données |
| Dark Mode | Thème utilisateur intelligent |