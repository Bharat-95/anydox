import Image from 'next/image';

const integrations = [
  { name: 'Office 365', logo: '/Office365.png' },
  { name: 'Slack', logo: '/Slack.webp' },
  { name: 'G Suite', logo: '/Gsuite.png' },
  { name: 'Exchange', logo: '/Exchange.png' },
  { name: 'Dell EMC', logo: '/Dellemc.png' },
  { name: 'Microsoft Azure', logo: '/Azure.png' },
  { name: 'NetApp', logo: '/Net.webp' },
  { name: 'Box', logo: '/Box.png' },
  { name: 'OneDrive', logo: '/OneDrive.png' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-slate-900 text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-6">
        We Integrate With Your Favorite Apps
      </h2>
      <button className="border bg-white border-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-white hover:text-blue-900 transition mb-10">
        Contact Us for a List of Integrations
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {integrations.map((app, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-24"
          >
            <Image
              src={app.logo}
              alt={app.name}
              width={100}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
