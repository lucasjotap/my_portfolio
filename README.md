# 🚀 Neo‑Brutalist Developer Portfolio

A redesigned, modern developer portfolio rebuilt with a **neo‑brutalist aesthetic**, powered by React, Vite, TailwindCSS, and Framer Motion. Strong borders, bold typography, punchy colors, flat shadows, and a clean, opinionated visual identity.

---

## ✨ What’s New (Compared to the Glassmorphism Version)

* 💥 **Neo‑Brutalist UI overhaul** — thick borders, blocky layouts, loud contrasts
* 🟨 **Yellow/Black Theme** with support for dark mode inversion
* 🧱 **Hard Shadows** (`shadow-[6px_6px_0px]`, `shadow-[10px_10px_0px]`)
* 🎛️ **Simplified Components** — less blur, more structure
* 🫀 **Framer Motion micro‑interactions**
* 🧩 **Refactored Navbar, Contact, Buttons, and Cards**

---

## 🛠 Tech Stack

* **React 19**
* **Vite 5**
* **TailwindCSS 3**
* **Framer Motion**
* **React Router 6**

---

## 📦 Installation

```bash
npm install
npm run dev
```

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 🎨 Customization

### Content

All personal and site data live in:

```
src/data/content.js
```

You can edit:

* Personal info
* Social links
* Skills
* Projects
* Articles

### Styling

Neo‑brutalism uses:

* Thick borders → `border-2 border-black`
* Block shadows → `shadow-[6px_6px_0px_#000]`
* Bright colors → `bg-[#fde047]`, `bg-black`
* Strong typography → `font-extrabold`, `font-black`

You can customize global theme in:

```
src/index.css
```

And Tailwind settings in:

```
tailwind.config.js
```

---

## 📁 Project Structure

```
web_page_biz/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── vite.config.js
```

---

## 🧱 Sections

### Hero

Bold intro with strong typography.

### About

Clean layout + skill bars.

### Projects

Neo‑brutalist cards with thick borders and shadows.

### Blog

Minimalist article cards.

### Contact

Yellow/black brutalist contact grid with hover motion.

---

## 🚀 Production Build

```bash
npm run build
npm run preview
```

Deploy the `/dist` folder anywhere: Vercel, Netlify, GitHub Pages, etc.

---

## 📝 Troubleshooting

### Tailwind not loading

* Restart dev server
* Confirm imports in `index.css`

### Images not showing

* Must be inside `/public`

---

## 📄 License

MIT

---

**Built with React, TailwindCSS, and a loud neo‑brutalist vibe.**
