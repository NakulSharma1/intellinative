import { Twitter, Linkedin } from "lucide-react";
import logoWhite from "../../assets/logo/IntelliNative-White.png";

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        {/* Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#191970] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#191970] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Public Cloud */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Public Cloud</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">AWS Managed Services</li>
            </ul>
          </div>

          {/* Specialised Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Specialised Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Kubernetes as a Service (KaaS)</li>
              <li className="text-gray-400 text-sm">Redhat as a Service (RaaS)</li>
            </ul>
          </div>

          {/* Cyber Resilience */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Cyber Resilience</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Defence against cyber threats</li>
              <li className="text-gray-400 text-sm">Runtime protection (SYSDIG)</li>
              <li className="text-gray-400 text-sm">Managed security services</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#">
              <img src={logoWhite} alt="Intellinative" className="h-30 w-auto" />
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/intellinative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#191970] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#191970] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Reddit"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#191970] transition-colors duration-300"
              >
                <RedditIcon />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Intellinative. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

