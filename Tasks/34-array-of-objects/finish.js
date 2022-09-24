/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

 const cars = [
    {
      carBrand: 'BMW',
      price: 1200,
      isAvailableForSale: true,
    },
    {
      carBrand: 'Volkswagen',
      price: 1000,
      isAvailableForSale: true,
    },
    {
      carBrand: 'Mercedes',
      price: 800,
      isAvailableForSale: false,
    },
  ]
  
  const newCar = {
    carBrand: 'Tesla',
    price: 200,
    isAvailableForSale: false,
  }
  
  cars.push(newCar)
  
  console.log(cars)
  