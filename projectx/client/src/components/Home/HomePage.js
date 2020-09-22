import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mycontext } from "../../context/context";
import AttendanceGraph from "./AttendanceGraph";

import Routine from "./Routine";
import Notices from "./Notices";
import Footer from "./Footer";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const { settimetable } = useContext(Mycontext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    const res = async () => {
      const response = await axios.get("/timetable");

      settimetable(response.data);
    };
    res();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {Routine()}
        </Carousel>
        <hr />
        {AttendanceGraph()}
        <br />
        <br />

        <Notices />
      </div>

      <br />
      <br />
      <hr />
      <Footer />
    </div>
  );
}
