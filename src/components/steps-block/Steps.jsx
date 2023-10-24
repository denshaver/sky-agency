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
      title: "Стратегия",
      text: (
        <p>
          - Определение целей и задач проекта
          <br />
          - Изучение особенностей рынка и создание УТП проекта
          <br />
          - Построение пути клиента (CJM) через социальные сети
          <br />- Анализ конкурентов в цифровом пространстве
        </p>
      ),
    },
    {
      count: 2,
      title: "Подготовка",
      text: (
        <p>
          - Создание группы для работы и обсуждение проекта
          <br />
          - Формирования контент-плана и его утверждение
          <br />
          - Подготовка идей и аудитории для Таргета
          <br />
          - Проведение съёмочных работ для контента
          <br />- Подготовка дизайна для постов и креативов",
        </p>
      ),
    },
    {
      count: 3,
      title: "Старт работы",
      text: (
        <p>
          - Утверждение готовых постов и их правки
          <br />
          - Регулярные загрузки сторисов
          <br />
          - Запуск Таргетированной рекламы
          <br />- Общение с подписчиками в директ и комментариях
        </p>
      ),
    },
    {
      count: 4,
      title: "Отчетность",
      text: (
        <p>
          - Формирование ежедневных отчётов по Таргету
          <br />- Ежемесячные отчёты по результативности маркетинговых работ
        </p>
      ),
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
              <img src="/img/steps/left.svg" alt="prev" />
            </button>
            <button onClick={goNext} className="swiper-button-next">
              <img src="/img/steps/right.svg" alt="next" />
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
