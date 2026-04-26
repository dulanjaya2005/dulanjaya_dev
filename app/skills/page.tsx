import type { Metadata } from "next";
import SkillsClient from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and expertise of Dulanjaya Thathsara.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
