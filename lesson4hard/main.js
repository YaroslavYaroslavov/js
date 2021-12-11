let input = "                                                                       абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function checkInput(a) {
    if (typeof(a) === "string") {
        console.log('В качестве аргумента была задана строка');
        a = a.trim();
        if (a.length > 30) {
            a = a.substring(0, 30);
            console.log(a + "...");
        } else console.log(a);
    }
}
checkInput(input);