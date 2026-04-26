# Dulanjaya Thathsara — Developer Portfolio

A modern, minimal, production-ready developer portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Tech Stack

| Tech | Version |
|------|---------|
| Next.js | 14.2.5 |
| TypeScript | ^5 |
| Tailwind CSS | ^3.4 |
| Framer Motion | ^11 |
| Lucide React | ^0.395 |
| React Icons | ^5.2 |
| Next Themes | ^0.3 |
| Radix UI | latest |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home / Hero
│   ├── globals.css         # Design tokens + utilities
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # SEO robots
│   ├── not-found.tsx       # Custom 404
│   ├── about/              # Experience timeline
│   ├── skills/             # Animated skill bars
│   ├── projects/           # GitHub API + featured projects
│   ├── education/          # Education timeline
│   ├── blog/               # Blog with search/filter
│   │   └── [slug]/         # Individual blog post
│   └── contact/            # Contact with Google Form iframe
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Responsive nav + dark mode
│   │   ├── Footer.tsx
│   │   ├── PageTransition.tsx
│   │   └── ThemeProvider.tsx
│   └── ui/
│       └── Section.tsx     # Reusable section + header
├── data/
│   ├── blog.ts             # Static blog content
│   └── portfolio.ts        # Experience, education, skills, projects
├── hooks/
│   └── useScrollAnimation.ts
├── utils/
│   └── cn.ts               # clsx + tailwind-merge
└── public/
    ├── companies/          # Company logos (add your own)
    ├── education/          # Institute logos
    ├── blog/               # Blog images
    └── projects/           # Project screenshots
```

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Customisation Guide

### Personal Info
Edit `data/portfolio.ts` to update:
- Work experience (`experiences`)
- Education (`education`)
- Skills (`skills`)
- Featured projects (`featuredProjects`)

Edit `data/blog.ts` to add/edit blog posts.

### GitHub Username
In `app/projects/ProjectsClient.tsx`, change:
```ts
fetch("https://api.github.com/users/dulanjaya2005/repos...")
```
→ replace `dulanjaya2005` with your GitHub username.

### Google Form (Contact Page)
In `app/contact/ContactClient.tsx`, replace the iframe `src`:
```html
<iframe
  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
  ...
/>
```
Get the embed URL: Google Forms → Send → `<>` embed icon → copy the `src`.

### Images
Place images in `public/` folders:
- `/public/companies/99x.png` — company logos
- `/public/education/moratuwa.png` — education logos
- `/public/blog/*.png` — blog cover images
- `/public/projects/*.png` — project screenshots

### SEO
Update `app/layout.tsx` → `metadata` object with your domain, name, and social handles.

---

## 🌙 Dark / Light Mode

The portfolio ships with **dark mode by default**. Users can toggle via the sun/moon button in the navbar. Powered by `next-themes`.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npx vercel
```
Or connect your GitHub repo to [vercel.com](https://vercel.com).

### Other Platforms
Works with any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Node.js

---

## ✨ Features

- ✅ Next.js 14 App Router
- ✅ TypeScript strict mode
- ✅ Dark / Light mode toggle
- ✅ Framer Motion page transitions + scroll animations
- ✅ GitHub API integration (live repos)
- ✅ Blog with search + category filter
- ✅ Static blog with detail pages
- ✅ Glassmorphism UI cards
- ✅ Animated gradient text + backgrounds
- ✅ Tech icon marquee
- ✅ Responsive mobile-first design
- ✅ SEO meta tags + Open Graph
- ✅ Sitemap + robots.txt
- ✅ Custom 404 page
- ✅ Google Form embed (contact)
- ✅ Zero backend / database

---

## 📄 License

MIT — free to use and modify for personal portfolios.
