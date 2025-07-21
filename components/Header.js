'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll background for medium and large screens
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 transition-colors duration-300 flex justify-between items-center ${
        isScrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div>
        <Image
          src="/Logo.png"
          alt="No Logo Found"
          width={80}
          height={80}
          className="w-24 md:w-32 lg:w-36"
        />
      </div>

      {/* Desktop Nav */}
      <ul
        className={`hidden md:flex lg:flex ${poppins.className} font-semibold text-base md:text-[17px] lg:text-[18px] text-white space-x-6 md:space-x-8 lg:space-x-10`}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Solutions</Link></li>
        <li><Link href="/">Resources</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact Us</Link></li>
      </ul>

      {/* CTA */}
      <div className="hidden md:block lg:block text-white border-[1px] px-3 md:px-4 py-1.5 md:py-2 rounded-xl font-medium text-sm md:text-base hover:bg-yellow-600 transition">
        <Link href="/">Let's talk</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-white text-2xl md:text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 md:top-20 left-0 w-full bg-black/90 text-white px-6 py-5 flex flex-col space-y-5 text-base font-medium shadow-md">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Resources</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="mt-4 border border-white rounded-xl px-3 py-1.5 text-center text-sm">Let's talk</Link>
        </div>
      )}
    </div>
  );
};

export default Header;