import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dulanjaya2005", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dulanjaya-thathsara-625bb12a9/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/dulanjaya2005", label: "Twitter" },
  { icon: Mail, href: "mailto:dulanjayathathsara9@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span
                className="font-display font-700 text-lg tracking-tight"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                Dulanjaya Thathsara
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Software Engineer focused on building modern, fast and scalable
              web applications.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 text-foreground"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 text-foreground"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dulanjaya Thathsara. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-blue-500">Next.js</span> &{" "}
            <span className="text-purple-500">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
