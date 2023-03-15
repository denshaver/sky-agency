import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "+988",
  });

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
        <form action="">
          <input
            type="text"
            id="userName"
            placeholder="Введите Имя и Фамилию"
            value={formData.userName}
            onChange={(e) => onChangeForm(e)}
            className="form-input"
          />
          <input
            type="text"
            id="userPhone"
            value={formData.userPhone}
            placeholder="Введите номер телефона"
            onChange={(e) => onChangeForm(e)}
            className="form-input"
          />
          <input type="button" value={"Отправить"} className="form-btn" />
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
