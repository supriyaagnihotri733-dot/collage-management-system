import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only — no real auth
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={universityLogo} alt="CSJMU Logo" className="w-16 h-16 rounded-full object-contain bg-white mx-auto mb-4" />
          <h1 className="text-2xl font-heading font-bold text-primary-foreground">Admin Login</h1>
          <p className="text-primary-foreground/70 text-sm mt-1">Chhatrapati Shahu Ji Maharaj University Kanpur</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-xl shadow-lg p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                required
                maxLength={50}
                value={creds.username}
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                required
                maxLength={100}
                value={creds.password}
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Sign In
          </button>
          <p className="text-xs text-center text-muted-foreground">Demo: Any credentials will work</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
