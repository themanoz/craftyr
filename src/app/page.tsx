import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import CTA from "@/components/cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div> 
      <Hero />
      <Features />
      <FAQ/>
      <CTA />
      <Footer />
    </div>
  );
}
