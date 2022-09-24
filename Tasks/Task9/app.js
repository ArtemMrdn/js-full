const helloWorld = () => {        //Явный возврат результата
    return 'Hello, World' 
}

const helloWorld2 = () => 'Hello, World2';  //Неявный возврат результата

console.log(helloWorld())
console.log(helloWorld2())