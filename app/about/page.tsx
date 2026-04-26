import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dulanjaya Thathsara's professional experience and background.",
};

export default function AboutPage() {
  return <AboutClient />;
}
