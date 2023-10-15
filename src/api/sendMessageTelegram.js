import axios from "axios";

export function sendTelegram(message) {
  const TOKEN = "6318386174:AAGMXuLiwSXMh5GGbE3VMxCsSePAhIs18o4";
  const CHAT_ID = "-1001642547854";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .catch((e) => console.log(e));
}
