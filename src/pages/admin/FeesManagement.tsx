import { useState } from "react";
import { Plus, Trash2, IndianRupee, Search } from "lucide-react";

const initialFees = [
  { id: 1, roll: "VNU2024001", name: "Rahul Sharma", course: "B.Tech CSE", amount: 115000, paid: 115000, status: "Paid" },
  { id: 2, roll: "VNU2024002", name: "Priya Singh", course: "B.Tech CSE", amount: 115000, paid: 75000, status: "Partial" },
  { id: 3, roll: "VNU2024003", name: "Amit Kumar", course: "B.Tech ECE", amount: 115000, paid: 0, status: "Unpaid" },
  { id: 4, roll: "VNU2024004", name: "Sneha Gupta", course: "BCA", amount: 78000, paid: 78000, status: "Paid" },
  { id: 5, roll: "VNU2024005", name: "Vikash Yadav", course: "B.Sc Physics", amount: 58000, paid: 30000, status: "Partial" },
];

const FeesManagement = () => {
  const [fees, setFees] = useState(initialFees);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ roll: "", name: "", course: "", amount: "", paid: "" });

  const filtered = fees.filter(f => f.name.toLowerCase().includes(search.toLowerCase()) || f.roll.toLowerCase().includes(search.toLowerCase()));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = +form.amount;
    const pd = +form.paid;
    setFees([...fees, { id: Date.now(), ...form, amount: amt, paid: pd, status: pd >= amt ? "Paid" : pd > 0 ? "Partial" : "Unpaid" }]);
    setForm({ roll: "", name: "", course: "", amount: "", paid: "" });
    setShowForm(false);
  };

  const totalCollected = fees.reduce((s, f) => s + f.paid, 0);
  const totalPending = fees.reduce((s, f) => s + (f.amount - f.paid), 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-primary">Fees Management</h2>
          <p className="text-sm text-muted-foreground">Track and manage student fee payments</p>
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Record
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat-card">
          <IndianRupee className="w-6 h-6 text-college-success" />
          <div>
            <p className="text-lg font-bold text-foreground">₹{(totalCollected / 100000).toFixed(1)}L</p>
            <p className="text-xs text-muted-foreground">Total Collected</p>
          </div>
        </div>
        <div className="stat-card">
          <IndianRupee className="w-6 h-6 text-destructive" />
          <div>
            <p className="text-lg font-bold text-foreground">₹{(totalPending / 100000).toFixed(1)}L</p>
            <p className="text-xs text-muted-foreground">Total Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <IndianRupee className="w-6 h-6 text-primary" />
          <div>
            <p className="text-lg font-bold text-foreground">{fees.length}</p>
            <p className="text-xs text-muted-foreground">Total Records</p>
          </div>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="admin-card space-y-4">
          <h3 className="font-heading font-semibold text-primary">Add Fee Record</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[{ k: "roll", l: "Roll No." }, { k: "name", l: "Name" }, { k: "course", l: "Course" }, { k: "amount", l: "Total Fee (₹)", t: "number" }, { k: "paid", l: "Paid Amount (₹)", t: "number" }].map(f => (
              <div key={f.k}>
                <label className="block text-xs font-medium text-foreground mb-1">{f.l}</label>
                <input type={f.t || "text"} required maxLength={100} value={(form as any)[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">Save</button>
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
            <th className="text-left p-3 text-sm font-semibold">Roll No.</th>
            <th className="text-left p-3 text-sm font-semibold">Name</th>
            <th className="text-left p-3 text-sm font-semibold">Course</th>
            <th className="text-right p-3 text-sm font-semibold">Total Fee</th>
            <th className="text-right p-3 text-sm font-semibold">Paid</th>
            <th className="text-right p-3 text-sm font-semibold">Due</th>
            <th className="text-center p-3 text-sm font-semibold">Status</th>
          </tr></thead>
          <tbody>
            {filtered.map((f, i) => (
              <tr key={f.id} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                <td className="p-3 text-sm">{f.roll}</td>
                <td className="p-3 text-sm font-medium">{f.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{f.course}</td>
                <td className="p-3 text-sm text-right">₹{f.amount.toLocaleString()}</td>
                <td className="p-3 text-sm text-right text-college-success">₹{f.paid.toLocaleString()}</td>
                <td className="p-3 text-sm text-right text-destructive">₹{(f.amount - f.paid).toLocaleString()}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${f.status === "Paid" ? "bg-college-success/10 text-college-success" : f.status === "Partial" ? "bg-accent/15 text-accent" : "bg-destructive/10 text-destructive"}`}>{f.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesManagement;
