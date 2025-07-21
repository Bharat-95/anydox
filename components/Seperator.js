import React from "react";

export default function Separator() {
  return (
    <div className="relative z-[2] -mt-[5px]">
      <svg
        className="block w-full h-[100px] md:h-[150px] lg:h-[200px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 600,100 1200,0 1200,120 0,120" fill="white" />
      </svg>
    </div>
  );
}
