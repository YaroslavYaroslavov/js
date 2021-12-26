let collect = document.querySelectorAll('.books')
let elem = document.querySelectorAll('.book')
collect[0].appendChild(elem[1])
collect[0].appendChild(elem[0])
collect[0].appendChild(elem[4])
collect[0].appendChild(elem[3])
collect[0].appendChild(elem[5])
collect[0].appendChild(elem[2])
let ul2 = elem[0].querySelectorAll('li');
ul2[10].parentNode.insertBefore(ul2[2], ul2[10]);
ul2[7].parentNode.insertBefore(ul2[8], ul2[7]);
ul2[4].parentNode.insertBefore(ul2[6], ul2[4]);
ul2[6].parentNode.insertBefore(ul2[8], ul2[6]);
let ul5 = elem[5].querySelectorAll('li');
ul5[10].parentNode.insertBefore(ul5[8], ul5[10]);
ul5[8].parentNode.insertBefore(ul5[5], ul5[8]);
ul5[2].parentNode.insertBefore(ul5[9], ul5[2]);
ul5[2].parentNode.insertBefore(ul5[3], ul5[2]);
ul5[2].parentNode.insertBefore(ul5[4], ul5[2]);
let background = document.querySelector('body');
background.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');
(elem[2].querySelectorAll('li')[8]).insertAdjacentHTML('beforeend',
    '<li>Глава 8: За пределами ES6</li>');