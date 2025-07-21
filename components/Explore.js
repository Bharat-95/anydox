import React from "react";

const Explore = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col items-center py-10 space-y-4">
      <h1 className="text-xl">Simplify Unstructured Data Management</h1>
      <h2 className="text-4xl font-bold">
        Powered by <span className="text-green-600">Anydox.ai</span>
      </h2>
      <p className="mx-[20%] text-xl mt-4 text-center">
        Collecting unstructured data is easy—managing it efficiently is where
        the real challenge lies. With Anydox.ai, we break down the complexity
        into six clear steps that turn your scattered files into Smart Data.
        Improve security, reduce risk, and cut storage costs with a smarter,
        streamlined approach to unstructured data governance.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        {/* Tile 1 */}
        <div className="w-full md:w-[30%] p-4 lg:mt-[80px] bg-green-200 text-blue-900 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5 h-[320px] lg:h-auto">
          <h1 className="text-xl font-semibold">Enterprise Insights</h1>
          <p className="text-lg">
            Unlock a deeper understanding of your unstructured data environment.
            Identify high-risk, redundant, outdated, and trivial data to
            eliminate unnecessary storage expenses, streamline cloud migration
            strategies, and avoid overspending on additional security tools.
          </p>
        </div>

        {/* Tile 2 */}
        <div className="w-full md:w-[30%] p-4 lg:mt-[40px] bg-yellow-100 text-blue-900 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5 h-[320px] lg:h-auto">
          <h1 className="text-xl font-semibold">Actions</h1>
          <p className="text-lg">
            Leverage intelligent data analysis to drive smarter
            decisions—eliminate excess storage costs, optimize cloud migration
            efforts, and minimize reliance on additional data security
            solutions.
          </p>
        </div>

        {/* Tile 3 */}
        <div className="w-full md:w-[30%] p-4 lg:mt-0 bg-purple-100 text-blue-900 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 hover:scale-105 duration-500 space-y-5 h-[320px] lg:h-auto">
          <h1 className="text-xl font-semibold">Comply 360</h1>
          <p className="text-lg">
            Automate and scale your unstructured data management for continuous
            compliance and control—without limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
