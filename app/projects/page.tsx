import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Dulanjaya Thathsara's portfolio of web development projects.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
