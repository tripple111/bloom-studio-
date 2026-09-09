"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    quote:
      "Bloom Studio changed how I move through my day. The instructors actually pay attention to your form.",
    class: "Reformer Pilates",
  },
  {
    name: "Marcus Webb",
    quote:
      "I walked in stressed and walked out grounded. Every single time. This place is a sanctuary.",
    class: "Vinyasa Flow",
  },
  {
    name: "Priya Anand",
    quote:
      "The community here is what keeps me coming back. It never feels intimidating, even as a beginner.",
    class: "Restorative Yoga",
  },
  {
    name: "Jordan Lee",
    quote:
      "Best studio I've trained at. Small classes, real attention, and a space that actually feels calm.",
    class: "Mat Pilates",
  },
];

const faqs = [
  {
    question: "Do I need experience to join a class?",
    answer:
      "Not at all. Our classes welcome all levels, and instructors offer modifications so beginners and experienced practitioners can move at their own pace.",
  },
  {
    question: "What should I bring to my first class?",
    answer:
      "Just comfortable clothing and water. Mats and reformer equipment are provided, though you're welcome to bring your own mat if you prefer.",
  },
  {
    question: "How do I book a class?",
    answer:
      "Head to our Schedule page, pick a class time that works for you, and reserve your spot in a few taps.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel or reschedule up to 12 hours before class starts with no penalty. Late cancellations may forfeit the session.",
  },
  {
    question: "What's the difference between Reformer Pilates and Mat Pilates?",
    answer:
      "Reformer Pilates uses a spring-resistance machine for added support and resistance. Mat Pilates uses just your bodyweight on a mat, focusing on core stability without equipment.",
  },
  {
    question: "What's the difference between Vinyasa Flow and Restorative Yoga?",
    answer:
      "Vinyasa Flow is dynamic and breath-linked, moving continuously between poses. Restorative Yoga is slow and supported, using props to help you relax deeply — ideal for unwinding.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(faqIndex: number) {
    setOpenFaq((current) => (current === faqIndex ? null : faqIndex));
  }

  function showPrevious() {
    setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }

  function showNext() {
    setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }

  const testimonial = testimonials[index];

  return (
    <div>
      <section className="relative w-full h-screen -mt-[92px]">
        <img
          src="/yogastudio.jpg"
          alt="Yoga studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-16 pt-32">
          <h1
            className="font-heading text-subtitle sm:text-title md:text-hero mb-4 text-cream"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Reconnect in Community
          </h1>
          <p
            className="text-sm max-w-md opacity-90 mb-8 text-cream"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            A welcoming space for all levels of experience.
          </p>
          <a
            href="/schedule"
            className="font-body px-8 py-3.5 border border-cream text-cream font-semibold rounded-full transition-all duration-200 hover:bg-cream hover:text-coffee hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 inline-flex items-center gap-2"
          >
            View Classes ↗
          </a>
        </div>
      </section>
      <section className="py-12 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-coffee">
            At Bloom Studio, we created a mindful movement space shaped by
            community, rhythm, and presence—a place to pause, step away from the
            noise, and return to a grounded state. Through deliberate{" "}
            <span className="text-xl font-semibold">Pilates</span> flows and
            intentional <span className="text-xl font-semibold">Yoga</span>{" "}
            practice, our classes offer a steady return to your body and breath.
            A space to land, reset, and reconnect.
          </p>
        </div>
      </section>
      <section className="pb-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10">
          <div className="aspect-[3/4] rounded-md overflow-hidden">
            <img
              src="/rr.jpg"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] rounded-md overflow-hidden">
            <img
              src="/jj.jpg"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-8">
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="shrink-0 p-2 rounded-full border border-tea text-coffee hover:bg-tea/30 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="rounded-card border border-tea bg-tea/20 px-10 py-10 text-center flex-1">
            <p className="text-lg leading-relaxed text-coffee mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="font-heading text-label text-coffee">
              {testimonial.name}
            </p>
            <p className="text-sm text-coffee/70">{testimonial.class}</p>
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="shrink-0 p-2 rounded-full border border-tea text-coffee hover:bg-tea/30 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <section className="py-12 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-title text-coffee mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, faqIndex) => {
              const isOpen = openFaq === faqIndex;
              return (
                <div
                  key={faq.question}
                  className="rounded-card border border-tea bg-tea/20 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faqIndex)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-all duration-200 hover:bg-tea/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
                  >
                    <span className="font-heading text-label text-coffee">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-coffee transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-4 text-sm text-coffee/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
