import { Share2, Leaf } from "lucide-react";

const team = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    name: "Malik Tariq",
    role: "Chief Farm Master",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    name: "Dr. Usman Farooq",
    role: "Dairy Veterinarian",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    name: "Sara Paul",
    role: "Quality Agronomist",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    name: "Lina Watson",
    role: "Cold-Chain Lead",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative scroll-mt-20 bg-[#0c2415] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#81c784] backdrop-blur-sm">
            <Leaf className="size-3.5" />
            Expert Team
          </div>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-white">
            We Have A Lot Of Experience Team Members
          </h2>
        </div>

        {/* 4 Team Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0e3b1f] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Photo */}
              <div className="relative aspect-[3/3.6] overflow-hidden bg-[#0c2415]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Container */}
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#f5b61a]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#81c784]">
                    {member.role}
                  </p>
                </div>
                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#43a047]"
                  aria-label={`Share ${member.name}'s profile`}
                >
                  <Share2 className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}