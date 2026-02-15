import { useState } from "react";
import { Camera, Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const photos = [
  { src: heroBanner1, caption: "University Main Campus" },
  { src: gallery1, caption: "Annual Sports Meet" },
  { src: gallery2, caption: "Science Laboratory" },
  { src: gallery3, caption: "Cultural Festival — Rang Mahotsav" },
  { src: gallery4, caption: "Computer Lab" },
  { src: gallery5, caption: "Guest Lecture Series" },
  { src: gallery6, caption: "Campus Garden & Fountain" },
  { src: heroBanner2, caption: "Convocation Ceremony 2025" },
  { src: heroBanner3, caption: "Central Library" },
];

const videos = [
  { title: "Campus Tour — CSJM University Kanpur", duration: "5:32" },
  { title: "Annual Day Celebration 2025 Highlights", duration: "8:14" },
  { title: "Convocation Ceremony — Batch of 2025", duration: "12:45" },
  { title: "Research Lab Walkthrough", duration: "4:20" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div className="page-banner">
        <h1>Gallery</h1>
        <p>A Visual Tour of Our Campus Life</p>
      </div>

      {/* Photo Gallery */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Photo Gallery</h2>
          </div>
          <p className="section-subtitle">Explore moments from campus life, events, and celebrations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow aspect-[4/3]"
                onClick={() => setSelected(photo.src)}
              >
                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary-foreground text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <img src={selected} alt="Full view" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
        </div>
      )}

      {/* Video Gallery */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Video Gallery</h2>
          </div>
          <p className="section-subtitle">Watch our latest university videos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video, i) => (
              <div key={i} className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-video bg-navy-gradient flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Play className="w-7 h-7 text-accent fill-accent" />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-foreground/70 text-primary-foreground text-xs px-2 py-0.5 rounded">{video.duration}</span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-foreground">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
