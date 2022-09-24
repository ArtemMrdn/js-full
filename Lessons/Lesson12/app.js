//Обьекты - ссылочный тип
//Порядок свойств не имеет значение
const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA',
}

//Получение доступа к значением свойств обьекта
//точечная запись
console.log(myCity.city); // New York
console.log(myCity.popular) // true

//изменение значений свойств
myCity.country = 'Las Vegas' // {country: 'Las  Vegas"}