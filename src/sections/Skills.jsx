
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Palette,
  GitBranch,
  Smartphone,
  Brain,
  Layers,
  Terminal,
  Braces,
  Monitor,
} from "lucide-react";

const mainSkills = [
  {
    name: "React JS",
    category: "FRONTEND DEVELOPMENT",
    icon: Code2,
    color: "#61DAFB",
    description: "Building dynamic and interactive user interfaces.",
    number: "01",
  },
  {
    name: "JavaScript",
    category: "PROGRAMMING LANGUAGE",
    icon: Braces,
    color: "#F7DF1E",
    description: "Modern ES6+ JavaScript and application logic.",
    number: "02",
  },
  {
    name: "Node.js",
    category: "BACKEND DEVELOPMENT",
    icon: Server,
    color: "#83CD29",
    description: "Server-side development and REST APIs.",
    number: "03",
  },
  {
    name: "MongoDB",
    category: "DATABASE",
    icon: Database,
    color: "#47A248",
    description: "NoSQL database and data management.",
    number: "04",
  },
];

const otherSkills = [
  { name: "Express.js", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Redux Toolkit", icon: GitBranch },
  { name: "HTML & CSS", icon: Monitor },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Problem Solving", icon: Brain },
  { name: "Git & GitHub", icon: Terminal },
];

export default function Skills({ theme }) {
  const dark = theme === "dark";

  return (
    <section
      id="skills"
      className={`relative overflow-hidden px-6 py-28 transition-colors duration-500 md:px-16 lg:px-24 ${
        dark ? "bg-[#08060B] text-white" : "bg-[#F5F2FA] text-[#201A2E]"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[5px] text-violet-500">
              MY EXPERTISE
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
              The Tech
              <br />
              <span className="text-violet-500">Behind Me.</span>
            </h2>
          </div>

          <p className={`max-w-sm leading-8 ${
            dark ? "text-gray-400" : "text-[#777085]"
          }`}>
            A collection of technologies and tools I use to
            transform concepts into meaningful digital experiences.
          </p>
        </motion.div>

        {/* Main Bento Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mainSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className={`group relative min-h-[270px] overflow-hidden rounded-[28px] border p-7 transition-all duration-500 ${
                  dark
                    ? "border-white/[0.09] bg-[#110E16] hover:border-violet-500/40"
                    : "border-white bg-white shadow-[0_10px_40px_rgba(70,40,110,0.04)] hover:border-violet-300 hover:shadow-[0_20px_50px_rgba(120,80,180,0.12)]"
                }`}
              >
                <span className="absolute right-7 top-7 text-xs text-gray-500">
                  / {skill.number}
                </span>

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-[65px] transition duration-700 group-hover:opacity-30"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative mt-12">
                  <p className="text-[10px] font-semibold tracking-[2px] text-violet-500">
                    {skill.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {skill.name}
                  </h3>

                  <p className={`mt-3 text-sm leading-6 ${
                    dark ? "text-gray-500" : "text-[#898096]"
                  }`}>
                    {skill.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Other technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-8 rounded-[28px] border p-8 md:p-10 ${
            dark
              ? "border-white/[0.09] bg-[#110E16]"
              : "border-white bg-white shadow-[0_10px_40px_rgba(70,40,110,0.04)]"
          }`}
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-[3px] text-violet-500">
                THE TOOLKIT
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                More Technologies
              </h3>
            </div>

            <span className="text-sm text-violet-500">
              + 07 TOOLS
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className={`flex items-center gap-3 rounded-xl border px-5 py-4 transition-colors ${
                    dark
                      ? "border-white/10 bg-white/[0.025] hover:border-violet-500/50 hover:bg-violet-500/10"
                      : "border-[#EAE4F2] bg-[#FAF9FC] hover:border-violet-300 hover:bg-[#F2ECFF]"
                  }`}
                >
                  <Icon size={18} className="text-violet-500" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
