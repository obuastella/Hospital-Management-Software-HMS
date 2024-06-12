import Navbar from "./LandingPage/Navbar/navbar";
import HeroSection from "./LandingPage/Sections/heroSection";
import SecondSection from "./LandingPage/Sections/secondSection";
import CarexaSection from "./LandingPage/Sections/carexaSection";
import FourthSection from "./LandingPage/Sections/fourthSection";
import Footer from "./LandingPage/Sections/footer";

export default function page() {
  return (
    <main>
      < Navbar />
      < HeroSection />
      < SecondSection />
      < CarexaSection />
      < FourthSection />
      < Footer />
    </main>
  );
}