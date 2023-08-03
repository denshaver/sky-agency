import "./Cases.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import CaseItem1 from "./CaseItem1";
import CaseItem2 from "./CaseItem2";
import CaseItem3 from "./CaseItem3";
import CaseItem4 from "./CaseItem4";
import CaseItem5 from "./CaseItem5";
import CaseItem6 from "./CaseItem6";

const Cases = () => {
  const [curSlide, setCurSlide] = useState(0);
  function handleChange(selectedIndex) {
    setCurSlide(selectedIndex);
  }
  const showSlideInd = (side) => {
    if (curSlide === 5 && side === "right") {
      return 1;
    }
    if (curSlide === 0 && side === "left") {
      return 6;
    }
    if (side === "left") {
      return curSlide;
    }
    if (side === "right") {
      return curSlide + 2;
    }
  };
  return (
    <div className="wrapper case-wrapper" id="case-block">
      <span>Портфолио</span>
      <h1>Кейсы</h1>
      <Carousel
        onChange={handleChange}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <span
              className={hasPrev ? "absolute larr" : "hidden larr"}
              onClick={clickHandler}
            >
              <img src="./img/cases/arr-left.svg" alt="ArrLeft" /> Кейс{" "}
              {showSlideInd("left")}
            </span>
          );
        }}
        renderArrowNext={(clickHandler, hasPrev) => {
          return (
            <span
              className={hasPrev ? "absolute rarr" : "hidden rarr"}
              onClick={clickHandler}
            >
              Кейс {showSlideInd("right")}{" "}
              <img src="./img/cases/arr-right.svg" alt="ArrRight" />
            </span>
          );
        }}
      >
        <CaseItem1 />
        <CaseItem2 />
        <CaseItem3 />
        <CaseItem4 />
        <CaseItem5 />
        <CaseItem6 />
      </Carousel>
    </div>
  );
};

export default Cases;
