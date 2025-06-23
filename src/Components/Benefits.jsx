// 9. src/components/BenefitsSection.jsx
const benefits = [
  { title: 'Unlimited Requests', description: 'Unlimited task requests.' },
  { title: 'Lightning Fast', description: '1-2 day average delivery.' },
  { title: 'No Contracts', description: 'Cancel anytime.' },
  { title: 'No Extra Charges', description: 'Flat monthly fee.' },
  { title: 'Top-Notch Quality', description: 'Designers you can trust.' },
  { title: 'Risk-Free Revisions', description: 'Until you’re satisfied.' },
];

const BenefitsSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;