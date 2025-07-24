import Image from 'next/image';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <div className="bg-slate-900 text-white lg:pt-[10%] md:pt-[10%] pt-[15%]">
      {/* Hero Section */}
      <section className="w-full px-6 py-20 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Document Intelligence for the Future
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            At Anydox.ai, we’re reshaping how businesses manage, process, and secure their documents using cutting-edge AI technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full px-6 py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To enable seamless document automation that enhances productivity, reduces risk, and drives digital transformation across industries. We combine AI, automation, and secure cloud technologies to offer solutions that scale with your business.
            </p>
          </div>
          <div>
            <div className="w-full h-64 bg-gray-700 rounded-xl flex items-center justify-center">
             <Image src='/About.png' height={500} width={500} alt='no image found'/>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of the curve by integrating the latest in AI and automation into our document solutions.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-300">
                We believe in transparency, ethical standards, and delivering on our promises to clients.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-300">
                We put our customers at the center of everything we build and deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us CTA Section */}
      <section className="w-full px-6 py-20 bg-gradient-to-r from-slate-800 to-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Document Workflow?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Discover how Anydox.ai can help your organization streamline operations with intelligent automation.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
              Contact Us
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
