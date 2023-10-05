import "./Form.css";
import { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "+998",
  });

  const [isSend, setIsSend] = useState(true);
  const dayNow = new Date().getDate();

  useEffect(() => {
    const lastDay = localStorage.getItem("lastSentFormBottom");
    if (dayNow == lastDay) setIsSend(false);
  }, [isSend]);

  function handleSendForm() {
    localStorage.setItem("lastSentFormBottom", dayNow);
  }

  const onChangeForm = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <div className="wrapper form-wrapper" id="form-block">
      <div className="form">
        <span>Оффер</span>
        <h2>
          не знаете <br /> что выбрать?
        </h2>
        <p>
          Свяжитесь с нами и мы обсудим как эффективно <br /> привлекать больше
          клиентов в ваш бизнес
        </p>
        <form action="./telegram.php" method="POST">
          <input
            type="text"
            id="userName"
            name="user-name"
            placeholder="Введите Имя и Фамилию"
            value={formData.userName}
            onChange={(e) => onChangeForm(e)}
            className="form-input"
            required
          />
          <input
            type="tel"
            id="userPhone"
            name="user-phone"
            value={formData.userPhone}
            placeholder="Введите номер телефона"
            onChange={(e) => onChangeForm(e)}
            className="form-input"
            required
          />
          <input
            disabled={
              !isSend ||
              formData.userName.length < 3 ||
              formData.userPhone.length < 8
            }
            type="submit"
            value={"Отправить"}
            className="form-btn"
            onClick={handleSendForm}
          />
        </form>
      </div>
      <div className="form-images">
        <div className="form-images-block">
          <img src="/img/form/image-top1.png" alt="form" />
          <img src="/img/form/image-top2.png" alt="form" />
        </div>
        <div className="form-images-block">
          <img src="/img/form/image-bottom1.png" alt="form" />
          <img src="/img/form/image-bottom2.png" alt="form" />
        </div>
      </div>
    </div>
  );
};

export default Form;
