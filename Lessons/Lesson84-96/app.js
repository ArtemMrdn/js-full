class Comment {               
    constructor(text) {       //конструктор вызывается ТОЛЬКО тогда когда вы создаете новый экземпляр обьекта
        this.text = text      //this - переменная которая указывает на экземпляр класса(Comment)
        this.votesQty = 0     //начальное значение голосов 0
    }

    upvote(){                // остальные методы такие как upvote будут наследоваться каждым экземпляром класса комментарий 
        this.votesQty += 1
    }
    static mergeComments(first, second) {     //Статический метод, он находится в кострукторе, но он не будет доступен на уровне экземпляров класса Comment, но он доступен как метод самого Comment.mergeComments
        return `${first} ${second}`   
    }
}


Comment.mergeComments('First comment', 'Second comment')
const firstComment = new Comment ('First comment')    //создание экземпляра? c помощью такого синтаксиса, вызывается функция constructor, мы должны передать текастовое значение, для свойства text
// Проверка пренадлежности 
firstComment instanceof Comment   //true
firstComment instanceof Object    // true 


 
/*                                                                          Цепочка прототипов
                                                                    firstComment => Comment => Object
firstComment является экземпляром Comment(комментарий это class), Comment в свою очередь наследует все методы обьектов, который является глобальным классом в JS*/




//Проверка пренадлежности классу
firstComment instanceof Comment // true
firstComment instanceof Object  // true



// Вызов метода upvote, 
firstComment.upvote()
console.log(firstComment.votesQty) //1
firstComment.upvote()
console.log(firstComment.votesQty) //2     методы можно вызывать многократно



//Проверка пренадлежности свойств экземпляру обьекта

firstComment.hasOwnProperty('text')     //true
firstComment.hasOwnProperty('votesQty') //true
firstComment.hasOwnProperty('upvote')   //false    это не собсвтенный метод обьекта firstComment этот метод наследуется от родительского класса Comment
firstComment.hasOwnProperty('hasOwnProperty') //false 


//создание нескольких экземпляров 
const secondComment = new Comment ('secondComment') 
const thirdComment =  new Comment ('thirdComment')




//Расширение других классов

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
myArray.sum()