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
import Particles from "react-particles-js";
import "./bgvideo.css";
import "../../App.css";

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
    <>
      <div style={{ width: "100vw" }}>
        <video className='routineVideo' preload='auto' loop muted autoPlay>
          <source src='/Nebula.mp4' type='video/webm' />
        </video>
      </div>
      <div className='all-container'>
        <div>
          <>
            <Carousel
              id='caroclass'
              activeIndex={index}
              onSelect={handleSelect}
              auto
              interval='1000'
              pause='hover'
            >
              {Routine()}
            </Carousel>
          </>
          <hr style={{ backgroundColor: "black" }} />
          <div className='welcome'>
            <center>
              <h1>WELCOME</h1>
            </center>
          </div>

          <div>
            <div>
              <Particles
                className='particles'
                params={{
                  particles: {
                    number: {
                      value: 200,
                      density: {
                        enable: true,
                        value_area: 1803.4120608655228,
                      },
                    },
                  },
                }}
              />
              <div class='charts'>
                <div class='attendance'>{AttendanceGraph()}</div>
                <br />
                <div class='marks'>{MarksGraph()}</div>
              </div>
              <br />
              <hr />
              <br />

              <div className='notice'>
                <div className='ClubCard'>
                  <NewNotices />
                </div>

                <div className='ClubCard'>
                  <NoticeBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
