// src/components/FAQSection.jsx
import { motion } from 'framer-motion';
import { FaQuestion } from 'react-icons/fa';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web design, development, and branding to help businesses grow online.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Most projects are completed within 4-6 weeks depending on scope and requirements.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we provide ongoing maintenance and support services to ensure your site runs smoothly.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in redesigns and UX/UI enhancements for existing websites.',
  },
];

const FAQSection = () => {
  return (
    <motion.section
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4 transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <summary className="cursor-pointer text-lg font-medium flex items-center gap-2">
                <FaQuestion className="text-primary shrink-0" />
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
