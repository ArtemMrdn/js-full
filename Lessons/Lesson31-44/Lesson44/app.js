// Оператор разделения обьекта на свойства

//Оператор ...

const button = {
    width: 200,
    text: 'Buy',
}

const redButton = {
    ...button,
    color: 'red'
}

console.log(redButton) // скопировали два свойтсва с обьекта button и вставили их обьекту redButton