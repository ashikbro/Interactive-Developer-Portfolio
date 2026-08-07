# Deployment Guide (GitHub Pages)

## Automatic deployment
The repository includes `.github/workflows/deploy.yml`.

Workflow behavior:
1. Trigger on pushes to `main`.
2. Install dependencies with `npm ci`.
3. Build with `npm run build`.
4. Publish `dist/` to GitHub Pages.

## One-time GitHub setup
1. Go to **Settings → Pages**.
2. Set source to **GitHub Actions**.
3. Ensure default branch is `main`.

## Manual verification
```bash
npm install
npm run build
npm run preview
```

## Troubleshooting
- If deploy fails at install, regenerate lockfile and push.
- If assets 404, verify Vite `base` path in `vite.config.ts`.
