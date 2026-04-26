"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiPhp,
  SiAngular,
  SiBootstrap,
  SiWordpress,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiOpenai,
  SiGooglegemini,
  SiVercel,
  SiGithubcopilot,
} from "react-icons/si";
import { Brain } from "lucide-react";

const techIcons = [
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiWordpress, name: "WordPress", color: "#21759B" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  // AI Tools
  { icon: SiOpenai, name: "ChatGPT", color: "#10a37f" },
  { icon: SiGooglegemini, name: "Gemini", color: "#4285F4" },
  { icon: SiGithubcopilot, name: "Copilot", color: "#a78bfa" },
  { icon: SiVercel, name: "v0.dev", color: "#ffffff" },
  { icon: Brain, name: "Claude AI", color: "#f97316" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -80]);
  const y2 = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 dark:opacity-15"
          animate={{
            background: [
              "radial-gradient(circle, #3b82f6, #8b5cf6)",
              "radial-gradient(circle, #8b5cf6, #06b6d4)",
              "radial-gradient(circle, #06b6d4, #3b82f6)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 dark:opacity-10"
          animate={{
            background: [
              "radial-gradient(circle, #f59e0b, #ec4899)",
              "radial-gradient(circle, #ec4899, #3b82f6)",
              "radial-gradient(circle, #3b82f6, #f59e0b)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                  <Sparkles size={12} />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants}>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span className="block text-foreground/90">Dulanjaya</span>
                  <span className="block gradient-text">Thathsara</span>
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                <span
                  className="text-lg sm:text-xl font-semibold text-muted-foreground"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Software Engineer
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Software Engineer focused on building{" "}
                <span className="text-foreground font-medium">modern, fast</span> and{" "}
                <span className="text-foreground font-medium">scalable</span> web
                applications using{" "}
                <span className="text-blue-400 font-medium">React</span> and{" "}
                <span className="text-purple-400 font-medium">Next.js</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="public/dulanjaya_cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 font-semibold text-sm transition-all duration-300"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 font-semibold text-sm transition-all duration-300"
                >
                  <Mail size={16} />
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                <span className="text-xs text-muted-foreground">Find me on:</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/dulanjaya2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Profile Image Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                />
                {/* Inner rotating ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-purple-500/15"
                />

                {/* Profile image circle */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-blue-500/20">
                  {!imgError ? (
                    <Image
                      src="/profile/dula.jpg"
                      alt="Dulanjaya Thathsara"
                      fill
                      className="object-cover object-center"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    /* Fallback gradient avatar if no image */
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/20 flex items-center justify-center glass">
                      <div className="text-center">
                        <div
                          className="text-5xl font-bold gradient-text"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          DT
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 font-mono">
                          Software Eng.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Gradient overlay ring on image */}
                <div className="absolute inset-8 rounded-full pointer-events-none ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />

                {/* Orbiting tech dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-sm shadow-blue-500/50"
                    style={{
                      top: "50%",
                      left: "50%",
                      marginTop: "-5px",
                      marginLeft: "-5px",
                      x: Math.cos(((deg - 90) * Math.PI) / 180) * 148,
                      y: Math.sin(((deg - 90) * Math.PI) / 180) * 148,
                    }}
                  />
                ))}
              </div>

              {/* Stats cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute right-0 top-8 glass rounded-xl p-3 border border-border shadow-lg"
              >
                <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>3+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute left-0 bottom-8 glass rounded-xl p-3 border border-border shadow-lg"
              >
                <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>6+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={16} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Icons Marquee */}
      <section className="py-16 border-y border-border/50 bg-card/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Tech Stack & AI Tools I Work With
          </motion.p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="marquee-inner">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[80px] group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl glass border border-border tech-icon-card transition-all duration-300 flex items-center justify-center">
                  <tech.icon
                    size={24}
                    style={{ color: tech.color }}
                    className="drop-shadow-sm"
                  />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "6+", label: "Projects Built" },
              { number: "15+", label: "Technologies" },
              { number: "5+", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass card-shine rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-colors group"
              >
                <div
                  className="text-4xl font-bold mb-2 gradient-text"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
