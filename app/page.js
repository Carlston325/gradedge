import "./styles/home.css";
import Hero from "./ui/Hero";
import Reviews from "./ui/Reviews";
import fetchReviewData from "./lib/FetchData";
import dotenv from "dotenv";
dotenv.config();
// import cvImage from "/cv-image.png"


export default async function Home() {
  //Fetch review data
  let reviewData = await fetchReviewData();

  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* Reviews */}
      <Reviews data={reviewData} />
      {/* Features */}
      <div className="feature-container">
        <div>Contact Us</div>
        <div>CV</div>
        <div>Cover Letter</div>
        <div>ATS Checker</div>
      </div>
    </main>
  );
}
