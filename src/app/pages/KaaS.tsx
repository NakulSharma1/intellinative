import { ArrowRight, Settings, Globe, Database, Cloud, Server, Cpu, Layers, RefreshCw, Network, Zap } from "lucide-react";

export default function KaaS() {
  return (
    <div className="bg-white">
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative bg-white overflow-hidden border-gray-100" style={{ paddingTop: "72px" }}>
        <div className="flex items-stretch" style={{ height: "300px" }}>
          <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 xl:px-20 z-10">
            <p className="text-[#191970] text-xs font-bold uppercase tracking-widest mb-3">
              Specialised Services
            </p>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#1a2332] leading-tight mb-4 max-w-xl">
              Kubernetes as a Service (KaaS)
            </h1>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-lg">
              We have deployed and managed large, orchestrated container applications with
              OpenShift (Red Hat) and open-source, upstream Kubernetes. Our skill-based
              team delivers exceptional service in deploying and managing modern application
              architectures.
            </p>
          </div>
          <div className="hidden lg:block relative flex-shrink-0" style={{ width: "45%", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=left&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=600"
              alt="Kubernetes infrastructure"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats â”€â”€ */}
      <section className="bg-white border-gray-100 mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {[
            { label: "Sessions Handled", value: "1Bn+", sub: "Concurrently" },
            { label: "Trusted By", value: "900+", sub: "Customers" },
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
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scalability and Flexibility",
                desc: "The platform supports scalable infrastructure and operational efficiency, suitable for businesses of all sizes. We ensure full control over data with cost-effective alternatives to global providers.",
              },
              {
                title: "Containerized Workloads",
                desc: "Our Kubernetes PaaS allows businesses to run containerized workloads efficiently, supporting edge-based deployments and hybrid solutions between cloud and container instances.",
              },
              {
                title: "AI Integrations",
                desc: "We have incorporated multiple AI platforms, enabling enterprises to develop full-stack AI solutions with dedicated GPUs for large AI models and microservices.",
              },
              {
                title: "Enterprise Cloud Platform",
                desc: "Our cloud customers can leverage Red Hat OpenStack & OpenShift AI platform to build, deploy, and scale modern applications. These integrations deliver high performance and operational simplicity for enterprises transitioning to cloud-native architectures.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[#1a2332] font-bold text-xl mb-4 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Modern Application Platform â”€â”€ */}
      <section className="py-20 px-10 lg:px-16 xl:px-20 bg-white">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2332] mb-10">
          Modern Application Platform
        </h2>

        {/* Outer card */}
        <div className="rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm" style={{ background: "#f5f7fa" }}>

          {/* Two-panel row */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">

            {/* â”€â”€ LEFT: Physical / Virtual â”€â”€ */}
            <div className="lg:w-60 flex-shrink-0">
              <p className="text-[#1a2332] font-bold text-sm text-center mb-4 leading-snug">
                Physical or Virtual<br />Environment
              </p>
              {/* outer dashed */}
              <div
                className="rounded-2xl p-4 flex flex-col items-center bg-white"
                style={{ border: "2px dashed #d1d5db" }}
              >
                <p className="text-gray-400 text-xs text-center mb-4">Your N-Tier Web Application</p>
                {/* inner dashed */}
                <div
                  className="w-full rounded-xl p-5 space-y-8"
                  style={{ border: "1px dashed #d1d5db" }}
                >
                  {/* Application  3 gears */}
                  <div className="text-center">
                    <div className="flex justify-center items-end gap-0.5 mb-3">
                      <Settings className="w-9 h-9 text-[#191970]" />
                      <Settings className="w-6 h-6 text-[#191970] mb-0.5" />
                      <Settings className="w-7 h-7 text-[#191970]" />
                    </div>
                    <p className="text-[#1a2332] text-sm font-medium">Application</p>
                  </div>
                  {/* Application Middleware */}
                  <div className="text-center">
                    <Globe className="w-10 h-10 text-[#191970] mx-auto mb-3" />
                    <p className="text-[#1a2332] text-sm font-medium leading-tight">Application<br />Middleware</p>
                  </div>
                  {/* Database */}
                  <div className="text-center">
                    <Database className="w-10 h-10 text-[#191970] mx-auto mb-3" />
                    <p className="text-[#1a2332] text-sm font-medium">Database</p>
                  </div>
                </div>
              </div>
            </div>

            {/* â”€â”€ RIGHT: Cloud-Native â”€â”€ */}
            <div className="flex-1">
              <p className="text-[#1a2332] font-bold text-sm text-center mb-4">
                Cloud-Native Platform(s)
              </p>
              {/* outer dashed */}
              <div
                className="rounded-2xl p-5 bg-white"
                style={{ border: "2px dashed #d1d5db" }}
              >
                <p className="text-gray-400 text-xs text-center mb-5">Your Rearchitected Application</p>

                {/* â”€â”€ API Consumers + Gateway row â”€â”€ */}
                <div className="flex items-start justify-between mb-1 px-2">
                  <div className="text-center">
                    <div className="flex gap-2 justify-center mb-2">
                      <Server className="w-6 h-6 text-[#191970]" />
                      <RefreshCw className="w-6 h-6 text-[#191970]" />
                      <Cpu className="w-6 h-6 text-[#191970]" />
                    </div>
                    <p className="text-[#1a2332] text-xs font-medium">API Consumers</p>
                  </div>
                  <div className="text-center">
                    <Network className="w-6 h-6 text-[#191970] mx-auto mb-2" />
                    <p className="text-[#1a2332] text-xs font-medium">API Gateway</p>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-around text-gray-300 text-sm my-2">
                  <span>â†“</span><span>â†“</span><span>â†“</span><span>â†“</span>
                </div>

                {/* â”€â”€ Published APIs â”€â”€ */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {["Published\nAPI A", "Published\nAPI B", "Published API D"].map((api) => (
                    <div
                      key={api}
                      className="rounded-lg py-3 px-2 text-center bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    >
                      <p className="text-[#1a2332] text-xs font-medium leading-tight whitespace-pre-line">{api}</p>
                    </div>
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex justify-around text-gray-300 text-sm my-2">
                  <span>â†“</span><span>â†“</span><span>â†“</span><span>â†“</span>
                </div>

                {/* â”€â”€ Connectors / CaaS / Connectors / fPaaS row â”€â”€ */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {/* Connectors */}
                  <div
                    className="rounded-lg py-4 text-center bg-gray-50"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <RefreshCw className="w-5 h-5 text-[#191970] mx-auto mb-2" />
                    <p className="text-[#1a2332] text-xs font-medium">Connectors</p>
                  </div>
                  {/* CaaS  two stacked rows */}
                  <div
                    className="rounded-lg p-2 flex flex-col gap-1.5 bg-gray-50"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <div
                      className="rounded flex items-center justify-center gap-1 py-1 bg-white"
                      style={{ border: "1px solid #e5e7eb" }}
                    >
                      <Settings className="w-3 h-3 text-[#191970]" />
                      <span className="text-gray-400 text-xs">â†’</span>
                      <Settings className="w-3 h-3 text-[#191970]" />
                    </div>
                    <div
                      className="rounded flex items-center justify-center gap-1 py-1 bg-white"
                      style={{ border: "1px solid #e5e7eb" }}
                    >
                      <Settings className="w-3 h-3 text-[#191970]" />
                      <span className="text-gray-400 text-xs">â†’</span>
                      <Settings className="w-3 h-3 text-[#191970]" />
                    </div>
                    <p className="text-[#1a2332] text-xs text-center mt-1 font-medium">CaaS</p>
                  </div>
                  {/* Connectors */}
                  <div
                    className="rounded-lg py-4 text-center bg-gray-50"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <Layers className="w-5 h-5 text-[#191970] mx-auto mb-2" />
                    <p className="text-[#1a2332] text-xs font-medium">Connectors</p>
                  </div>
                  {/* fPaaS  two service boxes stacked */}
                  <div className="flex flex-col gap-1.5">
                    <div
                      className="rounded-lg py-2 text-center bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    >
                      <div className="flex justify-center gap-1 mb-1">
                        <Cpu className="w-3 h-3 text-[#191970]" />
                        <Cpu className="w-3 h-3 text-[#191970]" />
                        <Cpu className="w-3 h-3 text-[#191970]" />
                      </div>
                      <p className="text-[#1a2332] text-xs font-medium">Service</p>
                    </div>
                    <div
                      className="rounded-lg py-2 text-center bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    >
                      <div className="flex justify-center gap-1 mb-1">
                        <Cpu className="w-3 h-3 text-[#191970]" />
                        <Cpu className="w-3 h-3 text-[#191970]" />
                      </div>
                      <p className="text-[#1a2332] text-xs font-medium">Service</p>
                    </div>
                    <p className="text-[#1a2332] text-xs text-center font-medium">fPaaS</p>
                  </div>
                </div>

                {/* â”€â”€ Bottom icon row â”€â”€ */}
                <div className="grid grid-cols-6 gap-2 items-end">
                  <div className="text-center">
                    <Settings className="w-5 h-5 text-[#191970] mx-auto mb-1" />
                    <p className="text-[#1a2332] text-xs font-medium">COTS</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-0.5 mb-1">
                      <Settings className="w-4 h-4 text-[#191970]" />
                      <Settings className="w-4 h-4 text-[#191970]" />
                    </div>
                    <p className="text-[#1a2332] text-xs font-medium">Services</p>
                  </div>
                  <div className="text-center">
                    <Cloud className="w-7 h-7 text-[#191970] mx-auto mb-1" />
                    <p className="text-[#1a2332] text-xs font-medium">SaaS</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-5 h-5 text-[#191970] mx-auto mb-1" />
                    <p className="text-[#1a2332] text-xs font-medium">DB</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-5 h-5 text-[#191970] mx-auto mb-1" />
                    <p className="text-[#1a2332] text-xs font-medium">NoSQL</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-[#191970] mx-auto mb-1" />
                    <p className="text-[#1a2332] text-xs font-medium leading-tight">Event<br />Broker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* â”€â”€ Bottom application type labels  stacked centered â”€â”€ */}
          <div className="flex flex-col items-center gap-4">
            {[
              "AI/ML & HPC Applications",
              "Real-time Applications",
              "Compute & memory intensive Applications",
            ].map((label) => (
              <div
                key={label}
                className="w-full max-w-2xl text-center py-4 px-8 rounded-xl text-[#1a2332] font-semibold text-sm bg-white shadow-sm"
                style={{ border: "1px solid #e5e7eb" }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Contact Form â”€â”€ */}
      <section className="bg-white overflow-hidden flex" style={{ minHeight: "580px" }}>
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a2332] leading-tight mb-10">
            Start Your<br />Kubernetes Journey With Us
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
            alt="KaaS expert ready to help"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}

