"use client";

import { useState } from "react";
import { sendInquiryAction } from "@/app/actions";

function extractErrorMessage(result: {
  errors?: unknown;
  error?: string;
}): string {
  if (result.error) return result.error;

  const zodError = result.errors as
    | { issues?: { message: string }[]; message?: string }
    | undefined;

  if (zodError?.issues?.length) {
    return zodError.issues.map((issue) => issue.message).join(" ");
  }

  if (typeof zodError?.message === "string") {
    try {
      const parsed = JSON.parse(zodError.message);
      if (Array.isArray(parsed) && parsed.length) {
        return parsed
          .map((issue: { message?: string }) => issue.message)
          .filter(Boolean)
          .join(" ");
      }
    } catch {
      return zodError.message;
    }
  }

  return "Something went wrong. Please check your details and try again.";
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await sendInquiryAction({ name, email, message });

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(extractErrorMessage(result));
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-2xl mx-auto">
      <h1 className="font-heading text-title text-coffee mb-16 text-center">
        Location & Hours
      </h1>

      <div className="mb-16 text-center">
        <p className="font-heading text-label text-coffee mb-1">Location</p>
        <p className="text-coffee/70">123 Willow Lane, Riverside, CA 92501</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=123+Willow+Lane+Riverside+CA+92501"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-coffee/70 hover:text-coffee transition"
        >
          Get directions
        </a>

        <p className="font-heading text-label text-coffee mt-6 mb-1">Hours</p>
        <p className="text-coffee/70">Mon–Fri: 7:00 AM – 7:00 PM</p>
        <p className="text-coffee/70">Sat–Sun: 9:00 AM – 2:00 PM</p>

        <p className="font-heading text-label text-coffee mt-6 mb-1">Phone</p>
        <p className="text-coffee/70">(555) 013-9284</p>
      </div>

      <h2 className="font-heading text-subtitle text-coffee mb-8 text-center">
        Send Us a Message
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-tea rounded-md px-4 py-3 bg-white/40"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-tea rounded-md px-4 py-3 bg-white/40"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-tea rounded-md px-4 py-3 bg-white/40"
          />
          {errorMessage && (
            <p role="alert" className="text-sm text-red-700">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 px-8 py-3.5 border border-coffee text-coffee font-semibold rounded-full transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="text-center border border-tea rounded-md px-6 py-8 bg-white/40">
          <p className="font-heading text-xl text-coffee mb-2">
            Thanks, {name}!
          </p>
          <p className="text-coffee/80">
            We've received your message and will get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
}
