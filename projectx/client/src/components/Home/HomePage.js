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
        <video className="routineVideo" preload="auto" loop muted autoPlay>
          <source src="/Nebula.mp4" type="video/webm" />
        </video>
      </div>
      <div className="all-container">
        <div>
          {/* <div
          style={{
            height: "200px",
            width: "100%",
            
          }}
        ></div> */}
          <>
            <Carousel
              id="caroclass"
              activeIndex={index}
              onSelect={handleSelect}
            >
              {Routine()}
            </Carousel>
          </>
          <hr style={{ backgroundColor: "black" }} />
          <div style={{ height: "300px", width: "100%" }}>
            <center>
              <h1>WELCOME</h1>
            </center>
          </div>
          {/* <div style={{ width: "100vw" }}>
            <video className="routineVideo" preload="auto" loop muted autoPlay>
              <source src="/Nebula.mp4" type="video/webm" />
            </video>
          </div> */}
          {/* <div
            style={{
              backgroundImage:
                "url(\nhttps://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg\n)",
            }}
          > */}
          <div>
            {/* <div
              style={{ width: "100vw", height: "100vh", position: "absolute" }}
            >
              <video
                className="routineVideo"
                preload="auto"
                loop
                muted
                autoPlay
              >
                <source src="/Nebula.mp4" type="video/webm" />
              </video>
            </div> */}
            <div>
              {/* <Particles
                className="particles"
                params={{
                  particles: {
                    number: {
                      value: 150,
                      density: {
                        enable: true,
                        value_area: 1803.4120608655228,
                      },
                    },
                    color: {
                      value: "#ffffff",
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 2,
                        color: "#000000",
                      },
                      polygon: {
                        nb_sides: 4,
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100,
                      },
                    },
                    opacity: {
                      value: 0.4008530152163807,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                      },
                    },
                    size: {
                      value: 1.5,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 0,
                      color: "#ffffff",
                      opacity: 0.3687847739990702,
                      width: 0.6413648243462091,
                    },
                    move: {
                      enable: true,
                      speed: 6,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                      },
                    },
                  },
                  interactivity: {
                    detect_on: "window",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse",
                      },
                      onclick: {
                        enable: false,
                        mode: "bubble",
                      },
                      resize: true,
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1,
                        },
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4,
                      },
                      push: {
                        particles_nb: 4,
                      },
                      remove: {
                        particles_nb: 2,
                      },
                    },
                  },
                  retina_detect: true,
                }}
              /> */}
              <div class="charts">
                <div class="attendance">{AttendanceGraph()}</div>
                <br />
                <div class="marks">{MarksGraph()}</div>
              </div>
              <br />
              <hr />
              <br />

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
        </div>
      </div>
    </>
  );
}
