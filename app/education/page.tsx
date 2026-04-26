import type { Metadata } from "next";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "Education",
  description: "Educational background and training of Dulanjaya Thathsara.",
};

export default function EducationPage() {
  return <EducationClient />;
}
