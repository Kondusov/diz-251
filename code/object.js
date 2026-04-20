// они же ассоциативные массивы
// https://doka.guide/js/object/
let obj1 = {
    0: 'понедельник',
    1: 'вторник',
    3: 'среда',
    'cht': 'четверг',
    'summ': function(){console.log('Это метод объекта'+this.constructor.name)} //метод объекта


};

obj1[0] // 'понедельник'
obj1.cht // 'четверг'
obj1['cht'] // 'четверг'
obj1['5'] = 'пятница';
obj1['asubb'] = 'суббота';
console.log(obj1);