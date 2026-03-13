function summ(a,b){
    return a+b;
}
result1 = summ(1,2);
result2 = summ(3,5);
result3 = summ(0,5);
console.log(result1);
console.log(result2);
console.log(result3);

function hello_ovner(){
    let privet;
    var_hello =['Доброе утро','Добрый день','Добрый вечер']
    user_name = prompt('Введите имя');
    date = new Date();
    hour = date.getHours();
    if(hour>= 6 && hour<=11){
        privet = var_hello[0];
    }
    else if(hour>=12 && hour < 18){
        privet = var_hello[1]
    }
    else{
        privet=var_hello[2];
    }
    console.log(privet +' '+ user_name)
}
hello_ovner();