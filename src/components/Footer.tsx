import logo from '../assets/logo.png';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 mb-4">
  <img
    src={logo}
    alt="Club BTP EHTP Logo"
    className="h-10 w-auto object-contain"
  />
  <span className="font-semibold text-white">BTP-EHTP</span>
</div>

            </div>
            <p className="text-gray-400 mb-4">
              Connecting civil engineering students with real-world projects at École Hassania des Travaux Publics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB700] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  EHTP, Km 7, Route d'El Jadida, Casablanca, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFB700] flex-shrink-0" />
                <a href="mailto:btp.ehtp.20@gmail.com" className="text-gray-400 hover:text-[#FFB700]">
                  btp.ehtp.20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFB700] flex-shrink-0" />
                <span className="text-gray-400">+212 522 123 456</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">Stay connected on social media</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BtpEhtp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFB700] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/btpehtp?igsh=MXM4NXUyOG4xNGFldw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFB700] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/btp-ehtp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFB700] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@btp.ehtp.club"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFB700] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Club BTP EHTP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
