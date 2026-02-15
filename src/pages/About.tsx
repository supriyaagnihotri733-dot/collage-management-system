import { Award, Target, Eye } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";

const About = () => {
  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <h1>About Us</h1>
        <p>Discover Our Legacy of Academic Excellence</p>
      </div>

      {/* History */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Our History</h2>
              <div className="gold-divider !mx-0" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chhatrapati Shahu Ji Maharaj University, Kanpur was established with a vision to provide world-class 
                education in Uttar Pradesh. What began as a small institution has grown into one of the most 
                prestigious universities in the state.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The university has expanded to include over 50 courses across 
                12 departments, serving more than 10,000 students from across India and abroad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our alumni have gone on to become leaders in various fields including technology, medicine, 
                law, public service, and entrepreneurship, carrying the values of excellence and integrity 
                that define the CSJMU spirit.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={heroBanner1} alt="University Campus" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Vision & Mission</h2>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized institution of academic excellence, fostering innovation, 
                critical thinking, and ethical leadership to contribute meaningfully to society and 
                the nation's development.
              </p>
            </div>
            <div className="bg-card rounded-xl border p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Our Mission</h3>
              <ul className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                <li>• Provide quality education accessible to all sections of society</li>
                <li>• Promote research and innovation across disciplines</li>
                <li>• Foster holistic development including sports, arts, and culture</li>
                <li>• Build industry-academia partnerships for employability</li>
                <li>• Uphold values of integrity, inclusivity, and social responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Accreditations & Rankings</h2>
          <div className="gold-divider" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "NAAC Grade", value: "A++" },
              { label: "NIRF Rank", value: "Top 50" },
              { label: "NBA Accredited", value: "Yes" },
              { label: "UGC Approved", value: "12(B)" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl border p-6 shadow-sm">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
