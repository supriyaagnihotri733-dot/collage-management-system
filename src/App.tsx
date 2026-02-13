import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import AdminLayout from "./components/layout/AdminLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Examination from "./pages/Examination";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import StudentManagement from "./pages/admin/StudentManagement";
import TeacherManagement from "./pages/admin/TeacherManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import NoticeManagement from "./pages/admin/NoticeManagement";
import AttendanceModule from "./pages/admin/AttendanceModule";
import ResultsModule from "./pages/admin/ResultsModule";
import FeesManagement from "./pages/admin/FeesManagement";
import GalleryManagement from "./pages/admin/GalleryManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Login */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Admin Panel */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/students" element={<StudentManagement />} />
            <Route path="/admin/teachers" element={<TeacherManagement />} />
            <Route path="/admin/courses" element={<CourseManagement />} />
            <Route path="/admin/notices" element={<NoticeManagement />} />
            <Route path="/admin/attendance" element={<AttendanceModule />} />
            <Route path="/admin/results" element={<ResultsModule />} />
            <Route path="/admin/fees" element={<FeesManagement />} />
            <Route path="/admin/gallery" element={<GalleryManagement />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
