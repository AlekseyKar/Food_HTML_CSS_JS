// коллбэк функция
// function callback(data) {
//     console.log(data);
// }
// function data() {
//     return 'data!';
// }
// console.log(data());

// промисы 5.55. на смену колбэкам и асинхронным вызовам пришли промисы. промис имеет два параметра resolve и reject. первый вызывается когда промис завершился успешно, второй вызывается когда ошибка.

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve(1+1) }, 2000);
// });
// promise.then( (res) => { console.log(res) } ); // (err) => { console.log("err", err) }
// console.log( promise );  // object

//вызов переменной мгновенно выводит обьект. параметры STATUS и RESULT.
// status - принимает три значения: pending, fulfilled, rejected.
// RESULT - параметр NULL, если resolve успешен то VALUE, если reject то ERROR.

// 11.00 then/ catch/ finally

// для упрощения записи ввели метод catch. метод улучшает читабельность кода.
// promise
//     .finally( () => {console.log("finally")} ) // выполняется какая-либо операция. используется крайне редко.
//     .then( (res) => res + 1 )
//     .then( (res) => {console.log(res)})   // then обрабатывает resolve
//     .catch( (err) => {console.log("error", err)} )  // catch обрабатывает reject
//Обработка промисов всегда асинхронная, т.к. все действия промисов проходят через «очередь микрозадач (microtask queue)» (термин v8).
// Таким образом, обработчики .then/catch/finally вызываются после выполнения текущего кода.

// 14.23 промисы all/race
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("Prom") }, 2000)} );

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => { reject("Prom2") }, 3000)} ); // промис обрабатывает reject.

// let res = Promise.all([promise, promise2]) // промис отработает после макс времени ( 4 сек )
// console.log( res );  //Promise { <pending> } (ожидание)

// res
//     .then( res => {console.log(res)} ) //  выводится массив из двух промисов.
//     .catch( err => {console.log("err: ", err)} ); // выводится резуьтат ошибки промиса.

// let res = Promise.race( [promise, promise2] ) //выводится резуьтат кратчайшего по времени промиса.

// 19.24 async/await
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve("Prom") }, 2000)} );

// async function asyncFunc() {
//   let res = await promise; // await ожидает когда промис отработает после 2c
//   console.log( res );      // async function => Promise { <pending> }
// }
// console.log( asyncFunc() );

// обработка reject
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => { reject("Prom") }, 2000)} );

// async function asyncFunc() {
//   try {
//     let res = await promise;
//     console.log( res );
//   } catch (err) {
//     console.log("err: ", err);
//   }
// }
// console.log( asyncFunc() );

//event loop бесконеч цикл событий. при вызове какой-либо функции выполняется в отдельном потоке. вызванная функиця попадает в call stack. web api передает callback в очередь микрозадач (microtask queue).
// 


// FETCH возвращает промис. фетч функция имеющая два параметра (url, options).

// для ГЕТ запроса не нужно параметры (options).

// async function fetchData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let data = await res.json();   // преобразование ответа в json. кроме JSON есть TEXT, BLOB, FORM, URLSearchParams.
//   console.log( data );
// }

// POST запрос

// let options = {
//   method: "post", // get, post, put, delete

//   headers говорит об доп информации.
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Vasya",
//     age: 25
//   })
// };

// 102	Processing	"В обработке". Этот код указывает, что сервер получил запрос и обрабатывает его
// 103	Early Hints	"Ранние предупреждения". Этот код указывает, что сервер получил запрос и обрабатывает его, но пока не все данные были получены

// 200	OK"Успешно". Запрос успешно обработан.
// 201	Created	"Создано". Запрос был успешно обработан и новый ресурс был создан.
// 202	Accepted	"Принято". Запрос был успешно обработан, но нет нового ресурса.

// 307	Temporary Redirect	"Временное перенаправление". 3sh
// 308	Permanent Redirect	"Постоянное перенаправление". 3sh
// 400	Bad Request	"Неверный запрос". Запрос не может быть обработан из-за ошибок в запросе.
// 404	Not Found	"Не найден". Сервер не может найти запрашиваемый ресурс. 6 (400 - 405)

// 505	HTTP Version Not Supported	"HTTP-версия не поддерживается". 3sh
// 500	Internal Server Error	"Внутренняя ошибка сервера". 3sh
// 501	Not Implemented	"Не реализовано". 3sh Запрос не может быть обработан из-за ошибок в запросе.
// 502	Bad Gateway	"Плохой шлюз". 3sh/ Сервер не может найти запрашиваемый ресурс.
// 503	Service Unavailable	"Сервис недоступен". 3sh/ Сервер не может найти запрашиваемый ресурс.

// https://developer.mozilla.org/ru/docs/Web/HTTP/Status
