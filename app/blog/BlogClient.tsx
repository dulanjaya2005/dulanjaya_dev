"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogPosts, categories } from "@/data/blog";
import { Search, Clock, Calendar, ArrowRight, Tag, Flame } from "lucide-react";
import { cn } from "@/utils/cn";

const categoryColors: Record<string, string> = {
  "Next.js": "bg-black/80 text-white",
  TypeScript: "bg-blue-600/20 text-blue-400",
  "UI/UX": "bg-pink-500/20 text-pink-400",
  React: "bg-cyan-500/20 text-cyan-400",
  JavaScript: "bg-yellow-500/20 text-yellow-400",
  "Web Development": "bg-emerald-500/20 text-emerald-400",
};

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const featured = blogPosts.find((p) => p.featured);

  return (
    <div className="pt-16">
      <Section>
        <SectionHeader
          eyebrow="Writing"
          title="Developer Blog & Articles"
          description="Thoughts, tutorials, and insights on modern web development, React ecosystem, and software engineering."
        />

        {/* Featured post */}
        {featured && activeCategory === "All" && !search && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <Link href={`/blog/${featured.slug}`}>
              <div className="glass card-shine rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="h-56 lg:h-auto min-h-[200px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl opacity-20 font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
                        {featured.category}
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
                        <Flame size={10} />
                        Featured
                      </span>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-semibold",
                          categoryColors[featured.category] ||
                            "bg-secondary text-secondary-foreground"
                        )}
                      >
                        {featured.category}
                      </span>
                    </div>
                    <h2
                      className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {featured.readingTime} min read
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground"
            >
              No articles found. Try a different search or category.
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="glass card-shine rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col group">
                      {/* Image area */}
                      <div className="h-40 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-cyan-500/15 relative overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Tag size={48} className="text-primary" />
                        </div>
                        <div
                          className="absolute inset-0 opacity-[0.05]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={cn(
                              "px-2 py-1 rounded-full text-xs font-semibold",
                              categoryColors[post.category] ||
                                "bg-secondary text-secondary-foreground"
                            )}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3
                          className="font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {post.readingTime} min read
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
}
