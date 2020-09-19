import React, { useState, useContext, useEffect } from "react";
import Mycontext from "../../Global/context";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Badge } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routine() {
  const time = useContext(Mycontext);
  const [t, sett] = useState(time);
  useEffect(() => {
    sett(time);
  }, [time]);
  console.log(t);

  const today = new Date();
  // const currenttime = today.getHours();
  //const currenttime = "9";
  var currentday = "monday";
  const currentdaynum = today.getUTCDay();
  if (currentdaynum == 0) {
    currentday = "sunday";
  }
  if (currentdaynum == 1) {
    currentday = "monday";
  }
  if (currentdaynum == 2) {
    currentday = "tuesday";
  }
  if (currentdaynum == 3) {
    currentday = "wednesday";
  }
  if (currentdaynum == 4) {
    currentday = "thursday";
  }
  if (currentdaynum == 5) {
    currentday = "friday";
  }
  if (currentdaynum == 6) {
    currentday = "saturday";
  }

  console.log(currentday);

  if (Object.keys(t).length < 1) {
    return <div>sasa</div>;
  } else {
    return t
      .filter((day) => day.day === currentday)
      .filter((day) => day.subject !== null)
      .map((day) => {
        return (
          <div>
            <u style={{ color: "orange" }}>
              <h4 style={{ color: "orange" }}>{day.time}</h4>
              {/* <Badge pill variant="warning">
                  {day.time}
                </Badge> */}
            </u>

            <div style={{ display: "flex", margin: "60px" }}>
              <h5>{day.subject}</h5>
              <hr />
              <h5>{day.shortname}</h5>
              <br />
              <hr />
              <h5>{day.room}</h5>
            </div>
          </div>
        );
      });
  }
}
