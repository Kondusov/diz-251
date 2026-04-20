// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
let arr_number = [0,1,2,3,4]
let arr_text = ['понедельник','вторник','среда']
let mngArr = ['ноль',['Беляш', 'Михаил', 'Чарли']];
mngArr[1][0] // 'Беляш'
console.log(arr_text)
console.log(arr_text[0])
console.log(arr_text[1])
console.log(arr_text.length)
////// Многомерные массивы
let arr_mn1 = [
    [1,2,3,'привет'],
    1,
    2,
    ['one','two',['это же третий уровень', 'да!']],
    5
];
arr_mn1[1];
arr_mn1[0][3]; //вернет 'привет'
arr_mn1[4]; //вернет 5
arr_mn1[3][2][0]; // это же третий уровень
arr_mn1[3][2][arr_mn1[3][2].length-1]; // да!
