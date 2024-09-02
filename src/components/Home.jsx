import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import HeroCarousel from "./HeroCarousel";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection.jsx";

function Home(){
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <FeaturesSection />
            <AboutSection />
            <Footer />
        </>
    )
}

export default Home;