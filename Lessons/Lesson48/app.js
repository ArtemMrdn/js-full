// Значение параметров функции по умолчанию

const myFunction = function(value, multiplier = 1) {     //Значение multiplayer по умолчанию будет 1.
    return value * multiplier;
}
console.log(myFunction(5, 2)) //10
console.log(myFunction(5)) //5  // вторым значение будет 1, т.к оно указано по умолчанию

//Вид записи через стрелочную
const myFn = (value1, multiplier1 = 1) => value1* multiplier1;
console.log(myFunction(5, 2)) //10
console.log(myFunction(5)) //5






//Пример с использование параметров функции по умолчанию
const post = {
    namePost: 'Artem',
    boards: 2,
}
// если написать без круглых скобок, то JS подумает, что это начала тела функции, а не обьект, т.е чтобы вернуть обьект неявно нужно использовать круглых скобки перед фигурными
const newPost = (post, addedAt = Date()) => ({     
    ...post,
    addedAt,
});

//Добавление свойства addedAt в новый обьект firstPost.
const firstPost = {
    id: 1,
    author: 'Artemida',
}
console.log(newPost(firstPost)) //мы вызываем функцию newPost и передаем в вызове 1 аргумент обьект firstPost, но второго аргумента нет, то есть будет присвоенно второму аргументу значению по умолчанию addedAt
