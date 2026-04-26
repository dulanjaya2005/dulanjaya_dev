"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-lg"
      >
        <div
          className="text-[10rem] font-bold leading-none gradient-text mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          404
        </div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like this page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm"
          >
            <Home size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-secondary font-semibold text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
