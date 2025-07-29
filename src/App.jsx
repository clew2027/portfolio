import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NokAI from "./sections/projects/nokai";
import PatP from "./sections/projects/patp";
import LetterBoxd from "./sections/projects/letterboxd";
import AboutMe from "./sections/AboutMe";
import Pennstagram from "./sections/projects/pennstagram";

// 👇 Wrapped Home to handle scroll on navigation
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay to allow DOM render
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/nokai" element={<NokAI />} />
      <Route path="/projects/patp" element={<PatP />} />
      <Route path="/projects/letterboxd" element={<LetterBoxd />} />
      <Route path="/projects/pennstagram" element={<Pennstagram />} />
    </Routes>
  </Router>
);

export default App;
