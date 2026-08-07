# Customization Guide

## 1) Personal details
- Update title, tagline, and CTA in `src/App.tsx`.
- Update env values in `.env` (based on `.env.example`).

## 2) Portfolio projects
- Edit `src/content/sampleProjects.ts`.
- Add your own links, stack tags, and descriptions.

## 3) Theme setup
- Copy `src/theme/theme.example.ts` to `src/theme/theme.ts`.
- Adjust palette, gradients, and motion timing tokens.

## 4) Blog integration
- Add markdown/JSON blog entries under `src/content/`.
- Render entries through your preferred route strategy.
