import { Users, BookOpen, Bell, CreditCard, BarChart3, TrendingUp, UserPlus, ClipboardList } from "lucide-react";

const stats = [
  { label: "Total Students", value: "10,245", icon: Users, change: "+120 this month" },
  { label: "Total Teachers", value: "186", icon: BookOpen, change: "+5 this month" },
  { label: "Active Courses", value: "52", icon: ClipboardList, change: "3 new added" },
  { label: "Pending Fees", value: "₹8.5L", icon: CreditCard, change: "12 students" },
  { label: "Active Notices", value: "15", icon: Bell, change: "3 new today" },
  { label: "Avg Attendance", value: "87%", icon: BarChart3, change: "+2% from last month" },
];

const recentActivities = [
  { time: "10:30 AM", action: "New admission: Rahul Sharma — B.Tech CSE", type: "admission" },
  { time: "09:45 AM", action: "Fee payment received: ₹75,000 — Priya Singh", type: "fee" },
  { time: "09:15 AM", action: "Notice published: End Semester Exam Schedule", type: "notice" },
  { time: "Yesterday", action: "Result uploaded: B.Tech 3rd Sem", type: "result" },
  { time: "Yesterday", action: "New teacher added: Prof. Neha Kapoor — CSE Dept", type: "teacher" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Welcome back, Admin. Here's an overview of your institution.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-xs text-college-success mt-0.5">{s.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="admin-card">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivities.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <span className="text-xs text-muted-foreground min-w-[70px]">{a.time}</span>
              <p className="text-sm text-foreground">{a.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
