import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, GraduationCap, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Examination", path: "/examination" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91-1234-567890</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@bhagwanti.edu.in</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hover:text-accent transition-colors">Admin Login</Link>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Student Portal</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy flex items-center justify-center">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-primary font-heading leading-tight">
                  Bhagwanti Education
                </h1>
                <p className="text-xs text-muted-foreground -mt-0.5">Centre & Degree College</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="ml-2 px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t animate-slide-in">
              <div className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 mt-2 px-4 py-3 bg-accent text-accent-foreground rounded-md text-sm font-semibold text-center"
                >
                  Apply Now
                </Link>
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 mt-1 px-4 py-3 border rounded-md text-sm font-medium text-center"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
