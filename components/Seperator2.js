import React from "react";

export default function Separator() {
  return (
    <div className="relative z-[2] -mt-[5px]">
      <svg
        className="block w-full h-[200px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* White background shape */}
        <polygon points="0,0 0,120 1200,120 1200,0" fill="white" />

        {/* Slate-900 middle triangle */}
        <polygon points="0,0 600,80 1200,0" fill="#0f172a" />
      </svg>
    </div>
  );
}
