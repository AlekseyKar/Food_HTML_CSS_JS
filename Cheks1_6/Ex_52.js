// NaN — зарезервированное в JavaScript слово, обозначающее, что попытка выполнить арифметическую операцию с не числовой строкой вернет в результате NaN (Не число): var x = 100 / "Apple";
// Infinity. Значение Infinity можно получить: В результате деления числа на 0.
// parseint() преобразует строку в число. Пример: parseInt("123"); // 123
// parsefloat() преобразует строку c запятой в число. Пример: parseFloat("123.45"); // 123.45
// isNaN() проверяет, является ли переданное значение NaN. Пример: isNaN(NaN); // true

// bigint позволяет работать с целыми числами больше 2147483647. Пример:
// let a = BigInt(123123123123123123123); // console.log(a); // 123123123123123123123

//null и undefined представляют пустое значение.
//typeof null возвращает "object". это св

//object представляют объекты в виде ключей-значений.
// ключ в обьекте это строка. значение может что угодно. Пример:
// let obj = {
//   name: "John",
// };
// изменение свойтв обьекта.
// obj.name = "alex";

// obj clone
// const obj3 = { ...obj2 };

//obj keys
// const keys = Object.keys(obj);

// методы объекта
// Object.keys(obj) — возвращает массив ключей объекта.
// Object.values(obj) — возвращает массив значений объекта.
// как получить символ из строки?
// const str = "Hello"; // str[0] // H

// конструктор у обьекта
// Конструктор является функцией, которая вызывается для создания объекта. Конструктор вызывается с помощью ключевого слова new. Пример:
// function User(name, age) {
//   this.name = name;
//   this.age = age;

  // return {}   // возвращает объект. остальное не выполняется.
// }
// const user = new User("John", 30);
// console.log(user);

// глубокое копирование обьекта. 
// let user = {
//   name: "Иван",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// глубокое копирование обьекта в новый обьект методом JSON.parse(JSON.stringify(obj))
// let main = JSON.stringify(user);
// let copy = JSON.parse(main);

// Мы можем реализовать глубокое клонирование, используя рекурсию. Или использовать метод _.cloneDeep(obj) из JavaScript-библиотеки lodash.

// let str = "Hello World";
// console.log( str.length ); // 11
// console.log( str.toUpperCase() ); // HELLO WORLD
// console.log( str.indexOf("o") ); // 4

// параметры метода slice() определяют позицию и длину подстроки. Пример: 
// console.log( str.substring(1, 5) ); // ello

// console.log( str.repeat(2) ); // Hello WorldHello World
// console.log( str.replace("World", "Universe") ); // Hello Universe
// console.log( str.includes("World") ); // true

// substr() возвращает подстроку. метод substr() принимает два параметра: позицию и длину. принимает отрицательные значения.
// console.log( str.substr(1, 5) ); // ello
// сравнение строк
// console.log(str === "Hello World"); // true
