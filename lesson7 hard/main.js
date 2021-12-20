let date = {
    today: 'Воскресенье',
}

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < 7; i++) {
    if (week[i] === date.today) {
        document.write(week[i].bold() + "<br />")

    } else {
        if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
            document.write(week[i].italics() + "<br />")
        } else {
            document.write(week[i] + "<br />")
        }
    }
}