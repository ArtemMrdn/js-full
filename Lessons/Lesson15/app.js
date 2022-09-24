//Обьекты использование переменных

const name = 'Artem';
const postQty = 23;

const userProfile = {
    name,  //имя свойства совпадает с именем переменной, в JS есть возможность сокращенной записи при формировании таких обьектов
    postQty: postQty, // тоесть вместо того чтобы написать дважды одно и тоже имя, можно сократить как в свойстве выше
    hasSignedAgreement: false,
}

console.log(userProfile)