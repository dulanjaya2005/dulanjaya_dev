"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About" },
  { href: "/skills",    label: "Skills" },
  { href: "/projects",  label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/blog",      label: "Blog" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted]       = useState(false);
  const pathname                    = usePathname();
  const { theme, setTheme }         = useTheme();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20"
              >
                <Code2 size={15} className="text-white" />
              </motion.div>
              <span
                className="font-bold text-base tracking-tight text-foreground"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Dulanjaya
                <span className="gradient-text ml-1">.</span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-secondary/50 border border-border/50 backdrop-blur-sm">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-primary/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 transition-colors duration-200",
                          isActive
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-border/60 bg-secondary/50 hover:bg-secondary hover:border-primary/30 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.18 }}
                    >
                      {theme === "dark"
                        ? <Sun size={15} className="text-amber-400" />
                        : <Moon size={15} className="text-blue-500" />
                      }
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              )}

              {/* Hire me — desktop only */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200"
              >
                Hire Me
              </Link>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-border/60 bg-secondary/50 hover:bg-secondary transition-all duration-200"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen
                      ? <X size={17} className="text-muted-foreground" />
                      : <Menu size={17} className="text-muted-foreground" />
                    }
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Active page indicator bar ── */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.4 }}
        />
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* drawer */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[68px] left-4 right-4 z-40 md:hidden rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden"
            >
              {/* Nav links */}
              <nav className="p-3 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom divider + hire me */}
              <div className="border-t border-border/50 p-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}