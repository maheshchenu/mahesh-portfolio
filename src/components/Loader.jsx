
import { motion } from "motion/react";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff15 1px, transparent 1px), linear-gradient(90deg, #ffffff15 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* Purple glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute h-[280px] w-[280px] rounded-full border border-purple-500/20"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.p
          initial={{ opacity: 0, letterSpacing: "2px" }}
          animate={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1 }}
          className="mb-8 text-[10px] uppercase text-purple-400"
        >
          Independent Digital Creator
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl font-black tracking-tighter text-white md:text-9xl"
          >
            MAHESH<span className="text-purple-500">.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-5 text-xs tracking-[5px] text-gray-500"
        >
          MERN STACK DEVELOPER
        </motion.p>

        {/* Progress */}
        <div className="mt-16 w-64">
          <div className="mb-3 flex justify-between text-[10px] tracking-widest text-gray-500">
            <span>INITIALIZING EXPERIENCE</span>
            <span>100%</span>
          </div>

          <div className="h-[2px] overflow-hidden bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-purple-500 shadow-[0_0_15px_#a855f7]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-[9px] tracking-[4px] text-gray-700">
        PORTFOLIO © 2026
      </div>
    </motion.div>
  );
}

export default Loader;
