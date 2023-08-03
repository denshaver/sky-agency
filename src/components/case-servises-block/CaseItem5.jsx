import "./CaseItems.css";

const CaseItem5 = () => {
  return (
    <div className="case-table">
      {/* MAIN CASE PART */}
      <div className="case-table-main">
        <div className="case-main-image logo-two">
          <img src="./img/cases/case5.svg" alt="Company logo" />
        </div>
        <div className="case-main-text">
          <h3>О компании</h3>
          <p>
            Сеть кафетерий с направлением европейской кухни. Изначально бренд
            позиционировал себя как джелатерия, однако спрос на европейскую
            кухню стимулировал расширение. За 2 года было открыто 7 филиалов по
            городу. Бренд известен своей эстетичной стилистикой и бельгийскими
            вафлями.
          </p>
          <h3>Задачи</h3>
          <p>
            - Повышение узнаваемости бренда <br /> - Привлечение клиентов в
            филиалы
          </p>
          <h3>Что было сделано:</h3>
          <p>
            - Провели фуд-съемку с профессиональными фотографами <br />
            - Запустили таргетированную рекламу на широкую аудиторию <br /> -
            Привлекли блогеров и лидеров мнений <br />
            - Выкладывали постоянный контент в виде историй <br />- Сняли
            качественный рекламный ролик
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
        <div className="table-block-row three-height five-height">
          <div className="table-block br bb">
            <div className="table-block-top">
              <h4>ОХВАТЫ</h4>
              <span>РОСТ НА 60,5%</span>
            </div>
            <div className="table-block-bottom">
              <span>29.7K</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
          <div className="table-block bb">
            <div className="table-block-top">
              <h4>REELS ОХВАТИЛИ</h4>
            </div>
            <div className="table-block-bottom">
              <span>31.6K</span>
              <img src="./img/cases/user.svg" alt="Users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height five-height">
          <div className="table-block br bt bb">
            <div className="table-block-top">
              <h4>НОВЫЕ ПОДПИСЧИКИ</h4>
            </div>
            <div className="table-block-bottom">
              <span>686</span>
              <img src="./img/cases/user.svg" alt="user" />
            </div>
          </div>
          <div className="table-block bt bb">
            <div className="table-block-top">
              <h4>ПРОСМОТР ВИДЕО-ПУБЛИКАЦИИ</h4>
            </div>
            <div className="table-block-bottom">
              <span>18.7K</span>
              <img src="./img/cases/user.svg" alt="users" />
            </div>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="table-block-row three-height single">
          <div className="table-block-single bt">
            <div className="table-block-top">
              <h4>ПРОСМОТР ИСТОРИИ</h4>
            </div>
            <div className="table-block-bottom">
              <span>16.2К</span>
              <img src="./img/cases/user.svg" alt="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseItem5;
