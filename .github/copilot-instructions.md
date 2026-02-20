# Copilot Instructions for Lista-por-hacer-Miguel-Contreras

## Architecture Overview
This is a client-side React to-do list application built with Vite. The app consists of three main components:
- `Home.jsx`: Renders the main title and `PossIt` component.
- `PossIt.jsx`: A container component that renders `InputComponent`.
- `InputComponent.jsx`: Handles all state and logic for adding/removing tasks.

State is managed locally in `InputComponent` using React hooks (`useState`). No backend or external APIs are used. Data flow is unidirectional: user input → state update → re-render.

Key files:
- `src/js/components/InputComponent.jsx`: Core logic for task management.
- `src/js/main.jsx`: App entry point, imports Bootstrap CSS.
- `vite.config.js`: Vite configuration with React plugin.

## Developer Workflows
- **Development**: Run `npm start` to start Vite dev server on port 3000.
- **Build**: Use `npm run build` to generate production build in `dist/`.
- **Linting**: Execute `npm run lint` to check code with ESLint.
- **Preview**: Run `npm run preview` to preview the built app locally.
- **Deployment**: 
  - For Vercel: Push to repository; `vercel.json` handles static build and SPA routing.
  - For GitHub Pages: Use `node deploy-to-github.js` (note: script references outdated webpack config; adapt for Vite by building first and publishing `dist/`).

## Project Conventions
- **Naming**: Use Spanish for variables and functions (e.g., `texto`, `listaTareas`, `enviar`, `eliminarTarea`).
- **Styling**: Bootstrap for global styles; component-specific CSS files (e.g., `InputComponent.css`).
- **Structure**: Components in `src/js/components/`, styles in `src/styles/`.
- **State Management**: Simple `useState` hooks; no external state libraries.
- **Task Representation**: Tasks as objects with `id` (Date.now()) and `texto` (string).

## Patterns and Examples
- **Adding Tasks**: Prevent default on form submit, create new task object, spread into state array.
  ```jsx
  const nuevaTarea = { id: Date.now(), texto: texto };
  setListaTareas([...listaTareas, nuevaTarea]);
  ```
- **Deleting Tasks**: Filter array by id.
  ```jsx
  const nuevaLista = listaTareas.filter((tarea) => tarea.id !== id);
  ```
- **Rendering List**: Conditional rendering for empty state; map over tasks with unique keys.
- **Imports**: Relative paths for components and styles.

## Integration Points
- **Bootstrap**: Imported in `main.jsx` for styling.
- **Vite**: Handles build and dev; configure in `vite.config.js`.
- **ESLint**: Configured for React; run via npm script.

Focus on maintaining simple, local state management and Bootstrap styling when extending features.