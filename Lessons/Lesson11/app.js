//Статическая и динамическая типизации
/*
Статический вид
String a = 'abc'
int b = 10;
b = 'xyz' // Error
*/

//JavaScript - динамически типизируемый язык
let a = 'abc'  // string
a = 10     // number


//Минусы динамической типизации, 
function b() {
    console.log('Hey there');
}
b();  // hey there

b = 10;

b(); //Error, b is not function 

//const позволяет предотвратить  данную проблему

const c = () => {
    console.log('Hey there');
}

a() // 'Hey there'

a = 10; // Assignment to constant variable

a(); // выполнение не дойдет до этой строки


/*Итог:
1. Все переменные обьявлять переде их использованием
2. Стараться использоваться const везде, где это возможно */