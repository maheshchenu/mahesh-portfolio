
import { motion } from "motion/react";
import {
  Mail,
  ArrowUpRight,
  Send,
  Sparkles,
  Code2,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

export default function Contact({ theme }) {
  const dark = theme === "dark";

  const surface = dark
    ? "border-white/10 bg-[#15101F]/90"
    : "border-[#C9B5E3] bg-[#D8C9E9]/95";

  const textPrimary = dark ? "text-white" : "text-[#241633]";
  const textSecondary = dark ? "text-gray-400" : "text-[#665477]";

  const email = "maheshchenu.webtech@gmail.com";
  const github = "https://github.com/maheshchenu";
  const whatsapp = "https://wa.me/919346709249";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-6 py-28 transition-colors duration-500 md:px-16 lg:px-24 ${
        dark ? "bg-[#08060B]" : "bg-[#E5DCEF]"
      }`}
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-violet-600/15 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-500">
            <Sparkles size={15} />
            Let's Connect
          </span>

          <h2
            className={`text-4xl font-black tracking-tight sm:text-5xl md:text-7xl ${textPrimary}`}
          >
            Let's Make
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Something Great.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${textSecondary}`}
          >
            Have an idea, opportunity, or project in mind? Let's connect
            and build something meaningful together.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/15 p-3 text-violet-500">
                <BriefcaseBusiness size={25} />
              </div>

              <span
                className={`text-sm font-semibold tracking-widest ${textSecondary}`}
              >
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h3
              className={`text-4xl font-bold leading-tight sm:text-5xl ${textPrimary}`}
            >
              Have an Idea?
              <br />
              <span className="text-violet-500">Let's Build.</span>
            </h3>

            <p
              className={`mt-7 max-w-lg text-base leading-8 ${textSecondary}`}
            >
              I'm Mahesh Chenu, a Full Stack Developer passionate about
              creating modern, responsive and scalable web applications
              using the MERN stack.
            </p>

            <p
              className={`mt-4 max-w-lg text-base leading-8 ${textSecondary}`}
            >
              I'm always interested in connecting with developers,
              collaborating on exciting projects, and exploring new
              opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
              >
                Let's Talk

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-3 rounded-full border px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/15 text-white hover:border-violet-400 hover:bg-violet-500/10"
                    : "border-[#BCA5D9] text-[#241633] hover:border-violet-500 hover:bg-violet-500/10"
                }`}
              >
                <Code2 size={19} />
                GitHub
                <ArrowUpRight size={17} />
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d]"
              >
                <Send size={19} />
                WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className={`group min-w-0 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 ${surface}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/15 p-3 text-violet-500">
                    <Mail size={22} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-violet-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p
                  className={`text-xs font-semibold tracking-widest ${textSecondary}`}
                >
                  EMAIL ADDRESS
                </p>

                <p
                  className={`mt-2 break-all text-sm font-semibold ${textPrimary}`}
                >
                  {email}
                </p>
              </a>

              {/* GitHub Card */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={`group min-w-0 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 ${surface}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/15 p-3 text-violet-500">
                    <Code2 size={22} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-violet-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p
                  className={`text-xs font-semibold tracking-widest ${textSecondary}`}
                >
                  GITHUB PROFILE
                </p>

                <p
                  className={`mt-2 break-all text-sm font-semibold ${textPrimary}`}
                >
                  github.com/maheshchenu
                </p>
              </a>

              {/* WhatsApp Card */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`group col-span-1 min-w-0 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/60 sm:col-span-2 ${
                  dark
                    ? "border-white/10 bg-[#15101F]/90"
                    : "border-[#C9B5E3] bg-[#D8C9E9]/95"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="shrink-0 rounded-xl bg-[#25D366]/15 p-3 text-[#25D366]">
                      <Send size={22} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold tracking-widest ${textSecondary}`}
                      >
                        WHATSAPP
                      </p>

                      <p
                        className={`mt-2 text-base font-bold ${textPrimary}`}
                      >
                        +91 93467 09249
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#25D366] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[100px]" />

            {/* Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[440px] w-[440px] rounded-full border border-dashed border-violet-500/25"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-purple-400/20"
            />

            {/* Orbit Dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[440px] w-[440px]"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 rounded-full bg-violet-500 shadow-lg shadow-violet-500/70" />
            </motion.div>

            {/* Profile Photo */}
            <div
              className={`relative z-10 flex h-[300px] w-[300px] items-center justify-center rounded-[42px] border p-3 shadow-2xl sm:h-[340px] sm:w-[340px] ${
                dark
                  ? "border-violet-400/40 bg-[#171020] shadow-violet-950/60"
                  : "border-[#BCA5D9] bg-[#D8C5F0] shadow-violet-900/30"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-violet-600/10 blur-2xl" />

              <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-violet-400/30">
                <img
                  src="/mahesh-profile.png"
                  alt="Mahesh Chenu - Full Stack Developer"
                  loading="eager"
                  decoding="async"
                  draggable="false"
                  className="block h-full w-full object-cover object-top"
                />
              </div>

              {/* Name Label */}
              <div
                className={`absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border px-6 py-3 shadow-xl ${
                  dark
                    ? "border-white/10 bg-[#171020] text-white"
                    : "border-[#C9B5E3] bg-white text-[#241633]"
                }`}
              >
                <p className="text-center text-lg font-black">
                  Mahesh Chenu.
                </p>

                <p className="text-center text-xs font-semibold tracking-widest text-violet-500">
                  FULL STACK DEVELOPER
                </p>
              </div>
            </div>

            {/* Floating Email Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute right-0 top-16 z-20 rounded-2xl border p-4 shadow-xl backdrop-blur-xl sm:right-[-10px] ${surface}`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-500">
                  <Mail size={20} />
                </div>

                <div>
                  <p className={`text-xs ${textSecondary}`}>
                    Drop a message
                  </p>

                  <p className={`text-sm font-bold ${textPrimary}`}>
                    Let's Connect
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating MERN Card */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute bottom-20 left-0 z-20 rounded-2xl border p-4 shadow-xl backdrop-blur-xl sm:left-[-15px] ${surface}`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-500/15 p-3 text-purple-500">
                  <Layers3 size={21} />
                </div>

                <div>
                  <p className={`text-xs ${textSecondary}`}>
                    Building with
                  </p>

                  <p className={`text-sm font-bold ${textPrimary}`}>
                    MERN Stack
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Opportunity Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute bottom-0 right-3 z-20 rounded-2xl border p-4 shadow-xl backdrop-blur-xl ${surface}`}
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />

                <div>
                  <p className={`text-xs ${textSecondary}`}>
                    Status
                  </p>

                  <p className={`text-sm font-bold ${textPrimary}`}>
                    Open to Work
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sparkles */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-10 top-10 text-violet-500"
            >
              <Sparkles size={25} />
            </motion.div>

            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-12 right-10 text-purple-500"
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className={`mt-28 border-t pt-8 text-center ${
            dark ? "border-white/10" : "border-[#C9B5E3]"
          }`}
        >
          <p className={`text-sm ${textSecondary}`}>
            Designed & Built by{" "}
            <span className="font-bold text-violet-500">
              Mahesh Chenu
            </span>
          </p>

          <p className={`mt-2 text-xs ${textSecondary}`}>
            © {new Date().getFullYear()} Mahesh Chenu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
