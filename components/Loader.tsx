"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const timer = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0f0a1e] overflow-hidden">
          {/* Ambient glow orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-125 h-125 rounded-full bg-[#a78bfa] blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute w-75 h-75 rounded-full bg-[#7c3aed] blur-[80px] pointer-events-none translate-x-20 translate-y-10"
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex items-center justify-center">
              {/* Outer slow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 rounded-full"
                style={{
                  background: "transparent",
                  border: "1px solid transparent",
                  borderTopColor: "rgba(167, 139, 250, 0.4)",
                  borderRightColor: "rgba(167, 139, 250, 0.1)",
                }}
              />

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-20 h-20 rounded-full"
                style={{
                  background: "transparent",
                  border: "1px solid transparent",
                  borderTopColor: "rgba(167, 139, 250, 0.6)",
                  borderLeftColor: "rgba(167, 139, 250, 0.2)",
                }}
              />

              {/* Dot on outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
              </motion.div>

              {/* Logo box */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(167,139,250,0.1)",
                    "0 0 40px rgba(167,139,250,0.25)",
                    "0 0 20px rgba(167,139,250,0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-14 h-14 rounded-xl border border-[#a78bfa]/30 bg-[#1a1333] flex items-center justify-center">
                <span className="text-xl font-bold text-[#a78bfa] tracking-tight select-none">
                  SB
                </span>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-1">
              <p className="text-white text-base font-semibold tracking-[0.25em] uppercase">
                Syed Bilal
              </p>
              <p className="text-[#a78bfa]/60 text-xs tracking-[0.4em] uppercase font-mono">
                React & TypeScript Developer
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-2">
              <div className="w-48 h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${count}%` }}
                  className="h-full bg-linear-to-r from-[#7c3aed] to-[#a78bfa] rounded-full"
                />
              </div>
              <motion.span className="text-[#a78bfa]/40 text-xs font-mono tabular-nums">
                {count.toString().padStart(3, "0")}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
