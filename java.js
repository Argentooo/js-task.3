// 1 - Напишите функцию, которая может преобразовывать строку в число.

function stringToNumber(string) {
  string = Number(string);
  return string;
}

console.log(stringToNumber("78"));

// 2 - Напишите функцию, которая проверяет число четное или не четное: если четное возвращает true иначе false.

function isEvenNumer(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEvenNumer(26));
console.log(isEvenNumer(27));

/* 3 - Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false`*/

function hasElement(element, array) {
  let result = array.includes(element);
  return result;
}
let names = ["Kana", "Argen", "Hassan", "Walid"];
document.write(hasElement("Walid", names));
document.write(hasElement("Murat", names));
