# Personal Portfolio Website

A modern, fully responsive web developer portfolio built with **React + TypeScript (TSX)** on the frontend and a **Node.js + Express + Nodemailer** backend for the contact form.

> All content (name, bio, projects, socials, etc.) lives in **one file**: `client/src/data/portfolio.ts`. Edit it to make the site yours.

---

## 🚀 Live site

**https://mssangidaakter72-coder.github.io/portfolio/** — deployed automatically to **GitHub Pages** on every push to `main` (see `.github/workflows/deploy-pages.yml`).

> The contact form needs a backend. On GitHub Pages it shows a friendly error; deploy the `server/` + `api/` function (e.g. to Vercel) to make it send email.

---

## ✨ Features

- **Hero** section with photo, animated role rotator and professional bio
- **About Me** with stats and highlights
- **Skills** with animated progress bars and brand icons
- **Projects** carousel (Swiper) + grid — each with title, description, live demo & GitHub links
- **Education & Certifications** timeline
- **Contact form** wired to a Node.js email backend (Nodemailer)
- **Sticky responsive navbar** with scroll-spy active link + mobile menu
- **Footer** with social links
- **Dark / light mode** (persisted in `localStorage`)
- Premium animations & scroll effects via **Framer Motion** + **Swiper**
- SEO meta tags, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`
- Fully responsive across mobile, tablet and desktop

## 🧱 Tech Stack

| Layer     | Tech                                                                 |
| --------- | -------------------------------------------------------------------- |
| Frontend  | React 19, TypeScript, Vite, React Router, Tailwind CSS v4            |
| UI/Motion | Framer Motion, Swiper, React Icons                                   |
| Backend   | Node.js, Express, Nodemailer, CORS, dotenv                          |
| Deploy    | Vercel (frontend + `api/` serverless function)                       |

## 📁 Project Structure

```
portfolio-website/
├── api/
│   └── contact.js          # Vercel serverless function (production backend)
├── client/                 # React + TypeScript frontend
│   ├── public/             # favicon, robots.txt, sitemap.xml, og-image, resume
│   └── src/
│       ├── assets/         # images / svg
│       ├── components/     # Navbar, Footer, ThemeToggle, cards, etc.
│       ├── context/        # ThemeContext (dark / light)
│       ├── data/           # portfolio.ts  <-- EDIT YOUR CONTENT HERE
│       ├── hooks/          # useTheme, useScrollSpy
│       ├── pages/          # Home, NotFound
│       ├── sections/       # Hero, About, Skills, Projects, Education, Contact
│       └── types/          # shared TypeScript types
├── server/                 # Node.js + Express backend (local dev / standalone)
│   ├── index.js            # Express app (POST /api/contact)
│   └── mailer.js           # Nodemailer logic + validation (shared with api/)
├── vercel.json
└── .env.example
```

## 🚀 Getting Started

```bash
# 1. Install all dependencies (npm workspaces)
npm install

# 2. Create your .env from the example
cp .env.example .env        # Windows PowerShell: Copy-Item .env.example .env

# 3. Run frontend + backend together
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Vite proxies `/api/*` to the backend automatically in dev.

### Email setup (Gmail example)

1. Enable 2-Step Verification on your Google account.
2. Create an **App Password**: Google Account → Security → App passwords.
3. Put it in `.env`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your.email@gmail.com
SMTP_PASS=your_16_char_app_password
CONTACT_TO_EMAIL=your.email@gmail.com
```

Any SMTP provider (Gmail, Outlook, SendGrid, Mailgun, Resend, etc.) works — just change the host/port/credentials.

## 📜 Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Run client + server concurrently                   |
| `npm run build`     | Type-check and build the frontend to `client/dist` |
| `npm run preview`   | Preview the production build locally               |
| `npm run typecheck` | Run TypeScript checks                              |
| `npm start`         | Run the standalone Express server                  |

## 🎨 Customize

1. **Your info** — edit `client/src/data/portfolio.ts` (name, bio, skills, projects, education, certifications, social links).
2. **Photo** — replace `client/src/assets/avatar.svg` with your own image.
3. **Project images** — replace files in `client/src/assets/projects/`.
4. **Résumé** — replace `client/public/resume.html` with your real résumé (or a PDF and update `resumeUrl` in `portfolio.ts`).
5. **Colors** — tweak the `@theme` block in `client/src/index.css`.
6. **SEO/domain** — update the URLs in `client/index.html`, `client/public/robots.txt` and `client/public/sitemap.xml` to your live domain.

## ☁️ Deploy to Vercel

1. Push the repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) → **New Project**.
3. Vercel detects `vercel.json` (build `client`, output `client/dist`, `api/` function).
4. Add the environment variables from `.env` in **Project → Settings → Environment Variables**.
5. Deploy. The contact form hits `/api/contact` on the same domain.

> Alternative: deploy the frontend to Netlify/GitHub Pages (static) and the `server/` folder to Render/Railway, then point requests to that URL.

## ✅ Quality checklist

- [x] No broken internal links (nav anchors + `#` sections)
- [x] No console errors on load
- [x] SEO meta tags, Open Graph, JSON-LD, sitemap, robots
- [x] Responsive on mobile / tablet / desktop
- [x] Dark & light themes
- [x] `npm audit` → 0 vulnerabilities

---

Built as part of a web-development portfolio assignment.
