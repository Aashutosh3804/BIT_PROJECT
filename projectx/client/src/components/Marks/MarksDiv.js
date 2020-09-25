import React from "react";
import MarksComp from "./MarksComponent";
export default function MarksDiv() {
  let marks = [40, 39, 36];
  return (
    <>
      <div style={{ width: "100vw" }}>
        <video
          className="routineVideoOthers"
          preload="auto"
          loop
          muted
          autoPlay
        >
          <source src="/NebulaRed.mp4" type="video/webm" />
        </video>
      </div>
      <div className="all-container">
        <div id="marksDivKaBaap">
          <MarksComp marks={marks} subject={"DAA"} />
          <MarksComp marks={marks} subject={"OOP"} />
          <MarksComp marks={marks} subject={"OS"} />
        </div>
      </div>
    </>
  );
}
