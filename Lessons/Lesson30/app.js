'use strict'    //Эта строка должна быть первой в глобальной области видимости или в области видимости функции 


// Запрещает использование необьявленных переменных
function myFn() {
    a = true; // Erro: a is not defined at myFn
    console.log(a);
}

myFn();

console.log(a)