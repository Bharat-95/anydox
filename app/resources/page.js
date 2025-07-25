// pages/resources.js
import IntegrationsSection from '@/components/Integrate';
import Image from 'next/image';

export default function Resources() {
  return (
    <div className="bg-slate-900 text-white min-h-screen px-4 py-16 sm:px-8 lg:pt-[10%] md:pt-[10%] pt-[15%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resources to Empower Your Workflow</h1>
          <p className="text-lg sm:text-xl text-slate-300">
            Explore guides, integration tools, and documentation designed to help your team optimize document collaboration using Anydox.ai.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-[100%] h-72 relative">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                <p className="text-sm text-slate-600 flex-grow">{resource.description}</p>
                <a
                  href={resource.link}
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    title: 'Getting Started with Anydox.ai',
    description:
      'Learn the fundamentals of setting up your workspace and collaborating with your team on Anydox.ai.',
    image: '/Resources1.png', // Replace with actual image later
    link: '#',
  },
  {
    title: 'Integrating with Google Drive',
    description:
      'Connect your Anydox workspace with Google Drive to streamline document storage and syncing.',
    image: '/Resources2.png',
    link: '#',
  },
  {
    title: 'Advanced Workflow Automation',
    description:
      'Use Anydox.ai’s automation builder to minimize manual tasks and boost your document lifecycle efficiency.',
    image: '/Resources3.webp',
    link: '#',
  },
  {
    title: 'Security & Compliance Guide',
    description:
      'Explore how Anydox.ai protects your documents and helps you maintain compliance with industry standards.',
    image: '/Resources4.png',
    link: '#',
  },
  {
    title: 'API Reference & Developer Docs',
    description:
      'Access detailed API documentation to customize Anydox.ai or build your own document-based integrations.',
    image: '/Resources5.webp',
    link: '#',
  },
  {
    title: 'Use Case Library',
    description:
      'Discover how startups, enterprises, and legal teams are using Anydox.ai to streamline workflows.',
    image: '/Resources6.jpeg',
    link: '#',
  },
];
