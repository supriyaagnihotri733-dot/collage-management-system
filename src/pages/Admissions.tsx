import { useState } from "react";
import { CheckCircle, FileText, IndianRupee } from "lucide-react";

const eligibility = [
  { course: "B.Sc", criteria: "10+2 with relevant science stream, Min. 55% marks" },
  { course: "B.Sc / Biotech", criteria: "10+2 with Biology/Science stream, Min. 55% marks" },
  { course: "B.Lib", criteria: "Graduation in any discipline, Min. 50% marks" },
  { course: "M.Ed", criteria: "B.Ed with Min. 55% marks from recognized university" },
  { course: "D.El.Ed (BTC)", criteria: "Graduation with Min. 50% marks, as per NCTE norms" },
  { course: "DPSC (NTT)", criteria: "10+2 from any recognized board, Min. 50% marks" },
];

const steps = [
  { step: 1, title: "Online Registration", desc: "Fill the online application form on the university portal with your personal and academic details." },
  { step: 2, title: "Document Upload", desc: "Upload scanned copies of marksheets, ID proof, photographs, and other required documents." },
  { step: 3, title: "Application Fee", desc: "Pay the application fee of ₹500 through online payment gateway (UPI/Net Banking/Card)." },
  { step: 4, title: "Entrance Exam / Merit", desc: "Appear for the university entrance exam or admission based on merit list as applicable." },
  { step: 5, title: "Counselling", desc: "Attend the counselling session for seat allotment based on rank and preference." },
  { step: 6, title: "Fee Payment & Admission", desc: "Pay the semester fee and complete the admission formalities to confirm your seat." },
];

const fees = [
  { course: "B.Sc (All Subjects)", tuition: "₹25,000", hostel: "₹30,000", exam: "₹3,000", total: "₹58,000" },
  { course: "B.Sc / Biotech", tuition: "₹30,000", hostel: "₹30,000", exam: "₹3,000", total: "₹63,000" },
  { course: "B.Lib", tuition: "₹20,000", hostel: "₹30,000", exam: "₹3,000", total: "₹53,000" },
  { course: "M.Ed", tuition: "₹35,000", hostel: "₹30,000", exam: "₹3,000", total: "₹68,000" },
  { course: "D.El.Ed (BTC)", tuition: "₹25,000", hostel: "₹30,000", exam: "₹3,000", total: "₹58,000" },
  { course: "DPSC (NTT)", tuition: "₹20,000", hostel: "₹30,000", exam: "₹3,000", total: "₹53,000" },
];

const Admissions = () => {
  return (
    <div>
      <div className="page-banner">
        <h1>Admissions</h1>
        <p>Your Journey to Excellence Starts Here</p>
      </div>

      {/* Eligibility */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Eligibility Criteria</h2>
          </div>
          <p className="section-subtitle">Minimum qualifications required for various programs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibility.map((e, i) => (
              <div key={i} className="bg-card rounded-xl border p-5 shadow-sm">
                <h4 className="font-heading font-semibold text-primary mb-1">{e.course}</h4>
                <p className="text-sm text-muted-foreground">{e.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Admission Process</h2>
          </div>
          <p className="section-subtitle">Follow these simple steps to secure your admission</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="bg-card rounded-xl border p-6 shadow-sm relative">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg mb-3">
                  {s.step}
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-6 h-6 text-accent" />
            <h2 className="section-title !mb-0">Fee Structure (Per Semester)</h2>
          </div>
          <p className="section-subtitle">Transparent fee details for all programs</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] bg-card rounded-xl border shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 text-sm font-semibold">Course</th>
                  <th className="text-left p-4 text-sm font-semibold">Tuition Fee</th>
                  <th className="text-left p-4 text-sm font-semibold">Hostel Fee</th>
                  <th className="text-left p-4 text-sm font-semibold">Exam Fee</th>
                  <th className="text-left p-4 text-sm font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-b last:border-0`}>
                    <td className="p-4 text-sm font-medium text-foreground">{f.course}</td>
                    <td className="p-4 text-sm text-muted-foreground">{f.tuition}</td>
                    <td className="p-4 text-sm text-muted-foreground">{f.hostel}</td>
                    <td className="p-4 text-sm text-muted-foreground">{f.exam}</td>
                    <td className="p-4 text-sm font-semibold text-primary">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
