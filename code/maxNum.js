function maxNum(a,b,c,d){
    if(a>b&&a>c&&a>d){
        console.log(a);
        return a;
    }
    else if(b>a&&b>c&&b>d){
        console.log(b);
        return b;
    }else if(c>a&&c>b&&c>d){
        console.log(c);
        return c;
    }else{
        console.log(d);
        return d;
    }
}
let num1 = prompt('Введите число 1');
let num2 = prompt('Введите число 2');
let num3 = prompt('Введите число 3');
let num4 = prompt('Введите число 4');
console.log(maxNum(num1,num2,num3,num4));