# Vishal Portfolio

A personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion** showcasing experience, projects, skills and achievements.

## Features
- Responsive design (mobile / tablet / desktop)
- Dark / light mode toggle (persisted)
- Smooth scrolling and active section highlighting
- Animated hero with typing effect
- Framer Motion fade / entrance animations
- Project cards with tech stack badges
- Timeline styled experience section
- Skills grouped by category
- Achievements with icon badges
- Contact form (client-side validation) + copy email to clipboard
- Performance considerations: lazy-loaded images, minimal dependencies
- SEO meta tags

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Folder Structure
```
src/
	components/   # UI components & sections
	data/         # Structured data arrays
	assets/       # Static images/assets
```

## Customization
- Replace `public/resume.pdf` with your actual resume.
- Update social links in `Hero.jsx` and `Footer.jsx`.
- Adjust colors/fonts via `tailwind.config.js`.

## Deployment
- Build: `npm run build`
- Deploy `dist/` folder to Vercel / Netlify.
- Set custom domain and ensure redirects (if any) are configured.

## Next Improvements
- Add form backend (EmailJS / serverless function)
- Add real project screenshots (WebP)
- Code splitting for heavy components if needed

## License
Personal project – all rights reserved.
