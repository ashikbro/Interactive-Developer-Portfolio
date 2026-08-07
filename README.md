# Interactive Developer Portfolio

A modern, interactive frontend portfolio showcase with animation-rich sections, reusable components, and a structured blog/content system for developer storytelling.

## Live Demo
- **GitHub Pages:** https://ashikbro.github.io/Interactive-Developer-Portfolio/

## Project Overview
This project demonstrates frontend craftsmanship through animated UI blocks, live component composition patterns, and portfolio storytelling geared toward recruiters, clients, and open-source collaborators.

## Key Features
- Motion-driven hero and section transitions
- Reusable typed component library (`src/components`)
- Featured projects and blog-ready content models
- Theme configuration pattern for easy personalization
- GitHub Pages CI deployment workflow

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages (GitHub Actions)

## Quick Start
```bash
npm install
npm run dev
```
Open `http://localhost:5173`.

## Installation & Development Setup
1. Clone the repository.
2. Copy environment template:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development:
   ```bash
   npm run dev
   ```

## Build & Deployment
```bash
npm run build
npm run preview
```
Deployment docs: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)

## Feature Showcase
- **AnimatedHero**: spring-based headline reveal and CTA entrance
- **ProjectCard**: interactive card model for project summaries
- **FeaturePills**: quick-highlight badges for capabilities

## Component Documentation
- Catalog: [`docs/COMPONENTS.md`](docs/COMPONENTS.md)
- Examples: [`examples/component-examples.tsx`](examples/component-examples.tsx)

## Customization Guide
- Personalization guide: [`docs/CUSTOMIZE.md`](docs/CUSTOMIZE.md)
- Theme example: [`src/theme/theme.example.ts`](src/theme/theme.example.ts)
- Sample content: [`src/content/sampleProjects.ts`](src/content/sampleProjects.ts)

## Performance Optimizations
- Motion settings optimized for transform/opacity
- Lightweight dependency set
- Build output optimized via Vite
- Details: [`docs/PERFORMANCE.md`](docs/PERFORMANCE.md)

## Browser Compatibility
- Chrome (latest)
- Edge (latest)
- Firefox (latest)
- Safari (latest)

## Roadmap
- [ ] Add dark/light theme toggle
- [ ] Integrate markdown-powered blog pages
- [ ] Add visual regression checks for animated sections
- [ ] Expand project filtering and tag search

## Contributing
Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a PR.
