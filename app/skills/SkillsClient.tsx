"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { skills } from "@/data/portfolio";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiNodedotjs, SiPhp, SiAngular, SiBootstrap,
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiGit, SiDocker, SiWordpress, SiFigma, SiFramer,
  SiOpenai, SiGooglegemini, SiGithubcopilot, SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Server, Database, Wrench, Heart, Brain, Sparkles } from "lucide-react";


const iconMap: Record<string, React.ComponentType<any>> = {
  html: SiHtml5, css: SiCss, javascript: SiJavascript,
  typescript: SiTypescript, react: SiReact, nextjs: SiNextdotjs,
  nodejs: SiNodedotjs, php: SiPhp, angular: SiAngular,
  bootstrap: SiBootstrap, tailwind: SiTailwindcss, mysql: SiMysql,
  postgresql: SiPostgresql, mongodb: SiMongodb, firebase: SiFirebase,
  git: SiGit, docker: SiDocker, wordpress: SiWordpress,
  figma: SiFigma, framer: SiFramer, vscode: VscVscode,
  // AI
  openai: SiOpenai, gemini: SiGooglegemini, copilot: SiGithubcopilot,
  v0: SiVercel, claude: Brain, midjourney: Sparkles, cursor: Brain, perplexity: Brain,
};

const iconColors: Record<string, string> = {
  html: "#E34F26", css: "#1572B6", javascript: "#F7DF1E",
  typescript: "#3178C6", react: "#61DAFB", nextjs: "#ffffff",
  nodejs: "#339933", php: "#777BB4", angular: "#DD0031",
  bootstrap: "#7952B3", tailwind: "#06B6D4", mysql: "#4479A1",
  postgresql: "#4169E1", mongodb: "#47A248", firebase: "#FFCA28",
  git: "#F05032", docker: "#2496ED", wordpress: "#21759B",
  figma: "#F24E1E", framer: "#0055FF", vscode: "#007ACC",
  api: "#64748b", express: "#ffffff", vercel: "#ffffff",
  // AI
  openai: "#10a37f", gemini: "#4285F4", copilot: "#a78bfa",
  v0: "#ffffff", claude: "#f97316", midjourney: "#f59e0b",
  cursor: "#6366f1", perplexity: "#22d3ee",
};

function SkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const Icon = iconMap[icon];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon size={16} style={{ color: iconColors[icon] || "#64748b" }} />
          )}
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function AISkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const Icon = iconMap[icon];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon size={16} style={{ color: iconColors[icon] || "#f97316" }} />
          )}
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}


function CategoryCard({ title, icon: Icon, children, delay = 0, variant = "default" }: {
  title: string;
  
  icon: React.ComponentType<any>;
  children: React.ReactNode;
  delay?: number;
  variant?: "default" | "ai";
}) {
  const isAI = variant === "ai";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`glass card-shine rounded-2xl p-6 border transition-all duration-300 ${
        isAI
          ? "border-orange-500/20 hover:border-orange-500/40 bg-gradient-to-br from-orange-500/5 to-purple-500/5"
          : "border-border hover:border-primary/30"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${isAI ? "bg-orange-500/10 text-orange-400" : "bg-primary/10 text-primary"}`}>
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
          <span className={isAI ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500" : "gradient-text"}>
            {title}
          </span>
        </h3>
        {isAI && (
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold">
            NEW
          </span>
        )}
      </div>
      {children}
    </motion.div>
  );
}

export default function SkillsClient() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Technical Skills"
          title="What I Work With"
          description="A comprehensive view of my technical skills, tools, AI platforms, and technologies I use to build modern web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <CategoryCard title="Frontend" icon={SiReact} delay={0}>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard title="Backend" icon={Server} delay={0.1}>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard title="Databases" icon={Database} delay={0.2}>
            <div className="space-y-4">
              {skills.database.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard title="Tools & DevOps" icon={Wrench} delay={0.3}>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </CategoryCard>
        </div>

        {/* AI Section - Full width with special styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="glass card-shine rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 transition-all duration-300">
            {/* AI Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                <Brain size={22} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500" style={{ fontFamily: "Syne, sans-serif" }}>
                  AI Tools & Platforms
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  AI-powered tools I integrate into my daily workflow
                </p>
              </div>
              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-orange-400 border border-orange-500/20 font-semibold">
                ✨ AI-Powered
              </span>
            </div>

            {/* AI skill bars in 2-col grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {skills.ai.map((skill) => (
                <AISkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* AI badge row */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-4 font-semibold uppercase tracking-wider">
                How I use AI in development
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Code Generation", "Code Review", "Debugging", "Documentation",
                  "UI Design", "Content Writing", "Image Generation", "Prompt Engineering",
                  "API Integration", "Testing", "Refactoring",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs bg-orange-500/5 border border-orange-500/20 text-orange-300/80 hover:bg-orange-500/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass card-shine rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
              <Heart size={20} />
            </div>
            <h3 className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
              <span className="gradient-text">Soft Skills</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-xl glass border border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
