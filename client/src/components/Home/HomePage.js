import React, { useState, useContext, useEffect } from "react";
import Mycontext from "../../Global/context";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Badge } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Routine from "./Routine";
import FooterPage from "./Footer";

export default function HomePage() {
  return (
    <div>
      {Header()}
      <div>
        <Carousel>{Routine()}</Carousel>
      </div>
      {/* {FooterPage()} */}
    </div>
  );
}
