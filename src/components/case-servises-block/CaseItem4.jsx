import "./CaseItems.css";

const CaseItem4 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image logo-two">
          <img src="./img/cases/case4.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Молодой бренд сети пиццерий, расположенный в центре города и в
            горном районе Чарвак. В первый год своей деятельности бренд
            назывался “Papa Pizza”. В скором бренд решили переименовать себя в
            “Pizza Express”.
          </p>
          <h3>Задачи</h3>
          <p>
            - Повысить узнаваемость бренда <br />- Повысить спрос на доставку
            пиццы по городу
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Перешли на видео-контент (больше живых видео с продуктом) <br /> -
            Таргетированная реклама, направленная на телеграм-бот <br />- Работа
            с блогерами и лидерами мнения
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
        <div className="table-block-row three-height">
          <div className="table-block br bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ INST</h4>
              <span>РОСТ НА 89,5%</span>
            </div>
            <div className="table-block-bottom">
              <span>139.101</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ FB</h4>
              <span>РОСТ НА 95.7%</span>
            </div>
            <div className="table-block-bottom">
              <span>235.231</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>РАСХОД НА КРЕАТИВ</h4>
            </div>
            <div className="table-block-bottom">
              <span>13.25</span>
              <img src="./img/cases/dollar.png" alt="dollar" />
            </div>
          </div>
          <div className="table-block bt bb">
            <div className="table-block-top">
              <h4>ЦЕНА ЗА КЛИК</h4>
            </div>
            <div className="table-block-bottom">
              <span>0.01</span>
              <img src="./img/cases/dollar.png" alt="dollars" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>ПРОДАЖИ В ТГ БОТЕ</h4>
            </div>
            <div className="table-block-bottom">
              <span>+ 1.029</span>
              {/* <img src="./img/cases/user.svg" alt="user" /> */}
            </div>
          </div>
          <div className="table-block bt">
            <div className="table-block-top">
              <h4>КОЛИЧЕСТВО СТОРИС</h4>
            </div>
            <div className="table-block-bottom">
              <span>119</span>
              <img src="./img/cases/play.svg" alt="plays" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem4;
