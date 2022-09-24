//цикл for in - перебор всех свойств обьектов 

const myObject = {
    x: 10,
    y: true,
    z: 'adc'
}
for(let key in myObject) {          //key название каждого  свойства обьекта
    console.log(key, myObject[key])
} 



//forEach для обьектов
Object.keys(myObject).forEach(key => {     //keys - получение всех ключей обьекта в виде масива
    console.log(key, myObject[key])        //myObject[key] - доступ к значению определенного свойтсва обьекта (массив свойств)
})

Object.values(myObject).forEach(values => { //values - получение всех значений свойтсв обьекта в виде массива (массив значений)
    console.log(values)
})



//цикл for of - перебор всех елементов
const myString = 'Artem';

for(let letter of myString) {
    console.log(letter); //вывод каждого символа с новой строки из myString 
}

