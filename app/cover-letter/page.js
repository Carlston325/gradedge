"use client";
import { useState } from "react";

export default function CVPage() {
  const [CoverLetterText, setCoverLetterTextText] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  return (
    <main>
      {/* Hero Section */}
      <div className="hero">
        <h1>Evolve your Cover Letter</h1>
        <p>AI-powered help creating your cover letter according to your job</p>
      </div>

      {/* Main Section: Editor + Preview */}
      <div className="editor">
        {/* Left Panel: Input  */}
        <div className="left-panel">
          <h2>Write your cover letter</h2>
          {/* Write Cover Letter */}
          <textarea
            id="cvUserInput"
            placeholder="Paste or write your Cover Letter here..."
            value={CoverLetterText}
            onChange={(e) => setCoverLetterTextText(e.target.value)}
          />
          {/* Upload Cover Letter */}
          <label>
            <span>Upload Cover Letter</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="small-text"
            />
          </label>
          {/* Btns: Improve & ATS */}
          <div>
            <button className="main-btn-style !w-full">
              Improve My Cover Letter
            </button>
          </div>
        </div>

        {/* Right Panel: Preview */}
        <div className="right-panel">
          <h2>Live Preview</h2>
          <div>
            {CoverLetterText ? (
              <pre>{CoverLetterText}</pre>
            ) : (
              <p className="text-gray-400 italic">
                Your Cover Letter preview will appear here...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ATS Check Section */}
      <div className="ats-section">
        <h2 className="text-xl font-semibold">Tailor Cover Letter to Job</h2>
        <textarea
          placeholder="Paste the job description here..."
          className="w-full h-40 p-3 border rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
        <button className="main-btn-style  mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
          Match Cover Letter to Job
        </button>
      </div>
    </main>
  );
}
