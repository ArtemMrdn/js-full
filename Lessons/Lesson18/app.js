// JSON - JavaScript Object Notation - формат передачи данных
const post = {
    title: 'My post',
    likesQty: 5,
}

const postStringified = JSON.stringify(post); //конвертация в строку
console.log(postStringified)

let postParse = JSON.parse(postStringified)  //конвертация в обьект
console.log(postParse)
