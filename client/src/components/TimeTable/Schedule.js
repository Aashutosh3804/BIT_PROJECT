import React, { useState, useContext, useEffect } from "react";
import Mycontext from "../../Global/context";
import "./Schedule.css";

export default function Schedule(props) {
  const time = useContext(Mycontext);
  //console.log(time);
  const [t, sett] = useState(time);

  useEffect(() => {
    sett(time);
  }, [time]);
  //console.log(t);
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
    if (Object.keys(t).length < 1) {
      return <div></div>;
    } else {
      //console.log(t);
      return t
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

      <ul className="timeline"> {data()}</ul>
    </div>
  );
}
