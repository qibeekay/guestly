import { Navbar } from "../../shared/Navbar";
import { HeroSection } from "./HeroSection";
import { StatsTicker } from "./StatsTicker";

const Header = () => {
  return (
    <header className="min-h-screen text-white font-sans selection:bg-[#D4FF00] selection:text-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute bg-[url(..//src/assets/herobg.jpg)]  inset-0 bg-cover bg-bottom bg-no-repeat" />
        <div className="absolute inset-0 bg-[#001C24E5]" />
        <div className="absolute inset-0 bg-linear-to-b from-[#03141900] to-[#03151A]" />
      </div>
      <div className="">
        <HeroSection />
        <StatsTicker />
      </div>
    </header>
  );
};

export default Header;
