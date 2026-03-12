# Galvanix Labs – Portfolio Website

A modern, responsive portfolio website built with **Vite + React**.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Root app component
├── App.css              # App-level layout
├── index.css            # Global design system (CSS variables, reset)
├── main.jsx             # Vite entry point
└── components/
    ├── Navbar.jsx/.css  # Sticky, responsive navigation
    ├── Hero.jsx/.css    # Hero section with stats
    ├── Projects.jsx/.css # Filterable portfolio grid
    ├── Services.jsx/.css # Services / capabilities section
    ├── About.jsx/.css   # About section with tech stack
    ├── Contact.jsx/.css # Contact form
    └── Footer.jsx/.css  # Footer with back-to-top
```

## Customisation

### Adding / editing projects
Open `src/components/Projects.jsx` and edit the `projects` array. Each project has:
- `title` – Project name
- `category` – Used for filtering (must match a value in `categories`)
- `tags` – Shown as small pills
- `icon` – Emoji icon displayed on the card
- `highlight` – Shown as a badge (e.g. "15M+ images")
- `description` – Full project description
- `tech` – Array of technologies used

### Updating contact details
In `src/components/Contact.jsx`, replace `hello@galvanixlabs.com` with your actual email.

To add a real form backend, replace the `setTimeout` simulation in `handleSubmit` with a call to your preferred service (e.g. [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com)).

### Colours
All brand colours are defined as CSS variables in `src/index.css`:
- `--color-primary`: Electric cyan `#00d4ff`
- `--color-secondary`: Indigo `#6366f1`
- `--color-accent`: Amber `#f59e0b`
- `--color-bg`: Deep navy `#0b0c1a`

### Logo
Replace `public/logo.svg` with your actual logo files. The inline SVG logo used in Navbar, About, and Footer can be updated in those component files.

## Deployment

This is a fully static site. After `npm run build`, deploy the `dist/` folder to:
- [Netlify](https://netlify.com) – drag & drop the `dist/` folder
- [Vercel](https://vercel.com) – `vercel --prod`
- [GitHub Pages](https://pages.github.com) – serve the `dist/` folder
- Any static hosting or CDN
