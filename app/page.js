"use client";

import React, { useEffect, useState } from "react";

const words = ["Traceable ...", "Compliant ...", "Resilient Supply Chains ..."];

const Page = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < fullText.length) {
        setTypedText(fullText.substring(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <div className="relative lg:h-[90vh] md:h-[60vh] h-[60vh] w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col lg:items-start  lg:justify-center md:justify-center justify-center md:items-center items-center h-full text-white text-center lg:pl-40 md:pl-10">
        <h1 className="lg:text-6xl md:text-5xl font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          Real-time visibility for
        </h1>
        <h2 className="lg:text-4xl md:text-4xl font-semibold tracking-wide drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          <span className="border-r-2 border-white text-yellow-500 pr-1">
            {typedText}
          </span>
        </h2>

        <div className="text-white border lg:text-2xl md:text-xl text-lg font-semibold mt-10 rounded-3xl p-3 hover:translate-x-1 hover:-translate-y-1 duration-500 hover:bg-yellow-600 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          Talk To Us
        </div>
      </div>
    </div>
  );
};

export default Page;
