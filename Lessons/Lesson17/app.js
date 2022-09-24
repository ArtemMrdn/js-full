// Методы обьекта
//Методы свойства обьекта, которые содержат функции
const myCity = {
    city: 'New York',
    cityGreeting() {               //cityGreeting метод myCity
        console.log('Greetings!')
    }
}

myCity.cityGreeting();              //вызов метода
console.log(myCity.city);              //доступ к значению свойства