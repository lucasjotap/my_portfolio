import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/content';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 bg-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >

        {/* AVATAR */}
        <motion.div variants={itemVariants} className="mb-10">
          <motion.div
            className="inline-block mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-40 h-40 mx-auto rounded-xl neocard overflow-hidden bg-yellow-300">
              {personalInfo.avatar ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl font-black text-black">
                  {personalInfo.name.charAt(0)}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-black mb-4 text-black"
        >
          {personalInfo.name}
        </motion.h1>

        {/* ROLE */}
        <motion.p
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-black mb-4"
        >
          {personalInfo.role}
        </motion.p>

        {/* BIO */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-black mb-10 max-w-2xl mx-auto"
        >
          {personalInfo.bio}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: 'GitHub', href: socialLinks.github },
            { label: 'LinkedIn', href: socialLinks.linkedin },
            personalInfo.resume && { label: 'Resume', href: personalInfo.resume },
            { label: 'Contact', href: socialLinks.email },
          ]
            .filter(Boolean)
            .map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 font-bold bg-white neocard rounded-lg"
              >
                {label}
              </motion.a>
            ))}
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white p-3 rounded-lg neocard"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
