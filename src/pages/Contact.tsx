import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo only).");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <div className="page-banner">
        <h1>Contact Us</h1>
        <p>Get in Touch with Chhatrapati Shahu Ji Maharaj University Kanpur</p>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="section-title">Reach Us</h2>
              <div className="gold-divider !mx-0" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Address</h4>
                    <p className="text-sm text-muted-foreground">NH-48, Bhagwanti Nagar,<br />New Delhi - 110001, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91-1234-567890<br />+91-1234-567891</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Email</h4>
                    <p className="text-sm text-muted-foreground">info@csjmu.ac.in<br />admissions@csjmu.ac.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883072!2d77.04417!3d28.52728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="University Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title">Send a Message</h2>
              <div className="gold-divider !mx-0" />
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border shadow-sm p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    maxLength={200}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
