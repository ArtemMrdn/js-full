//Вложенные свойтсва
const myCity = {
    city: 'New York',
    info: {                //Вложенный обьект
        isPopular: true,
        country: 'USA',
    }
}

console.log(myCity.info.isPopular); // true

delete myCity.info['isPopular'] //запись через квадратные скобки(лучше использовать запись квадратными скобками только тогда, когда в квадртных скобках есть какое-то выражение, например название переменной), 
console.log(myCity) //у обьекта останеться 2 свойтсва, но у свойтсва info останется только одно свойство country, т.к isPopular мы удалили