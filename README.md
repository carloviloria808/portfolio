# Portfolio

Personal portfolio site built with **React + Vite**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Editing content

All site content lives in **`src/data/portfolio.js`** — your name, tagline,
about text, skills, projects, and links. You usually never need to touch the
components. Search the file for `TODO` to find everything that needs your input.

### Add your resume

Drop your resume PDF into `public/` (e.g. `public/resume.pdf`) and make sure
`resumeUrl` in `src/data/portfolio.js` points to it (`/resume.pdf`).

### Add project screenshots

Put images in `public/projects/` and set the `image` field of a project to the
path (e.g. `/projects/tftools.png`).

## Deploy

This is a static site — deploy the `dist/` folder anywhere. Easiest options:

- **Vercel** / **Netlify**: connect the repo, framework preset "Vite", done.
- **GitHub Pages**: push `dist/` or use an action.
