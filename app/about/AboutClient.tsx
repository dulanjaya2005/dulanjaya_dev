"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LogoImage } from "@/components/ui/LogoImage";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar, FileText, X, Download, ExternalLink, ScrollText } from "lucide-react";

const typeColors: Record<string, string> = {
  Internship:        "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  "Full-time":       "bg-green-500/10 text-green-500 border-green-500/30",
  "Part-time":       "bg-blue-500/10 text-blue-500 border-blue-500/30",
  Contract:          "bg-purple-500/10 text-purple-500 border-purple-500/30",
  "Startup Company": "bg-orange-500/10 text-orange-500 border-orange-500/30",
};

/* ── Service Letter PDF Modal ── */
function ServiceLetterModal({
  isOpen,
  onClose,
  pdfPath,
  companyName,
}: {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  companyName: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-12 z-50 glass-strong rounded-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-green-500/10 flex-shrink-0">
                  <ScrollText size={18} className="text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-bold text-sm truncate"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Service Letter
                  </h3>
                  <p className="text-xs text-muted-foreground">{companyName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={pdfPath}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-semibold"
                >
                  <Download size={13} />
                  Download
                </a>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-xs font-semibold"
                >
                  <ExternalLink size={13} />
                  Open
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-zinc-950">
              <iframe
                src={`${pdfPath}#toolbar=1&navpanes=0`}
                className="w-full h-full"
                title={`${companyName} Service Letter`}
              />
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-border bg-card/50 flex-shrink-0 text-center">
              <p className="text-xs text-muted-foreground">
                Place file at:{" "}
                <code className="text-primary text-xs">public{pdfPath}</code>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function AboutClient() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeLetter, setActiveLetter] = useState<{
    path: string;
    company: string;
  } | null>(null);

  const openLetter = (path: string, company: string) => {
    setActiveLetter({ path, company });
    setLetterOpen(true);
  };

  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Employment History"
          title="Work Experience"
          description="My professional journey — the companies I've worked with, the roles I've held, and the impact I've made."
        />

        {/* About intro cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="glass rounded-2xl p-8 border border-border card-shine">
            <h3
              className="text-xl font-bold mb-4 gradient-text"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
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
            <h3
              className="text-xl font-bold mb-4 gradient-text"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Quick Facts
            </h3>
            <div className="space-y-3">
              {[
                { label: "Location",     value: "Sri Lanka 🇱🇰" },
                { label: "Focus",        value: "Frontend & Full-Stack" },
                { label: "Availability", value: "Open to opportunities" },
                { label: "Languages",    value: "Sinhala, English" },
                { label: "Interests",    value: "Open Source, UI/UX Design" },
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
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center flex-shrink-0">
                          <LogoImage src={exp.logo} name={exp.company} />
                        </div>
                        <div className="min-w-0">
                          <h3
                            className="font-bold text-foreground text-lg leading-tight"
                            style={{ fontFamily: "Syne, sans-serif" }}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold border flex-shrink-0 ${
                          typeColors[exp.type] ?? "bg-secondary text-secondary-foreground border-border"
                        }`}
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

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Service Letter button */}
                    {exp.serviceLetter && (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openLetter(exp.serviceLetter!, exp.company)}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors text-xs font-semibold"
                      >
                        <ScrollText size={13} />
                        View Service Letter
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Date — desktop opposite side */}
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

      {/* Service Letter Modal */}
      {activeLetter && (
        <ServiceLetterModal
          isOpen={letterOpen}
          onClose={() => setLetterOpen(false)}
          pdfPath={activeLetter.path}
          companyName={activeLetter.company}
        />
      )}
    </div>
  );
}