import Image from "next/image";
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
            <div>
              xxxx<br />
              xxxxx<br />
              xxxxxx<br />
             xxxxxxx
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
            <li>Anydox.ai Platform</li>
            <li>Product Suite</li>
            <li>Instant Insights</li>
            <li>Enterprise Insights</li>
            <li>Actions</li>
            <li>Comply360</li>
            <li>Success Stories</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Awards</li>
            <li>Leadership</li>
            <li>News & Press</li>
            <li>Work With Us</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Contact & Support</li>
            <li>Book an Intro Call</li>
            <li>Get Free Data Insights</li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Subscribe to Newsletter</h4>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-green-600">
              Subscribe!
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm text-center">
        © Copyright 2025 – Anydox.ai. All Rights Reserved. Designed and Developed by <a href='https://www.nandak.co'  className="text-green-600 underline" target="_blank" >Nandak Innovations Private Limited</a>
    
      </div>
    </footer>
  );
}
