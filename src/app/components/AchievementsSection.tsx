import { Users, Globe, CheckCircle, Activity } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "250+",
    label: "Enterprise Clients"
  },
  {
    icon: Globe,
    value: "14+",
    label: "Countries Served"
  },
  {
    icon: CheckCircle,
    value: "500+",
    label: "Projects Delivered"
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "Service Availability"
  }
];

const milestones = [
  {
    year: "2025",
    title: "Expanded global cloud operations",
    description: "Opened new data centers across Asia-Pacific region"
  },
  {
    year: "2024",
    title: "Achieved enterprise security excellence",
    description: "ISO 27001 and SOC 2 Type II certifications obtained"
  },
  {
    year: "2024",
    title: "Launched AI automation practice",
    description: "Deployed intelligent automation for 100+ enterprise clients"
  },
  {
    year: "2023",
    title: "Enabled multi-country digital rollouts",
    description: "Successfully delivered transformation programs across 14 countries"
  }
];

export function AchievementsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex p-4 bg-[#191970]/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-[#191970]" />
              </div>
              <div className="text-5xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">
              Recent Achievements & Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#191970]"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-24">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-[#191970] rounded-full flex items-center justify-center text-white border-4 border-gray-50">
                    <span className="text-sm">{milestone.year}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
