import { useEffect, useState } from "react";
import "./Callback.css";

const Callback = () => {
  const [isSend, setIsSend] = useState(true);
  const [input, setInput] = useState("");
  const dayNow = new Date().getDate();

  useEffect(() => {
    const lastDay = localStorage.getItem("lastSentForm");
    if (dayNow == lastDay) setIsSend(false);
  }, [isSend]);

  function handleSendForm() {
    localStorage.setItem("lastSentForm", dayNow);
  }

  return (
    <div className="callback-container">
      <div className="wrapper callback-wrapper">
        <h2>Давай работать вместе</h2>
        <form action="./telegramEmail.php" method="POST">
          <input
            type="email"
            name="user-email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите свою почту"
            required
          />{" "}
          <button
            type="submit"
            onClick={handleSendForm}
            disabled={!isSend || input.length < 5}
          >
            <img src="/img/callback/arrow.svg" alt="submit" />
          </button>
          {/* <input
            type="submit"
            value={'<img src="/img/callback/arrow.svg" alt="submit" />'}
          /> */}
        </form>
      </div>
    </div>
  );
};

export default Callback;
