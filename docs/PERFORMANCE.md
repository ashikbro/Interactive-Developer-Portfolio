# Performance Notes

## Animation strategy
- Animate mostly `transform` and `opacity` to avoid layout thrashing.
- Keep staggered transitions short for responsive feel.

## Bundle efficiency
- Keep dependencies focused and review additions carefully.
- Use Vite production build output (`npm run build`) for optimized assets.

## Runtime tips
- Avoid expensive re-renders in list-heavy sections.
- Memoize derived UI data when component count grows.

## Validation checklist
- Lighthouse performance audit for every major UI update
- Cross-browser check in latest Chrome, Firefox, Safari, Edge
