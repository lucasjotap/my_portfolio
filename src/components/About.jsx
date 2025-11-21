import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/content';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-2 text-black">
            About Me
          </h2>

          <div className="w-24 h-3 bg-yellow-300 neocard mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* WHO I AM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-white neocard"
          >
            <h3 className="text-3xl font-black mb-4 text-black">
              Who I Am
            </h3>

            <p className="text-black mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-black">
              <span className="font-bold">Location:</span> {personalInfo.location}
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-white neocard"
          >
            <h3 className="text-3xl font-black mb-6 text-black">
              Skills
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="text-black font-bold">{skill.name}</span>
                    <span className="text-black font-semibold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-black h-3 rounded neocard relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-yellow-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
