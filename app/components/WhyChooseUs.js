"use client";
import { useRef } from "react";

const whyChooseUsData = [
  {
    title: "Outsmart the ATS",
    reason: `We don’t just “format” CVs — we engineer them to pass modern
      screens and surface the right keywords.`,
  },
  {
    title: "AI Speed! Human Polish",
    reason: `Draft in minutes with AI, then expert reviewers refine your voice
      so it sounds like you — only sharper.`,
  },
  {
    title: "Role-ready Cover Letters",
    reason: `Tailored to each job description with clear, credible stories
      hiring managers actually read.`,
  },
  {
    title: "Practice that Mirrors Employers",
    reason: `Numerical, verbal, and situational tests designed to feel like
      assessment day — so nothing surprises you.`,
  },
  {
    title: "Interview Coach in your Browser",
    reason: `Run realistic mock interviews and get specific, actionable
      feedback you can apply immediately.`,
  },
  {
    title: `From Blank Page to "SEND" — Fast`,
    reason: `Clean, student-first interface. No fluff. Create → Refine →
      Download in minutes.`,
  },
  {
    title: "Built for UK Jobseekers",
    reason: `Local tone, local expectations, employer-style standards. You
      focus on your story; we handle the rest.`,
  },
];

export default function WhyChooseUs() {
  const boxRefs = useRef([]);

  const shortTitles = [
    "Outsmart",
    "AI / Human Colab",
    "Ready",
    "Practice",
    "Coach",
    "Speed",
    "Job",
  ];

  // Expanded titles (your originals)
  const fullTitles = whyChooseUsData.map((d) => d.title);

  function handleHover(index, isHovering) {
    const el = boxRefs.current[index];
    if (el) {
      el.textContent = isHovering ? fullTitles[index] : shortTitles[index];
    }
  }

  return whyChooseUsData.map((d, index) => (
    <div
      className="reason-box"
      key={index}
      onMouseEnter={() => handleHover(index, true)}
      onMouseLeave={() => handleHover(index, false)}
    >
      <h3 ref={(el) => (boxRefs.current[index] = el)}>{shortTitles[index]}</h3>
      <p>{d.reason}</p>
    </div>
  ));
}
