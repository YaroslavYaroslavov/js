'use stric'

var money, income, addExpenses, deposit, mission, period;
mission = 5000000;

// addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
// deposit = confirm("У вас есть депозит в банке?");
function isNumber(a) {
    return !isNaN(parseFloat(a))
}

function start() {
    do { money = prompt('Ваш месячный доход?') }
    while (!isNumber(money))
}

function getExpensesMonth() {
    sum = 0;
    for (i = 0; i < 2; i++) {
        prompt('Введите обязательную позицию затрат')
        sum += +prompt('Во сколько это обойдется?')
    }
    return sum;
}



function getAccamulatedMonth(a, b) {
    return a - b;
} // свободные деньги на месяц 

function getTargetMonth(a, b) {
    return Math.ceil(a / b);
} //цель будет достигнута

function getStatusIncome(a) {
    if (a < 0) {
        console.log('Что-то пошло не так')
    } else
    if (a <= 600) {
        console.log('У вас низкий доход')
    } else
    if (a > 600 && a <= 1200) {
        console.log('У вас средний уровень дохода')
    } else console.log('У вас высокий уровень дохода')
} // ваш статус

start();
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses = addExpenses.toLowerCase()
deposit = confirm("У вас есть депозит в банке?");
expensesAmount = getExpensesMonth();
console.log(expensesAmount);
let accamulatedMonth = getAccamulatedMonth(money, expensesAmount);
console.log(accamulatedMonth);
period = getTargetMonth(mission, accamulatedMonth);
console.log(period);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
if (period > 0) {
    console.log("Цель будет достигнута через ", period, " месяцев")
} else console.log("Цель не будет достигнута");
console.log("Цель заработать ", mission, " денег");
console.log(addExpenses.split(","))
let budgetDay = Math.floor(accamulatedMonth / 30);
console.log(budgetDay);
getStatusIncome(budgetDay);