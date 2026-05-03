# Krishna Bhagavan Karri - Portfolio

## Overview
A personal portfolio website for Krishna Bhagavan Karri, a GenAI + Full-Stack Developer. The site showcases skills, projects, experience, education, and contact information.

## Architecture
- **Frontend only** — No backend component
- **Framework**: React 18 (Create React App + CRACO)
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI components)
- **Routing**: React Router DOM v7
- **Package Manager**: npm (node_modules in frontend/)

## Project Structure
```
frontend/
├── public/          # Static assets (images, resume PDF, favicon)
├── src/
│   ├── App.js       # Root component
│   ├── index.js     # Entry point
│   ├── components/  # Page sections (Hero, About, Skills, Projects, Experience, Education, Contact, Header, Footer)
│   ├── context/     # ThemeContext (dark/light mode)
│   ├── data/        # portfolioData.js (all content)
│   ├── hooks/       # use-toast.js
│   └── lib/         # utils.js (cn helper)
├── craco.config.js  # CRACO config with dev server (port 5000, host 0.0.0.0, allowedHosts: all)
└── package.json
```

## Running the App
- **Workflow**: "Start application" — `cd frontend && npm start`
- **Port**: 5000
- **Dev server**: CRACO (CRA wrapper) on 0.0.0.0:5000 with all hosts allowed for Replit proxy

## Deployment
- **Target**: Static site
- **Build command**: `cd frontend && npm run build`
- **Public directory**: `frontend/build`
