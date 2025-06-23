// 7. src/components/ProcessSection.jsx
const steps = [
  {
    title: 'Subscribe',
    description: 'Hop on a free consultation call and subscribe to a plan that meets your business goals.',
  },
  {
    title: 'Request',
    description: 'Submit your design request in our private Slack channel.',
  },
  {
    title: 'Revise',
    description: 'Get the results within 1-3 days. We revise until you’re happy.',
  },
  {
    title: 'Prosper',
    description: 'Grow your business with high-quality, on-demand design.',
  },
];

const ProcessSection = () => (
  <section className="bg-gray-100 dark:bg-black py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;