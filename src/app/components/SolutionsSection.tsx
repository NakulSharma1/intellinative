import { GraduationCap, ClipboardCheck, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Cloud Consulting Services",
    description:
      "Weâ€™ll start with a thorough analysis to understand your needs and identify opportunities to help you excel. From assessment to ideation and true innovation, we work alongside your team, providing the guidelines, guardrails and expertise you need to be successful.",
  },
  {
    icon: ClipboardCheck,
    title: "Professional services for Cloud, security and applications",
    description:
      "Eliminate technical debt, fix flawed security and bring disparate data together with our IT security professional services. When your technology environment is working for you, your company can focus on getting ahead rather than on what holds you back.",
  },
  {
    icon: Lightbulb,
    title: "Operations to optimization with managed services",
    description:
      "Partner with a team of experts that will take you from just managing your cloud to innovating in it.",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="w-10 h-1 bg-[#191970] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2332] mb-5 leading-tight">
            3 Pillar Intelli-approach
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Discover a partnership that can help you achieve more for your people, your business and your customers, today and into the future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-10 py-12 bg-white hover:bg-gray-50 transition-colors duration-300 ${
                index < pillars.length - 1
                  ? "border-b md:border-b-0 md:border-r border-dashed border-gray-300"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#191970] rounded-2xl flex items-center justify-center mb-7 shadow-lg shadow-[#191970]/25">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a2332] mb-4" style={{ minHeight: "3.5rem" }}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


