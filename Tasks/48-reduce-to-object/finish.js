/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

function quantitiesByCategories(products) {
  //products - массив
  return products.reduce((qtysByCategories, product) => {       //Формируем новый обьект этот обьект присваивается переменной qtysByCategories(параметр колбек ф-ции), 
    const { category, quantity } = product;                     //эта ф-ция будет вызвана в данном случае 4 раза, т.е product будет менять значение 4 раза,
    //!!!! каждый вызов функции уникален и он не связан с предыдущими функциями,  но тут метод reduce работает таким образом что входное значение параметра qtysByCategories определяется тем что вернула колбек функция на прошлой итерации 

    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity; //присваиваем значение для определеного свойства обьекта  qtysByCategories, мы получаем доступ динамечиски используя [], не через точеччную запись а []
    // а справа мы добавляем текущее кол-во quantity текущем вызове функции product к предыдущему значению если оно есть, если такого ключа в оббьекте qtysByCategories нет, то мы получим 0

    return qtysByCategories; //!!!!поэтому нам важно вызывать обновленный обьект вконце колбек ф-ции возвращать обьект
  }, {}); // начальное значение для qtysByCategories - (пустой обьект)
}

const inputProducts = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
