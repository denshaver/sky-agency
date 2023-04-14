import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <footer>
          <div className="footer-left">
            <div className="footer-links">
              <img src="/img/footer/fb.svg" alt="smm" className="cp" />
              <a href="https://www.instagram.com/skyagencyuz/">
                <img src="/img/footer/inst.svg" alt="smm" className="cp" />
              </a>
              <img src="/img/footer/tw.svg" alt="smm" className="cp" />
              <img src="/img/footer/gh.svg" alt="smm" className="cp" />
              <img src="/img/footer/dr.svg" alt="smm" className="cp" />
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
