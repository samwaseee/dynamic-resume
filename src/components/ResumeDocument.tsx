"use client";

import React, { forwardRef } from "react";
import { MasterResumeData } from "@/src/data/masterResume";
import { CheckSquare, Square } from "lucide-react";

interface ResumeDocumentProps {
  data: MasterResumeData;
}

export const ResumeDocument = forwardRef<HTMLDivElement, ResumeDocumentProps>(
  ({ data }, ref) => {
    
    return (
      <div
        ref={ref}
        className="w-[210mm] min-h-[297mm] bg-white text-gray-900 p-8 shadow-md print:shadow-none print:p-6 print:w-full font-sans text-xs leading-relaxed"
        style={{ boxSizing: "border-box" }}
      >
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-2 mb-3 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-950">{data.personalInfo.name}</h1>
          <p className="text-sm font-semibold text-gray-700 mt-1">{data.personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-x-3 text-[11px] text-gray-700 mt-1">
            <span>{data.personalInfo.phone}</span>
            <span>•</span>
            <span>{data.personalInfo.location}</span>
            <span>•</span>
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <a href={data.personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="font-medium hover:underline cursor-pointer text-gray-900">Portfolio</a>
            <span>•</span>
            <a href={data.personalInfo.githubUrl} target="_blank" rel="noreferrer" className="font-medium hover:underline cursor-pointer text-gray-900">Github</a>
            <span>•</span>
            <a href={data.personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="font-medium hover:underline cursor-pointer text-gray-900">Linkedin</a>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 bg-gray-200 px-2 py-0.5 mb-2">
            Profile
          </h2>
          <p className="text-[11px] text-gray-800 text-justify leading-snug px-2">
            {data.profileSummary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 bg-gray-200 px-2 py-0.5 mb-2">
            Skills
          </h2>
          <div className="px-2 space-y-1 text-[11px]">
            {data.skills.expertise.length > 0 && (
              <div><span className="font-bold w-24 inline-block">Expertise</span><span className="font-medium text-gray-700">• {data.skills.expertise.join(" • ")}</span></div>
            )}
            {data.skills.comfortable.length > 0 && (
              <div><span className="font-bold w-24 inline-block">Comfortable</span><span className="font-medium text-gray-700">• {data.skills.comfortable.join(" • ")}</span></div>
            )}
            {data.skills.familiar.length > 0 && (
              <div><span className="font-bold w-24 inline-block">Familiar</span><span className="font-medium text-gray-700">• {data.skills.familiar.join(" • ")}</span></div>
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 bg-gray-200 px-2 py-0.5 mb-2">
            Projects
          </h2>
          <div className="px-2 space-y-3">
            {data.allProjects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 text-[13px]">{project.title}</span>
                    <div className="flex items-center gap-3 text-[10px] text-gray-700">
                      <span className="flex items-center gap-1">{project.links.live ? <CheckSquare size={10} /> : <Square size={10}/>} Live site</span>
                      <span className="flex items-center gap-1">{project.links.frontend ? <CheckSquare size={10} /> : <Square size={10}/>} Frontend</span>
                      <span className="flex items-center gap-1">{project.links.backend ? <CheckSquare size={10} /> : <Square size={10}/>} Backend</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-[11px] mb-1">{project.subtitle}</p>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-0.5 leading-snug">
                  {project.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                {project.technologies && (
                  <p className="text-[10px] text-gray-700 mt-1">
                    <span className="font-bold">Technologies: </span>{project.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 bg-gray-200 px-2 py-0.5 mb-2">
            Education
          </h2>
          <div className="px-2 flex justify-between items-start">
            <div>
              <p className="font-bold text-[12px] text-gray-900">{data.education.degree}</p>
              <p className="text-[11px] text-gray-800">{data.education.institution}</p>
              <p className="text-[11px] text-gray-700 mt-0.5">CGPA: {data.education.cgpa}</p>
            </div>
            <span className="text-[11px] text-gray-700">{data.education.duration}</span>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 bg-gray-200 px-2 py-0.5 mb-2">
            Publications
          </h2>
          <ul className="px-2 list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-1.5 leading-snug">
            {data.publications.map((pub, idx) => (
              <li key={idx}>
                {pub.authors}, "{pub.title}," <span className="italic">{pub.venue}</span>. DOI: {pub.doi}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
);

ResumeDocument.displayName = "ResumeDocument";