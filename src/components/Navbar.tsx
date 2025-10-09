import logo from '../assets/logo.png';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `hover:text-[#FFB700] transition-colors ${isActive(path) ? 'text-[#FFB700]' : ''}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
  src={logo}
  alt="Club BTP EHTP Logo"
  className="h-12 w-auto object-contain"
/>
<span className="hidden sm:block font-semibold text-gray-800">BTP-EHTP</span>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link to="/events" className={navLinkClass("/events")}>
              Events/Calendar
            </Link>
            <Link to="/internships" className={navLinkClass("/internships")}>
              Internships
            </Link>
            <Link to="/resources" className={navLinkClass("/resources")}>
              Resources
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-[#FFB700] transition-colors">
                  More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/sponsors" className="w-full cursor-pointer">
                    Our Sponsors
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="w-full cursor-pointer">
                    Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="w-full cursor-pointer">
                    Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full cursor-pointer">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/about")}`}
            >
              About
            </Link>
            <Link
              to="/events"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/events")}`}
            >
              Events/Calendar
            </Link>
            <Link
              to="/internships"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/internships")}`}
            >
              Internships
            </Link>
            <Link
              to="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/resources")}`}
            >
              Resources
            </Link>
            <Link
              to="/sponsors"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/sponsors")}`}
            >
              Our Sponsors
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/gallery")}`}
            >
              Gallery
            </Link>
            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/team")}`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 ${navLinkClass("/contact")}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}