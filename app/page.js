import "./styles/home.css";
import Hero from "./ui/Hero";
import Reviews from "./ui/Reviews";
import fetchReviewData from "./lib/FetchData";
import dotenv from "dotenv";
dotenv.config();

export default async function Home() {
  //Fetch review data
  let reviewData = await fetchReviewData();

  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* About */}
      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          JobEdge is a modern career platform that helps UK students and recent
          graduates land interviews faster. Build an ATS-friendly CV for free,
          generate tailored cover letters, practise real employer-style tests,
          and get confident with virtual interview training — all in one place.{" "}
        </p>
        <h3>Our Mission</h3>
        <p>
          Provide every graduate a fair edge with clear guidance, credible
          results, and confidence when it counts.
        </p>
        <button className="main-btn-style">Learn More</button>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us-section">
        <h2>Why Choose Us</h2>
        <div className="reason-container">
          <div className="reason-box">
            <h3>Outsmart the ATS</h3>
            <p>
              We don’t just “format” CVs — we engineer them to pass modern
              screens and surface the right keywords.
            </p>
          </div>
          <div className="reason-box">
            <h3>Ai Spped! Human Polish</h3>
            <p>
              Draft in minutes with AI, then expert reviewers refine your voice
              so it sounds like you — only sharper.
            </p>
          </div>
          <div className="reason-box">
            <h3>Role-ready Cover Letters</h3>
            <p>
              Tailored to each job description with clear, credible stories
              hiring managers actually read.
            </p>
          </div>
          <div className="reason-box">
            <h3>Practice that Mirrors Employers</h3>
            <p>
              Numerical, verbal, and situational tests designed to feel like
              assessment day — so nothing surprises you.
            </p>
          </div>
          <div className="reason-box">
            <h3>Interview Coach in your Browser</h3>
            <p>
              Run realistic mock interviews and get specific, actionable
              feedback you can apply immediately.
            </p>
          </div>
          <div className="reason-box">
            <h3>From Blank Page to "SEND" - Fast</h3>
            <p>
              Clean, student-first interface. No fluff. Create → Refine →
              Download in minutes.
            </p>
          </div>
          <div className="reason-box">
            <h3>Built for UK Jobseekers</h3>
            <p>
              Local tone, local expectations, employer-style standards. You
              focus on your story; we handle the rest.
            </p>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="review-section">
        <h2>Testimonials </h2>
        <Reviews data={reviewData} />
      </div>
      {/* Features */}
      <div className="feature-section mx-auto">
        <h2>Scroll to find out everything we offer</h2>
        <div>
          <div className="feature-container">
            <div className="feature-box">
              <h3>CV</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at risus a sem lacinia feugiat.
              </p>
              <p>
                Sed consequat varius neque, bibendum gravida velit. Curabitur
                mollis sem eu dictum sagittis. Sed et erat sagittis massa
                egestas tincidunt ut at nisi. Cras quis urna ac purus aliquam
                scelerisque.
              </p>
              <p>
                Mauris dignissim nulla ut neque pretium, nec bibendum nunc
                varius. Cras at egestas quam, quis fringilla dui.
              </p>
              <button className="main-btn-style">Create a CV</button>
            </div>
            <div className="feature-box">
              <h3>Cover Letter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at risus a sem lacinia feugiat.
              </p>
              <p>
                Sed consequat varius neque, bibendum gravida velit. Curabitur
                mollis sem eu dictum sagittis. Sed et erat sagittis massa
                egestas tincidunt ut at nisi. Cras quis urna ac purus aliquam
                scelerisque.
              </p>
              <p>
                Mauris dignissim nulla ut neque pretium, nec bibendum nunc
                varius. Cras at egestas quam, quis fringilla dui.
              </p>

              <button className="main-btn-style">Create a Cover Letter</button>
            </div>
            <div className="feature-box">
              <h3>ATS Checker</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at risus a sem lacinia feugiat.
              </p>
              <p>
                Sed consequat varius neque, bibendum gravida velit. Curabitur
                mollis sem eu dictum sagittis. Sed et erat sagittis massa
                egestas tincidunt ut at nisi. Cras quis urna ac purus aliquam
                scelerisque.
              </p>
              <p>
                Mauris dignissim nulla ut neque pretium, nec bibendum nunc
                varius. Cras at egestas quam, quis fringilla dui.
              </p>
              <button className="main-btn-style">Get an ATS score</button>
            </div>
          </div>
          <div className="feature-image-holders">
            <button className="main-btn-style">Contact Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}
