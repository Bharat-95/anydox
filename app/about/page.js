import React from "react";
import Seperator2 from "@/components/Seperator2";
import Separator3 from "@/components/Seperator3";
import Separator4 from "@/components/Seperator4";
import Separator5 from '@/components/Seperator5'
import Image from "next/image";
import { FaHandshake, FaTrophy, FaLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 lg:pt-[10%] md:pt-[10%] pt-[15%]  bg-slate-900">
      <div className="w-full max-w-6xl px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Anydox.ai
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          At Anydox.ai, we’re revolutionizing how organizations manage documents
          and workflows through the power of artificial intelligence.
        </p>
      </div>

      <Seperator2 />

      <section className="bg-white w-full py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              We aim to empower teams with intelligent, secure, and automated
              document processes that eliminate redundancy and enable rapid
              decision-making.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/About.png"
              alt="Our Mission"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-xl shadow-md h-72"
            />
          </div>
        </div>
      </section>
      <Separator3 />

      <section className="w-full py-16 bg-gray-100 ">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64 md:h-80 order-2 md:order-1">
            <Image
              src="/Resources4.png"
              alt="Our Vision"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4 ttext-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-900 text-lg">
              We envision a future where document handling is not a burden but a
              seamless part of everyday work—fueled by AI, accessible anywhere,
              and scalable to any need.
            </p>
          </div>
        </div>
      </section>

      <Separator4/>

      
      <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          
          {/* Customer Obsessed */}
          <div className="text-center">
            <FaHandshake className="text-cyan-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Customer Obsessed
            </h3>
            <p className="text-slate-600">
              We strive everyday to ensure our customers are successful and hold
              ourselves accountable to the value delivered.
            </p>
          </div>

          {/* Winning Spirit */}
          <div className="text-center">
            <FaTrophy className="text-cyan-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Winning Spirit
            </h3>
            <p className="text-slate-600">
              We embrace change with vigor and act with speed, adaptability, and accountability.
            </p>
          </div>

          {/* Meaningful Innovation */}
          <div className="text-center">
            <FaLightbulb className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Meaningful Innovation
            </h3>
            <p className="text-slate-600">
              We foster creativity to rapidly move new ideas to software services and solutions 
              that create value for customers, partners, and employees.
            </p>
          </div>



          {/* Team Collaboration */}
          <div className="text-center">
            <FaUsers className="text-cyan-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Team Collaboration
            </h3>
            <p className="text-slate-600">
              We work collaboratively to ensure the impact of our software and services are 
              extended through the entire enterprise.
            </p>
          </div>

        </div>
      </div>
    </section>
    <Separator3 />
    <section className="bg-gray-100 w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
            Why Choose Anydox.ai?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">AI-Driven Automation</h3>
              <p className="text-gray-600">
                Leverage intelligent document workflows to save time and boost
                efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600">
                Your data is protected with top-tier compliance and encryption
                standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Scalable Integration</h3>
              <p className="text-gray-600">
                Easily connect with your favorite tools and scale as your
                business grows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator5 />

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
  );
}
