import { motion } from 'framer-motion';
import { FacebookIcon, FanIcon, FileAxis3D, } from 'lucide-react';
import Check from '../assets/chess.jpg';

const services = [
   { title: 'Web Design',
     description: 'Proficient in Design', 
     image: Check , 
     icon: <FileAxis3D/> ,
    },
   { title: 'Development', 
     description: 'FullStack Developer', 
     image: 'https://source.unsplash.com/400x300/?code,developer', 
     icon: <FanIcon /> ,
    },
  { title: 'Branding', 
    description: 'ksjdnlsdnvnklsnvx', 
    image: 'https://source.unsplash.com/400x300/?branding,logo', 
    icon: <FacebookIcon /> }
];


const ServicesSection = () => (
  <motion.section
    className="py-20 px-4 md:px-16 dark:bg-black bg-white text-gray-900"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl  font-bold mb-12 text-center">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {services.map((service, idx) => (
        <div key={idx} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <div className='flex justify-between'><p>{service.description}</p>
            <p className='hover:text-orange-500'>{service.icon}</p></div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default ServicesSection;
