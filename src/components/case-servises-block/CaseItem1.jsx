import "./CaseItems.css";

const CaseItem1 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image">
          <img src="/img/cases/case1.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Компания, которая занимается строительством и продажей жилых
            комплексов в Ташкенте. На данный момент успешно завершено 4 больших
            проектов и началось строительство 5-го проекта в районе Рохат.
          </p>
          <h3>Задачи</h3>
          <p>
            - Ведение страницы бренда в Instagram для освещения новостей и
            поддержания имиджа <br /> - Повысить интерес целевой аудитории для
            покупки квартир в новом проекте <br />- Увеличить число заявок для
            офиса продаж
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Изучение особенностей рынка недвижимости и создание УТП проекта{" "}
            <br />
            - Новый дизайн постов и креативов <br />
            - Таргетированная реклама, настроенная на регионы <br />- Регулярные
            истории в Instagram
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
            <img src="/img/cases/fb.svg" alt="Facebook Link" />
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bb">
            <div className="table-block-top">
              <h4>Охваты</h4>
              <span>Рост на 89,5%</span>
            </div>
            <div className="table-block-bottom">
              <span>173.021</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>ПОСЕЩЕНИЯ ПРОФИЛЯ</h4>
            </div>
            <div className="table-block-bottom">
              <span>2.276</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>БЮДЖЕТ НА ТАРГЕТ</h4>
            </div>
            <div className="table-block-bottom">
              <span>200</span>
              <img src="/img/cases/dollar.png" alt="dollar" />
            </div>
          </div>
          <div className="table-block bt bb">
            <div className="table-block-top">
              <h4>ЛИДЫ ПО ТАРГЕТУ</h4>
            </div>
            <div className="table-block-bottom">
              <span>1351</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>ЦЕНА ЗА ОДИН ЛИД</h4>
            </div>
            <div className="table-block-bottom">
              <span>0.16</span>
              <img src="/img/cases/dollar.png" alt="dollar" />
            </div>
          </div>
          <div className="table-block bt">
            <div className="table-block-top">
              <h4>ПРОДАЖИ КВАРТИР ПО ТАРГЕТУ</h4>
            </div>
            <div className="table-block-bottom">
              <span>5</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem1;
