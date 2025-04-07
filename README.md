# Tech Challenge 3

A modern React application for managing and displaying posts, built with React 19, TypeScript, and Vite.

## Features

- View posts with author information
- Create new posts
- Read individual post details
- Dashboard view of all posts
- Responsive design with styled-components

## Tech Stack

- React 19
- TypeScript
- Vite
- Styled Components
- React Router

## Project Structure

```
tech-challenge-3/
├── src/
│   ├── componentes/       # Reusable components
│   │   ├── Cabecalho/     # Header component
│   │   ├── Corpo/         # Main content component
│   │   ├── EstilosGlobais/# Global styles
│   │   └── Rodape/        # Footer component
│   ├── json/              # Static data
│   ├── pages/             # Application pages
│   │   ├── Create/        # Create new post page
│   │   ├── Dashboard/     # Main dashboard page
│   │   └── Read/          # Post reading page
│   └── App.tsx            # Main application component
└── ...
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## License

[MIT](LICENSE)