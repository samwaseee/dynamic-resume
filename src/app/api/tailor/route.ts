import { NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import { masterResume } from "../../../data/masterResume";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { jobDescription } = await req.json();

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 });
    }

    const prompt = `
You are an expert ATS resume optimizer.
Given a job description and a candidate's master profile, select the most relevant technical skills, soft skills, and top 2-3 projects that best match the job requirements.

Candidate Master Skills:
${JSON.stringify(masterResume.allTechnicalSkills)}

Candidate Soft Skills:
${JSON.stringify(masterResume.allSoftSkills)}

Candidate Available Projects (IDs and Tech stacks):
${JSON.stringify(masterResume.allProjects.map(p => ({ id: p.id, title: p.title, technologies: p.technologies })))}

Target Job Description:
${jobDescription}

Return a strictly formatted JSON object with:
1. "selectedSkills": An ordered array of relevant technical skills from the master list.
2. "selectedSoftSkills": An array of matching soft skills.
3. "selectedProjectIds": An array of project IDs in order of relevance (maximum 3).
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            selectedSkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            selectedSoftSkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            selectedProjectIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["selectedSkills", "selectedSoftSkills", "selectedProjectIds"]
        }
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Tailoring error:", error);
    return NextResponse.json({ error: "Failed to process job description" }, { status: 500 });
  }
}