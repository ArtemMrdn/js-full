//Колбэк функции, смысл колбэк функции в том что она вызывается внутри другой функции. Пример:

function printMyName() {
    console.log('Artem')
}
setTimeout(printMyName, 2000);