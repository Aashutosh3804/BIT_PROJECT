import React from "react";
import "./AttendanceDiv.css";
import AttenDCardComponent from "./AttenDCardComponent";
export default function AttendanceDiv() {
  return (
    <div id="attendanceDivKaBaap">
      <AttenDCardComponent subject={"DAA LAB"} present={12} total={18} />
      <AttenDCardComponent subject={"DAA"} present={17} total={18} />
      <AttenDCardComponent subject={"DAA"} present={12} total={18} />
      <AttenDCardComponent subject={"DAA"} present={12} total={18} />
    </div>
  );
}
