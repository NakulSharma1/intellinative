import { BadgeCheck, Users, TrendingUp, Star } from "lucide-react";

const achievements = [
  {
    date: "January 2026",
    category: "CERTIFICATION",
    categoryIcon: BadgeCheck,
    title: "Intellinative Achieves Great Place to Work Certification",
    description:
      "Recognized for employee satisfaction, workplace culture, and professional development excellence across all our offices.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    date: "December 2025",
    category: "PARTNERSHIP",
    categoryIcon: Users,
    title: "Strategic Partnership with AWS Advanced Tier Status",
    description:
      "Expanded cloud capabilities with AWS Advanced Consulting Partner designation.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    date: "November 2025",
    category: "CLIENT SUCCESS",
    categoryIcon: TrendingUp,
    title: "Major Banking Client Achieves 40% Cost Reduction",
    description:
      "Infrastructure modernization project delivers significant operational savings.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    date: "October 2025",
    category: "RECOGNITION",
    categoryIcon: Star,
    title: "Named Top Cybersecurity Services Provider",
    description:
      "Recognized for SOC operations excellence and threat response capabilities.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function CoreServices() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4">
            <div className="w-10 h-1 bg-[#191970] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2332] mb-3 leading-tight">
            Recent Achievements & Milestones
          </h2>
          <p className="text-gray-500 text-base max-w-lg leading-relaxed">
            Stay updated with our latest certifications, partnerships, and client
            success stories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image + date badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#191970] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category */}
                <div className="flex items-center gap-1.5 mb-3">
                  <item.categoryIcon className="w-3.5 h-3.5 text-[#191970]" />
                  <span className="text-[#191970] text-xs font-bold tracking-widest uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#1a2332] font-bold text-base leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


