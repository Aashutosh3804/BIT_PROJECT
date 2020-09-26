import React from "react";
import "./AttendanceDiv.css";
import AttenDCardComponent from "./AttenDCardComponent";
import "../Home/bgvideo.css";
export default function AttendanceDiv() {
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
        <div id="attendanceDivKaBaap">
          <AttenDCardComponent subject={"DAA LAB"} present={12} total={18} />
          <AttenDCardComponent subject={"DAA"} present={17} total={18} />
          <AttenDCardComponent subject={"OS"} present={12} total={18} />
          <AttenDCardComponent subject={"CO"} present={12} total={18} />
        </div>
      </div>
    </>
  );
}
