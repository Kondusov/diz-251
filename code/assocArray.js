let arr_number = [0,1,2,3,4]
let arr_text = ['понедельник','вторник','среда']

let exam_result = { //ассоциативный массив
    'Иван': 5,
    'Елена': 4,
    'Олег': 3
}
console.log(exam_result.Иван);
console.log(exam_result);
exam_result['Ирина'] = 5;
exam_result.Олег = 5;
console.log(exam_result);