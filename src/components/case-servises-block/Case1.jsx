const Case1 = () => {
  return (
    <div className="case-table">
      {/* CASE TABLE MAIN */}
      <div className="case-table-main">
        <div className="table-main-image">
          <img src="/img/cases/case1/case1-logo.svg" alt="logo1" />
        </div>
        <div className="table-text">
          <div className="table-text-item">
            <h3>О компании</h3>
            <p>
              Компания, которая занимается строительством и продажей жилых
              комплексов в Ташкенте. На данный момент успешно завершено 4
              больших проектов и началось строительство 5-го проекта в районе
              Рохат.
            </p>
          </div>
          <div className="table-text-item">
            <h3>Задачи</h3>
            <p>
              - Ведение страницы бренда в Instagram для освещения новостей и
              поддержания имиджа <br /> - Повысить интерес целевой аудитории для
              покупки квартир в новом проекте <br /> - Увеличить число заявок
              для офиса продаж
            </p>
          </div>
          <div className="table-text-item">
            <h3>Что было сделано:</h3>
            <p>
              - Изучение особенностей рынка недвижимости и создание УТП проекта{" "}
              <br /> - Новый дизайн постов и креативов <br /> - Таргетированная
              реклама, настроенная на регионы <br /> - Регулярные истории в
              Instagram
            </p>
          </div>
        </div>
      </div>
      {/* CASE TABLE SECONDARY */}
      <div className="case-table-info-wrapper">
        <div className="case-table-secondary-wrapper">
          <div className="case-table-second">
            <div className="table-top">
              <h3>Результаты</h3>
            </div>
            <div className="table-block tbtr">
              <img src="/img/cases/case1/image1.png" alt="1" />
            </div>
            <div className="table-block tbtr">
              <img src="/img/cases/case1/image3.png" alt="1" />
            </div>
            <div className="table-block tbtr">
              <img src="/img/cases/case1/image5.png" alt="1" />
            </div>
          </div>
          {/* CASE TABLE SECONDARY */}
          <div className="case-table-second">
            <div className="table-top table-top-data">
              <span>на период 01.11 - 30.11</span>
            </div>
            <div className="table-block tbt">
              <img src="/img/cases/case1/image2.png" alt="1" />
            </div>
            <div className="table-block tbt">
              <img src="/img/cases/case1/image4.png" alt="1" />
            </div>
            <div className="table-block tbt">
              <img src="/img/cases/case1/image6.png" alt="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case1;
