import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

const initialStudents = [
  { id: 1, roll: "VNU2024001", name: "Rahul Sharma", course: "B.Tech CSE", semester: "3rd", phone: "9876543210", email: "rahul@email.com" },
  { id: 2, roll: "VNU2024002", name: "Priya Singh", course: "B.Tech CSE", semester: "3rd", phone: "9876543211", email: "priya@email.com" },
  { id: 3, roll: "VNU2024003", name: "Amit Kumar", course: "B.Tech ECE", semester: "3rd", phone: "9876543212", email: "amit@email.com" },
  { id: 4, roll: "VNU2024004", name: "Sneha Gupta", course: "BCA", semester: "5th", phone: "9876543213", email: "sneha@email.com" },
  { id: 5, roll: "VNU2024005", name: "Vikash Yadav", course: "B.Sc Physics", semester: "3rd", phone: "9876543214", email: "vikash@email.com" },
];

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState({ roll: "", name: "", course: "", semester: "", phone: "", email: "" });

  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.roll.toLowerCase().includes(search.toLowerCase()));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing !== null) {
      setStudents(students.map(s => s.id === editing ? { ...s, ...form } : s));
    } else {
      setStudents([...students, { id: Date.now(), ...form }]);
    }
    setForm({ roll: "", name: "", course: "", semester: "", phone: "", email: "" });
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (s: typeof initialStudents[0]) => {
    setForm({ roll: s.roll, name: s.name, course: s.course, semester: s.semester, phone: s.phone, email: s.email });
    setEditing(s.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this student?")) setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Student Management</h2>
          <p className="text-sm text-muted-foreground">Add, edit, and manage student records</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditing(null); setForm({ roll: "", name: "", course: "", semester: "", phone: "", email: "" }); }} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Student
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">{editing ? "Edit Student" : "Add New Student"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(["roll", "name", "course", "semester", "phone", "email"] as const).map(field => (
              <div key={field}>
                <label className="block text-xs font-medium text-foreground mb-1 capitalize">{field === "roll" ? "Roll No." : field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  maxLength={100}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">{editing ? "Update" : "Save"}</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-lg text-sm font-medium hover:bg-secondary">Cancel</button>
          </div>
        </form>
      )}

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search by name or roll no..." value={search} onChange={(e) => setSearch(e.target.value)} maxLength={100} className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] bg-card rounded-xl border shadow-sm overflow-hidden">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="text-left p-3 text-sm font-semibold">Roll No.</th>
              <th className="text-left p-3 text-sm font-semibold">Name</th>
              <th className="text-left p-3 text-sm font-semibold">Course</th>
              <th className="text-left p-3 text-sm font-semibold">Sem</th>
              <th className="text-left p-3 text-sm font-semibold">Phone</th>
              <th className="text-left p-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                <td className="p-3 text-sm">{s.roll}</td>
                <td className="p-3 text-sm font-medium">{s.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{s.course}</td>
                <td className="p-3 text-sm text-muted-foreground">{s.semester}</td>
                <td className="p-3 text-sm text-muted-foreground">{s.phone}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(s)} className="p-1.5 rounded-md hover:bg-secondary text-college-info"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(s.id)} className="p-1.5 rounded-md hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;
