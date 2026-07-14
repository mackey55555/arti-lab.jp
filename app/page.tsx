import About from "@/components/About";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
