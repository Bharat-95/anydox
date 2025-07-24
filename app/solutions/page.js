export default function SolutionsPage() {
  const features = [
    {
      title: "Omni Process",
      description:
        "Unified Processing of All Unstructured & Structured Formats",
    },
    {
      title: "Agentic Workflows",
      description:
        "AI-based Rule Engine for Creating Intelligent Pipelining in a Human-in-the-Loop Approach",
    },
    {
      title: "GenAI Assistant",
      description:
        "Generate human-like responses, assist with tasks, and enhance decision-making through AI techniques",
    },
    {
      title: "Agentic Actions",
      description:
        "Tailored Autonomous agents taking proactive actions to complete tasks",
    },
    {
      title: "Analytical Dashboard",
      description: "Unified dashboard for real-time visualizations",
    },
    {
      title: "Reporting",
      description:
        "AI-based reporting tool for compliance and audit requirements",
    },
  ];

  const benefits = [
    {
      title: "Agentless Framework",
      description: "No desktop agents with advanced security measures",
    },
    {
      title: "Interoperable & Open",
      description: "Integrate with any AI or Agentry framework",
    },
    {
      title: "Scalable & Cost-effective",
      description: "Hyperscaler agnostic",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 lg:px-12 py-12 lg:pt-[10%] md:pt-[10%] pt-[15%]">
      <h1 className="text-4xl font-bold text-center mb-16">Solutions</h1>


      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {features.map((feature, idx) => (
          <article
            key={idx}
            className="bg-white text-slate-900 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm text-slate-700">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="bg-black p-8 sm:p-10 md:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <article
            key={idx}
            className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300"
          >
            <h3 className="text-green-400 text-lg font-semibold mb-1">
              {benefit.title}
            </h3>
            <p className="text-slate-300 text-sm">{benefit.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
