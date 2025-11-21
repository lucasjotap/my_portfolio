import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { navLinks } from '../data/content';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      const el = document.querySelector(`#${hash}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200
        bg-yellow-300 dark:bg-[#fde047]
        border-b-4 border-black
        ${isScrolled ? 'shadow-[0_6px_0_0_#000]' : 'shadow-[0_4px_0_0_#000]'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="text-3xl font-extrabold text-black dark:text-black"
          >
            Lucas Pereira
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-black dark:text-black font-extrabold hover:underline"
              >
                {link.name}
              </button>
            ))}
            <DarkModeToggle />
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                bg-white dark:bg-black
                border-4 border-black
                shadow-[4px_4px_0_0_#000]
                p-2
              "
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="
                  block w-full text-left
                  text-black dark:text-black 
                  font-extrabold py-2 underline
                "
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
