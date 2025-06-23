import { motion } from 'framer-motion';

// 6. src/components/HeroSection.jsx
const HeroSection = () => (
     <motion.section 
       initial={{ y: 50, opacity: 0 }} 
       animate={{ y: 0, opacity: 1 }} 
       transition={{ duration: 1.5 }}>

  <section className="bg-white py-20 dark:bg-black dark:text-white text-center px-4">
    <h1 className="text-5xl font-bold mb-4">Modern design agency with a twist</h1>
    <p className="text-xl mb-6 max-w-2xl mx-auto">
      Design your products with world-class designers without breaking the bank. One subscription fee, unlimited design requests.
    </p>
    <button className="button-hover-effect shadow-md hover:drop-shadow-xl shadow-orange-400 bg-black hover:text-white px-6 py-3 rounded-full transition">Book a call</button>
  </section>
     </motion.section>
);

export default HeroSection;