import Image from "next/image";

const team = [
  {
    name: "Isabella Fiore",
    role: "Restorative Yoga & Mat Pilates Instructor",
    bio: "Yi Ming focuses on gentle, restorative practices that release tension and build long-term strength and flexibility.",
    instagram: "#",
    tiktok: "#",
    image: "/trainerf.jpg",
  },
  {
    name: "Damián Fernando",
    role: "Reformer Pilates Instructor",
    bio: "Damián brings precision and calm energy to every reformer class, helping clients build strength and control with mindful, low-impact movement.",
    instagram: "#",
    tiktok: "#",
    image: "/trainero.jpg",
  },
  {
    name: "Yi Ming Sun",
    role: "Vinyasa Flow Instructor",
    bio: "Isabella's classes blend breath and movement into a grounding, flowing practice suited to all experience levels.",
    instagram: "#",
    tiktok: "#",
    image: "/traintree.jpg",
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-heading text-title text-coffee mb-16 text-center">
        Meet the Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-stretch">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center h-full"
          >
            <div className="relative w-full aspect-square bg-tea rounded-card mb-4 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="font-heading text-label text-coffee">{member.name}</p>
            <p className="text-sm text-coffee/70 pb-3 mb-3 border-b border-coffee/20 w-full">
              {member.role}
            </p>
            <p className="text-sm text-coffee/60 mb-3">{member.bio}</p>
            <div className="flex gap-4 mt-auto pt-2">
              <a
                href={member.instagram}
                className="text-coffee hover:opacity-60 transition"
                aria-label={`${member.name} on Instagram`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={member.tiktok}
                className="text-coffee hover:opacity-60 transition"
                aria-label={`${member.name} on TikTok`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.5 2h-3v14.2a2.8 2.8 0 1 1-2.3-2.76v-3.05a5.85 5.85 0 1 0 5.3 5.82V8.7a7.3 7.3 0 0 0 4.5 1.55V7.2a4.3 4.3 0 0 1-4.5-3.7V2z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
