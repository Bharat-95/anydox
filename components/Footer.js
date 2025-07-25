import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiPhone, FiLinkedin, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 text-blue-900 px-6 py-12 z-50">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {/* Column 1: Logo & Address */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Image src="/Logo.png" alt="Anydox.ai" width={40} height={40} />
            <span className="text-xl font-semibold">Anydox.ai</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <FiMapPin className="mt-1 mr-2" />
              <div>
                xxxxxx<br />
                xxxxxx
              </div>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              xxxxxxxxx
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Our Platform & Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href='/'>Anydox.ai Platform</Link></li>
            <li><Link href='/resources'>Integrations</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href='/about'>About Us</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href='/contact'>Contact & Support</Link></li>
            <li> <Link href='/contact'>Book an Intro Call</Link></li>
            <li><Link href='/contact'>Get Free Data Insights</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm text-center">
        © Copyright 2025 – Anydox.ai. All Rights Reserved.
    
      </div>
    </footer>
  );
}
