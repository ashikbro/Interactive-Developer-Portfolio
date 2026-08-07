# Contributing Guidelines

Thanks for your interest in improving the Interactive Developer Portfolio.

## Development workflow
1. Fork the repository and create a branch: `feature/<short-name>`.
2. Install dependencies: `npm install`.
3. Run local development server: `npm run dev`.
4. Validate changes with `npm run typecheck && npm run build`.
5. Open a pull request with clear screenshots and change notes.

## Contribution standards
- Keep components reusable and typed.
- Document every public component prop.
- Add examples for interactive behavior.
- Keep animations performant (transform/opacity first).

## Pull request checklist
- [ ] Updated docs when behavior changed
- [ ] Added or updated examples when adding components
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
