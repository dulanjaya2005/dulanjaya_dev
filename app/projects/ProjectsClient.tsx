"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { featuredProjects } from "@/data/portfolio";
import {
  Github, Star, ExternalLink, Code2, Loader2, Globe, Layers,
} from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  PHP: "#777BB4",
  Java: "#ED8B00",
  "C++": "#00599C",
  "C#": "#239120",
};

function FeaturedProjectCard({
  project,
  index,
}: {
  project: typeof featuredProjects[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="glass card-shine rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Layers size={28} className="text-white" />
            </div>
            <span className="text-sm text-muted-foreground font-mono">
              {project.title}
            </span>
          </div>
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="p-6">
        <h3
          className="text-lg font-bold mb-2"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs bg-secondary border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-semibold"
            >
              <Globe size={12} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-xs font-semibold"
            >
              <Github size={12} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GitHubRepoCard({
  repo,
  index,
}: {
  repo: GitHubRepo;
  index: number;
}) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass card-shine rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-primary flex-shrink-0" />
          <span
            className="font-semibold text-sm truncate group-hover:text-primary transition-colors"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {repo.name}
          </span>
        </div>
        <ExternalLink
          size={14}
          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
        />
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {repo.description || "No description provided."}
      </p>

      <div className="flex items-center justify-between">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: languageColors[repo.language] || "#64748b",
              }}
            />
            <span className="text-xs text-muted-foreground">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
          <Star size={12} />
          <span>{repo.stargazers_count}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsClient() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/dulanjaya2005/repos?sort=updated&per_page=24")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data.filter((r) => !r.fork));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-16">
      <Section>
        {/* Featured Projects */}
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Hand-picked projects that showcase my skills and the type of work I'm most proud of."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub Repos */}
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub Repositories"
          description="My public repositories on GitHub — a mix of projects, experiments, and open source contributions."
        />

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="animate-spin" size={20} />
              <span>Fetching repositories from GitHub...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              Couldn&apos;t load GitHub repos right now.
            </p>
            <a
              href="https://github.com/dulanjaya2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <GitHubRepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <a
                href="https://github.com/dulanjaya2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border font-semibold text-sm transition-all duration-200"
              >
                <Github size={16} />
                View all on GitHub
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </>
        )}
      </Section>
    </div>
  );
}
