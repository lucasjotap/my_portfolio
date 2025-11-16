# 💎 Modern Developer Portfolio

A beautiful, modern developer portfolio website built with React, Vite, and TailwindCSS. Features a stunning glassmorphism design, smooth animations, dark mode support, and easy customization.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern, elegant UI with glass-like effects
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🚀 **Fast Performance** - Built with Vite for optimal speed
- 📝 **Easy Content Management** - All content in a single config file
- 🎯 **SEO Friendly** - Optimized structure and meta tags
- 🔗 **Social Links** - Easy integration with GitHub, LinkedIn, and more

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 5** - Build tool and dev server
- **TailwindCSS v3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing

## 📋 Requirements

- **Node.js** 18.x or higher (tested with Node 18.13.0+)
- **npm** 8.x or higher

## 📦 Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🎨 Customization

All content is managed through a single configuration file: `src/data/content.js`

### Personal Information

Edit the `personalInfo` object to update:
- Your name
- Role/title
- Bio/description
- Location
- Email
- Resume link
- Avatar image path

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Developer",
  bio: "Your bio here...",
  // ... more fields
};
```

### Social Links

Update the `socialLinks` object with your social media profiles:

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
};
```

### Projects

Add or modify projects in the `projects` array:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "/project1.jpg", // Add to public folder
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://project.com", // Optional
    featured: true,
  },
  // ... more projects
];
```

### Articles/Blog Posts

Update the `articles` array with your blog posts:

```javascript
export const articles = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Article excerpt...",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript"],
    slug: "article-slug",
    content: "Markdown content here...",
  },
  // ... more articles
];
```

### Skills

Modify the `skills` array to showcase your expertise:

```javascript
export const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 95 },
  // ... more skills
];
```

### Colors & Styling

The color scheme uses a purple/pink gradient theme. To customize:

1. **Primary Colors**: Edit the gradient classes in `src/index.css`
2. **Glass Effects**: Modify the `.glass` utility class
3. **Theme Colors**: Update Tailwind config in `tailwind.config.js`

## 📁 Project Structure

```
web_page_biz/
├── public/              # Static assets (images, resume, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── DarkModeToggle.jsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── data/           # Content configuration
│   │   └── content.js
│   ├── pages/          # Page components
│   │   └── Home.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Building for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   The `dist` folder contains the production-ready files. Deploy to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 📝 Adding Images

1. **Avatar**: Place your avatar image in `public/` and update `personalInfo.avatar`
2. **Project Images**: Add project screenshots to `public/` and reference in project objects
3. **Resume**: Add your resume PDF to `public/` and update `personalInfo.resume`

## 🎯 Features Breakdown

### Sections

- **Hero** - Landing section with name, role, and quick links
- **About** - Personal information and skills showcase
- **Projects** - Portfolio projects with tags and links
- **Blog** - Articles and blog posts
- **Contact** - Contact information and social links
- **Footer** - Copyright and social icons

### Components

- **Navbar** - Sticky navigation with glassmorphism effect
- **DarkModeToggle** - Theme switcher button
- **Hero** - Animated landing section
- **About** - Skills and bio section
- **Projects** - Project cards with hover effects
- **Blog** - Article cards
- **Contact** - Contact methods
- **Footer** - Site footer

## 🔧 Troubleshooting

### TailwindCSS not working?
- Ensure `tailwind.config.js` is properly configured
- Check that `@import "tailwindcss"` is in `index.css`
- Restart the dev server

### Images not loading?
- Ensure images are in the `public/` folder
- Use paths starting with `/` (e.g., `/image.jpg`)
- Check file names match exactly

### Dark mode not persisting?
- Check browser localStorage permissions
- Ensure `ThemeContext` is properly wrapping the app

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Made with ❤️ using React, Vite, and TailwindCSS**
