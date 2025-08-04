import Reviews from "./ui/Reviews";
import fetchReviewData from "./lib/FetchData";
import dotenv from "dotenv";
dotenv.config();

export default async function Home() {
  let reviewData = await fetchReviewData();
  const filteredReviews = reviewData.filter((data) => {
    return data.stars >= 3;
  });

  return (
    <main>
      {/* Hero */}
      <div className="hero">
        <h2>Hello, I am GRADEDGE</h2>
        <h3>But what matters is. Who</h3>
        <h1>You are .......!</h1>
      </div>
      {/* Reviews */}
      <Reviews data={filteredReviews} />
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
