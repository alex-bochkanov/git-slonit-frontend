let start = 1;
let end = 100;
let array = [];
//Составляем массив чисел от 1 до 100
for (let i = start; i <= end; i++)
{
    array.push(i);
}

//Функция получения рандомного числа
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
//Получаем секретное число и выводим его в консоль
const secretNumber = getRandomNumber();
console.log(`Секретное число: ${secretNumber} - только это секрет)\n`);

let iterativeFunction = function (array, secretNumber) {

    // Iterate while start not meets end
    while (start <= end) {

        //Находим середину из значений старта и конца чисел
        let middle = Math.floor((start + end) / 2);
        console.log(`Компьютер 2: Пробую ${middle}`);
        
        //Если значение середины массива совпало с секретным числом - выводим "Угадал"
        if (array[middle - 1] === secretNumber) {
            console.log('Компьютер 1: Угадал');
            return true;
        }

        //Если значение середины массива меньше чем секретное число - выводим "Больше"
        else if (array[middle - 1] < secretNumber) {
            //Начинаем итерироваться с середины
            start = middle + 1;
            console.log('Компьютер 1: Больше\n');
        }
        //Если значение середины массива больше чем секретное число - выводим "Меньше"
        else {
            //Заканчиваем итерироваться серединой
            end = middle - 1;
            console.log('Компьютер 1: Меньше\n');
        }

    }
    return false;
}
iterativeFunction(array, secretNumber);