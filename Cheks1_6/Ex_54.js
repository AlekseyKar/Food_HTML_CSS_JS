// Map – это коллекция ключ/значение, как и Object. Map позволяет использовать ключи любого типа.
// Методы и свойства: set (ключ, значение), get (ключ), has (ключ), delete (ключ), clear (), size (), keys (), values ()
// let map = new Map();
// map.set("1", "str1");    // строка в качестве ключа
// console.log( map.get("1") ); // str1


// let obj = {
//   name: "John",
//   age: 30
// };
// let map = new Map(Object.entries(obj));
// console.log( map.get('name') ); // John
// Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ].

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
// Методы и свойства: set (значение), has (значение), delete (значение), clear (), size (), values ()

// function unique(val) {
//   return Array.from(new Set(val));
// }
// let val = ["Hare", "Krishna", "Hare", "Krishna"];


// деструктуризация объекта
// let user = {
//   firstName: "John"
// }
// let { firstName, lastName = "Dov", ...rest } = user;
// console.log( lastName ); 

// lastName = "Dov"; // по умолчанию значение.
// ...rest = { isAdmin: true }; // остальные поля объекта. остаточ параметр.


// деструктуризация массива
// let arr = [1, 2, 3, 4, 5];
// let [a, ,c, ...rest] = arr;
// console.log( a, c, rest );


// obj в json преобразование
// let user = {
//   name: "John"
// }
// let json = JSON.stringify(user);
// let obj = JSON.parse(json);
// console.log( obj );

// console.log(user === obj ); // false


// Date метод для получения даты в виде строки
// let date = new Date();
// console.log( date );
// timestamp = date.getTime();
// console.log( timestamp );
// timestamp показывает количество миллисекунд, прошедших с начала 1970 года. 


// прототипы в javascript нужны для наследования свойств и методов от других объектов.
// Свойство __proto__ должно быть либо объектом, либо null, а строка не может стать прототипом.
// прототипы у объектов
// let user = {
//   skills: ["html", "css", "js"]
// };
// let admin = {
//   name: "John"
// };
// admin.__proto__ = user;
// console.log( admin.skills ); // ["html", "css", "js"]


// при вызове метода вне обьекта происходит потеря контекста.
// func(user2);
// setTimeout(func, 1000, user2);

// bind function используется для привязки контекста к обьекту. 
// let f = func.bind(user, "city", "email");
// f();

// call() вызывает метод передавая аргументы в скобках через запятую.
// func.call(user, 1, 2);


// Apply() вызывает метод передавая аргументы в массиве.
// let arr = ["user2", "email@vera.com"];
// func.apply(user2, arr);


// пример прототипа у конструктора
// function User(name) {
//   this.name = name;
// }
// User.prototype.sayHi = function() {
//   console.log(`Hi, I'm ${this.name}`);  
// }
// let user = new User("John");
// user.sayHi();


//прототипы у примитивов.
//при создании примитива создается обьект обертка с методами для работы с примитивом.
// Array.prototype.myMethod = function () {
//   return this.length;
// };
// let array = [1, 2, 3, 4, 5];
// console.log(array.myMethod());


// пример замыкания 
// function curry(f) { // curry(f) выполняет каррирование
//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };
// }
// // использование
// function sum(a, b) {
//   return a + b;
// }
// let curSum = curry(sum);
// console.log ( curSum(1)(2) ); // 3


// рекурсия это функция которая вызывает сама себя. 
// function pow(x, n) {
  // return (n == 1) ? x : (x * pow(x, n - 1));
// }
// console.log( pow(2, 3) ); // 8
// console.log( pow(2, 4) ); // 16
