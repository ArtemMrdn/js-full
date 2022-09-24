//Чтение значений массива

const myArray = [1, 2, 3];
console.log(myArray);

console.log(myArray[0]) // дает на выходе первого  элемента в массиве т.е 1
console.log(myArray[1]) // 2

console.log(myArray.length) // 3, обновляется автоматически

// изменение значения свойства length самостоятельно
myArray.length = 7;
console.log(myArray) // добавились 4 новых пустых слота

//изменение элментов массива
myArray[2] = true;
console.log(myArray)