
import { motion } from "motion/react";

export default function Hero({ theme }) {
  const dark = theme === "dark";

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-36 transition-colors duration-500 md:px-16 lg:px-24 ${
        dark
          ? "bg-[#030204] text-white"
          : "bg-[#F8F7FC] text-[#201A2E]"
      }`}
    >
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute -right-40 top-10 h-[650px] w-[650px] rounded-full blur-[140px] ${
          dark ? "bg-violet-700/20" : "bg-[#C4A7FF]/30"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full blur-[130px] ${
          dark ? "bg-purple-900/20" : "bg-[#E7DFFF]/50"
        }`}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT CONTENT */}
        <div className="relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_15px_#4ade80]" />

            <span className="text-xs font-medium text-emerald-400">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm tracking-[5px] text-violet-500"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-6xl font-black leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl xl:text-[100px]"
          >
            Mahesh
            <br />

            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Chenu
            </span>

            <span className="text-violet-500">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mt-6 inline-block text-2xl font-bold sm:text-3xl md:text-4xl"
          >
            Full Stack Developer

            <span className="absolute -bottom-3 left-full ml-4 hidden h-1 w-32 -rotate-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 md:block" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`mt-8 max-w-lg text-base leading-8 md:text-lg ${
              dark ? "text-gray-400" : "text-[#777085]"
            }`}
          >
            I build modern web applications using React,
            Node.js, Express and MongoDB. Turning ideas into
            practical digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/50"
            >
              View My Projects →
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-8 py-4 text-sm font-semibold transition duration-300 hover:border-violet-500 hover:text-violet-500 ${
                dark
                  ? "border-white/30"
                  : "border-[#D9D0E8] bg-white/60 text-[#514765]"
              }`}
            >
              Contact Me
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Mahesh_Chenu_Resume.pdf"
              className={`rounded-full border border-violet-500/50 px-8 py-4 text-sm font-semibold text-violet-500 transition duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:text-white ${
                dark ? "bg-violet-500/10" : "bg-white/70"
              }`}
            >
              Download Resume ↓
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-7 flex gap-3"
          >
            <a
              href="https://github.com/maheshchenu"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border px-5 py-3 text-xs font-semibold transition hover:border-violet-500 hover:text-violet-500 ${
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-violet-200 bg-white/70"
              }`}
            >
              GitHub
            </a>

            <a
              href="#"
              className={`rounded-full border px-5 py-3 text-xs font-semibold transition hover:border-violet-500 hover:text-violet-500 ${
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-violet-200 bg-white/70"
              }`}
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Highlights */}
          <div
            className={`mt-12 flex gap-12 border-t pt-7 ${
              dark ? "border-white/10" : "border-[#E4DDED]"
            }`}
          >
            <div>
              <p className="text-2xl font-bold">MERN</p>

              <p
                className={`mt-2 text-xs tracking-widest ${
                  dark ? "text-gray-500" : "text-[#9990A8]"
                }`}
              >
                TECH STACK
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">2025</p>

              <p
                className={`mt-2 text-xs tracking-widest ${
                  dark ? "text-gray-500" : "text-[#9990A8]"
                }`}
              >
                GRADUATE
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT - BIG ROUND PROFILE */}
        <div className="relative mx-auto flex w-full max-w-[600px] items-center justify-center py-16">

          {/* Purple glow */}
          <div
            className={`absolute h-[400px] w-[400px] rounded-full blur-[110px] sm:h-[500px] sm:w-[500px] ${
              dark ? "bg-violet-700/50" : "bg-violet-400/40"
            }`}
          />

          {/* Outer orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-violet-400/50 sm:h-[570px] sm:w-[570px]"
          />

          {/* Neon circle */}
          <div className="absolute h-[400px] w-[400px] rounded-full border-[3px] border-violet-500 shadow-[0_0_20px_#9333ea,0_0_60px_#7e22ce] sm:h-[500px] sm:w-[500px]" />

          {/* Inner glow */}
          <div className="absolute h-[370px] w-[370px] rounded-full bg-gradient-to-br from-purple-600/30 to-transparent blur-2xl sm:h-[470px] sm:w-[470px]" />

          {/* Circular profile photo */}
          <div
            className={`relative z-10 h-[380px] w-[380px] overflow-hidden rounded-full border-[5px] shadow-[0_0_50px_rgba(139,92,246,0.4)] sm:h-[460px] sm:w-[460px] ${
              dark
                ? "border-[#A855F7]"
                : "border-[#A78BFA]"
            }`}
          >
            <img
              src="/mahesh-profile.png"
              alt="Mahesh Chenu - Full Stack Developer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              draggable="false"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Floating developer label */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute right-0 top-10 z-20 rounded-xl border px-5 py-3 shadow-xl backdrop-blur-xl ${
              dark
                ? "border-white/10 bg-[#141419]/90"
                : "border-white bg-white/85"
            }`}
          >
            <p className="text-xs text-violet-500">
              {"<Developer />"}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
