// // var income = 5;
// // console.log(income);
// // var arr = ["John", 12, 8.8];

// // function ourHeyWorld() {
// //     console.log("Hey World");
// // }

// // ourHeyWorld();
// // function name(paramenter){
// //     **CODE**
// // }

// // var ourArr = [1,2,3,4,5];
// // console.log("Our: ", JSON.stringify(ourArr));

// // const hour = 20;
// // let output = '';

// // switch (hour) {
// //   case 9:
// //     output = 'Good morning';
// //     break;
// //   // your case here
// //   case 12:
// //     output = 'Good afternoon';
// //     break;
// //   case 20:
// //     output = 'Good evening';
// //     break;
// //   default:
// //     output = 'Hello';
// // }

// // console.log(output);

// // var struct = {
// //   "name" : "John",
// //   "age" : 10,
// //   "dogName" : "lucky"
// // }
// // console.log(struct.name);
// // var lookup = {
// //     'adam' : 1,
// //     'lyly' : 2,
// //     'panha': 3,
// //     'john' : 4,
// //     'ponleur' : 5,
// // };
// // function customerNumber(val) {
// //   var result = " ";

// //   if (lookup.hasOwnProperty(val)){
// //     result = lookup[val];  
// //     return result;
// //   } else {
// //     return "Not found";
// //   }
// // }

// // console.log(customerNumber("ada"));
// const character = "#";
// const count = 10;
// let rows = [];
// let rowsI = [];
// function printPyramid(numberRow, numberCount) {
//   return " ".repeat(numberCount-numberRow) + "#".repeat(2*numberRow -1);
// }
// // Test your function
// for (let i = 1; i <= count; i++){
//   // pyramid 
//   rows.push(printPyramid(i,count));
//   // inverted pyramid
//   rowsI.unshift(printPyramid(i,count));
// }
// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }
// console.log(result);

// let resultI = ""

// for (const row of rowsI) {
//   resultI = resultI + row + "\n";
// }

// console.log(resultI);

// object
const car = {
  brand: "Hyundai",
  model: "Verna",
  info: {
    price: [1200000, , 1300000],
    color: "white"
  }
};

// Nested destructuring with renamed variables
const {
  brand: carBrand = "BMW",
  info: { price: carPrice, color: carColor }
} = car;

console.log(carBrand); // "Hyundai"
console.log(carPrice); // 1200000
console.log(carColor); // "white"
//Rename && Default value
const {
	info : {price : [price1, price2 = "2000000",price3]}
} = car
console.log(price1);
console.log(price2);
console.log(price2);