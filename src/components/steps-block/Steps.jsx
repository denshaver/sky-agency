import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import StepItem from "./ StepItem";
import "./Steps.css";
import { useMediaQuery } from "@mui/material";

const Steps = () => {
  // useMediaQuery
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  // SWIPER SETUP
  const swiperRef = useRef(null);
  const goNext = () => {
    swiperRef.current.slideNext();
  };

  const goPrev = () => {
    swiperRef.current.slidePrev();
  };

  const steps = [
    {
      count: 1,
      title: "Подготовка",
      text: "- Изучение особенностей рынка недвижимости и создание УТП проекта - Новый дизайн постов и креативов - Таргетированная реклама, настроенная на регионы - Регулярные истории в Instagram",
    },
    {
      count: 2,
      title: "Стратегия",
      text: "- Изучение особенностей рынка недвижимости и создание УТП проекта - Новый дизайн постов и креативов - Таргетированная реклама, настроенная на регионы - Регулярные истории в Instagram",
    },
    {
      count: 3,
      title: "Старт работы",
      text: "- Изучение особенностей рынка недвижимости и создание УТП проекта - Новый дизайн постов и креативов - Таргетированная реклама, настроенная на регионы - Регулярные истории в Instagram",
    },
    {
      count: 4,
      title: "Отчетность",
      text: "- Изучение особенностей рынка недвижимости и создание УТП проекта \n - Новый дизайн постов и креативов\n- Таргетированная реклама, настроенная на регионы \n- Регулярные истории в Instagram",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: isMobileScreen ? 1 : 3.2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiperRef.current = swiper;
  }, [isMobileScreen]);

  // RENDER
  return (
    <div className="steps-container" id="steps-block">
      <div className="wrapper steps-wrapper">
        <span>Как мы работаем</span>
        <h1>Этапы работы</h1>
      </div>
      {/* SWIPER */}
      <div className="swiper-parent-container">
        <div className="swiper-container">
          {/* BUTTONS CUSTOM */}
          <div className="wrapper steps-btns-wrapper">
            <button onClick={goPrev} className="swiper-button-prev">
              <img src="./img/steps/left.svg" alt="prev" />
            </button>
            <button onClick={goNext} className="swiper-button-next">
              <img src="./img/steps/right.svg" alt="next" />
            </button>
          </div>
          {/* SWIPER MAIN */}
          <div className="swiper-wrapper">
            {steps.map((step) => {
              return (
                <div className="swiper-slide" key={step.count}>
                  <StepItem
                    count={step.count}
                    text={step.text}
                    title={step.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
