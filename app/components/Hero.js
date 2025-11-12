"use client";
import { useEffect, useState, useRef } from "react";
import { firstName, Gender } from "full-name-generator";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function Hero() {
  // Description
  useEffect(() => {
    const objOne = document.querySelector(".obj-1");
    const objTwo = document.querySelector(".obj-2");
    const objThree = document.querySelectorAll(".obj-3");

    setInterval(() => {
      function checkClass() {
        if (objOne.className.includes("font-bold")) {
          return 2;
        } else if (objTwo.className.includes("font-bold")) {
          return 3;
        } else {
          return 1;
        }
      }

      switch (checkClass()) {
        case 1:
          objOne.className = "obj-1 font-bold";
          objTwo.className = "obj-2";
          objThree.forEach((obj) => (obj.className = "obj-3"));

          objOne.style.color = "var(--gold)";
          objTwo.style.color = "var(--text-light)";
          objThree.forEach((obj) => (obj.style.color = "var(--text-light)"));
          break;

        case 2:
          objOne.className = "obj-1";
          objTwo.className = "obj-2 font-bold";
          objThree.forEach((obj) => (obj.className = "obj-3"));

          objOne.style.color = "var(--text-light)";
          objTwo.style.color = "var(--gold)";
          objThree.forEach((obj) => (obj.style.color = "var(--text-light)"));
          break;

        case 3:
          objOne.className = "obj-1";
          objTwo.className = "obj-2";
          objThree.forEach((obj) => (obj.className = "obj-3 font-bold"));

          objOne.style.color = "var(--text-light)";
          objTwo.style.color = "var(--text-light)";
          objThree.forEach((obj) => (obj.style.color = "var(--gold)"));
          break;

        default:
          break;
      }
    }, 8000);
  }, []);

  // Video
  const [volumeIsOff, setVolumeIsOff] = useState(false);

  function handleAudio(trigger) {
    setVolumeIsOff(trigger);
  }

  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef();

  function handleVideoToggle(trigger) {
    setPlayVideo(trigger);
    if (trigger) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.muted === false) {
        videoRef.current.muted = "true";

        handleVideoToggle(false);
        handleAudio(true);
      }
      console.log(videoRef.current.muted);
    }
  }, []);

  //Title
  const getName = firstName("GB", Gender.Male);
  const [placeholder, setPlaceholder] = useState("_______");

  useEffect(() => {
    const interval = setInterval(() => {
      if (placeholder !== "_______") {
        setPlaceholder("_______");
      } else {
        setPlaceholder(getName);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [placeholder]);

  return (
    <div className="hero">
      <div className="hero-title">
        <h2>
          Hello, I am <span>JobEdge</span>
        </h2>
        <h3>But what matters is.</h3>
        <h1 className="title">Who Are You {/* <span>_______</span> */}</h1>
        <label htmlFor="user-name-input">
          <input
            id="user-name-input"
            type="text"
            placeholder={placeholder}
          ></input>
        </label>
      </div>
      <div className="hero-video">
        <video
          ref={videoRef}
          type="video/mp4"
          src="/videos/ai-interview-coach.mp4"
          preload="auto"
          loop
          autoPlay
          playsInline
          muted={volumeIsOff}
        ></video>

        {volumeIsOff ? (
          <VolumeOffIcon
            onClick={() => handleAudio(false)}
            className="text-white/20 cursor-pointer"
          />
        ) : (
          <VolumeUpIcon
            onClick={() => handleAudio(true)}
            className="text-white/50 cursor-pointer"
          />
        )}
        {playVideo ? (
          <PauseIcon
            onClick={() => handleVideoToggle(false)}
            className="text-white/50 cursor-pointer"
          />
        ) : (
          <PlayArrowIcon
            onClick={() => {
              handleVideoToggle(true);
              handleAudio(false);
            }}
            className="text-white/50 cursor-pointer"
          />
        )}
      </div>
      <div className="hero-description">
        <p>
          I am a useful tool to help you create a professional{" "}
          <span className="obj-1 font-bold" style={{ color: "var(--gold)" }}>
            CV
          </span>
          , <span className="obj-2"> Cover Letter</span>, and ATS-friendly
          documents. I also provide an{" "}
          <span className="obj-3">ATS Checker</span> to ensure your documents
          pass through <span className="obj-3">Applicant Tracking Systems</span>
          .
        </p>
      </div>
    </div>
  );
}
