import React, { useState, useContext, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Routine from "./Routine";
import FooterPage from "./Footer";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {Header()}
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {Routine()}
        </Carousel>
      </div>
      {/* {FooterPage()} */}
    </div>
  );
}
