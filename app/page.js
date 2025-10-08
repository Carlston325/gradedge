import "./styles/home.css";
import Hero from "./ui/Hero";
import Reviews from "./ui/Reviews";
import fetchReviewData from "./lib/FetchData";
import dotenv from "dotenv";
import Button from "./ui/button";
dotenv.config();

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
              <Button btnName="Create a CV" />
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
              <Button btnName="Create a Cover Letter" />
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
              <Button btnName="Get an ATS score" />
            </div>
          </div>
          <div className="feature-image-holders">
            <Button btnName="Contact Us" />
          </div>
        </div>
      </div>
    </main>
  );
}
