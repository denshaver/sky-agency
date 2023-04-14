import "./CaseItems.css";

const CaseItem2 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image logo-two">
          <img src="/img/cases/case2.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Жилой комплекс со всеми современными условиями в горном регионе,
            построенный по немецким стандартам качества. Находится в
            Бустанлыкском районе, что дает замечательный вид на горы и доступ к
            свежему воздуху.
          </p>
          <h3>Задачи</h3>
          <p>
            - Показать преимущества жилого комплекса в соцсетях <br /> -
            Поменяли стиль публикаций
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Поменяли стиль публикации <br />
            - Изучили основные боли клиентов <br />
            - Больше живого контента <br />- Перенастроили Таргет на нужную
            аудиторию
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
              <h4>ОХВАТЫ INST</h4>
              <span>РОСТ НА 4,2 ТЫС%</span>
            </div>
            <div className="table-block-bottom">
              <span>636.361</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ FB</h4>
              <span>РОСТ НА 1,1 ТЫС%</span>
            </div>
            <div className="table-block-bottom">
              <span>706.656</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>БЮДЖЕТ НА ТАРГЕТ</h4>
              <span>ЛУЧШИЙ РЕЗУЛЬТАТ</span>
            </div>
            <div className="table-block-bottom">
              <span>44</span>
              <img src="/img/cases/dollar.png" alt="dollar" />
            </div>
          </div>
          <div className="table-block bt bb">
            <div className="table-block-top">
              <h4>ЛИДЫ ПО ТАРГЕТУ</h4>
            </div>
            <div className="table-block-bottom">
              <span>285</span>
              <img src="/img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>ОХВАТ</h4>
              <span>ЛУЧШИЙ РЕЗУЛЬТАТ</span>
            </div>
            <div className="table-block-bottom">
              <span>30.136</span>
              <img src="/img/cases/user.svg" alt="user" />
            </div>
          </div>
          <div className="table-block bt">
            <div className="table-block-top">
              <h4>ЦЕНА ЗА ОДИН ЛИД</h4>
            </div>
            <div className="table-block-bottom">
              <span>0.15</span>
              <img src="/img/cases/dollar.png" alt="dollars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem2;
