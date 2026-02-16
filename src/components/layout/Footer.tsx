import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={universityLogo} alt="Bhagwanti Education Centre Logo" className="w-8 h-8 rounded-full object-contain bg-white" />
              <h3 className="text-lg font-heading font-bold">Bhagwanti Education Centre & Degree College</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Bhagwanti Education Centre & Degree College is committed to academic excellence, 
              research innovation, and holistic development of students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Academics", "Admissions", "Examination", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="opacity-80">Kalyanpur, Kanpur Nagar, Uttar Pradesh - 208024, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="opacity-80">+91-1234-567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="opacity-80">info@bhagwanti.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-accent">Important</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Anti-Ragging Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">RTI Information</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">NAAC Accreditation</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">NIRF Ranking</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>© 2026 Bhagwanti Education Centre & Degree College. All rights reserved.</p>
          <p className="mt-1 md:mt-0">Approved by UGC | NAAC 'A++' Accredited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
