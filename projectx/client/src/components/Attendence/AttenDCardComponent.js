import React from "react";
import "./AttenDCardCom.css";
export default function AttenDCardComponent({ present, total, subject }) {
  let percentage = Math.round((present / total) * 100);
  let hasLab = false;
  if (subject.includes("LAB")) {
    console.log(subject.toLowerCase());
    hasLab = true;
  }
  let suggestion = "ooh perfect buddy,  you got that 75%";
  if (percentage < 75) {
    let remainingClass = 4 * (0.75 * total - present);
    suggestion = `oh no!! you need to attend ${remainingClass} more classes to get 75%`;
  }
  return (
    <div className="att1">
      <div className="upper">
        <div
          id="subject1"
          className={hasLab ? "lab" : null}
        >{`${subject}`}</div>

        <div id="attendence1">{`${percentage}`}%</div>
      </div>
      <div
        id="suggestion"
        style={{ color: percentage < 75 ? "orangered" : "cyan" }}
      >
        {suggestion}
      </div>
    </div>
  );
}
