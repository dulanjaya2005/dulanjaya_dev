"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Github, Linkedin, Twitter, Mail, MapPin, MessageSquare, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "dulanjaya@example.com",
    href: "mailto:dulanjaya@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "dulanjaya2005",
    href: "https://github.com/dulanjaya2005",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dulanjaya-thathsara",
    href: "https://linkedin.com",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@dulanjaya2005",
    href: "https://twitter.com/dulanjaya2005",
    color: "from-sky-400 to-sky-600",
  },
];

export default function ContactClient() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contact Me"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass rounded-2xl p-6 border border-border mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm font-medium">Sri Lanka 🇱🇰</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently open to new opportunities and collaborations.
                  Whether it&apos;s a full-time role, freelance project, or just
                  a chat about tech — don&apos;t hesitate to reach out!
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Contact methods */}
            <div className="space-y-3">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 glass card-shine rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <method.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {method.label}
                    </div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Google Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MessageSquare size={16} />
                </div>
                <span
                  className="font-semibold"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Send a Message
                </span>
              </div>

              {/* 
                Replace the src below with your actual Google Form embed URL:
                1. Go to Google Forms → your form
                2. Click "Send" → Embed icon (<>)
                3. Copy the iframe src URL
              */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true"
                width="100%"
                height="640"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="bg-card"
                title="Contact Form"
              >
                Loading form...
              </iframe>

              {/* Fallback if Google Form not configured */}
              <noscript>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    Please enable JavaScript or{" "}
                    <a
                      href="mailto:dulanjaya@example.com"
                      className="text-primary hover:underline"
                    >
                      email me directly
                    </a>
                    .
                  </p>
                </div>
              </noscript>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Powered by Google Forms.{" "}
              <span className="text-primary">
                Replace the iframe src with your own Google Form URL.
              </span>
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
