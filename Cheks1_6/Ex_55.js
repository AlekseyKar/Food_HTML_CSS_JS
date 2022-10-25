// class Company {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this.name;
//   }
//   set name(name) {
//     this.name = name;
//   }
// }
// const manager = new Company('Manager', 'IT');
// const account = new Company('Account', 'Accounting');
// console.log(account.getName());


// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   // Статические свойства используются, когда вызываем данные на уровне класса, а не объекта.
//   static sayHello() {
//     return "Admin"; // только примитив. Статические свойства наследуется на дочерний класс.
//   }
// }
// let main = new User("Alex");
// console.log(User.sayHello());

// JS так же имеет ПРИВАТНЫЕ свойства. через #. Используется только внутри класса.

// Защищённые поля имеют префикс _.
// Приватные поля имеют префикс #.
// В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.

// защищенныые свойства
// class Gamer {

//   #age = 18; //свойство приватное. вызвать через метод getName(). Сво-во # наследуется.
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.#age;
//   }
// }
// // let gamer = new Gamer("Alex");
// // console.log(gamer.name);
// // console.log( gamer instanceof Gamer ); // true
// метод instanceof проверяет наследование от класса.