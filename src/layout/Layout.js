import Navbar from "../components/Nav/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import FeaturedProject from "../components/FeaturedProject";
import ProjectSection from "../components/ProjectSection";

import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <FeaturedProject />
      <ProjectSection />
      
      <Footer />
    </>
  );
}
