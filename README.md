# IMCESFA 2025 - Event Website

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/imcesfa?style=for-the-badge)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

This repository contains the source code for the official IMCESFA 2025 event website. It's a modern, performant, and visually engaging single-page application built with a sci-fi theme using the Cosmic UI component library.

## ✨ Key Features

- **Sci-Fi Themed UI**: Built with [Cosmic UI](https://cosmic-ui.design/) for a unique, futuristic aesthetic.
- **Fully Responsive**: Adapts seamlessly to all screen sizes, from mobile to desktop.
- **Dynamic Pages**: Includes Home, About, Timeline, Sponsor, and FAQ pages, all managed by React Router.
- **SEO Optimized**: Comprehensive SEO strategy with dynamic meta tags per page, `sitemap.xml`, and `robots.txt`.
- **Performance Focused**: Optimized for speed with route-based code splitting, lazy-loaded images, and an efficient Vite build process.
- **Analytics Integrated**: Vercel Analytics is set up to track page views and user engagement.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Cosmic UI](https://cosmic-ui.design/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
    cd YOUR_REPO
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📦 Build for Production

To create an optimized production build, run:

```bash
npm run build
```
This will generate the static files in the `dist/` directory, which can be deployed to any static hosting service.

## 🌐 Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to a new Vercel project, and it will be deployed automatically on every push.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
