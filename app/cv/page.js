"use client";
import { useState, useEffect } from "react";
import "../styles/cv-page.css";
import DefaultCV, { CvTemplateOne } from "../ui/CvTemplates";

export default function CVPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([""]);
  const [workExperience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");

  const [cvPreview, setCvPreview] = useState("");
  const [previewEnabled, setPreviewEnabled] = useState(false);

  // add more inputs for skills
  const [addedSkill, setAddedSkill] = useState(false);
  const [skillArray, setSkillArray] = useState([]);
  function addSkill() {
    setAddedSkill(true);

    setSkills(...skills, skillArray);
  }

  function submitCv() {
    const fullCVData = {
      name,
      email,
      number,
      location,
      summary,
      skills,
      workExperience,
      education,
    };

    setCvPreview(fullCVData);
    setPreviewEnabled(true);
  }

  useEffect(() => {
    if (previewEnabled) {
      setCvPreview({
        name,
        email,
        number,
        location,
        summary,
        skills,
        workExperience,
        education,
      });
    }
  }, [
    name,
    email,
    number,
    location,
    summary,
    skills,
    workExperience,
    education,
  ]);

  const [jobDesc, setJobDesc] = useState("");

  console.log(cvPreview);

  return (
    <main>
      {/* Hero Section */}
      <div className="hero">
        <h1>Build Your Job-Ready CV</h1>
        <p>AI-powered CV builder and ATS checker for graduates</p>
      </div>

      {/* Main Section: Editor + Preview */}
      <div className="editor">
        {/* Left Panel: Input  */}
        <div className="left-panel">
          <h2>Enter CV Details</h2>

          {/* Basic Info */}
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="number">Phone Number</label>
            <input
              id="number"
              type="number"
              placeholder="Enter your number"
              value={name}
              onChange={(e) => setNumber(e.target.value)}
            />

            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="location"
              placeholder="Enter your location"
              value={name}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Summary */}
          <div className="input-group">
            <label htmlFor="summary">Professional Summary</label>
            <textarea
              id="summary"
              placeholder="Write a short summary..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          {/* Skills */}
          <div className="input-group">
            <label htmlFor="skills">Skills</label>
            {addedSkill ? <p>{skills}</p> : null}
            <input
              id="skills"
              type="text"
              placeholder="e.g. Communication, Hard-working, Confident"
              value={skills}
              onChange={(e) => setSkillArray(e.target.value)}
            />

            <button className="main-btn-style" onClick={addSkill}>
              Add Skill
            </button>
          </div>

          {/* Work Experience*/}
          <div className="input-group">
            <label htmlFor="cvUserInput">Work Experience</label>
            <textarea
              id="workExperience"
              placeholder="Enter work experience..."
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
            />
          </div>

          {/* Education */}
          <div className="input-group">
            <label htmlFor="skills">Education</label>
            <input
              id="education"
              type="text"
              placeholder="e.g. Your Schools/Colleges/Universities"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          {/* Upload CV */}
          <div className="input-group">
            <label>
              <span>Upload CV</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="small-text"
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="btn-group">
            <button className="main-btn-style !w-full" onClick={submitCv}>
              Improve My CV
            </button>
            <button className="secondary-btn-style !w-full">
              Run ATS Check
            </button>
          </div>
        </div>

        {/* Right Panel: Preview */}
        <div className="right-panel">
          <h2>Live Preview</h2>
          <div>
            {cvPreview ? <CvTemplateOne data={cvPreview} /> : <DefaultCV />}
          </div>
        </div>
      </div>

      {/* ATS Check Section */}
      <div className="ats-section">
        <h2 className="text-xl font-semibold">Tailor CV to Job</h2>
        <textarea
          placeholder="Paste the job description here..."
          className="w-full h-40 p-3 border rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
        <button className="main-btn-style  mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
          Match CV to Job
        </button>
      </div>
    </main>
  );
}
