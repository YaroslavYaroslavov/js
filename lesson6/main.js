"use strict";

const isNumber = (x) => !isNaN(x);

const checkInput = () => {
    const b = 56;
    let counter = 1;
    const func = (a) => {
        if (isNumber(a) && counter < 10) {
            if (a > b) {
                alert(`Загаданное число меньше, осталось попыток ${10 - counter}`);
                // counter++
                input();
            } else if (a < b) {
                alert(`Загаданное число больше, осталось попыток ${10 - counter}`);

                // counter++
                input();
            } else if (a === b) {
                alert("Вы угадали!");
            }
            return counter++;
        } else {
            const end = confirm("Попытки закончились. Хотите повторить еще?");
            if (end) {
                counter = 1;
                input();
            } else {
                alert("Пошел нахуй");
            }
        }
    };
    return func;
};

const input = () => {
    const a = prompt("Введите число");

    if (a === null) {
        alert("Игра окончена");
    } else {
        !isNumber(parseInt(a)) && input();
        checkInput()(parseInt(a));
    }
};

input();