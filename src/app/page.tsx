"use client";

import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { masterResume, Project } from "@/src/data/masterResume";
import { ResumeDocument } from "@/src/components/ResumeDocument";
import { Sparkles, Printer, Loader2 } from "lucide-react";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSkills, setActiveSkills] = useState<string[]>(masterResume.allTechnicalSkills);
  const [activeSoftSkills, setActiveSoftSkills] = useState<string[]>(masterResume.allSoftSkills);
  const [activeProjects, setActiveProjects] = useState<Project[]>(masterResume.allProjects);

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Samiur_Rahman_Wasi_Resume",
  });

  const handleTailor = async () => {
    if (!jobDescription.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });

      const data = await res.json();

      if (data.selectedSkills) setActiveSkills(data.selectedSkills);
      if (data.selectedSoftSkills) setActiveSoftSkills(data.selectedSoftSkills);
      if (data.selectedProjectIds) {
        const filtered = masterResume.allProjects.filter((p) =>
          data.selectedProjectIds.includes(p.id)
        );
        setActiveProjects(filtered.length > 0 ? filtered : masterResume.allProjects);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      {/* Control Panel */}
      <div className="w-full lg:w-1/3 p-6 flex flex-col gap-4 border-r border-slate-200 bg-white">
        <h1 className="text-xl font-bold text-slate-800">Dynamic Resume Tailorer</h1>
        <p className="text-xs text-slate-500">
          Paste the target job description below. The AI model will prioritize the most relevant skills and projects.
        </p>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste Job Description / Requirements here..."
          className="w-full flex-1 min-h-[220px] p-3 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2">
          <button
            onClick={handleTailor}
            disabled={loading || !jobDescription.trim()}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 px-4 rounded-lg disabled:opacity-50 transition"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Tailor Resume
          </button>
          <button
            onClick={() => handlePrint()}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium py-2.5 px-4 rounded-lg transition"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Live Resume Preview */}
      <div className="flex-1 p-6 flex justify-center items-start overflow-y-auto max-h-screen">
        <ResumeDocument
          ref={printRef}
          data={masterResume}
          activeSkills={activeSkills}
          activeSoftSkills={activeSoftSkills}
          activeProjects={activeProjects}
        />
      </div>
    </main>
  );
}