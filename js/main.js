// Устанавливаем дату обратного отсчета до 6 августа 23:00:00
var countDownDate = new Date("Aug 6, 2023 23:00:00").getTime();

// Обновляем таймер каждую секунду
var x = setInterval(function () {
  // Получаем текущую дату и время
  var now = new Date().getTime();

  // Разница между текущей датой и временем и датой и временем обратного отсчета
  var distance = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выводим значения в соответствующие блоки
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Если обратный отсчет закончился, выводим текст
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".header__timer").innerHTML = "Время истекло!";
  }
}, 1000);


// Функция открытия модального окна регистрации
function openRegistrationPopup() {
  var popup = document.getElementById("registrationPopup");
  popup.style.display = "flex";
}

// Функция закрытия модального окна регистрации
function closeRegistrationPopup() {
  var popup = document.getElementById("registrationPopup");
  popup.style.display = "none";
}