import sumNumbers from './moduleOne.mjs'   // импорт из другого файла
import {name, mult as multNumbers} from './moduleOne.mjs' // импорт нескольких, имена должны совпадать, as - переименовывание переменной
const res1 = sumNumbers(10, 2);
console.log(res1);
console.log(multNumbers(7, 10));
console.log(name)


    