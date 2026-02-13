import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, BookOpen, Bell, ClipboardList,
  BarChart3, CreditCard, Image, GraduationCap, Menu, X,
  LogOut, ChevronLeft, UserCog,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Students", path: "/admin/students", icon: Users },
  { label: "Teachers", path: "/admin/teachers", icon: UserCog },
  { label: "Courses", path: "/admin/courses", icon: BookOpen },
  { label: "Notices", path: "/admin/notices", icon: Bell },
  { label: "Attendance", path: "/admin/attendance", icon: ClipboardList },
  { label: "Results", path: "/admin/results", icon: BarChart3 },
  { label: "Fees", path: "/admin/fees", icon: CreditCard },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${collapsed ? "w-16" : "w-64"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 p-4 border-b border-sidebar-border">
          <GraduationCap className="w-8 h-8 text-sidebar-primary flex-shrink-0" />
          {!collapsed && (
            <span className="font-heading font-bold text-sm">VNU Admin</span>
          )}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden text-sidebar-foreground"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hidden lg:block text-sidebar-foreground hover:text-sidebar-primary"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-sidebar-border p-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm text-sidebar-foreground hover:text-sidebar-primary transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-card shadow-sm border-b h-16 flex items-center px-4 lg:px-6 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary mr-3"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="font-heading text-lg font-semibold text-primary">
            Admin Panel
          </h2>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
