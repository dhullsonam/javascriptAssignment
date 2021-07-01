// // let emp = new Object();
// // emp.id = 123;
// // emp.name = 'sonam';

// // emp.doWork = function() {
// //     console.log(this.name, ' is working');
// // }

// // console.log(emp);
// // console.log(typeof emp);
// // emp.doWork()


// let emp1 = {
//     id :22,
//     name :'sonam'
// }

// let emp2 = {}      // creating a copy of an object

// emp2.id = emp1.id;
// emp2.name = emp1.name;
// emp2.name = 'jj';

// console.log(emp1.name);
// console.log(emp2.name);


var msg1 = {
    to: 9675893566,
    msg: 'hello how are you?',
    delivered: true,
    read: false,
    from: 9508674658
}
//for (property in msg1)
  //  console.log(property + " : " + msg1[property])
// console.log(msg1['delivered'])
// var keyX = 'delivered'
// console.log(msg1[keyX])

// adding in pre exiting object 
msg1.age = 23
for (property in msg1)
    console.log(property + " : " + msg1[property])

// deleting something from pre exiting object 
delete msg1.read
for (property in msg1)
    console.log(property + " : " + msg1[property])

console.log(msg1.from);


