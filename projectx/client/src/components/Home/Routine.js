import React, { useState, useContext, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel,Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Mycontext} from '../../context/context'
import "./caro.css";

export default function Routine() {
  const {timetable} = useContext(Mycontext);
  // const [t, sett] = useState(time);
  // useEffect(() => {
  //   sett(time);
  // }, [time]);
  // console.log(t);

  const today = new Date();
  // const currenttime = today.getHours();
  //const currenttime = "9";
  var currentday = "monday";
  const currentdaynum = today.getUTCDay();
  if (currentdaynum === 0) {
    currentday = "sunday";
  }
  if (currentdaynum === 1) {
    currentday = "monday";
  }
  if (currentdaynum === 2) {
    currentday = "tuesday";
  }
  if (currentdaynum === 3) {
    currentday = "wednesday";
  }
  if (currentdaynum === 4) {
    currentday = "thursday";
  }
  if (currentdaynum === 5) {
    currentday = "friday";
  }
  if (currentdaynum === 6) {
    currentday = "saturday";
  }


  if (Object.keys(timetable).length < 1) {
    return (<Carousel.Item>
  <Spinner animation='border' variant='primary' size='ml'/>
  </Carousel.Item>);
  } else {
    return timetable
      .filter((day) => day.day === "monday")
      .filter((day) => day.subject !== null)
      .map((day) => {
        return (
          <Carousel.Item>
            <div className='routine_item'>
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
          </Carousel.Item>
        );
      });
  }
}
