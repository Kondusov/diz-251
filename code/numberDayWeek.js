function dayWeek(number){
   const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Восресенье"];
   return days[number - 1];
}
dayWeek(prompt());