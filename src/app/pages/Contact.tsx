import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: "72px" }}>
      <section className="bg-white overflow-hidden flex" style={{ minHeight: "calc(100vh - 72px)" }}>
        {/* Left  form */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16">
          <p className="text-[#191970] text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</p>
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
            <input
              type="text"
              placeholder="Company"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#191970] transition-colors duration-200"
            />
            <textarea
              placeholder="Your Message"
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

        {/* Right  image fills remaining space */}
        <div className="hidden lg:block flex-shrink-0 overflow-hidden" style={{ width: "48%" }}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Team ready to help"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}

