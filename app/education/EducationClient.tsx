"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { education } from "@/data/portfolio";
import type { Certificate } from "@/data/portfolio";
import {
  Calendar, CheckCircle, Clock, FileText, X,
  Download, ExternalLink, GraduationCap, Award,
} from "lucide-react";

function InstitutionLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="w-14 h-14 rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center flex-shrink-0 relative">
      <Image
        src={src}
        alt={`${name} logo`}
        width={56}
        height={56}
        className="object-contain p-1"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span style="font-family:Syne,sans-serif;font-size:11px;font-weight:700;background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${name.slice(0, 3).toUpperCase()}</span>`;
          }
        }}
      />
    </div>
  );
}

/* ── Single PDF viewer modal ── */
function PDFModal({
  isOpen,
  onClose,
  pdfPath,
  title,
  issuedBy,
}: {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  title: string;
  issuedBy: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />
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
                <div className="p-2 rounded-lg bg-blue-500/10 flex-shrink-0">
                  <Award size={18} className="text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm truncate" style={{ fontFamily: "Syne, sans-serif" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{issuedBy}</p>
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
            {/* PDF */}
            <div className="flex-1 overflow-hidden bg-zinc-950">
              <iframe
                src={`${pdfPath}#toolbar=1&navpanes=0`}
                className="w-full h-full"
                title={title}
              />
            </div>
            <div className="p-2 border-t border-border bg-card/50 flex-shrink-0 text-center">
              <p className="text-xs text-muted-foreground">
                File path: <code className="text-primary text-xs">{pdfPath}</code>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Certificate list modal for Moratuwa (shows 4 certs as tiles) ── */
function CertificatesModal({
  isOpen,
  onClose,
  certificates,
  institutionName,
  onViewCert,
}: {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
  institutionName: string;
  onViewCert: (cert: Certificate) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-20 z-50 glass-strong rounded-2xl border border-border overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Award size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>
                    Certificates
                  </h3>
                  <p className="text-xs text-muted-foreground">{institutionName}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate grid */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-all group"
                  >
                    {/* Icon + number */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-snug" style={{ fontFamily: "Syne, sans-serif" }}>
                          {cert.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuedBy}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-1">
                      <button
                        onClick={() => onViewCert(cert)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-semibold"
                      >
                        <FileText size={13} />
                        View PDF
                      </button>
                      <a
                        href={cert.pdfPath}
                        download
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-xs font-semibold"
                      >
                        <Download size={13} />
                      </a>
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-xs font-semibold"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* PDF path reminder */}
              <div className="mt-6 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <p className="text-xs text-yellow-400/80 font-semibold mb-2">📂 Certificate PDF files — place here:</p>
                {certificates.map((cert) => (
                  <p key={cert.id} className="text-xs text-muted-foreground font-mono">
                    public{cert.pdfPath}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Transcript modal (IMS) ── */
function TranscriptModal({
  isOpen,
  onClose,
  transcriptPath,
  institutionName,
}: {
  isOpen: boolean;
  onClose: () => void;
  transcriptPath: string;
  institutionName: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-16 z-50 glass-strong rounded-2xl border border-border overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <FileText size={18} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>Academic Transcript</h3>
                  <p className="text-xs text-muted-foreground">{institutionName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href={transcriptPath} download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-semibold">
                  <Download size={13} /> Download
                </a>
                <a href={transcriptPath} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-xs font-semibold">
                  <ExternalLink size={13} /> Open
                </a>
                <button onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-zinc-950">
              <iframe src={`${transcriptPath}#toolbar=1&navpanes=0`} className="w-full h-full" title="Transcript" />
            </div>
            <div className="p-2 border-t border-border bg-card/50 text-center">
              <p className="text-xs text-muted-foreground">
                Place file at: <code className="text-primary text-xs">public{transcriptPath}</code>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function EducationClient() {
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [activeTranscript, setActiveTranscript] = useState<{ path: string; name: string } | null>(null);
  const [certsOpen, setCertsOpen] = useState(false);
  const [activeCerts, setActiveCerts] = useState<{ certs: Certificate[]; name: string } | null>(null);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<Certificate | null>(null);

  const openTranscript = (path: string, name: string) => {
    setActiveTranscript({ path, name });
    setTranscriptOpen(true);
  };

  const openCerts = (certs: Certificate[], name: string) => {
    setActiveCerts({ certs, name });
    setCertsOpen(true);
  };

  const openPdf = (cert: Certificate) => {
    setActivePdf(cert);
    setCertsOpen(false);
    setPdfOpen(true);
  };

  const closePdf = () => {
    setPdfOpen(false);
    setCertsOpen(true); // go back to cert list
  };

  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Academic Background"
          title="Education & Training"
          description="My academic journey and professional training — building the foundation for my software engineering career."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20"
              >
                {/* dot */}
                <div className="absolute left-8 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-background shadow-lg shadow-blue-500/40 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass card-shine rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <InstitutionLogo src={edu.logo} name={edu.institution} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <h3 className="font-bold text-lg text-foreground leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                            {edu.institution}
                          </h3>
                          <p className="text-primary font-semibold text-sm mt-0.5">{edu.course}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border flex-shrink-0 ${
                          edu.status === "Completed"
                            ? "bg-green-500/10 text-green-500 border-green-500/30"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/30"
                        }`}>
                          {edu.status === "Completed" ? <CheckCircle size={12} /> : <Clock size={12} />}
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>{edu.duration}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                  <div className="flex items-center gap-3 flex-wrap">
                    {edu.grade && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border/50">
                        <span className="text-xs text-muted-foreground">Grade:</span>
                        <span className="text-xs font-semibold text-foreground">{edu.grade}</span>
                      </div>
                    )}

                    {/* Moratuwa — 4 certificates button */}
                    {edu.certificates && edu.certificates.length > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openCerts(edu.certificates!, edu.institution)}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 transition-colors text-xs font-semibold"
                      >
                        <Award size={13} />
                        View Certificates ({edu.certificates.length})
                      </motion.button>
                    )}

                    {/* IMS transcript */}
                    {edu.hasTranscript && edu.transcriptPath && (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openTranscript(edu.transcriptPath!, edu.institution)}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors text-xs font-semibold"
                      >
                        <FileText size={13} />
                        View Transcript
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
              <span className="gradient-text">Always Learning</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I&apos;m passionate about continuous learning and regularly take online courses,
              attend workshops, and explore new technologies to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Certificates list modal */}
      {activeCerts && (
        <CertificatesModal
          isOpen={certsOpen}
          onClose={() => setCertsOpen(false)}
          certificates={activeCerts.certs}
          institutionName={activeCerts.name}
          onViewCert={openPdf}
        />
      )}

      {/* Single PDF viewer */}
      {activePdf && (
        <PDFModal
          isOpen={pdfOpen}
          onClose={closePdf}
          pdfPath={activePdf.pdfPath}
          title={activePdf.title}
          issuedBy={activePdf.issuedBy}
        />
      )}

      {/* Transcript modal */}
      {activeTranscript && (
        <TranscriptModal
          isOpen={transcriptOpen}
          onClose={() => setTranscriptOpen(false)}
          transcriptPath={activeTranscript.path}
          institutionName={activeTranscript.name}
        />
      )}
    </div>
  );
}
