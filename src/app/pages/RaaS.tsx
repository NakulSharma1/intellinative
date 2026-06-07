import { useState } from "react";
import { ArrowRight, CheckCircle2, Shield, Settings, RefreshCw, BarChart3, Cpu, Layers } from "lucide-react";
import awsLogo from "../../assets/raas/openshift-page-AWS.svg";
import azureLogo from "../../assets/raas/Logo-Microsoft-Azure-words.svg";
import gcpLogo from "../../assets/raas/Logo-Google-Cloud-words.svg";
import ibmLogo from "../../assets/raas/Logo-IBM-Cloud-words.svg";
import oracleLogo from "../../assets/raas/Oracle_Cloud Infrastructure_words.svg";
import redhatLogo from "../../assets/raas/Red_Hat_logo.svg.png";

const whyUs = [
  "Certified Red Hat engineers with OpenShift expertise",
  "CMMI Level 5 certified delivery processes",
  "End-to-end RHEL lifecycle management",
  "Multi-cloud deployment across AWS, Azure, GCP",
  "24/7 monitoring and rapid incident response",
  "Transparent SLA with 100% uptime since 2017",
];

const supportItems = [
  {
    Icon: Settings,
    title: "RHEL Lifecycle Management",
    desc: "End-to-end management of Red Hat Enterprise Linux deployments  provisioning, patching, hardening, and decommissioning handled by certified engineers.",
  },
  {
    Icon: Shield,
    title: "Security & Compliance",
    desc: "Continuous vulnerability scanning, SELinux policy management, and compliance enforcement across CIS, DISA STIG, and SOC 2 frameworks.",
  },
  {
    Icon: RefreshCw,
    title: "Patch & Update Management",
    desc: "Automated patch cycles using Red Hat Satellite, ensuring all RHEL systems stay current with zero-downtime rolling updates.",
  },
  {
    Icon: BarChart3,
    title: "Subscription Management",
    desc: "Optimised Red Hat subscription allocation, entitlement tracking, and renewal planning to eliminate waste and maximise ROI.",
  },
  {
    Icon: Cpu,
    title: "OpenShift Platform Services",
    desc: "Full management of Red Hat OpenShift clusters alongside RHEL  container platform operations unified under a single managed service.",
  },
  {
    Icon: Layers,
    title: "Ansible Automation",
    desc: "Infrastructure automation using Red Hat Ansible Automation Platform  configuration management, provisioning, and remediation at scale.",
  },
];

