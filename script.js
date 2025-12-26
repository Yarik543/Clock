const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

//проверка если режим уже "Темный" в хранилище
if (localStorage.getItem("mode") === "Тёмный режим") {
    //добавляем класс "dark" и применяем функцию переключения на светлый
    body.classList.add("dark");
    modeSwitch.textContent = "Светлый режим";
}

//событие при клике на кнопку
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    //проверка "dark" класса в настоящем времени в body element
    const isDarkMode = body.classList.contains("dark");
    //установка текста при смене темы
    modeSwitch.textContent = isDarkMode ? "Светлый режим" : "Тёмный режим";
    //установка режима в хранилище
    localStorage.setItem("mode", isDarkMode ? "Тёмный режим" : "Светлый режим");

})

const updateTime = () => {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours() % 12; // 0–11

    // Секундная стрелка: 360° за 60 секунд
    const secToDeg = (sec / 60) * 360;

    // Минутная стрелка: 360° за 60 минут
    const minToDeg = (min / 60) * 360;

    // Часовая стрелка: 360° за 12 часов + плавное движение от минут
    const hrToDeg = (hr / 12) * 360 + (min / 60) * 30; // 30° — это 1/12 от 360° (один час)

    // Применяем повороты
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

//вызываем функцию обновления каждую секунду
setInterval(updateTime, 1000);

//вызываем функцию обновления при перезагрузке страницы
updateTime(); 