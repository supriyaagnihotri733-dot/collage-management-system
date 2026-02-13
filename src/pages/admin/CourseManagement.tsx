import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

const initialCourses = [
  { id: 1, code: "CSE101", name: "B.Tech Computer Science", dept: "Computer Science", duration: "4 Years", seats: 120 },
  { id: 2, code: "ECE101", name: "B.Tech Electronics", dept: "Electronics", duration: "4 Years", seats: 60 },
  { id: 3, code: "ME101", name: "B.Tech Mechanical", dept: "Mechanical", duration: "4 Years", seats: 60 },
  { id: 4, code: "BCA101", name: "BCA", dept: "Computer Science", duration: "3 Years", seats: 90 },
  { id: 5, code: "MBA101", name: "MBA", dept: "Management", duration: "2 Years", seats: 60 },
];

const CourseManagement = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState({ code: "", name: "", dept: "", duration: "", seats: "" });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing !== null) {
      setCourses(courses.map(c => c.id === editing ? { ...c, ...form, seats: parseInt(form.seats) } : c));
    } else {
      setCourses([...courses, { id: Date.now(), ...form, seats: parseInt(form.seats) }]);
    }
    setForm({ code: "", name: "", dept: "", duration: "", seats: "" });
    setEditing(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Course & Department Management</h2>
          <p className="text-sm text-muted-foreground">Manage courses and departments</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditing(null); setForm({ code: "", name: "", dept: "", duration: "", seats: "" }); }} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">{editing ? "Edit Course" : "Add New Course"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[{ key: "code", label: "Course Code" }, { key: "name", label: "Course Name" }, { key: "dept", label: "Department" }, { key: "duration", label: "Duration" }, { key: "seats", label: "Total Seats" }].map(f => (
              <div key={f.key}>
                <label className="block text-xs font-medium text-foreground mb-1">{f.label}</label>
                <input type={f.key === "seats" ? "number" : "text"} required maxLength={100} value={(form as any)[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">Save</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-lg text-sm font-medium hover:bg-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] bg-card rounded-xl border shadow-sm overflow-hidden">
          <thead><tr className="bg-primary text-primary-foreground">
            <th className="text-left p-3 text-sm font-semibold">Code</th>
            <th className="text-left p-3 text-sm font-semibold">Course Name</th>
            <th className="text-left p-3 text-sm font-semibold">Department</th>
            <th className="text-left p-3 text-sm font-semibold">Duration</th>
            <th className="text-left p-3 text-sm font-semibold">Seats</th>
            <th className="text-left p-3 text-sm font-semibold">Actions</th>
          </tr></thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={c.id} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                <td className="p-3 text-sm">{c.code}</td>
                <td className="p-3 text-sm font-medium">{c.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{c.dept}</td>
                <td className="p-3 text-sm text-muted-foreground">{c.duration}</td>
                <td className="p-3 text-sm text-muted-foreground">{c.seats}</td>
                <td className="p-3"><div className="flex gap-2">
                  <button onClick={() => { setForm({ code: c.code, name: c.name, dept: c.dept, duration: c.duration, seats: String(c.seats) }); setEditing(c.id); setShowForm(true); }} className="p-1.5 rounded-md hover:bg-secondary text-college-info"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => setCourses(courses.filter(x => x.id !== c.id))} className="p-1.5 rounded-md hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;
