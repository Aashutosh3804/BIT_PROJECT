import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mycontext } from "../../context/context";
import AttendanceGraph from "./AttendanceGraph";

import Routine from "./Routine";
import FooterPage from "./Footer";

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
  }, []);
  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {Routine()}
        </Carousel>
        {AttendanceGraph()}
      </div>
      {/* {FooterPage()} */}
    </div>
  );
}
