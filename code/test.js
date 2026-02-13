// let userName;
// const age = 20 + 10
// userName = prompt('Введите имя')
// if(userName == '' || userName == undefined ){
//     console.log('Введите имя!')
//     userName = prompt('Введите имя')
// }
// else{
//     console.log('ПРивет! '+ userName +" тебе "+ age +" лет")
// }
let userName;
const age = 20 + 10
userName = prompt('Введите имя')
while(userName == '' || userName == undefined ){
    console.log('Введите имя!')
    userName = prompt('Введите имя')
    if(userName != '' && userName != undefined){
        console.log('ПРивет! '+ userName +" тебе "+ age +" лет")
    }
}
