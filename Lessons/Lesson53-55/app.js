// Формат записи массивов

const myArray = [1, 2, 3]
console.log(myArray);

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

//Оператор сравнения для массивов и обьектов

console.log(myArray === myArray2) //false, потому что это обьекты, а они ссылаются на разные места памяти

const myArray3 = myArray;

console.log(myArray === myArray3) //true, потому что ссылаются на один и тот же массив

//массивы vs обьекты. выглядят одинаково но при выводе в консоль можно заметить ччто прототип массива является Array, а  прототип обьекта является Object