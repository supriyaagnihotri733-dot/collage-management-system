import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, BookOpen, Users, Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import collegeBuilding from "@/assets/college-building.png";
import collegeBuilding2 from "@/assets/college-building-2.png";
import heroBanner1 from "@/assets/classroom.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import newsEventPhoto from "@/assets/news-event-photo.png";

const slides = [
  { image: collegeBuilding, title: "Welcome to Bhagwanti Education Centre & Degree College", subtitle: "Shaping Future Leaders with Excellence" },
  { image: collegeBuilding2, title: "Celebrating Academic Excellence", subtitle: "Join Our Legacy of 10,000+ Successful Alumni" },
];

const notices = [
  { date: "10 Feb 2026", title: "Admission Open for Session 2026-27", type: "Admission" },
  { date: "08 Feb 2026", title: "Semester End Exam Schedule Released", type: "Exam" },
  { date: "05 Feb 2026", title: "National Science Day Celebration", type: "Event" },
  { date: "01 Feb 2026", title: "Last Date for Fee Payment Extended", type: "Fee" },
  { date: "28 Jan 2026", title: "Workshop on AI & Machine Learning", type: "Workshop" },
];

const events = [
  { date: "15 Mar", title: "Annual Sports Meet 2026", desc: "Inter-department sports competition on the main ground." },
  { date: "22 Mar", title: "Tech Fest — InnoVision 2026", desc: "Three-day technology festival with hackathons and exhibitions." },
  { date: "05 Apr", title: "Cultural Festival — Rang Mahotsav", desc: "Celebrating diversity through art, music, and dance." },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students Enrolled" },
  { icon: BookOpen, value: "8+", label: "Courses Offered" },
  { icon: Award, value: "A++", label: "NAAC Accreditation" },
  { icon: Calendar, value: "39", label: "Years of Excellence" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <motion.h2
              key={`title-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-3 max-w-3xl"
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <div className="flex gap-3">
              <Link to="/admissions" className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Apply Now
              </Link>
              <Link to="/about" className="px-6 py-3 bg-primary-foreground/20 text-primary-foreground rounded-lg font-semibold backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors">
                Explore More
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-accent w-8" : "bg-primary-foreground/50"}`} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy -mt-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-primary-foreground">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl md:text-3xl font-bold font-heading">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board & Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Notice Board */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-6 h-6 text-accent" />
                <h3 className="section-title !mb-0">Notice Board</h3>
              </div>
              <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
                {notices.map((notice, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 ${i !== notices.length - 1 ? "border-b" : ""} hover:bg-secondary/50 transition-colors cursor-pointer`}>
                    <div className="text-center min-w-[60px]">
                      <div className="text-xs text-muted-foreground">{notice.date}</div>
                    </div>
                    <div className="flex-1">
                      <span className="notice-badge mb-1">{notice.type}</span>
                      <p className="text-sm font-medium text-foreground mt-1">{notice.title}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* News & Events */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="section-title !mb-0">News & Events</h3>
              </div>
              <div className="mb-4 rounded-xl overflow-hidden border shadow-sm">
                <img src={newsEventPhoto} alt="News & Events" className="w-full h-48 object-cover" />
              </div>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <div key={i} className="bg-card rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-lg font-bold font-heading leading-tight">{event.date.split(" ")[0]}</div>
                        <div className="text-xs">{event.date.split(" ")[1]}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Admissions are open for the academic session 2026-27. Apply today and be part of our growing family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90">
              Apply for Admission
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
