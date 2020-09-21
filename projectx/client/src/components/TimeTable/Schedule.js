import React, { useState, useContext, useEffect } from "react";
import { Mycontext } from "../../context/context";
import "./Schedule.css";

export default function Schedule(props) {
  const { timetable } = useContext(Mycontext);
  console.log(timetable);
  const subject = (sub) => {
    console.log(sub);
    if (sub.includes("LAB")) {
      return (
        <h4
          style={{
            fontSize: "20px",
            textAlign: "center",
            top: "3%",
            fontWeight: "bold",
          }}
        >
          {sub}
        </h4>
      );
    } else {
      return <h3>{sub}</h3>;
    }
  };
  const data = () => {
    //console.log("t= ", t);
    if (Object.keys(timetable).length < 1) {
      return <div></div>;
    } else {
      //console.log(t);
      return timetable
        .filter((day) => day.day === props.day)
        .map((day) => {
          console.log(day);
          if (
            day.subject === "nul" ||
            day.subject === "null" ||
            day.subject === null
          ) {
            return <div></div>;
          } else {
            return (
              <li className="event" data-date={day.time}>
                {subject(day.subject)}
                {/* <h3 >{day.subject}</h3> */}
                <p>{day.room}</p>
              </li>
            );
          }
        });
    }
  };

  return (
    <div id="content">
      <h1>{props.day.toUpperCase()}</h1>

      <ul className="timeline">{data()}</ul>
    </div>
  );
}
