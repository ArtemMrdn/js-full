//if else
/*
if() {
    //Блок кода выполняемый однакратно, если условие правдиво
} else {
    //Блок кода выполняемый однакратно, если условие ложно
}
*/

let val = 10;
if (val<5) {
    val += 20;
} else {
    val -= 20;
}

console.log(val)  //-10

//if else if
const age = 17;

if (age>18) {
    console.log('Is Adult');
} else if(age>= 12) {
    console.log('Is teenager');
} else {
    console.log('is child')
}

//Использование if в функциях

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b;
}
console.log(sumPositiveNumbers(2,true))