/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b = 2
let d = 15

function myFn1(a) {
  let b
  let d = 10
  myFn2(b)
}

function myFn2(a) {
  let c = 5
  console.log(a, b, c, d)
}

myFn1()
/* а - будет undefined, потому что мы вызываем myFn2 с параметром (b) в функции myFn1, в функции myFn1 уже обьявлена переменная b, со значением undefined, 
т.е мы передаем переменной а значение undefined */