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

// const fetchReviewData = ()=>{
//   return (
//     [
//       {
//         id:0,
//         name:"Samantha R.",
//         review:"Absolutely loved it! The service was top-notch and the product quality exceeded my expectations. Will definitely be coming back again.",
//         stars:5,
//       },
//       {
//         id:1,
//         name:"Jake M.",
//         review:"The experience was okay, but not great. Delivery was late and the item didn’t match the description. Customer support was polite but slow.",
//         stars:2,
//       },
//       {
//         id:2,
//         name:"Priya K.",
//         review:"Great overall! A few minor issues with setup, but once I got it working, it was smooth sailing. Would recommend to others.",
//         stars:4,
//       },
//       {
//         id:3,
//         name:"David L.",
//         review:"Really disappointed. The product broke within a week, and I couldn’t get a refund. Not worth the money.",
//         stars:1,
//       },
//       {
//         id:4,
//         name:"Elena G.",
//         review:"Fantastic experience from start to finish. Easy ordering process, super friendly team, and everything arrived perfectly packaged. Highly recommend!",
//         stars:5,
//       }
//     ]
//   );
// }

export default fetchReviewData;
