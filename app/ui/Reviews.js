"use client";
import { useRef, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewCard from "./ReviewCard";

export default function Reviews(props) {
  const reviews = props.data;
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  async function scrollReviews(direction) {
    const review = await containerRef.current;
    const scrollAmount = review.offsetWidth;

    if (direction === "left") {
      review.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      review.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const review = containerRef.current;
    const scrollAmount = review.offsetWidth;

    const reviewInterval = setInterval(() => {
      const isAtEnd =
        review.scrollLeft + review.offsetWidth >= review.scrollWidth;

      if (isAtEnd) {
        review.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        review.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 15000);

    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <div className="review-section">
      <div
        className="arrow-btn-container"
        onClick={() => scrollReviews("left")}
      >
        <ArrowBackIcon className="arrow-btn back-arrow" />
      </div>
      <div className="review-container" ref={containerRef}>
        {reviews.map((data, index) => {
          return (
            <ReviewCard
              ref={cardRef}
              key={index}
              name={data.name}
              stars={data.stars}
              review={data.review}
            />
          );
        })}
      </div>
      <div
        className="arrow-btn-container"
        onClick={() => scrollReviews("right")}
      >
        <ArrowForwardIcon className="arrow-btn forward-arrow" />
      </div>
    </div>
  );
}
