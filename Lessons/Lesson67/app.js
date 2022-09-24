// switch
/*
switch(Выражение) {
    case A:
        //действия если выражение  === А
        break                     
    case B:
        //действия если выражение  === B
        break
    default:
        //Действия по умолчанию
}
*/ 

const month = 2;

switch(month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')    
        break                       //Если вариант правильный  и написано break то инструкция остановиться, без этого слова перебор будет продолжаться
    case 2:
        console.log('Февраль')
        break
    default:                        // дефолт значение если все кейсы ложные
        console.log('Это не зимний месяц')
}