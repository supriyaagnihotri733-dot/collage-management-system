import { BookOpen, Building, User } from "lucide-react";

const courses = [
  { name: "B.Tech (Computer Science)", duration: "4 Years", seats: 120 },
  { name: "B.Tech (Electronics & Comm.)", duration: "4 Years", seats: 60 },
  { name: "B.Tech (Mechanical Engg.)", duration: "4 Years", seats: 60 },
  { name: "B.Sc (Physics)", duration: "3 Years", seats: 80 },
  { name: "B.Sc (Chemistry)", duration: "3 Years", seats: 80 },
  { name: "B.Sc (Mathematics)", duration: "3 Years", seats: 80 },
  { name: "BBA", duration: "3 Years", seats: 60 },
  { name: "BCA", duration: "3 Years", seats: 90 },
  { name: "M.Tech (CSE)", duration: "2 Years", seats: 30 },
  { name: "MBA", duration: "2 Years", seats: 60 },
  { name: "M.Sc (Physics)", duration: "2 Years", seats: 40 },
  { name: "B.Ed", duration: "2 Years", seats: 50 },
];

const departments = [
  { name: "Computer Science & Engineering", hod: "Dr. Rajesh Kumar", faculty: 15 },
  { name: "Electronics & Communication", hod: "Dr. Priya Sharma", faculty: 12 },
  { name: "Mechanical Engineering", hod: "Dr. Anil Verma", faculty: 10 },
  { name: "Physics", hod: "Dr. Sunita Devi", faculty: 8 },
  { name: "Chemistry", hod: "Dr. Manoj Singh", faculty: 7 },
  { name: "Mathematics", hod: "Dr. Kavita Joshi", faculty: 6 },
  { name: "Management Studies", hod: "Dr. Vikram Patel", faculty: 10 },
  { name: "Education", hod: "Dr. Anita Rao", faculty: 8 },
];

const faculty = [
  { name: "Dr. Rajesh Kumar", dept: "Computer Science", role: "Professor & HOD", exp: "22 Years" },
  { name: "Dr. Priya Sharma", dept: "Electronics", role: "Professor & HOD", exp: "18 Years" },
  { name: "Dr. Anil Verma", dept: "Mechanical Engg.", role: "Professor & HOD", exp: "20 Years" },
  { name: "Dr. Sunita Devi", dept: "Physics", role: "Associate Professor", exp: "15 Years" },
  { name: "Prof. Amit Gupta", dept: "Computer Science", role: "Assistant Professor", exp: "10 Years" },
  { name: "Dr. Kavita Joshi", dept: "Mathematics", role: "Professor & HOD", exp: "17 Years" },
  { name: "Prof. Neha Kapoor", dept: "Management", role: "Associate Professor", exp: "12 Years" },
  { name: "Dr. Vikram Patel", dept: "Management", role: "Professor & HOD", exp: "19 Years" },
];

const Academics = () => {
  return (
    <div>
      <div className="page-banner">
        <h1>Academics</h1>
        <p>Explore Our Programs, Departments & Faculty</p>
      </div>

      {/* Courses */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Courses Offered</h2>
          </div>
          <p className="section-subtitle">Choose from our wide range of undergraduate and postgraduate programs</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] bg-card rounded-xl border shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 text-sm font-semibold">Course Name</th>
                  <th className="text-left p-4 text-sm font-semibold">Duration</th>
                  <th className="text-left p-4 text-sm font-semibold">Seats</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                    <td className="p-4 text-sm font-medium text-foreground">{c.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{c.duration}</td>
                    <td className="p-4 text-sm text-muted-foreground">{c.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Building className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Departments</h2>
          </div>
          <p className="section-subtitle">Our academic departments led by distinguished faculty</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((d, i) => (
              <div key={i} className="bg-card rounded-xl border p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-heading font-semibold text-primary mb-2">{d.name}</h4>
                <p className="text-sm text-muted-foreground">HOD: {d.hod}</p>
                <p className="text-sm text-muted-foreground">Faculty: {d.faculty} members</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Our Faculty</h2>
          </div>
          <p className="section-subtitle">Meet our experienced and dedicated educators</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-navy-gradient p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-2xl font-heading font-bold">
                    {f.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-heading font-semibold text-primary">{f.name}</h4>
                  <p className="text-sm text-muted-foreground">{f.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.dept} • {f.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
