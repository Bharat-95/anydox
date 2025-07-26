import React from "react";
import Separator from "@/components/Seperator";
import { FaGlobe } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TiCloudStorageOutline } from "react-icons/ti";
import Image from "next/image";
import Separator3 from '@/components/Seperator3'
import Separartor4 from '@/components/Seperator4'
import Separator1 from '@/components/Seperator1'

const page = () => {
  return (
    <div className=" bg-slate-900 pt-32">
      <div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="px-10 py-10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Centralized Data Management
            </h1>
            <h2 className="text-2xl font-semibold text-green-500 mb-6">
              From Discovery Through Automation
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Take control of your data by intelligently identifying,
              classifying, and automating workflows — across on-premise and
              cloud environments — ensuring security, compliance, and agility.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              BOOK AN INTRO CALL
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="Resources4.png" // Replace with your illustration
              alt="Centralized Data Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
        <Separator />
      </div>
      <div>
        <section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {/* Item 1 */}
              <div className="flex flex-col items-center space-y-10">
                <FaGlobe size={40} color="#0f172a" />
                <h3 className="text-lg font-semibold mb-2">
                  Gain Clear Insight into Your Data
                </h3>
                <p className="text-slate-600 text-sm">
                  Unlock enterprise-wide visibility by using Anydox.ai to map
                  structured and unstructured data across all environments —
                  cloud or on-prem — and build a solid data governance
                  foundation.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center space-y-10">
                <TiCloudStorageOutline size={40} color="#0f172a" />
                <h3 className="text-lg font-semibold mb-2">
                  Smarter Storage & Cost Efficiency
                </h3>
                <p className="text-slate-600 text-sm">
                  Leverage intelligent lifecycle management to eliminate
                  redundant data, reduce storage costs, and ensure that vital
                  business information stays organized and accessible.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center space-y-10">
                <FaLock size={40} color="#0f172a" />
                <h3 className="text-lg font-semibold mb-2">
                  Reinforce Information Security
                </h3>
                <p className="text-slate-600 text-sm">
                  Automatically detect and protect sensitive data across your
                  ecosystem. Maintain compliance with evolving standards like
                  GDPR, CCPA, and SOC 2 through smart automation.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center space-y-10">
                <FaClockRotateLeft size={40} color="#0f172a" />
                <h3 className="text-lg font-semibold mb-2">
                  Automate Governance & Compliance
                </h3>
                <p className="text-slate-600 text-sm">
                  Reduce manual oversight with policy-based workflows that
                  enforce consistent data standards across your organization —
                  driving compliance, accuracy, and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Separator3/>
      <div>
        <section className="bg-gray-100 py-20 px-6 md:px-24 text-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              End-to-End Data Intelligence through AI-Led Discovery
            </h2>
            <p className="text-lg text-gray-900 mb-12">
              Anydox.ai transforms how organizations handle unstructured and
              scattered data—making it instantly discoverable, securely managed,
              and operationally valuable from the start.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Smart Storage Optimization, Lower Costs
                </h3>
                <p className="text-slate-300">
                  Eliminate data sprawl by identifying redundant, outdated, or
                  unused files. Free up critical storage and cloud resources,
                  reducing infrastructure costs while improving performance.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Proactive Risk Reduction, Stronger Data Security
                </h3>
                <p className="text-slate-300">
                  Detect sensitive and high-risk data early using AI-powered
                  classification and tagging. Maintain compliance, strengthen
                  access controls, and reduce exposure to breaches or audit
                  failures.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Unified & Automated Data Lifecycle Control
                </h3>
                <p className="text-slate-300">
                  Centralize your data management operations across teams and
                  storage layers. Automate policies for retention, archiving,
                  and access to ensure continuous governance without manual
                  overhead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Separartor4 />
      <div>
        <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Case Study */}
            <div className="w-full flex justify-center">
              <div className="relative  w-96 h-96 lg:w-[500px] lg:h-[500px] bg-blue-50 rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative z-10 max-w-xs px-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                    Retail Data Transformation Case Study
                  </h3>
                  <p className="text-slate-700 mb-6 text-sm sm:text-base">
                    After facing inefficiencies in product data management, a
                    leading retail chain adopted Anydox.ai to automatically
                    categorize and streamline vast product catalogs. The result:
                    improved accuracy, faster billing, and real-time stock
                    visibility across locations.
                  </p>
                  <a
                    href="#"
                    className="text-green-600 font-medium inline-flex items-center"
                  >
                    Read Full Story <span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - More Resources */}
            <div className="w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 text-center lg:text-left">
                More AI & Data Insights
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Resource 1 */}
                <div className="text-center">
                  <Image
                    src="/Risk.jpeg"
                    alt="RMF Resource"
                    className="mb-4 mx-auto h-32 rounded-lg shadow-md object-cover"
                    width={500}
                    height={500}
                  />
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Implementing Risk Management with AI
                  </h4>
                  <p className="text-green-600 font-medium">
                    Read More <span className="ml-1">&rarr;</span>
                  </p>
                </div>

                {/* Resource 2 */}
                <div className="text-center">
                  <Image
                    src="/Agentic.jpeg"
                    alt="Agentic AI Resource"
                    className="mb-4 mx-auto h-32 rounded-lg shadow-md object-cover"
                    width={500}
                    height={500}
                  />
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Mastering Agentic AI in Enterprise Data
                  </h4>
                  <p className="text-green-600 font-medium">
                    Read More <span className="ml-1">&rarr;</span>
                  </p>
                </div>

                {/* Resource 3 */}
                <div className="text-center">
                  <Image
                    src="/Alerts.jpeg"
                    alt="Governance Alert"
                    className="mb-4 mx-auto h-32 rounded-lg shadow-md object-cover"
                    width={500}
                    height={500}
                  />
                  <h4 className="font-semibold text-slate-800 mb-2">
                    AI Alerts You Can’t Ignore in Data Governance
                  </h4>
                  <p className="text-green-600 font-medium">
                    Read More <span className="ml-1">&rarr;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Separator1 />
      <div>
        <section className="w-full py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Join Us on the Journey
          </h2>
          <p className="text-white text-lg mb-6">
            Whether you're a startup, enterprise, or public sector organization,
            Anydox.ai is ready to simplify your document challenges.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      </div>
    </div>
  );
};

export default page;
