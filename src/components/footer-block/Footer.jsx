import { FacebookFill, InstagramFill, TelegramFill } from "akar-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <footer>
          <div className="footer-left">
            <div className="footer-links">
              <a
                href="https://www.instagram.com/skyagencyuz/"
                className="social-media-anchor"
              >
                <InstagramFill strokeWidth={2} size={32} className="cp" />
              </a>
              <a
                href="https://t.me/skyagencyuzb"
                className="social-media-anchor"
              >
                <TelegramFill strokeWidth={2} size={32} className="cp" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100084195307094"
                className="social-media-anchor"
              >
                <FacebookFill strokeWidth={2} size={32} className="cp" />
              </a>
            </div>
            <p>
              Мир безграничных идей и новых высот где каждый может воплотить
              свои мечты в реальность.
            </p>
          </div>
          <img
            src="/img/footer/logo.svg"
            alt="sky-agency"
            className="footer-logo"
          />
          <div className="footer-right">
            <h5>Контакты</h5>
            <div className="footer-contacts">
              <div className="contacts">
                <h6>Телефон</h6>
                <a href="tel:998-88-199-04-17">+998 88 199 04 17</a>
              </div>
              <div className="contacts">
                <h6>Email</h6>
                <a href="mailto: skyagency2022@gmail.com">
                  skyagency2022@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
