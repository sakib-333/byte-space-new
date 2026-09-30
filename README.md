# Byte Space New

Byte Space New is a React single-page application for discovering courses and creators. It includes course browsing, course details, creator profiles, authentication screens, filtering, sorting, pagination, and responsive layouts.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React

## Getting Started

### Prerequisites

- Node.js and npm

### Clone repo
```bash
git clone git@github.com:sakib-333/byte-space-new.git
cd byte-space-new
```

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Type-checks the project and creates a production build. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run preview` | Serves the production build locally. |

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/courses` | Course catalog with search, filters, sorting, and pagination |
| `/courses/:courseId` | Course details page |
| `/creators` | Creator listing |
| `/creators/:creatorId` | Creator details and related courses |
| `/login` | Login page |
| `/register` | Registration page |
| `*` | Not-found page for unmatched routes |

The header currently includes a link to `/search`, but there is no `/search` route in the router yet. That link currently falls through to the not-found page.

## Current Scope

- Course and creator content is currently stored in local project data.
- Login and registration pages provide the frontend screens but are not connected to a backend authentication service.
- Page titles are updated by the shared `usePageTitle` hook using the format `Byte Space New | <page title>`.
- The application is currently configured as a client-side Vite application.

## Project Structure

```text
src/
|-- app/        # Application routing
|-- modules/    # Feature modules and pages
`-- shared/     # Shared layouts, components, and hooks
```

Feature-specific code is organized under `src/modules`, while reusable application code lives under `src/shared`.
