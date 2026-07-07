import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Products from "./components/Products";
import Countries from "./components/Countries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Countries />
      <Contact />
      <Footer />
    </main>
  );
}