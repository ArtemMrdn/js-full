// Как избежать мутаций

//Вариант 1 не работает с вложенных обьекты, ссылка остается та же
const person = {
    name: 'Bob',
    age: 25,
}

const person2 = Object.assign({}, person); //1й аргумент пустой обьект, 2й аргумент все свойства обьекта person, т.е мы копируем в пустой обьект все свойства person

person2.age = 26;

console.log(person.age);     //25
console.log(person2.age);    //26




//Вариант 2, не работает с вложенных обьекты, ссылка остается та же

const character = {
    name: 'Bob',
    age: 25,
}

const character2 = {...character}    //Оператор разделения обьекта на свойтсва "...", 3 точки перед названием переменной, которая ссылается на обьект

character2.name = 'Alice';

console.log(character.name);    //Bob
console.log(character2.name);   //Alice




//Вариант 3, ссылки на вложенные обьекты не сохраняются, то есть, все ссылки будут созданы заного, при этом оригинальный обьект останется неизменным

const individual = {
    name: 'Bob',
    age: 25,
}

const individual2 = JSON.parse(JSON.stringify(individual)); //Конвертация сначала в строку, а потом обратно в обьект

individual2.name = 'Artem';

console.log(individual.name);   //Bob
console.log(individual2.name);  //Artem