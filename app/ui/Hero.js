"use client";
import { useEffect, useState } from "react";

export default function Hero(props) {
  const [heroImgSrc, setHeroImgSrc] = useState("/cv-image.jpg");
  const [heroImgeAlt, setHeroImgAlt] = useState("A sample CV image");

  useEffect(() => {
    const objOne = document.querySelector(".obj-1");
    const objTwo = document.querySelector(".obj-2");
    const objThree = document.querySelectorAll(".obj-3");

    setInterval(() => {
      function checkClass() {
        if (objOne.className.includes("bold")) {
          return 2;
        } else if (objTwo.className.includes("bold")) {
          return 3;
        } else {
          return 1;
        }
      }

      switch (checkClass()) {
        case 1:
          objOne.className = "obj-1 bold";
          objTwo.className = "obj-2";
          objThree.forEach((obj) => (obj.className = "obj-3"));

          setHeroImgSrc("/cv-image.jpg");
          setHeroImgAlt("A sample CV image");
          break;

        case 2:
          objOne.className = "obj-1";
          objTwo.className = "obj-2 bold";
          objThree.forEach((obj) => (obj.className = "obj-3"));

          setHeroImgSrc("/cover-letter-image.png");
          setHeroImgAlt("A sample Cover Letter image");
          break;

        case 3:
          objOne.className = "obj-1";
          objTwo.className = "obj-2";
          objThree.forEach((obj) => (obj.className = "obj-3 bold"));

          setHeroImgSrc("/ats-checker-image.png");
          setHeroImgAlt("A sample ATS checker image");
          break;

        default:
          break;
      }
    }, 8000);
  }, []);

  return (
    <div className="hero">
      <div className="hero-title">
        <h2>Hello, I am GRADEDGE</h2>
        <h3>But what matters is.</h3>
        <h1 className="title">Who Are You ______</h1>
      </div>
      <div className="hero-description">
        <p>
          I am a useful tool to help you create a professional{" "}
          <span className="obj-1 bold">CV</span>,{" "}
          <span className="obj-2"> Cover Letter</span>, and ATS-friendly
          documents. I also provide an{" "}
          <span className="obj-3">ATS Checker</span> to ensure your documents
          pass through <span className="obj-3">Applicant Tracking Systems</span>
          .
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImgSrc} alt={heroImgeAlt} />
      </div>
    </div>
  );
}
