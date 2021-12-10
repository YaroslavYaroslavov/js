'use stric'

var money, income, addExpenses, deposit, mission, period;
// money = 12000;
// income = "доход";
// addExpenses = "инТеРнЕТ, такси, коммуналка";
// deposit = "true";
mission = 5000000;
// period = 11;
money = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("У вас есть депозит в банке?");
let expenses1 = prompt("Введите обязательную статью расходов?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount1 = prompt("Во сколько это обойдется?");
let amount2 = prompt("Во сколько это обойдется?");
budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);
period = Math.ceil(mission / budgetMonth);
console.log(period);
// console.log(typeof(money));
// console.log(typeof(income));
// console.log(typeof(deposit));
// console.log(addExpenses.length);
// console.log("Период равен ", period, " месяцев")
// console.log("Цель заработать ", mission, " денег")
//addExpenses = addExpenses.toLowerCase();
//console.log(addExpenses.split(","))
let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);
if (budgetDay < 0) {
    console.log("Что то пошло не так");
}
if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
}
if (budgetDay >= 600 && budgetDay < 1200) {
    console.log("У вас средний уровень дохода");
} else {
    console.log("У вас низкий уровень дохода");
}