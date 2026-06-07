import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AWSManagedServices from "./pages/AWSManagedServices";
import KaaS from "./pages/KaaS";
import Contact from "./pages/Contact";
import RaaS from "./pages/RaaS";

function Layout() {
  const { pathname } = useLocation();
  const lightPage = pathname === "/about" || pathname === "/services/aws-managed-services" || pathname === "/services/kaas" || pathname === "/services/raas" || pathname === "/contact";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header forceLight={lightPage} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/aws-managed-services" element={<AWSManagedServices />} />
          <Route path="/services/kaas" element={<KaaS />} />
          <Route path="/services/raas" element={<RaaS />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
