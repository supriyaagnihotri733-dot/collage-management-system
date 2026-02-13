import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const students = [
  { roll: "VNU2024001", name: "Rahul Sharma" },
  { roll: "VNU2024002", name: "Priya Singh" },
  { roll: "VNU2024003", name: "Amit Kumar" },
  { roll: "VNU2024004", name: "Sneha Gupta" },
  { roll: "VNU2024005", name: "Vikash Yadav" },
  { roll: "VNU2024006", name: "Ritu Verma" },
  { roll: "VNU2024007", name: "Karan Malhotra" },
  { roll: "VNU2024008", name: "Anjali Patel" },
];

const AttendanceModule = () => {
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    Object.fromEntries(students.map(s => [s.roll, true]))
  );
  const [selectedDate, setSelectedDate] = useState("2026-02-13");
  const [selectedCourse, setSelectedCourse] = useState("B.Tech CSE");

  const toggle = (roll: string) => setAttendance({ ...attendance, [roll]: !attendance[roll] });
  const presentCount = Object.values(attendance).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary">Attendance Module</h2>
        <p className="text-sm text-muted-foreground">Mark and manage daily attendance</p>
      </div>

      <div className="admin-card">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-foreground mb-1">Date</label>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-foreground mb-1">Course</label>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none">
              {["B.Tech CSE", "B.Tech ECE", "BCA", "B.Sc Physics"].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-end">
            <div className="text-sm">
              <span className="text-college-success font-semibold">{presentCount}</span> Present / <span className="text-destructive font-semibold">{students.length - presentCount}</span> Absent
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px] bg-card rounded-xl border overflow-hidden">
            <thead><tr className="bg-primary text-primary-foreground">
              <th className="text-left p-3 text-sm font-semibold">Roll No.</th>
              <th className="text-left p-3 text-sm font-semibold">Student Name</th>
              <th className="text-center p-3 text-sm font-semibold">Status</th>
            </tr></thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.roll} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                  <td className="p-3 text-sm">{s.roll}</td>
                  <td className="p-3 text-sm font-medium">{s.name}</td>
                  <td className="p-3 text-center">
                    <button onClick={() => toggle(s.roll)} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors ${attendance[s.roll] ? "bg-college-success/10 text-college-success" : "bg-destructive/10 text-destructive"}`}>
                      {attendance[s.roll] ? <><CheckCircle className="w-3 h-3" /> Present</> : <><XCircle className="w-3 h-3" /> Absent</>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90">Save Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModule;
