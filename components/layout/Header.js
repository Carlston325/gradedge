"use client";
import ShieldIcon from "@mui/icons-material/Shield";
import Link from "next/link";
import { useState } from "react";
import "@/components/layout/header.css";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");

  function handleClickedTab(tab) {
    setActiveTab(tab);
  }

  return (
    <header>
      <Link href={"/"}>
        <h2>
          <span>
            <ShieldIcon />
          </span>
          gradedge
        </h2>
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
              href="/ats-checker"
              className={activeTab === "ats-checker" ? "active-tab" : null}
              onClick={() => {
                handleClickedTab("ats-checker");
              }}
            >
              ATS Checker
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
