//Передача значения по сссылке


const personOne = {
    name: 'Bob',
    age: 21,
} 

function increasePerson(person) {     //Функция мутирует внешний обьект
    person.age += 1;
    return person;
}
 
increasePerson(personOne);   //Передача обьекта по ссылке 
console.log(personOne.age); //22
//Но внутри функции не рекомендуется мутировать внешние обьеткты!!!



//Лучше создать копию обьекта


const characterOne = {
    name: 'Bob',
    age: 21,
} 

function increaseCharacter(character) {     //Функция мутирует внешний обьект
    const updatedCharacter = Object.assign({}, character)
    updatedCharacter.age += 1;
    return updatedCharacter;
}
 
const updatedCharacterOne = increaseCharacter(characterOne);
console.log(characterOne.age); //21
console.log(updatedCharacterOne.age); //22