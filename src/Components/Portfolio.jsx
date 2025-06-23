import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Marketing Site',
    image: 'https://source.unsplash.com/600x400/?marketing,website'
  },
  {
    title: 'E-commerce Platform',
    image: 'https://source.unsplash.com/600x400/?ecommerce,store'
  },
  {
    title: 'Startup Landing Page',
    image: 'https://source.unsplash.com/600x400/?startup,landing'
  }
];

const PortfolioSection = () => (
  <motion.section
    className="py-20 px-4 md:px-16 bg-gray-100 text-gray-900"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold mb-12 text-center">Our Work</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {projects.map((project, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
          <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default PortfolioSection;
