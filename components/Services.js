"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const servicesData = [
  {
    title: "Data-Driven Governance",
    description:
      "Leverage actionable insights to align IT operations with business objectives, reduce organizational risk, and meet compliance standards.",
  },
  {
    title: "Enterprise Storage Intelligence",
    description:
      "Use enterprise-wide data insights to cut costs, modernize backups, optimize storage tiers, and save resources.",
  },
  {
    title: "Data Security Posture",
    description:
      "Unknown sensitive data poses risks that weaken your entire security posture. We help you find and fix it.",
  },
  {
    title: "Secure Cloud Migrations",
    description:
      "Break down compliance and data risk barriers to accelerate secure cloud adoption with improved efficiency.",
  },
  {
    title: "AI Data Enablement",
    description:
      "Improve AI accuracy, reduce risk, and cut processing costs with smarter data foundations and deep insights.",
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: {
      perView: 1,
      spacing: 12,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => slider.next(), 5000);
    },
  });

  return (
    <div className="bg-white text-blue-900 py-16 px-4 overflow-visible">
      <div className="text-2xl text-center font-semibold w-full md:w-[70%] mx-auto mb-10 leading-relaxed">
        Unlock the Full Potential of Your Organization with Unstructured Data
        <p className="text-xl mt-2 font-normal">
          Efficiently Discover, Classify, and Remediate Hidden Information
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider overflow-visible pt-20">
        {servicesData.map((service, idx) => {
          const isCenter =
            (idx + servicesData.length - currentSlide) % servicesData.length === 1;

          return (
            <div
              key={idx}
              className={`keen-slider__slide transition-all duration-500 rounded-xl px-4 py-6 flex flex-col gap-y-10 h-[360px] ${
                isCenter
                  ? "bg-slate-900 text-white h-[420px] mt-[-40px] z-10"
                  : "bg-gray-100 text-blue-900"
              }`}
            >
              <div className="text-xl font-bold">{service.title}</div>
              <p className="text-base leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
