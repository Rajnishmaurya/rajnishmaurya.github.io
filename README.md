# Rajnish Maurya — Enhanced GitHub Pages Portfolio

This zip contains a visually upgraded GitHub Pages portfolio based on the files you uploaded.

## What changed

- Added a modern responsive landing page: `index.html`
- Added polished styling: `assets/css/portfolio.css`
- Added small interactive behavior: `assets/js/portfolio.js`
- Added generated avatar/social images in `images/`
- Cleaned uploaded filenames by removing `(1)` / `(3)` suffixes
- Improved `_config.yml` site metadata and author bio
- Added optional Jekyll pages under `_pages/`
- Added a simple profile data file at `_data/profile.yml`

## How to use

1. Extract this zip.
2. Copy all files into your `rajnishmaurya.github.io` repository.
3. Commit and push:

```bash
git add .
git commit -m "Improve portfolio design"
git push origin main
```

4. Open `https://rajnishmaurya.github.io` after GitHub Pages finishes building.

## Local preview

Use either Jekyll directly:

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

or Docker:

```bash
docker compose up --build
```

Then open `http://localhost:4000`.

## Where to edit content

- Main landing page content: `index.html`
- Colors/layout: `assets/css/portfolio.css`
- Theme toggle / animations: `assets/js/portfolio.js`
- Jekyll site settings: `_config.yml`
- Optional profile metadata: `_data/profile.yml`

The original Academic Pages README is preserved as `README_academicpages_original.md`.
