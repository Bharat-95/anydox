"use client";
import React, { useEffect, useState } from "react";

const words = ["Traceable ...", "Compliant ...", "Resilient Supply Chains ..."];

const Hero = () => {
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
    <div className="relative z-[1] lg:h-[90vh] h-[70vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/Bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-[1] w-full">
        <div className="h-[90vh] flex flex-col items-start pl-20 justify-center text-white text-center px-4">
          <h1 className="lg:text-6xl text-4xl font-bold mb-4 drop-shadow-lg">
            Real-time visibility for
          </h1>
          <h2 className="lg:text-4xl text-2xl font-semibold tracking-wide text-yellow-400 drop-shadow">
            <span className="border-r-2 border-white pr-1">{typedText}</span>
          </h2>

          <div className="mt-10 border px-6 py-3 rounded-3xl font-semibold text-lg hover:bg-yellow-600 transition-all">
            Talk To Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
