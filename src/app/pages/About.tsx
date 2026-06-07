export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(150deg, #eaf7f0 0%, #f5fbf7 30%, #ffffff 55%, #f0faf5 80%, #e6f6ee 100%)",
      }}
    >
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-12 lg:px-24 py-24">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 text-[#191970] text-sm font-semibold">
            About Us
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-stretch">
            {/* Left  content card */}
            <div>
              <h1
                className="font-extrabold text-[#1a2332] leading-tight mb-8"
                style={{ fontSize: "48px" }}
              >
                Overview
              </h1>

              <div className="w-16 h-1 bg-[#191970] rounded-full mb-10" />

              <p
                className="text-gray-600 leading-relaxed mb-7 text-justify"
                style={{ fontSize: "20px" }}
              >
                Intellinative empowers your digital transformation with secure, scalable,
                and intelligent IT solutions. Our comprehensive services span Cybersecurity,
                Digital Personal Data Protection Act compliance management, Cloud, Managed IT
                Services, Application Consultancy Services, and AI-driven innovationensuring
                every layer of your enterprise is safeguarded and optimized.
              </p>
              <p
                className="text-gray-600 leading-relaxed text-justify"
                style={{ fontSize: "20px" }}
              >
                Backed by a global legacy and a strong presence, we co-create future-ready
                ecosystems that drive agility, resilience, and tangible business outcomes.
                Empowering you to lead the nextwith confidence.
              </p>


            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

