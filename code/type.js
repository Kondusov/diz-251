a = 5
b = 3
if(a<0 || b<0){
    console.log("отричательное число замечено")
}
else{
    summ = a+b
    console.log("Сумма = " + summ)
}
///////////////////////////////
a = prompt('Введите число a') * 1
b = parseInt(prompt('Введите число b'))
if(a<0 || b<0){
    if(a<0) console.log('слагаемое a'+a+" отричательное число")
    if(b<0) console.log('слагаемое b'+b+" отричательное число")
}
else{
    summ = a+b
    console.log("Сумма = " + summ)
}
/////////////////////////////////////