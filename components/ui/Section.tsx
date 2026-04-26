"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-center mb-16", className)}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
