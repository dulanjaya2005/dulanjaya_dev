import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dulanjaya Thathsara.",
};

export default function ContactPage() {
  return <ContactClient />;
}
