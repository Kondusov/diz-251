let arr1 = ["яблоко", "банан", "апельсин", "груша",
  "картофель", "капуста", "морковь", "огурец","абрикос","banana"];

  function strSearch(symbol_use, arr){
    for(let i=0; i<arr.length;i++){
        if(symbol_use == arr[i][0]){ // str.charAt(0)
            console.log(arr[i]);
        }
    }
  }
  // вариант функции сравнения с последней буквой в слове
  function strSearchLastSMB(symbol_use, arr){
    for(let i=0; i<arr.length;i++){
        if(symbol_use == arr[i][arr[i].length-1]){ // str.charAt(0)
            console.log(arr[i]);
        }
    }
  }
  let symbol_user = prompt('Введите первую букву');
  let symbol_user_last = prompt('Введите последнюю букву');
  strSearch(symbol_user, arr1);
  strSearchLastSMB(symbol_user_last, arr1);