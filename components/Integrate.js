import Image from 'next/image';

const integrations = [
  { name: 'Office 365', logo: '/Office365.png', className: 'top-0 left-0' },
  { name: 'Slack', logo: '/Slack.webp', className: 'top-0 right-0' },
  { name: 'G Suite', logo: '/Gsuite.png', className: 'top-24 left-18' },
  { name: 'Exchange', logo: '/Exchange.png', className: 'top-24 right-18' },
  { name: 'Dell EMC', logo: '/Dellemc.png', className: 'top-48 left-38' },
  { name: 'Microsoft Azure', logo: '/Azure.png', className: 'top-48 right-38' },
  { name: 'NetApp', logo: '/Net.webp', className: 'bottom-24 left-58' },
  { name: 'Box', logo: '/Box.png', className: 'bottom-24 right-58' },
  { name: 'OneDrive', logo: '/OneDrive.png', className: 'bottom-0 right-[40%]' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
        We Integrate With Your Favorite Apps
      </h2>
      <button className="relative z-10 border bg-white border-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-white hover:text-blue-900 transition">
        Contact Us for a List of Integrations
      </button>

      <div className="relative h-[500px] w-full max-w-6xl mx-auto mt-16">
        {integrations.map((app, index) => (
          <div
            key={index}
            className={`absolute ${app.className} bg-white rounded-xl shadow-md p-4 w-44 h-20 flex items-center justify-center`}
          >
            <Image
              src={app.logo}
              alt={app.name}
              width={100}
              height={40}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
