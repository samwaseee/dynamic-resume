"use client";

import React, { forwardRef } from "react";
import { MasterResumeData, Project } from "@/src/data/masterResume";

interface ResumeDocumentProps {
  data: MasterResumeData;
  activeSkills: string[];
  activeSoftSkills: string[];
  activeProjects: Project[];
}

export const ResumeDocument = forwardRef<HTMLDivElement, ResumeDocumentProps>(
  ({ data, activeSkills, activeSoftSkills, activeProjects }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[210mm] min-h-[297mm] bg-white text-gray-900 p-8 shadow-md print:shadow-none print:p-6 print:w-full font-sans text-xs leading-relaxed"
        style={{ boxSizing: "border-box" }}
      >
        {/* Header */}
        <header className="border-b pb-2 mb-3">
          <h1 className="text-2xl font-bold tracking-tight text-gray-950">{data.personalInfo.name}</h1>
          <p className="text-sm font-semibold text-gray-700">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-x-3 text-[11px] text-gray-600 mt-1">
            <span>{data.personalInfo.phone}</span>
            <span>•</span>
            <span>{data.personalInfo.location}</span>
            <span>•</span>
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span className="text-blue-600 font-medium">Portfolio</span>
            <span>•</span>
            <span className="text-blue-600 font-medium">Github</span>
            <span>•</span>
            <span className="text-blue-600 font-medium">Linkedin</span>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-1">
            Profile
          </h2>
          <p className="text-[11px] text-gray-700 text-justify">{data.profileSummary}</p>
        </section>

        {/* Skills */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-1">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-x-4 text-[11px]">
            <div>
              <span className="font-semibold">Technical: </span>
              <span>{activeSkills.join(" • ")}</span>
            </div>
            <div>
              <span className="font-semibold">Soft Skills: </span>
              <span>{activeSoftSkills.join(" • ")}</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
            Projects
          </h2>
          <div className="space-y-2.5">
            {activeProjects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-baseline">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-gray-900 text-[11.5px]">{project.title}</span>
                    <span className="text-gray-600 italic text-[11px]">- {project.subtitle}</span>
                  </div>
                  <div className="flex gap-2 text-[10px] text-blue-600 font-medium">
                    <span>Live Website</span>
                    <span>•</span>
                    <span>Frontend Repo</span>
                    <span>•</span>
                    <span>Backend Repo</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-[11px] text-gray-700 space-y-0.5 mt-0.5">
                  {project.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <p className="text-[10px] text-gray-600 mt-0.5">
                  <span className="font-semibold">Technologies: </span>
                  {project.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Language */}
        <div className="grid grid-cols-3 gap-4 border-t border-gray-300 pt-2">
          <section className="col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">Education</h2>
            <p className="font-semibold text-[11px] text-gray-900">{data.education.degree}</p>
            <p className="text-[11px] text-gray-700">{data.education.institution}</p>
            <div className="flex justify-between text-[10px] text-gray-500 mt-0.5">
              <span>CGPA: {data.education.cgpa}</span>
              <span>{data.education.duration}</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">Language</h2>
            <div className="text-[11px] text-gray-700 space-y-0.5">
              {data.languages.map((l) => (
                <div key={l.name} className="flex justify-between">
                  <span>{l.name}:</span>
                  <span className="text-gray-500">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
);

ResumeDocument.displayName = "ResumeDocument";