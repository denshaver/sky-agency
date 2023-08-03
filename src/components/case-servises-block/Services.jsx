import AnimatedImage from "./AnimatedImage";
import "./Services.css";
import { useMediaQuery } from "@mui/material";

const Services = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  return (
    <div className="wrapper services-wrapper" id="services-block">
      <span>Услуги</span>
      <h1>
        Как мы можем <br /> вам помочь?
      </h1>
      <div className="services">
        <div className="service-item">
          <span className="service-item-num service-item-num-active">#01</span>
          <div className="service-item-text">
            <h3>
              Упаковка бизнеса <br /> в Цифровом пространстве
            </h3>
            <p>
              Оформления страницы в Инстаграм и Фейсбук, <br /> Таплинк,
              Сайт-Лендинг, Имиджевые посты
            </p>
          </div>

          <AnimatedImage
            src="./img/services/image1.png"
            cName="service-image-first"
            alt="service"
            duration={600}
          />
        </div>
        <div className="service-item">
          <span className="service-item-num">#02</span>
          <div className="service-item-text">
            <h3>
              Ведение проекта <br /> в социальных сетях
            </h3>
            <p>
              Анализ интересов и потребностей Целевой Аудитории, регулярные
              посты и Сторисы, общение с подписчиками, отчетность
            </p>
          </div>

          <AnimatedImage
            src="./img/services/image2.png"
            cName="service-image-second"
            alt="service"
            duration={700}
          />
        </div>
        <div className="service-item">
          <span className="service-item-num">#03</span>
          <div className="service-item-text">
            <h3>Привлечение новых клиентов</h3>
            <p>
              Targeting, Google & Yandex Ads, Реклама в телеграм каналах,
              реклама у блогеров и в СМИ
            </p>
          </div>
          {isMobileScreen ? (
            <img
              src="./img/services/image3.png"
              alt="service"
              className="service-image-third"
            />
          ) : (
            <AnimatedImage
              src="./img/services/image3.png"
              cName="service-image-third"
              alt="service"
              duration={800}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
