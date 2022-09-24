//Деструктуризация обьектов - обьявленние новых переменных и присваивание значений на основе значений обьекта
const userProfile = {
    name2: 'Artem',
    commentsQty: 23,
    hasSignedAgreement: false,
}
const {name2, commentsQty} = userProfile;
const {hasSignedAgreement} = userProfile;

console.log(name2) // Artem
console.log(commentsQty) // 23


//деструктуризация массивов
const fruits = ['Banana', 'Apple'];

const [fruitOne, fruitTwo] = fruits; // используя такой синтаксис JS возьмет первый элемент с индексом 0 в массиву fruits и значение этого элемента будет присвоенно  первой переменной fruitOne

console.log(fruitOne); // Banana
console.log(fruitTwo); // Apple 


//деструктуризация в функциях
const userInfo = ({name2, commentsQty}) => {      //мы выполняем деструктуризацию свойств из обьекта userProfile, мы хотим взять свойства с именами name2, commentsQty из значения которые будут переданы в вызове функции
    if (!commentsQty) {                           //создать новые переменные с названиями name2, commentsQty и присвоить им соответствуюзщие значения, значения свойств name2, commentsQty из обьекта
        return `User ${name2} has no comments`    
    }
    return `User ${name2} has ${commentsQty} comments`
}
userInfo(userProfile); // User Artem has 23 comments. Мы передаем обьект