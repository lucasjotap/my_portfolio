// Content configuration file - Edit this to customize your portfolio

export const personalInfo = {
  name: "Lucas Pereira",
  role: "Software Engineer",
  bio: "Passionate developer building modern web applications with React, Node.js, and cloud technologies. Love open-source, clean code, and solving complex problems.",
  location: "CWB",
  email: "lucasjpereira@outlook.com",
  resume: "/resume.pdf", // Add your resume PDF to public folder
  avatar: "dist/assets/1200px-Lisp_logo.svg.png", // Add your avatar image to public folder
};

export const socialLinks = {
  github: "https://github.com/lucasjotap",
  linkedin: "https://linkedin.com/in/lucasj-pereira/",
  twitter: "https://twitter.com/yourusername", // Optional
  email: "lucasjpereira@outlook.com",
};

export const projects = [
  {
    id: 1,
    title: "Open Lakehouse for Big Data Analytics",
    description: "Full lakehouse implementation with Apache Spark and Apache Airflow plus Delta Lake.",
    image: "dist/assets/Hadoop-2.jpg", // Add project images to public folder
    tags: ["Apache Spark", "Apache Airflow", "Delta Lake"],
    github: "https://github.com/lucasjotap/rocketLaunchETL",
    live: "https://github.com/lucasjotap/rocketLaunchETL", // Optional
    featured: true,
  },
  {
    id: 2,
    title: "React front end for voting app",
    description: "React front end for voting app built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "dist/assets/images.png",
    tags: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/lucasjotap/voting_app",
    live: "https://github.com/lucasjotap/voting_app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Built with React and OpenWeatherMap API.",
    image: "dist/assets/Untitled.jpeg",
    tags: ["React", "API Integration", "Chart.js", "CSS3"],
    github: "https://github.com/lucasjotap/weatherForecastApp",
    live: "https://github.com/lucasjotap/weatherForecastApp",
    featured: false,
  },
];

export const articles = [
  {
    id: 1,
    title: "Toolkit para ingestão de dados na AWS",
    excerpt: "Em 2006, a Amazon lançou a Amazon Web Services (AWS) para oferecer a entrega sob demanda de recursos de TI pela internet. Explore ferramentas essenciais para ingestão de dados na AWS.",
    date: "2024-02-04",
    readTime: "8 min read",
    tags: ["AWS", "Data Engineering", "Cloud Computing"],
    slug: "toolkit-para-ingestao-de-dados-na-aws",
    url: "https://medium.com/@leiathemosthot/toolkit-para-ingest%C3%A3o-de-dados-na-aws-85b69cdd8377",
    content: "",
  },
  {
    id: 2,
    title: "Data Lakes, Data Lakehouses & Delta Lakes",
    excerpt: "Data Lakes: Características, Evolução e Otimizações. Entenda a evolução das soluções de armazenamento de dados e como os Data Lakehouses e Delta Lakes otimizam o processamento de big data.",
    date: "2024-02-04",
    readTime: "10 min read",
    tags: ["Data Engineering", "Big Data", "Data Lakes", "Delta Lake"],
    slug: "data-lakes-data-lakehouses-delta-lakes",
    url: "https://medium.com/@leiathemosthot/data-lakes-data-lakehouses-delta-lake-10c41bf9a1e0",
    content: "",
  },
];

export const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "AWS", level: 70 },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Blog", path: "#blog" },
  { name: "Contact", path: "#contact" },
];

