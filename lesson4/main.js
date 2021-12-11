'use stric'

var moneyString, income, addExpenses, deposit, mission, period;
// money = 12000;
// amount1 = 500;
// amount2 = 200;
// income = "доход";
// addExpenses = "инТеРнЕТ, такси, коммуналка";
// deposit = "true";
mission = 5000000;
// period = 11;
moneyString = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("У вас есть депозит в банке?");
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1String = prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2String = prompt("Во сколько это обойдется?");
let money = parseInt(moneyString);
let amount1 = parseInt(amount1String);
let amount2 = parseInt(amount2String);

function getExpensesMonth(a, b) {
    return a + b;
} // подсчет расходов

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
console.log(getExpensesMonth(amount1, amount2));
let accamulatedMonth = getAccamulatedMonth(money, getExpensesMonth(amount1, amount2));
console.log(accamulatedMonth);
period = getTargetMonth(mission, accamulatedMonth);
console.log(period);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log("Период равен ", period, " месяцев")
console.log("Цель заработать ", mission, " денег")
addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(","))
let budgetDay = Math.floor(accamulatedMonth / 30);
console.log(budgetDay);
getStatusIncome(budgetDay);