import { Shield, Cloud, Layers, Server } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    subtitle: "Intellinative Cyber Security",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Global security services with SOC operations 24/7/365. Comprehensive protection against cyberattacks with advanced threat detection and response.",
    bullets: ["500+ enterprise clients", "24/7 SOC operations", "ISO 27001 certified"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Cloud Infrastructure Services",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Integrated operations and management for cloud, network, and data centers. Supporting digital transformation with decades of expertise.",
    bullets: ["1,000+ cloud deployments", "99.99% uptime SLA", "Multi-cloud expertise"],
  },
  {
    icon: Layers,
    title: "Red Hat Solutions",
    subtitle: "OpenShift & Enterprise Linux",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Enterprise Linux, OpenShift container platform, and Ansible automation solutions. Enabling modernization with open-source technology and hybrid cloud architectures.",
    bullets: ["RHEL enterprise deployments", "OpenShift certified", "Ansible automation"],
  },
  {
    icon: Server,
    title: "Data Center Solutions",
    subtitle: "Enterprise Data Centers",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Modern data center design, optimization, and management for maximum efficiency, reliability, and scalability.",
    bullets: ["Tier III+ facilities", "Green data centers", "100+ DC migrations"],
  },
];

export function IndustriesSection() {
  return (
    <section className="py-14 bg-[#f5f7fa]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <div className="w-10 h-1 bg-[#191970] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2332] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end solutions across the entire technology stackfrom strategy and
            assessment to implementation and managed operations.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image block */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Icon badge + labels */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#191970] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{service.title}</p>
                    <p className="text-gray-300 text-xs leading-tight">{service.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content block */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#191970] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


