let dayNumber = Number(prompt('Введите номер дня недели (от 1 до 7)'));
let dayName;
console.log(typeof(dayNumber));
switch (dayNumber) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда"; // Этот блок выполнится
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  default:
    dayName = "Выходной или неверный день";
}

console.log(dayName); // Выведет: Среда
