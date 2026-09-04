# Arpit Kumar Yadav — Portfolio v2

Animated portfolio built with React + Vite, Tailwind CSS v4, Framer Motion,
GSAP (ScrollTrigger), Lenis smooth scroll, and a Three.js / React Three
Fiber 3D hero (an animated rotating soil-core sample).

This is a separate project from `../portfolio/index.html` — nothing is
shared between the two.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Add your real content

All text content lives in one place: [`src/data/content.js`](src/data/content.js)
— profile info, stats, education, experience, projects, skills,
achievements, positions of responsibility. Edit that file to update
copy anywhere on the site.

### Images

Drop files into `public/images/` using these exact names and they'll
appear automatically (any section without a matching file shows a
labeled placeholder instead of a broken image, so the site never looks
broken while you're still collecting photos):

| File | Used for |
|---|---|
| `public/images/headshot.jpg` | About section photo |
| `public/images/fieldwork-1.jpg`, `fieldwork-2.jpg` | IIT Mandi landslide fieldwork gallery |
| `public/images/gis-map.jpg` | ArcGIS thematic map from the landslide project |
| `public/images/micp-lab.jpg` | MICP project card image |
| `public/images/concrete-test.jpg` | PEG 400 concrete project card image |
| `public/images/logo-ism.png` | IIT (ISM) Dhanbad logo |
| `public/images/logo-mandi.png` | IIT Mandi logo |
| `public/images/logo-rmlau.png` | RMLAU logo |

### Resume download

The navbar's "Resume" button links to `/resume.pdf`. Put your resume PDF
at `public/resume.pdf` and the download button will work immediately.

### Contact form

The contact form currently opens the visitor's email client (`mailto:`)
pre-filled with their message — works with zero setup. To collect
messages without relying on the visitor's mail client, wire up
[EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/)
inside `src/components/Contact.jsx` (`handleSubmit`).

## Deploy

Push this folder to GitHub and import it on [Vercel](https://vercel.com)
or [Netlify](https://netlify.com) — both auto-detect Vite. Build command
`npm run build`, output directory `dist`.
