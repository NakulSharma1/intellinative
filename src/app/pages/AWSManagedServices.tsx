import { CheckCircle2, ArrowRight, Cloud, Shield, BarChart3, Clock, Settings, Headphones, Cpu, Monitor, Database, RefreshCw, HardDrive, Flame, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Management",
    description:
      "End-to-end provisioning, configuration, and management of your AWS infrastructure  EC2, VPC, S3, RDS, and beyond  optimized for performance and cost.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Continuous security monitoring, IAM governance, GuardDuty threat detection, and compliance management across CIS, SOC 2, and ISO 27001 frameworks.",
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description:
      "Right-sizing recommendations, Reserved Instance planning, Savings Plans, and ongoing spend analysis to eliminate waste and maximize ROI on your AWS investment.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring & Alerting",
    description:
      "Round-the-clock CloudWatch monitoring, proactive alerting, and incident response so your workloads stay healthy before issues impact business operations.",
  },
  {
    icon: Settings,
    title: "Automation & DevOps",
    description:
      "Infrastructure as Code with Terraform and CloudFormation, CI/CD pipeline management, and automated patching for consistent, repeatable deployments.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A named cloud engineer team with deep AWS expertise as your single point of contact  available through escalation tiers from standard to mission-critical.",
  },
];

const whyUs = [
  "AWS Advanced Tier Services Partner",
  "CMMI Level 5 certified delivery processes",
  "Average response time under 15 minutes for P1 incidents",
  "Proven migrations across enterprise-scale workloads",
  "Multi-region and hybrid cloud expertise",
  "Transparent monthly reporting and cost dashboards",
];

const process = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We audit your existing AWS environment, document workloads, identify gaps in security and cost posture, and define the managed service scope.",
  },
  {
    step: "02",
    title: "Onboarding & Baseline",
    description:
      "We deploy monitoring agents, establish guardrails, set up alerting thresholds, and baseline your environment  typically completed within two weeks.",
  },
  {
    step: "03",
    title: "Managed Operations",
    description:
      "Ongoing management, patching, optimization, and incident response handled by our certified AWS engineers  you focus on product, we handle the platform.",
  },
  {
    step: "04",
    title: "Continuous Improvement",
    description:
      "Monthly business reviews, architecture recommendations, and roadmap planning to evolve your cloud posture in line with your business objectives.",
  },
];

export default function AWSManagedServices() {
  return (
    <div className="bg-white">
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative bg-white overflow-hidden border-gray-100" style={{ paddingTop: "72px" }}>
        <div className="flex items-stretch" style={{ height: "300px" }}>
          {/* Left  text */}
          <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 xl:px-20 z-10">
            <p className="text-[#191970] text-xs font-bold uppercase tracking-widest mb-3">Public Cloud</p>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#1a2332] leading-tight mb-4 max-w-xl">
              AWS Managed Services
            </h1>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-lg">
              Many of our large customers hand over their applications to us to deploy,
              manage, secure, and scale them  allowing them to focus on their core
              business, eradicating the need to invest time and money in IT operations.
            </p>
          </div>

          {/* Right  image with diagonal left edge */}
          <div className="hidden lg:block relative flex-shrink-0" style={{ width: "45%", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=left&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=600"
              alt="Cloud managed services professional"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats â”€â”€ */}
      <section className="bg-white  mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {[
            { label: "Trusted By", value: "1000+", sub: "Customers" },
            { label: "Monitoring", value: "24/7", sub: "By skilled professionals" },
            { label: "Incident Response Time", value: "<20", sub: "Minutes" },
            { label: "SLA Adherence", value: "100%", sub: "Uptime since 2017" },
          ].map((stat) => (
            <div key={stat.label} className="px-10 lg:px-14 py-10 lg:py-12">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                {stat.label}
              </p>
              <p className="text-[#191970] font-extrabold mb-2" style={{ fontSize: "3rem", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="text-[#1a2332] font-semibold text-base">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ Why Best Choice â”€â”€ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-10 lg:px-16 xl:px-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a2332] mb-12">
            Why We Are Your Best Choice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-[#191970]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
                title: "Dedicated CLM",
                desc: "Our dedicated Customer Lifecycle Managers act as a single point of contact for any issue you may have, resulting in prompt and bespoke customer service.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#191970]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Your data, always secure",
                desc: "State-of-the-art encryption, threat monitoring, and compliance with global standards like ISO and GDPR ensure your business remains protected.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#191970]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
                title: "Stay operational, always",
                desc: "Built-in disaster recovery ensures minimal downtime and zero data loss, keeping your business resilient in any situation.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-[#1a2332] font-bold text-xl mb-4 leading-snug">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Dedicated Support â”€â”€ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-10 lg:px-16 xl:px-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a2332] mb-14">
            Dedicated Support at Every Step
          </h2>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
            {[
              {
                Icon: Cpu,
                title: "VM Management",
                desc: "Our VM management service provides management of virtual machines, ensuring high availability, performance, and security. Intellinative handles the deployment, monitoring, patching, and maintenance of VMs to keep your virtual environments always up-to-date and running smoothly.",
              },
              {
                Icon: ShieldCheck,
                title: "Threat and Exposure Management",
                desc: "Our continuous threat and exposure management service provides proactive security monitoring and threat detection. This service includes real-time monitoring and automated threat response to protect your infrastructure from cyber threats.",
              },
              {
                Icon: Monitor,
                title: "OS Management",
                desc: "Our OS management service ensures that your operating systems are always up-to-date and secure. This service includes patch management and configuration management.",
              },
              {
                Icon: Cloud,
                title: "Managed Disaster Recovery",
                desc: "Our service includes the design and deployment of a resilient disaster recovery framework, ensuring minimal service disruption and data loss during unforeseen events. Our DRaaS guarantees high availability and swift recovery.",
              },
              {
                Icon: Flame,
                title: "Firewall Management",
                desc: "Our managed firewall service includes support for creation, modification, and deletion of firewall policies, along with the configuration of IP subnets, VLANs, VPNs, and tunnel sites.",
              },
              {
                Icon: HardDrive,
                title: "Backup to Archival Storage",
                desc: "We offer backup to archival storage solutions, providing long-term data retention and compliance. This service ensures that your data is securely stored and easily accessible when needed.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title}>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#191970]/10 mb-5">
                  <Icon className="w-6 h-6 text-[#191970]" />
                </div>
                <h3 className="text-[#1a2332] font-bold text-xl mb-3 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Contact Form â”€â”€ */}
      <section className="bg-white overflow-hidden flex" style={{ minHeight: "580px" }}>
        {/* Left  form */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a2332] leading-tight mb-10">
            Start Your<br />Cloud Journey With Us
          </h2>
          <form className="space-y-4 max-w-xl">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#191970] transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#191970] transition-colors duration-200"
            />
            <textarea
              placeholder="Your Comment"
              rows={6}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#191970] transition-colors duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#191970] text-white font-semibold rounded-full hover:bg-[#191970] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Submit
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right  image fills remaining space, no rounding */}
        <div className="hidden lg:block flex-shrink-0 overflow-hidden" style={{ width: "48%" }}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Cloud expert ready to help"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}

