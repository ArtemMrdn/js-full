// Обработка ошибок

//try/catch  -  ловля ошибки, для того чтобы после ошибки код выполнялся дальше 
const fnWithError = () => {
    throw new Error()('Some error')
}
try {                    //в try записывается выполнение блока кода
    fnWithError()  
} catch(error) {         // этот блок выполняется в случае возникновения ошибок в блоке try 
    console.error('error');
    console.log(some.error);
}
console.log('Continue') //выполнения кода продолжится  