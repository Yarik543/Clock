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
    //Получаем текущее время и считаем для стрелки часа
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 11.5) * 360;
    //поворачиваем относительно текущего времени
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

//вызываем функцию обновления каждую секунду
setInterval(updateTime, 1000);

//вызываем функцию обновления при перезагрузке страницы
updateTime();