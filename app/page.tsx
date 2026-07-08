import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import ExportProcess from "./components/ExportProcess";
import Products from "./components/Products";
import Countries from "./components/Countries";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <ExportProcess />
      <Products />
      <Countries />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}