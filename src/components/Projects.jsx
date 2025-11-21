import { motion } from 'framer-motion';
import { projects } from '../data/content';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-black">
            Projects
          </h2>

          <div className="w-32 h-2 bg-black mx-auto rounded-sm"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="
                border-4 border-black 
                bg-white 
                rounded-xl 
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
                transition-all
                overflow-hidden
              "
            >
              {/* Image */}
              <div className="relative h-48 border-b-4 border-black">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-7xl opacity-40">
                    🚀
                  </div>
                )}

                {project.featured && (
                  <div className="
                    absolute top-3 left-3 
                    bg-yellow-300 text-black font-bold 
                    border-2 border-black 
                    px-3 py-1
                    text-xs uppercase tracking-wide
                  ">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2 text-black">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4 text-sm leading-snug">
                  {project.description}
                </p>

{/*                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-yellow-300 text-black font-bold text-xs neocard"
                    >
                      {tag}
                    </span>
                  ))}
                </div>*/}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-yellow-300 text-black font-bold text-xs neocard"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline text-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
