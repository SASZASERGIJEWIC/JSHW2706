//                                            task1

// let user = {
//     name: "John",
//     age: 30
//   };
//   if (Object.keys(user).length !== 0) {
//     if ("age" in user) { 
//       console.log("Объект содержит ключ 'age'");
//     } else {
//       console.log("Объект не содержит ключа 'age'");
//     }
//   } else {
//     console.log("Объект пустой");
//   }

//                                            task2

// let productname = {
//     productname: 'OpTyBiR',
//     productprice: '9,99$'
// }
// console.log("Название продукта: ", productname);
// console.log("Цена продукта: ", productprice);

//                                            task3

// let product = {
//     productname: 'OpTyBiR',
//     productprice: '9,99$'
// }
// product.productquantity = '15',
// product.productquality = '*****';
// console.log("Название продукта: ", product.productname);
// console.log("Цена продукта: ", product.productprice);
// console.log("Количество продукта: ", product.productquantity);
// console.log("Качество продукта: ", product.productquality);

//                                            task4

// let product = {
//     productname: 'OpTyBiR',
//     productprice: '9,99$'
// }
// product.productquantity = '15',
// product.productquality = '*****';

// delete product.productquality;

// console.log(product.productname);
// console.log(product.productprice);
// console.log(product.productquantity);
// console.log(product.productquality);

//                                            task5 

// let menu = {
//     width: 200, 
//     height: 300,
//     title: "my menu"
// }
// for (let key in menu) {
//     if (typeof menu[key] === 'number') {
//       menu[key] *= 2;
//     }
//   }
//   console.log(menu);

//                                            task6

// function getNum (a, b) {
//     if (a > b) {
//         console.log('1');
//     } 
//     if (a < b) {
//         console.log ('-1');
//     } 
//     return ('0');   
// }
// let num1 = Number(prompt('enter your number'))
// let num2 = Number(prompt('enter your number'))
// console.log(getNum(num1, num2));

//                                            task7

// function getNum (a, b) {
//         if (a % 2 === 0 && b % 2 === 0) {
//             return a * b;
//         }else if (a % 2 !== 0 && b % 2 !== 0) {
//             return a+b;
//         }else if (a % 2 !== 0 && b % 2 === 0) {
//             return a; 
//         }else if (a % 2 === 0 && b % 2 !== 0) {
//             return b; 
//     }
// }
// console.log(getNum(6, 8)); 
// console.log(getNum(1, 3)); 
// console.log(getNum(5, 8)); 
// console.log(getNum(12, 15));

