import { sendTelegram } from "../../api/sendMessageTelegram";
import "./Form.css";
import { useEffect, useRef, useState } from "react";

const Form = () => {
  const [canSend, setCanSend] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "+988",
  });

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView();
  };

  const onChangeForm = (event, value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: value,
      };
    });
  };

  const checkNameInput = () => {
    const nameArr = formData.userName.split("");
    const spaces = nameArr.filter((str) => str === " ");
    if (spaces.length > 1) return true;
    return false;
  };

  useEffect(() => {
    if (
      formData.userName.length < 3 ||
      formData.userPhone.length < 8 ||
      checkNameInput()
    ) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [formData]);

  useEffect(() => {
    if (window.location.href.includes("form-navigate")) {
      formRef.current?.scrollIntoView();
    }
  });

  return (
    <div className="wrapper form-wrapper" id="form-block">
      <div className="form" ref={formRef}>
        <span>Оффер</span>
        <h2>
          не знаете <br /> что выбрать?
        </h2>
        <p>
          Свяжитесь с нами и мы обсудим как эффективно <br /> привлекать больше
          клиентов в ваш бизнес
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendTelegram(
              `Заявка.
Имя: ${formData.userName}.
Телефон: ${formData.userPhone}`
            );
            alert("Заявка успешно отправлена. Мы скоро свяжемся с вами");
            setFormData({
              userName: "",
              userPhone: "+988",
            });
          }}
        >
          <input
            type="text"
            id="userName"
            name="user-name"
            placeholder="Введите Имя и Фамилию"
            value={formData.userName}
            onChange={(e) => onChangeForm(e, e.target.value)}
            className="form-input"
            required
          />
          <input
            type="tel"
            id="userPhone"
            name="user-phone"
            value={formData.userPhone}
            placeholder="Введите номер телефона"
            onChange={(e) =>
              onChangeForm(e, e.target.value.replace(/[^+\d]/g, ""))
            }
            className="form-input"
            required
          />
          <input
            disabled={canSend}
            type="submit"
            value={"Отправить"}
            className="form-btn"
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
