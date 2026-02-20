let userName = 'Ivan';
if(userName == ''){
    console.log('Введите имя');
}
else if(userName.length < 2){
    console.log('Слишком короткое имя');
}else{
    console.log('Привет ' + userName);
}