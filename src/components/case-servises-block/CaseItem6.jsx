import "./CaseItems.css";

const CaseItem6 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image logo-three">
          <img src="./img/cases/case6.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Семейный Ресторан национальной кухни, расположенный в центре Бочки
            (Чарвак). Большая территория и вкусная кухня. Большая конкуренция и
            сезонность в данной локации является особенностью данного проекта.
          </p>
          <h3>Задачи</h3>
          <p>
            - Оживить страницу бренда <br />- Повысить интерес целевой аудитории
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Съемка регулярных историй <br />
            - Фуд-съемку с профессиональным фотографом <br /> - Приглашение
            блогеров
          </p>
        </div>
      </div>
      {/* SECONDARY CASE PART */}
      <div className="case-table-secondary">
        <div className="table-head-row">
          <div className="table-head-block">
            <h4>Результаты</h4>
          </div>
          <div className="table-head-block">
            <img src="./img/cases/fb.svg" alt="Facebook Link" />
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row two-height">
          <div className="table-block br bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ INST</h4>
              <span>РОСТ НА 96%</span>
            </div>
            <div className="table-block-bottom">
              <span>71.231</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ FB</h4>
              <span>РОСТ НА 90,6%</span>
            </div>
            <div className="table-block-bottom">
              <span>95.125</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row two-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>ОХВАТ</h4>
              <span>Лучшая публикация</span>
            </div>
            <div className="table-block-bottom">
              <span>9.772</span>
              <img src="./img/cases/user.svg" alt="user" />
            </div>
          </div>
          <div className="table-block bt">
            <div className="table-block-top">
              <h4>КОЛИЧЕСТВО СТОРИС</h4>
            </div>
            <div className="table-block-bottom">
              <span>30</span>
              <img src="./img/cases/play.svg" alt="plays" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem6;
