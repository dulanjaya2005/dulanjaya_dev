"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { cn } from "@/utils/cn";

interface Props {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  "Next.js": "bg-black/80 text-white",
  TypeScript: "bg-blue-600/20 text-blue-400",
  "UI/UX": "bg-pink-500/20 text-pink-400",
  React: "bg-cyan-500/20 text-cyan-400",
  JavaScript: "bg-yellow-500/20 text-yellow-400",
  "Web Development": "bg-emerald-500/20 text-emerald-400",
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
        codeLines = [];
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={i} className="relative mb-6">
            {codeLang && (
              <div className="absolute top-2 right-3 text-xs text-muted-foreground font-mono">
                {codeLang}
              </div>
            )}
            <pre className="bg-secondary/80 border border-border rounded-xl p-4 overflow-x-auto text-sm font-mono leading-relaxed">
              <code>{codeLines.join("\n")}</code>
            </pre>
          </div>
        );
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold mt-10 mb-4 gradient-text"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg font-bold mt-6 mb-3 text-foreground"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-muted-foreground ml-4 mb-1 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={i} className="text-muted-foreground ml-4 mb-1 list-decimal">
          {line.replace(/^\d+\. /, "")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      // Process inline formatting
      const processed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-primary">$1</code>');
      elements.push(
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-2"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }
  }

  return elements;
}

export default function BlogPostClient({ post }: Props) {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold",
                categoryColors[post.category] ||
                  "bg-secondary text-secondary-foreground"
              )}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="gradient-text">{post.title}</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </motion.div>

        {/* Hero image area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 border border-border mb-12 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div
              className="text-9xl font-bold text-primary"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {post.category[0]}
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="prose-custom"
        >
          {renderContent(post.content)}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <Tag size={14} className="text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary border border-border/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back link bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 font-semibold text-sm transition-all duration-200 hover:bg-secondary/80"
          >
            <ArrowLeft size={16} />
            More Articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
