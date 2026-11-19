
import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "SR Furniture",
    type: "FULL STACK MANAGEMENT SYSTEM",
    description:
      "A complete furniture shop management system to manage products, categories, sales, expenses and manufacturer payments with a dynamic dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://srfurniture.vercel.app/",
    status: "LIVE PROJECT",
    visual: "from-[#8B684B] via-[#493326] to-[#17100C]",
    symbol: "SR",
    featured: true,
    demoVideo: "/videos/SRFURNITURE.mp4",
  },
  {
    number: "02",
    title: "BDA-Connect",
    type: "FULL STACK CRM PLATFORM",
    description:
      "A CRM platform for managing Business Development Associates. Admins can monitor all BDA activities, while individual BDAs access their own data, call history, pending calls and response-time information.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://bda-connect.vercel.app/",
    status: "LIVE PROJECT",
    visual: "from-blue-700 via-indigo-900 to-[#100B25]",
    symbol: "BDA",
    demoVideo: "/videos/BDA.mp4",
  },
  {
    number: "03",
    title: "YummyHub",
    type: "FULL STACK FOOD VENDOR PLATFORM",
    description:
      "A full-stack food vendor application with a dashboard to manage vendor operations and food business activities, powered by a MERN-based backend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    live: "https://react-yummy-dashboard.vercel.app/",
    status: "LIVE PROJECT",
    visual: "from-orange-500 via-red-700 to-[#250D18]",
    symbol: "YH",
    demoVideo: "",
  },
  {
    number: "04",
    title: "BookMyShow Clone",
    type: "MOVIE BOOKING APPLICATION",
    description:
      "A movie booking application featuring movie discovery, show selection and interactive seat selection.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "API"],
    live: "https://mbookmyshowclone.vercel.app/",
    status: "LIVE PROJECT",
    visual: "from-pink-700 via-purple-900 to-[#100B20]",
    symbol: "BM",
    demoVideo: "/videos/bookMyShowClone.mp4",
  },
];

export default function Projects({ theme }) {
  const dark = theme === "dark";

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-28 transition-colors duration-500 md:px-16 lg:px-24 ${
        dark ? "bg-[#030204] text-white" : "bg-[#F5F2FA] text-[#201A2E]"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs tracking-[5px] text-violet-500">
              SELECTED WORKS
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
              Things I've
              <br />
              <span className="text-violet-500">Built.</span>
            </h2>
          </div>

          <p
            className={`max-w-sm leading-8 ${
              dark ? "text-gray-400" : "text-[#777085]"
            }`}
          >
            A collection of real-world applications built with modern
            technologies, creativity and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-[28px] border transition-all duration-500 ${
                dark
                  ? "border-white/10 bg-[#100D14] hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-900/10"
                  : "border-white bg-white shadow-xl shadow-violet-900/[0.04] hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-900/10"
              } ${project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
            >
              {/* Project Visual / Demo Video */}
              <div
                className={`relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.visual} sm:min-h-[320px]`}
              >
                {project.demoVideo ? (
                  <video
                    src={project.demoVideo}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full bg-black object-contain"
                  />
                ) : (
                  <>
                    {/* Background Design */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/50 transition-transform duration-700 group-hover:scale-125" />

                      <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full border border-white/40 transition-transform duration-700 group-hover:scale-125" />
                    </div>

                    {/* Project Logo */}
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: -5 }}
                      transition={{ duration: 0.5 }}
                      className="relative flex h-36 w-36 items-center justify-center rounded-[35px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md sm:h-44 sm:w-44"
                    >
                      <span className="text-6xl font-black tracking-tighter text-white sm:text-7xl">
                        {project.symbol}
                        <span className="text-violet-300">.</span>
                      </span>
                    </motion.div>

                    {/* Video Coming Soon */}
                    <span className="absolute bottom-7 left-7 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs text-white/80 backdrop-blur-md">
                      Demo Video Coming Soon
                    </span>
                  </>
                )}

                {/* Project Number */}
                <span className="pointer-events-none absolute left-7 top-7 text-xs tracking-[3px] text-white/70">
                  PROJECT / {project.number}
                </span>

                {project.demoVideo && (
                  <span className="pointer-events-none absolute bottom-7 left-7 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-xs text-white backdrop-blur-md">
                    PROJECT DEMO
                  </span>
                )}

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-purple-500/0 transition-colors duration-500 group-hover:bg-purple-500/[0.04]" />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs tracking-[2px] text-violet-500">
                    {project.type}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-wider ${
                      project.live
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-violet-500 sm:text-4xl">
                  {project.title}
                </h3>

                <p
                  className={`mt-5 text-sm leading-7 ${
                    dark ? "text-gray-400" : "text-[#777085]"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-2 text-xs transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 ${
                        dark
                          ? "border-white/10 text-gray-300"
                          : "border-violet-100 bg-violet-50 text-[#725A9A]"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Preview */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-violet-500 transition-all duration-300 hover:gap-4"
                  >
                    Live Preview
                    <ExternalLink
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                ) : (
                  <span
                    className={`mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold ${
                      dark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Deployment Pending
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
