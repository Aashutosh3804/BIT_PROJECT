import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Schedule from "./Schedule";
import Header from "../Home/Header";

class TimeTable extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <Carousel auto>
            <div>
              <Schedule day="monday" />
            </div>

            <div>
              <Schedule day="tuesday" />
            </div>
            <div>
              <Schedule day="wednesday" />
            </div>
            <div>
              <Schedule day="thursday" />
            </div>
            <div>
              <Schedule day="friday" />
            </div>
            <div>
              <Schedule day="saturday" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default TimeTable;
