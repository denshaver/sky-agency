import { useState } from "react";
import "./Callback.css";
import { sendTelegram } from "../../api/sendMessageTelegram";

const Callback = () => {
  const [input, setInput] = useState("");

  return (
    <div className="callback-container">
      <div className="wrapper callback-wrapper">
        <h2>Давай работать вместе</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendTelegram(`Заявка. Почта: ${input}`);
            alert("Заявка успешно отправлена. Мы скоро свяжемся с вами");
            setInput("");
          }}
        >
          <input
            type="email"
            name="user-email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите свою почту"
            required
          />{" "}
          <button type="submit" disabled={input.length < 8}>
            <img src="/img/callback/arrow.svg" alt="submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Callback;
