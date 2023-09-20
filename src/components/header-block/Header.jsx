import React from "react";
import "./Header.css";

const Header = ({ setSideNavWidth }) => {
  return (
    <div className="header-container">
      <div className="header-block-bg">
        <div className="wrapper header-wrapper">
          <header>
            <img
              onClick={() => setSideNavWidth(true)}
              src="./img/header/burger.svg"
              alt="Menu"
              className="header-burger cp"
            />
            <img
              src="./img/header/logo.svg"
              alt="Logo"
              className="header-logo"
            />
            <span className="header-action cp">Связаться с нами</span>
          </header>
          <div className="header-main-container">
            <div className="header-main-left">
              <img src="./img/header/socialmedia.svg" alt="social media" />
              <div className="header-main-divider"></div>
              <div className="social-media">
                <img src="./img/header/fb.svg" alt="Facebook" className="cp" />
                <img src="./img/header/tw.svg" alt="Twitter" className="cp" />
                <img src="./img/header/gh.svg" alt="GitHub" className="cp" />
                <img src="./img/header/dr.svg" alt="Drrrible" className="cp" />
              </div>
            </div>
            <div className="header-main">
              <h1>Ответь на 4 вопроса</h1>
              <h2>
                и получи стратегию <br /> по продвижению на 2023 год
              </h2>
              <a
                href="https://mrqz.to/6391e42dfb29d4004f1ffb2a"
                className="cp"
                target="_blank"
              >
                Ответить на вопросы
              </a>
            </div>
            <div className="header-main-right">
              <img src="./img/header/prev.svg" alt="prev" />
              <div className="header-main-divider"></div>
              <img src="./img/header/next.svg" alt="next" />
            </div>
          </div>
          <div className="header-scroll-tab"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
