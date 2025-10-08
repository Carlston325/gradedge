"use client";
import { useState } from "react";
import "../styles/cv-page.css";

export default function CVPage() {
  const [cvText, setCvText] = useState("");
  const [jobDesc, setJobDesc] = useState("");

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
          {/* Write CV */}
          <textarea
            id="cvUserInput"
            placeholder="Paste or write your CV here..."
            value={cvText}
            onChange={(e) => setCvText(e.target.value)}
          />
          {/* Upload CV */}
          <label>
            <span>Upload CV</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="small-text"
            />
          </label>
          {/* Btns: Improve & ATS */}
          <div>
            <button className="main-btn-style !w-full">Improve My CV</button>
            <button className="main-btn-style !w-full !text-white !bg-black  ">
              Run ATS Check
            </button>
          </div>
        </div>

        {/* Right Panel: Preview */}
        <div className="right-panel">
          <h2>Live Preview</h2>
          <div>
            {cvText ? (
              <pre className="whitespace-pre-wrap font-lato">{cvText}</pre>
            ) : (
              <p className="text-gray-400 italic">
                Your CV preview will appear here...
              </p>
            )}
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
