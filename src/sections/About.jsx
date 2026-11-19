
import { motion } from "motion/react";

export default function About({ theme }) {
  const dark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 py-28 transition-colors duration-500 md:px-16 lg:px-24 ${
        dark ? "bg-[#08060B] text-white" : "bg-[#F1EDF9] text-[#201A2E]"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm tracking-[5px] text-violet-500">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Beyond the <span className="text-violet-500">Code.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl border p-8 md:p-12 ${
              dark
                ? "border-white/10 bg-white/[0.03]"
                : "border-white bg-white/75 shadow-xl shadow-violet-900/5"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              I'm a Full Stack Developer.
            </h3>

            <p className={`mt-6 text-base leading-8 ${
              dark ? "text-gray-400" : "text-[#71677F]"
            }`}>
              I'm a passionate developer focused on building modern,
              responsive and user-friendly web applications.
              I enjoy turning ideas into real-world digital products
              using the MERN stack.
            </p>

            <p className={`mt-5 text-base leading-8 ${
              dark ? "text-gray-400" : "text-[#71677F]"
            }`}>
              I continuously explore new technologies, improve my
              problem-solving skills and build projects that help
              me grow as a developer.
            </p>

            <a
              href="#projects"
              className="mt-9 inline-flex items-center gap-2 font-semibold text-violet-500 transition hover:gap-4"
            >
              Explore my work <span>↗</span>
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">

            {[
              { number: "01", title: "Frontend", desc: "React & Modern UI" },
              { number: "02", title: "Backend", desc: "Node.js & Express" },
              { number: "03", title: "Database", desc: "MongoDB" },
              { number: "04", title: "Mindset", desc: "Always Learning" },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-2 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-violet-500/40"
                    : "border-white bg-white/75 shadow-lg shadow-violet-900/5 hover:border-violet-300"
                }`}
              >
                <p className="text-sm text-violet-500">{item.number}</p>

                <h3 className="mt-8 text-xl font-bold">
                  {item.title}
                </h3>

                <p className={`mt-2 text-sm ${
                  dark ? "text-gray-500" : "text-[#82778F]"
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
