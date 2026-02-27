let day = prompt('Введите номер дгя недели');
// let day = 5;
let arr_week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
for(i=0; i<=arr_week.length-1; i++){
    if(i == day){
        console.log('Сегодня '+ arr_week[i-1])
    }
}