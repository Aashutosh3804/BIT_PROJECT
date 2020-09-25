import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Schedule from "./Schedule";

class TimeTable extends React.Component {
  render() {
    return (
      <div>
        <div style={{ width: "100vw" }}>
          <video
            className="routineVideoOthers"
            preload="auto"
            loop
            muted
            autoPlay
          >
            <source src="/NebulaRed.mp4" type="video/webm" />
          </video>
        </div>
        <center>
          <Carousel auto interval="1000" pause="hover">
            <Carousel.Item>
              <Schedule day="monday" />
            </Carousel.Item>

            <Carousel.Item>
              <Schedule day="tuesday" />
            </Carousel.Item>
            <Carousel.Item>
              <Schedule day="wednesday" />
            </Carousel.Item>
            <Carousel.Item>
              <Schedule day="thursday" />
            </Carousel.Item>
            <Carousel.Item>
              <Schedule day="friday" />
            </Carousel.Item>
            <Carousel.Item>
              <Schedule day="saturday" />
            </Carousel.Item>
          </Carousel>
        </center>
      </div>
    );
  }
}
export default TimeTable;
