import "./Callback.css";

const Callback = () => {
  return (
    <div className="callback-container">
      <div className="wrapper callback-wrapper">
        <h2>Давай работать вместе</h2>
        <form action="">
          <input type="text" placeholder="Отправь нам сообщение" />{" "}
          <img src="/img/callback/arrow.svg" alt="submit" />
        </form>
      </div>
    </div>
  );
};

export default Callback;
