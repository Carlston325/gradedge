"use client";
import WhyChooseUsData from "@/lib/WhyChooseUsData";
let chooseUsData = WhyChooseUsData();

export default function WhyChooseUs() {
  return chooseUsData.map((data, index) => {
    return (
      <div className="reason-box" id={"reasonBox" + index} key={index}>
        <h3>{data.title}</h3>
        <p>{data.reason}</p>
      </div>
    );
  });
}
