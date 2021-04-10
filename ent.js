let enterPassword = prompt("Введите пароль");
let correctPassword = "qwerty";
if  (enterPassword === correctPassword) {
    console.log("Пароль верный");
} else if (enterPassword === null || correctPassword === "") {
    console.log("Отменено"); 
} else {
    console.log("Пароль не верный");
}