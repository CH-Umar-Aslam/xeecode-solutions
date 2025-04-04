"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-secondary text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Head Office */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <p className="text-sm">21 New Street, Islamabad</p>
            <p className="text-sm">contact@openairinc.com</p>
            <p className="text-sm">Mon – Fri: 9:00am – 8:00pm</p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Partners</li>
              <li>FAQ</li>
              <li>Careers</li>
              <li>Company Overview</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Online Consultancy</li>
              <li>Investment</li>
              <li>Financial Analysis</li>
              <li>Consultancy</li>
            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Call for support</p>
            <a
              href="tel:+909008000444"
              className="block text-sm text-teal-200 hover:text-white transition"
            >
              +90 90 0800 0444
            </a>
            <p className="text-sm mt-4 mb-2">Have any Questions?</p>
            <a
              href="tel:+180045677823"
              className="block text-sm text-teal-200 hover:text-white transition"
            >
              +1-800-456-778-23
            </a>

            {/* Social Icons (Optional) */}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="#"
                className="text-teal-200 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-teal-200 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-teal-200 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-teal-200 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t bg-gray-100 first-line: border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Copyright */}
          <p className="text-sm text-black">
            &copy; 2024. All rights reserved.
          </p>

          {/* Center: Logo (Placeholder) */}
          <div className="text-sm font-semibold my-3 md:my-0">
          <img  className="bg-white w-28   md:w-44"  src="/assets/LOGO.svg" />
          </div>

          {/* Right: Policies */}
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-black hover:text-opacity-40 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black hover:text-opacity-40 transition"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
