/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'
for(const char of str) {
    if(vowels.includes(char)) {     //Если в массиве vowels есть символ char, то тогда увеличиваем vowelsCount на 1
        vowelsCount += 1;
    }
}

// Напишите код здесь

console.log(vowelsCount)
// 9
