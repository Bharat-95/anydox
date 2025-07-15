import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Data-Driven Governance",
      description:
        "Leverage actionable insights to align IT operations with business objectives, reduce organizational risk, and meet regulatory and industry compliance standards. Gain clear visibility into where sensitive or regulated data resides—so you can protect it with purpose and precision.",
    },
    {
      title: "Enterprise Storage Intelligence",
      description:
        "Leverage enterprise-wide data insights to cut costs, simplify migrations, modernize backups, optimize storage tiers, and enhance your security posture—all while saving time and resources.",
    },
    {
      title: "Data Security Posture",
      description:
        "In today’s threat-filled landscape, unstructured data is often the silent vulnerability. Security and compliance leaders constantly face the challenge of unknown sensitive data slipping through the cracks—posing risks that can weaken the entire security posture.",
    },
    {
      title: "Secure Cloud Migrations",
      description:
        "Break down compliance and data risk barriers to accelerate secure cloud adoption. Maximize the value of your migration with improved efficiency, reduced costs, and stronger regulatory alignment.",
    },
      {
      title: "Data-Driven AI Enablement",
      description:
        "Unlock the full potential of AI with deep insights into your data—its age, access patterns, risk level, and ROT (Redundant, Obsolete, Trivial). Improve accuracy, reduce risk, and cut AI processing costs with smarter data foundations.",
    },
  ];

  return (
    <div className="text-white flex flex-col items-center my-10 px-4">
      <div className="text-2xl text-center border w-full md:w-[70%] p-5 rounded-md shadow-xl leading-relaxed mb-10">
        Unlock the Full Potential of Your Organization with Unstructured Data
        <p className="text-xl mt-2">
          Efficiently Discover, Classify, and Remediate Hidden Information
        </p>
      </div>
      <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
        <div className="flex flex-nowrap gap-6 py-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex-none w-[30%] min-w-[250px] h-80 flex flex-col items-center space-y-4 border p-5 rounded-md shadow-xl snap-start hover:translate-x-1 hover:-translate-y-1 duration-500 hover:bg-slate-900"
            >
              <div className="text-xl font-semibold">{service.title}</div>
              <p className="leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;