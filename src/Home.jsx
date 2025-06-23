import BenefitsSection from "./Components/Benefits";
import FAQSection from "./Components/Faqs";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PortfolioSection from "./Components/portfolio";
import PricingSection from "./Components/Pricing";
import ProcessSection from "./Components/Process";
import ServicesSection from "./Components/Services";
import { AnimatePresence, motion } from 'framer-motion';


    const Home = () => (
      
 <main className="font-sans dark:bg-gray-900 dark:text-white transition-colors duration-500">
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <BenefitsSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  </main>
);

export default Home;