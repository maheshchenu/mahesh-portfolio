
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, setTheme }) {
  const dark = theme === "dark";

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.getBoundingClientRect().top;

          if (top <= 160) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navSurface = dark
    ? "border-white/10 bg-[#100C18]/85 shadow-black/20"
    : "border-purple-200/70 bg-white/85 shadow-purple-200/30";

  const navText = dark
    ? "text-gray-400 hover:text-white"
    : "text-gray-600 hover:text-purple-700";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <motion.nav
        animate={{
          maxWidth: scrolled ? 1120 : 1400,
          y: scrolled ? 0 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`relative mx-auto flex items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-2xl transition-all duration-500 md:px-7 ${navSurface} ${
          scrolled
            ? "shadow-xl"
            : "shadow-lg"
        }`}
        style={{
          boxShadow: scrolled
            ? dark
              ? "0 10px 40px rgba(0,0,0,0.3)"
              : "0 10px 40px rgba(124,58,237,0.10)"
            : undefined,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group relative text-2xl font-black tracking-tight"
        >
          <span
            className={`transition-colors duration-300 ${
              dark ? "text-white" : "text-gray-900"
            } group-hover:text-purple-500`}
          >
            MC
          </span>
          <span className="text-purple-500">.</span>

          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-purple-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? dark
                      ? "bg-purple-500/10 text-purple-300"
                      : "bg-purple-100 text-purple-700"
                    : `${navText} ${
                        dark
                          ? "hover:bg-white/5"
                          : "hover:bg-purple-50"
                      }`
                }`}
              >
                <motion.span
                  className="relative z-10 inline-block"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>

                {active && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-purple-500 shadow-[0_0_12px_2px_rgba(168,85,247,0.65)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="absolute inset-0 rounded-xl bg-purple-500/0 transition-colors duration-300 group-hover:bg-purple-500/10" />
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ rotate: 15, scale: 1.12 }}
            whileTap={{ scale: 0.85, rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
              dark
                ? "border-white/10 bg-white/5 text-yellow-300 hover:border-purple-400/50 hover:bg-purple-500/15"
                : "border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-400 hover:bg-purple-100"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {dark ? <Sun size={19} /> : <Moon size={19} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Let's Talk */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/50 sm:flex"
          >
            Let's Talk
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.85 }}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 lg:hidden ${
              dark
                ? "border-white/10 bg-white/5 text-white"
                : "border-purple-200 bg-purple-50 text-gray-900"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className={`mx-auto mt-3 max-w-[1400px] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-2xl lg:hidden ${
              dark
                ? "border-white/10 bg-[#100C18]/95"
                : "border-purple-200 bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const active = activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? dark
                          ? "bg-purple-500/15 text-purple-300"
                          : "bg-purple-100 text-purple-700"
                        : dark
                          ? "text-gray-400 hover:bg-white/5 hover:text-white"
                          : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <motion.span
                        layoutId="mobileActiveNav"
                        className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.97 }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
