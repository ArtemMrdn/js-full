// Методы массивов

//push/pop

const myArray = [1, 2, 3];
console.log(myArray);

myArray.push(4)  // добавление нового элемента в конце массив
console.log(myArray); // 1, 2, 3, 4

myArray.pop()         //Удаляет элемент с конца массива и возвращает удаленный элемент массива
console.log(myArray) //1, 2, 3

const removedElement = myArray.pop(); //можно присвоить удаление переменной и потом выводить данное значение.
console.log(removedElement) //2 

//shift\unshift

const myArray2 = [1, 2, 3];
console.log(myArray2)

myArray2.unshift(true)  //добавление элемента в начале массива
console.log(myArray2)   //true, 1, 2, 3

myArray2.shift();     // удаление первого элемента массива
console.log(myArray2) // 1, 2, 3