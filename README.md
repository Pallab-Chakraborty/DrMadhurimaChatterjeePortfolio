# 🩺✍️ Dr. Madhurima Chatterjee — Portfolio Website

[![Deploy to GitHub Pages](https://github.com/Pallab-Chakraborty/DrMadhurimaChatterjeePortfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Pallab-Chakraborty/DrMadhurimaChatterjeePortfolio/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/code%20license-MIT-yellow.svg)](./LICENSE)

> Live site: [pallab-chakraborty.github.io/DrMadhurimaChatterjeePortfolio](https://pallab-chakraborty.github.io/DrMadhurimaChatterjeePortfolio/)

A professional portfolio website for **Dr. Madhurima Chatterjee** — a B2B SaaS Content Writer & Strategist. Delivered end-to-end: from client requirements and design to development and deployment on GitHub Pages.

---

## 👤 About the Client

**Dr. Madhurima Chatterjee** is a B2B SaaS Content Writer & Strategist with a unique background — a Dentist turned Word-Wielder. She crafts copy that connects, converts, and grows brands organically in industries like MarTech, SalesTech, Fintech, CX, and AI.

---

## ✨ Features

- 🎨 Clean, elegant, and professional design tailored to the client's brand
- 📱 Fully responsive — works seamlessly on desktop, tablet, and mobile
- 🧭 Smooth navigation with sections: About · Expertise · Experience · Education · Contact
- 🖼️ Professional headshot with polished layout
- 🔗 Direct links to LinkedIn and email for client outreach
- ⚡ Fast-loading static site with zero dependencies
- 🖱️ Custom cursor and scroll-reveal animations on desktop
- 🔢 Animated stat counters

---

## 📁 Project structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml   CI: auto-deploys to GitHub Pages on every push to main
├── index.html          Page structure and markup
├── css/
│   └── styles.css      All styling (fonts, layout, animations, responsive rules)
├── js/
│   └── main.js         Hamburger menu, custom cursor, scroll reveal, counters
├── images/
│   ├── photo-1.jpg      Hero headshot
│   └── photo-2.jpg      Floating accent photo
├── package.json         Project metadata + local dev script (no build step)
├── LICENSE              Code: MIT · Content/photos: belong to the client
└── README.md
```

---

## 📁 Sections Overview

| Section        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| **Hero**       | Name, tagline ("Dentist → Word-Wielder"), and CTA buttons           |
| **About**      | Professional background and unique journey from medicine to content |
| **Expertise**  | Core content writing niches — MarTech, SalesTech, Fintech, CX, AI   |
| **Experience** | Client projects, freelance work, and writing achievements           |
| **Education**  | Academic and professional background                                |
| **Contact**    | Email and LinkedIn for direct client inquiries                      |

---

## 🛠️ Built With

| Technology   | Usage                                  |
| ------------ | --------------------------------------- |
| HTML5        | Structure and semantic markup          |
| CSS3         | Styling, layout, and responsive design |
| JavaScript   | Interactivity and smooth UX            |
| GitHub Pages | Free hosting and deployment            |
| GitHub Actions | Automatic deploy on every push       |

No build tools, frameworks, or dependencies required — pure HTML/CSS/JS.

---

## 🚀 Running locally

```bash
git clone https://github.com/Pallab-Chakraborty/DrMadhurimaChatterjeePortfolio.git
cd DrMadhurimaChatterjeePortfolio
npm start
# serves the site at http://localhost:8000
```

or without npm, just open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

---

## 🌐 Deploying to GitHub Pages

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that deploys automatically.

1. Push these files to the repo.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **"GitHub Actions"**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).
5. GitHub publishes to `https://<username>.github.io/<repo-name>/` within a minute or two — the badge at the top of this README tracks deploy status.

(The classic "Deploy from a branch" option under Settings → Pages also still works, if preferred over Actions.)

---

## 💼 Project Highlights

- ✅ **Real client delivery** — requirements gathered and fulfilled end-to-end
- ✅ **Design to deployment** — handled all phases solo
- ✅ **Professional branding** — design matched client's tone and industry
- ✅ **Live & deployed** — hosted on GitHub Pages with a public URL

---

## 👨‍💻 Developed By

**Pallab Chakraborty** — B.Tech CSE Student, Jawaharlal Nehru University, New Delhi

- 🐙 GitHub: [Pallab-Chakraborty](https://github.com/Pallab-Chakraborty)
- 💼 LinkedIn: [pallabchakrabortyjnu](https://www.linkedin.com/in/pallabchakrabortyjnu/)

---

## 📄 License

This project was built for a client. See [LICENSE](./LICENSE) — the code structure is MIT-licensed and open for reference; all written content and photographs belong to Dr. Madhurima Chatterjee.

---

Built with ❤️ by Pallab Chakraborty for Dr. Madhurima Chatterjee
