# Interactive Developer Portfolio

An interactive portfolio for presenting software projects through live demos,
technical case studies, and an integrated blog.

## Status

**Prototype — accessible static shell implemented.**

The repository includes a dependency-free responsive landing page, project
cards, keyboard skip navigation, semantic sections, and reduced-motion support.

## Planned features

- Responsive landing page with an accessible project navigator
- Project case studies with screenshots, architecture, and live-demo links
- Interactive demos embedded safely without exposing secrets
- Blog posts with Markdown content and searchable tags
- Contact form backed by a server-side endpoint
- Automated build, lint, and accessibility checks

## Proposed structure

```text
src/
  components/       Reusable UI components
  content/projects/ Project case studies
  content/posts/    Blog posts
  pages/            Portfolio and blog routes
public/             Static assets
```

## Roadmap

1. Choose the frontend stack and create the initial application shell.
2. Add project data and reusable case-study pages.
3. Add the blog content model and post pages.
4. Add responsive styling, keyboard navigation, and reduced-motion support.
5. Add CI checks and deploy a production preview.

## Development

Serve the directory with any static file server:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. Project data is defined in `script.js`.
