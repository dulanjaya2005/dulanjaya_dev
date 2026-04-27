"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

const pageNames: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
  "/education": "Education",
  "/blog": "Blog",
  "/contact": "Contact",
};

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const prevPathRef = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setLoading(false);
      setIsFirst(false);
    }, 1800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirst) return;
    if (pathname === prevPathRef.current) return;
    prevPathRef.current = pathname;

    setLoading(true);
    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, isFirst]);

  const pageName = pageNames[pathname] ?? "Loading";

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "hsl(var(--background))" }}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, #3b82f6, #8b5cf6)" }}
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, #8b5cf6, #06b6d4)" }}
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">

            {/* Logo with spinning rings */}
            <div className="relative flex items-center justify-center w-28 h-28">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid transparent",
                  borderTopColor: "#3b82f6",
                  borderRightColor: "#8b5cf6",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full"
                style={{
                  border: "1.5px solid transparent",
                  borderTopColor: "#06b6d4",
                  borderLeftColor: "#a78bfa",
                }}
              />
              <motion.div
                animate={{ scale: [0.94, 1.06, 0.94] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/30"
              >
                <Code2 size={22} className="text-white" />
              </motion.div>
            </div>

            {/* Name & subtitle */}
            <div className="flex flex-col items-center gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold gradient-text select-none"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Dulanjaya Thathsara
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xs tracking-[0.25em] uppercase select-none"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                {isFirst ? "Software Engineer" : pageName}
              </motion.p>
            </div>

            {/* Progress bar */}
            <div
              className="w-44 h-[2px] rounded-full overflow-hidden"
              style={{ background: "hsl(var(--border))" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: isFirst ? 1.5 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* Pulsing dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "hsl(var(--primary))" }}
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.3, 0.8] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}