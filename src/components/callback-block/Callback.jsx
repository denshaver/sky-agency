import "./Callback.css";

const Callback = () => {
  return (
    <div className="callback-container">
      <div className="wrapper callback-wrapper">
        <h2>Давай работать вместе</h2>
        <form action="./telegramEmail.php" method="POST">
          <input
            type="email"
            name="user-email"
            placeholder="Введите свою почту"
            required
          />{" "}
          <button type="submit">
            <img src="./img/callback/arrow.svg" alt="submit" />
          </button>
          {/* <input
            type="submit"
            value={'<img src="./img/callback/arrow.svg" alt="submit" />'}
          /> */}
        </form>
      </div>
    </div>
  );
};

export default Callback;
