# Rajnish Maurya — Resume-Based GitHub Pages Portfolio

This package contains a visually upgraded GitHub Pages portfolio based on the Academic Pages structure.

## Main improvements

- Resume-based homepage content
- Dynamic homepage sections for `_portfolio`, `_teaching`, `_publications`, and `_talks`
- Added project entries under `_portfolio`
- Added teaching entries under `_teaching`
- Improved About, Projects, Teaching, Research, and Contact pages
- Modern responsive CSS and light/dark theme toggle

## How to use

1. Extract this zip.
2. Copy all files into your `rajnishmaurya.github.io` repository.
3. Commit and push:

```bash
git add -A
git commit -m "Update portfolio with resume-based content"
git push origin main
```

4. Open `https://rajnishmaurya.github.io` after GitHub Pages finishes building.

## Where to edit content

- Main homepage: `index.html`
- Projects: `_portfolio/*.md`
- Teaching: `_teaching/*.md`
- About page: `_pages/about.md`
- Projects listing page: `_pages/projects.md`
- Teaching listing page: `_pages/teaching.md`
- Research page: `_pages/research.md`
- Contact page: `_pages/contact.md`
- Design/CSS: `assets/css/portfolio.css`
- JavaScript: `assets/js/portfolio.js`
- Site settings: `_config.yml`

## Important

Use `_teaching`, not `_teching`. The Academic Pages Jekyll collection is configured for `_teaching`.
