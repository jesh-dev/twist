// 11. src/components/PricingSection.jsx
const plans = [
  {
    title: 'Solopreneurs',
    price: '$5k /month',
    features: [
      'One request at a time',
      '72-hour revisions',
      'Weekly sync calls',
      'Private Slack channel',
      'Unlimited brands',
      'Production ready designs',
    ],
  },
  {
    title: 'Startup',
    price: '$7k /month',
    features: [
      'Two requests at a time',
      '48-hour revisions',
      'Framer development',
    ],
  },
  {
    title: 'Growth',
    price: '$9k /month',
    features: [
      'Three requests at a time',
      '24-hour revisions',
      'All features included',
    ],
  },
];

const PricingSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-700 list-disc list-inside">
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;