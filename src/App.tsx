import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutTeaga from "./components/AboutTeaga";
import ClientJourney from "./components/ClientJourney";
import Personal from "./components/Personal";
import InteriorDesignPortfolio from "./components/InteriorDesignPortfolio";
import ArchitecturePortfolio from "./components/ArchitecturePortfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ProjectDetail from "./components/ProjectDetail";
import WhatsAppButton from "./components/WhatsAppButton";
import AllProjects from "./components/AllProjects";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Portfolio Section */}
        <div className="section-spacing">
          <InteriorDesignPortfolio />
        </div>

        {/* Architectural Portfolio Section */}
        <div className="section-spacing">
          <ArchitecturePortfolio />
        </div>

        <div className="section-spacing">
          <AboutTeaga />
        </div>
      </div>

      {/* Client Journey - Full width */}
      <ClientJourney />

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="section-spacing">
          <Personal />
        </div>
      </div>

      {/* Testimonials - Full width */}
      <Testimonials />

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Contact Form Section */}
        <div className="section-spacing">
          <ContactForm />
        </div>
      </div>

      {/* Footer - no snap */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<AllProjects />} />
        <Route path="/projeto/:projectId" element={<ProjectDetail />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
