var arr = [];
for (i = 0; i < 7; i++) {
    arr[i] = prompt('number is');
    checkNumber(arr[i]);
}

function checkNumber(a) {
    if (a[0] === '2' || a[0] === '4') {
        console.log(a);
    }
}