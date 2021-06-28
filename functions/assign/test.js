

// // let func1 = function dosomething() {
// //     console.log('do something');   
// // }

// // func1()

// // console.log(func1);

// // console.log(typeof func1);


// // let add = function sum(num1,num2) {
// //     let result = num1 + num2;
// //     return result;
// // }


// // console.log(add(200,560));






// function x() {
//  console.log('x function');   
// }

// function y() {
//  console.log('y function');   
// }

// function abc(variable1) {
//     variable1()
// }

// abc(x)
// abc(y)

// function abc(x) {   //anonymous function
//     console.log(typeof x);
//     x()
// }
// abc(function () {
//     console.log('i am just an argument');
// })



// let emp = {
//     id: 102,
//     name: 'sonam',
//     salary: 980000,
//     w:function() {
//         console.log(this.name, ' is learning oops');
//     }
// };
// delete emp.id;//deprecated
// //console.log(emp.name);
// //console.log(emp["salary"]);
// //console.log(typeof emp.id);

// console.log(emp);
// emp.w()


// (function () {
//     console.log('Immediately invoked function execution');
// })();


// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// (function () {
//     console.log(`${person.firstName} ${person.lastName}`);
// })(person);



let show = (function () {
    console.log('Anonymous function');
})();