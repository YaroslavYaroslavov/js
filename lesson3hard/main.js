var lang_array = [];
lang_array['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var lang = 'en';
console.log(lang_array[lang]);
if (lang === 'ru') {
    console.log(lang_array['ru']);
}
if (lang === 'en') {
    console.log(lang_array['en']);
}
switch (lang) {
    case ('ru'):
        console.log(lang_array['ru']);
        break;
    case ('en'):
        console.log(lang_array['en']);
        break;
}