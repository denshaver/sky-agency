import React from "react";
import "./Header.css";
import { FacebookFill, InstagramFill, TelegramFill } from "akar-icons";

const Header = ({ setSideNavWidth }) => {
  return (
    <div className="header-container">
      <div className="header-block-bg">
        <div className="wrapper header-wrapper">
          <header>
            <img
              onClick={() => setSideNavWidth(true)}
              src="/img/header/burger.svg"
              alt="Menu"
              className="header-burger cp"
            />
            <img
              src="/img/header/logo.svg"
              alt="Logo"
              className="header-logo"
            />
            <a
              className="header-action cp social-media-anchor"
              href="#form-block"
            >
              Связаться с нами
            </a>
          </header>
          <div className="header-main-container">
            <div className="header-main-left">
              <img src="/img/header/socialmedia.svg" alt="social media" />
              <div className="header-main-divider"></div>
              <div className="social-media">
                <a
                  href="https://www.instagram.com/skyagencyuz/"
                  className="social-media-anchor"
                >
                  <InstagramFill strokeWidth={2} size={20} className="cp" />
                </a>
                <a
                  href="https://t.me/skyagencyuzb"
                  className="social-media-anchor"
                >
                  <TelegramFill strokeWidth={2} size={20} className="cp" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100084195307094"
                  className="social-media-anchor"
                >
                  <FacebookFill strokeWidth={2} size={20} className="cp" />
                </a>
              </div>
            </div>
            <div className="header-main">
              <h1>Ответь на 6 вопросов</h1>
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
              <img src="/img/header/prev.svg" alt="prev" />
              <div className="header-main-divider"></div>
              <img src="/img/header/next.svg" alt="next" />
            </div>
          </div>
          <div className="header-scroll-tab"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
