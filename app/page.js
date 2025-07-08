'use client';

import React, { useEffect, useState } from 'react';

const words = ['Traceable', 'Compliant', 'Resilient Supply Chains'];

const Page = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
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
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
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

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-yellow-500 text-center pl-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Real-time visibility for
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
          <span className="border-r-2 border-white pr-1">{typedText}</span>
        </h2>
      </div>
    </div>
  );
};

export default Page;
