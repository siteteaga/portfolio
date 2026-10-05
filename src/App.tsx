import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Header from "./components/Header";
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
import NotFound from "./components/NotFound";

function HomePage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />

        <div className="container-page">
          {/* Portfolio Section */}
          <div id="interiores" className="section-spacing">
            <InteriorDesignPortfolio />
          </div>

          {/* Architectural Portfolio Section */}
          <div id="arquitetura" className="section-spacing">
            <ArchitecturePortfolio />
          </div>

          <div id="escritorio" className="section-spacing">
            <AboutTeaga />
          </div>
        </div>

        {/* Client Journey - Full width */}
        <div id="jornada">
          <ClientJourney />
        </div>

        <div className="container-page">
          <div id="arquiteta" className="section-spacing">
            <Personal />
          </div>
        </div>

        {/* Testimonials - Full width */}
        <div id="depoimentos">
          <Testimonials />
        </div>

        <div className="container-page">
          {/* Contact Form Section */}
          <div id="contato" className="section-spacing">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Controla a rolagem nas trocas de rota: âncoras (#contato) e topo da página
function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    // Ao voltar/avançar, o navegador restaura a posição anterior
    if (navigationType !== "POP") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash, location.key, navigationType]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<AllProjects />} />
        <Route path="/projeto/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
