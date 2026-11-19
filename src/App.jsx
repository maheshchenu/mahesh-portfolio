
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#030204] text-white"
          : "bg-[#F5F5F7] text-[#171717]"
      }`}
    >
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar theme={theme} setTheme={handleThemeChange} />

          <Hero theme={theme} />
          <About theme={theme}/>
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
        </>
      )}
    </main>
  );
}

export default App;
