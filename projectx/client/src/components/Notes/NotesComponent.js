import React from "react";
import "./NotesComponent.css";

export default function NotesCardComponent({ subjectName, imgurl }) {
  return (
    <div
      class='ui card'
      id='uiCard'
      style={{
        boxShadow: " 0 10px 18px rgba(0,0,0,0.3), 0 10px 18px rgba(0,0,0,0.3)",
        borderRadius: "15px",
        background: "black",
      }}
    >
      <div class='image'>
        <img src={imgurl}></img>
      </div>
      <div class='contentNotes'>
        <span class='subName' style={{ color: "white" }}>
          <b>{subjectName}</b>
        </span>
      </div>
      <div class='extra content' id='modulesBar'>
        <a>M1</a>
        <a>&nbsp; &nbsp; &nbsp; M2</a>
        <a>&nbsp; &nbsp; &nbsp; M3</a>
        <a>&nbsp; &nbsp; &nbsp; M4</a>
        <a>&nbsp; &nbsp; &nbsp; M5</a>
      </div>
    </div>
  );
}