const useCaseTabs = [
  {
    id: "ai",
    label: "AI workloads",
    title: "Build and scale AI workloads on a trusted foundation",
    body: "By co-engineering with hardware leaders like NVIDIA and providing built-in tools for confidential computing, Red Hat Enterprise Linux helps you make the jump from AI experimentation to production. Whether you are deploying on premise or across the hybrid cloud, a consistent environment reduces drift and helps your models behave predictably at any scale.",
    link: "Learn more",
    visual: (
      <div className="relative rounded-xl overflow-hidden" style={{ background: "#1e1040", border: "1px solid #2d2060", aspectRatio: "16/9" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-1 opacity-80" style={{ transform: "perspective(600px) rotateX(15deg) rotateY(-20deg)" }}>
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-sm" style={{ background: i % 5 === 0 ? "#EE0000" : i % 3 === 0 ? "#7c3aed" : "#1a1a2e", border: "1px solid #333" }} />
            ))}
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16" style={{ borderBottom: "3px solid #EE0000", borderRight: "3px solid #EE0000", borderRadius: "0 0 12px 0" }} />
      </div>
    ),
  },
  {
    id: "hybrid",
    label: "Hybrid cloud",
    title: "Hybrid cloud starts with Linux",
    body: "Red Hat Enterprise Linux lets you deploy and run applications anywherefrom physical and virtual environments to private and public cloudsby delivering the consistent operating foundation needed for modern IT and enterprise hybrid cloud deployments.",
    link: "See how Red Hat Enterprise Linux simplifies hybrid cloud environments",
    visual: (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a3a", background: "#141428", aspectRatio: "16/9", display: "flex", flexDirection: "column" }}>
        <div className="flex-1" style={{ background: "#2dd4bf", padding: "20px" }}>
          <div className="text-gray-900 font-bold text-lg leading-tight mb-2">Managing<br />infrastructure</div>
          <div className="inline-block text-white font-bold px-2 py-0.5 text-sm" style={{ background: "#EE0000" }}>at cloud scale</div>
        </div>
        <div className="p-4" style={{ background: "#141428" }}>
          <p className="text-gray-300 text-xs mb-3">Tackle complexity with a consistent management approach across your organization's infrastructure.</p>
          <a href="/contact" className="text-blue-400 text-xs font-semibold hover:underline">Get the e-book â†’</a>
        </div>
      </div>
    ),
  },
  {
    id: "appdev",
    label: "App development",
    title: "Developing on Red Hat Enterprise Linux",
    body: "Join the Red Hat Developer program for access to Red Hat Enterprise Linux, how-to videos, demos, documentation, and a vast ecosystem to help you build and deploy apps in the cloud. We offer several no-cost subscriptions for developers including our newest offering.",
    link: "Learn more about the developer experience",
    visual: (
      <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a3a", background: "#141428", aspectRatio: "16/9" }}>
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700"
          alt="Developer"
          className="w-full h-full object-cover object-top opacity-80"
        />
        {/* Floating platform */}
        <div className="absolute bottom-4 right-4">
          <div className="w-16 h-3 rounded-sm" style={{ background: "#EE0000", boxShadow: "0 6px 0 #aa0000" }} />
        </div>
      </div>
    ),
  },
  {
    id: "edge",
    label: "Edge computing",
    title: "Expand to the edge",
    body: "Red Hat Enterprise Linux extends your hybrid cloud infrastructure to the edge, scaled across hundredsor even hundreds of thousandsof nodes all over the world. Create edge-optimized OS images, minimize workload interruptions caused by OS updates, transfer system updates more efficiently, and have confidence in automatic health checks and rollbacks.",
    link: "Why run our OS at the edge?",
    visual: (
      <div className="relative rounded-xl overflow-hidden flex items-center justify-center" style={{ border: "1px solid #2a2a3a", background: "#141428", aspectRatio: "16/9" }}>
        {/* Purple ellipse bg */}
        <div className="absolute" style={{ width: "280px", height: "140px", background: "#2d1a6e", borderRadius: "50%", filter: "blur(2px)" }} />
        {/* Server box */}
        <div className="relative z-10 flex flex-col gap-1">
          {[0,1,2].map(i => (
            <div key={i} className="flex items-center gap-1 px-3 py-1.5 rounded" style={{ background: "#1a1a2e", border: "1px solid #333", width: "100px" }}>
              <div className="w-2 h-2 rounded-sm" style={{ background: "#EE0000" }} />
              <div className="flex-1 h-1 rounded" style={{ background: "#333" }} />
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <div className="w-1 h-1 rounded-full bg-gray-600" />
            </div>
          ))}
        </div>
        {/* Node circles */}
        {[
          { top: "12%", left: "18%" },
          { top: "12%", right: "18%" },
          { bottom: "15%", left: "12%" },
          { bottom: "15%", right: "12%" },
        ].map((pos, i) => (
          <div key={i} className="absolute z-10 w-7 h-7 rounded-full flex items-center justify-center" style={{ ...pos, background: "transparent", border: "2px solid #EE0000" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#EE0000", opacity: 0.4 }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "hpc",
    label: "High performance computing",
    title: "Scale your HPC workloads with Red Hat Enterprise Linux",
    body: "Your OS plays a key role in how well your high performance computing (HPC) infrastructure performs, connecting your hardware, software, networking, and interfaces to form a unified environment. Red Hat Enterprise Linux provides a flexible, reliable platform for running HPC workloads at scale.",
    link: "Keep reading about HPC for Red Hat Enterprise Linux",
    visual: (
      <div className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ border: "2px solid #EE0000", borderRadius: "12px 12px 40px 12px", aspectRatio: "16/9" }}>
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700"
          alt="HPC server room"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.6)", backdropFilter: "blur(4px)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sql",
    label: "SQL Server",
    title: <span>Deliver SQL Server on <span style={{ color: "#EE0000" }}>Linux</span></span>,
    titlePlain: "Deliver SQL Server on Linux",
    body: "Searching for a performance-driven, cost-effective platform for Microsoft SQL Server? Red Hat Enterprise Linux provides a scalable foundation and a consistent application experience across bare-metal, virtual machine, container, and hybrid cloud environments.",
    link: "View SQL Server on Red Hat Enterprise Linux",
    visual: (
      <div className="relative rounded-xl overflow-hidden flex items-center justify-center" style={{ border: "1px solid #2a2a3a", background: "#141428", aspectRatio: "16/9" }}>
        {/* Server stack on red platform */}
        <div className="relative flex flex-col items-center gap-0.5">
          <div className="w-28 h-8 rounded-lg flex items-center px-3 gap-2" style={{ background: "#d0d0d0" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="flex-1 h-1 rounded" style={{ background: "#aaa" }} />
          </div>
          <div className="w-28 h-8 rounded-lg flex items-center px-3 gap-2" style={{ background: "#c8c8c8" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="flex-1 h-1 rounded" style={{ background: "#aaa" }} />
          </div>
          <div className="w-28 h-8 rounded-lg flex items-center px-3 gap-2" style={{ background: "#c0c0c0" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#EE0000" }} />
            <div className="flex-1 h-1 rounded" style={{ background: "#aaa" }} />
          </div>
          {/* Red platform base */}
          <div className="w-36 h-5 rounded-lg mt-1" style={{ background: "#EE0000" }} />
          <div className="w-32 h-3 rounded-lg" style={{ background: "#cc0000" }} />
        </div>
        {/* Teal cube */}
        <div className="absolute bottom-6 left-12 w-6 h-6 rounded-sm" style={{ background: "#14b8a6" }} />
      </div>
    ),
  },
];

function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const tab = useCaseTabs[active];

  return (
    <section className="bg-white border-b border-gray-100">
      {/* Section headline */}
      <div className="px-10 lg:px-16 xl:px-20 pt-14 pb-0">
        <h2 className="text-[#111827] font-extrabold leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)" }}>
          What can you do with Red Hat as a Service?
        </h2>
      </div>

      {/* Tab bar */}
      <div className="flex border-b overflow-x-auto mt-8 px-10 lg:px-16 xl:px-20" style={{ borderColor: "#e5e7eb" }}>
        {useCaseTabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className="flex-shrink-0 px-8 py-5 text-sm font-medium transition-colors whitespace-nowrap"
            style={{
              color: active === i ? "#111827" : "#6b7280",
              borderBottom: active === i ? "3px solid #EE0000" : "3px solid transparent",
              background: "transparent",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex items-center gap-16 px-10 lg:px-16 xl:px-20 py-14">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[#111827] font-bold leading-tight mb-5" style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}>
            {tab.title}
          </h3>
          <p className="text-gray-500 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: "520px" }}>
            {tab.body}
          </p>
        </div>

        {/* Right  visual */}
        <div className="hidden lg:block flex-shrink-0" style={{ width: "42%" }}>
          {tab.visual}
        </div>
      </div>
    </section>
  );
}

export default function RaaS() {
  return (
    <div className="bg-white">

      {/* â”€â”€ Hero  light theme, exact Red Hat layout â”€â”€ */}
      <section className="bg-white" style={{ paddingTop: "72px" }}>
        <div className="flex flex-col lg:flex-row items-center" style={{ minHeight: "calc(100vh - 72px)" }}>

          {/* Left  text (same proportions as reference) */}
          <div className="w-full lg:w-[48%] flex-shrink-0 flex flex-col justify-center px-6 lg:px-16 xl:px-20 py-12 lg:py-16">
            <h1 className="font-extrabold text-[#111827] leading-tight mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}>
              Red Hat as a Service (RaaS)
            </h1>
            <p className="text-gray-500 leading-relaxed mb-10" style={{ fontSize: "1.05rem", maxWidth: "520px" }}>
              Everywhere enterprise IT is headed, Red HatÂ® Enterprise LinuxÂ® is there.
              From the public cloud to the edge, it evolves to bring flexibility
              and reliability to new frontiers.
            </p>

            {/* CTA button */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/contact"
                className="text-white font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: "#191970", padding: "0.8rem 1.6rem", borderRadius: "4px" }}
              >
                Try it
              </a>
            </div>

            {/* Available on  real logo files */}
            <div>
              <p className="text-gray-500 text-sm mb-4">Available on</p>
              <div className="flex flex-wrap gap-3">

                {[
                  { src: awsLogo, alt: "AWS" },
                  { src: azureLogo, alt: "Microsoft Azure" },
                  { src: gcpLogo, alt: "Google Cloud" },
                  { src: ibmLogo, alt: "IBM Cloud" },
                  { src: oracleLogo, alt: "Oracle Cloud Infrastructure" },
                ].map(({ src, alt }) => (
                  <div
                    key={alt}
                    className="flex items-center justify-center px-3 py-2 rounded-xl"
                    style={{ background: "#848588", minHeight: "38px", minWidth: "64px" }}
                  >
                    <img src={src} alt={alt} className="h-3.5 w-auto object-contain" />
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Right  console mockup (light theme) */}
          <div className="hidden lg:flex flex-1 items-center justify-center pr-16 xl:pr-20 py-16">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 20px 50px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)", maxWidth: "580px" }}
            >
              {/* â”€â”€ Console top bar â”€â”€ */}
              <div className="flex items-center px-4 py-2.5 gap-2" style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                {/* Hamburger */}
                <div className="flex flex-col gap-[3px] mr-1 cursor-pointer flex-shrink-0">
                  <div className="w-[14px] h-[1.5px] bg-gray-500" />
                  <div className="w-[14px] h-[1.5px] bg-gray-500" />
                  <div className="w-[14px] h-[1.5px] bg-gray-500" />
                </div>

                {/* Red Hat logo + label */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="20" fill="#EE0000"/>
                    <path d="M20 9C15 9 11 13 11 18C11 21 13 23 16 24L14 30C13.5 31 14 32 15 32L25 32C26 32 26.5 31 26 30L24 24C27 23 29 21 29 18C29 13 25 9 20 9Z" fill="white"/>
                    <ellipse cx="20" cy="18" rx="5.5" ry="4.5" fill="#EE0000"/>
                  </svg>
                  <div className="leading-tight">
                    <div className="text-gray-900 font-semibold" style={{ fontSize: "10px" }}>Red Hat</div>
                    <div className="text-gray-400" style={{ fontSize: "9px" }}>Hybrid Cloud Console</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-4 bg-gray-300 mx-1 flex-shrink-0" />

                {/* Services + Favorites */}
                <div className="flex items-center gap-0.5">
                  <button className="flex items-center gap-1 px-2.5 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors" style={{ fontSize: "11px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                    </svg>
                    Services
                  </button>
                  <button className="flex items-center gap-1 px-2.5 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors" style={{ fontSize: "11px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Favorites
                  </button>
                </div>

                {/* Right icons */}
                <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                  <div className="w-7 h-3.5 rounded-full bg-gray-300 relative cursor-pointer flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-[2px] right-[2px] shadow-sm" />
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
              </div>

              {/* â”€â”€ Search + user info row â”€â”€ */}
              <div className="flex items-center" style={{ background: "#f3f4f6", borderBottom: "1px solid #e5e7eb" }}>
                <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ width: "220px", borderRight: "1px solid #e5e7eb" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span className="text-gray-400" style={{ fontSize: "11px" }}>Search</span>
                </div>
                <div className="flex-1 px-4 py-2.5">
                  <span className="text-gray-700 font-medium" style={{ fontSize: "11px" }}>user (user@intellinative.com)</span>
                </div>
                <div className="px-4 py-2.5 flex-shrink-0">
                  <span className="text-gray-400" style={{ fontSize: "11px" }}>running Red Hat Enterp...</span>
                </div>
              </div>

              {/* â”€â”€ Main body: sidebar + content â”€â”€ */}
              <div className="flex" style={{ minHeight: "300px" }}>
                {/* Sidebar */}
                <div className="flex-shrink-0 py-2" style={{ width: "160px", background: "#f9fafb", borderRight: "1px solid #e5e7eb" }}>
                  {[
                    { label: "Apps", extra: "Edit" },
                    { label: "Image Builder" },
                    { label: "System" },
                    { label: "Overview", active: true },
                    { label: "Logs" },
                    { label: "Networking" },
                    { label: "Accounts" },
                    { label: "Services" },
                  ].map(({ label, extra, active }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-4 py-2 cursor-pointer"
                      style={{
                        fontSize: "11px",
                        color: active ? "#111827" : "#6b7280",
                        background: active ? "#e5e7eb" : "transparent",
                        borderLeft: active ? "3px solid #EE0000" : "3px solid transparent",
                      }}
                    >
                      <span>{label}</span>
                      {extra && <span className="text-blue-500" style={{ fontSize: "10px" }}>{extra}</span>}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4" style={{ background: "#ffffff" }}>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {/* Health */}
                    <div className="rounded-lg p-4" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
                      <p className="text-gray-800 font-semibold mb-3" style={{ fontSize: "13px" }}>Health</p>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-gray-500" style={{ fontSize: "11px" }}>System is up to date</span>
                      </div>
                    </div>

                    {/* Usage */}
                    <div className="rounded-lg p-4" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
                      <p className="text-gray-800 font-semibold mb-3" style={{ fontSize: "13px" }}>Usage</p>
                      <div className="space-y-2.5">
                        <div>
                          <p className="text-gray-400 mb-1" style={{ fontSize: "10px" }}>CPU</p>
                          <div className="h-1.5 rounded-full bg-gray-200">
                            <div className="h-full rounded-full bg-blue-500" style={{ width: "42%" }} />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1" style={{ fontSize: "10px" }}>Memory</p>
                          <div className="h-1.5 rounded-full bg-gray-200">
                            <div className="h-full rounded-full bg-blue-400" style={{ width: "67%" }} />
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-500 mt-3 cursor-pointer hover:underline" style={{ fontSize: "10px" }}>View graphs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* â”€â”€ Announcement banner  light theme â”€â”€ */}
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex items-center px-10 lg:px-16 xl:px-20 py-14 gap-12">
          {/* Left text */}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold leading-tight mb-5 text-[#111827]" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
              Red Hat Enterprise Linux is here
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontSize: "1rem", maxWidth: "560px" }}>
              The newest major release of Red Hat Enterprise Linux introduces the next era of the operating
              system, with AI readiness and advanced capabilities to help you address the Linux skills gap,
              contain drift with container technologies, and get started with post-quantum security.
            </p>
            <a
              href="/contact"
              className="inline-block font-bold text-sm text-[#111827] transition-colors hover:bg-gray-50"
              style={{ border: "2px solid #111827", padding: "0.8rem 1.8rem", borderRadius: "4px" }}
            >
              Explore Red Hat Enterprise Linux
            </a>
          </div>

          {/* Right  Red Hat logo */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: "280px" }}>
            <img src={redhatLogo} alt="Red Hat" className="w-full h-auto object-contain" style={{ maxWidth: "220px" }} />
          </div>
        </div>
      </section>

      {/* â”€â”€ Use cases tab section â”€â”€ */}
      <UseCaseTabs />


      {/* â”€â”€ Contact Form â”€â”€ */}
      <section className="bg-white overflow-hidden flex" style={{ minHeight: "580px" }}>
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

