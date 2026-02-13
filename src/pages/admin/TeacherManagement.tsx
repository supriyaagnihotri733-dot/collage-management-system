import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

const initialTeachers = [
  { id: 1, empId: "VNU-T001", name: "Dr. Rajesh Kumar", dept: "Computer Science", designation: "Professor & HOD", phone: "9876500001", email: "rajesh@vnu.edu.in" },
  { id: 2, empId: "VNU-T002", name: "Dr. Priya Sharma", dept: "Electronics", designation: "Professor & HOD", phone: "9876500002", email: "priya@vnu.edu.in" },
  { id: 3, empId: "VNU-T003", name: "Dr. Anil Verma", dept: "Mechanical", designation: "Professor & HOD", phone: "9876500003", email: "anil@vnu.edu.in" },
  { id: 4, empId: "VNU-T004", name: "Prof. Amit Gupta", dept: "Computer Science", designation: "Asst. Professor", phone: "9876500004", email: "amit@vnu.edu.in" },
  { id: 5, empId: "VNU-T005", name: "Dr. Kavita Joshi", dept: "Mathematics", designation: "Professor & HOD", phone: "9876500005", email: "kavita@vnu.edu.in" },
];

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState({ empId: "", name: "", dept: "", designation: "", phone: "", email: "" });

  const filtered = teachers.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.empId.toLowerCase().includes(search.toLowerCase()));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing !== null) {
      setTeachers(teachers.map(t => t.id === editing ? { ...t, ...form } : t));
    } else {
      setTeachers([...teachers, { id: Date.now(), ...form }]);
    }
    setForm({ empId: "", name: "", dept: "", designation: "", phone: "", email: "" });
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (t: typeof initialTeachers[0]) => {
    setForm({ empId: t.empId, name: t.name, dept: t.dept, designation: t.designation, phone: t.phone, email: t.email });
    setEditing(t.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this teacher?")) setTeachers(teachers.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Teacher Management</h2>
          <p className="text-sm text-muted-foreground">Manage faculty records</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditing(null); setForm({ empId: "", name: "", dept: "", designation: "", phone: "", email: "" }); }} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Teacher
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">{editing ? "Edit Teacher" : "Add New Teacher"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(["empId", "name", "dept", "designation", "phone", "email"] as const).map(field => (
              <div key={field}>
                <label className="block text-xs font-medium text-foreground mb-1 capitalize">{field === "empId" ? "Employee ID" : field === "dept" ? "Department" : field}</label>
                <input type={field === "email" ? "email" : "text"} required maxLength={100} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">{editing ? "Update" : "Save"}</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-lg text-sm font-medium hover:bg-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} maxLength={100} className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] bg-card rounded-xl border shadow-sm overflow-hidden">
          <thead><tr className="bg-primary text-primary-foreground">
            <th className="text-left p-3 text-sm font-semibold">Emp ID</th>
            <th className="text-left p-3 text-sm font-semibold">Name</th>
            <th className="text-left p-3 text-sm font-semibold">Department</th>
            <th className="text-left p-3 text-sm font-semibold">Designation</th>
            <th className="text-left p-3 text-sm font-semibold">Phone</th>
            <th className="text-left p-3 text-sm font-semibold">Actions</th>
          </tr></thead>
          <tbody>
            {filtered.map((t, i) => (
              <tr key={t.id} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                <td className="p-3 text-sm">{t.empId}</td>
                <td className="p-3 text-sm font-medium">{t.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{t.dept}</td>
                <td className="p-3 text-sm text-muted-foreground">{t.designation}</td>
                <td className="p-3 text-sm text-muted-foreground">{t.phone}</td>
                <td className="p-3"><div className="flex gap-2">
                  <button onClick={() => handleEdit(t)} className="p-1.5 rounded-md hover:bg-secondary text-college-info"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(t.id)} className="p-1.5 rounded-md hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherManagement;
