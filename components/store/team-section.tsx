import { Share2, Leaf, Sparkles, Phone } from "lucide-react";

const team = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    badge: "20+ Yrs Exp",
    name: "Malik Tariq",
    role: "Chief Farm Master",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    badge: "Senior Vet",
    name: "Dr. Usman Farooq",
    role: "Dairy Veterinarian",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    badge: "Quality Head",
    name: "Sara Paul",
    role: "Quality Agronomist",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=700&q=80",
    badge: "Cold-Chain",
    name: "Lina Watson",
    role: "Logistics Lead",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative scroll-mt-20 overflow-hidden bg-[#071c0f] py-24 text-white sm:py-32">
      {/* Background Lighting Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[-10%] size-[600px] rounded-full bg-[#43a047]/10 blur-[140px]" />
        <div className="absolute right-[15%] bottom-[-10%] size-[500px] rounded-full bg-[#f5b61a]/10 blur-[130px]" />
        <div className="pattern-grid absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#86efac] backdrop-blur-md shadow-sm">
            <Leaf className="size-3.5 text-[#43a047]" />
            Expert Team
          </div>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-white">
            We Have A Lot Of Experience Team Members
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-white/75">
            Dedicated agronomists, certified veterinarians, and traditional ghee masters overseeing daily farm health and hygiene in Gujranwala.
          </p>
        </div>

        {/* 4 Team Cards */}
        <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="group overflow-hidden rounded-[1.6rem] sm:rounded-[2.4rem] border border-white/12 bg-[#0c2415] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#43a047]/60 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/3.6] overflow-hidden bg-[#071c0f]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415] via-transparent to-transparent opacity-50" />

                {/* Floating Top Badge */}
                <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#071c0f]/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold text-[#86efac] backdrop-blur-md shadow-sm">
                    <Sparkles className="size-2.5 sm:size-3 text-[#f5b61a]" />
                    {member.badge}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="flex items-center justify-between bg-gradient-to-b from-[#0c2415] to-[#071a0e] p-3 sm:p-6">
                <div className="min-w-0">
                  <h3 className="font-display text-[13.5px] sm:text-[1.15rem] font-bold text-white transition-colors duration-300 group-hover:text-[#f5b61a] truncate">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[10.5px] sm:text-xs font-semibold text-[#86efac] truncate">
                    {member.role}
                  </p>
                </div>
                <button
                  type="button"
                  className="grid size-8 sm:size-11 shrink-0 place-items-center rounded-full bg-white/10 text-white shadow-sm transition-all duration-500 hover:bg-[#43a047] hover:scale-110 hover:rotate-[360deg] active:scale-95 cursor-pointer ml-1.5"
                  aria-label={`Share ${member.name}'s profile`}
                >
                  <Share2 className="size-3.5 sm:size-4.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}