import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const initialNotices = [
  { id: 1, date: "2026-02-10", title: "Admission Open for Session 2026-27", category: "Admission", priority: "Important" },
  { id: 2, date: "2026-02-08", title: "Semester End Exam Schedule Released", category: "Exam", priority: "Urgent" },
  { id: 3, date: "2026-02-05", title: "National Science Day Celebration", category: "Event", priority: "General" },
  { id: 4, date: "2026-02-01", title: "Last Date for Fee Payment Extended", category: "Fee", priority: "Important" },
];

const NoticeManagement = () => {
  const [notices, setNotices] = useState(initialNotices);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "General", priority: "General", date: "" });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setNotices([{ id: Date.now(), ...form }, ...notices]);
    setForm({ title: "", category: "General", priority: "General", date: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Notice Management</h2>
          <p className="text-sm text-muted-foreground">Publish and manage university notices</p>
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> New Notice
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">Publish New Notice</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-foreground mb-1">Notice Title</label>
              <input type="text" required maxLength={200} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none">
                {["General", "Admission", "Exam", "Fee", "Event", "Workshop"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Priority</label>
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none">
                {["General", "Important", "Urgent"].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Date</label>
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">Publish</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-lg text-sm font-medium hover:bg-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {notices.map(n => (
          <div key={n.id} className="admin-card flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${n.priority === "Urgent" ? "bg-destructive/10 text-destructive" : n.priority === "Important" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>{n.priority}</span>
                <span className="text-xs text-muted-foreground">{n.category}</span>
              </div>
              <p className="font-medium text-foreground">{n.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
            </div>
            <button onClick={() => setNotices(notices.filter(x => x.id !== n.id))} className="p-1.5 rounded-md hover:bg-secondary text-destructive flex-shrink-0"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeManagement;
