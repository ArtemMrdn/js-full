//Функциональные выражения

const myFunction = function(a, b) {    //справа обьявленние переменной, слева анонимное функциональное выражение
    let c;
    a = a + 1;
    c = b + a;
    return c;
} 
console.log(myFunction(5, 3))



//Функциональное выражение в вызове другой функции

setTimeout(function() {
    console.log('Отложенное сообщение')
}, 2000);