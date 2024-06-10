import Navbar from "./LandingPage/Navbar/navbar";
import HeroSection from "./LandingPage/Sections/heroSection";
import SecondSection from "./LandingPage/Sections/secondSection";
import CarexaSection from "./LandingPage/Sections/carexaSection"

export default function page() {
  return (
    <main>
      < Navbar />
      < HeroSection />
      < SecondSection />
      < CarexaSection />
    </main>
  );
}