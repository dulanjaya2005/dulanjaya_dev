"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

const typeColors: Record<string, string> = {
  Internship: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  "Full-time": "bg-green-500/10 text-green-500 border-green-500/30",
  "Part-time": "bg-blue-500/10 text-blue-500 border-blue-500/30",
  Contract: "bg-purple-500/10 text-purple-500 border-purple-500/30",
};

function CompanyLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="w-14 h-14 rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center flex-shrink-0 relative">
      <Image
        src={src}
        alt={`${name} logo`}
        width={56}
        height={56}
        className="object-contain p-1"
        onError={(e) => {
          // Fallback to initials on error
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-sm font-bold text-primary" style="font-family: Syne, sans-serif">${name.slice(0, 2).toUpperCase()}</span>`;
          }
        }}
      />
    </div>
  );
}

export default function AboutClient() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Employment History"
          title="Work Experience"
          description="My professional journey — the companies I've worked with, the roles I've held, and the impact I've made."
        />

        {/* About intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="glass rounded-2xl p-8 border border-border card-shine">
            <h3 className="text-xl font-bold mb-4 gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Software Engineer based in Sri Lanka, specializing in modern web development. With over 3 years of hands-on experience, I build scalable, performant and visually compelling digital products.

My expertise spans the full stack — from crafting pixel-perfect UIs with React and Next.js, to architecting robust backend systems with Node.js and MySQL.

I care deeply about code quality, developer experience and building products that make a real difference to users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I enjoy learning about new technologies, contributing
              to open source, and sharing my knowledge through blog posts.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 border border-border card-shine">
            <h3 className="text-xl font-bold mb-4 gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
              Quick Facts
            </h3>
            <div className="space-y-3">
              {[
                { label: "Location", value: "Sri Lanka 🇱🇰" },
                { label: "Focus", value: "Frontend & Full-Stack" },
                { label: "Availability", value: "Open to opportunities" },
                { label: "Languages", value: "Sinhala, English" },
                { label: "Interests", value: "Open Source, UI/UX Design" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-background shadow-lg shadow-blue-500/50"
                  />
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:col-start-1 md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass card-shine rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {/* Company Logo */}
                        <CompanyLogo src={exp.logo} name={exp.company} />
                        <div className="min-w-0">
                          <h3
                            className="font-bold text-foreground text-lg leading-tight truncate"
                            style={{ fontFamily: "Syne, sans-serif" }}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold border flex-shrink-0 ${typeColors[exp.type]}`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Date on opposite side (desktop) */}
                <div
                  className={`hidden md:flex items-start pt-8 ${
                    index % 2 === 0
                      ? "md:col-start-2 md:pl-16 justify-start"
                      : "md:col-start-1 md:pr-16 justify-end"
                  }`}
                >
                  <span
                    className="text-sm font-semibold text-muted-foreground"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {exp.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
