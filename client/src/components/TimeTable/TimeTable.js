import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Schedule from "./Schedule";

class TimeTable extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <Schedule day="Monday" />
          </div>
          <div>
            <Schedule day="Tuesday" />
          </div>
          <div>
            <Schedule day="Wednesday" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default TimeTable;
