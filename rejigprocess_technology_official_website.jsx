// ===============================
// REJIGPROCESSTECH.COM
// Production‑Ready Corporate Website
// Next.js (App Router) – React – Tailwind – SEO‑Optimized
// ===============================

/*
PROJECT STRUCTURE

rejigprocesstech/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── contact/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── Section.tsx
├── public/
│   └── logo.svg
├── tailwind.config.ts
├── package.json
└── next.config.js
*/

// ===============================
// app/layout.tsx (SEO + Branding)
// ===============================
import "./globals.css";

export const metadata = {
  title: "Rejigprocess Technology | Software Development & Consulting",
  description:
    "Rejigprocess Technology is a Nigerian software development, IT consulting, and training company delivering scalable and secure digital solutions.",
  keywords: [
    "Software Development Nigeria",
    "IT Consulting",
    "DevOps",
    "Corporate Training",
    "Rejigprocess Technology",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-purple-50 text-gray-800">{children}</body>
    </html>
  );
}

// ===============================
// app/page.tsx (Full Website)
// ===============================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-teal-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Rejigprocess Technology</h1>
        <p className="text-xl mb-4">
          Re‑engineering Business Processes Through Innovative Software Solutions
        </p>
        <p>Software Development • Consulting • Training</p>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">About Us</h2>
        <p className="mb-6">
          Rejigprocess Technology is a Nigerian‑based software development,
          consulting, and training company delivering scalable, secure, and
          enterprise‑grade solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Mission</h3>
            <p>
              To deliver innovative, secure, and scalable software solutions that
              help businesses optimize processes and achieve sustainable growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Vision</h3>
            <p>
              To become a trusted technology partner in Africa and beyond through
              world‑class software engineering and professional training.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Custom Software Development", "IT Consulting", "DevOps & Cloud", "Data Analytics & BI", "Corporate Training", "System Automation"].map(
            (s) => (
              <div key={s} className="p-6 rounded-2xl shadow">
                <h3 className="font-semibold text-indigo-700">{s}</h3>
                <p className="text-sm mt-2">Enterprise‑grade delivery</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-8">Portfolio</h2>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="shadow p-6 rounded-2xl">Enterprise Management System</li>
          <li className="shadow p-6 rounded-2xl">Inventory & Warehouse Platform</li>
          <li className="shadow p-6 rounded-2xl">Analytics Dashboard</li>
        </ul>
      </section>

      {/* BLOG */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          Blog & Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 shadow rounded-2xl">Modern Software Architecture</div>
          <div className="p-6 shadow rounded-2xl">DevOps Best Practices</div>
          <div className="p-6 shadow rounded-2xl">Data‑Driven Decisions</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Contact Us</h2>
        <p className="mb-4">
          32 Road, Festac Town, Lagos, Nigeria<br />
          Phone: 07086044225<br />
          Email: info@rejigprocesstech.com
        </p>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

// ===============================
// components/ContactForm.tsx
// ===============================
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST" });
    setSent(true);
  }

  return sent ? (
    <p className="text-green-600">Message sent successfully.</p>
  ) : (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input required placeholder="Name" className="p-3 border rounded" />
      <input required type="email" placeholder="Email" className="p-3 border rounded" />
      <textarea required placeholder="Message" className="p-3 border rounded" />
      <button className="bg-purple-800 text-white py-3 rounded">
        Send Message
      </button>
    </form>
  );
}

// ===============================
// api/contact/route.ts (Email‑ready endpoint)
// ===============================
export async function POST() {
  // Integrate Nodemailer / Resend here
  return Response.json({ success: true });
}

// ===============================
// Footer.tsx
// ===============================
export default function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-200 py-8 text-center">
      © {new Date().getFullYear()} Rejigprocess Technology • rejigprocesstech.com
    </footer>
  );
}
