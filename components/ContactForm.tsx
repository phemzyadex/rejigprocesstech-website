"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST" });
    setSent(true);
  }

  return sent ? (
    <p className="text-green-600">Message sent successfully.</p>
  ) : (
    <form onSubmit={submit} className="grid gap-4">
      <input required placeholder="Name" className="border p-3" />
      <input required type="email" placeholder="Email" className="border p-3" />
      <textarea required placeholder="Message" className="border p-3" />
      <button className="bg-purple-800 text-white py-3">
        Send Message
      </button>
    </form>
  );
}
