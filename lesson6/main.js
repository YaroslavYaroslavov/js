"use strict";

const isNumber = (x) => !isNaN(x);

const input = () => {
    const b = 56;
    let counter = 10;

    return function func() {
        const a = prompt("Введите число");
        if (a === null) {
            alert("Игра окончена");
        } else {
            !isNumber(parseInt(a)) && func();
            if (isNumber(a) && counter != 1) {
                if (a > b) {
                    counter--;
                    alert(`Загаданное число меньше, осталось попыток ${counter}`);
                    func();
                } else if (a < b) {
                    counter--;
                    alert(`Загаданное число больше, осталось попыток ${counter}`);
                    func();
                } else if (parseInt(a) === b) {
                    alert("Вы угадали!");
                }
            } else {
                const end = confirm("Попытки закончились. Хотите повторить еще?");
                if (end) {
                    counter = 10;
                    func();
                } else {
                    alert("Пошел нахуй");
                }
            }
        }
    };
};

input()();