import { useState } from "react";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";

const initialImages = [
  { id: 1, title: "Campus Main Building", category: "Campus", date: "2026-01-15" },
  { id: 2, title: "Annual Sports Meet", category: "Events", date: "2026-01-20" },
  { id: 3, title: "Science Lab", category: "Infrastructure", date: "2026-01-25" },
  { id: 4, title: "Cultural Festival 2025", category: "Events", date: "2025-12-10" },
  { id: 5, title: "Convocation Ceremony", category: "Events", date: "2025-11-28" },
];

const GalleryManagement = () => {
  const [images, setImages] = useState(initialImages);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "Campus", date: "" });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setImages([{ id: Date.now(), ...form }, ...images]);
    setForm({ title: "", category: "Campus", date: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Gallery Management</h2>
          <p className="text-sm text-muted-foreground">Upload and manage gallery images</p>
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Upload Image
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">Upload New Image</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Title</label>
              <input type="text" required maxLength={100} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none">
                {["Campus", "Events", "Infrastructure", "Sports", "Cultural"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Date</label>
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-foreground mb-1">Image File</label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-secondary/50 transition-colors">
              <ImageIcon className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Click to select image or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB (Demo — no actual upload)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">Upload</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-lg text-sm font-medium hover:bg-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="admin-card flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-lg bg-navy-gradient flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">{img.title}</h4>
                <p className="text-xs text-muted-foreground">{img.category}</p>
                <p className="text-xs text-muted-foreground">{img.date}</p>
              </div>
            </div>
            <button onClick={() => setImages(images.filter(x => x.id !== img.id))} className="p-1.5 rounded-md hover:bg-secondary text-destructive flex-shrink-0"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManagement;
