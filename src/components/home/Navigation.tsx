import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'community', 'wisdom', 'cta'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { href: '#features', label: 'Tentang', id: 'features' },
    // { href: '#community', label: 'Feature Importance', id: 'community' },
    { href: '/faq', label: 'FAQ', id: 'wisdom' },
  ];

  return (
    <nav className="bg-background/80 border-border/40 sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <Activity className="h-8 w-8" />
        <span className="font-heading text-foreground text-2xl font-bold">
          DiaForest
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-testid={`link-${link.id}`}
            className={`relative w-fit transition-colors ${
              activeSection === link.id
                ? 'text-primary font-bold'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="bg-primary absolute right-0 bottom-0 left-0 h-1 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </a>
        ))}
        <a href="/app">
          <button
            data-testid="button-join-nav"
            className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Cek Sekarang
          </button>
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-card border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary font-bold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="border-border/40 border-t pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <a
                href="/app"
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    data-testid="button-join-mobile"
                    className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-4 font-medium shadow-lg transition-all hover:shadow-xl"
                  >
                    Mulai Prediksi
                  </button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
