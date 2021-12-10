var money, income, addExpenses, deposit, mission, period;
money = 12000;
income = "доход";
addExpenses = "инТеРнЕТ, такси, коммуналка";
deposit = "true";
mission = 5000000;
period = 11;
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log("Период равен ", period, " месяцев")
console.log("Цель заработать ", mission, " денег")
addExpenses = addExpenses.toLowerCase();

console.log(addExpenses.split(", "))
let budgetDay = money / 30;
console.log(budgetDay);
let num = 266219;
var res = 1;
while (num > 0) {
    res *= num % 10;
    num = Math.floor(num / 10);
}
tempres = res ** 3;
count = 0;
while (tempres > 0) {
    tempres = Math.floor(tempres / 10)
    count++;
}
console.log(count);
console.log(res);
console.log(res ** 3);
console.log(Math.floor((res ** 3) / 10 ** (count - 2)));