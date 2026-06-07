import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    tag: "Enterprise Digital Transformation",
    heading: "Innovate With Agility On Cloud",
    subtext:
      "Optimize, secure, and manage their AWS environments with proactive operations, automation, and expert support that drive performance and business continuity.",
    cta1: "Explore Capabilities",    cta1Link: "/services/aws-managed-services",
    cta2: "View Success Stories",    cta2Link: "#",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    imgPosition: "right center",
  },
  {
    tag: "Certified Expert Teams",
    heading: "Technology Partners Who\nDeliver Excellence",
    subtext:
      "Certified professionals bringing specialized expertise across cloud, security, AI, and automation. We partner with you to achieve strategic business objectives and sustained growth.",
    cta1: "About Us",               cta1Link: "/about",
    cta2: "Our Capabilities",       cta2Link: "#",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    imgPosition: "center center",
  },
  {
    tag: "Mission-Critical Infrastructure",
    heading: "Discover the power of Red Hat",
    subtext:
      "Give your business the resources they need to help customers pursue solutions in AI, virtualization, and other key technology areas powered by RedHat.",
    cta1: "Cloud Solutions",        cta1Link: "/services/raas",
    cta2: "Infrastructure Services", cta2Link: "#",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    imgPosition: "center center",
  },
  {
    tag: "Application Modernization",
    heading: "Begin Your Application Modernization Journey with K8",
    subtext:
      "Tap into a unified multicloud service experience with management and support services that deliver a secure Kubernetes service across distributed clouds.",
    cta1: "K8 Solutions",           cta1Link: "/services/kaas",
    cta2: "Explore Services",       cta2Link: "#",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    imgPosition: "center center",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 350);
  }, []);

  const goNext = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  const goPrev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#071209]">
      {/* Background Images with cross-fade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: s.imgPosition ?? "center center" }}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Gradient overlay: dark on left for text, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071209]/95 via-[#071209]/65 to-[#071209]/10" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071209]/60 to-transparent" />
        </div>
      ))}

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#191970] z-10" />

      {/* Slide Content */}
      <div
        className="relative z-10 h-full flex items-center transition-all duration-300 ease-in-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
      >
        <div className="container mx-auto px-8 lg:px-12 pt-20">
          <div className="max-w-2xl xl:max-w-3xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 bg-white" />
              <span className="text-[#ffffff] text-xs font-bold tracking-[0.2em] uppercase">
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl xl:text-5xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ whiteSpace: "pre-line" }}
            >
              {slide.heading}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={slide.cta1Link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#191970] text-white font-semibold rounded-full hover:bg-[#191970]/80 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                {slide.cta1}
              </Link>
              <Link
                to={slide.cta2Link}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-[#191970] hover:bg-[#191970]/15 transition-all duration-300"
              >
                {slide.cta2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#191970] hover:border-[#191970] transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#191970] hover:border-[#191970] transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-9 h-3 bg-[#191970]"
                : "w-3 h-3 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-8 z-20 font-mono text-sm text-white/40 select-none">
        <span className="text-white/70">{String(current + 1).padStart(2, "0")}</span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}


