import React from "react";

const Explore = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col items-center py-10 space-y-4">
      <h1 className=" text-xl ">Simplify Unstructured Data Management</h1>
      <h2 className="text-4xl font-bold ">
        Powered by <span className="text-green-600">Classify360</span>
      </h2>
      <p className="mx-[20%] text-xl mt-4">
        Collecting unstructured data is easy—managing it efficiently is where
        the real challenge lies. With Classify360, we break down the complexity
        into six clear steps that turn your scattered files into Smart Data.
        Improve security, reduce risk, and cut storage costs with a smarter,
        streamlined approach to unstructured data governance.
      </p>

      <div className="flex justify-center mx-20 gap-4 mt-10"> 
        <div className="border w-[35%] mt-[80px] p-4 bg-white text-blue-900 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5">
          <h1 className="text-xl font-semibold">Enterprise Insights</h1>
          <p className="text-lg">
            Unlock a deeper understanding of your unstructured data environment.
            Identify high-risk, redundant, outdated, and trivial data to
            eliminate unnecessary storage expenses, streamline cloud migration
            strategies, and avoid overspending on additional security tools.
          </p>
        </div>
        <div className="border w-[35%] mt-[40px] p-4 bg-white text-blue-900 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5">
          <h1 className="text-xl font-semibold">Actions</h1>
          <p className="text-lg">
            Leverage intelligent data analysis to drive smarter
            decisions—eliminate excess storage costs, optimize cloud migration
            efforts, and minimize reliance on additional data security
            solutions.
          </p>
        </div>
        <div className="border w-[35%] p-4 rounded-xl shadow-xl bg-white text-blue-900 hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5">
          <h1 className="text-xl font-semibold">Comply 360</h1>
          <p className="text-lg">
           Automate and scale your unstructured data management for continuous compliance and control—without limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
