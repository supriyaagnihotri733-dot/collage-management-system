import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

const initialResults = [
  { id: 1, roll: "VNU2024001", name: "Rahul Sharma", course: "B.Tech CSE", semester: "3rd", sub1: 85, sub2: 78, sub3: 92, sub4: 88, sub5: 76 },
  { id: 2, roll: "VNU2024002", name: "Priya Singh", course: "B.Tech CSE", semester: "3rd", sub1: 91, sub2: 88, sub3: 95, sub4: 90, sub5: 87 },
  { id: 3, roll: "VNU2024003", name: "Amit Kumar", course: "B.Tech ECE", semester: "3rd", sub1: 72, sub2: 68, sub3: 80, sub4: 75, sub5: 70 },
  { id: 4, roll: "VNU2024004", name: "Sneha Gupta", course: "BCA", semester: "5th", sub1: 88, sub2: 92, sub3: 85, sub4: 90, sub5: 86 },
];

const ResultsModule = () => {
  const [results, setResults] = useState(initialResults);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ roll: "", name: "", course: "", semester: "", sub1: "", sub2: "", sub3: "", sub4: "", sub5: "" });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setResults([...results, { id: Date.now(), ...form, sub1: +form.sub1, sub2: +form.sub2, sub3: +form.sub3, sub4: +form.sub4, sub5: +form.sub5 }]);
    setForm({ roll: "", name: "", course: "", semester: "", sub1: "", sub2: "", sub3: "", sub4: "", sub5: "" });
    setShowForm(false);
  };

  const getTotal = (r: typeof initialResults[0]) => r.sub1 + r.sub2 + r.sub3 + r.sub4 + r.sub5;
  const getPercentage = (r: typeof initialResults[0]) => (getTotal(r) / 500 * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Results / Marks Module</h2>
          <p className="text-sm text-muted-foreground">Upload and manage student results</p>
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Result
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">Add Student Result</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ k: "roll", l: "Roll No." }, { k: "name", l: "Name" }, { k: "course", l: "Course" }, { k: "semester", l: "Semester" }].map(f => (
              <div key={f.k}>
                <label className="block text-xs font-medium text-foreground mb-1">{f.l}</label>
                <input type="text" required maxLength={100} value={(form as any)[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              </div>
            ))}
            {["sub1", "sub2", "sub3", "sub4", "sub5"].map((s, i) => (
              <div key={s}>
                <label className="block text-xs font-medium text-foreground mb-1">Subject {i + 1}</label>
                <input type="number" required min={0} max={100} value={(form as any)[s]} onChange={(e) => setForm({ ...form, [s]: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
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
        <table className="w-full min-w-[800px] bg-card rounded-xl border shadow-sm overflow-hidden">
          <thead><tr className="bg-primary text-primary-foreground">
            <th className="text-left p-3 text-sm font-semibold">Roll No.</th>
            <th className="text-left p-3 text-sm font-semibold">Name</th>
            <th className="text-left p-3 text-sm font-semibold">Course</th>
            <th className="text-center p-3 text-sm font-semibold">S1</th>
            <th className="text-center p-3 text-sm font-semibold">S2</th>
            <th className="text-center p-3 text-sm font-semibold">S3</th>
            <th className="text-center p-3 text-sm font-semibold">S4</th>
            <th className="text-center p-3 text-sm font-semibold">S5</th>
            <th className="text-center p-3 text-sm font-semibold">Total</th>
            <th className="text-center p-3 text-sm font-semibold">%</th>
            <th className="text-left p-3 text-sm font-semibold">Actions</th>
          </tr></thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={r.id} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                <td className="p-3 text-sm">{r.roll}</td>
                <td className="p-3 text-sm font-medium">{r.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{r.course}</td>
                <td className="p-3 text-sm text-center">{r.sub1}</td>
                <td className="p-3 text-sm text-center">{r.sub2}</td>
                <td className="p-3 text-sm text-center">{r.sub3}</td>
                <td className="p-3 text-sm text-center">{r.sub4}</td>
                <td className="p-3 text-sm text-center">{r.sub5}</td>
                <td className="p-3 text-sm text-center font-semibold">{getTotal(r)}</td>
                <td className="p-3 text-sm text-center font-semibold text-primary">{getPercentage(r)}%</td>
                <td className="p-3"><button onClick={() => setResults(results.filter(x => x.id !== r.id))} className="p-1.5 rounded-md hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsModule;
