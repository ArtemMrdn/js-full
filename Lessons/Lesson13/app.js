// Создание и удаление  свойств обьектов
//Добавление свойств
const myCity = {
    city: 'New York',
}

myCity.popular = true;
myCity.country = 'USA';

console.log(myCity) // city: 'New York', popular: true, country: 'USA'

//Удаление свойтсв

delete myCity.country; // delete оператор удаление

console.log(myCity) // city: 'New York', popular: true

//Доступ к значению свойства с использованием скобок bracket notation
const countryPropertyName = 'country'; // с таким именем создасться новое свойство

myCity[countryPropertyName] = 'USA'    // использовали в квадратных скобках, по сути выражение

console.log(myCity) // city: 'New York', popular: true, country: 'USA'