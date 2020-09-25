import React from "react";
import "./marks.Component.css";
export default function MarksComponent({ subject, marks }) {
  return (
    <div className="marks-container">
      <div className="subject-khali"></div>
      <div className="internal-h">I1</div>
      <div className="internal-h">I2</div>
      <div className="internal-l-h">I3</div>
      <div className="subject">{`${subject}`}</div>
      <div className="internal">{marks[0]}</div>
      <div className="internal">{marks[1]}</div>
      <div className="internal-l">{marks[2]}</div>
    </div>
  );
}
