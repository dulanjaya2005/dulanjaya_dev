import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Developer blog and articles by Dulanjaya Thathsara on web development, React, Next.js, and more.",
};

export default function BlogPage() {
  return <BlogClient />;
}
