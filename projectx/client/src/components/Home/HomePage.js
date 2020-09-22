import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mycontext } from "../../context/context";
import AttendanceGraph from "./AttendanceGraph";
import MarksGraph from "./MarksGraph";

import Routine from "./Routine";
import Notices from "./Notices";
import NewNotices from "./NewNotices";
import Footer from "./Footer";
import "./charts.css";
import NoticeBoard from "./NoticeBoard";

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
        <div class="charts">
          <div class="attendance">{AttendanceGraph()}</div>
          <br />
          <div class="marks">{MarksGraph()}</div>
        </div>
        <br />
        <hr />
        <div className="notice">
          <div className="ClubCard">
            <NewNotices />
          </div>

          <div className="ClubCard">
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
