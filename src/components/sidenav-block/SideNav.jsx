import "./SideNav.css";
import { useMediaQuery } from "@mui/material";

const SideNav = ({ sideNavWidth, setSideNavWidth }) => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const navWidth = isMobileScreen ? "50%" : "20%";
  return (
    <div
      className="sidenav"
      style={{
        width: sideNavWidth ? navWidth : "0%",
      }}
    >
      <span className="closebtn" onClick={() => setSideNavWidth(false)}>
        &times;
      </span>
      <a
        href="#case-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Портфолио
      </a>
      <a
        href="#services-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Услуги
      </a>
      <a
        href="#steps-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Этапы
      </a>
      {/* <a
        href="#reviews-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Отзывы
      </a> */}
      <a
        href="#crew-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Команда
      </a>
      <a
        href="#form-block"
        className="nav-link"
        onClick={() => setSideNavWidth(false)}
      >
        Оффер
      </a>
    </div>
  );
};

export default SideNav;
