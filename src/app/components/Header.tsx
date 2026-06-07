import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import logoDark from "../../assets/logo/IntelliNative-Dark.png";
import logoWhite from "../../assets/logo/IntelliNative-White.png";

const servicesMega = [
  {
    heading: "Public Cloud",
    items: [{ label: "AWS Managed Services", href: "/services/aws-managed-services" }],
  },
  {
    heading: "Specialised Services",
    items: [
      { label: "Kubernetes as a Service (KaaS)", href: "/services/kaas" },
      { label: "Redhat as a Service (RaaS)", href: "/services/raas" },
    ],
  },
  {
    heading: "Cyber Resilience",
    items: [
      { label: "Defence against cyber threats", href: "#" },
      { label: "Runtime protection (SYSDIG)", href: "#" },
      { label: "Managed security services", href: "#" },
    ],
  },
];

interface HeaderProps {
  forceLight?: boolean;
}

export function Header({ forceLight = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const isLight = forceLight || scrolled;
  const textColor = isLight ? "text-gray-800" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent backdrop-blur-sm border-b border-white/10"
      }`}
      style={{ height: "72px" }}
    >
      {/* â”€â”€ Main bar â”€â”€ */}
      <div className="w-full h-full flex items-center justify-between px-10 lg:px-16 xl:px-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={isLight ? logoDark : logoWhite}
            alt="Intellinative"
            className="h-30 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            to="/about"
            className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 group ${textColor} hover:text-[#191970]`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#191970] transition-all duration-300 group-hover:w-full rounded-full" />
          </Link>

          {/* Services trigger */}
          <button
            className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${textColor} hover:text-[#191970]`}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            onClick={() => setServicesOpen((v) => !v)}
          >
            Services
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#191970] text-white text-sm font-semibold rounded-full hover:bg-[#191970] transition-all duration-300 shadow-lg hover:shadow-[#191970]/40 hover:shadow-xl hover:-translate-y-0.5"
          >
            Talk to Experts
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${textColor}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* â”€â”€ Full-width mega panel (direct child of header) â”€â”€ */}
      <div
        className={`absolute left-0 right-0 top-full transition-all duration-200 hidden md:block ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={openServices}
        onMouseLeave={closeServices}
      >
        <div className="ml-auto mr-10 lg:mr-16 xl:mr-20 mt-0 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden" style={{ width: "980px" }}>
          <div className="flex">
            {/* Three columns */}
            <div className="w-full grid grid-cols-3 divide-x divide-gray-100">
              {servicesMega.map((col) => (
                <div key={col.heading} className="px-10 py-7">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    {col.heading}
                  </p>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-gray-800 text-sm font-medium hover:text-[#191970] transition-colors duration-200 leading-relaxed block"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* â”€â”€ Mobile drawer â”€â”€ */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 shadow-lg ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-10 py-5 space-y-4">
          <Link
            to="/about"
            className="block text-gray-700 font-semibold hover:text-[#191970] transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <div>
            <button
              className="flex items-center justify-between w-full text-gray-700 font-semibold hover:text-[#191970] transition-colors duration-200"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              {servicesMega.map((col) => (
                <div key={col.heading} className="mb-4 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    {col.heading}
                  </p>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-gray-600 text-sm hover:text-[#191970] transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="block text-center px-6 py-3 bg-[#191970] text-white font-semibold rounded-full hover:bg-[#191970] transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Talk to Experts
          </Link>
        </div>
      </div>
    </header>
  );
}

