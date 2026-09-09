"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function QuickInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function reset() {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Dialog onOpenChange={(open) => { if (!open) reset(); }}>
      <DialogTrigger className="hover:opacity-70 transition">
        Contact
      </DialogTrigger>
      <DialogContent className="bg-cream border-tea text-coffee">
        <DialogHeader>
          <DialogTitle className="font-heading text-subtitle text-coffee">
            {submitted ? "Thanks!" : "Contact"}
          </DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <div className="flex flex-col gap-4 mt-2">
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-tea rounded-md px-4 py-3 bg-white/40" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-tea rounded-md px-4 py-3 bg-white/40" />
            <textarea placeholder="Your question" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="border border-tea rounded-md px-4 py-3 bg-white/40" />
            <button
              onClick={() => { if (name && email && message) setSubmitted(true); }}
              className="mt-2 px-8 py-3.5 border border-coffee text-coffee font-semibold rounded-full transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
            >
              Send
            </button>
          </div>
        ) : (
          <p className="text-coffee/80 mt-2">
            We've received your question and will get back to you soon.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
