<?php

/* https://api.telegram.org/bot5943189827:AAFDBIbX72Lt_sr5C08pzurFHCRmrrda3vQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$email = $_POST['user-email'];
$token = "5943189827:AAFDBIbX72Lt_sr5C08pzurFHCRmrrda3vQ";
$chat_id = "-767162101";
$arr = array(
  'Почта пользователя: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
  echo '<script>alert("Спасибо. Ваша заявка принята, наш менеджер свяжется с вами в скором времени")</script>';
} else {
  echo "Error";
}
?>