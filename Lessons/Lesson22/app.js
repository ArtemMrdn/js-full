// Обьявление и вызов функции, функция по умолчанию вызывает undefined

function myFn(a, b) {
    let c
    a = a + 1;
    c = a + b;
    return c; //если функция ничего не возвращает, функция по умолчанию вызывает undefined
}

let a = myFn(10, 3)  //Вызов функции
console.log(a)