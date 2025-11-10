"use client";
import { useState, useEffect } from "react";
import "@/app/cv/cv-page.css";
import DefaultCV, { CvTemplateOne } from "@/app/cv/components/CvTemplates";
import Alert from "@/components/ui/Alert";

export default function CVPage() {
  const [showAlert, setShowAlert] = useState("none");

  // CV Input States

  //Basic Info States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");

  // Skill States
  const [addedSkill, setAddedSkill] = useState(false);
  const [skills, setSkills] = useState([]);
  const [enterNewSkill, setEnterNewSkill] = useState("");

  function addSkill(newSkill) {
    setSkills((prevSkills) => {
      if (prevSkills.includes(newSkill)) {
        console.log(prevSkills);
        setShowAlert("block");

        return prevSkills;
      } else {
        const allSkills = [...prevSkills];
        if (allSkills.length === 0) {
          return [newSkill];
        } else {
          return [...prevSkills, newSkill];
        }
      }
    });

    setAddedSkill(true);
    setEnterNewSkill("");
  }

  // Work Experience states
  const [workExperience, setWorkExperience] = useState("");

  // Education states
  const [education, setEducation] = useState("");

  const [cvPreview, setCvPreview] = useState("");
  const [previewEnabled, setPreviewEnabled] = useState(false);

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

  return (
    <main>
      <Alert
        message="Skill already added"
        display={showAlert}
        closeAlert={() => setShowAlert("none")}
      />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="number">Phone Number</label>
            <input
              id="number"
              type="number"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Summary */}
          <div className="input-group">
            <label htmlFor="summary">
              Professional Summary
              <button
                className="main-btn-style !ml-3"
                onClick={() => {
                  addSkill(enterNewSkill);
                }}
              >
                Ai
              </button>
            </label>
            <textarea
              className=" min-h-30 border-1 p-2 rounded-md"
              id="summary"
              placeholder="Write a short summary..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          {/* Skills */}
          <div className="input-group">
            <label htmlFor="skills">Skills</label>
            {addedSkill ? <p>{skills.join(", ")}</p> : null}
            <input
              id="skills"
              type="text"
              placeholder="e.g. Communication, Hard-working, Confident"
              value={enterNewSkill}
              onChange={(e) => setEnterNewSkill(e.target.value)}
            />

            <button
              className="main-btn-style"
              onClick={() => {
                addSkill(enterNewSkill);
              }}
            >
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
