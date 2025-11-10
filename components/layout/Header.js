"use client";
import ShieldIcon from "@mui/icons-material/Shield";
// import bigLogo from "/big-logo.jpg";
import Link from "next/link";
import { useState } from "react";
import "@/components/layout/header.css";

export default function Header() {
  const bigLogo = "/logo/big-logo-no-bg.png";
  const [activeTab, setActiveTab] = useState("home");

  function handleClickedTab(tab) {
    setActiveTab(tab);
  }

  return (
    <header>
      <Link href={"/"} className="header-logo-container p-4 w-0">
        <img src={bigLogo} alt="website logo" className="header-logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={activeTab === "home" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("home");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cv"
              className={activeTab === "cv" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("cv");
              }}
            >
              Cv
            </Link>
          </li>
          <li>
            <Link
              href="/cover-letter"
              className={activeTab === "cover-letter" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("cover-letter");
              }}
            >
              Cover Letter
            </Link>
          </li>
          <li>
            <Link
              href="/online-assessment"
              className={activeTab === "ats-checker" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("ats-checker");
              }}
            >
              Online Assessment
            </Link>
          </li>
          {/* <li>
            <Link
              href="/features"
              className={activeTab === "features" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("features");
              }}
            >
              Features
            </Link>
          </li> */}
          <li>
            <Link
              href="/profile"
              className={activeTab === "profile" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("profile");
              }}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
