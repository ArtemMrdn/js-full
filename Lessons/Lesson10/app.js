//Ссылочный тип. Object

const objectA = {      //ссылка на обьект
    a: 10,
    b: true,
}

const copyOfA = objectA; //копируем ссылку в другую переменную, т.е обьект остается в памяти в одном месте, а ссылка на него копируется с одной переменной в другую.
 
copyOfA.a = 20;
console.log(objectA.a);  //20

copyOfA.c = 'abc';      //добавление новых свойств
console.log(objectA);   // 'abc'

