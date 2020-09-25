import React, { useContext, useEffect } from "react";
import { Mycontext } from "../../context/context";
import axios from "axios";
import "./Schedule.css";

export default function Schedule(props) {
  const { timetable, settimetable } = useContext(Mycontext);
  useEffect(() => {
    const res = async () => {
      const response = await axios.get("/timetable");

      settimetable(response.data);
    };
    if (Object.keys(timetable).length < 1) {
      console.log("time");
      res();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const subject = (sub) => {
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
    <div id="content" style={{ paddingTop: "2%" }}>
      <h1>{props.day.toUpperCase()}</h1>

      <ul className="timeline">{data()}</ul>
    </div>
  );
}
