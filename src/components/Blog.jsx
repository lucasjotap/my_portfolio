import { motion } from 'framer-motion';
import { articles } from '../data/content';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-2 text-black">
            Blog & Articles
          </h2>

          <div className="w-24 h-3 bg-yellow-300 neocard mx-auto"></div>
        </motion.div>

        {/* ARTICLE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="p-8 rounded-xl bg-white neocard"
            >
              {/* META INFO */}
              <div className="flex items-center gap-2 mb-4 text-sm font-bold text-black">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-black mb-3 text-black">
                {article.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-black mb-4 line-clamp-3 font-medium">
                {article.excerpt}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-yellow-300 text-black font-bold text-xs neocard"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <motion.a
                href={
                  article.url ||
                  `https://medium.com/@leiathemosthot/${article.slug}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-black flex items-center gap-2 underline"
                whileHover={{ x: 5 }}
              >
                Read on Medium
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
