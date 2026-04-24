//чётные числа
let len = parseInt (prompt("Введите количество чисел для массива: "))
let arr_c = []
for (let i=0; i<len; i++){
    arr_c[i] = parseInt (prompt("Введите число под номером ", i,":"))
} 
function cht(arr_с){
    for (let i=0; i<len; i++){
        if (arr_c[i] % 2 !== 0){
            return false
            }
    } 
    return true
}
 if (cht()== true){
    console.log("В списке", arr_c," все числа чётные")
 }
    else {
        console.log("В списке", arr_c, " eсть нечётное число")
    }