import "./CaseItems.css";

const CaseItem3 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image logo-three">
          <img src="/img/cases/case3.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Кафе турецкой кухни, основателем которого является бизнесмен и
            ресторатор Ахмад Мелебаев. Отличительной чертой данного заведения
            можно отметить приготовление мяса для Донера в дровяной печи.
          </p>
          <h3>Задачи</h3>
          <p>
            - Ведение страницы в Instagram в стиле турецких кафе <br />
            - Увеличить интерес к бренду пользователей Instagram с помощью
            фуд-съемки <br />- Повысить узнаваемость новой локации
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Фуд-контент в формате Reels <br />
            - Регулярные истории в Instagram <br />
            - Привлечение блогеров <br />- Таргетинг для широкой аудитории
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
        <div className="table-block-row two-height">
          <div className="table-block br bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ</h4>
              <span>РОСТ НА 42.8%</span>
            </div>
            <div className="table-block-bottom">
              <span>18.328</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>ПОСЕЩЕНИЯ ПРОФИЛЯ</h4>
              <span>РОСТ НА 30,7%</span>
            </div>
            <div className="table-block-bottom">
              <span>10.836</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row two-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>НОВЫЕ ПОДПИСЧИКИ</h4>
              <span>РОСТ НА 209.8%</span>
            </div>
            <div className="table-block-bottom">
              <span>2.116</span>
              <img src="/img/cases/user.svg" alt="user" />
            </div>
          </div>
          <div className="table-block bt">
            <div className="table-block-top">
              <h4>КОЛИЧЕСТВО СТОРИС</h4>
            </div>
            <div className="table-block-bottom">
              <span>94</span>
              <img src="/img/cases/play.svg" alt="plays" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem3;
