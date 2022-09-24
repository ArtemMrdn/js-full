//Метод map - так же перебол всех елементов, но вызывает новый массив и формирует его из резульатов колбек функции
const myArray2 = [1, 2, 3];
console.log(myArray);

const newArray = myArray2.map(el => console.log(el * 3));       
console.log(myArray2)
console.log(newArray) 