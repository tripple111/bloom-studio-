"use client";

import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const classes = [
  {
    name: "Reformer Pilates",
    description:
      "A low-impact, full-body workout using resistance springs to build long, lean muscle.",
    slots: [
      { day: "Monday", time: "9:00 AM", spots: 8, spotsLeft: 3 },
      { day: "Monday", time: "4:00 PM", spots: 8, spotsLeft: 8 },
    ],
  },
  {
    name: "Vinyasa Flow",
    description:
      "A dynamic, breath-led yoga practice that links movement in a flowing sequence.",
    slots: [
      { day: "Tuesday", time: "8:00 AM", spots: 15, spotsLeft: 6 },
      { day: "Tuesday", time: "6:00 PM", spots: 15, spotsLeft: 0 },
    ],
  },
  {
    name: "Restorative Yoga",
    description:
      "A gentle, meditative practice using support to release tension and calm the nervous system.",
    slots: [
      { day: "Wednesday", time: "7:00 PM", spots: 15, spotsLeft: 12 },
      { day: "Friday", time: "10:00 AM", spots: 15, spotsLeft: 9 },
    ],
  },
  {
    name: "Mat Pilates",
    description:
      "Classic bodyweight Pilates focused on core strength, posture, and control.",
    slots: [
      { day: "Thursday", time: "8:00 AM", spots: 10, spotsLeft: 5 },
      { day: "Friday", time: "3:00 PM", spots: 10, spotsLeft: 10 },
    ],
  },
];

const DAY_ORDER = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const days = Array.from(new Set(classes.flatMap((c) => c.slots.map((s) => s.day)))).sort(
  (a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b),
);

export default function Schedule() {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState<
    (typeof classes)[number] | null
  >(null);
  const [selectedSlot, setSelectedSlot] = useState<
    (typeof classes)[number]["slots"][number] | null
  >(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === 3 && bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  function chooseSlot(
    c: (typeof classes)[number],
    s: (typeof classes)[number]["slots"][number],
  ) {
    if (s.spotsLeft === 0) return;
    setSelectedClass(c);
    setSelectedSlot(s);
    setStep(3);
  }

  function resetBooking() {
    setStep(1);
    setSelectedClass(null);
    setSelectedSlot(null);
    setName("");
    setEmail("");
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-2xl mx-auto">
      <h1 className="font-heading text-title text-coffee mb-12 text-center">
        Class Schedule
      </h1>

      <Tabs defaultValue={days[0]} className="mb-20">
        <TabsList className="mb-8 h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {days.map((day) => (
            <TabsTrigger
              key={day}
              value={day}
              className="rounded-full border border-coffee px-5 py-2 text-sm text-coffee transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 data-active:bg-coffee data-active:text-cream"
            >
              {day}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map((day) => (
          <TabsContent key={day} value={day}>
            {classes
              .filter((c) => c.slots.some((s) => s.day === day))
              .map((c) => (
                <div key={c.name} className="py-5 border-b border-tea">
                  <p className="font-heading text-label text-coffee">{c.name}</p>
                  <p className="text-sm text-coffee/70 mb-3">{c.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {c.slots.map((s) => (
                      <button
                        key={s.day + s.time}
                        disabled={s.spotsLeft === 0}
                        onClick={() => chooseSlot(c, s)}
                        className="px-5 py-2 rounded-full border border-coffee text-sm text-coffee transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none"
                      >
                        {s.day} · {s.time}
                        {s.spotsLeft === 0 ? " (Full)" : ""}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>

      {step === 3 && selectedClass && selectedSlot && (
        <div ref={bookingRef}>
          <h2 className="font-heading text-subtitle text-coffee mb-6 text-center">
            Complete Your Booking
          </h2>
          <div className="border border-tea rounded-md px-5 py-4 bg-white/40 mb-6">
            <p className="text-sm text-coffee/70 mb-1">Booking Details</p>
            <p className="font-heading text-coffee">{selectedClass.name}</p>
            <p className="text-sm text-coffee/70">
              {selectedSlot.day} · {selectedSlot.time}
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
            <button
              onClick={() => {
                if (name && email) setStep(4);
              }}
              className="mt-2 px-8 py-3.5 border border-coffee text-coffee font-semibold rounded-full transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
            >
              Confirm Booking
            </button>
            <button
              onClick={resetBooking}
              className="text-sm text-coffee/60 underline self-start transition-all duration-200 hover:text-coffee active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {step === 4 && selectedClass && selectedSlot && (
        <div className="text-center border border-tea rounded-md px-6 py-8 bg-white/40">
          <p className="font-heading text-xl text-coffee mb-2">
            You're booked!
          </p>
          <p className="text-coffee/80">
            {selectedClass.name} — {selectedSlot.day} · {selectedSlot.time}
          </p>
          <p className="text-coffee/80 mt-1">Confirmation sent to {email}</p>
          <button
            onClick={resetBooking}
            className="mt-6 px-8 py-3.5 border border-coffee text-coffee font-semibold rounded-full transition-all duration-200 hover:bg-coffee hover:text-cream hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
          >
            Book Another Class
          </button>
        </div>
      )}
    </div>
  );
}
