import { Calendar, BarChart3, Bell } from "lucide-react";

const timetable = [
  { date: "15 Mar 2026", subject: "Mathematics-I", time: "10:00 AM - 1:00 PM", room: "Hall A" },
  { date: "17 Mar 2026", subject: "Physics", time: "10:00 AM - 1:00 PM", room: "Hall B" },
  { date: "19 Mar 2026", subject: "Chemistry", time: "10:00 AM - 1:00 PM", room: "Hall A" },
  { date: "21 Mar 2026", subject: "English", time: "2:00 PM - 5:00 PM", room: "Hall C" },
  { date: "23 Mar 2026", subject: "Computer Science", time: "10:00 AM - 1:00 PM", room: "Lab 1" },
  { date: "25 Mar 2026", subject: "Engineering Drawing", time: "2:00 PM - 5:00 PM", room: "Hall D" },
];

const results = [
  { roll: "VNU2024001", name: "Rahul Sharma", course: "B.Tech CSE", semester: "3rd", sgpa: "8.5", status: "Pass" },
  { roll: "VNU2024002", name: "Priya Singh", course: "B.Tech CSE", semester: "3rd", sgpa: "9.1", status: "Pass" },
  { roll: "VNU2024003", name: "Amit Kumar", course: "B.Tech ECE", semester: "3rd", sgpa: "7.8", status: "Pass" },
  { roll: "VNU2024004", name: "Sneha Gupta", course: "BCA", semester: "5th", sgpa: "8.9", status: "Pass" },
  { roll: "VNU2024005", name: "Vikash Yadav", course: "B.Sc Physics", semester: "3rd", sgpa: "7.2", status: "Pass" },
];

const examNotices = [
  { date: "10 Feb 2026", title: "End Semester Examination March 2026 — Date Sheet Released", priority: "Important" },
  { date: "08 Feb 2026", title: "Admit Cards Available for Download from Student Portal", priority: "Urgent" },
  { date: "05 Feb 2026", title: "Re-evaluation Form Submission Deadline — 20 Feb 2026", priority: "Notice" },
  { date: "01 Feb 2026", title: "Practical Examination Schedule for B.Tech 5th Semester", priority: "Important" },
  { date: "28 Jan 2026", title: "Guidelines for Examination Hall — Revised", priority: "Notice" },
];

const Examination = () => {
  return (
    <div>
      <div className="page-banner">
        <h1>Examination</h1>
        <p>Exam Schedules, Results & Important Notices</p>
      </div>

      {/* Timetable */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Exam Time Table</h2>
          </div>
          <p className="section-subtitle">End Semester Examination — March 2026 (B.Tech 1st Year)</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] bg-card rounded-xl border shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 text-sm font-semibold">Date</th>
                  <th className="text-left p-4 text-sm font-semibold">Subject</th>
                  <th className="text-left p-4 text-sm font-semibold">Time</th>
                  <th className="text-left p-4 text-sm font-semibold">Room</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((t, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                    <td className="p-4 text-sm text-foreground">{t.date}</td>
                    <td className="p-4 text-sm font-medium text-foreground">{t.subject}</td>
                    <td className="p-4 text-sm text-muted-foreground">{t.time}</td>
                    <td className="p-4 text-sm text-muted-foreground">{t.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Recent Results</h2>
          </div>
          <p className="section-subtitle">Latest examination results — Semester 3, 2025-26</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] bg-card rounded-xl border shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 text-sm font-semibold">Roll No.</th>
                  <th className="text-left p-4 text-sm font-semibold">Name</th>
                  <th className="text-left p-4 text-sm font-semibold">Course</th>
                  <th className="text-left p-4 text-sm font-semibold">Sem</th>
                  <th className="text-left p-4 text-sm font-semibold">SGPA</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                    <td className="p-4 text-sm text-foreground">{r.roll}</td>
                    <td className="p-4 text-sm font-medium text-foreground">{r.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{r.course}</td>
                    <td className="p-4 text-sm text-muted-foreground">{r.semester}</td>
                    <td className="p-4 text-sm font-semibold text-primary">{r.sgpa}</td>
                    <td className="p-4"><span className="px-2 py-1 rounded-full text-xs font-semibold bg-college-success/10 text-college-success">Pass</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exam Notices */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Exam Notices</h2>
          </div>
          <p className="section-subtitle">Important announcements from the examination cell</p>
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden max-w-3xl">
            {examNotices.map((n, i) => (
              <div key={i} className={`p-4 flex items-start gap-4 ${i !== examNotices.length - 1 ? "border-b" : ""} hover:bg-secondary/50 transition-colors cursor-pointer`}>
                <div className="text-xs text-muted-foreground min-w-[80px]">{n.date}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{n.title}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0 ${
                  n.priority === "Urgent" ? "bg-destructive/10 text-destructive" : 
                  n.priority === "Important" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"
                }`}>{n.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examination;
