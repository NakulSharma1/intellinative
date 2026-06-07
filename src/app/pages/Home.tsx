import { HeroSection } from "../components/HeroSection";
import { WhoWeAre } from "../components/WhoWeAre";
import { SolutionsSection } from "../components/SolutionsSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { CoreServices } from "../components/CoreServices";
import awsLogo from "../../assets/homepage/APN-Logo_Color_678x186.8ed843d613d4e41b85021a213a05e25933b00ea6.png";
import redhatLogo from "../../assets/raas/Red_Hat_logo.svg.png";
import sysdigLogo from "../../assets/homepage/137162.png";
import netscopeLogo from "../../assets/homepage/Netskope, Inc. - Partner Logo.png";
import trendMicroLogo from "../../assets/homepage/Trend-Micro-Logo.jpg";
import gitlabLogo from "../../assets/homepage/GitLab_logo.svg.png";

function PartnerBanner() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 px-10 lg:px-16 xl:px-20">
      <p className="text-center font-bold uppercase tracking-widest text-gray-400 mb-12" style={{ fontSize: "0.9rem" }}>
        Our Partner Network
      </p>
      <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">

        {[
          { src: awsLogo,        alt: "AWS",                label: "Amazon Web Services", h: 48 },
          { src: redhatLogo,     alt: "Red Hat",            label: "Red Hat",             h: 48 },
          { src: sysdigLogo,     alt: "Sysdig",             label: "Sysdig",              h: 48 },
          { src: netscopeLogo,   alt: "Netskope",           label: "Netskope",            h: 72 },
          { src: trendMicroLogo, alt: "Trend Micro",        label: "Trend Micro",         h: 72, w: 150 },
          { src: gitlabLogo,     alt: "GitLab",             label: "GitLab",              h: 48 },
        ].map(({ src, alt, label, h, w }: { src: string; alt: string; label: string; h: number; w?: number }) => (
          <div key={alt} className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center" style={{ height: "72px" }}>
              <img src={src} alt={alt} style={{ height: `${h}px`, width: w ? `${w}px` : "auto" }} className="object-contain" />
            </div>
            <span className="text-gray-400 text-xs font-medium tracking-wide uppercase whitespace-nowrap">{label}</span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerBanner />
      <IndustriesSection />
      <SolutionsSection />
      <WhoWeAre />
      <CoreServices />
    </>
  );
}


