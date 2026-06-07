import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const checkpoints = [
  "Scalable architectures designed for business growth",
  "Industry-certified quality and security processes",
  "Rapid deployment minimizing business disruption",
  "Continuous optimization and proactive support",
];

export function WhoWeAre() {
  return (
    <section className="py-14 bg-[#f5f7fa]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left  image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Modern office technology"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Data center infrastructure"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-12">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cybersecurity monitoring"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cloud computing"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right  content */}
          <div className="space-y-7">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2332] leading-tight">
              Enterprise-Scale Transformation,{" "}
              <span className="block">Delivered with Precision</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
              Intellinative brings proven delivery excellence to complex technology
              initiatives. Our clients benefit from enterprise-grade solutions,
              operational rigor, and a partnership approach that prioritizes business
              outcomes.
            </p>

            <ul className="space-y-4">
              {checkpoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#191970] mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#191970] text-[#191970] font-bold rounded-md hover:bg-[#191970] hover:text-white transition-all duration-300 group"
              >
                Discover Our Approach
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

