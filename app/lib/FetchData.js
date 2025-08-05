import pool from "./db.js";

async function fetchReviewData() {
  const reviews = await pool.connect();

  try {
    const result = await reviews.query(
      "SELECT * FROM gradedge_review WHERE stars >= 3"
    );

    return result.rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    reviews.release();
  }
}

export default fetchReviewData;
